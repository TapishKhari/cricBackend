import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MatchService } from '../match.service'; // Import MatchService

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MatchGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly matchService: MatchService) {} // Inject MatchService

  @SubscribeMessage('updateScore')
  async handleScoreUpdate(@MessageBody() data: { id: string; score: string }) {
    // Call the service method to update the score in the database
    const updatedMatch = await this.matchService.updateMatch(data.id, { score: data.score });
    
    // Emit the updated match score to all connected clients
    this.server.emit('scoreUpdate', updatedMatch);
  }
}
