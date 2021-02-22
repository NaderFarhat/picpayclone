import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

// export const Container = styled.ScrollView``;

export const HeaderContainer = styled.View`
  position: absolute;
  background-color: #1c1c1c;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
`;

export const Header = styled.View`
  background-color: #f2f2f2;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const IconsQr = styled.View`
  flex-direction: row;
`;

export const SearchSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #e5e5e5;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 90%;

  text-align: center;

  border-width: 2;
  border-color: #cccccc;
  border-radius: 20;
`;

export const SearchSectionAll = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextInput)``;

export const Row = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Container = styled.ScrollView`
  padding-top: 80px;
`;

export const CardStore = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  margin-top: 20px;
`;

export const ContainerCard = styled.View`
  flex-direction: column;
  flex: 0.8;
  padding-right: 10px;
  padding-left: 10px;
`;
export const ContainerCardImage = styled.View`
  flex-direction: column;
  flex: 0.2;
  flex-wrap: nowrap;
  justify-content: center;
  padding-right: 10px;
  padding-left: 20px;
`;

export const HighlightsContainer = styled.ScrollView`
  padding-left: 20px;
`;

export const HighlightsContainerImage = styled.View`
  padding: 20px 2px;
  margin-right: 20px;
`;

export const Highlights = styled.Image`
  height: 180px;
  width: 320px;
  border-radius: 8px;
`;

export const Avatar = styled.Image``;
