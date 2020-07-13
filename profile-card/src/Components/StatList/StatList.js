import React from "react";
import StatItem from "../StatItem/StatItem";
import statsDb from "../../db/statistical-data.json";
import { Title, List } from "./StatListStyled";
const StatList = ({ title }) => {
  return (
    <>
      <Title> {title}</Title>
      <List>
        {statsDb.map((item) => {
          return (
            <StatItem
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </List>
    </>
  );
};
StatList.defaultProps = {
  title: "Upload stats",
};
export default StatList;
