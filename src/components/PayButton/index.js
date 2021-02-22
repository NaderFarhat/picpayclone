import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import { Button, Label } from "./styles";

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button title="" focused={focused}>
        <MaterialIcons name="attach-money" size={30} color="#fff" />
        <Label focused>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
