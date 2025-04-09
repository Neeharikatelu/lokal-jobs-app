// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text> Lokal Job App 🚀</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// App.tsx
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React from 'react';



function App() {
  return (
    <SafeAreaProvider>
      {/* StatusBar styling */}
      <StatusBar style="auto" />

      {/* Slot renders the active route from expo-router */}
      <Slot />
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
