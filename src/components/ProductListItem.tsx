import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function ProductListItem({
  item,
  onNavigate,
}: {
  item: ProductListItem;
  onNavigate: (itemId: number) => void;
}) {
  const checkDiscount = () => {
    if (item && item?.price > 50) {
      return (
        <Text style={{ color: "green" }}>
          {" "}
          ${(item?.price * 0.2).toFixed(2)}
        </Text>
      );
    } else {
      return <Text style={{ color: "black" }}>${item?.price.toFixed(2)}</Text>;
    }
  };

  return (
    <TouchableHighlight
      onPress={() => onNavigate(item.id)}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: item?.image }} />
        <View style={styles.infoContainer}>
          {/* <Text style={styles.title}>{item?.title}</Text> */}
          <Text style={styles.title}>{item?.title}</Text>
          {checkDiscount()}
          {/* <Text style={styles.price}>${item?.price}</Text> */}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
  },
  infoContainer: {
    marginLeft: 20,
    height: 120,
    justifyContent: "space-around",
  },
  image: {
    margin: 10,
    height: 120,
    width: 120,
  },
  title: {
    fontWeight: "bold",
    width: 250,
  },
  price: {
    color: "black",
  },
});
