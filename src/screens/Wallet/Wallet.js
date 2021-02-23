import React, { useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { Switch, Text, StatusBar } from "react-native";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
  UsePromotionalCode,
  ActionCircle,
} from "./styles";

import creditCard from "../../images/credit-card.png";

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <StatusBar
        backgroundColor={useBalance ? "#1AB563" : "#868686"}
        barStyle={"dark-content"}
      />
      <Header
        colors={useBalance ? ["#52E78C", "#1AB563"] : ["#D3D3D3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "0,00" : "----"}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo, de até R$ 250.000,00, está rendendo 210% do CDI.
          </Info>

          <Actions>
            <Action>
              <ActionCircle useBalance={useBalance}>
                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              </ActionCircle>

              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <ActionCircle useBalance={useBalance}>
                <FontAwesome name="bank" size={20} color="#fff" />
              </ActionCircle>
              <ActionLabel>Retirar</ActionLabel>
            </Action>

            <Action>
              <ActionCircle useBalance={useBalance}>
                <Ionicons name="md-newspaper" size={20} color="#fff" />
              </ActionCircle>
              <ActionLabel>Extrato</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Novidade</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Seu PicPay Card está Pré-aprovado!</CardTitle>
              <CardInfo>
                Peça agora e deixe sua experiência PicPay ainda mais completa.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <AddLabel>Toque para saber mais</AddLabel>
          </AddButton>
        </Card>
      </PaymentMethods>

      <UseTicketContainer>
        <UseTicketButton>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={20}
            color="#0DB060"
          />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>
    </Wrapper>
  );
}
