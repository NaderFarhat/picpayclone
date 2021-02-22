import React from "react";
import { Text, StatusBar, TextInput } from "react-native";
import {
  Wrapper,
  HeaderContainer,
  Header,
  IconsQr,
  SearchSectionAll,
  SearchSection,
  Input,
  Row,
  Container,
  CardStore,
  ContainerCard,
  ContainerCardImage,
  Avatar,
  Highlights,
  HighlightsContainerImage,
  HighlightsContainer,
} from "./styles";
import {
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";

import img1 from "../../images/01.png";

import img2 from "../../images/imghigh1.png";
import img3 from "../../images/imghigh2.png";
import img4 from "../../images/imghigh3.png";
import img5 from "../../images/imghigh4.png";

const listStore = [
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
  {
    img: img1,
    title: "Recarga de Celular",
    subtitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Correios",
  },
];

const HighlightsList = [
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
];

export default function Pay() {
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <HeaderContainer>
        <Header>
          <IconsQr>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={30}
              color="#10c86e"
              style={{ marginHorizontal: 5 }}
            />
          </IconsQr>

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
        </Header>
      </HeaderContainer>
      <Container>
        <Row>
          <Text style={{ color: "#000", fontSize: 24, fontWeight: "bold" }}>
            Destaques
          </Text>
        </Row>

        <HighlightsContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {HighlightsList &&
            HighlightsList.map((item) => {
              return (
                <HighlightsContainerImage>
                  <Highlights source={item.img} />
                </HighlightsContainerImage>
              );
            })}
        </HighlightsContainer>

        <Row>
          <Text style={{ color: "#000", fontSize: 24, fontWeight: "bold" }}>
            Lojas
          </Text>
          <Text style={{ color: "#227d54", fontSize: 18 }}>{`Ver mais >`}</Text>
        </Row>

        {listStore &&
          listStore.map((store) => {
            return (
              <CardStore>
                <ContainerCardImage>
                  <Avatar source={store.img} />
                </ContainerCardImage>
                <ContainerCard>
                  <Text
                    style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}
                  >
                    {store.title}
                  </Text>
                  <Text style={{ color: "#6e6f71", fontSize: 18 }}>
                    {store.subtitle}
                  </Text>
                </ContainerCard>
              </CardStore>
            );
          })}
      </Container>

      {/* <Text>Store</Text> */}
    </Wrapper>
  );
}
