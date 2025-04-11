// app/bookmark.tsx
// This file contains the BookmarkProvider and useBookmarks hook for managing bookmarks

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  stipend: string;
  image: string;
};

type BookmarkContextType = {
  bookmarkedJobs: Job[];
  toggleBookmark: (job: Job) => void;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Job[]>([]);

  const toggleBookmark = (job: Job) => {
    setBookmarkedJobs((prev) =>
      prev.some((bookmarkedJob) => bookmarkedJob.id === job.id)
        ? prev.filter((bookmarkedJob) => bookmarkedJob.id !== job.id)
        : [...prev, job]
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedJobs, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};