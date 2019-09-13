import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DetalleFactura } from 'src/detalle-factura/detalle-factura.entity';

@Entity()
export class Factura {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    fecha: Date;

    @Column({length: 20})
    folio: string;

    @Column({length: 25})
    nombreComprador: string;

    @Column({length: 30})
    total: string;
}
