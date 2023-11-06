import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./app/Navbar.js";
import Home from "./app/Home.js";
import { SinglePostPage } from "./features/posts/SinglePostPage.js";
import { EditPostForm } from "./features/posts/EditPostForm.js";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
