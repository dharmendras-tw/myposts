import React from "react";
import { AddPostForm } from "../features/posts/AddPostForm.js";
import { PostsList } from "../features/posts/PostsList.js";

function Home() {
  return (
    <React.Fragment>
        <AddPostForm />
        <PostsList />
    </React.Fragment>
  );
}   

export default Home;