import React from "react";
import { 
  Text,
  StyleSheet
 } from "react-native";

function Header() {
  return (
      <Text style={styles.headerText}>AHAHAHAHAHAHAHHAHAHA</Text>
  );
}
export default Header;

const styles = StyleSheet.create({
  headerText : {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 20,
  } 
});