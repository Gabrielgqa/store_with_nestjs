import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListUserDTO } from './dto/listUser.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async create(userEntity :UserEntity) {
        const user = await this.userRepository.save(userEntity);
    }

    async findAll() {
        const users = await this.userRepository.find();
        const listUsers = users.map((user) => new ListUserDTO(user.id, user.name));

        return listUsers;
    }
}
