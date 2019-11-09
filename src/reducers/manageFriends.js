export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      let friend = {
        name: action.friend.name,
        hometown: action.friend.hometown,
        id: action.friend.id
    }
      return { friends: [...state.friends, friend] }
    case 'REMOVE_FRIEND':
      let friends = state.friends.filter(f => { if(f.id != action.id) return f });
      return { friends: friends }
    default:
      return state
  }
}
