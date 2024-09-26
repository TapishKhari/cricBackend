import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from './match.schema';

@Injectable()
export class MatchService {
  constructor(@InjectModel(Match.name) private matchModel: Model<Match>) {}

  async getAllMatches(): Promise<Match[]> {
    return this.matchModel.find().exec();
  }

  async updateMatch(id: string, data: Partial<Match>): Promise<Match> {
    return this.matchModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }
}
