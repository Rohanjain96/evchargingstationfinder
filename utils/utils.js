import { stations } from "../constants/constant"
export const calculateAvailable = (chargers) => {
    return chargers.reduce((total, charger) => total + charger.available, 0)
}

export const filterStation = (filterChargerName = "", available = false) => {
    const filteredStations = stations.filter((station) => station.charger_type.some((charger) => charger.type.includes(filterChargerName)))
    if (available)
        return filteredStations.map(obj => ({
            ...obj,
            charger_type: obj.charger_type.filter(innerObj => innerObj.available > 0)
        })).filter(obj => obj.charger_type.length > 0);
    return filteredStations
}

export const capatilize = (text) => {
    return text?.charAt(0).toUpperCase() + text?.slice(1);
}

export const giveDate = (day) => {
    const curr = new Date(new Date().getTime() + day * 86400000)
    return curr.getDate() + " " + curr.toLocaleString('default', { month: 'long' })
}
export const generateSlots = () => {

    const giveHour = (hour) => {
        const date = new Date()
        date.setHours(hour)
        return new Date(date).toLocaleString('en-us', { hour: "numeric", hour12: true })
    }

    const giveCompleteTime = (time) => {
        const hour = time.split(":")[0]
        const min = time.split(":")[1]

        const date = new Date()
        date.setHours(hour)
        date.setMinutes(min)
        return new Date(date).toLocaleString('en-us', { hour: "numeric", minute: "numeric", hour12: true })
    }

    const availableSlots = []

    var currentTime = new Date();


    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30 

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    for (let i = 0; i < 3; i++) {
        const date = new Date(ISTTime.getTime() + i * 86400000)
        if (i != 0) {
            date.setHours(0)
            date.setMinutes(0)
        }
        let hour = date.getHours()
        let hourslots = []
        for (hour; hour <= 24; hour++) {
            let slots = []
            for (let min = 0; min < 60; min += 15) {
                let starting_time = giveCompleteTime(`${hour}:${min}`)
                let ending_time = giveCompleteTime(`${hour}:${min + 15}`)
                slots.push({ id: starting_time + hour, starting_time, ending_time })
                // console.log(slots)

            }
            hourslots.push({
                id: hour,
                hour: giveHour(hour),
                slots: [...slots]
            })
            // console.log(hourslots)
        }
        availableSlots.push({
            id: i,
            date: giveDate(i),
            dateslots: hourslots
        })
    }

    return availableSlots
}
