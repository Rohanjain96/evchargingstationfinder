// import React, { createContext, useContext, useReducer, useState } from 'react'

import { createContext, useContext, useReducer, useState } from "react"

const userstate = {
  user: {}
}


const userreducer = (state, action) => {
  switch (action.type) {
    case "changeuser":
      Object.assign(state.user, action.payload)
      default:
        return state;
      }
    }
    
    const StateContext = createContext();
    const StateProvider = ({ children }) => {
      const [user, userdispatch] = useReducer(userreducer, userstate)
      const [location, setLocation] = useState([])
      const [selectedCharger,setSelectedCharger] = useState("")
      const [selectedSlots,setSelectedSlots] = useState([])
      const [selectedDate,setSelectedDate] = useState("")
      const [selectedStation,setSelectedStation] = useState(null)
      const [AllSlots, setAllSlots] = useState([])
      return (
        <>
      <StateContext.Provider value={{ user, setUser: userdispatch, location, setLocation,selectedCharger,setSelectedCharger,
        selectedSlots,setSelectedSlots,selectedDate,setSelectedDate,selectedStation,setSelectedStation,AllSlots, setAllSlots }}>
        {children}
      </StateContext.Provider>
    </>
  )
}
export const State = () => { return useContext(StateContext) }
export default StateProvider