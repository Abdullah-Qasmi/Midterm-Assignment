// =====================================================
// ILM-E-QURAN - THEME SYSTEM
// =====================================================

const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");


// -----------------------------------------------------
// GET SAVED THEME
// -----------------------------------------------------

const savedTheme = localStorage.getItem("theme");


// If user previously selected dark mode
if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}


// -----------------------------------------------------
// UPDATE ICON
// -----------------------------------------------------

function updateThemeIcons() {

    const isDark =
        document.documentElement.classList.contains("dark");


    // Desktop icon
    if (themeToggle) {

        const icon =
            themeToggle.querySelector(
                ".material-symbols-outlined"
            );

        if (icon) {
            icon.textContent =
                isDark ? "light_mode" : "dark_mode";
        }
    }


    // Mobile icon
    if (themeToggleMobile) {

        const icon =
            themeToggleMobile.querySelector(
                ".material-symbols-outlined"
            );

        if (icon) {
            icon.textContent =
                isDark ? "light_mode" : "dark_mode";
        }
    }
}


// -----------------------------------------------------
// TOGGLE DARK/LIGHT MODE
// -----------------------------------------------------

function toggleTheme() {

    const html =
        document.documentElement;


    html.classList.toggle("dark");


    const isDark =
        html.classList.contains("dark");


    // Save preference
    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );


    updateThemeIcons();
}


// -----------------------------------------------------
// DESKTOP TOGGLE
// -----------------------------------------------------

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );
}


// -----------------------------------------------------
// MOBILE TOGGLE
// -----------------------------------------------------

if (themeToggleMobile) {

    themeToggleMobile.addEventListener(
        "click",
        toggleTheme
    );
}


// -----------------------------------------------------
// INITIAL ICON
// -----------------------------------------------------

updateThemeIcons();


// =====================================================
// MOBILE MENU
// =====================================================

const mobileMenuButton =
    document.querySelector(
        "nav .md\\:hidden button:last-child"
    );


if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            let mobileMenu =
                document.getElementById("mobile-menu");


            // Close menu if already open
            if (mobileMenu) {

                mobileMenu.remove();

                return;
            }


            // Create menu
            mobileMenu =
                document.createElement("div");


            mobileMenu.id =
                "mobile-menu";


            mobileMenu.className =
                "md:hidden absolute top-full left-0 w-full bg-background border-b border-surface-variant/30 shadow-lg p-5";


            mobileMenu.innerHTML = `

                <div class="flex flex-col gap-2">

                    <a href="index.html"
                       class="px-4 py-3 rounded-lg text-primary font-semibold hover:bg-surface-container-low">
                        Home
                    </a>

                    <a href="99-names.html"
                       class="px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low">
                        99 Names
                    </a>

                    <a href="40-hadith.html"
                       class="px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low">
                        40 Hadith
                    </a>

                    <a href="40-duas.html"
                       class="px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low">
                        40 Duas
                    </a>

                    <a href="about.html"
                       class="px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low">
                        About
                    </a>

                    <a href="contact.html"
                       class="px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low">
                        Contact
                    </a>

                </div>

            `;


            document
                .querySelector("nav")
                .appendChild(mobileMenu);

        }
    );
}


// =====================================================
// CTRL + K SEARCH
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();


            const search =
                document.getElementById("globalSearch");


            if (search) {
                search.focus();
            }
        }

    }
);


// =====================================================
// SEARCH VALIDATION
// =====================================================

document
    .querySelectorAll('form[action="search.html"]')
    .forEach(function (form) {

        form.addEventListener(
            "submit",
            function (event) {

                const input =
                    form.querySelector(
                        'input[name="q"]'
                    );


                if (!input) {
                    return;
                }


                if (input.value.trim() === "") {

                    event.preventDefault();

                    input.focus();
                }

            }
        );

    });


// =====================================================
// CONSOLE MESSAGE
// =====================================================

console.log(
    "Ilm-e-Quran: JavaScript loaded successfully."
);