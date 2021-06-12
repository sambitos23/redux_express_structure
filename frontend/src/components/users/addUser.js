import { Snackbar, TextField, Button, Card, CardContent, Grid } from "@material-ui/core";
import React from "react";

export default class AddUsers extends React.Component {
  render() {
    const {
      setEmail,
      setName,
      users,
      addUserAPI
    } = this.props;

    return (
      <Grid container>


        {/* <Grid item sm={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <TextField
                label="email"
                fullWidth
                variant="outlined"
                margin="dense"
                value={users.email}
                onChange={(e) => { setEmail(e.target.value) }}
              />

              <TextField
                label="name"
                fullWidth
                variant="outlined"
                margin="dense"
                value={users.name}
                onChange={(e) => { setName(e.target.value) }}
              />

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => {
                  addUserAPI(users.email, users.name)
                }}
              >
                ADD USER
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          open={users.message.length > 0 ? true : false}
          autoHideDuration={6000}
          message={users.message}
        /> */}

      </Grid>
    )
  }
}