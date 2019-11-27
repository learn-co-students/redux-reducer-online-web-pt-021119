export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":

    return {...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
    let newState = {...state}
    newState.friends = newState.friends.filter(f => f.id !== action.id)
    return newState
    default:
     return state
  }
}
// let state = {friends: []}
// let action = {
//     type: "ADD_FRIEND",
//     friend: {
//       name: "Chrome Boi"
//       hometown: "NYC",
//       id: 1
//     }
//   }
//
//   action = {
//     type: "REMOVE_FRIEND",
//     id: 1
//   }
