import axios, { AxiosResponse } from 'axios';

export const ConfirmLoginApi = (token: string): Promise<AxiosResponse> =>
  axios.post('/api/auth/confirm', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
