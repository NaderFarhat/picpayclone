import styled from "styled-components";
import { TextInput } from "react-native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: false,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    // alignItems: "center",
    paddingTop: 16,
  },
}))`
  background: #fff;
  /* height: 130px; */
`;

export const CardStore = styled.View`
  flex: 1;
  flex-wrap: wrap;
  margin-top: 10px;
  background-color: #fff;
  padding-top: 10px;
  height: 110px;
  width: 120px;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ContainerCard = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  padding-left: 10px;
  margin-bottom: 12px;
`;
export const ContainerCardImage = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 0px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const LocationCard = styled.View`
  flex-direction: column;
`;

export const LocationCardContainer = styled.View`
  border-radius: 8px;
  flex-direction: row;
  margin-top: 10px;
  height: 170px;
  width: 375px;
  background-color: #fff;
`;

export const LocationCardTop = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
`;

export const LocationCardImage = styled.View``;

export const Card = styled.View`
  flex-direction: column;
`;

export const Input = styled(TextInput)``;

export const SearchSectionAll = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const IconsQr = styled.View`
  position: absolute;
  top: 10px;
  left: 16px;
  z-index: 999999;
`;
