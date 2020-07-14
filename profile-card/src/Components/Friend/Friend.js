import React from "react";
import styles from "../FriendsList/FriendList.module.css";
// const style = [styles.offline, styles.online];
const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friend}>
      <span className={styles.status}>{isOnline}</span>
      <img
        className={[
          styles.avatar,
          isOnline ? styles.online : styles.offline,
        ].join(" ")}
        src={avatar}
        alt=""
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default Friend;
