import { IsNotEmpty } from "class-validator";

export class Create_mButtonDto{
    @IsNotEmpty()
    manually_btn : Boolean

    @IsNotEmpty()
    manually_time : number

    @IsNotEmpty()
    line_1 : Boolean;

    @IsNotEmpty()
    line_2 : Boolean;

    @IsNotEmpty()
    line_3 : Boolean;
}