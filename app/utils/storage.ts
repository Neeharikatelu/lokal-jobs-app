import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARK_KEY = 'BOOKMARKED_JOBS';

export const saveBookmark = async (job: any) => {
  try {
    const stored = await AsyncStorage.getItem(BOOKMARK_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    const updated = [...parsed, job];
    await AsyncStorage.setItem(BOOKMARK_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving bookmark:', error);
  }
};

export const removeBookmark = async (id: string) => {
  try {
    const stored = await AsyncStorage.getItem(BOOKMARK_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    const updated = parsed.filter((job: any) => job.id !== id);
    await AsyncStorage.setItem(BOOKMARK_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error removing bookmark:', error);
  }
};

export const getBookmarkedJobs = async (): Promise<any[]> => {
  try {
    const stored = await AsyncStorage.getItem(BOOKMARK_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error retrieving bookmarks:', error);
    return [];
  }
};
