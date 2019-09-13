import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { Factura } from './facturas.entity';

@Controller('facturas')
export class FacturasController {

    constructor(private service: FacturasService) { }

    @Get()
    async findAll(): Promise<Factura[]> {
        return await this.service.getFacturas() as Factura[];
    }

    @Get(':id')
    async find(@Param('id') id, @Body() factura: Factura): Promise<any> {
        factura.id = id;
        return await this.service.getFactura(factura);
    }

    @Post()
    create(@Body() factura: Factura) {
        return this.service.createFactura(factura);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() factura: Factura): Promise<any> {
        factura.id = id;
        return this.service.updateFactura(factura);
    }

    @Delete(':id')
    deleteUser(@Param('id') id): Promise<any> {
        return this.service.deleteFactura(id);
    }
}
