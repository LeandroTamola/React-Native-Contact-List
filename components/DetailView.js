import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DetailRow from "./DetailRow";
import { AppContext } from "./AppContext";
import { NavigationContext } from "@react-navigation/core";

import colors from "../config/colors";

const DetailView = (item) => {
  const navigation = useContext(NavigationContext);
  const contact = item.route.params;
  const [defaultAvatar, setDefaultAvatar] = useState(false);

  const { toggleFavorite } = useContext(AppContext);
  const [isFavorite, setFavorite] = useState(contact.isFavorite);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => {
            toggleFavorite(contact.id);
            setFavorite(!isFavorite);
          }}
        >
          <View>
            <Image
              width={50}
              height={50}
              source={
                isFavorite
                  ? require("../assets/favorite_true.png")
                  : require("../assets/favorite_false.png")
              }
            />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isFavorite]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: colors.secondary,
            width: "90%",
            marginTop: 30,
            paddingBottom: 30,
          }}
        >
          {contact.largeImageURL && !defaultAvatar && (
            <Image
              source={{
                width: 200,
                height: 200,
                uri: contact.largeImageURL,
              }}
              onError={() => setDefaultAvatar(true)}
            />
          )}
          {defaultAvatar && (
            <Image
              width={300}
              height={300}
              style={{ width: 200, height: 200 }}
              source={require("../assets/user_large.png")}
            />
          )}
          {!!contact.name && (
            <Text style={{ marginTop: 20, fontSize: 30, fontWeight: "300" }}>
              {contact.name}
            </Text>
          )}

          {!!contact.companyName && (
            <Text
              style={{
                marginTop: 5,
                fontSize: 18,
                fontWeight: "300",
                color: colors.secondary,
              }}
            >
              {contact.companyName}
            </Text>
          )}
        </View>
        {!!contact.phone.home && (
          <DetailRow data={contact.phone.home} label="phone" type="Home" />
        )}
        {!!contact.phone.mobile && (
          <DetailRow data={contact.phone.mobile} label="phone" type="Mobile" />
        )}
        {!!contact.phone.work && (
          <DetailRow data={contact.phone.work} label="phone" type="Work" />
        )}
        {!!contact.address && (
          <DetailRow data={contact.address} label="address" />
        )}
        {!!contact.birthdate && (
          <DetailRow data={contact.birthdate} label="birthdate" />
        )}
        {!!contact.emailAddress && (
          <DetailRow data={contact.emailAddress} label="email" />
        )}
      </View>
    </ScrollView>
  );
};

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
    fontSize: 20,
    marginBottom: 10,
    color: colors.primary,
  },
});

export default DetailView;
