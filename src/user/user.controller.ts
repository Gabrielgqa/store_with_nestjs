import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository) {

    }

    @Post()
    async create(@Body() userData: CreateUserDTO) {

        const user = new UserEntity();
        user.id = uuid();
        user.name = userData.name;
        user.email = userData.email;
        user.password = userData.password;
        
        this.userRepository.save(user);
        return { id: user.id, message: "Usuário criado com sucesso!" };
    }

    @Get()
    async findAll() {
        const users = this.userRepository.findAll();
        return users;
    }
}
