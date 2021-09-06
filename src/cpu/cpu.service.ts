import { Injectable } from '@nestjs/common';
import {PowerService}  from '../power/power.service'
@Injectable()
export class CpuService {
    // initailizes Power service inside cpu service
    constructor(private powerService: PowerService){}

    compute(a: number, b: number){
        console.log('Drqwing 10 watts of power from power Serivce')
        this.powerService.supplyPower(10)
        return a + b;
    }
}
