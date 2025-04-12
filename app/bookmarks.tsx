import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import { useBookmarks } from './bookmark'; // Import the useBookmarks hook
import { Link } from 'expo-router'; 


const Bookmarks = () => {
  const { bookmarkedJobs } = useBookmarks(); // Access bookmarked jobs


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {bookmarkedJobs.length > 0 ? (
        bookmarkedJobs.map((job) => (
          <View key={job.id} style={styles.card}>
            <Image source={{ uri: job.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{job.title}</Text>
              <Text style={styles.subtitle}>{job.company} • {job.location}</Text>
              <Text style={styles.detail}>Exp: {job.experience}</Text>
              <Text style={styles.detail}>💰 {job.stipend}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>No bookmarks yet!</Text>
      )}
    </ScrollView>
  );
};



export default Bookmarks;

const styles = StyleSheet.create({


container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 16,
    width: 300,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    position: 'relative',
  
  },
  cardHover: {
      transform: [{ scale: 1.05 }], 
      elevation: 40, 
      shadowColor: '#4e91ff', 
      shadowOpacity: 0.6,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  info: {
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  subtitle: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
      },

  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  bookmarkBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
  },

  link: {
    marginTop: 12,
    color: '#4e91ff',
    fontWeight: 'bold',
    textDecorationLine: 'underline', 
    fontSize: 14,
  },

  linkText: {
    fontSize: 14,
    color: '#4e91ff',
  },

  emptyText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginTop: 20,
      },

});

