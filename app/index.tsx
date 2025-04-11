// import React from 'react';
// import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// import Jobs from './jobs'; // Ensure this is the correct path

// export default function Home() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <Jobs />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });


// import { View, Text, StyleSheet } from 'react-native';

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Welcome to Lokal Jobs!</Text>
//       <Text style={styles.subheading}>
//         Discover local job opportunities and save your favorites for easy access.
//       </Text>
//       <Text style={styles.note}>
//         Use the tabs below to browse jobs or view your bookmarks.
//       </Text>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   subheading: {
//     fontSize: 16,
//     color: '#555',
//   },

//   note:{
//     fontSize: 14,
//     color: '#777',
//     marginTop: 12,
//   },
// });


import { View, Text, StyleSheet, Animated, Easing} from 'react-native';
import React, { useEffect, useRef } from 'react';
// app/index.tsx
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';


const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Start invisible
  const router = useRouter();
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade in to full opacity
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const cards = [
    {
      title: 'Home',
      description: 'Back to homepage',
      image: 'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png',
      route: '/',
    },
    {
      title: 'Jobs',
      description: 'Find nearby job listings',
      image: 'https://www.freeiconspng.com/uploads/great-job-icon-png-20.png',
      route: '/jobs',
    },
    {
      title: 'Bookmarks',
      description: 'Saved jobs you like',
      image: 'https://png.pngtree.com/png-vector/20190423/ourmid/pngtree-bookmark-icon-vector-illustration-in-flat-style-for-any-purpose-png-image_975552.jpg',
      route: '/bookmarks',
    },
  ];

  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.heading}>👋 Welcome to Lokal Jobs!</Text>
      <Text style={styles.subheading}>
        Discover jobs in your area and bookmark your favorites!
      </Text>

      <Text style={styles.note}>
          📌 Use the tabs below to explore jobs or view bookmarks.
        </Text>

      <View style={styles.cardRow}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => router.push(card.route)}
          >
            <Image source={{ uri: card.image }} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
    
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FF',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e5aac',
    marginBottom: 12,
    alignSelf: 'center'
  },
  subheading: {
    fontSize: 16,
    color: '#3a3a3a',
    backgroundColor: '#f0f7ff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
    alignSelf: 'center',
  },
  card: {
    width: '25%',
    height: 300, // 🔥 Increased height
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 40, // 🔥 More padding
    alignItems: 'center',
    justifyContent: 'center', // 🔥 Center content vertically
    marginBottom: 54,
    marginHorizontal: 4,
    marginLeft: 55,
    marginRight: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardIcon: {
    width: 100,
    height: 120,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 35,
    fontWeight: '700',
    color: 'orange',
    marginBottom: 6,
  
  },
  cardDescription: {
    fontSize: 20,
    color: 'purple',
    fontWeight: '600', 
    textAlign: 'center',
  },

  note: {
    fontSize: 14,
    color: '#1e88e5',
    backgroundColor: '#d7ecff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 50,
    alignSelf: 'center',
  },
});
