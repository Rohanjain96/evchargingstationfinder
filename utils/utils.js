export const calculateAvailable = (chargers) =>{
    return chargers.reduce((total,charger) => total + charger.available ,0)
}

export const capatilize = (text) =>{
    return text.charAt(0).toUpperCase() + text.slice(1);
}