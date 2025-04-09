import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BookmarkContext } from '../context/BookmarkContext';

const placeholder = 'https://via.placeholder.com/150';

export default function JobCard({ job, onPress }) {
  const { bookmarks, addBookmark, removeBookmark } = useContext(BookmarkContext);
  const isBookmarked = bookmarks.some((b) => b.id === job.id);

  const toggleBookmark = () => {
    isBookmarked ? removeBookmark(job.id) : addBookmark(job);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: job.image || placeholder }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{job.title}</Text>
        <Text>{job.company}</Text>
        <Text>{job.location}</Text>
        <Text>{job.experience} yrs | ₹{job.salary}</Text>
      </View>
      <TouchableOpacity onPress={toggleBookmark}>
        <Ionicons
          name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
          size={24}
          color="tomato"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
