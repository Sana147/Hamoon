        function createMagicDust() {
            const magicDustContainer = document.getElementById('magic-dust');
            const colors = ['#FFD700', '#004d00', '#FF8C00']; // Golden, Green, Orange colors for particles

            // Create a particle every 50ms
            setInterval(() => {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.left = `${Math.random() * 100}%`; // Random horizontal position
                particle.style.top = `${Math.random() * 100}%`;  // Random vertical position
                particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration for each particle

                // Random size for particles
                const size = Math.random() * 6 + 4; // size between 4px and 10px
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                magicDustContainer.appendChild(particle);

                // Remove particle after animation ends (5 seconds)
                setTimeout(() => {
                    particle.remove();
                }, 5000); // Remove after 5 seconds
            }, 50); // Create new particle every 50ms
        }

        // Initialize the magic dust effect
        createMagicDust();

