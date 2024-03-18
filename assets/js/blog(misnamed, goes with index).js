let darkModeEnabled = false;

const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", () => {
    darkModeEnabled = !darkModeEnabled;

    if(darkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
}

//replaces blog
const urlParams = new URLSearchParams(window.location.search);
const blogTitle = urlParams.get('title');
const blogContent = urlParams.get('content');


const titleElement = document.querySelector('.blog-title');
const contentElement = document.querySelector('.content');

if (blogTitle) {
    titleElement.textContent = blogTitle;
}

if (blogContent) {
    contentElement.textContent = blogContent;
}

function navigateToBlog() {
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Encode the user input to make it URL-safe
    const encodedTitle = encodeURIComponent(title);
    const encodedContent = encodeURIComponent(content);

    // Construct the URL with query parameters
    const url = `blog.html?username=${username}&title=${encodedTitle}&content=${encodedContent}`;

    // Redirect the user to the blog page
    window.location.href = url;
}

/*document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const title = urlParams.get('title');
    const content = urlParams.get('content');

    // Update the blog title and content with the query parameter values
    document.querySelector('.First').textContent = username + "'s Blog";
    document.querySelector('.blog-title').textContent = title;
    document.querySelector('.content').textContent = content;*/