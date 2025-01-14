import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchModule } from './match/match.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/cricbuzz-app'),MatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
