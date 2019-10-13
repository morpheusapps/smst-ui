import axios from 'axios';
import { ApiCall, ApiCallResponse } from '../ApiCall';

export const ConfirmLoginApi = (
  token: string
): Promise<ApiCallResponse<{ profile: string }>> =>
  ApiCall(
    axios.get('/api/auth/confirm', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  );
