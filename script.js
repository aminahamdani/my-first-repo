/**
 * Main script for my-first-repo
 * Handles interactions and dynamic content
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Welcome to my-first-repo!');
  
  // Add click handler to links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Link clicked:', this.href);
    });
  });

  // Display current time
  displayCurrentTime();
  
  // Add interactive greeting
  addGreeting();
});

/**
 * Display current time on page
 */
function displayCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleString();
  console.log('Current time:', timeString);
}

/**
 * Add interactive greeting to the page
 */
function addGreeting() {
  const greeting = document.createElement('p');
  greeting.style.cssText = 'color: #007bff; font-weight: bold; margin-top: 20px;';
  greeting.textContent = `Hello! You visited this page on ${new Date().toLocaleDateString()}`;
  document.body.appendChild(greeting);
}

/**
 * Log repo stats
 */
function logRepoStats() {
  console.log('%c📚 my-first-repo Stats', 'font-size: 16px; color: #007bff; font-weight: bold;');
  console.log('✨ Learning Git & GitHub');
  console.log('🚀 Deployed with GitHub Pages');
  console.log('💻 Built with HTML, CSS, JavaScript');
}

// Call stats on load
logRepoStats();
