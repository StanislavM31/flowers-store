import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { Socket } from "socket.io";

@WebSocketGateway()

export class WebsocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server: Server;

    afterInit(server: Server) {
        console.log('WebsocketGateway initialized server:', server);
    }
    handleConnection(_client: Socket, ..._args: any[]) {
        console.log(`Client:  $-{client} disconnected ` );
    }

    handleDisconnect(client: Socket) {
        console.log('Client disconected (client.id is...)', client.id);
    }

    handleMessageMessage(@MessageBody() message: string): void{
        console.log('message;', message);
        this.server.emit('message;', `Echo ${message}`);
    }
}