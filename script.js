document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    // Add a simple click effect
    downloadBtn.addEventListener('click', (e) => {
        const href = downloadBtn.getAttribute('href');
        if (href === '#' || !href) {
            e.preventDefault();

            // Gently shake the button to indicate not ready
            const card = document.querySelector('.card');
            card.style.animation = 'shake 0.4s ease-in-out';

            // Update text temporarily
            const originalText = document.getElementById('statusText').innerText;
            const statusText = document.getElementById('statusText');

            statusText.innerText = "Check back soon!";
            statusText.style.color = "#007aff";

            setTimeout(() => {
                card.style.animation = '';
                statusText.innerText = originalText;
                statusText.style.color = "";
            }, 2000);
        }
    });
});

// Add css for shake animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-4px); }
        75% { transform: translateX(4px); }
    }
`;
document.head.appendChild(style);
