import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors, width } from "@/constants/Colors";

type Props = {};

const expense = (props: Props) => {
  const values: string[] = ["Income", "Expense", "Tranfer"];
  const [selectedValue, setSelectedValue] = useState<String>("Expense");

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
          maxWidth: width,
        }}
      >
        {values.map((i, index) => (
          <TouchableOpacity onPress={() => setSelectedValue(i)}>
            <ThemedView
              style={[
                styles.box,
                {
                  backgroundColor:
                    selectedValue == i
                      ? Colors.light.tabIconSelected
                      : Colors.dark.tabIconDefault,
                },
              ]}
              key={index}
            >
              <ThemedText>{i}</ThemedText>
            </ThemedView>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ThemedView>
  );
};

export default expense;
const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    width: width / 4,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
