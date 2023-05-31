import { IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { EmailUnique } from "../validation/email-unique.validator";

export class UpdateUserDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    @IsOptional()
    name: string;

    @IsEmail(undefined, { message: 'O email precisa estar em um formato válido.' })
    @EmailUnique({ message: 'Já existe um usuário cadastrado com esse email' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha deve ter um tamanho mínimo de 6 caracteres.'})
    @IsOptional()
    password: string;
}