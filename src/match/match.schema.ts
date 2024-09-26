import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Match extends Document {
  @Prop({ required: true })
  team1: string;

  @Prop({ required: true })
  team2: string;

  @Prop()
  score: string;

  @Prop({ default: 'Upcoming' })
  status: string;
}

export const MatchSchema = SchemaFactory.createForClass(Match);
