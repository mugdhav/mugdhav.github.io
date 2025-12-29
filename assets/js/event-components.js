/**
 * Event Components JavaScript
 * Reusable functionality for event pages
 */

// Toggle icon for collapsible troubleshooting and info sections
document.addEventListener('DOMContentLoaded', function() {
    // Handle all troubleshooting sections
    document.querySelectorAll('details.troubleshooting-section, details.info-section').forEach(detail => {
        detail.addEventListener('toggle', function() {
            const icon = this.querySelector('.toggle-icon');
            if (icon) {
                icon.textContent = this.open ? '−' : '+';
            }
        });
    });
});
