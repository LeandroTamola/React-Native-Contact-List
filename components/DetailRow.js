import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatBirthdate, formatPhoneNumber } from "../helpers";

import colors from "../config/colors";

const DetailRow = ({ data, label, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label.toUpperCase()}:</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.data}>
          {label == "birthdate"
            ? formatBirthdate(data)
            : label == "address"
            ? data?.street
            : label == "phone"
            ? formatPhoneNumber(data)
            : data}
        </Text>
        {label == "phone" && <Text style={styles.label}>{type}</Text>}
      </View>
      {label == "address" && (
        <Text style={styles.data}>
          {data?.city}, {data?.state} {data?.zipCode}, {data?.country}
        </Text>
      )}
    </View>
  );
};

export default DetailRow;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    width: "90%",
    marginTop: 30,
    paddingBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "500",
    color: colors.secondary,
  },
  data: {
    fontSize: 20,
    color: colors.primary,
  },
});
