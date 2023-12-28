document.addEventListener("DOMContentLoaded", function () {
    // Load the default tab content
    loadTabContent('webDev');

    // Attach event listener to handle tab changes only for nav-pills links
    var navPills = document.querySelector('.nav-pills');
    if (navPills) {
        navPills.querySelectorAll('.nav-link').forEach(function (tabLink) {
            tabLink.addEventListener('click', function (event) {
                event.preventDefault();
                var tabId = event.target.getAttribute('href').substring(1);
                loadTabContent(tabId);
            });
        });
    }
});

function loadTabContent(tabId) {
    var url = tabId + '.html';
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('tabContent').innerHTML = data;
        })
        .catch(error => console.error('Error loading tab content:', error));
}