import { Expose } from "class-transformer";

export class CategoryInputDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  code: string;
  @Expose()
  price: string;
  @Expose()
  description: string;
}
