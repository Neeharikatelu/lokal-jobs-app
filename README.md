# 🌐 Lokal Job App

A modern **React Native** application built with **Expo** that allows users to:

- 📋 Browse job listings fetched from an external API  
- 🔖 Bookmark jobs for **offline** access  
- 📄 View detailed job descriptions  
- 🧭 Use dynamic routing for seamless navigation  

---

## ✨ Features

- **Job Listings:** Fetch and display jobs from a public API.
- **Bookmark Jobs:** Save favorite jobs for later viewing.
- **Offline Storage:** Bookmarked jobs are saved locally using `AsyncStorage`.
- **Job Details:** View detailed job information on a dedicated screen.
- **Dynamic Routing:** Navigate dynamically to job detail screens via job IDs.

---

## 🛠 Installation

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm or yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

Install Expo CLI globally:

``` bash
npm install -g expo-cli
```

### 📥 Clone the Repository
```
git clone https://github.com/Neeharikatelu/lokal-jobs-app.git
cd lokal_job_app
```

### 📦 Install Dependencies
```
npm install
```

### ▶️ Start the Development Server
```
npx expo start
```

### 📱 Run the App on a Device
Install the Expo Go app from the App Store (iOS) or Google Play Store (Android).
Open Expo Go and scan the QR code shown in the terminal or browser.

## 📁 Project Structure
```
lokal_job_app/
├── app/
│   ├── index.tsx                # Main entry point of the app
│   ├── _layout.tsx              # Tab navigation layout
│   ├── jobs.tsx                 # Jobs listing page
│   ├── bookmarks.tsx            # Bookmarked jobs page
│   ├── job-detail/[id].tsx      # Job details page (dynamic routing)
│   ├── utils/
│   │   └── storage.ts           # Offline storage using AsyncStorage
│   └── bookmark.tsx             # BookmarkProvider and useBookmarks hook
├── components/
│   ├── JobCard.tsx              # Reusable component for job cards
│   └── ExternalLink.tsx         # Handles external links
├── hooks/
│   ├── useThemeColor.ts         # Handles light/dark mode theming
│   └── useColorScheme.ts        # Detects the user's color scheme
├── assets/                      # Static assets (images, icons, etc.)
├── tsconfig.json                # TypeScript configuration
├── app.json                     # Expo configuration
└── package.json                 # Project dependencies and scripts
```
### Entry Point
- The app starts from index.tsx.
- The navigation layout is defined in _layout.tsx, which uses tab navigation to switch between the Jobs and Bookmarks pages.

### 📄 Page-wise Functionality
#### 1. jobs.tsx — Job Listings.
Purpose: Displays a list of jobs fetched from the API.

Fetching Jobs:
```
const fetchJobs = async () => {
  const response = await fetch('https://testapi.getlokalapp.com/common/jobs?page=1');
  const data = await response.json();
  setJobs(data.results);
};
```
- Display: Uses FlatList and JobCard for each item.
- Bookmarking: Calls saveBookmark(job) from storage.ts.

#### 2. bookmarks.tsx — Bookmarked Jobs
- Purpose: Display saved jobs stored offline via AsyncStorage.
- Unbookmark: Users can remove a job using removeBookmark(id).

#### 3. [id].tsx — Job Detail Page
- Purpose: Show detailed job info via dynamic routing.
- Routing: Uses the id parameter from the URL.
- Fetching: Loads job detail from the API or from passed props.

#### 4. storage.ts — Bookmark Management
- saveBookmark(job): Save a job to AsyncStorage.
- getBookmarkedJobs(): Retrieve all bookmarked jobs.
- removeBookmark(id): Delete a job by its ID.
```
const saveBookmark = async (job) => {
  const stored = await AsyncStorage.getItem('BOOKMARKED_JOBS');
  const parsed = stored ? JSON.parse(stored) : [];
  const updated = [...parsed, job];
  await AsyncStorage.setItem('BOOKMARKED_JOBS', JSON.stringify(updated));
};
```

### 🌐 API Integration
Endpoint: https://testapi.getlokalapp.com/common/jobs?page=1
```
const fetchJobs = async () => {
  try {
    const response = await fetch('https://testapi.getlokalapp.com/common/jobs?page=1');
    const data = await response.json();
    setJobs(data.results);
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
};
```

### 🧩 Challenges Faced
🔌 API Integration Issues: Initially, I couldn't fetch jobs from the API. To debug, I created a mock job data array and rendered it in the UI. Once the UI worked, I successfully integrated the real API.
📦 Offline Storage Attempt with SQLite: Initially attempted to use SQLite for offline bookmark storage, but faced compatibility and performance issues. I later shifted to using AsyncStorage, which worked seamlessly.

✅ Conclusion
The Lokal Job App is a clean, responsive, and feature-rich job listing platform built with React Native and Expo.
It provides:
Realtime API-driven job listings
Local bookmarks
