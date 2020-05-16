import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService],
})
export class AppModule {}
