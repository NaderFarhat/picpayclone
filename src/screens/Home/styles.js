import styled from "styled-components";
import { TextInput } from "react-native";

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: #000;
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const IconsQr = styled.View`
  flex-direction: row;
`;

export const SearchSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 90%;

  text-align: center;

  border-width: 2;
  border-color: #cccccc;
  border-radius: 20;
`;

export const Input = styled(TextInput)``;

export const SearchSectionAll = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
