// app/jobs.tsx
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

  {
        id: '5',
        title: 'UI/UX Designer',
        company: 'Adobe',
        location: 'Mumbai',
        experience: '2+ years',
        stipend: '₹55,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/11360/11360439.png',
      },
      {
        id: '6',
        title: 'Machine Learning Engineer',
        company: 'Tesla',
        location: 'Bangalore',
        experience: '3+ years',
        stipend: '₹75,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/2991/2991108.png',
      },
      {
        id: '7',
        title: 'Cybersecurity Analyst',
        company: 'Cisco',
        location: 'Delhi',
        experience: '2-5 years',
        stipend: '₹68,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/8118/8118836.png',
      },
      {
        id: '8',
        title: 'Mobile App Developer',
        company: 'Flipkart',
        location: 'Chennai',
        experience: '1+ year',
        stipend: '₹50,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/3176/3176366.png',
      },
      {
        id: '9',
        title: 'Cloud Architect',
        company: 'IBM',
        location: 'Pune',
        experience: '4+ years',
        stipend: '₹90,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/2306/2306183.png',
      },
      {
        id: '10',
        title: 'Blockchain Developer',
        company: 'Polygon',
        location: 'Remote',
        experience: '2+ years',
        stipend: '₹80,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/9723/9723972.png',
      },
      {
        id: '11',
        title: 'Product Manager',
        company: 'Microsoft',
        location: 'Gurgaon',
        experience: '5+ years',
        stipend: '₹1,00,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/11489/11489365.png',
      },
      {
        id: '12',
        title: 'QA Tester',
        company: 'Infosys',
        location: 'Hyderabad',
        experience: '1-3 years',
        stipend: '₹45,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/2893/2893920.png',
      },
      {
        id: '13',
        title: 'Network Engineer',
        company: 'TCS',
        location: 'Bangalore',
        experience: '2+ years',
        stipend: '₹55,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/2991/2991108.png',
      },
      {
        id: '14',
        title: 'Technical Writer',
        company: 'Oracle',
        location: 'Remote',
        experience: '1+ year',
        stipend: '₹50,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/1055/1055644.png',
      },
    
      {
        id: '15',
        title: 'Game Developer',
        company: 'Ubisoft',
        location: 'Mumbai',
        experience: '2+ years',
        stipend: '₹60,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/650/650143.png', // joystick
      },
      {
        id: '16',
        title: 'AR/VR Developer',
        company: 'Unity',
        location: 'Bangalore',
        experience: '3+ years',
        stipend: '₹85,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/9472/9472675.png', // VR headset
      },
      {
        id: '17',
        title: 'Technical Writer',
        company: 'Red Hat',
        location: 'Chennai',
        experience: '1-2 years',
        stipend: '₹40,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/9128/9128122.png', // doc writing
      },
      {
        id: '18',
        title: 'Data Engineer',
        company: 'Snowflake',
        location: 'Pune',
        experience: '2+ years',
        stipend: '₹70,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/5023/5023610.png', // database
      },
      {
        id: '19',
        title: 'IT Support Specialist',
        company: 'Wipro',
        location: 'Hyderabad',
        experience: '1+ year',
        stipend: '₹35,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/4151/4151048.png', // headset/helpdesk
      },
      {
        id: '20',
        title: 'Full Stack Developer',
        company: 'TCS',
        location: 'Kolkata',
        experience: '2-3 years',
        stipend: '₹65,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/2180/2180615.png', // full stack diagram
      },
      {
        id: '21',
        title: 'Database Administrator',
        company: 'Oracle',
        location: 'Noida',
        experience: '3+ years',
        stipend: '₹72,000/month',
        image: 'https://cdn-icons-png.flaticon.com/512/4248/4248449.png', // database gear
     }
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
