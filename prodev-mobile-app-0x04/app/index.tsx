import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Welcome to ProDev</Text>
          </View>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>Your journey to professional development starts here.</Text>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Join Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}