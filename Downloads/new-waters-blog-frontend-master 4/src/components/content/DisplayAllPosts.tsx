import React, { useState, useRef, useEffect } from "react";
import CreateNewPost from "./CreateNew";
import Post from "./Submitted";
import ModifyPost from "./Edit";
import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";
import axios from "axios";

const ButtonAdjuster = styled.div`
  padding-top: 2px;
  padding-left: 8px;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const DisplayAllPosts = () => {
  //   const [image, setImage] = useState("");
  // const getImage = useRef();
  //   const savePostImageToState = (event) => {
  //     setImage(event.target.value);
  //   };

  // Initialize useRef
  const getTitle = useRef();
  const getContent = useRef();

  // ALL POSTS
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/blog").then((posts) => {
      setAllPosts(posts.data);
      console.log("ALLPOSTS", posts.data);
    });
  }, []);

  // TITLE
  const [title, setTitle] = useState("");
  const savePostTitleToState = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  // CONTENT
  const [content, setContent] = useState("");
  const savePostContentToState = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContent(event.target.value);
  };

  // CREATE NEW POST
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  // EDIT POST
  const [editPostId, setEditPostId] = useState("");

  const editPost = (id: React.SetStateAction<string>) => {
    setEditPostId(id);
    console.log(id);
    toggleModifyPostComponent();
  };

  const [isModifyPost, setIsModifyPost] = useState(false);

  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };

  // DELETE POST RETURN
  const deletePost = async (id: any) => {
    const response = await axios.delete(`http://localhost:5000/api/blog/${id}`);

    if ((response.status = 200)) {
      const modifiedPosts = allPosts.filter((post) => {
        return post._id !== id;
      });

      setAllPosts(modifiedPosts);
    }
  };

  // EDIT POST REQUEST
  const updatePost = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const updatedPost = await axios.put(
      `http://localhost:5000/api/blog/${editPostId}`,
      {
        title,
        content,
      }
    );
    const updatedAllPosts = allPosts.map((post) => {
      if (post._id === updatedPost.data._id) {
        return updatedPost.data;
      }
      return post;
    });
    setAllPosts(updatedAllPosts as any);
    toggleModifyPostComponent();
  };

  // SAVE POST
  const savePost = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newPostResponse = await axios.post("http://localhost:5000/api/blog", {
      title,
      content,
    });
    setAllPosts([newPostResponse.data, ...allPosts]);
    console.log(allPosts);
    // setImage("");
    // getImage.current.value = "";
    setTitle("");
    getTitle.current.value = "";
    setContent("");
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  // SEE IN THE CONSOLE
  const name = window.localStorage.getItem("username");
  useEffect(() => {
    console.log(name);
  }, []);

  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          //   savePostImageToState={savePostImageToState}
          //   getImage={getImage}
          savePostTitleToState={savePostTitleToState}
          getTitle={getTitle}
          savePostContentToState={savePostContentToState}
          getContent={getContent}
          savePost={savePost}
        />
      </>
    );
  } else if (isModifyPost) {
    const post = allPosts.find((post) => {
      return post._id === editPostId;
    });
    return (
      <ModifyPost
        // image={post.image}
        // savePostImageToState={savePostImageToState}
        title={post.title}
        savePostTitleToState={savePostTitleToState}
        content={post.content}
        savePostContentToState={savePostContentToState}
        updatePost={updatePost}
      />
    );
  }

  // MAIN RETURN - DISPLAY ALL POSTS
  return (
    <>
      {
        // allPosts.length == 0 ? (
        //   <CenterDiv></CenterDiv>
        // ) : (
        allPosts.map((eachPost) => {
          return (
            <Post
              // image={eachPost.image}
              id={eachPost._id}
              key={eachPost._id}
              title={eachPost.title || ""}
              content={eachPost.content || ""}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
        // )
      }
      <CenterDiv>
        <Button>
          <Button variant="contained" onClick={toggleCreateNewPost}>
            Create New Post
          </Button>
        </Button>
      </CenterDiv>
    </>
  );
};

export default DisplayAllPosts;
