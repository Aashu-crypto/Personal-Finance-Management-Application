import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

type Props = {};

const ExpenseList = (props: Props) => {
  return (
    <ThemedView>
      <ThemedView>
        <ThemedText>Amount</ThemedText>
        <TextInput />
      </ThemedView>
    </ThemedView>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({});
