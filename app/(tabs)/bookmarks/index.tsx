import { useFocusEffect } from '@react-navigation/native';
import { getBookmarkedJobs } from '../../utils/storage';
import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      const fetchBookmarks = async () => {
        const saved = await getBookmarkedJobs();
        setBookmarks(saved);
      };

      fetchBookmarks();
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {bookmarks.length === 0 ? (
        <Text>No bookmarks found.</Text>
      ) : (
        bookmarks.map((job) => (
          <View key={job.id} style={styles.card}>
            <Text style={styles.title}>{job.title}</Text>
            <Text>{job.location}</Text>
            <Text>{job.salary}</Text>
            <Text>{job.phone}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
