import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const family = React.createContext("default context");

const ThemeningComp = () => {
  const [contextData, setContextData] = useState("state default value");

  return (
    <View style={styles.container}>
      <family.Provider value={contextData}>
        <Text style={styles.welcome}>context api react native</Text>
        <Button
          onPress={() => setContextData("button value")}
          title="Change Value"
        />

        <family.Consumer>
          {(data) => <Text style={styles.child}>Data is here : {data}</Text>}
        </family.Consumer>
      </family.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
  child: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
});

export default ThemeningComp;
