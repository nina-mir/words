import { useEffect, useState } from 'react';

export default function DarkModeTest() {
  const [systemPreference, setSystemPreference] = useState<string>("checking...");
  
  useEffect(() => {
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setSystemPreference(darkModeQuery.matches ? "dark" : "light");
      
      const handleChange = (e: MediaQueryListEvent) => {
        setSystemPreference(e.matches ? "dark" : "light");
      };
      
      darkModeQuery.addEventListener('change', handleChange);
      return () => darkModeQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dark Mode Test
        </h1>
        <p className="mt-2 text-gray-700 dark:text-gray-200">
          Your system is set to: <strong>{systemPreference}</strong> mode
        </p>
        <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded">
          This box should change colors based on your system preference
        </div>
      </div>
    </div>
  );
}