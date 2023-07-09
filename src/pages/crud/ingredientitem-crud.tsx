import { Typography } from "@mui/material";
import { PageContainer } from "../../components/shared/page-container-styled";
import {
  GridColDef,
} from "@mui/x-data-grid";
import CrudList from "../../components/shared/crud-list";
import { IngredientApi } from "../../api/ingredient";
import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ProductApi } from "../../api/product";

function IngredientItemCrudPage(props: any) {
  const [data, setData] = useState<any>(props.data.recipe);

  const [pagination, setPagination] = useState<any>({
    page: 0,
    size: 10,
    pagingOptions: [10, 25, 50, 100],
  });

  const [ingredients, setIngredients] = useState<any>([] as any[]);

  useEffect(() => {
    IngredientApi.getIngredients().then((res) => {
      setIngredients(res.data);
    });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "ingredient",
      headerName: "Ingredient",
      flex: 1,
      renderCell: (params) => {
        return (
          <Autocomplete
            id="combo-box-demo"
            options={ingredients.map((x: any) => x.name)}
            sx={{ width: "100%"}}
            onChange={(event, value) => {
              const ingredient = ingredients.find((x: any) => x.name === value);
              params.row.ingredient = ingredient;
            }}
            value={params.row.ingredient ? params.row.ingredient.name : ""}
            renderInput={(params) => <TextField {...params} />}
          />
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      editable: true,
      type: "number",
    },
  ];

  return (
    <PageContainer>
      <Typography variant="h6" sx={{alignSelf:"center"}} >Potrzebne składniki</Typography>
      <div style={{ width: "70vw", height: "70vh", alignSelf: "center", marginBottom: "3rem"}}>
        <CrudList
          columns={columns}
          data={data}
          setData={setData}
          serverPagination={false}
          totalRows={undefined}
          pagination={pagination}
          setPagination={setPagination}
          createItem={async (item) => {
            console.log(data);
            await ProductApi.updateProduct(props.data.id, {
              ...props.data,
              recipe: data.map((x: any) => {
                if (x.id === item.id) {
                  return { id: undefined, ...item };
                }
                return x;
              }),
            });
          }}
          updateItem={async (id, item) => {
            await ProductApi.updateProduct(props.data.id, {
              ...props.data,
              recipe: data.map((x: any) => {
                if (x.id === id) {
                  return { id: id, ...item };
                }
                return x;
              }),
            });
          }}
          deleteItem={(id) => {
            let recipe = data.filter((x: any) => x.id !== id);
            ProductApi.updateProduct(props.data.id, {
              ...props.data,
              recipe: recipe,
            });
          }}
          omitGettingItems={true}
          getItems={() => {}}
        />
      </div>
    </PageContainer>
  );
}

export default IngredientItemCrudPage;
