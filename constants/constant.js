export const stations =[
    {
        station_name: "7 Food Court Suryapet Charging Station",
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Address: "NH-65, Rayangudem",
        available_connectors: 2,
        chargers:[{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb7282',
            name:"Charger A",
            type:"CCS-2",
            price:175,
            minutes: 15,
            capacity:"20KW"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb3779',
            name:"Charger B",
            price:275,
            type:"AC Type-2",
            minutes: 15,
            capacity:"30KW"
        },
    ]
    },
    {
        station_name: "ARIA Mall Charging Station",
        Address: "Sector 68",
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb27oa',
        available_connectors: 3,
        chargers:[{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2y27',
            name:"Charger A",
            price:175,
            type:"AC Type-2",
            minutes: 15,
            capacity:"20KW"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2673',
            name:"Charger B",
            price:275,
            type:"AC Type-2",
            minutes: 15,
            capacity:"30KW"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2y7h',
            name:"Charger C",
            price:275,
            type:"CCS-2",
            minutes: 15,
            capacity:"20KW"
        },
    ]
    }
]

export const slots=[
    {
        id:"687398309032",
        starting_time:"10:15 Am",
        ending_time:"10:30 Am"
    },
    {
        id:"6873983092882",
        starting_time:"10:30 Am",
        ending_time:"10:45 Am"
    },
    {
        id:"6873983092842",
        starting_time:"10:45 Am",
        ending_time:"11:00 Am"
    }
]