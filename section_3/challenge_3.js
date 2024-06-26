/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
       return this.bmi = this.mass / this.height ** 2;
    },
}

const john = {
    fullName: 'John Doe',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.bmi = this.mass / this.height ** 2;
    },
}


john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is is higher than ${mark.fullName}'s BMI (${mark.bmi.toFixed(2)})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is is higher than ${john.fullName}'s BMI (${john.bmi.toFixed(2)})`);
}
