import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WelcomePage = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome To Country App ...!!!</Text>
      <Text style={styles.listHead}>What you will get from here:</Text>
      <Text style={styles.listItem}>1. Search countries local name.</Text>
      <Text style={styles.listItem}>2. Search countries official name.</Text>
      <Text style={styles.listItem}>3. Search countries capital city.</Text>
      <Text style={styles.listItem}>4. Search countries region.</Text>
      <Text style={styles.listItem}>5. Search countries sub region.</Text>
      <Text style={styles.listItem}>6. Search countries languages.</Text>
      <Text style={styles.listItem}>7. Search countries currencies.</Text>
      <Text style={styles.listItem}>8. Search countries total area.</Text>
      <Text style={styles.listItem}>
        9. Search countries associate borders.
      </Text>
      <Text style={styles.listItem}>
        10. Search countries total population.
      </Text>
      <Text style={styles.listItem}>
        11. Search countries geographic position.
      </Text>
      <Text style={styles.listItem}>3. Search countries dialing code.</Text>
      <Text style={styles.bottom}>Happy Exploring ...!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: "blue",
    textAlign: "center",
  },
  listHead: {
    color: "blue",
    marginTop: 20,
  },
  listItem: {
    color: "blue",
    marginLeft: 30,
    marginTop: 5,
  },
  bottom: {
    textAlign: "center",
    marginTop: 30,
    color:"purple"
  },
});

export default WelcomePage;
