import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from "react-native-vision-camera";

export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission();

  const device = useCameraDevice('back');

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  if (!hasPermission) {
    return <Text>No access to camera. Turn it on from Settings</Text>;
  }

  if (!device) {
    return <Text>Camera device not found</Text>;
  }

  console.log("has permisions: ", hasPermission);

  return (
    <View style={styles.container}>
      

      <StatusBar style="auto" />
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
