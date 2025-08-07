import React from 'react';

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};



const Posts = async () => {
  const posts = await fetchData();
  
  console.log(posts);

  return (
    <>
    <h1>Weclome to the Post Page!</h1>
    {posts.map((post) => (
      <p>{post.title}</p>
    ))}
    </>
  );
}

export default Posts;
