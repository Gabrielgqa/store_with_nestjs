import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    private users = [];

    async getAll() {
        return this.users;
    }

    async save(user) {
        this.users.push(user);
    }
}