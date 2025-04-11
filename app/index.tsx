// app/index.tsx
// This file contains the main screen of the app, displaying cards for navigation
// to different sections: Home, Jobs, and Bookmarks.



import { View, Text, StyleSheet, Animated, Easing} from 'react-native';
import React, { useEffect, useRef } from 'react';


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
      description: 'Homepage',
      image: 'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png',
      route: '/',
    },
    {
      title: 'Jobs',
      description: 'Find nearby job listings',
      image: 'https://cdn-icons-png.freepik.com/512/8915/8915964.png',
      route: '/jobs',
    },
    {
      title: 'Bookmarks',
      description: 'Saved jobs',
      image: 'https://cdn2.iconfinder.com/data/icons/books-blue-line/48/87_book-read-bookmark-open-study-512.png',
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

      <View style={styles.cardColumn}>
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
      {/* ):(
          <Text style={styles.emptyText}>No bookmarks yet!</Text>
        ) */}
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
    width: '50%',
    height: 122, 
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 40, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 4,
    marginHorizontal: 4,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardColumn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardIcon: {
    width: 55,
    height: 50,
    marginBottom: 1,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: 'orange',
    marginTop: 3,
    marginBottom: 2,
  
  },
  cardDescription: {
    fontSize: 10,
    color: 'purple',
    fontWeight: '600', 
    textAlign: 'center',
    marginTop: 1,
    marginBottom:15,
  },

  note: {
    fontSize: 14,
    color: '#1e88e5',
    backgroundColor: '#d7ecff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },

  emptyText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});
