document.addEventListener("DOMContentLoaded", function() {
    // Select all sidebar and specific links with a common class or attribute
    const links = document.querySelectorAll(".sidebar-link, .content-link");

    // Add event listeners to each link
    links.forEach(link => {
        link.addEventListener("click", function() {
            // Determine if it is a sidebar link or a content link
            const target = this.getAttribute("data-target") || this.getAttribute("href").substring(1); // Assume href="#api1"

            // Hide all sections
            document.querySelectorAll("section").forEach(section => {
                section.classList.add("hidden");
            });

            // Show the target section
            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.classList.remove("hidden");
                // Optionally scroll to the section if it's not a sidebar operation
                if (!this.classList.contains('sidebar-link')) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('pre');
    const codeText = codeBlock.innerText;
    navigator.clipboard.writeText(codeText).then(function() {
        alert('Code copied to clipboard!');
    }).catch(function(err) {
        console.error('Failed to copy text: ', err);
    });
}
function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}
