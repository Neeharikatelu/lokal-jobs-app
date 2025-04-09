import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Jobs from './jobs'; // Ensure this is the correct path

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Jobs />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
