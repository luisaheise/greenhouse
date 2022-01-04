import axios from 'axios';
import { Buffer} from 'buffer';

const axiosClient = axios.create({
    baseURL: `https://harvest.greenhouse.io/v1`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic '+Buffer.from(`${process.env.API_KEY}:`).toString('base64')
    }
  });

axiosClient.interceptors.response.use(
    function (response) {
      return response;
    }, 
    function (error) {
      return Promise.reject(error);
    }
  );

export default axiosClient;