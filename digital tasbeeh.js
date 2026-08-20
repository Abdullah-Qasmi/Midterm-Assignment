document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       TASBIH VARIABLES
    ===================================================== */

    let count = 0;
    let target = 33;
    let session = 0;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const countDisplay =
        document.getElementById("counter-display");

    const countBtn =
        document.getElementById("count-btn");

    const resetBtn =
        document.getElementById("reset-btn");

    const decrementBtn =
        document.getElementById("decrement-btn");

    const resetAllBtn =
        document.getElementById("reset-all-btn");

    const targetBtns =
        document.querySelectorAll(".target-btn");

    const progressCircle =
        document.getElementById("progress-circle");

    const sessionCount =
        document.getElementById("session-count");

    const phraseSelect =
        document.getElementById("phrase-select");

    const arabicDisplay =
        document.getElementById("arabic-display");


    /* =====================================================
       PROGRESS CIRCLE
    ===================================================== */

    const circumference =
        2 * Math.PI * 45;

    if (progressCircle) {

        progressCircle.style.strokeDasharray =
            circumference;

        progressCircle.style.strokeDashoffset =
            circumference;
    }


    /* =====================================================
       LOAD SAVED DATA
    ===================================================== */

    const savedCount =
        localStorage.getItem("tasbih_count");

    const savedTarget =
        localStorage.getItem("tasbih_target");

    const savedSession =
        localStorage.getItem("tasbih_session");

    const savedPhrase =
        localStorage.getItem("tasbih_phrase");


    if (savedCount !== null) {

        count =
            parseInt(savedCount);

    }


    if (savedTarget !== null) {

        target =
            parseInt(savedTarget);

    }


    if (savedSession !== null) {

        session =
            parseInt(savedSession);

    }


    if (savedPhrase && phraseSelect) {

        phraseSelect.value =
            savedPhrase;

    }


    /* =====================================================
       INITIAL UI
    ===================================================== */

    updateArabic();
    updateTargetButtons();
    updateUI();


    /* =====================================================
       UPDATE UI
    ===================================================== */

    function updateUI() {

        if (countDisplay) {

            countDisplay.textContent =
                count;

        }


        if (sessionCount) {

            sessionCount.textContent =
                session;

        }


        const percent =
            Math.min(
                count / target,
                1
            );


        const offset =
            circumference -
            percent * circumference;


        if (progressCircle) {

            progressCircle.style.strokeDashoffset =
                offset;

        }

    }


    /* =====================================================
       SAVE STATE
    ===================================================== */

    function saveState() {

        localStorage.setItem(
            "tasbih_count",
            count
        );

        localStorage.setItem(
            "tasbih_target",
            target
        );

        localStorage.setItem(
            "tasbih_session",
            session
        );


        if (phraseSelect) {

            localStorage.setItem(
                "tasbih_phrase",
                phraseSelect.value
            );

        }

    }


    /* =====================================================
       UPDATE ARABIC
    ===================================================== */

    function updateArabic() {

        if (!phraseSelect || !arabicDisplay) {
            return;
        }


        const option =
            phraseSelect.options[
                phraseSelect.selectedIndex
            ];


        if (option) {

            arabicDisplay.textContent =
                option.dataset.ar || "";

        }

    }


    /* =====================================================
       UPDATE TARGET BUTTONS
    ===================================================== */

    function updateTargetButtons() {

        targetBtns.forEach(button => {

            const buttonTarget =
                parseInt(
                    button.dataset.target
                );


            button.classList.toggle(
                "active",
                buttonTarget === target
            );

        });

    }


    /* =====================================================
       COUNT BUTTON
    ===================================================== */

    if (countBtn) {

        countBtn.addEventListener(
            "click",
            () => {

                /* Don't go above target */

                if (count >= target) {
                    return;
                }


                count++;


                /* Mobile vibration */

                if (navigator.vibrate) {

                    navigator.vibrate(10);

                }


                /* Target completed */

                if (count === target) {

                    session++;


                    if (navigator.vibrate) {

                        navigator.vibrate([
                            50,
                            50,
                            50
                        ]);

                    }


                    /* Completed progress color */

                    if (progressCircle) {

                        progressCircle.style.stroke =
                            "#003820";


                        setTimeout(() => {

                            progressCircle.style.stroke =
                                "";

                        }, 1000);

                    }

                }


                updateUI();
                saveState();

            }
        );

    }


    /* =====================================================
       DECREASE BUTTON
    ===================================================== */

    if (decrementBtn) {

        decrementBtn.addEventListener(
            "click",
            () => {

                if (count > 0) {

                    count--;

                    updateUI();
                    saveState();

                }

            }
        );

    }


    /* =====================================================
       RESET BUTTON
    ===================================================== */

    if (resetBtn) {

        resetBtn.addEventListener(
            "click",
            () => {

                count = 0;

                updateUI();
                saveState();

            }
        );

    }


    /* =====================================================
       RESET EVERYTHING
    ===================================================== */

    if (resetAllBtn) {

        resetAllBtn.addEventListener(
            "click",
            () => {

                const confirmed =
                    confirm(
                        "Are you sure you want to reset everything including sessions?"
                    );


                if (!confirmed) {
                    return;
                }


                count = 0;
                session = 0;


                updateUI();
                saveState();

            }
        );

    }


    /* =====================================================
       TARGET BUTTONS
    ===================================================== */

    targetBtns.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                target =
                    parseInt(
                        button.dataset.target
                    );


                /*
                 * If current count is greater
                 * than new target, reduce it.
                 */

                count =
                    Math.min(
                        count,
                        target
                    );


                updateTargetButtons();
                updateUI();
                saveState();

            }
        );

    });


    /* =====================================================
       PHRASE SELECT
    ===================================================== */

    if (phraseSelect) {

        phraseSelect.addEventListener(
            "change",
            () => {

                updateArabic();


                /*
                 * Changing Dhikr starts
                 * a fresh count.
                 */

                count = 0;


                updateUI();
                saveState();

            }
        );

    }


    /* =====================================================
       DARK MODE
    ===================================================== */

    const themeToggle =
        document.getElementById("theme-toggle");

    const themeIcon =
        document.getElementById("theme-icon");


    /*
     * Load saved theme
     */

    const savedTheme =
        localStorage.getItem("tasbih-theme");


    if (
        savedTheme === "dark" &&
        themeToggle &&
        themeIcon
    ) {

        document.body.classList.add(
            "dark-mode"
        );

        themeIcon.textContent =
            "light_mode";

    }


    /*
     * Dark mode button
     */

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "dark-mode"
                );


                const isDark =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                if (isDark) {

                    /*
                     * Dark mode
                     */

                    if (themeIcon) {

                        themeIcon.textContent =
                            "light_mode";

                    }


                    localStorage.setItem(
                        "tasbih-theme",
                        "dark"
                    );


                } else {

                    /*
                     * Light mode
                     */

                    if (themeIcon) {

                        themeIcon.textContent =
                            "dark_mode";

                    }


                    localStorage.setItem(
                        "tasbih-theme",
                        "light"
                    );

                }

            }
        );

    }


    /* =====================================================
       FINISHED
    ===================================================== */

});