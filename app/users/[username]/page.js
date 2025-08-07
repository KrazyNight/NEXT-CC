import React from 'react'

const page = ({ params }) => {
    const { username } = params
    console.log(username)
  return (
    <h1>This is the user: {username} </h1>
  );
}

export default page;
