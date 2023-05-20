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
  return (
    <>
      <StateContext.Provider value={{ user, setUser: userdispatch }}>
        {children}
      </StateContext.Provider>
    </>
  )
}
export const State = () => { return useContext(StateContext) }
export default StateProvider