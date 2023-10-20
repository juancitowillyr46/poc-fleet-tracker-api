import { BaseArgumentDto } from '../dtos/base-argument.dto';

export interface UseCaseStrategy {
  execute(args: BaseArgumentDto): void;
}
