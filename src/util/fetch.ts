import { message } from 'antd';
import axios from 'axios';

export const API_HOST = process.env.REACT_APP_API_HOST;
export enum FetchStatus{
  Request = 'Request',
  Success= 'Success',
  Fail= 'Fail'
}

export const callApi = ({
  method = 'get', url, params, data,
}:any) => axios({
  url, method, baseURL: API_HOST, params, data, withCredentials: true,
}).then((response) => {
  const { resultCode, resultMessage } = response.data;
  if (resultCode < 0) {
    message.error(resultMessage);
  }
  return {
    isSuccess: resultCode === ResultCode.Success,
    data: response.data.data,
    resultCode,
    resultMessage,
  };
});

export enum ResultCode {
  Success=0
}
