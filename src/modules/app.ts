import { Reducer } from "redux";
import { createSlice } from "@reduxjs/toolkit";

type State = {
  count: number
}

const initialState: State = {
  count: 0
}

export const appModule = createSlice({
  name: 'app',
  initialState: {
    count: 0
  },
  reducers: {
    add: (state) => {
      state.count = state.count + 1
    },
    remove: (state) => {
      state.count = state.count - 1
    }
  }
})

export const add = () => {
  return {
   type: 'count/add'
  } as const
}

export const remove = () => {
  return {
     type: 'count/remove'
  } as const
}

type Actions =
  | ReturnType<typeof add>
  | ReturnType<typeof remove>


export const appReducer: Reducer<State, Actions> = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case 'count/add':
      return {
        ...state,
        count: state.count += 1
      }
    case 'count/remove':
      return {
        ...state,
        count: state.count -= 1
      }
    default:
      return state
  }
}