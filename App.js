import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import TextForm from "./components/TextForm/TextForm";
import ViewDetails from "./components/ViewDetails/ViewDetails";
import WelcomePage from "./components/WelcomePage/WelcomePage";

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
        <WelcomePage />
      ) : (
        <Text style={styles.text}>Please Check Your Spelling...!</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    padding: 20,
    height: "100%",
  },
  text: {
    color: "red",
    textAlign: "center",
    marginTop: 100,
  },
});
