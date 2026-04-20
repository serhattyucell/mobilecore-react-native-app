import { AppError } from '../interfaces/app-error.interface';

export type Result<TData> = { success: true; data: TData } | { success: false; error: AppError };
