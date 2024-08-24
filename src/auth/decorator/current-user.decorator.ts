import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (roles = [], contex: ExecutionContext) => {
    console.log(roles);
    const ctx = GqlExecutionContext.create(contex);
    const user = ctx.getContext().req.user;

    if (!user) {
      throw new InternalServerErrorException(
        'Not user inside request - make use that we use the authGuards',
      );
    }

    return user;
  },
);
