import React from "react";
import UserAvatar from "./UserAvatar";
import WithBorder from "../../components/WithBorder";

const UserWithBorder = WithBorder(UserAvatar);

const GameResult = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <UserAvatar
        imageUrl={
          "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <UserAvatar
        imageUrl={
          "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <UserWithBorder
        imageUrl={
          "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <UserAvatar
        imageUrl={
          "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
};

export default GameResult;
