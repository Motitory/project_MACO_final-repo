import { User } from "src/auth/user.entity";
import { BaseEntity, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Irrigation_m extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ default : false})
    line_1 : Boolean;

    @Column({ default : false})
    line_2 : Boolean;

    @Column({ default : false})
    line_3 : Boolean;

    @Column({ default : false })
    manually_btn : Boolean;

    @Column()
    manually_time : number

    @Column({type:'int', nullable : true})
    accumulated_time:number;

    @CreateDateColumn()
    createDate : Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @BeforeUpdate()
    updateTimestamp() {
        this.updatedAt = new Date();
    }

    async save(): Promise<this> {
        this.updatedAt = new Date();
        return super.save();
    }

    @ManyToOne(type=>User, user=>user.irrigation_m,{eager : false})
    user: User;
}