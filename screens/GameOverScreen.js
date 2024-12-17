import { View, StyleSheet, Text, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess to number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: Colors.startColor,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.buttonColor,
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    fontFamily: "open-sans",
  },
});
