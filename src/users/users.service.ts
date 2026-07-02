import { Injectable } from '@nestjs/common';

import { DrizzleService } from '../drizzle/drizzle.service';
import { user } from '../drizzle/schema/userschema';

@Injectable()
export class UsersService {

  constructor(private readonly drizzleService: DrizzleService) { }

  async getAllUsers() {
    return this.drizzleService.client.select().from(user);
  }

}
