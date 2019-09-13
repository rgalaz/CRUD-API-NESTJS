import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './facturas.entity';

@Injectable()
export class FacturasService {

    constructor(@InjectRepository(Factura) private readonly facturasRepository: Repository<Factura>) { }

    async getFacturas(): Promise<Factura[]> {
        return await this.facturasRepository.find();
    }

    async getFactura(factura: Factura): Promise<Factura> {
        return await this.facturasRepository.findOneOrFail(factura);
    }

    async createFactura(factura: Factura): Promise<Factura> {
        return await this.facturasRepository.save(factura);
    }

    async updateFactura(factura: Factura) {
        this.facturasRepository.update(factura.id, factura);
    }

    async deleteFactura(factura: Factura) {
        this.facturasRepository.delete(factura);
    }
}
