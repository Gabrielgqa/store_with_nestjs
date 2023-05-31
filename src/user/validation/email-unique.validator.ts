import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUniqueValidator implements ValidatorConstraintInterface {
    constructor(private userRepository: UserRepository) {} 

    async validate(email: string): Promise<boolean> {
        const userExists = await this.userRepository.findByEmail(email);
        return !userExists;
    }

}

export const EmailUnique = (validationOptions: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: EmailUniqueValidator
        })
    }
}