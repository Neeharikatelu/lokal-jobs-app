import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const JobDetail = () => {
  const job = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.subtitle}>{job.location}</Text>
      <Text style={styles.label}>Salary:</Text>
      <Text style={styles.value}>{job.salary}</Text>
      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>{job.phone}</Text>
    </ScrollView>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  label: {
    fontWeight: '600',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});
