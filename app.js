const sidebar = document.querySelector(".sidebar");
const sidebarToggleBtn = document.querySelectorAll(".sidebar-toggle");
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");
const themeText = themeToggleBtn.querySelector(".theme-text");
const searchForm = document.querySelector(".search-form");

const updateThemeUI = () => {
    const isDark = document.body.classList.contains("dark-theme");
    // Update icon
    themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
    // Update label
    themeText.textContent = isDark ? "Light Mode" : "Dark Mode";
};

// Load theme preference
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

// Apply saved or system theme
document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
updateThemeUI();

// Sidebar toggle buttons
sidebarToggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
});

// Expand sidebar when search form clicked
searchForm.addEventListener("click", () => {
    if (sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
        searchForm.querySelector("input").focus();
    }
});

// Theme toggle button
themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeUI();
});

// Collapse sidebar by default on large screens
if (window.innerWidth > 768) {
    sidebar.classList.add("collapsed");
}

