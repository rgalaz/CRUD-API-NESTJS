import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { DetalleFacturaService } from './detalle-factura.service';
import { DetalleFactura } from './detalle-factura.entity';

@Controller('detalle-factura')
export class DetalleFacturaController {

    constructor(private service: DetalleFacturaService) { }

    @Get()
    async findAll(): Promise<DetalleFactura[]> {
        return await this.service.getDetalleFacturas() as DetalleFactura[];
    }

    @Get(':idFactura')
    async find(@Param('idFactura') idFactura, @Body() detalleFactura: DetalleFactura): Promise<any> {
        detalleFactura.idFactura = idFactura;
        return await this.service.getDetalleFactura(detalleFactura);
    }

    @Post()
    create(@Body() detalleFactura: DetalleFactura) {
        return this.service.createDetalleFactura(detalleFactura);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() detalleFactura: DetalleFactura): Promise<any> {
        detalleFactura.id = id;
        return this.service.updateDetalleFactura(detalleFactura);
    }

    @Delete(':id')
    deleteUser(@Param('id') id): Promise<any> {
        return this.service.deleteDetalleFactura(id);
    }
}
