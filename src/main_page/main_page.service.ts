import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities_DB/user_DB';
import { Repository } from 'typeorm';
import { User_DTO } from '../../DTO_objects/userDTO';




@Injectable()
export class MainPageService {
    constructor(
        @InjectRepository(User)
        private TUser: Repository<User>
    ){}


    async Create_new_user(body:User_DTO){
        console.log(body)
        const arl_user_test = await this.TUser.findOne({
            where: {name:body.name},
            select: ['id']
        })
        console.log(arl_user_test)
        if(arl_user_test){
            return
        }

        const new_user = this.TUser.create({
            name:body.name
        })

        this.TUser.save(new_user)
    }
}
