// ----------------------------
// Decorator Pattern
// ----------------------------
class SimpleCoffee {

    getCost() {
        return 10;
    }

    getDescription() {
        return 'Simple Coffee';
    }
}

class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    getCost() {
        return this.coffee.getCost() + 2;
    }

    getDescription() {
        return this.coffee.getDescription() + ', Milk'
    }
}

class WhipCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 5;
    }

    getDescription() {
        return this.coffee.getDescription() + ', Whip';
    }
}

class VanillaCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 3;
    }

    getDescription() {
        return this.coffee.getDescription() + ', Vanilla';
    }
}


let someCoffee;

someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());