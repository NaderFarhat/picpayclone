import styled from "styled-components";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingTop: 16,
  },
}))`
  background: #fff;
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #000;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;

export const TabContainer = styled.View`
  background-color: white;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  /* padding: 20px; */
  padding-right: 20px;
  /* height: 20%; */
  align-items: center;
  /* margin-top: 10px; */
  /* height: 40px; */
`;

export const ContainerTab = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

export const Button = styled.View`
  background-color: #fff;
  margin-right: 10px;
  margin-left: 10px;
`;
