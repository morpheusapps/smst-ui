import axios from 'axios';
import { ApiCall, ApiCallResponse } from '../ApiCall';

export const DestroySessionApi = (): Promise<ApiCallResponse<{}>> =>
  ApiCall(axios.post('/api/auth/session/destroy'));
