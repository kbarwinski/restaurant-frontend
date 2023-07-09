import { useState } from "react";
import { Typography } from "@mui/material";
import {
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import {
  ingredientCategories,
  measureUnits,
} from "../../constants/enumTranslations";
import { ReservationApi } from "../../api/reservation";
import CrudList from "../../components/shared/crud-list";
import { PageContainer } from "../../components/shared/page-container-styled";

const columns: GridColDef[] = [
  { field: "startDateTime", headerName: "Start Date/Time", flex: 1 },
  { field: "endDateTime", headerName: "End Date/Time", flex: 1 },
  {
    field: "reservationTable",
    headerName: "Table",
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      "nr." + params.row.reservationTable.number +
      " (" +
      params.row.reservationTable.seats +
      " os.)",
  },
  {
    field: "user",
    headerName: "User",
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.user.contact.name +
      " " +
      params.row.user.contact.surname +
      " (" +
      params.row.user.email +
      " " +
      params.row.user.contact.phoneNumber +
      ")",
  },
];

function ReservationCrudPage() {
  const [data, setData] = useState<GridRowsProp>([]);
  const [pagination, setPagination] = useState<any>({
    page: 0,
    size: 10,
    sort: "Id,ASC",
    pagingOptions: [10, 25, 50, 100],
  });

  return (
    <PageContainer>
      <Typography variant="h6">Rezerwacje</Typography>
      <div style={{ width: "90%", height: "80vh", alignSelf: "center" }}>
        <CrudList
          columns={columns}
          data={data}
          setData={setData}
          serverPagination={false}
          totalRows={0}
          setPagination={setPagination}
          deleteOnly={true}
          createItem={() => {}}
          updateItem={() => {}}
          deleteItem={ReservationApi.deleteReservation}
          getItems={ReservationApi.getReservations}
          pagination={pagination}
        />
      </div>
    </PageContainer>
  );
}

export default ReservationCrudPage;
