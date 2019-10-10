import axios, { AxiosResponse } from 'axios';

export const DestroySessionApi = (): Promise<AxiosResponse<void>> =>
  axios.post('/api/auth/session/destroy');
