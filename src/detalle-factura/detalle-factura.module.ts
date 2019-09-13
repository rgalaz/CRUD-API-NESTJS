import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFacturaService } from './detalle-factura.service';
import { DetalleFacturaController } from './detalle-factura.controller';
import { DetalleFactura } from './detalle-factura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleFactura])],
  providers: [DetalleFacturaService],
  controllers: [DetalleFacturaController],
})
export class DetalleFacturaModule {}
