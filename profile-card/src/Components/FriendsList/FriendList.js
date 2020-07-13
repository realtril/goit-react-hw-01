import React from "react";
import Friend from "../Friend/Friend";
import friends from "../../db/friends.json";
import styles from "./FriendList.module.css";

const FriendList = () => {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
