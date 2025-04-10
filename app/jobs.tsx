// app/jobs.tsx
import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Hoverable from 'react-native-web-hover';



const jobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Bangalore',
    experience: '2+ years',
    stipend: '₹50,000/month',
    description: 'Develop and maintain user-facing features for web applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work'],
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721298.png',
  },
  {
    id: '2',
    title: 'Backend Developer',
    company: 'Amazon',
    location: 'Hyderabad',
    experience: '3+ years',
    stipend: '₹60,000/month',
    description: 'As a Backend Developer at Amazon, you will be responsible for designing and implementing server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will work closely with front-end developers, data engineers, and DevOps to integrate APIs, develop microservices, and maintain database systems. You’ll also troubleshoot issues, optimize performance, and ensure scalability in production systems.',
    skills: ['Node.js', 'Java', 'SQL/NoSQL Databases', 'RESTful APIs', 'Microservices Architecture', 'AWS'],
    benefits: ['Health Insurance', 'Work From Home Option', 'Performance Bonuses', 'Employee Discount', 'Learning Opportunities'],
    image: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
  },  

  {
    id: '3',
    title: 'Data Scientist',
    company: 'Netflix',
    location: 'Remote',
    experience: '1+ year',
    stipend: '₹70,000/month',
    description: 'As a Data Scientist at Netflix, you will analyze vast amounts of viewing data to identify trends, develop predictive models, and support business decisions across content, marketing, and product teams.',
    skills: ['Python', 'Machine Learning', 'Data Visualization', 'SQL', 'Statistics', 'TensorFlow/PyTorch'],
    benefits: ['Remote Work', 'Flexible Hours', 'Stock Options', 'Premium Streaming Access', 'Comprehensive Health Benefits'],
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055644.png',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'Meta',
    location: 'Pune',
    experience: '2-4 years',
    stipend: '₹65,000/month',
    description: 'As a DevOps Engineer at Meta, your role will involve automating deployment pipelines, managing infrastructure as code, monitoring applications, and improving reliability and availability. You will work with cloud platforms, CI/CD tools, and container orchestration systems to streamline the development and deployment lifecycle. You’ll also be responsible for ensuring security compliance and infrastructure scalability.',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins/GitHub Actions', 'AWS/GCP', 'Linux Administration'],
    benefits: ['Health Insurance', 'Stock Grants', 'Flexible Working Hours', 'Wellness Programs', 'Onsite Meals (optional)'],
    image: 'https://cdn-icons-png.flaticon.com/512/4320/4320337.png',
  },  

  {
    id: '5',
    title: 'UI/UX Designer',
    company: 'Adobe',
    location: 'Mumbai',
    experience: '2+ years',
    stipend: '₹55,000/month',
    description: 'Design intuitive, engaging user interfaces and experiences for Adobe products. Collaborate with developers and product managers to turn ideas into elegant user flows and prototypes. Conduct user research to improve usability and accessibility.',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'User Research', 'Prototyping'],
    benefits: ['Health Insurance', 'Hybrid Work Policy', 'Creative Environment', 'Design Conferences Access'],
    image: 'https://cdn-icons-png.flaticon.com/512/11360/11360439.png',
  },
  
  {
    id: '6',
    title: 'Machine Learning Engineer',
    company: 'Tesla',
    location: 'Bangalore',
    experience: '3+ years',
    stipend: '₹75,000/month',
    description: 'Build and deploy machine learning models for Tesla’s AI-driven applications. Work with real-time data to improve autonomous systems and predictive analytics. Collaborate with data scientists and software engineers on scalable ML pipelines.',
    skills: ['Python', 'TensorFlow', 'Deep Learning', 'Data Preprocessing', 'Model Deployment'],
    benefits: ['Stock Options', 'Remote Flexibility', 'Team Hackathons', 'Health Insurance'],
    image: 'https://cdn-icons-png.flaticon.com/512/2991/2991108.png',
  },
  
  {
    id: '7',
    title: 'Cybersecurity Analyst',
    company: 'Cisco',
    location: 'Delhi',
    experience: '2-5 years',
    stipend: '₹68,000/month',
    description: 'Monitor, detect, and respond to cyber threats across networks and systems. Analyze vulnerabilities, conduct risk assessments, and implement security controls. Ensure compliance with global security policies and protocols.',
    skills: ['Network Security', 'SIEM Tools', 'Firewall Management', 'Threat Analysis', 'Python/Shell Scripting'],
    benefits: ['Health Insurance', 'Paid Certifications', 'Remote Work Options', 'Employee Wellness Programs'],
    image: 'https://cdn-icons-png.flaticon.com/512/8118/8118836.png',
  },
  
  {
    id: '8',
    title: 'Mobile App Developer',
    company: 'Flipkart',
    location: 'Chennai',
    experience: '1+ year',
    stipend: '₹50,000/month',
    description: 'Develop and maintain scalable Android/iOS applications for e-commerce solutions. Optimize app performance and user experience. Work with cross-functional teams to integrate new features and APIs.',
    skills: ['Flutter/React Native', 'Java/Kotlin/Swift', 'REST APIs', 'Firebase', 'UI/UX Principles'],
    benefits: ['Learning Budget', 'Flexible Work Hours', 'App Store Reimbursements', 'Health Insurance'],
    image: 'https://cdn-icons-png.flaticon.com/512/3176/3176366.png',
  },
  
  {
    id: '9',
    title: 'Cloud Architect',
    company: 'IBM',
    location: 'Pune',
    experience: '4+ years',
    stipend: '₹90,000/month',
    description: 'Design and implement secure, scalable cloud solutions across hybrid environments. Lead architecture strategy and optimize cloud resources for performance and cost. Collaborate with DevOps and security teams.',
    skills: ['AWS/Azure/GCP', 'Cloud Architecture', 'Kubernetes', 'Terraform', 'CI/CD'],
    benefits: ['Remote Work', 'Skill Development Programs', 'Cloud Certification Support', 'Health Insurance'],
    image: 'https://cdn-icons-png.flaticon.com/512/2306/2306183.png',
  },
  
  {
    id: '10',
    title: 'Blockchain Developer',
    company: 'Polygon',
    location: 'Remote',
    experience: '2+ years',
    stipend: '₹80,000/month',
    description: 'Develop smart contracts and dApps using Ethereum and Polygon protocols. Optimize gas usage and ensure contract security. Work on decentralized infrastructure and blockchain integrations.',
    skills: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethereum', 'Polygon SDK'],
    benefits: ['Token Incentives', 'Fully Remote', 'Hackathon Participation', 'Flexible Working Hours'],
    image: 'https://cdn-icons-png.flaticon.com/512/9723/9723972.png',
  },
  
  {
    id: '11',
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Gurgaon',
    experience: '5+ years',
    stipend: '₹1,00,000/month',
    description: 'Define product vision, gather requirements, and lead cross-functional teams. Drive roadmap execution and prioritize features based on user and business needs. Ensure timely product delivery.',
    skills: ['Agile Methodologies', 'Product Roadmapping', 'User Research', 'Wireframing', 'JIRA'],
    benefits: ['Stock Grants', 'Work-Life Balance', 'Global Exposure', 'Health & Wellness Allowance'],
    image: 'https://cdn-icons-png.flaticon.com/512/11489/11489365.png',
  },
  
  {
    id: '12',
    title: 'QA Tester',
    company: 'Infosys',
    location: 'Hyderabad',
    experience: '1-3 years',
    stipend: '₹45,000/month',
    description: 'Test software applications to identify bugs and ensure quality. Create test plans, execute manual and automated tests, and document issues. Work closely with developers to resolve bugs.',
    skills: ['Selenium', 'TestNG', 'Manual Testing', 'JIRA', 'API Testing'],
    benefits: ['Training Programs', 'Hybrid Work', 'Performance Bonuses', 'Health Coverage'],
    image: 'https://cdn-icons-png.flaticon.com/512/2893/2893920.png',
  },

  {
    id: '13',
    title: 'Network Engineer',
    company: 'TCS',
    location: 'Bangalore',
    experience: '2+ years',
    stipend: '₹55,000/month',
    description: 'Maintain and monitor network infrastructure, ensuring high availability and performance. Troubleshoot connectivity issues and implement security protocols. Work with teams to optimize network performance.',
    skills: ['TCP/IP', 'LAN/WAN', 'Firewall Management', 'Cisco', 'Network Monitoring'],
    benefits: ['Onsite Opportunities', 'Professional Certifications', 'Employee Wellness Programs', 'Health Insurance'],
    image: 'https://cdn-icons-png.flaticon.com/512/2991/2991108.png',
  },

  {
    id: '14',
    title: 'Technical Writer',
    company: 'Oracle',
    location: 'Remote',
    experience: '1+ year',
    stipend: '₹50,000/month',
    description: 'Create user-friendly documentation for software products, APIs, and systems. Collaborate with developers and QA to understand features and translate them into manuals or guides.',
    skills: ['Technical Writing', 'Markdown', 'Git', 'API Documentation', 'XML/DITA'],
    benefits: ['Remote Work', 'Flexible Schedule', 'Learning Resources', 'Health & Dental Insurance'],
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055644.png',
  },

  {
    id: '15',
    title: 'Game Developer',
    company: 'Ubisoft',
    location: 'Mumbai',
    experience: '2+ years',
    stipend: '₹60,000/month',
    description: 'Design, develop, and optimize gameplay features using industry-standard engines. Collaborate with artists and designers to build immersive game experiences. Ensure performance across platforms.',
    skills: ['Unity/Unreal Engine', 'C++/C#', 'Game Physics', 'Animation Integration', 'Git'],
    benefits: ['Gaming Discounts', 'Creative Environment', 'Flexible Hours', 'Health Benefits'],
    image: 'https://cdn-icons-png.flaticon.com/512/650/650143.png',
  },

  {
    id: '16',
    title: 'AR/VR Developer',
    company: 'Unity',
    location: 'Bangalore',
    experience: '3+ years',
    stipend: '₹85,000/month',
    description: 'Develop interactive AR/VR applications for mobile and headset devices. Implement real-time 3D experiences using Unity or Unreal. Optimize performance and enhance user immersion.',
    skills: ['Unity 3D', 'C#', 'ARKit/ARCore', 'VR SDKs', '3D Modelling Basics'],
    benefits: ['Remote Flexibility', 'Work with XR Experts', 'Device Access', 'Stock Options'],
    image: 'https://cdn-icons-png.flaticon.com/512/9472/9472675.png',
  },


  {
    id: '17',
    title: 'Technical Writer',
    company: 'Red Hat',
    location: 'Chennai',
    experience: '1-2 years',
    stipend: '₹40,000/month',
    description: 'Develop clear and concise documentation for open-source tools and enterprise software. Collaborate with engineers and product teams to create manuals, FAQs, and release notes. Maintain document versioning using Git.',
    skills: ['Markdown', 'Git', 'Linux Basics', 'Technical Communication', 'API Documentation'],
    benefits: ['Open Source Exposure', 'Remote Option', 'Learning Budget', 'Health & Vision Insurance'],
    image: 'https://cdn-icons-png.flaticon.com/512/9128/9128122.png',
  },

  {
    id: '18',
    title: 'Data Engineer',
    company: 'Snowflake',
    location: 'Pune',
    experience: '2+ years',
    stipend: '₹70,000/month',
    description: 'Design and maintain scalable data pipelines and ETL processes. Collaborate with analysts and data scientists to ensure data integrity and availability. Optimize storage and query performance using Snowflake.',
    skills: ['SQL', 'Python', 'ETL Tools', 'Snowflake', 'Data Warehousing'],
    benefits: ['Stock Options', 'Remote Work', 'Upskilling Programs', 'Health Insurance'],
    image: 'https://cdn-icons-png.flaticon.com/512/5023/5023610.png',
  },

  {
    id: '19',
    title: 'IT Support Specialist',
    company: 'Wipro',
    location: 'Hyderabad',
    experience: '1+ year',
    stipend: '₹35,000/month',
    description: 'Provide technical support for hardware, software, and network issues. Help employees with system setup, troubleshooting, and service desk requests. Maintain inventory and update documentation.',
    skills: ['Windows/Linux', 'Helpdesk Tools', 'Troubleshooting', 'Customer Service', 'Networking Basics'],
    benefits: ['Shift Allowance', 'Certification Reimbursement', 'Medical Insurance', 'Employee Discounts'],
    image: 'https://cdn-icons-png.flaticon.com/512/4151/4151048.png',
  },

  {
    id: '20',
    title: 'Full Stack Developer',
    company: 'TCS',
    location: 'Kolkata',
    experience: '2-3 years',
    stipend: '₹65,000/month',
    description: 'Build and maintain end-to-end web applications using front-end and back-end technologies. Collaborate with designers, DevOps, and QA for feature rollouts. Write reusable, scalable, and secure code.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Docker'],
    benefits: ['Upskilling Programs', 'Job Rotation', 'Health Benefits', 'Relocation Assistance'],
    image: 'https://cdn-icons-png.flaticon.com/512/2180/2180615.png',
  },
];

const Jobs = () => {
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const toggleBookmark = (id: string) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {jobs.map((job) => (
        <Pressable
          onPressIn={() => setHoveredCard(job.id)}
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

              
                <Link
                href={{
                  pathname: `/job-detail/${job.id}`,
                  params: {
                    title: job.title,
                    location: job.location,
                    company: job.company,
                    experience: job.experience,
                    salary: job.stipend,
                    description: job.description,
                    skills: job.skills?.join(', '), // Pass skills as a comma-separated string
                    benefits: job.benefits?.join(', '), // Pass benefits as a comma-separated string
                  },
                }}



              style={styles.link}
            >
              View Details
            </Link>


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
    margin: 16,
    width: 230,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    position: 'relative',
    // transition: 'all 0.3s',
  },
  cardHover: {
      transform: [{ scale: 1.05 }], // Slightly scale up the card
      elevation: 10, // Increase elevation for a lifted effect
      shadowColor: '#4e91ff', // Change shadow color
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
    textDecorationLine: 'underline', // Optional: Adds an underline to the link
    fontSize: 14,
  },

  linkText: {
    fontSize: 14,
    color: '#4e91ff',
  },
});
