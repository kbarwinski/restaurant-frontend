import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { PageContainer } from "../../components/shared/page-container-styled";
import {
  GridColDef,
  GridExpandMoreIcon,
  GridRowsProp,
  renderActionsCell,
} from "@mui/x-data-grid";
import CrudList from "../../components/shared/crud-list";
import { ProductApi } from "../../api/product";
import { useState } from "react";
import IngredientCrudPage from "./ingredient-crud";
import { ModalFormContainer } from "../../components/shared/form-styled";
import IngredientItemCrudPage from "./ingredientitem-crud";

enum Category {
  MAIN_DISH = "Main Dish",
  SOUP = "Soup",
  SIDE_DISH = "Side Dish",
  DESSERT = "Dessert",
  BEVERAGE = "Beverage",
  ALC_BEVERAGE = "Alcoholic Beverage",
}

function ProductCrudPage() {
  const [data, setData] = useState<GridRowsProp>([]);
  const [modalData, setModalData] = useState<any>({} as any);

  const [pagination, setPagination] = useState<any>({
    page: 0,
    size: 10,
    sort: "Id,ASC",
    pagingOptions: [10, 25, 50, 100],
  });

  const [open, setOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, editable: true },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      editable: true,
      type: "singleSelect",
      valueOptions: Object.keys(Category).map((x) => x.valueOf()),
      valueGetter: (params) => Category[params.value as keyof typeof Category],
    },
    { field: "imageUrl", headerName: "Image URL", flex: 1, editable: true },
    { field: "price", headerName: "Price", flex: 1, editable: true },
    {
      field: "recipe",
      headerName: "Recipe",
      flex: 1,
      renderCell: (params) => {
        return <Button onClick={
          () => {
            setModalData(params.row);
            setOpen(true);
          }
        }>Zobacz przepis</Button>;
      },
    },
  ];

  return (
    <PageContainer>
      <Typography variant="h6">Produkty</Typography>
      <div style={{ width: "90%", height: "80vh", alignSelf: "center" }}>
        <CrudList
          columns={columns}
          data={data}
          setData={setData}
          serverPagination={true}
          totalRows={pagination.size + (pagination.size + pagination.page)}
          pagination={pagination}
          setPagination={setPagination}
          createItem={ProductApi.createProduct}
          updateItem={ProductApi.updateProduct}
          deleteItem={ProductApi.deleteProduct}
          getItems={() =>
            ProductApi.getProductsEager({
              page: pagination.page,
              size: pagination.size,
              sort: pagination.sort,
            })
          }
        />
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Paper>
          <IngredientItemCrudPage data={modalData}/>
        </Paper>
      </Modal>
    </PageContainer>
  );
}

export default ProductCrudPage;
