import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/listUser.dto';

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
        return { user: new ListUserDTO(user.id, user.name), message: "Usuário criado com sucesso!" };
    }

    @Get()
    async findAll() {
        const users = await this.userRepository.findAll();
        const listUsers = users.map( user => new ListUserDTO(user.id, user.name));
        return listUsers;
    }
}
