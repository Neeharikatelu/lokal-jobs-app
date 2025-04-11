// import { useFocusEffect } from '@react-navigation/native';
// import { getBookmarkedJobs } from '../../utils/storage';
// import React, { useState, useCallback } from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';

// const Bookmarks = () => {
//   const [bookmarks, setBookmarks] = useState<any[]>([]);

//   useFocusEffect(
//     useCallback(() => {
//       const fetchBookmarks = async () => {
//         const saved = await getBookmarkedJobs();
//         setBookmarks(saved);
//       };

//       fetchBookmarks();
//     }, [])
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {bookmarks.length === 0 ? (
//         <Text>No bookmarks found.</Text>
//       ) : (
//         bookmarks.map((job) => (
//           <View key={job.id} style={styles.card}>
//             <Text style={styles.title}>{job.title}</Text>
//             <Text>{job.location}</Text>
//             <Text>{job.salary}</Text>
//             <Text>{job.phone}</Text>
//           </View>
//         ))
//       )}
//     </ScrollView>
//   );
// };

// export default Bookmarks;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 12,
//     marginBottom: 10,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


// import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
// import React from 'react';

// type Job = {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   experience: string;
//   stipend: string;
//   image: string;
// };

// const Bookmarks = ({ route }: { route?: { params?: { bookmarkedJobs: Job[] } } }) => {
//   const bookmarkedJobs = route?.params?.bookmarkedJobs || []; // Safely access bookmarkedJobs

  
 
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {bookmarkedJobs.length > 0 ? (
//         bookmarkedJobs.map((job:Job) => (
//           <View key={job.id} style={styles.card}>
//             <Image source={{ uri: job.image }} style={styles.image} />
//             <View style={styles.info}>
//               <Text style={styles.title}>{job.title}</Text>
//               <Text style={styles.detail}>{job.company} • {job.location}</Text>
//               <Text style={styles.detail}>Exp: {job.experience}</Text>
//               <Text style={styles.detail}>💰 {job.stipend}</Text>
//             </View>
//           </View>
//         ))
//       ) : (
//         <Text style={styles.emptyText}>No bookmarks yet!</Text>
//       )}
//     </ScrollView>
//   );
// };

// export default Bookmarks;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     margin: 16,
//     width: 230,
//     padding: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//     position: 'relative',
//   },
//   image: {
//     width: '100%',
//     height: 120,
//     resizeMode: 'contain',
//     marginBottom: 12,
//   },
//   info: {
//     gap: 4,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   detail: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 4,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

