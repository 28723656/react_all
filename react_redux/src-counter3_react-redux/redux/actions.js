/*
包含所有的action creator
 */



import {DECREMENT, INCREMENT} from "./action-types";

// 增加
export const increment = (num) =>({type: INCREMENT, data: num})

// 减少
export const decrement= (num) =>({type: DECREMENT, data: num})

