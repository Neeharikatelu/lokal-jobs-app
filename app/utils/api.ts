export const fetchJobs = async (page: number) => {
    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      return data.jobs; // Assuming the API response has a `jobs` field
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }
  };