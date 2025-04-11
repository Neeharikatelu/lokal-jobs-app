// import * as SQLite from 'expo-sqlite';
// import { Platform } from 'react-native';

// // Open the SQLite database

// let db: SQLite.WebSQLDatabase | null = null;
// if (Platform.OS !== 'web') {
//   db = SQLite.openDatabase('bookmarks.db');
// }

// const db = (SQLite as any).openDatabase('bookmarks.db');

// // Type for a Job
// export type Job = {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   experience: string;
//   stipend: string;
//   description: string;
//   image: string;
//   skills?: string[];
//   benefits?: string[];
// };

// // Initialize the database and create the bookmarks table
// export const initializeDatabase = () => {
//   db.transaction((tx: any) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS bookmarks (
//         id TEXT PRIMARY KEY,
//         title TEXT,
//         company TEXT,
//         location TEXT,
//         experience TEXT,
//         stipend TEXT,
//         description TEXT,
//         image TEXT
//       );`
//     );
//   });
// };

// // Save a job to the bookmarks table
// export const saveBookmark = (job: Job, onSuccess: () => void, onError: (error: any) => void) => {
//   db.transaction((tx: any) => {
//     tx.executeSql(
//       `INSERT INTO bookmarks (id, title, company, location, experience, stipend, description, image)
//        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
//       [
//         job.id,
//         job.title,
//         job.company,
//         job.location,
//         job.experience,
//         job.stipend,
//         job.description,
//         job.image,
//       ],
//       () => {
//         console.log('Job bookmarked successfully!');
//         onSuccess();
//       },
//       (_, error: any) => {
//         console.error('Error saving bookmark:', error);
//         onError(error);
//         return false;
//       }
//     );
//   });
// };

// // Remove a job from the bookmarks table
// export const removeBookmark = (jobId: string, onSuccess: () => void, onError: (error: any) => void) => {
//   db.transaction((tx: any) => {
//     tx.executeSql(
//       `DELETE FROM bookmarks WHERE id = ?;`,
//       [jobId],
//       () => {
//         console.log('Job removed from bookmarks!');
//         onSuccess();
//       },
//       (_, error: any) => {
//         console.error('Error removing bookmark:', error);
//         onError(error);
//         return false;
//       }
//     );
//   });
// };

// // Fetch all bookmarked jobs
// export const getBookmarks = (onSuccess: (jobs: Job[]) => void, onError: (error: any) => void) => {
//   db.transaction((tx: any) => {
//     tx.executeSql(
//       `SELECT * FROM bookmarks;`,
//       [],
//       (_, { rows }:{rows: any}) => {
//         const jobs: Job[] = rows._array;
//         onSuccess(jobs);
//       },
//       (_, error:any) => {
//         console.error('Error fetching bookmarks:', error);
//         onError(error);
//         return false;
//       }
//     );
//   });
// };