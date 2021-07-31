
class Plates {
    constructor(vardas) {
        this.vardas = vardas;
        this.platesDirty = 0;
        this.platesClean = 0;
    }
    intro() {
        if (this.platesClean + this.platesDirty <= 0) {
            console.log(`Hi, this restoran has no plates! Please, buy some.`);
        } else {
            console.log(`Hi, this restoran has ${this.platesClean + this.platesDirty} plates!`);
        }
    }
    buyPlates(plateSkaicius) {
        this.platesClean += plateSkaicius;
        console.log(`Restoran purchased ${this.platesClean} plates.`);
    }
    usePlates(purvinos) {
        if (purvinos <= this.platesClean) {
            this.platesClean -= purvinos;
            this.platesDirty += purvinos;
            console.log(`Restoran has made some dishes for ${purvinos} plates.`);
        } else {
            console.log(`Restoran has ${this.platesClean} plates only, it's not enough. No action is taken.`);
        }
    }
    cleanPlatesCount() {
        if (this.platesClean === 0) {
            console.log(`Restoran is left with no clean plates.`);
        } else {
            console.log(`Restoran has ${this.platesClean} clean plates.`);
        }
    }
    cleanUp(needClean) {
        if (needClean > this.platesDirty) {
            console.log(`Restoran does not have so many dirty plates.`);
            return;
        }

        this.platesClean += needClean;
        this.platesDirty -= needClean;
        if (this.platesDirty === 0) {
            console.log(`All plates in the Restoran is clean!`);
        }
    }
}
module.exports = Plates;