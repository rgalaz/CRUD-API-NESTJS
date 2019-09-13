import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturasService } from './facturas.service';
import { FacturasController } from './facturas.controller';
import { Factura } from './facturas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Factura])],
  providers: [FacturasService],
  controllers: [FacturasController],
})

export class FacturasModule {}
