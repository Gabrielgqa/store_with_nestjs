import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository) {

    }

    @Get()
    async findAll() {
        const users = this.userRepository.findAll();
        return users;
    }

    @Post()
    async create(@Body() userData: CreateUserDTO) {
        this.userRepository.save(userData);
        return userData;
    }
}
