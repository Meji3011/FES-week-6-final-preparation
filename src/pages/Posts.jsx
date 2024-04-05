import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";

function Posts() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchId, setSearchId] = useState(id);

  const onSearch = () => {
    fetchPosts(searchId);
  };

  async function fetchPosts(userId) {
    setLoading(true);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`
    );
    //   console.log(data);
    // For checking if the data we receive is what we want.
    setPosts(data);
    setTimeout(() => {
      setLoading(false);
    }, 300);
    //   Don't need to have a set time out, it's just for testing whether or not the skeleton loading state is displaying correctly or not.
  }

  useEffect(() => {
    fetchPosts();
  }, [id]);

  return (
    <>
      <div>
        <div className="post__search">
          <button onClick={() => navigate("/")}>← Back</button>
          {/* Always remember to add a arrow function so it doesn't call the function immediately. */}
          <div className="post__search--container">
            <label className="post__search--label">Search by Id</label>
            <input
              type="number"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && onSearch()}
              //   onKeyUp={(e) => {
              //     if (e.key === "Enter" ) {
              //       onSearch();
              //     }
              //   }}
              // The two onKeyUp achieves the same thing. We can also explictely write a function like onKeyPressSearch if we need to reuse it elsewhere.
              //   Like this
              // const handleKeyUp = (e) => {
              //     if (e.key === 'Enter') {
              //       onSearch();
              //     }
              //   };

              // In your JSX:
              //   <input type="text" onKeyUp={handleKeyUp} />
            />
            {/* very important to remember, value and onChange */}
            <button onClick={() => onSearch()}>Enter</button>
          </div>
        </div>
        {loading
          ? Array(10)
              .fill(0)
              .map((_, index) => (
                <div className="post" key={index}>
                  <div className="post__title">
                    <div className="post__title--skeleton"></div>
                  </div>
                  <div className="post__body">
                    <p className="post__body--skeleton"></p>
                  </div>
                </div>
              ))
          : posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default Posts;
