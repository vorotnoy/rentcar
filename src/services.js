import axios from "axios";

axios.defaults.baseURL = "https://64c3977667cfdca3b65ff442.mockapi.io/";

//---------------------------------------------------------------get data----------------------//

export const getRentCarApi = () => {
  return axios.get("/rent")
  .then(response=>response.data);
};

export const addFavoriteApi = (upData) => {
  return axios
    .put(`/rent/${upData.id}`,upData).then(response=>response.data)}