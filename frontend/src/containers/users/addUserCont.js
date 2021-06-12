import AddUsers from "../../components/users/addUser";
import { connect } from "react-redux";
import {
  setName,
  setEmail,
  addUserAPI
} from "../../actions/users/usersAction";

const mapStateToProps = (store) => {
  return {
    users: store.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (email) => {
      dispatch(setEmail(email))
    },
    setName: (name) => {
      dispatch(setName(name))
    },
    addUserAPI: (email, name)=>{
      dispatch(addUserAPI(email, name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers)