export const stations = [
    {
        name: "Tata Power PP1",
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Address: "Power House Rd, Block AD, Dakshini Pitampura, Pitam Pura, Delhi, 110034",
        available: 2,
        total: 4,
        open: "07:00:00",
        close: "21:30:00",
        coordinates: {
            longitude: 77.1361,
            latitude: 28.708
        },

        charger_type: [{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb7282',
            cost_per_unit: "15",
            name: "Charger 1",
            type: "CCS-2",
            minutes: 15,
            capacity: "20KW",
            available:1
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb3779',
            name: "Charger 2",
            type: "AC Type-2",
            cost_per_unit: "20",
            minutes: 15,
            capacity: "30KW",
            available:1
        },
        ]
    },
    {
        name: "Attar battery service",
        Address: "B:511 j.j. Colony Bawana Delhi, 39",
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb27oa',
        available: 3,
        total: 10,
        open: "07:00:00",
        close: "22:00:00",
        coordinates: {
            longitude: 77.051,
            latitude: 28.8067
        },
        charger_type: [{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2y27',
            name: "Charger 1",
            type: "AC Type-2",
            minutes: 15,
            capacity: "20KW",
            cost_per_unit: "20",
            available:2
        },
        {
            cost_per_unit: "10",
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2673',
            name: "Charger 2",
            type: "AC Type-2",
            minutes: 15,
            capacity: "30KW",
            available:1
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2y7h',
            cost_per_unit: "30",
            name: "Charger 3",
            type: "CCS-2",
            minutes: 15,
            capacity: "20KW",
            available:0
        },
    ]
},
{
    name: "Punjab EV Battery & Invertor Battery Smart",
    Address: "C-84, Ramgarh, Jahangir puri, New Delhi- 110033",
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8402',
    available: 2,
    total: 6,
    open: "00:00:00",
    close: "22:00:00",
    coordinates: {
        longitude: 77.080616,
        latitude: 28.7981025
    },
    charger_type: [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2u49',
        name: "Charger 1",
        type: "CHAdeMO",
        minutes: 15,
        capacity: "20KW",
        cost_per_unit: "15",
        available:1
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb9054',
            name: "Charger 2",
            type: "AC Type-2",
            minutes: 15,
            capacity: "30KW",
            cost_per_unit: "20",
            available:1
        },
        ]
    },
    {
        name: "Satyam Power Electronics",
        Address: "A-998, Block-K,Jahangirpuri, Delhi 110033",
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb63hd',
        available: 3,
        total: 10,
        open: "08:00:00",
        close: "22:00:00",
        coordinates: {
            longitude: 77.1703,
            latitude: 28.7344
        },
        charger_type: [{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2o30',
            name: "Charger 1",
            type: "CHAdeMO",
            minutes: 15,
            capacity: "20KW",
            cost_per_unit: "20",
            available:1
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2098',
            name: "Charger 2",
            type: "CCS-2",
            minutes: 15,
            capacity: "30KW",
            cost_per_unit: "15",
            available:2
        },
        ]
    },
    {
        name: "Copper Power",
        Address: "Jahangirpuri H Block, Shop no. 12, DDA Market, New Delhi, 110033",
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb7uby',
        available: 6,
        total: 6,
        open: "09:00:00",
        close: "22:00:00",
        coordinates: {
            longitude: 77.1697,
            latitude: 28.7225
        },
        charger_type: [{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb3t4v',
            name: "Charger 1",
            type: "CHAdeMO",
            minutes: 15,
            capacity: "20KW",
            cost_per_unit: "15",
            available:6
        },
        ]
    },
]

export const slots = [
    {
        id: "687398309032",
        starting_time: "10:15 Am",
        ending_time: "10:30 Am"
    },
    {
        id: "6873983092882",
        starting_time: "10:30 Am",
        ending_time: "10:45 Am"
    },
    {
        id: "6873983092842",
        starting_time: "10:45 Am",
        ending_time: "11:00 Am"
    }
]