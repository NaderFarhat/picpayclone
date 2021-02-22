import styled from "styled-components";
import { TextInput, Text } from "react-native";

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const HeaderContainer = styled.View`
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
`;

export const Header = styled.View`
  background-color: #fff;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-left: 10px;
  padding-right: 10px;
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

export const TextNotification = styled.Text`
  padding: 10px;
  font-size: 18px;
  max-height: 140px;
`;

export const TextNotificationDate = styled.Text`
  padding: 10px;
  font-size: 14px;
  color: #b4b4b4;
  /* height: 140px; */
`;

export const SubTitle = styled.View`
  padding-left: 10px;
  /* flex-direction: row;
  flex: 1; */
`;

export const Title = styled.View`
  padding-left: 10px;
  /* flex-direction: row;
  flex: 1; */
`;

export const Card = styled.View`
  background-color: #fff;
  border-bottom-color: #e3e3e3;
  border-bottom-width: 2px;
  max-height: 140px;
  margin-right: 10px;
  margin-left: 10px;
`;
