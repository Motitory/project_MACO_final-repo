import { Irrigation_m } from 'src/PlantController/irrigation/irrigation_manually/irrigation_m.entity';
import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Create_mButtonDto } from '../dto/create-mbutton.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class Irrigation_mRepository extends Repository<Irrigation_m>{
    constructor(private dataSource:DataSource){
        super(Irrigation_m,dataSource.createEntityManager());
    }
    async createIrrigation_m(create_mButtonDto:Create_mButtonDto,user:{[key:string]:any}):Promise<Irrigation_m>{
        const user2 = await User.findOneBy({id: user['sub']});
        const {manually_btn,manually_time,line_1,line_2,line_3} = create_mButtonDto;

        const irrigation = this.create({
            manually_btn,
            manually_time,
            line_1,
            line_2,
            line_3,
            user : user2
        })
        await this.save(irrigation);
        return irrigation;
    }
}