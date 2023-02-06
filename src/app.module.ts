import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule, DatabaseModule],
})
export class AppModule {}
