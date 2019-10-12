import { ApiCallResponse, HttpStatus } from '../src/api';

interface FakeApiCallResponseProps {
  status?: HttpStatus;
  data?: any;
}

export function FakeApiCallResponse(
  props?: FakeApiCallResponseProps
): ApiCallResponse {
  return {
    status: HttpStatus.OK,
    data: {},
    ...props
  };
}
