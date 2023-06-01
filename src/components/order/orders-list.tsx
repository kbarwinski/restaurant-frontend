import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { OrderApi, PaginationArgs } from "../../api/order";
import { orderStatus } from "../../constants/enumTranslations";
import { Button, Menu, MenuItem } from "@mui/material";



export default function DataTable() {
  const [data, setData] = useState<GridRowsProp>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const [pagination, setPagination] = useState<PaginationArgs>({
    page: 0,
    size: 10,
    sort: "orderDate,DESC",
  });

  const ChangeStatusButton = ({ orderId }: { orderId: string }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleStatusChange = async (status: string) => {
      const res = await OrderApi.changeOrderStatus(status,orderId);
      res && setRefresh(!refresh);
      handleClose();
    };
  
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Change Status
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          
        <MenuItem onClick={() => handleStatusChange("PENDING")}>{orderStatus.PENDING}</MenuItem>
        <MenuItem onClick={() => handleStatusChange("IN_PROGRESS")}>{orderStatus.IN_PROGRESS}</MenuItem>
        <MenuItem onClick={() => handleStatusChange("COMPLETED")}>{orderStatus.COMPLETED}</MenuItem>
  
        </Menu>
      </div>
    );
  };
  
  const handleDelete = async (orderId: string) => {
    const res = await OrderApi.deleteOrder(orderId);
    res && setRefresh(!refresh);
  };
  
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "orderDate", headerName: "Order Date", flex: 3 },
    { field: "completionDate", headerName: "Completion Date", flex: 3 },
    { field: "totalPrice", headerName: "Kwota zamówienia", flex: 2 },
    {
      field: "status",
      headerName: "Status",
      flex: 2,
      valueGetter: (params: GridValueGetterParams) =>
        `${orderStatus[params.row.status as keyof typeof orderStatus]}`,
    },
    {
      field: "user",
      headerName: "Klient",
      flex: 4,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.user.contact.name || ""} ${
          params.row.user.contact.surname || ""
        },
    ${params.row.user.email || ""},
    ${params.row.user.contact.phoneNumber || ""}`,
    },
    {
      field: "address",
      headerName: "Adres",
      flex: 4,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.address.streetName || ""} ${
          params.row.address.streetNumber || ""
        },
    ${params.row.address.aptNumber || ""},
    ${params.row.address.cityName || ""}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 3,
      renderCell: (params) => (
        <>
          <Button variant="outlined" color="primary" onClick={()=>handleDelete(params.row.id)}>
            Delete
          </Button>
          <ChangeStatusButton orderId={params.row.id} />
        </>
      ),
    },
  ];

  

  useEffect(() => {
    const getProducts = async () => {
      return await OrderApi.getOrders(pagination);
    };

    getProducts()
      .then((x) => {
        setData(x.data.map((x:any) => ({ ...x, id: x.publicId })));
      })
      .catch(console.error);
  }, [pagination, refresh]);

  return (
    <div style={{ width: "90%", alignSelf: "center" }}>
      <DataGrid
        rows={data}
        columns={columns}
        paginationModel={{ page: pagination.page, pageSize: pagination.size }}
        onPaginationModelChange={(model) => {
          setPagination({
            page: model.page,
            size: model.pageSize,
            sort: pagination.sort,
          });
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
