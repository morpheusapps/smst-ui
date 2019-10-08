import axios, { AxiosResponse } from 'axios';

export const GetSessionApi = (): Promise<AxiosResponse<{ profile: string }>> =>
  axios.get('/api/auth/session');
