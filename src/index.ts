import { AppleRepository } from "./entities/apple-repository";
import { CounterRepository } from "./entities/counter-repository";
import { Apple } from "./models/apple";
import { Counter } from "./models/counter";

const apple1 = new CounterRepository()
const apple2 = new AppleRepository()

apple1.counters(new Counter("ASIA", "10 day")) 
apple2.importApple(new Apple("RED", 20))
apple2.importApple(new Apple('GREEN', 27))

console.log(apple1.getList());
console.log(apple2.getList());