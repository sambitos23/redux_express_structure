
let initial_state = {
  name: "",
  email: "",
  message: ""
}

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload }
    case "SET_NAME":
      return { ...state, name: action.payload }
    case "SHOW_SNACKBAR":
      return { ...state, message: action.payload }

    default:
      return state;
  }
}
