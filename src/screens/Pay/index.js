import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";
import {
  CardStore,
  ContainerCard,
  ContainerCardImage,
  LocationCard,
  LocationCardContainer,
  LocationCardImage,
  LocationCardTop,
  Card,
  Input,
  SearchSection,
  SearchSectionAll,
  Container,
  IconsQr,
} from "./styles";

import img1 from "../../images/01.png";
import locationImage from "../../images/location.png";

const listCards = [
  {
    title: "Pagar pessoas",
    icon: <Ionicons name="person-circle-outline" size={32} color="#10c86e" />,
  },
  {
    title: "Pix",
    icon: <Ionicons name="ios-close" size={32} color="#10c86e" />,
  },
  {
    title: "Pagar Boleto",
    icon: <Ionicons name="ios-barcode-outline" size={32} color="#10c86e" />,
  },
  {
    title: "Fazer cobrança",
    icon: <Fontisto name="arrow-return-left" size={32} color="#10c86e" />,
  },
];

const listServices = [
  {
    title: "Recarga de celular",
    icon: (
      <MaterialCommunityIcons
        name="cellphone-android"
        size={32}
        color="#10c86e"
      />
    ),
  },
  {
    title: "Cartão transporte",
    icon: <Ionicons name="bus-outline" size={32} color="#10c86e" />,
  },
];

export default function Pay() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [scrollYHeader, setScrollYHeader] = useState(new Animated.Value(0));
  const [titleWidth, setTitleWidth] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <IconsQr>
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={30}
          color="#10c86e"
          style={{ marginHorizontal: 5 }}
        />
      </IconsQr>
      <Animated.View
        style={[
          styles.header,
          {
            borderBottomWidth: scrollY.interpolate({
              inputRange: [0, 200],
              outputRange: [0, 2],
              extrapolate: "clamp",
            }),
            borderBottomColor: "#cccccc",
          },
          {
            height: scrollY.interpolate({
              inputRange: [0, 200],
              outputRange: [80, 32],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <Animated.Text
          onLayout={(e) => {
            const titleWidth = e.nativeEvent.layout.width;
            setTitleWidth(titleWidth);
          }}
          style={{
            color: "#000",
            fontWeight: "bold",
            marginRight: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [0, 90],
              extrapolate: "clamp",
            }),
            fontSize: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [26, 20],
              extrapolate: "clamp",
            }),
          }}
        >
          Transações
        </Animated.Text>
        <Animated.View
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 200],
              outputRange: [screenWidth * 0.9 - titleWidth, 0],
              extrapolate: "clamp",
            }),
          }}
        />
      </Animated.View>

      <Animated.ScrollView
        scrollEventThrottle={30}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#fff",
          paddingTop: 0,
          paddingTop: scrollY.interpolate({
            inputRange: [0, 200],
            outputRange: [0, 200],
            extrapolate: "clamp",
          }),
        }}
      >
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

        <ScrollView
          scrollEventThrottle={16}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: "#fff",
            height: 140,
            paddingHorizontal: 0,
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          {listCards &&
            listCards.map((store) => {
              return (
                <CardStore
                  style={{
                    shadowColor: "#fcba03",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                >
                  <ContainerCardImage>{store.icon}</ContainerCardImage>
                  <ContainerCard>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 18,
                        fontWeight: "normal",
                      }}
                    >
                      {store.title}
                    </Text>
                  </ContainerCard>
                </CardStore>
              );
            })}
        </ScrollView>

        <LocationCardContainer
          style={{
            shadowColor: "#fcba03",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginLeft: 16,
            marginBottom: 8,
          }}
        >
          <Card>
            <LocationCardTop>
              <Ionicons
                name="location-outline"
                size={24}
                color="#10c86e"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              />
              <LocationCard>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Locais próximos
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "normal" }}>
                  Confira estabelecimentos perto de você
                </Text>
              </LocationCard>
            </LocationCardTop>
            <LocationCardImage>
              <Image
                source={locationImage}
                style={{
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  width: 375,
                  marginTop: 20,
                }}
              />
            </LocationCardImage>
          </Card>
        </LocationCardContainer>

        <Text style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 20 }}>
          Serviços
        </Text>

        <ScrollView
          scrollEventThrottle={16}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: "#fff",
            height: 140,
            paddingHorizontal: 0,
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          {listServices &&
            listServices.map((store) => {
              return (
                <CardStore
                  style={{
                    shadowColor: "#fcba03",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                >
                  <ContainerCardImage>{store.icon}</ContainerCardImage>
                  <ContainerCard>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 18,
                        fontWeight: "normal",
                      }}
                    >
                      {store.title}
                    </Text>
                  </ContainerCard>
                </CardStore>
              );
            })}
        </ScrollView>
        <View style={{ backgroundColor: "#fff", height: 200 }} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
  },
  box: {
    height: 300,
    backgroundColor: "#DDD",
    margin: 7,
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    // fontSize: 18,
    fontWeight: "bold",
  },
});
