import React from "react";
import Button from "@/components/Button";

const page = ({ params }) => {
  const { username } = params;
  
  console.log(username);
  return (
    <>
      <h1>This is the user: {username} </h1>
      <Button />
    </>
  );
};

export default page;
