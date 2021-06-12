
export function setEmail(email) {
  return {
    type: "SET_EMAIL",
    payload: email
  }
}

export function setName(name) {
  return {
    type: "SET_NAME",
    payload: name
  }
}

export function addUserAPI(email, name) {
  return (dispatch) => {
    return fetch("http://localhost:8000/add_user", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        name: name
      })
    })
      .then(res => res.json())
      .then((resJson) => {
        dispatch(showSnackbar(resJson.message));
      })
  }
}

export function showSnackbar(message){
  return {
    type: "SHOW_SNACKBAR",
    payload: message
  }
}