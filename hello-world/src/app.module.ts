import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { UserModule } from './user-module/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
