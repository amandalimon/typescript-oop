import { AccessType, Category } from "../models/category.model";
import {
  IsNotEmpty,
  IsUrl,
  Length,
  IsEnum,
  validateOrReject,
  IsOptional
} from "class-validator"; // si empieza en mayúscula es un decorador, en minúscula es una función

// para utilizar los decoradores es necesario habilitarlos desde la config de ts "experimentalDecorators"

export interface ICreateCategoryDto extends Omit<Category, 'id'> { }

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string; // ! sirve para decirle a ts que lo vamos a incializar en otro momento

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'asd';
    await validateOrReject(dto)
  } catch (error) {
    console.log(error);
  }
})
