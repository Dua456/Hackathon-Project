// Function to toggle visibility of a section
function toggleSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
      if (section.style.display === 'none' || section.style.display === '') {
          section.style.display = 'block';
      } else {
          section.style.display = 'none';
      }
  }
}

// Add event listener for the skills toggle button
document.getElementById('toggle-skills')?.addEventListener('click', () => {
  toggleSection('skills');
});

// Hide the skills section by default
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
      skillsSection.style.display = 'none'; // Hide initially
  }
});

