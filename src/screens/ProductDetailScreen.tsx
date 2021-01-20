import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { ProductDetailViewRouteProp } from "../Routes";

export default function ProductDetail({
  route,
}: {
  route: ProductDetailViewRouteProp;
}) {
  const [item, setItem] = useState<ProductListItem | null>(null);
  const { itemId } = route.params;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response) => response.json())
      .then((json) => setItem(json))
      .catch((error) => console.log("error!:", error));
  }, []);

  const checkDiscount = () => {
    if (item && item?.price > 50) {
      return (
        <View>
          <Text style={{ color: "green" }}>
            On sale! ${(item?.price * 0.2).toFixed(2)}!
          </Text>
          <Text style={{ color: "black" }}>
            Used to be <Text style={{ color: "red" }}>${item.price}!</Text>
          </Text>
        </View>
      );
    } else {
      return <Text style={{ color: "black" }}>${item?.price.toFixed(2)}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item?.image }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        {checkDiscount()}
        <Text style={styles.descriptionLabel}>Description</Text>
        <Text style={styles.description}>{item?.description}</Text>
        <Text style={styles.category}>Category: {item?.category}</Text>
        <Button
          title="Add to cart!"
          onPress={() => console.log("Added to cart!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 240,
    width: 200,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    width: "80%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 30,
  },

  descriptionLabel: {
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {},
  category: {
    marginVertical: 20,
    color: "grey",
  },
});
