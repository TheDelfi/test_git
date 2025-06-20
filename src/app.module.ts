import { Module } from '@nestjs/common';
import { MainPageModule } from './main_page/main_page.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities_DB/user_DB'
import { LogCheckModule } from './log_check/log_check.module';


@Module({
  imports: [MainPageModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '434128',
      database: 'test_git_db',
      entities:[
        User
      ],
      synchronize:true
    }),
    LogCheckModule
  ],
})
export class AppModule {}
