class Key {
    private signature: number = Math.random()
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
    door:boolean = false;
    constructor(protected key:Key){}
    private tenants:Person[] = []
    comeIn(person:Person ):void{
        if(this.door){ 
             this.tenants.push(person)
            }
      
    }

    abstract openDoor(obj: Key):void
}
class MyHouse extends House {
   
    openDoor(obj: Key): void {
        if( obj.getSignature() === this.key.getSignature()){
            this.door=true;
            
        };
       
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};