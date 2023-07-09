import { Typography } from "@mui/material";
import { PageContainer } from "../../components/shared/page-container-styled";
import {
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import {
  ingredientCategories,
  measureUnits,
} from "../../constants/enumTranslations";
import CrudList from "../../components/shared/crud-list";
import { IngredientApi } from "../../api/ingredient";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "name", headerName: "Nazwa", flex: 1, editable: true },
  {
    field: "category",
    headerName: "Kategoria",
    flex: 1,
    type: "singleSelect",
    editable: true,
    valueOptions: Object.keys(ingredientCategories).map((x) => x.valueOf()),
    valueGetter: (params: GridValueGetterParams) =>
      `${
        ingredientCategories[
          params.row.category as keyof typeof ingredientCategories
        ]
      }`,
  },
  {
    field: "stock",
    headerName: "Stan magazynowy",
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "measure",
    headerName: "Jednostka miary",
    flex: 1,
    editable: true,
    type: "singleSelect",
    valueOptions: Object.keys(measureUnits).map((x) => x.valueOf()),
    valueGetter: (params: GridValueGetterParams) =>
      `${measureUnits[params.row.measure as keyof typeof measureUnits]}`,
  },
];

function IngredientCrudPage(props: any) {
  const [data, setData] = useState<GridRowsProp>([]);
  const [pagination, setPagination] = useState<any>({
    page: 0,
    size: 10,
    pagingOptions: [10, 25, 50, 100],
  });

  return (
    <PageContainer>
      <Typography variant="h6">Składniki</Typography>
      <div style={{ width: "90%", height: "80vh", alignSelf: "center" }}>
        <CrudList
          columns={columns}
          data={data}
          setData={setData}
          serverPagination={false}
          totalRows={undefined}
          pagination={pagination}
          setPagination={setPagination}
          createItem={IngredientApi.createIngredient}
          updateItem={IngredientApi.updateIngredient}
          deleteItem={IngredientApi.deleteIngredient}
          getItems={IngredientApi.getIngredients}
        />
      </div>
    </PageContainer>
  );
}

export default IngredientCrudPage;
