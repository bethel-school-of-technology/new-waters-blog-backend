import { Typography } from "@material-ui/core";
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

const Button = styled.button`
// display: flex;
// justify-content: center;
// align-item: center;
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 10px 50px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  }
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
            <Button>Save Post</Button>
          </Column>
          {/* <a href="localhost:3000/" target="home">
            <Button> Back </Button>
          </a> */}
        </form>
      </CenterDiv>
    </>
  );
};
export default CreateNew;
