import { TextField, Button, CircularProgress, Dialog, DialogContent } from "@material-ui/core";
import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit_first_name: "",
      edit_last_name: "",
      edit_dialog: false
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleEditClick = (fname, lname) => {
    this.setState({
      edit_first_name: fname,
      edit_last_name: lname,
      edit_dialog: true
    })
  }

  render() {
    console.log(this.props.ct);
    let {
      ct
    } = this.props;
    return (
      <div>
        {ct.users.map((s) => (
          <div>
            {s.first_name} {s.last_name}
            <button
              onClick={() => { this.handleEditClick(s.first_name, s.last_name) }}
            >
              edit
            </button>
          </div>
        ))}
        {this.state.edit_first_name} <br />
        {this.state.edit_last_name} <br />

        <Dialog
          open={this.state.edit_dialog}
          onClose={() => { this.setState({ edit_dialog: false }) }}
        >
          <DialogContent>
            <TextField
              label="first name"
              value={this.state.edit_first_name}
              onChange={(e) => { this.setState({ edit_first_name: e.target.value }) }}
              fullWidth
            />
            <TextField
              label="last name"
              value={this.state.edit_last_name}
              onChange={(e) => { this.setState({ edit_last_name: e.target.value }) }}
              fullWidth
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
            >
              edit user
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}