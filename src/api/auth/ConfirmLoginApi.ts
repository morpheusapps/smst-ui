import axios, { AxiosResponse } from 'axios';

export const ConfirmLoginApi = (token: string): Promise<AxiosResponse<void>> =>
  axios.get('/api/auth/confirm', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
