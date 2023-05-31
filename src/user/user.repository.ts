import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity) {
        this.users.push(user);
    }

    async findAll() {
        return this.users;
    }

    async update(id: string, updateUserData: Partial<UserEntity>) {
        const userExists = this.findById(id);

        Object.entries(updateUserData).forEach(([key, value]) => {
            if(key === id){
                return
            }

            userExists[key] = value;
        });

        return userExists;
    }

    async delete(id: string) {
        const userExists = this.findById(id);

        this.users = this.users.filter(
            user => user.id !== id
        )

        return userExists;
    }

    async findByEmail(email: string) {
        const userExists = this.users.find(user => user.email === email);

        return userExists !== undefined;
    }

    private findById(id: string) {
        const userExists = this.users.find(user => user.id === id);

        if(!userExists) {
            throw new Error('Usuário não existe.')
        }

        return userExists;
    }
}