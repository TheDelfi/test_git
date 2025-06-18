import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities_DB/user_DB';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';



@Injectable()
export class CheckLoginGuard implements CanActivate {
  constructor(
    @InjectRepository(User)
    private TUser: Repository<User>
  ){}


  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const check = await this.TUser.findOne({
      where:{name:'Delfi'},
      select:['id'],
    })

    
    if(check){
      return true;
    }
    else{
      const response = context.switchToHttp().getResponse()
      response.redirect('/')
      return false
    }
  }
}
