// // // app/jobs.tsx
// import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
// import React, { useState,useEffect } from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import { Link } from 'expo-router';
// import Hoverable from 'react-native-web-hover';
// import { useBookmarks } from './bookmark';




// type Job = {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   experience: string;
//   stipend: string;
//   description: string;
//   image: string;
//   skills?: string[]; // Optional
//   benefits?: string[]; // Optional
// };


// const jobs = [
//   {
//     id: '1',
//     title: 'React Native Developer',
//     company: 'Google',
//     location: 'Bangalore (Hybrid)',
//     experience: '2+ years',
//     stipend: '₹50,000/month',
//     description: 'Design, develop, and maintain high-performance mobile applications using React Native. Collaborate with cross-functional teams to define, design, and ship new features. Optimize components for performance across a wide range of mobile devices. Write clean, maintainable code and participate in code reviews.',
//     skills: ['React Native', 'JavaScript (ES6+)', 'Redux', 'REST APIs', 'Mobile UI/UX', 'Git'],
//     benefits: ['Health Insurance', 'Flexible Working Hours', 'Remote Work Option', 'Learning Resources', 'Performance Bonuses'],
//     image: 'https://ecodesoft.com/wp-content/uploads/2020/08/react-native-mobile-app-development.png',
//   },
  
//   {
//     id: '2',
//     title: 'Backend Developer',
//     company: 'Amazon',
//     location: 'Hyderabad',
//     experience: '3+ years',
//     stipend: '₹60,000/month',
//     description: 'As a Backend Developer at Amazon, you will be responsible for designing and implementing server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will work closely with front-end developers, data engineers, and DevOps to integrate APIs, develop microservices, and maintain database systems. You’ll also troubleshoot issues, optimize performance, and ensure scalability in production systems.',
//     skills: ['Node.js', 'Java', 'SQL/NoSQL Databases', 'RESTful APIs', 'Microservices Architecture', 'AWS'],
//     benefits: ['Health Insurance', 'Work From Home Option', 'Performance Bonuses', 'Employee Discount', 'Learning Opportunities'],
//     image: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
//   },  

//   {
//     id: '3',
//     title: 'Data Scientist',
//     company: 'Netflix',
//     location: 'Remote',
//     experience: '1+ year',
//     stipend: '₹70,000/month',
//     description: 'As a Data Scientist at Netflix, you will analyze vast amounts of viewing data to identify trends, develop predictive models, and support business decisions across content, marketing, and product teams.',
//     skills: ['Python', 'Machine Learning', 'Data Visualization', 'SQL', 'Statistics', 'TensorFlow/PyTorch'],
//     benefits: ['Remote Work', 'Flexible Hours', 'Stock Options', 'Premium Streaming Access', 'Comprehensive Health Benefits'],
//     image: 'https://cdn-icons-png.flaticon.com/512/1925/1925173.png',
//   },
//   {
//     id: '4',
//     title: 'DevOps Engineer',
//     company: 'Meta',
//     location: 'Pune',
//     experience: '2-4 years',
//     stipend: '₹65,000/month',
//     description: 'As a DevOps Engineer at Meta, your role will involve automating deployment pipelines, managing infrastructure as code, monitoring applications, and improving reliability and availability. You will work with cloud platforms, CI/CD tools, and container orchestration systems to streamline the development and deployment lifecycle. You’ll also be responsible for ensuring security compliance and infrastructure scalability.',
//     skills: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins/GitHub Actions', 'AWS/GCP', 'Linux Administration'],
//     benefits: ['Health Insurance', 'Stock Grants', 'Flexible Working Hours', 'Wellness Programs', 'Onsite Meals (optional)'],
//     image: 'https://media.istockphoto.com/id/1161702497/vector/team-of-programmer-concept-with-devops-software-development-practices-methodology-vector.jpg?s=612x612&w=0&k=20&c=5cqLQaudaYaXv3OdYQHjt-F-LhcuOiBhXWtHLMwj4PU=',
//   },  

//   {
//     id: '5',
//     title: 'UI/UX Designer',
//     company: 'Adobe',
//     location: 'Mumbai',
//     experience: '2+ years',
//     stipend: '₹55,000/month',
//     description: 'Design intuitive, engaging user interfaces and experiences for Adobe products. Collaborate with developers and product managers to turn ideas into elegant user flows and prototypes. Conduct user research to improve usability and accessibility.',
//     skills: ['Figma', 'Adobe XD', 'Wireframing', 'User Research', 'Prototyping'],
//     benefits: ['Health Insurance', 'Hybrid Work Policy', 'Creative Environment', 'Design Conferences Access'],
//     image: 'https://cdn-icons-png.flaticon.com/512/8448/8448634.png',
//   },
  
//   {
//     id: '6',
//     title: 'Machine Learning Engineer',
//     company: 'Tesla',
//     location: 'Bangalore',
//     experience: '3+ years',
//     stipend: '₹75,000/month',
//     description: 'Build and deploy machine learning models for Tesla’s AI-driven applications. Work with real-time data to improve autonomous systems and predictive analytics. Collaborate with data scientists and software engineers on scalable ML pipelines.',
//     skills: ['Python', 'TensorFlow', 'Deep Learning', 'Data Preprocessing', 'Model Deployment'],
//     benefits: ['Stock Options', 'Remote Flexibility', 'Team Hackathons', 'Health Insurance'],
//     image: 'https://cdn-icons-png.flaticon.com/512/2980/2980560.png',
//   },
  
//   {
//     id: '7',
//     title: 'Cybersecurity Analyst',
//     company: 'Cisco',
//     location: 'Delhi',
//     experience: '2-5 years',
//     stipend: '₹68,000/month',
//     description: 'Monitor, detect, and respond to cyber threats across networks and systems. Analyze vulnerabilities, conduct risk assessments, and implement security controls. Ensure compliance with global security policies and protocols.',
//     skills: ['Network Security', 'SIEM Tools', 'Firewall Management', 'Threat Analysis', 'Python/Shell Scripting'],
//     benefits: ['Health Insurance', 'Paid Certifications', 'Remote Work Options', 'Employee Wellness Programs'],
//     image: 'https://cdni.iconscout.com/illustration/premium/thumb/cyber-security-analyst-illustration-download-in-svg-png-gif-file-formats--analytics-logo-technology-pack-network-communication-illustrations-1649521.png',
//   },
  
//   {
//     id: '8',
//     title: 'Mobile App Developer',
//     company: 'Flipkart',
//     location: 'Chennai',
//     experience: '1+ year',
//     stipend: '₹50,000/month',
//     description: 'Develop and maintain scalable Android/iOS applications for e-commerce solutions. Optimize app performance and user experience. Work with cross-functional teams to integrate new features and APIs.',
//     skills: ['Flutter/React Native', 'Java/Kotlin/Swift', 'REST APIs', 'Firebase', 'UI/UX Principles'],
//     benefits: ['Learning Budget', 'Flexible Work Hours', 'App Store Reimbursements', 'Health Insurance'],
//     image: 'https://png.pngtree.com/png-vector/20200310/ourmid/pngtree-modern-flat-design-concept-of-mobile-app-development-with-characters-building-png-image_2157836.jpg',
//   },
  
//   {
//     id: '9',
//     title: 'Cloud Architect',
//     company: 'IBM',
//     location: 'Pune',
//     experience: '4+ years',
//     stipend: '₹90,000/month',
//     description: 'Design and implement secure, scalable cloud solutions across hybrid environments. Lead architecture strategy and optimize cloud resources for performance and cost. Collaborate with DevOps and security teams.',
//     skills: ['AWS/Azure/GCP', 'Cloud Architecture', 'Kubernetes', 'Terraform', 'CI/CD'],
//     benefits: ['Remote Work', 'Skill Development Programs', 'Cloud Certification Support', 'Health Insurance'],
//     image: 'https://cdn-icons-png.flaticon.com/512/2637/2637229.png',
//   },
  
//   {
//     id: '10',
//     title: 'Blockchain Developer',
//     company: 'Polygon',
//     location: 'Remote',
//     experience: '2+ years',
//     stipend: '₹80,000/month',
//     description: 'Develop smart contracts and dApps using Ethereum and Polygon protocols. Optimize gas usage and ensure contract security. Work on decentralized infrastructure and blockchain integrations.',
//     skills: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethereum', 'Polygon SDK'],
//     benefits: ['Token Incentives', 'Fully Remote', 'Hackathon Participation', 'Flexible Working Hours'],
//     image: 'https://cdn.iconscout.com/icon/free/png-256/free-blockchain-icon-download-in-svg-png-gif-file-formats--bitcoin-logo-technology-secure-pack-business-icons-411041.png',
//   },
  
//   {
//     id: '11',
//     title: 'Product Manager',
//     company: 'Microsoft',
//     location: 'Gurgaon',
//     experience: '5+ years',
//     stipend: '₹1,00,000/month',
//     description: 'Define product vision, gather requirements, and lead cross-functional teams. Drive roadmap execution and prioritize features based on user and business needs. Ensure timely product delivery.',
//     skills: ['Agile Methodologies', 'Product Roadmapping', 'User Research', 'Wireframing', 'JIRA'],
//     benefits: ['Stock Grants', 'Work-Life Balance', 'Global Exposure', 'Health & Wellness Allowance'],
//     image: 'https://cdn-icons-png.flaticon.com/512/2621/2621283.png',
//   },
  
//   {
//     id: '12',
//     title: 'QA Tester',
//     company: 'Infosys',
//     location: 'Hyderabad',
//     experience: '1-3 years',
//     stipend: '₹45,000/month',
//     description: 'Test software applications to identify bugs and ensure quality. Create test plans, execute manual and automated tests, and document issues. Work closely with developers to resolve bugs.',
//     skills: ['Selenium', 'TestNG', 'Manual Testing', 'JIRA', 'API Testing'],
//     benefits: ['Training Programs', 'Hybrid Work', 'Performance Bonuses', 'Health Coverage'],
//     image: 'https://cdn-icons-png.flaticon.com/512/11676/11676391.png',
//   },

//   {
//     id: '13',
//     title: 'Network Engineer',
//     company: 'TCS',
//     location: 'Bangalore',
//     experience: '2+ years',
//     stipend: '₹55,000/month',
//     description: 'Maintain and monitor network infrastructure, ensuring high availability and performance. Troubleshoot connectivity issues and implement security protocols. Work with teams to optimize network performance.',
//     skills: ['TCP/IP', 'LAN/WAN', 'Firewall Management', 'Cisco', 'Network Monitoring'],
//     benefits: ['Onsite Opportunities', 'Professional Certifications', 'Employee Wellness Programs', 'Health Insurance'],
//     image: 'https://thumbs.dreamstime.com/b/network-engineer-icon-flat-icon-network-engineer-work-server-room-vector-illustration-222571488.jpg',
//   },

//   {
//     id: '14',
//     title: 'Technical Writer',
//     company: 'Oracle',
//     location: 'Remote',
//     experience: '1+ year',
//     stipend: '₹50,000/month',
//     description: 'Create user-friendly documentation for software products, APIs, and systems. Collaborate with developers and QA to understand features and translate them into manuals or guides.',
//     skills: ['Technical Writing', 'Markdown', 'Git', 'API Documentation', 'XML/DITA'],
//     benefits: ['Remote Work', 'Flexible Schedule', 'Learning Resources', 'Health & Dental Insurance'],
//     image: 'https://t3.ftcdn.net/jpg/08/38/77/82/360_F_838778286_eFNLcFGVPKPtBQA6QeO8Cj7caRmkTQeH.jpg',
//   },

//   {
//     id: '15',
//     title: 'Game Developer',
//     company: 'Ubisoft',
//     location: 'Mumbai',
//     experience: '2+ years',
//     stipend: '₹60,000/month',
//     description: 'Design, develop, and optimize gameplay features using industry-standard engines. Collaborate with artists and designers to build immersive game experiences. Ensure performance across platforms.',
//     skills: ['Unity/Unreal Engine', 'C++/C#', 'Game Physics', 'Animation Integration', 'Git'],
//     benefits: ['Gaming Discounts', 'Creative Environment', 'Flexible Hours', 'Health Benefits'],
//     image: 'https://i.pinimg.com/736x/48/99/1f/48991f90e9a0eed6f972f7c310bdd3e0.jpg',
//   },

//   {
//     id: '16',
//     title: 'AR/VR Developer',
//     company: 'Unity',
//     location: 'Bangalore',
//     experience: '3+ years',
//     stipend: '₹85,000/month',
//     description: 'Develop interactive AR/VR applications for mobile and headset devices. Implement real-time 3D experiences using Unity or Unreal. Optimize performance and enhance user immersion.',
//     skills: ['Unity 3D', 'C#', 'ARKit/ARCore', 'VR SDKs', '3D Modelling Basics'],
//     benefits: ['Remote Flexibility', 'Work with XR Experts', 'Device Access', 'Stock Options'],
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVK3JR8RdF1kQ-Dnk10Mze-Enr9clijIXQuFU0a8FNxKgItG498pvfO7Hzwsq1tkTMBs&usqp=CAU',
//   },


//   {
//     id: '17',
//     title: 'AI Research Intern',
//     company: 'TCS Research',
//     location: 'Bangalore',
//     experience: '0-1 year',
//     stipend: '₹45,000/month',
//     description: 'Work alongside senior researchers on cutting-edge projects in AI/ML, including natural language processing, computer vision, and reinforcement learning. Contribute to research papers, prototypes, and experimental codebases. Assist in data collection, preprocessing, and literature reviews.',
//     skills: ['Python', 'Machine Learning', 'Deep Learning', 'Research Writing', 'TensorFlow or PyTorch'],
//     benefits: ['Publication Support', 'Mentorship from Senior Scientists', 'Flexible Work Hours', 'Access to Research Resources'],
//     image: 'https://cdn-icons-png.flaticon.com/512/4599/4599777.png',
//   },

//   {
//     id: '18',
//     title: 'Data Engineer',
//     company: 'Snowflake',
//     location: 'Pune',
//     experience: '2+ years',
//     stipend: '₹70,000/month',
//     description: 'Design and maintain scalable data pipelines and ETL processes. Collaborate with analysts and data scientists to ensure data integrity and availability. Optimize storage and query performance using Snowflake.',
//     skills: ['SQL', 'Python', 'ETL Tools', 'Snowflake', 'Data Warehousing'],
//     benefits: ['Stock Options', 'Remote Work', 'Upskilling Programs', 'Health Insurance'],
//     image: 'https://cdn-icons-png.flaticon.com/512/12663/12663333.png',
//   },

//   {
//     id: '19',
//     title: 'IT Support Specialist',
//     company: 'Wipro',
//     location: 'Hyderabad',
//     experience: '1+ year',
//     stipend: '₹35,000/month',
//     description: 'Provide technical support for hardware, software, and network issues. Help employees with system setup, troubleshooting, and service desk requests. Maintain inventory and update documentation.',
//     skills: ['Windows/Linux', 'Helpdesk Tools', 'Troubleshooting', 'Customer Service', 'Networking Basics'],
//     benefits: ['Shift Allowance', 'Certification Reimbursement', 'Medical Insurance', 'Employee Discounts'],
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZLjtrGbnSiyomcbcKDEB7etNmRhLemwviQ&s',
//   },

//   {
//     id: '20',
//     title: 'Full Stack Developer',
//     company: 'TCS',
//     location: 'Kolkata',
//     experience: '2-3 years',
//     stipend: '₹65,000/month',
//     description: 'Build and maintain end-to-end web applications using front-end and back-end technologies. Collaborate with designers, DevOps, and QA for feature rollouts. Write reusable, scalable, and secure code.',
//     skills: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Docker'],
//     benefits: ['Upskilling Programs', 'Job Rotation', 'Health Benefits', 'Relocation Assistance'],
//     image: 'https://cdn-icons-png.flaticon.com/256/16990/16990457.png',
//   },

//   {
//     id: '21',
//     title: 'Content Strategist',
//     company: 'The Hindu Group',
//     location: 'Chennai',
//     experience: '1-2 years',
//     stipend: '₹40,000/month',
//     description: 'Develop and manage content strategies across digital platforms. Coordinate with writers, editors, and designers to ensure consistent brand voice. Analyze content performance and optimize for SEO.',
//     skills: ['SEO Basics', 'Editorial Planning', 'Content Writing', 'Google Analytics', 'Communication'],
//     benefits: ['Press Passes', 'Flexible Work Hours', 'Learning Workshops', 'Health Coverage'],
//     image: 'https://cdn-icons-png.flaticon.com/512/3004/3004613.png',
//   },

//   {
//     id: '22',
//     title: 'Graphic Designer',
//     company: 'BYJU’S',
//     location: 'Bangalore',
//     experience: '1-2 years',
//     stipend: '₹45,000/month',
//     description: 'Design engaging visuals for marketing campaigns, websites, and social media. Collaborate with content and video teams. Strong portfolio with an eye for aesthetics and detail is a must.',
//     skills: ['Adobe Illustrator', 'Photoshop', 'Canva', 'Typography', 'Branding'],
//     benefits: ['Design Conferences', 'Creative Freedom', 'Team Outings', 'Laptop & Software Allowance'],
//     image: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
//   },

//   {
//     id: '23',
//     title: 'Marketing Associate',
//     company: 'Zomato',
//     location: 'Gurgaon',
//     experience: '0-1 year',
//     stipend: '₹35,000/month',
//     description: 'Assist in planning and executing marketing campaigns. Work on influencer outreach, user engagement, and performance tracking. Great role for someone passionate about brand building.',
//     skills: ['Social Media Marketing', 'Google Ads', 'Email Campaigns', 'Creativity', 'Basic Excel'],
//     benefits: ['Meal Coupons', 'Performance Bonus', 'Brand Swag', 'Networking Events'],
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopRVCh7rLl2AK3OepniA0A7kB-e4Ajb13Hw&s',
//   },

//   {
//   id: '24',
//   title: '                HR',
//   company: 'Infosys',
//   location: 'Pune',
//   experience: '1-3 years',
//   stipend: '₹50,000/month',
//   description: 'Manage recruitment cycles, onboarding, employee engagement, and policy implementation. Serve as the point of contact for HR queries across business units.',
//   skills: ['MS Excel', 'HRMS Tools', 'People Skills', 'Employee Engagement', 'Conflict Resolution'],
//   benefits: ['Work-Life Balance', 'Professional Development', 'Transport Allowance', 'Health Insurance'],
//   image: 'https://cdn-icons-png.flaticon.com/512/7966/7966941.png',
// },

// {
//   id: '25',
//   title: 'Business Analyst',
//   company: 'Deloitte',
//   location: 'Hyderabad',
//   experience: '1-2 years',
//   stipend: '₹60,000/month',
//   description: 'Analyze business processes, identify areas of improvement, and present data-driven recommendations to clients. Collaborate with cross-functional teams to implement solutions and monitor performance.',
//   skills: ['Excel', 'Business Communication', 'Data Analysis', 'PowerPoint', 'Critical Thinking'],
//   benefits: ['Client Exposure', 'Consulting Certifications', 'Travel Opportunities', 'Performance Bonus'],
//   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKNg3vn5HdbFg28nGc2VSsU04PPLzAwYctw&s',
// },


// {
//   id: '26',
//   title: 'Associate Product Manager',
//   company: 'Flipkart',
//   location: 'Bangalore',
//   experience: '0-1 year',
//   stipend: '₹70,000/month',
//   description: 'Collaborate with tech, design, and marketing teams to define product requirements, track KPIs, and ensure seamless feature launches. Ideal for fresh MBAs with strong analytical thinking.',
//   skills: ['Market Research', 'Wireframing Concepts', 'Agile Basics', 'SQL (Basic)', 'Communication'],
//   benefits: ['Stock Options', 'Product Training', 'Flexible Schedule', 'Cross-Team Collaboration'],
//   image: 'https://cdn-icons-png.flaticon.com/512/2621/2621283.png',
// },

// {
//   id: '27',
//   title: 'Marketing Intern',
//   company: 'Unacademy',
//   location: 'Remote',
//   experience: '0 years',
//   stipend: '₹20,000/month',
//   description: 'Support campaign execution, content creation, and performance tracking. Assist in managing social media pages and collaborate with influencers for promotions.',
//   skills: ['Social Media', 'Canva', 'Copywriting', 'Communication', 'Google Analytics'],
//   benefits: ['Remote Work', 'Completion Certificate', 'Letter of Recommendation', 'Mentorship'],
//   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafLDWn-4nLpigmXLTRYduKIDyLgzDZlPBeA&s',
// },

// {
//   id: '28',
//   title: 'Frontend Developer Intern (React.js)',
//   company: 'Zerodha',
//   location: 'Bangalore (Hybrid)',
//   experience: '0-1 year',
//   stipend: '₹25,000/month',
//   description: 'Work on high-performance web apps with React.js, contribute to UI components, and optimize for performance and accessibility. Collaborate with designers and backend engineers.',
//   skills: ['React.js', 'HTML/CSS', 'JavaScript ES6', 'Redux', 'Git'],
//   benefits: ['Mentorship', 'Real Projects', 'PPO Opportunity', 'Hackathons'],
//   image: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
// },


// {
//   id: '29',
//   title: 'Angular Developer Intern',
//   company: 'Tech Mahindra',
//   location: 'Pune',
//   experience: '0-1 year',
//   stipend: '₹20,000/month',
//   description: 'Develop interactive and scalable web interfaces using Angular. Gain hands-on experience with TypeScript, routing, services, and REST APIs.',
//   skills: ['Angular', 'TypeScript', 'Bootstrap', 'REST APIs', 'RxJS'],
//   benefits: ['Industry Exposure', 'Completion Certificate', 'Code Reviews', 'PPO Chance'],
//   image: 'https://web.dev/static/explore/angular/cover-wide.svg',
// },

// {
//   id: '30',
//   title: 'Frontend Intern (Next.js)',
//   company: 'Razorpay',
//   location: 'Remote',
//   experience: '0-1 year',
//   stipend: '₹28,000/month',
//   description: 'Build SSR-friendly web apps with Next.js, integrate APIs, and contribute to product dashboards. Learn how large-scale apps are optimized for SEO and performance.',
//   skills: ['Next.js', 'React.js', 'Tailwind CSS', 'Axios', 'GitHub'],
//   benefits: ['Remote', 'Performance Bonus', 'Codebase Access', 'Tech Learning Stipend'],
//   image: 'https://static.vecteezy.com/system/resources/previews/033/184/709/non_2x/frontend-development-icon-vector.jpg',
// },

// {
//   id: '31',
//   title: 'Full Stack Web Developer Intern',
//   company: 'CRED',
//   location: 'Remote',
//   experience: '0-1 year',
//   stipend: '₹30,000/month',
//   description: 'Work on full-stack features using React on the frontend and Node.js on the backend. Handle API integration, MongoDB operations, and authentication flows.',
//   skills: ['React.js', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
//   benefits: ['Remote', 'Swag Kit', 'Live Projects', 'Mentorship from Senior Devs'],
//   image: 'https://cdn-icons-png.flaticon.com/512/4727/4727486.png',
// },

// {
//   id: '32',
//   title: 'AI/ML Intern',
//   company: 'Tata Elxsi',
//   location: 'Bangalore',
//   experience: '0-1 year',
//   stipend: '₹30,000/month',
//   description: 'Work on real-time ML models for computer vision and NLP applications. Assist in data preprocessing, model training, and evaluation. Collaborate with cross-functional teams to build scalable AI solutions.',
//   skills: ['Python', 'scikit-learn', 'TensorFlow or PyTorch', 'Pandas', 'Jupyter Notebooks'],
//   benefits: ['Cutting-edge Projects', 'Mentorship from AI Experts', 'Project Certificate', 'PPO Opportunity'],
//   image: 'https://cdn-icons-png.flaticon.com/512/3617/3617142.png',
// },  
  
  
// ];

// const Jobs = () => {
//   const [bookmarked, setBookmarked] = useState<string[]>([]);
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);

//   const { bookmarkedJobs,toggleBookmark} = useBookmarks();
 


//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {jobs.map((job) => (
//         <Pressable
//           onPressIn={() => setHoveredCard(job.id)}
//           key={job.id}
//           style={({ pressed }) => [
//             styles.card,
//             pressed && styles.cardHover,
//           ]}
//         >
//           <Image source={{ uri: job.image }} style={styles.image} />
//           <View style={styles.info}>
//             <Text style={styles.title}>{job.title}</Text>
//             <Text style={styles.detail}>{job.company} • {job.location}</Text>
//             <Text style={styles.detail}>Exp: {job.experience}</Text>
//             <Text style={styles.detail}>💰 {job.stipend}</Text>

              
//                 <Link
//                 href={{
//                   pathname: `/job-detail/${job.id}`,
//                   params: {
//                     title: job.title,
//                     location: job.location,
//                     company: job.company,
//                     experience: job.experience,
//                     salary: job.stipend,
//                     description: job.description,
//                     skills: job.skills?.join(', '), // Pass skills as a comma-separated string
//                     benefits: job.benefits?.join(', '), // Pass benefits as a comma-separated string
//                   },
//                 }}

//               style={styles.link}
//             >
//               View Details
//             </Link>


//           </View>
//           <Pressable
//             onPress={() => toggleBookmark(job)}
//             style={styles.bookmarkBtn}
//           >
//             <Ionicons
//               // name={bookmarked.includes(job.id) ? 'bookmark' : 'bookmark-outline'}
//               // size={24}
//               // color="#4e91ff"

//               name={
//                 bookmarkedJobs.some((b) => b.id === job.id)
//                   ? 'bookmark'
//                   : 'bookmark-outline'
//               }
//               size={24}
//               color="#4e91ff"

//             />
//           </Pressable>
//         </Pressable>
//       ))}
//     </ScrollView>
//   );
// };

// export default Jobs;

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
//     // transition: 'all 0.3s',
//   },
//   cardHover: {
//       transform: [{ scale: 1.05 }], // Slightly scale up the card
//       elevation: 10, // Increase elevation for a lifted effect
//       shadowColor: '#4e91ff', // Change shadow color
//       shadowOpacity: 0.6,
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
//   bookmarkBtn: {
//     position: 'absolute',
//     top: 12,
//     right: 12,
//   },

//   link: {
//     marginTop: 12,
//     color: '#4e91ff',
//     fontWeight: 'bold',
//     textDecorationLine: 'underline', // Optional: Adds an underline to the link
//     fontSize: 14,
//   },

//   linkText: {
//     fontSize: 14,
//     color: '#4e91ff',
//   },

// });





import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useBookmarks } from './bookmark';
import Hoverable from 'react-native-web-hover';



type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  stipend: string;
  description: string;
  image: string;
  skills?: string[];
  benefits?: string[];
};

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]); // State to store job data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const { bookmarkedJobs, toggleBookmark } = useBookmarks();

  // Fetch jobs from the API
  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://testapi.getlokalapp.com/common/jobs?page=1');
      console.log('Status:', response.status); // Log HTTP status

      if (!response.ok) {
        const errorText = await response.text(); // Print more detailed error
        console.error('API Error:', errorText);
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched data:', JSON.stringify(data, null, 2)); // Log the full API response

      if (!data?.results || data.results.length === 0) {
        throw new Error("No 'results' field or empty results in response.");
      }

      // Map API response to Job type
      const mappedJobs = data.results
        .filter((job: any) => job.id) // Filter out jobs without an `id`
        .map((job: any) => ({
          id: job.id.toString(),
          title: job.title || 'No Title', // Fallback for missing title
          company: job.company_name || 'Unknown Company',
          location: job.primary_details?.Place || 'Unknown Location',
          experience: job.primary_details?.Experience || 'Not Specified',
          stipend: job.primary_details?.Salary || 'Not Specified',
          description: job.other_details || job.title || 'No Description',
          image: job.creatives?.[0]?.file || 'https://via.placeholder.com/150', // Fallback for missing image
          skills: job.contentV3?.V3?.map((field: any) => field.field_value) || [],
          benefits: job.job_tags?.map((tag: any) => tag.value) || [],
        }));

      console.log('Mapped jobs:', JSON.stringify(mappedJobs, null, 2)); // Log the mapped jobs
      setJobs(mappedJobs);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Failed to fetch jobs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Render a single job card
  const renderJob = ({ item }: { item: Job }) => (
    <Pressable style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.detail}>{item.company} • {item.location}</Text>
        <Text style={styles.detail}>Exp: {item.experience}</Text>
        <Text style={styles.detail}>💰 {item.stipend}</Text>

        {/* Render job tags */}
        {item.benefits?.map((benefit, index) => (
          <Text
            key={index}
            style={{
              backgroundColor: '#E7F3FE',
              color: '#0E56A8',
              padding: 4,
              borderRadius: 4,
              marginTop: 4,
            }}
          >
            {benefit}
          </Text>
        ))}

        {/* Render skills */}
        {item.skills && item.skills.length > 0 && (
          <Text style={styles.skills}>
            Skills: {item.skills.join(', ')}
          </Text>
        )}

        <Link
          href={{
            pathname: `/job-detail/${item.id}`,
            params: {
              title: item.title,
              location: item.location,
              company: item.company,
              experience: item.experience,
              salary: item.stipend,
              description: item.description,
              skills: item.skills?.join(', '),
              benefits: item.benefits?.join(', '),
            },
          }}
          style={styles.link}
        >
          View Details
        </Link>
      </View>
      <Pressable onPress={() => toggleBookmark(item)} style={styles.bookmarkBtn}>
        <Ionicons
          name={bookmarkedJobs.some((b) => b.id === item.id) ? 'bookmark' : 'bookmark-outline'}
          size={24}
          color="#4e91ff"
        />
      </Pressable>
    </Pressable>
  );

  // Render loading indicator
  const renderLoading = () => {
    if (!loading) return null;
    return <ActivityIndicator style={styles.loading} size="large" color="#4e91ff" />;
  };

  // Render error message
  const renderError = () => {
    if (!error) return null;
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderError()}
      {loading && jobs.length === 0 ? (
        renderLoading()
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderJob}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default Jobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  list: {
    paddingBottom: 16,
  },
  skills: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: '',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
    width: 300,
    marginLeft: 20,
    marginRight: 20, // Set a fixed width for the card
   // Set a fixed height for the card
    
  },
  cardHover: {
    transform: [{ scale: 1.05 }], // Slightly scale up the card
    shadowColor: 'AFDDFF', // Change shadow color
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6, // Increase elevation for a lifted effect
  },

  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
    marginTop: 10,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
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
  loading: {
    marginTop: 20,
  },
  errorContainer: {
    padding: 16,
    backgroundColor: '#ffe6e6',
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    color: '#d9534f',
    fontSize: 14,
    textAlign: 'center',
  },
});