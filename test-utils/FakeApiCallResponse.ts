import { ApiCallResponse, HttpStatus } from '../src/api';

interface FakeApiCallResponseProps<T = any> {
  status?: HttpStatus;
  data: T;
}

export async function FakeApiCallResponse<T>(
  props: FakeApiCallResponseProps<T>
): Promise<ApiCallResponse<T>> {
  return {
    status: HttpStatus.OK,
    ...props
  };
}
