import { color } from "./type";


export class Apple{
    private id!: number;
    
    constructor(public color: color, public price: number){}
    
    getId(){
        return this.id;
    }
    
    setId(value: number){
        this.id = value;
    }
}