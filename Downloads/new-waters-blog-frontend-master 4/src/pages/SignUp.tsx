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
import axios from "axios";
import { register } from "../utils";

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

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          username,
          password,
        }
      );
      if (response.status == 200) {
        register(response.data.token);
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
          <Typography color="error">Something went wrong!</Typography>
        )}
        <Grid container justify="space-around">
          <Typography>Register</Typography>
          <Grid container justify="space-around">
            <Grid item>
              <Grid item>
                <TextField
                  name="username"
                  id="username"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="password"
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Register
              </Button>
              <Link to="/sign-in">Back to Sign In</Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PaperBox>
  );
};

export default SignUp;
