import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/auth";

const UserAvatar = async () => {
  const session = await auth();

  if (!session?.user) return null;
  return (
    <Avatar>
      <AvatarImage src={String(session.user.image)} alt="User Avatar" />
      <AvatarFallback>{session.user.email}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
