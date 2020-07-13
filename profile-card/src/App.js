import PropTypes from "prop-types";
import React from "react";
import Profile from "./Components/Profile/Profile";
import StatList from "./Components/StatList/StatList";
import FriendList from "./Components/FriendsList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import user from "./db/user.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";
const data = [{ ...user }];
console.log(data);

function App() {
  return (
    <>
      {data.map((user) => (
        <Profile
          key={user.name + new Date()}
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      ))}
      <StatList />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />,
    </>
  );
}
export default App;

App.propTypes = {
  data: PropTypes.arrayOf({
    name: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.array,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    img: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  stats: PropTypes.array,
  friends: PropTypes.array,
  transactions: PropTypes.array,
};
