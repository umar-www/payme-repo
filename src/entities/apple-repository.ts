import { Apple } from "../models/apple";

export class AppleRepository {
    private list: Apple[] = [];
    private id = 0;
    
    importApple(apple: Apple) {
        if(this.isExist(apple)){
            throw new Error("Apple is already exists")
        }else{
            apple.setId(this.id++)
            this.list.push(apple)
        }    
    }
    
    
    isExist(newApple:Apple){
        for(let apple of this.list){
            if(apple.color === newApple.color){
                return true
            }
            else return false
        }
    }
    
    getList(){
       return this.list
    }
}
