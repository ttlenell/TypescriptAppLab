import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ProductListViewNavigationProp } from "../Routes";
import ProductListItem from "../components/ProductListItem";

export default function ProductList({
  navigation,
}: {
  navigation: ProductListViewNavigationProp;
}) {
  const [items, setItems] = useState<ProductListItem[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch(console.log);
  }, []);

  const navigateToDetail: (itemId: number) => void = (itemId) => {
    navigation.navigate("Detail", { itemId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => (
          <ProductListItem
            item={item}
            onNavigate={(itemId: number) => navigateToDetail(itemId)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    height: "100%",
  },
});
