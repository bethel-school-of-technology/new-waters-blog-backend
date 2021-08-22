import React from "react";
import { Button, Typography } from "@material-ui/core";
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
