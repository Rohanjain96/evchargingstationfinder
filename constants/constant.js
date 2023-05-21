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

export const Allslots = [
    {
        time: "12 Am",
        slots:[
            {
                id: "687398309382",
                starting_time: "12:15 Am",
                ending_time: "12:30 Am"
            },
            {
                id: "6873983092242",
                starting_time: "12:30 Am",
                ending_time: "12:45 Am"
            },
            {
                id: "6873983092802",
                starting_time: "12:45 Am",
                ending_time: "01:00 Am"
            }
        ]
    },
    {
        time: "1 Am",
        slots:[
            {
                id: "687398309432",
                starting_time: "01:15 Am",
                ending_time: "01:30 Am"
            },
            {
                id: "6873483092882",
                starting_time: "01:30 Am",
                ending_time: "01:45 Am"
            },
            {
                id: "6873583092842",
                starting_time: "01:45 Am",
                ending_time: "02:00 Am"
            }
        ]
    },
    {
        time: "2 Am",
        slots:[
            {
                id: "687393309032",
                starting_time: "02:15 Am",
                ending_time: "02:30 Am"
            },
            {
                id: "6872983092882",
                starting_time: "02:30 Am",
                ending_time: "02:45 Am"
            },
            {
                id: "6873983032842",
                starting_time: "02:45 Am",
                ending_time: "03:00 Am"
            }
        ]
    },
    {
        time: "3 Am",
        slots:[
            {
                id: "6872398309032",
                starting_time: "03:15 Am",
                ending_time: "03:30 Am"
            },
            {
                id: "68273983092882",
                starting_time: "03:30 Am",
                ending_time: "03:45 Am"
            },
            {
                id: "68733983092842",
                starting_time: "03:45 Am",
                ending_time: "04:00 Am"
            }
        ]
    },
    {
        time: "4 Am",
        slots:[
            {
                id: "6873983409032",
                starting_time: "04:15 Am",
                ending_time: "04:30 Am"
            },
            {
                id: "68739830592882",
                starting_time: "04:30 Am",
                ending_time: "04:45 Am"
            },
            {
                id: "68739830928442",
                starting_time: "04:45 Am",
                ending_time: "05:00 Am"
            }
        ]
    },
    {
        time: "5 Pm",
        slots:[
            {
                id: "6873982309032",
                starting_time: "05:15 Am",
                ending_time: "05:30 Am"
            },
            {
                id: "68739813092882",
                starting_time: "05:30 Am",
                ending_time: "05:45 Am"
            },
            {
                id: "68739830924842",
                starting_time: "05:45 Am",
                ending_time: "06:00 Am"
            }
        ]
    },
    {
        time: "6 Am",
        slots:[
            {
                id: "6817398309032",
                starting_time: "06:15 Am",
                ending_time: "06:30 Am"
            },
            {
                id: "68739830492882",
                starting_time: "06:30 Am",
                ending_time: "06:45 Am"
            },
            {
                id: "68739830892842",
                starting_time: "06:45 Am",
                ending_time: "07:00 Am"
            }
        ]
    },
    {
        time: "7 Am",
        slots:[
            {
                id: "6187398309032",
                starting_time: "07:15 Am",
                ending_time: "07:30 Am"
            },
            {
                id: "62873983092882",
                starting_time: "07:30 Am",
                ending_time: "07:45 Am"
            },
            {
                id: "68733983092842",
                starting_time: "07:45 Am",
                ending_time: "08:00 Am"
            }
        ]
    },
    {
        time: "8 Am",
        slots:[
            {
                id: "6187398309032",
                starting_time: "08:15 Am",
                ending_time: "08:30 Am"
            },
            {
                id: "63873983092882",
                starting_time: "08:30 Am",
                ending_time: "08:45 Am"
            },
            {
                id: "68753983092842",
                starting_time: "08:45 Am",
                ending_time: "09:00 Am"
            }
        ]
    },
    {
        time: "9 Am",
        slots:[
            {
                id: "6873983090321",
                starting_time: "09:15 Am",
                ending_time: "09:30 Am"
            },
            {
                id: "68739830928832",
                starting_time: "09:30 Am",
                ending_time: "09:45 Am"
            },
            {
                id: "68739830928492",
                starting_time: "09:45 Am",
                ending_time: "10:00 Am"
            }
        ]
    },
    {
        time: "10 Am",
        slots:[
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
    },
    {
        time: "11 Am",
        slots:[
            {
                id: "687398309052",
                starting_time: "11:15 Am",
                ending_time: "11:30 Am"
            },
            {
                id: "6873983092452",
                starting_time: "11:30 Am",
                ending_time: "11:45 Am"
            },
            {
                id: "6873983092782",
                starting_time: "11:45 Am",
                ending_time: "12:00 Pm"
            }
        ]
    },
    {
        time: "12 Pm",
        slots:[
            {
                id: "687398309382",
                starting_time: "12:15 Pm",
                ending_time: "12:30 Pm"
            },
            {
                id: "6873983092242",
                starting_time: "12:30 Pm",
                ending_time: "12:45 Pm"
            },
            {
                id: "6873983092802",
                starting_time: "12:45 Pm",
                ending_time: "01:00 Pm"
            }
        ]
    },
    {
        time: "1 Pm",
        slots:[
            {
                id: "687398309432",
                starting_time: "01:15 Pm",
                ending_time: "01:30 Pm"
            },
            {
                id: "6873483092882",
                starting_time: "01:30 Pm",
                ending_time: "01:45 Pm"
            },
            {
                id: "6873583092842",
                starting_time: "01:45 Pm",
                ending_time: "02:00 Pm"
            }
        ]
    },
    {
        time: "2 Pm",
        slots:[
            {
                id: "687393309032",
                starting_time: "02:15 Pm",
                ending_time: "02:30 Pm"
            },
            {
                id: "6872983092882",
                starting_time: "02:30 Pm",
                ending_time: "02:45 Pm"
            },
            {
                id: "6873983032842",
                starting_time: "02:45 Pm",
                ending_time: "03:00 Pm"
            }
        ]
    },
    {
        time: "3 Pm",
        slots:[
            {
                id: "6872398309032",
                starting_time: "03:15 Pm",
                ending_time: "03:30 Pm"
            },
            {
                id: "68273983092882",
                starting_time: "03:30 Pm",
                ending_time: "03:45 Pm"
            },
            {
                id: "68733983092842",
                starting_time: "03:45 Pm",
                ending_time: "04:00 Pm"
            }
        ]
    },
    {
        time: "4 Pm",
        slots:[
            {
                id: "6873983409032",
                starting_time: "04:15 Pm",
                ending_time: "04:30 Pm"
            },
            {
                id: "68739830592882",
                starting_time: "04:30 Pm",
                ending_time: "04:45 Pm"
            },
            {
                id: "68739830928442",
                starting_time: "04:45 Pm",
                ending_time: "05:00 Pm"
            }
        ]
    },
    {
        time: "5 Pm",
        slots:[
            {
                id: "6873982309032",
                starting_time: "05:15 Pm",
                ending_time: "05:30 Pm"
            },
            {
                id: "68739813092882",
                starting_time: "05:30 Pm",
                ending_time: "05:45 Pm"
            },
            {
                id: "68739830924842",
                starting_time: "05:45 Pm",
                ending_time: "06:00 Pm"
            }
        ]
    },
    {
        time: "6 Pm",
        slots:[
            {
                id: "6817398309032",
                starting_time: "06:15 Pm",
                ending_time: "06:30 Pm"
            },
            {
                id: "68739830492882",
                starting_time: "06:30 Pm",
                ending_time: "06:45 Pm"
            },
            {
                id: "68739830892842",
                starting_time: "06:45 Pm",
                ending_time: "07:00 Pm"
            }
        ]
    },
    {
        time: "7 Pm",
        slots:[
            {
                id: "6187398309032",
                starting_time: "07:15 Pm",
                ending_time: "07:30 Pm"
            },
            {
                id: "62873983092882",
                starting_time: "07:30 Pm",
                ending_time: "07:45 Pm"
            },
            {
                id: "68733983092842",
                starting_time: "07:45 Pm",
                ending_time: "08:00 Pm"
            }
        ]
    },
    {
        time: "8 Pm",
        slots:[
            {
                id: "6187398309032",
                starting_time: "08:15 Pm",
                ending_time: "08:30 Pm"
            },
            {
                id: "63873983092882",
                starting_time: "08:30 Pm",
                ending_time: "08:45 Pm"
            },
            {
                id: "68753983092842",
                starting_time: "08:45 Pm",
                ending_time: "09:00 Pm"
            }
        ]
    },
    {
        time: "9 Pm",
        slots:[
            {
                id: "6873983090321",
                starting_time: "09:15 Pm",
                ending_time: "09:30 Pm"
            },
            {
                id: "68739830928832",
                starting_time: "09:30 Pm",
                ending_time: "09:45 Pm"
            },
            {
                id: "68739830928492",
                starting_time: "09:45 Pm",
                ending_time: "10:00 Pm"
            }
        ]
    },
]