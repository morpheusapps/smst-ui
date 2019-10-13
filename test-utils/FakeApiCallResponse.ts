import { ApiCallResponse, HttpStatus } from '../src/api';

interface FakeApiCallResponseProps<T extends Record<string, any>> {
  status?: HttpStatus;
  data: T;
}

export function FakeApiCallResponse<T>(
  props: FakeApiCallResponseProps<T>
): Promise<ApiCallResponse<T>>;

export function FakeApiCallResponse(): Promise<ApiCallResponse>;

export function FakeApiCallResponse<T>(
  props?: FakeApiCallResponseProps<T>
): Promise<ApiCallResponse<T>> | Promise<ApiCallResponse> {
  return typeof props === 'object'
    ? {
        status: HttpStatus.OK,
        ...props
      }
    : {
        // @ts-ignore
        status: HttpStatus.OK,
        data: {}
      };
}
