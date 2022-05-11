import { Routes, Route } from "react-router-dom";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Navbar from "./Navbar";
import PostDetail from "./PostDetail";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/post/:postId" element={<PostDetail/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
