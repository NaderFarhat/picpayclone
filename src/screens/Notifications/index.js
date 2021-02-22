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
  TextNotification,
  HeaderContainer,
  Card,
  Title,
  SubTitle,
  TextNotificationDate,
} from "./styles";
import {
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";
import { StyleSheet, FlatList, Alert, Platform, StatusBar } from "react-native";

import Suggestions from "../../components/Suggestions/index";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

const FlatListItems = [
  {
    text:
      "💰 SÓ HOJE: 20% na PicPay Store 💰 Você tem 20% de volta em Uber, iFood, recarga de celular e muito mais. Toca Aqui!",
    date: "Ontem às 11:33",
  },
  {
    text:
      "💰 SÓ HOJE: 20% na PicPay Store 💰 Você tem 20% de volta em Uber, iFood, recarga de celular e muito mais. Toca Aqui!",
    date: "Ontem às 11:33",
  },
  {
    text:
      "💰 SÓ HOJE: 20% na PicPay Store 💰 Você tem 20% de volta em Uber, iFood, recarga de celular e muito mais. Toca Aqui!",
    date: "Ontem às 11:33",
  },
  {
    text: "Venha ver como ganhar R$10 no PicPay. É simples!",
    date: "12 de fev às 15:43",
  },
  {
    text:
      "Não passe vontade, passe no cartão 😏Peça seu PicPay Card, um cartão de crédito e débito, sem anuidade e com cashback!",
    date: "Ontem às 11:33",
  },
  {
    text:
      "Não passe vontade, passe no cartão 😏Peça seu PicPay Card, um cartão de crédito e débito, sem anuidade e com cashback!",
    date: "Ontem às 11:33",
  },
  {
    text:
      "Não passe vontade, passe no cartão 😏Peça seu PicPay Card, um cartão de crédito e débito, sem anuidade e com cashback!",
    date: "Ontem às 11:33",
  },
  {
    text: "Venha ver como ganhar R$10 no PicPay. É simples!",
    date: "12 de fev às 15:43",
  },
  {
    text: "Venha ver como ganhar R$10 no PicPay. É simples!",
    date: "12 de fev às 15:43",
  },
  {
    text:
      "💰 SÓ HOJE: 20% na PicPay Store 💰 Você tem 20% de volta em Uber, iFood, recarga de celular e muito mais. Toca Aqui!",
    date: "Ontem às 11:33",
  },
];

export default function Pay() {
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  };

  const Render_FlatList_Sticky_header = () => {
    var Sticky_header_View = (
      <Header>
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 22 }}>
          {" "}
          FlatList Sticky Header{" "}
        </Text>
      </Header>
    );

    return Sticky_header_View;
  };

  const headerHeight = 36 * 2;

  return (
    <Wrapper>
      {/* <Container> */}
      <StatusBar backgroundColor="#f2f2f2" barStyle={"dark-content"} />
      <HeaderContainer>
        <Header>
          <Text style={{ color: "#2c2c2c", fontSize: 24 }}>Notificações</Text>
          <Text style={{ color: "#31b87d", fontSize: 18 }}>Configurar</Text>
        </Header>
      </HeaderContainer>
      <FlatList
        // scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: headerHeight }}
        // ref={ref}
        data={FlatListItems}
        renderItem={({ item }) => (
          <Card key={Math.random()}>
            <Title>
              <TextNotification>{item.text}</TextNotification>
            </Title>
            <SubTitle>
              <TextNotificationDate>{item.date}</TextNotificationDate>
            </SubTitle>
          </Card>
        )}
      />
      {/* <FlatList
          data={FlatListItems}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item }) => (
            <TextNotification>{item.text}</TextNotification>
          )}
          ListHeaderComponent={Render_FlatList_Sticky_header}
          stickyHeaderIndices={[1]}
        /> */}
      {/* </Container> */}
    </Wrapper>
  );
}
