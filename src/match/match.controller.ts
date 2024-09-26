import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  async getMatches() {
    return this.matchService.getAllMatches();
  }

  @Put(':id')
  async updateMatch(@Param('id') id: string, @Body() data) {
    return this.matchService.updateMatch(id, data);
  }
}
