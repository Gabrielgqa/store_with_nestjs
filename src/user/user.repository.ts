import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    private users = [];

    async findAll() {
        return this.users;
    }

    async findByEmail(email: string) {
        const userExists = this.users.find(user => user.email === email);

        return userExists !== undefined;
    }

    async save(user) {
        this.users.push(user);
    }
}