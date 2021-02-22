import React from "react";

import { Container, Option, Title, Img } from "./styles";

import img8 from "../../images/08.png";
import img9 from "../../images/09.png";
import img10 from "../../images/10.png";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Cobre um amigo",
    bgColor: "#c7e3f0",
    txtColor: "#000",
  },
  {
    key: String(Math.random()),
    img: img9,
    title: "Cadastre sua chave Pix no PicPay",
    bgColor: "#387d4e",
    txtColor: "#fff",
  },
  {
    key: String(Math.random()),
    img: img10,
    title: "Saiba one pagar lojas online com PicPay",
    bgColor: "#fce3ff",
    txtColor: "#000",
  },
  {
    key: String(Math.random()),
    img: img11,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#d7fadc",
    txtColor: "#000",
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title txtColor={item.txtColor}>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
