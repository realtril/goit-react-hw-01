import React from "react";
import styles from "../FriendsList/FriendList.module.css";

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friend}>
      <span
        className={`${"status"} ${isOnline ? styles.online : styles.offline}`}
      >
        ....
      </span>
      <span className={styles.status}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default Friend;
