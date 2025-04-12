import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const JobDetail = () => {
  
  const { title, location,company, salary, phone, description,experience, skills,benefits } = useLocalSearchParams();

 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{location}</Text>
      <Text style={styles.subtitle}>{company}</Text>
      <Text style={styles.value}>{experience}</Text>
      <Text style={styles.label}>Salary:</Text>
      <Text style={styles.value}>{salary}</Text>
      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>{phone}</Text>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{description ?? 'No description available.'}</Text>
      <Text style={styles.label}>Required Skills:</Text>
      <Text style={styles.value}>{skills ?? 'No skills specified.'}</Text>
      <Text style={styles.label}>Benefits:</Text>
      <Text style={styles.value}>{benefits ?? 'No benefits specified.'}</Text>
    </ScrollView>
  );
};

export default JobDetail;

export const config = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#E6F7FF',
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
    
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