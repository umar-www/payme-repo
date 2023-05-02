import { Counter } from "../models/counter";

export class CounterRepository {
    private list: Counter[] = []
    private id = 0;
    
    counters(counter: Counter){
        if(this.isExist(counter)){
            throw new Error("Counters already exist")
        }
        else{
            counter.setCounterId(this.id++)
            this.list.push(counter)
        }
    }
    
    isExist(newCounter: Counter){
        for(let counter of this.list){
            if(counter.name === newCounter.name){
                return true
            }
            else {
                return false
            }
        }
    }
    
    
    getList(){
        return this.list
    }
}