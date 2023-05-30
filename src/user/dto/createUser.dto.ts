import { IsEmail, MinLength, IsNotEmpty } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    name: string;

    @IsEmail(undefined, { message: 'O email precisa estar em um formato válido.' })
    email: string;

    @MinLength(6, { message: 'A senha deve ter um tamanho mínimo de 6 caracteres.'})
    password: string;
}