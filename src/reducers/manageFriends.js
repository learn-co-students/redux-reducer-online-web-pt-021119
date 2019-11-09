export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return { name: state.name hometown: state.hometown id: state.id}
    case 'REMOVE_FRIEND':
      return {}
    default:
    return state
  }
}
