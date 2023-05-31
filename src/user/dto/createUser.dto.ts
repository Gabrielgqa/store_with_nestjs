import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailUnique } from "../validation/email-unique.validator";

export class CreateUserDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    name: string;

    @IsEmail(undefined, { message: 'O email precisa estar em um formato válido.' })
    @EmailUnique({ message: 'Já existe um usuário cadastrado com esse email' })
    email: string;

    @MinLength(6, { message: 'A senha deve ter um tamanho mínimo de 6 caracteres.'})
    password: string;
}