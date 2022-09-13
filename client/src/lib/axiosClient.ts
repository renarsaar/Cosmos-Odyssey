import axios, { AxiosResponse } from 'axios';

const headers = { 'Content-Type': 'application/json' };

async function getAxios(url: string, params: object = {}): Promise<AxiosResponse> {
  return await axios.get(url, {
    params,
    headers,
  })
    .then((response) => response.data);
}

async function postAxios(url: string, body: object) {
  return await axios.post(url, body)
    .then((response) => response.data);
}

export { getAxios, postAxios };
