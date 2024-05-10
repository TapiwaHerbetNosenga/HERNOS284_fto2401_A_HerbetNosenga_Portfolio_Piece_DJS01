/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters

const parameters = {
 initialVelocity : 10000, // velocity (km/h)
acceleration : 3, // acceleration (m/s^2)
timeInSeconds : 3600, // seconds (1 hour)
initialDistance : 0, // distance (km)
initialFuelAmount :5000, // remaining fuel (kg)
fuelBurnRate : 0.5, // fuel burn rate (kg/s)
}

const { initialVelocity, acceleration, timeInSeconds, initialDistance, initialFuelAmount, fuelBurnRate } = parameters;
 

const convertedParamaters = {
timeInHours : timeInSeconds/3600, //hours
accelerationInKmh : acceleration*3.6, //(km/h)
fuelBurnRateInHours : fuelBurnRate*3600
}

const {timeInHours, accelerationInKmh, fuelBurnRateInHours} = convertedParams;





const newDistance = initialDistance + (initialVelocity*timeInHours); //calcultes new distance
const remainingFuel = initialFuelAmount - fuelBurnRateInHours*timeInHours; //calculates remaining fuel


// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = () => { 
  return initialVelocity + (accelerationInKmh*timeInHours)
}

const newVelocity = calcNewVel(); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);

//no opportunity for incorrect measurement input due to conversions happening outside of function scope and no parameters needing to be inserted





