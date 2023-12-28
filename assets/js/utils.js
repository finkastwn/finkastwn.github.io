// Function to fetch and append content
function fetchAndAppendContent(url, containerId) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error(`Error fetching content from ${url}`, error));
}

// Function to fetch and append content
function fetchAndAppend(sectionName) {
    const url = `section/${sectionName}-section.html`;
    const containerId = `${sectionName}-section`;
    return fetchAndAppendContent(url, containerId);
}

// Function to fetch and append all sections
function fetchAllSections() {
    const sections = ['home', 'about', 'project', 'contact'];
    const promises = sections.map(section => fetchAndAppend(section));
    return Promise.all(promises);
}

// Function to set active class for the navbar link
function setActiveNavLink(linkId) {
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navbarLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(linkId).classList.add('active');
}

// Function to add event listener for a navbar link
function addNavLinkListener(linkId, sectionName) {
    document.getElementById(linkId).addEventListener('click', () => {
        console.log(`Link clicked: ${linkId}`);
        setActiveNavLink(linkId);
        fetchAndAppend(sectionName);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAllSections().then(() => {
      // Add event listeners for each navbar link using utils functions
      addNavLinkListener('home-link', 'home');
      addNavLinkListener('about-link', 'about');
      addNavLinkListener('project-link', 'project');
      addNavLinkListener('contact-link', 'contact');
    });
  });

