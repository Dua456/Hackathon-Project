var _a;
// Function to toggle visibility of a section
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        }
        else {
            section.style.display = 'none';
        }
    }
}
// Add event listener for the skills toggle button
(_a = document.getElementById('toggle-skills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    toggleSection('skills');
});
// Hide the skills section by default
document.addEventListener('DOMContentLoaded', function () {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = 'none'; // Hide initially
    }
});
