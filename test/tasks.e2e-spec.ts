import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';

import { TasksService } from '../src/tasks/tasks.service';
import { TasksModule } from '../src/tasks/tasks.module';

describe('TasksController (e2e)', () => {
  let app: INestApplication;

  const tasksService = {
    findAll: () => [
      {
        id: 1,
        description: 'task test',
        finished: false,
      },
    ],
    create: () => [
      {
        id: 2,
        description: 'new task',
        finished: false,
      },
    ],
    update: () => [
      {
        id: 1,
        description: 'update task',
        finished: false,
      },
    ],
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TasksModule],
    })
      .overrideProvider(TasksService)
      .useValue(tasksService)
      .compile();

    app = moduleFixture.createNestApplication();

    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  it('/tasks (get)', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200)
      .expect(tasksService.findAll());
  });

  describe('/tasks (post)', () => {
    it('should create task', () => {
      return request(app.getHttpServer())
        .post('/tasks')
        .send({
          description: 'new task',
          finished: false,
        })
        .expect(201)
        .expect(tasksService.create());
    });

    it('not should create task with description empty', () => {
      return request(app.getHttpServer())
        .post('/tasks')
        .send({
          finished: false,
        })
        .expect(400);
    });
  });

  describe('/tasks (putch)', () => {
    it('should update task', () => {
      return request(app.getHttpServer())
        .patch('/tasks/1')
        .send({
          description: 'update task',
          finished: false,
        })
        .expect(200)
        .expect(tasksService.update());
    });

    it('not should update task with description empty', () => {
      return request(app.getHttpServer())
        .patch('/tasks/1')
        .send({
          description: '',
          finished: false,
        })
        .expect(400);
    });
  });
});
