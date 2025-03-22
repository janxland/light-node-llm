import { IsString } from 'class-validator';

/**
 * 对应 Python/FastAPI 的 PredictRequest
 */
export class PredictRequest {
  @IsString()
  input_text: string;

  @IsString()
  baseAPIHandler: string;
}
