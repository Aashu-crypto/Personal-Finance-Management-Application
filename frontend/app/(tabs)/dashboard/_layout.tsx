import { Stack } from "expo-router";
import React from "react";

export default function dashLayout() {
  return (
    <Stack initialRouteName="expense">
      <Stack.Screen name="index" options={{ title: "DashBoard" }} />
      <Stack.Screen name="expense" options={{ title: "Expense" }} />
    </Stack>
  );
}
