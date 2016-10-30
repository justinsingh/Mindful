export function addIdea(title, category) {
  return {
    type: 'ADD_IDEA',
    title,
    category,
  };
}

export function removeIdea(key) {
  return {
    type: 'REMOVE_IDEA',
    key
  };
}
