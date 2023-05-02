import { continent } from "./type";

export class Counter{
    private counterId!: number;
    
    constructor (public name: continent, public dastafchikDay: string){}
    
    getCounterId(){
        return this.counterId;
    }
    
    setCounterId(counterID: number){
        this.counterId = counterID
    }
}