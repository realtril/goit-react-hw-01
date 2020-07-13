import styled from "styled-components";
export const Item = styled.li`
  width: 100px;
  background-color: ${() =>
    "#" +
    (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()};
  text-align: center;
`;
export const Label = styled.span`
  padding: 10 px 0 0 0;
  display: block;
  font-size: 12px;
`;
export const Percentage = styled.span`
  padding: 20px 0;
  display: block;
  font-size: 18px;
`;
