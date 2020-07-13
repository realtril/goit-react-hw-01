import React from "react";
import PropTypes from "prop-types";
import { Item, Label, Percentage } from "./StatItemStyled";
const StatItem = ({ percentage, label }) => {
  return (
    <Item>
      <Label> {label} </Label>
      <Percentage> {percentage} % </Percentage>
    </Item>
  );
};

export default StatItem;
StatItem.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
