import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { configModule } from './configure.root';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { MailModule } from './mail/mail.module';

const environment = process.env.NODE_ENV || 'development';


@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    MongooseModule.forRoot(
      process.env.MONGODB_WRITE_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    ),
    TokenModule,
    MailModule,
  ],
})
export class AppModule {}
