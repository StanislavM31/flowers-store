import { Injectable, CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterCeptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('interceptor.Before...');
        //отрабатывает Pipe
        return next.handle().pipe(tap(()=> console.log('interceptor.After...')
        ))
    }
  
}
