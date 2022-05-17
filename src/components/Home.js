import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id, // id of the post
          ...doc.data(), // spread operator
        }));
        console.log("posts", posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Aakash</div>
      {posts.map((post, index) => (
        <div key={`post-${index}`} className="post">
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
      ;
    </div>
  );
}

export default Home;
