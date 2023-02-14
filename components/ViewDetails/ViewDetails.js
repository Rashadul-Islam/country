import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

const ViewDetails = ({ country }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagArea}>
        <Image
          style={styles.image}
          source={{ uri: `${country?.flags?.png}` }}
        />
      </View>
      <Text style={styles.text}>Name: {country?.name?.common}</Text>
      <Text style={styles.text}>Official Name: {country?.name?.official}</Text>
      {country?.capital && (
        <Text style={styles.text}>
          Capital:{" "}
          {Object.values(country?.capital)?.map((data, i) =>
            i == Object.values(country?.capital)?.length - 1
              ? data
              : data + ", "
          )}
        </Text>
      )}
      <Text style={styles.text}>Region: {country?.region}</Text>
      <Text style={styles.text}>Sub - Region: {country?.subregion}</Text>
      <Text style={styles.text}>
        Languages:{" "}
        {Object.values(country?.languages)?.map((data, i) =>
          i == Object.values(country?.languages)?.length - 1
            ? data
            : data + ", "
        )}
      </Text>
      <Text style={styles.text}>
        Currencies:{" "}
        {Object.keys(country?.currencies)?.map(
          (data) => country?.currencies[data]?.name
        )}
      </Text>
      <Text style={styles.text}>Area: {country?.area}</Text>
      <Text style={styles.text}>
        Borders:{" "}
        {country?.borders?.map((data, i) =>
          i == country?.borders?.length - 1 ? data : data + ", "
        )}
      </Text>
      <Text style={styles.text}>Population: {country?.population}</Text>
      <Text style={styles.text}>
        Position:{" "}
        {country?.latlng?.map((data, i) =>
          i == country?.borders?.length - 1 ? data : data + ", "
        )}
      </Text>
      <Text style={styles.text}>
        Dial: {country?.idd?.root}
        {country?.idd?.suffixes}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: "100%",
  },
  flagArea: {
    width: "100%",
    height: 170,
    marginBottom: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    borderWidth: 5,
    borderColor: "#00FFFF",
    borderRadius: 3,
  },
  text: {
    marginBottom: 5,
    fontWeight: "bold",
  },
});

export default ViewDetails;
