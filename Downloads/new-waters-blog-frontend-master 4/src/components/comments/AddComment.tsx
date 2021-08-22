import { TextField, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ItemsContext from "./Context";
import styled from "styled-components";
// import { Button } from "@material-ui/core";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  // background: red;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 6rem;
  // height: 1.5rem;
`;

const AddComment = () => {
  const [item, setItem] = useState("");
  const { Dispatch } = useContext(ItemsContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Dispatch({ type: "ADD", item });
    setItem("");
  };

  return (
    <div>
      <Typography color="primary" variant="h5" align="center"></Typography>
      <CenterDiv>
        <form onSubmit={handleSubmit}>
          <Column>
            <TextField
              fullWidth
              margin="normal"
              autoFocus
              placeholder="Leave your thoughts here"
              // style={{ marginBottom: 5 }}
              value={item}
              variant="outlined"
              onChange={(e) => setItem(e.target.value)}
              minRows={78}
              type="Comment textfield"
            />
            <Button>Submit</Button>
          </Column>
        </form>
      </CenterDiv>
    </div>
  );
};

export default AddComment;
