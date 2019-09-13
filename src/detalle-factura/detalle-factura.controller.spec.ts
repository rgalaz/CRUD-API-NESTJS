import { Test, TestingModule } from '@nestjs/testing';
import { DetalleFacturaController } from './detalle-factura.controller';

describe('DetalleFactura Controller', () => {
  let controller: DetalleFacturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleFacturaController],
    }).compile();

    controller = module.get<DetalleFacturaController>(DetalleFacturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
