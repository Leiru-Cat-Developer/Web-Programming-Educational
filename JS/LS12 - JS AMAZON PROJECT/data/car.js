//17A
class Car {
    #brand; //PRIVATE
    #model; //PRIVATE
    #speed;
    isTrunkOpen;
    constructor(brand,model) {
        this.#brand = brand;
        this.#model = model;
        this.#speed = 0;
        this.isTrunkOpen = false;
    }

    //17B
    displayInfo() {
        console.log(`${this.#brand}, ${this.#model}, SPEED: ${this.#speed} km/h, TRUNK: ${(this.isTrunkOpen) ? 'open' : 'closed'}`);
    }

    //17C
    go() {
        if (this.#speed >= 0 && this.#speed <= 195 && this.isTrunkOpen === false) {
            this.#speed += 5;
        }
    }

    brake() {
        if (this.#speed >= 5 && this.#speed <= 200) {
            this.#speed -= 5;
        }
    }

    //17D
    openTrunk() {
        if (this.#speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

const car1 = new Car('Toyota','Corolla');
const car2 = new Car('Tesla','Model 3');

//START FOR BOTH IS 0 and TRUNK IS FALSE
//IF TRUNK IS OPEN FOR BOTH CASES, YOU ARE NOT ALLOWED TO ACCELERATE

car1.openTrunk();
car1.go();      //ADD 5
car1.brake();   //REST 5
car1.brake();   //IGNORED
car1.go();      //ADD 5

car2.openTrunk();
car2.brake();   //IGNORED
car2.brake();   //IGNORED
car2.go();      //ADD 5

car1.displayInfo();
car2.displayInfo();

//17E
class RaceCar extends Car {
    acceleration;
    constructor(brand,model,acceleration) {
        super(brand,model);

        this.acceleration = acceleration;
    }

    displayInfo() {
        console.log(`${this.brand}, ${this.model}, ACCELERATION: ${this.acceleration} km/h`);
    }

    go() {
        this.acceleration += this.acceleration;

        if (this.acceleration > 300) {
            this.acceleration = 300;
        }
    }

    //Both cases is closed
    openTrunk() {
        this.isTrunkOpen = false;
    }
    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

const r1 = new RaceCar('McLaren','F1',120);

r1.go();
r1.go();
r1.go();

r1.displayInfo();