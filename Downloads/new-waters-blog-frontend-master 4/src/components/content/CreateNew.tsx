import { Button, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

// Create New Post
const CreateNew = (props: any) => {
  return (
    <>
      <CenterDiv>
        <form onSubmit={props.savePost}>
          <Column>
            <Typography variant="h3">Create New Post</Typography>
            <input
              type="text"
              onChange={props.savePostTitleToState}
              placeholder="title"
              required
              ref={props.getTitle}
            ></input>
            <textarea
              onChange={props.savePostContentToState}
              placeholder="contents"
              required
              ref={props.getContent}
            ></textarea>
            <Button variant="contained">
              <button>Save Post</button>
            </Button>
          </Column>
        </form>
      </CenterDiv>
    </>
  );
};
export default CreateNew;
