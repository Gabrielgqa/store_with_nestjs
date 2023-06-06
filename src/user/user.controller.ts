import { v4 as uuid } from 'uuid';
import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { ListUserDTO } from './dto/listUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {

    constructor(
        private userRepository: UserRepository,
        private userService: UserService
    ) {}

    @Post()
    async create(@Body() createUserData: CreateUserDTO) {

        const user = new UserEntity();
        user.id = uuid();
        user.name = createUserData.name;
        user.email = createUserData.email;
        user.password = createUserData.password;
        
        this.userService.create(user);
        return { user: new ListUserDTO(user.id, user.name), message: "Usuário criado com sucesso!" };
    }

    @Get()
    async findAll() {
        const users = await this.userService.findAll();
        return users;
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() updateUserData: UpdateUserDTO){
        const updatedUser = await this.userRepository.update(id, updateUserData);
        return { user: updatedUser, message: "Usuário atualizado com sucesso!" }; 
    }

    @Delete('/:id')
    async delete(@Param('id') id: string){
        const deletedUser = await this.userRepository.delete(id);
        return { user: deletedUser, message: "Usuário deletado com sucesso!" }; 
    }
}
