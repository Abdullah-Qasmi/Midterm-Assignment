// Dark Mode Logic
        const html = document.documentElement;
        const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
        
        function setTheme(theme) {
            if (theme === 'dark') {
                html.classList.add('dark');
                html.classList.remove('light');
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('dark');
                html.classList.add('light');
                localStorage.setItem('theme', 'light');
            }
        }

        // Init theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);

        themeToggles.forEach(toggle => {
            if(toggle) {
                toggle.addEventListener('click', () => {
                    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
                    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
                });
            }
        });

        // Search Interaction focus animation
        const searchInput = document.getElementById('globalSearch');
        if(searchInput) {
            searchInput.addEventListener('focus', function() {
                this.parentElement.classList.add('scale-105');
                this.parentElement.classList.replace('transition-group', 'transition-all duration-300 ease-out');
            });
            searchInput.addEventListener('blur', function() {
                this.parentElement.classList.remove('scale-105');
            });
        }