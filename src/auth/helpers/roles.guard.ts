import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { error } from 'console';
import { GetUser } from 'src/users/get-user.decorator';
import { UserEntity } from 'src/users/user.entity';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()

export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  canActivate( ctx: ExecutionContext, ): boolean {
    
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      ctx.getHandler(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const req = ctx.switchToHttp().getRequest();
    console.log(req.user)
    const user = req.user
    if (!user) {
      return undefined;
   }
    return requiredRoles.some((rl) => user.role === rl);
  }
}