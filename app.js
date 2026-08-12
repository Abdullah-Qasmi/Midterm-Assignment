document.addEventListener("DOMContentLoaded", () => {

    /* ================= YEAR ================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ================= DARK MODE ================= */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("ilmTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const isDark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "ilmTheme",
                isDark ? "dark" : "light"
            );

            themeToggle.textContent =
                isDark ? "☀️" : "🌙";

        });

    }


    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }


    /* ================= FAVORITES ================= */

    function getFavorites() {

        return JSON.parse(
            localStorage.getItem("ilmFavorites") || "[]"
        );

    }


    function saveFavorites(data) {

        localStorage.setItem(
            "ilmFavorites",
            JSON.stringify(data)
        );

    }


    window.toggleFavorite = function(type, id) {

        const key = `${type}-${id}`;

        let favorites = getFavorites();

        if (favorites.includes(key)) {

            favorites =
                favorites.filter(item => item !== key);

        } else {

            favorites.push(key);

        }

        saveFavorites(favorites);

        updateFavoriteButtons();

    };


    function isFavorite(type, id) {

        const favorites = getFavorites();

        return favorites.includes(`${type}-${id}`);

    }


    function updateFavoriteButtons() {

        document.querySelectorAll(
            "[data-favorite]"
        ).forEach(button => {

            const type =
                button.dataset.type;

            const id =
                Number(button.dataset.id);

            button.classList.toggle(
                "liked",
                isFavorite(type, id)
            );

            button.textContent =
                isFavorite(type, id)
                    ? "♥"
                    : "♡";

        });

    }


    /* ================= MODAL ================= */

    const modal =
        document.getElementById("contentModal");

    const modalContent =
        document.getElementById("modalContent");

    const modalClose =
        document.getElementById("modalClose");


    window.openModal = function(html) {

        if (!modal || !modalContent) return;

        modalContent.innerHTML = html;

        modal.classList.add("open");

        document.body.style.overflow = "hidden";

    };


    function closeModal() {

        if (!modal) return;

        modal.classList.remove("open");

        document.body.style.overflow = "";

    }


    if (modalClose) {
        modalClose.addEventListener(
            "click",
            closeModal
        );
    }


    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (event.target === modal) {
                    closeModal();
                }

            }
        );

    }


    /* ================= NAMES ================= */

    const namesContainer =
        document.getElementById("namesContainer");

    const nameSearch =
        document.getElementById("nameSearch");

    const resultCount =
        document.getElementById("resultCount");


    function renderNames(data) {

        if (!namesContainer) return;

        namesContainer.innerHTML = "";

        data.forEach(name => {

            const card =
                document.createElement("article");

            card.className = "content-card";

            card.innerHTML = `

                <div class="card-top">

                    <span class="number">
                        ${String(name.id).padStart(2, "0")}
                    </span>

                    <button
                        class="favorite-btn"
                        data-favorite
                        data-type="name"
                        data-id="${name.id}"
                        onclick="toggleFavorite('name', ${name.id})"
                    >
                        ${isFavorite("name", name.id) ? "♥" : "♡"}
                    </button>

                </div>

                <div class="arabic-name">
                    ${name.arabic}
                </div>

                <h3>
                    ${name.transliteration}
                </h3>

                <p class="english-meaning">
                    ${name.english}
                </p>

                <p class="urdu-text">
                    ${name.urdu}
                </p>

                <button
                    class="read-more"
                    onclick="openName(${name.id})"
                >
                    Read More →
                </button>

            `;

            namesContainer.appendChild(card);

        });

        if (resultCount) {

            resultCount.textContent =
                `${data.length} Names`;

        }

        updateFavoriteButtons();

    }


    window.openName = function(id) {

        const name =
            namesOfAllah.find(item => item.id === id);

        if (!name) return;

        openModal(`

            <div class="modal-number">
                ${String(name.id).padStart(2, "0")}
            </div>

            <div class="modal-arabic">
                ${name.arabic}
            </div>

            <h2>
                ${name.transliteration}
            </h2>

            <h3>
                ${name.english}
            </h3>

            <p class="urdu-modal">
                ${name.urdu}
            </p>

            <div class="modal-divider"></div>

            <p>
                ${name.explanation}
            </p>

            <button
                class="btn btn-primary modal-favorite"
                onclick="toggleFavorite('name', ${name.id})"
            >
                ${isFavorite("name", name.id)
                    ? "♥ Remove Favorite"
                    : "♡ Add Favorite"}
            </button>

        `);

    };


    if (namesContainer && typeof namesOfAllah !== "undefined") {

        renderNames(namesOfAllah);

        if (nameSearch) {

            nameSearch.addEventListener(
                "input",
                event => {

                    const query =
                        event.target.value
                            .toLowerCase()
                            .trim();

                    const filtered =
                        namesOfAllah.filter(name =>

                            name.arabic.includes(query) ||

                            name.transliteration
                                .toLowerCase()
                                .includes(query) ||

                            name.english
                                .toLowerCase()
                                .includes(query) ||

                            name.urdu.includes(query)

                        );

                    renderNames(filtered);

                }
            );

        }

    }


    /* ================= HADITH ================= */

    const hadithContainer =
        document.getElementById("hadithContainer");

    const hadithSearch =
        document.getElementById("hadithSearch");

    const hadithCount =
        document.getElementById("hadithCount");


    function renderHadith(data) {

        if (!hadithContainer) return;

        hadithContainer.innerHTML = "";

        data.forEach(hadith => {

            const card =
                document.createElement("article");

            card.className =
                "content-card hadith-card";

            card.innerHTML = `

                <div class="card-top">

                    <span class="number">
                        Hadith ${String(hadith.id).padStart(2, "0")}
                    </span>

                    <button
                        class="favorite-btn"
                        data-favorite
                        data-type="hadith"
                        data-id="${hadith.id}"
                        onclick="toggleFavorite('hadith', ${hadith.id})"
                    >
                        ${isFavorite("hadith", hadith.id) ? "♥" : "♡"}
                    </button>

                </div>

                <h3>
                    ${hadith.title}
                </h3>

                <div class="arabic-text">
                    ${hadith.arabic}
                </div>

                <p class="urdu-text">
                    ${hadith.urdu}
                </p>

                <p>
                    ${hadith.english}
                </p>

                <small>
                    ${hadith.reference}
                </small>

                <button
                    class="read-more"
                    onclick="openHadith(${hadith.id})"
                >
                    Read More →
                </button>

            `;

            hadithContainer.appendChild(card);

        });

        if (hadithCount) {
            hadithCount.textContent =
                `${data.length} Hadith`;
        }

        updateFavoriteButtons();

    }


    window.openHadith = function(id) {

        const hadith =
            hadithData.find(item => item.id === id);

        if (!hadith) return;

        openModal(`

            <span class="section-label">
                Hadith ${String(hadith.id).padStart(2, "0")}
            </span>

            <h2>
                ${hadith.title}
            </h2>

            <div class="modal-arabic">
                ${hadith.arabic}
            </div>

            <p class="urdu-modal">
                ${hadith.urdu}
            </p>

            <p>
                ${hadith.english}
            </p>

            <div class="reference-box">
                <strong>Narrator</strong>
                <br>
                ${hadith.narrator}
                <br><br>
                <strong>Reference</strong>
                <br>
                ${hadith.reference}
            </div>

            <button
                class="btn btn-primary modal-favorite"
                onclick="toggleFavorite('hadith', ${hadith.id})"
            >
                ${isFavorite("hadith", hadith.id)
                    ? "♥ Remove Favorite"
                    : "♡ Add Favorite"}
            </button>

        `);

    };


    if (
        hadithContainer &&
        typeof hadithData !== "undefined"
    ) {

        renderHadith(hadithData);

        if (hadithSearch) {

            hadithSearch.addEventListener(
                "input",
                event => {

                    const query =
                        event.target.value
                            .toLowerCase()
                            .trim();

                    const filtered =
                        hadithData.filter(hadith =>

                            hadith.title
                                .toLowerCase()
                                .includes(query) ||

                            hadith.arabic
                                .includes(query) ||

                            hadith.english
                                .toLowerCase()
                                .includes(query) ||

                            hadith.urdu
                                .includes(query)

                        );

                    renderHadith(filtered);

                }
            );

        }

    }


    /* ================= DUAS ================= */

    const duasContainer =
        document.getElementById("duasContainer");

    const duaSearch =
        document.getElementById("duaSearch");

    const duaCount =
        document.getElementById("duaCount");


    function renderDuas(data) {

        if (!duasContainer) return;

        duasContainer.innerHTML = "";

        data.forEach(dua => {

            const card =
                document.createElement("article");

            card.className =
                "content-card dua-card";

            card.innerHTML = `

                <div class="card-top">

                    <span class="number">
                        Dua ${String(dua.id).padStart(2, "0")}
                    </span>

                    <button
                        class="favorite-btn"
                        data-favorite
                        data-type="dua"
                        data-id="${dua.id}"
                        onclick="toggleFavorite('dua', ${dua.id})"
                    >
                        ${isFavorite("dua", dua.id) ? "♥" : "♡"}
                    </button>

                </div>

                <span class="category">
                    ${dua.category}
                </span>

                <h3>
                    ${dua.title}
                </h3>

                <div class="arabic-text">
                    ${dua.arabic}
                </div>

                <p class="transliteration">
                    ${dua.transliteration}
                </p>

                <p class="urdu-text">
                    ${dua.urdu}
                </p>

                <small>
                    ${dua.reference}
                </small>

                <button
                    class="read-more"
                    onclick="openDua(${dua.id})"
                >
                    Read More →
                </button>

            `;

            duasContainer.appendChild(card);

        });

        if (duaCount) {
            duaCount.textContent =
                `${data.length} Duas`;
        }

        updateFavoriteButtons();

    }


    window.openDua = function(id) {

        const dua =
            duasData.find(item => item.id === id);

        if (!dua) return;

        openModal(`

            <span class="category">
                ${dua.category}
            </span>

            <h2>
                ${dua.title}
            </h2>

            <div class="modal-arabic">
                ${dua.arabic}
            </div>

            <p class="transliteration">
                ${dua.transliteration}
            </p>

            <p class="urdu-modal">
                ${dua.urdu}
            </p>

            <p>
                ${dua.english}
            </p>

            <div class="reference-box">
                ${dua.reference}
            </div>

            <button
                class="btn btn-primary modal-favorite"
                onclick="toggleFavorite('dua', ${dua.id})"
            >
                ${isFavorite("dua", dua.id)
                    ? "♥ Remove Favorite"
                    : "♡ Add Favorite"}
            </button>

        `);

    };


    if (
        duasContainer &&
        typeof duasData !== "undefined"
    ) {

        renderDuas(duasData);

        if (duaSearch) {

            duaSearch.addEventListener(
                "input",
                event => {

                    const query =
                        event.target.value
                            .toLowerCase()
                            .trim();

                    const filtered =
                        duasData.filter(dua =>

                            dua.title
                                .toLowerCase()
                                .includes(query) ||

                            dua.category
                                .toLowerCase()
                                .includes(query) ||

                            dua.arabic
                                .includes(query) ||

                            dua.english
                                .toLowerCase()
                                .includes(query) ||

                            dua.urdu
                                .includes(query)

                        );

                    renderDuas(filtered);

                }
            );

        }

    }

});