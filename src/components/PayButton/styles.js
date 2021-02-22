import styled from "styled-components/native";
// import { Button } from "react-native";

export const Button = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ focused }) => (focused ? "#016533" : "#00ac4a")};
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 12px;
`;
