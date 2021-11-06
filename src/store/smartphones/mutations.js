export function smartphonesMutation(state, smartphones) {
  return (state.smartphones = smartphones);
}

export function filterPhones(state, id) {
  return (state.smartphones.smartphones = state.smartphones.smartphones.filter(
    (smartphone) => smartphone._id !== id
  ));
}
