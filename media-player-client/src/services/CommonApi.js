import axios from "axios";
import { baseURL } from "./serverURL";

//configuration file for axios

const CommonApi = async (htttpMethod, endPoint, requestBody) => {
  //to specify axios config object
  const requestConfig = {
    method: htttpMethod,
    url: baseURL + endPoint, //endpoint including /
    data: requestBody,
  };

  return await axios(requestConfig)
    .then((res) => {
      //since this fn is inside another fn, we should return this so that the other can access
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default CommonApi;
