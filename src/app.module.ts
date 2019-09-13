import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacturasModule } from './facturas/facturas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFacturaModule } from './detalle-factura/detalle-factura.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    FacturasModule,
    DetalleFacturaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
