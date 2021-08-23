import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Button = styled.button`
// display: flex;
// justify-content: center;
// align-item: center;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

const Edit = (props: any) => {
  return (
    <>
      <CenterDiv>
        <form>
          <Column>
            <Typography variant="h4">Edit Post</Typography>
            <input
              defaultValue={props.title}
              onChange={props.savePostTitleToState}
              type="text"
              placeholder="title"
            />
            <textarea
              defaultValue={props.content}
              placeholder="contents"
              onChange={props.savePostContentToState}
            ></textarea>
            <Button onClick={props.updatePost} color="secondary">
              Edit
            </Button>
          </Column>
        </form>
      </CenterDiv>
    </>
  );
};
export default Edit;
