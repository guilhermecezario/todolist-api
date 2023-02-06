import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma/prisma.service';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create({ description, finished }: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        finished,
        description,
      },
    });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  update(id: number, { description, finished }: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: {
        description,
        finished,
      },
    });
  }
}
