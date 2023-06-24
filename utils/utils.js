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

export const giveHour = (hour) => {
    const date = new Date()
    date.setHours(hour)
    return new Date(date).toLocaleString('en-us', { hour: "numeric", hour12: true })
}

export const giveCompleteTime = (time) => {
    const hour = time.split(":")[0]
    const min = time.split(":")[1]

    const date = new Date()
    date.setHours(hour)
    date.setMinutes(min)
    return new Date(date).toLocaleString('en-us', { hour: "numeric", minute: "numeric", hour12: true })
}

export const generateSlots = (opening_time, closing_time) => {
    const currentTime = new Date();
    const currentOffset = currentTime.getTimezoneOffset();
    const ISTOffset = 330;   // IST offset UTC +5:30 
    const ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    const availableSlots = []

    const opening_hour = parseInt(opening_time.split(":")[0])
    const opening_minutes = parseInt(opening_time.split(":")[1])
    const closing_hour = parseInt(closing_time.split(":")[0])
    const closing_minute = parseInt(closing_time.split(":")[1])
    let days = 3

    for (let i = 0; i < days; i++) {
        const date = new Date(ISTTime.getTime() + i * 86400000)
        let hour
        let hourslots = []

        if (date.getHours() === closing_hour && date.getMinutes() <= closing_minute) {
            days = 4
            continue
        }

        if (i === 0) {
            let currentHour = date.getHours()
            let currentMin = date.getMinutes()

            currentHour >= opening_hour ? hour = currentHour : hour = opening_hour
            for (hour; hour <= closing_hour; hour++) {
                let slots = []

                if (hour === currentHour && currentMin >= 45) continue

                if (hour === closing_hour && closing_minute === 0) continue

                const total_minutes = hour === closing_hour ? closing_minute : 60

                for (let min = 0; min < total_minutes; min += 15) {
                    if (hour === currentHour && min <= currentMin) {
                        slots.push({ id: min, starting_time: "NA", ending_time: "NA" })
                    }
                    else {
                        let starting_time = `${hour}:${min}`
                        let ending_time = `${hour}:${min + 15}`
                        slots.push({ id: starting_time + hour, starting_time, ending_time, booked: false })
                    }
                }

                hourslots.push({
                    id: hour,
                    hour: giveHour(hour),
                    slots: [...slots]
                })
            }
        }

        else {
            if (i != 0) {
                date.setHours(opening_hour)
                date.setMinutes(opening_minutes)
            }

            hour = date.getHours()

            for (hour; hour <= closing_hour; hour++) {

                if (hour === closing_hour && closing_minute === 0) break

                let slots = []
                const total_minutes = hour === closing_hour ? closing_minute : 60

                for (let min = 0; min < total_minutes; min += 15) {
                    let starting_time = `${hour}:${min}`
                    let ending_time = `${hour}:${min + 15}`
                    slots.push({ id: starting_time + hour, starting_time, ending_time, booked: false })
                }

                hourslots.push({
                    id: hour,
                    hour: giveHour(hour),
                    slots: [...slots]
                })
            }
        }

        availableSlots.push({
            id: i,
            date: giveDate(i),
            dateslots: hourslots
        })
    }

    return availableSlots
}

export const calculateMinutes = (startTime,endTime) => {
    const start = new Date(`2000-01-01 ${startTime}`).getTime();
    const end = new Date(`2000-01-01 ${endTime}`).getTime();
    const minutes = (end - start) / (1000 * 60); // Calculate the difference in minutes
    return minutes;
}

export const sortTimeSlots = (array) => {

    if(array.length===1) return array
    return array.sort((a, b) => {
        if (a.starting_time< b.starting_time) {
            return -1;
        }
        if (a.starting_time > b.starting_time) {
            return 1;
        }
        return 0;
    });
}

