import { Module, DynamicModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersAcModule } from './pers-ac/pers-ac.module';
import { UsersModule } from './users';
import { AuthModule } from './auth';

@Module({})
export class AppModule {
  static forRoot(connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
      imports: [
        TypeOrmModule.forRoot(connOptions),
        UsersModule,
        AuthModule,
        PersAcModule
      ],
      providers: []
    };
  }
}
