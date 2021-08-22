import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import Blog from "../components/Blog";
import { Button } from "@material-ui/core";
import { logout } from "../utils";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const RowToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

// LOGOUT BUTTON & FUNCTIONALITY
const UserLogout = () => {
  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <Button
      color="secondary"
      variant="contained"
      type="button"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

// TOP APP BAR
function Home() {
  const name = window.localStorage.getItem("username");

  useEffect(() => {
    console.log(name);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <RowToolbar>
          {/* TITLE */}
          <Column>
            <Typography variant="h4">New Waters Blog</Typography>
            <Typography variant="h6">
              New's that brings life in the midst of chaos
            </Typography>
          </Column>
          <Typography variant="h3">Take it away {name}!</Typography>
          {/* LOGOUT BUTTON */}
          <UserLogout />
        </RowToolbar>
      </AppBar>
      <Toolbar id="return-to-top" />
      {/* BLOG */}
      <Blog />
    </React.Fragment>
  );
}

export default Home;
