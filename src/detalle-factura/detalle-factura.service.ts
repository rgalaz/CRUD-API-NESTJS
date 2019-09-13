import { Injectable } from '@nestjs/common';
import { DetalleFactura} from './detalle-factura.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DetalleFacturaService {

    constructor(@InjectRepository(DetalleFactura) private readonly detalleFacturaRepository: Repository<DetalleFactura>) { }

    async getDetalleFacturas(): Promise<DetalleFactura[]> {
        return await this.detalleFacturaRepository.find();
    }

    async getDetalleFactura(detalleFactura: DetalleFactura): Promise<DetalleFactura> {
        return await this.detalleFacturaRepository.findOneOrFail(detalleFactura);
    }

    async createDetalleFactura(detalleFactura: DetalleFactura): Promise<DetalleFactura> {
        return await this.detalleFacturaRepository.save(detalleFactura);
    }

    async updateDetalleFactura(detalleFactura: DetalleFactura) {
        this.detalleFacturaRepository.update(detalleFactura.id, detalleFactura);
    }

    async deleteDetalleFactura(detalleFactura: DetalleFactura) {
        this.detalleFacturaRepository.delete(detalleFactura);
    }
}
