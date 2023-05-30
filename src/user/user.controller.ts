import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository) {

    }

    @Get()
    async listAll() {
        const users = this.userRepository.getAll();
        return users;
    }

    @Post()
    async create(@Body() userData) {
        this.userRepository.save(userData);
        return userData;
    }
}
