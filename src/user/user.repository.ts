export class UserRepository {
    private users = [];

    async getAll() {
        return this.users;
    }

    async save(user) {
        this.users.push(user);
        return user;
    }
}