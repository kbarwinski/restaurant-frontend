import {
  DataGrid,
  GridAddIcon,
  GridColDef,
  GridEditCellProps,
  GridRowsProp,
  GridToolbarContainer,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export interface CrudProps {
  columns: GridColDef[];
  data: GridRowsProp;
  setData: (data: any) => void;
  totalRows: number | undefined;
  setPagination: (pagination: any) => void;
  serverPagination: boolean;
  omitGettingItems?: boolean;
  deleteOnly?: boolean;
  getItems: () => any;
  createItem: (item: any) => any;
  deleteItem: (id: any) => any;
  updateItem: (id: any, item: any) => any;
  pagination: {
    page: number;
    size: number;
    pagingOptions: number[];
  };
}

export default function CrudList(props: CrudProps) {
  const {
    columns,
    data,
    serverPagination,
    totalRows,
    setData,
    setPagination,
    getItems,
    createItem,
    deleteItem,
    updateItem,
    pagination,
    omitGettingItems,
    deleteOnly,
  } = props;

  const [rowCountState, setRowCountState] = useState(totalRows);

  const [sortModel, setSortModel] = useState<any>([
    { field: "actions", sort: "asc" },
  ]);

  const handleAdd = async (item: any) => {
    setData((oldRows: any[]) =>
      oldRows.map((x: any) => {
        if (x.id === item.id) {
          x = item;
        }
        return x;
      })
    );

    const res = await createItem(item);
  };

  const handleDelete = async (id: any) => {
    const res = await deleteItem(id);
    setData((oldRows: any[]) =>
      oldRows.filter((x: { id: any }) => x.id !== id)
    );
  };

  const crudColumns: GridColDef[] = [
    ...columns,
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <>
          {params.row.emptyRow && deleteOnly !== true && (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleAdd(params.row)}
            >
              Save
            </Button>
          )}
          {!params.row.emptyRow && (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
          )}
        </>
      ),
      valueGetter: (params: GridValueGetterParams) => {
        return params.row.emptyRow ? -1 : 1;
      },
      sortComparator: (v1, v2, param1, param2) => {
        return v1 - v2;
      },
    },
  ];

  useEffect(() => {
    if (omitGettingItems) return;
    const getCrudItems = async () => {
      return await getItems();
    };

    getCrudItems()
      .then((x) => {
        setData(x.data);
      })
      .catch(console.error);

    if (serverPagination) {
      setRowCountState((prevRowCountState) =>
        totalRows !== undefined && data.length > 0
          ? totalRows
          : prevRowCountState
      );
    }
  }, [setData, pagination]);

  const handleRowUpdate = async (params: GridEditCellProps) => {
    const updatedRow = { ...params };
    const { id, ...item } = updatedRow;
    try {
      let res = null;
      if (!item.emptyRow) {
        res = await updateItem(id, item);
      }

      setData((oldRows: any[]) =>
        oldRows.map((x: any) => {
          if (x.id === item.id) {
            x = item;
          }
          return x;
        })
      );

      return updatedRow;
    } catch (error) {
      console.log(error);
    }
  };

  const addEmptyRow = () => {
    const emptyRow = {
      id: Math.floor(Math.random() * 100000),
      ...columns.reduce((acc: any, col) => {
        acc[col.field] = "";
        return acc;
      }, {}),
      emptyRow: true,
    };
    setData((oldRows: any) => [...oldRows, emptyRow]);
    setSortModel([{ field: "actions", sort: "asc" }]);
  };

  return (
    <DataGrid
      rows={data}
      rowCount={rowCountState}
      columns={crudColumns}
      paginationModel={{ page: pagination.page, pageSize: pagination.size }}
      onPaginationModelChange={(model) => {
        setPagination({
          page: model.page,
          size: model.pageSize,
          pagingOptions: pagination.pagingOptions,
        });
      }}
      sortModel={sortModel}
      paginationMode={props.serverPagination ? "server" : "client"}
      onSortModelChange={(model) => {
        setSortModel(model);
      }}
      components={{
        Toolbar: () => (
          <>
            {deleteOnly !== true && (
              <GridToolbarContainer>
                <Button
                  color="primary"
                  startIcon={<GridAddIcon />}
                  onClick={addEmptyRow}
                >
                  Add new
                </Button>
              </GridToolbarContainer>
            )}
          </>
        ),
      }}
      processRowUpdate={handleRowUpdate}
      pageSizeOptions={pagination.pagingOptions}
    />
  );
}
