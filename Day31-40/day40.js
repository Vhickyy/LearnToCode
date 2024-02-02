// classes

class Food {
    constructor(name,blend){
        this.name = name;
        this.blend = blend;
    }

    getFood(){
        return this.name;
    }

    eatenWith(){
        return this.blend;
    }
}

const dish1 = new Food("rice");
console.log(dish1.getFood());
// rice

const dish2 = new Food("stew",["rice,yam"]);
console.log(dish2.eatenWith());
// ["rice,yam"]

