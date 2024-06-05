import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <ThemedView>
        <Link href={"/dashboard/expense"}>
          <ThemedText type="link">click me</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
};

export default index;
