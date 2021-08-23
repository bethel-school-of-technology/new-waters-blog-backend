import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import styled from "styled-components";
import Drawer from "../Drawer";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonPadding = styled.div`
  padding: 2px;
`;

const Padding = styled.div`
  padding: 1rem;
`;

const Submitted = (props: any) => {
  const { title, content, editPost, id, deletePost } = props;

  // MICHEAL
  // useEffect(() => {
  //   localStorage.setItem("content", JSON.stringify(content));
  // }, [content]);

  // useEffect(() => {
  //   localStorage.setItem("title", JSON.stringify(title));
  // }, [title]);
  // MICHEAL

  // id dont know
  useEffect(() => {
    console.log("POSTSSS", props);
  }, []);

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    localStorage.setItem("title", JSON.stringify(title));
  }, [title]);

  // useEffect(() => {
  //   localStorage.setItem("edit", JSON.stringify(editPost));
  // }, [editPost]);

  return (
    <>
      <Padding>
        <section>
          <Typography variant="h4" display="block" align="center">
            {title}
          </Typography>
          {/* <p>{image}</p> */}
          <Typography variant="body1" display="block" align="center">
            {content}
          </Typography>
          <Drawer />
          <div>
            <CenterDiv>
              <ButtonPadding>
                <button onClick={() => editPost(id)}>Edit</button>
              </ButtonPadding>
              <ButtonPadding>
                <button onClick={() => deletePost(id)}>Delete</button>
              </ButtonPadding>
            </CenterDiv>
          </div>
        </section>
      </Padding>
    </>
  );
};
export default Submitted;
