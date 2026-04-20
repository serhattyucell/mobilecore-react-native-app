import { AxiosError } from 'axios';

import { ApiError } from '../interfaces/api-error.interface';
import { AppError } from '../interfaces/app-error.interface';

export function mapHttpError(error: unknown): AppError {
  if (error instanceof AxiosError) {
    const responseData = error.response?.data as ApiError | undefined;

    return {
      code: responseData?.code ?? 'HTTP_REQUEST_FAILED',
      message: responseData?.message ?? 'İstek sırasında bir hata oluştu.',
      statusCode: responseData?.statusCode ?? error.response?.status,
    };
  }

  if (error instanceof Error) {
    return {
      code: 'UNKNOWN_ERROR',
      message: error.message,
    };
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: 'Bilinmeyen bir hata oluştu.',
  };
}
