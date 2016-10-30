function ideas(state = [], action) {
  console.log('ideas reducer working');
  switch (action.type) {
    case 'ADD_IDEA':
      // return existing state + new idea
      return [...state, {
        title: action.title,
        category: action.category,
      }];
//    case 'REMOVE_IDEA':
      // return existing state minus referenced idea
    default:
      return state;
  }
}

export default ideas;
