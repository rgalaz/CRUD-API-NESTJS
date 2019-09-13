import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DetalleFactura {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idFactura: number;

    @Column({length: 250})
    descripcion: string;

    @Column({length: 2})
    unidadMedida: string;

    @Column({length: 30})
    precio: string;

    @Column({length: 30})
    cantidad: string;

    @Column({length: 30})
    subtotal: string;
}
