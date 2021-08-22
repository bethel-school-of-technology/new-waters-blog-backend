import React, { useContext, useEffect } from "react";
import Context from "./Context";
import Comments from "./Comments";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const CommentStyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const CommentList = () => {
  const { items } = useContext(Context);
  const name = window.localStorage.getItem("username");

  useEffect(() => {
    console.log(name);
  }, []);

  return (
    <div className="itemsContainer">
      <ul>
        <CommentStyling>
          {items.map((item) => (
            <>
              <Typography variant="h6">{name}</Typography>
              <Comments key={item} item={item} />
            </>
          ))}
        </CommentStyling>
      </ul>
    </div>
  );
};

export default CommentList;
