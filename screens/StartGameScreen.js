import { useState } from "react";
import { TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { StyleSheet } from "react-native";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.placeholderText}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View>
            <PrimaryButton
              style={styles.buttonContainer}
              onPress={resetInputHandler}
            >
              Reset
            </PrimaryButton>
          </View>
          <View>
            <PrimaryButton
              style={styles.buttonContainer}
              onPress={confirmInputHandler}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  placeholderText: {
    color: Colors.borderColor,
    fontSize: 24,
    marginTop: 32,
  },
  numberInput: {
    fontSize: 32,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 2,
    color: Colors.borderColor,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
