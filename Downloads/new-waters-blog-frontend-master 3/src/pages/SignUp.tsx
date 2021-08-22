import React from "react";
import {
  Grid,
  TextField,
  Button,
  Box as MuiBox,
  Paper as MuiPaper,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  ]min-width: 30rem;
`;

const PaperBox = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 10rem;
  padding: 3rem;
  // max-width: 85rem;
`;

export default class SignUp extends React.Component {
  // state = {
  //   username: "",
  //   password: false,
  // };

  // handleChange = (event: any) => {
  //   const input = event.target;
  //   const value = input.value;

  //   this.setState({ [input.name]: value });
  // };

  // componentDidMount() {
  //   // const password = localStorage.Item("password", JSON.stringify(password as any));
  //   // const username = localStorage.setItem("username", JSON.stringify(username as any));
  //   // this.setState({ username, password });
  // }

  // handleFormSubmit = (props: any) => {
  //   const { username, password } = this.state;
  //   // localStorage.setItem("password", password as any);
  //   // localStorage.setItem("username", password ? username : "");

  //   // (localStorage.getItem(username as any && password as any) !== null)

  //   if (localStorage.setItem("username", password ? username : "") !== null)
  //     if (localStorage.setItem("password", password as any) !== null) {
  //       console.log(`password and username was created`);
  //       // login();
  //       // props.history.push("/");
  //     } else {
  //       console.error(`password and username NOT created`);
  //     }
  //   props.preventDefault();
  // };

  state = {
    username: "",
    password: "",
  };

  handleChange = (event: any) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });
    this.setState({ [input.password]: value });
  };

  componentDidMount() {
    const password = localStorage.getItem("password") === "";
    const username = localStorage.getItem("username") === "";
    this.setState({ username, password });
  }

  handleFormSubmit = (props: any) => {
    const { username, password } = this.state;
    // localStorage.setItem("password", password as any);
    // localStorage.setItem("username", password ? username : "");

    // (localStorage.getItem(username as any && password as any) !== null)

    if (localStorage.setItem("username", password ? username : "") !== null)
      if (localStorage.setItem("password", password as string) !== null) {
        console.log(`password and username exists`);
        // register();
      } else {
        console.error(`password and username NOT set`);
      }
    props.preventDefault();
  };

  // constructor (props: any) {
  //   super(props);
  //   this.myRef = React.createRef();
  // }
  // render() {
  //   return <div ref={this.myRef} />
  // }

  //   this.state.username = React.createRef(),
  //    this.password = React.createRef()

  //   signIn = (event: any) => {
  //   this.username = React.createRef(),
  //    this.password = React.createRef()

  //     localStorage.setItem("formData", JSON.stringify(formData));
  //     console.log(localStorage.getItem("formData"));
  //     event.preventDefault();
  //   }
  // componentDidMount() {
  //   const password = localStorage.getItem("password") === "true";
  //   const username = password ? localStorage.getItem("username") : "";
  //   this.setState({ username, password });
  // }

  // handleChange = (event: any) => {
  //   const input = event.target;
  //   const value = input.type === "checkbox" ? input.checked : input.value;

  //   this.setState({ [input.name]: value });
  // };

  // handleFormSubmit = (props: any) => {
  //   const { username, password } = this.state;
  //   // localStorage.setItem("password", password as any);
  //   // localStorage.setItem("username", password ? username : "");

  //   // (localStorage.getItem(username as any && password as any) !== null)

  //   if (localStorage.setItem("username", password ? username : "") !== null)
  //     if (localStorage.setItem("password", password as any) !== null) {
  //       console.log(`password and username exists`);
  //       login();
  //       props.history.push("/sign-in");
  //     } else {
  //       console.error(`password and username NOT found`);
  //     }
  // };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <PaperBox>
          <Box>
            <Grid container justify="space-around">
              <Typography>Register</Typography>
              <Grid container justify="space-around">
                <Grid item>
                  {/* USERNAME */}
                  <Grid item>
                    <TextField
                      name="username"
                      id="username"
                      label="Username"
                      type="username"
                      variant="outlined"
                      value={this.state.username}
                      onChange={this.handleChange}
                      // onChange={(e) => {
                      //   setUsername(e.target.value);
                      // }}
                    />
                  </Grid>
                  {/* PASSWORD */}
                  <Grid item>
                    <TextField
                      name="password"
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={this.state.password}
                      onChange={this.handleChange}
                      // onChange={(e) => {
                      //   setPassword(e.target.value);
                      // }}
                    />
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    // onClick={() => handleLogin()}
                    // onClick={login}
                    // disabled={isSubmitting}
                  >
                    Register
                  </Button>
                  <Link to="/sign-in">Back to Sign In</Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </PaperBox>
      </form>
    );
  }
}
