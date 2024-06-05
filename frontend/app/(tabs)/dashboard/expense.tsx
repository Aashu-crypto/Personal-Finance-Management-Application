import React, { useState, useCallback } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors, width } from "@/constants/Colors";
import ExpenseList from "@/components/expense/ExpenseList";

type Props = {};

const Expense: React.FC<Props> = () => {
  const values: string[] = ["Income", "Expense", "Transfer"];
  const [selectedValue, setSelectedValue] = useState<string>("Expense");

  const handlePress = useCallback((value: string) => {
    setSelectedValue(value);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.innerContainer}>
        {values.map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)}>
            <ThemedView
              style={[
                styles.box,
                {
                  backgroundColor:
                    selectedValue === value
                      ? Colors.light.tabIconSelected
                      : Colors.dark.tabIconDefault,
                },
              ]}
            >
              <ThemedText>{value}</ThemedText>
            </ThemedView>
          </TouchableOpacity>
        ))}
      </ThemedView>
      <ExpenseList />
    </ThemedView>
  );
};

export default Expense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    maxWidth: width,
  },
  box: {
    borderWidth: 1,
    width: width / 4,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
