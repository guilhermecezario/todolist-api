import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

import { PrismaService } from '../database/prisma/prisma.service';
import { DatabaseModule } from '../database/database.module';

interface Task {
  id: number;
  description: string;
  finished: boolean;
}

describe('TasksController', () => {
  let tasksController: TasksController;

  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
      imports: [DatabaseModule],
    }).compile();

    tasksController = module.get<TasksController>(TasksController);

    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(tasksController).toBeDefined();
  });

  describe('create', () => {
    it('should return task created', async () => {
      const task: Task = {
        id: 1,
        description: 'task test',
        finished: false,
      };

      prisma.task.create = jest.fn().mockReturnValueOnce(task);

      expect(await tasksController.create(task)).toBe(task);
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const tasks: Task[] = [
        {
          id: 1,
          description: 'task test',
          finished: false,
        },
      ];

      prisma.task.findMany = jest.fn().mockReturnValueOnce(tasks);

      expect(await tasksController.findAll()).toBe(tasks);
    });
  });

  describe('update', () => {
    it('should return task updated', async () => {
      const task: Task = {
        id: 1,
        description: 'task test',
        finished: false,
      };

      prisma.task.update = jest.fn().mockReturnValueOnce(task);

      expect(await tasksController.update('1', task)).toBe(task);
    });
  });
});
