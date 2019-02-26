import { Test, TestingModule } from '@nestjs/testing';
import { EstacionController } from './estacion.controller';

describe('Estacion Controller', () => {
  let controller: EstacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstacionController],
    }).compile();

    controller = module.get<EstacionController>(EstacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
