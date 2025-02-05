import { OnGatewayConnection, OnGatewayInit, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()

export class WebsocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayConnection{
    afterInit(server: any) {
        
    }
}