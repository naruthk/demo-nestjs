import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

// A custom param decorator allows us to shape how we want our request to look like 
export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
