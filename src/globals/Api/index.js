import axios from 'axios';
import {store} from '../../Redux/Store/store';

const ACCESS_TOKEN = store.getState().Auth.Login?.token.access;
export const BASE_URL = 'https://dev.bidnbook.in/';

export const Api = axios.create({
  baseURL: BASE_URL,
});

export const AccessApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
