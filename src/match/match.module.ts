import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { Match, MatchSchema } from './match.schema';
import { MatchGateway } from './match/match.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }])],
  providers: [MatchService, MatchGateway],
  controllers: [MatchController],
})
export class MatchModule {}
