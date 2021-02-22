import React, { useState } from "react";

import {
  Container,
  Option,
  Img,
  Label,
  TabContainer,
  ContainerTab,
  Button,
} from "./styles";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import img1 from "../../images/01.png";
import img2 from "../../images/02.png";
import img3 from "../../images/03.png";
import img4 from "../../images/04.png";
import img5 from "../../images/05.png";
import img6 from "../../images/06.png";
import img7 from "../../images/07.png";

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: "Recarga de Celular",
  },
  {
    key: String(Math.random()),
    img: img2,
    label: "Uber",
  },
  {
    key: String(Math.random()),
    img: img3,
    label: "Ônibus",
  },
  {
    key: String(Math.random()),
    img: img4,
    label: "TV",
  },
  {
    key: String(Math.random()),
    img: img5,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: img6,
    label: "Pagar Conta",
  },
  {
    key: String(Math.random()),
    img: img7,
    label: "Cobrar",
  },
];

const itemFav = [
  {
    key: String(Math.random()),
    img: img2,
    label: "Uber",
  },
];

export default function Suggestions() {
  const [tab, setTab] = useState(1);
  const onPress = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <ContainerTab>
        <TouchableWithoutFeedback onPress={() => onPress(1)}>
          <Button title="" tab={tab}>
            <Text>Sugestões</Text>
          </Button>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onPress(2)}>
          <Button title="" tab={tab}>
            <Text>Favoritos</Text>
          </Button>
        </TouchableWithoutFeedback>
      </ContainerTab>
      <Container>
        {tab === 1
          ? items.map((item) => (
              <Option key={item.key}>
                <Img source={item.img} />
                <Label>{item.label}</Label>
              </Option>
            ))
          : itemFav.map((item) => (
              <Option key={item.key}>
                <Img source={item.img} />
                <Label>{item.label}</Label>
              </Option>
            ))}
      </Container>
    </>
  );
}
