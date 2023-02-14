import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import TextForm from "./components/TextForm/TextForm";
import ViewDetails from "./components/ViewDetails/ViewDetails";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    if (searchText !== "") {
      fetch(`https://restcountries.com/v3.1/name/${searchText}`)
        .then((res) => res.json())
        .then((data) => setCountryData(data[0]));
    }
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <TextForm setSearchText={setSearchText} />
      {countryData?.name?.common ? (
        <ViewDetails country={countryData} />
      ) : countryData?.length === 0 ? (
        <Text style={styles.startText}>Welcome To County Details...!</Text>
      ) : (
        <Text style={styles.text}>Please Check Your Spelling...!</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 50,
    padding: 20,
  },
  startText: {
    textAlign: "center",
    marginTop: 100,
  },
  text: {
    color: "red",
    textAlign: "center",
    marginTop: 100,
  },
});
