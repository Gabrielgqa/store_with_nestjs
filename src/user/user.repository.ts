import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    private users = [];

    async findAll() {
        return this.users;
    }

    async save(user) {
        this.users.push(user);
    }
}