import axios from 'axios';
import { ApiCall, ApiCallResponse } from '../ApiCall';

export const GetSessionApi = (): Promise<
  ApiCallResponse<{ profile?: string }>
> => ApiCall(axios.get('/api/auth/session'));
