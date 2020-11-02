import React, { useContext, useMemo } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  SectionList,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListRow from "./ListRow";
import { AppContext } from "./AppContext";

import colors from "../config/colors";

const ListView = ({ navigation }) => {
  const { data } = useContext(AppContext);
  const { isLoading } = useContext(AppContext);
  const favorites = [];
  const others = [];

  useMemo(() => {
    data.map((item) => {
      item.isFavorite === true ? favorites.push(item) : others.push(item);
    });
  }, [data]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SectionList
          sections={[
            { title: "FAVORITE CONTACTS", data: favorites },
            { title: "OTHER CONTACTS", data: others },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("Detail", item, navigation)}
            >
              <ListRow item={item} />
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default ListView;
const styles = StyleSheet.create({
  sectionHeader: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
    backgroundColor: colors.section,
  },
});
