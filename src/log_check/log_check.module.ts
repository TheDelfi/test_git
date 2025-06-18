import { Module } from '@nestjs/common';
import { LogCheckService } from './log_check.service';
import { LogCheckController } from './log_check.controller';
import { CheckLoginGuard } from '../check_login/check_login.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities_DB/user_DB';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [LogCheckService,CheckLoginGuard],
  controllers: [LogCheckController]
})
export class LogCheckModule {}
