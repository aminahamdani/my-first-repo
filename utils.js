/**
 * Utility functions for my-first-repo
 */

/**
 * Format a date to readable string
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Generate a random greeting message
 * @returns {string} Random greeting
 */
export function getRandomGreeting() {
  const greetings = [
    'Welcome to my-first-repo!',
    'Happy coding!',
    'Git is awesome!',
    'Keep learning!',
    'Push it to the limit!'
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

/**
 * Check if running on GitHub Pages
 * @returns {boolean} True if on GitHub Pages
 */
export function isGitHubPages() {
  return window.location.hostname.includes('github.io');
}

/**
 * Get repo info from URL
 * @returns {object} Repository information
 */
export function getRepoInfo() {
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  return {
    owner: 'aminahamdani',
    repo: 'my-first-repo',
    url: 'https://github.com/aminahamdani/my-first-repo'
  };
}

/**
 * Log styled message to console
 * @param {string} message - Message to log
 * @param {string} style - CSS style string
 */
export function styledLog(message, style = 'color: #007bff; font-weight: bold;') {
  console.log(`%c${message}`, style);
}
