import axios from "axios";
import { urlPrefix } from "../constants/apiurl";

const baseUrl = urlPrefix + "/api/v1";

export const ReservationApi = {
    getReservations: async function() {
      const result = await axios.get(baseUrl + "/employee/reservation");
      return result;
    },
    createReservation: async function(reservation:any) {
      const result = await axios.post(baseUrl + "/client/reservation", reservation);
      return result;
    },
    updateReservation: async function(id:number, reservation:any) {
      const result = await axios.put(baseUrl + "/employee/reservation/" + id, reservation);
      return result;
    },
    deleteReservation: async function(id:number) {
      const result = await axios.delete(baseUrl + "/employee/reservation/" + id);
      return result;
    },
    getAllTables: async function() {
      const result = await axios.get(baseUrl + "/client/reservation/tables");
      return result;
    },
    getAvailableTables: async function(start:string, end:string) {
      const result = await axios.get(baseUrl + "/client/reservation/available-tables?startDateTime=" + start + "&endDateTime=" + end);
      return result;
    }
  };
  