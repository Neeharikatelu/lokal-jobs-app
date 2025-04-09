import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const jobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Bangalore',
    experience: '2+ years',
    stipend: '₹50,000/month',
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721298.png',
  },
  {
    id: '2',
    title: 'Backend Developer',
    company: 'Amazon',
    location: 'Hyderabad',
    experience: '3+ years',
    stipend: '₹60,000/month',
    image: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Netflix',
    location: 'Remote',
    experience: '1+ year',
    stipend: '₹70,000/month',
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055644.png',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'Meta',
    location: 'Pune',
    experience: '2-4 years',
    stipend: '₹65,000/month',
    image: 'https://cdn-icons-png.flaticon.com/512/4320/4320337.png',
  },
];

const Jobs = () => {
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const toggleBookmark = (id: string) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {jobs.map((job) => (
        <Pressable
          key={job.id}
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardHover,
          ]}
        >
          <Image source={{ uri: job.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.detail}>{job.company} • {job.location}</Text>
            <Text style={styles.detail}>Exp: {job.experience}</Text>
            <Text style={styles.detail}>💰 {job.stipend}</Text>
          </View>
          <Pressable
            onPress={() => toggleBookmark(job.id)}
            style={styles.bookmarkBtn}
          >
            <Ionicons
              name={bookmarked.includes(job.id) ? 'bookmark' : 'bookmark-outline'}
              size={24}
              color="#4e91ff"
            />
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Jobs;

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
    margin: 12,
    width: 180,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    position: 'relative',
    // transition: 'all 0.3s',
  },
  cardHover: {
    shadowColor: '#4e91ff',
    shadowOpacity: 0.6,
    transform: [{ scale: 1.03 }],
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  info: {
    gap: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 13,
    color: '#555',
  },
  bookmarkBtn: {
    position: 'absolute',
    top: 8,
    right: 10,
  },
});
