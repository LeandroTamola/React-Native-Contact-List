import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import colors from "../config/colors";

const ListRow = ({ item }) => {
  const [defaultAvatar, setDefaultAvatar] = useState(false);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,
      }}
    >
      {item.smallImageURL && !defaultAvatar && (
        <Image
          source={{
            width: 100,
            height: 100,
            uri: item.smallImageURL,
          }}
          style={{ marginRight: 20 }}
          onError={() => setDefaultAvatar(true)}
        />
      )}
      {defaultAvatar && (
        <Image
          width={100}
          height={100}
          style={{ marginRight: 20, width: 100, height: 100 }}
          source={require("../assets/user_small.png")}
        />
      )}

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: !item.isFavorite ? 25 : 0,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {item.isFavorite && (
            <Image
              source={require("../assets/favorite_true.png")}
              style={{ marginRight: 5 }}
            />
          )}
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
        </View>
        {!!item.companyName && (
          <Text
            style={{
              marginLeft: item.isFavorite ? 25 : 0,
              fontSize: 14,
              color: "#878787",
            }}
          >
            {item.companyName}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ListRow;
