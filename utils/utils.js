export const calculateAvailable = (chargers) =>{
    return chargers.reduce((total,charger) => total + charger.available ,0)
}