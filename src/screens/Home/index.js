import React from "react";
import { Text, TextInput, View } from "react-native";
import {
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  Container,
  IconsQr,
  SearchSection,
  Input,
  SearchSectionAll,
} from "./styles";
import {
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";

import Suggestions from "../../components/Suggestions/index";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <IconsQr>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={30}
              color="#10c86e"
              style={{ marginHorizontal: 5 }}
            />
          </IconsQr>

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <SearchSectionAll>
          <SearchSection>
            <AntDesign
              name="search1"
              size={20}
              color="#000"
              style={{ paddingHorizontal: 10 }}
            />
            <Input placeholder="O que você quer pagar?" />
          </SearchSection>
        </SearchSectionAll>

        <Suggestions />
        <Activities />
        <Tips />
      </Container>
    </Wrapper>
  );
}
