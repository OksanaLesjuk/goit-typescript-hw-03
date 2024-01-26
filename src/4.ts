class Key {
    constructor(private signature: number = Math.random() ){}
    getSignature():number{
        return this.signature
    }
}

class Person {

    constructor(private key:Key){}
       
    getKey():Key{
        return this.key
    }
}

abstract class House {
    door:boolean;
    key:Key;
    tenants:Person[] = []
    comeIn(person:Person ):void{
        if(this.door){ 
             this.tenants.push(person)
            }
      
    }

    abstract openDoor(obj: Key):boolean
}
class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.key = key;
    }
    openDoor(obj: Key): boolean {
        return obj.getSignature() === this.key.getSignature();
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};