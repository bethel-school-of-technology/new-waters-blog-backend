import React, { useState } from "react";
import { useHistory } from "react-router";
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
import { login } from "../utils";
import axios from "axios";

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  min-width: 30rem;
`;

const PaperBox = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          username,
          password,
        }
      );
      if (response.status == 200) {
        login(response.data.token);
        history.push({
          pathname: "/",
        });
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PaperBox>
      <Box>
        {showError && (
          <Typography color="error">Wrong password or username!</Typography>
        )}
        <Grid container justify="space-around">
          <Typography>Sign In</Typography>
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
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Login
              </Button>
              <Link to="/sign-up">Sign Up / Register</Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PaperBox>
  );
};

export default SignIn;
