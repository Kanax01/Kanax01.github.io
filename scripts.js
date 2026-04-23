// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fetch GitHub stats on page load
async function fetchGitHubStats() {
    try {
        // Fetch user data from GitHub API
        const userResponse = await fetch('https://api.github.com/users/Kanax01');
        const userData = await userResponse.json();
        
        // Update followers and public repositories
        if (document.getElementById('followers')) {
            document.getElementById('followers').textContent = userData.followers;
        }
        if (document.getElementById('repos')) {
            document.getElementById('repos').textContent = userData.public_repos;
        }
        
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Keep the fallback values if API fails
    }
}

// Load stats when page loads
window.addEventListener('load', fetchGitHubStats);
