document.addEventListener("DOMContentLoaded", () => {

    let count = 0;
    let target = 33;
    let session = 0;

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

    const circumference = 2 * Math.PI * 45;

    progressCircle.style.strokeDasharray =
        circumference;

    /* Load saved data */

    const savedCount =
        localStorage.getItem("tasbih_count");

    const savedTarget =
        localStorage.getItem("tasbih_target");

    const savedSession =
        localStorage.getItem("tasbih_session");

    const savedPhrase =
        localStorage.getItem("tasbih_phrase");

    if (savedCount !== null) {
        count = parseInt(savedCount);
    }

    if (savedTarget !== null) {
        target = parseInt(savedTarget);
    }

    if (savedSession !== null) {
        session = parseInt(savedSession);
    }

    if (savedPhrase) {
        phraseSelect.value = savedPhrase;
    }

    updateArabic();
    updateTargetButtons();
    updateUI();

    /* Update UI */

    function updateUI() {

        countDisplay.textContent = count;
        sessionCount.textContent = session;

        const percent =
            Math.min(count / target, 1);

        const offset =
            circumference -
            percent * circumference;

        progressCircle.style.strokeDashoffset =
            offset;
    }

    /* Save */

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

        localStorage.setItem(
            "tasbih_phrase",
            phraseSelect.value
        );
    }

    /* Arabic */

    function updateArabic() {

        const option =
            phraseSelect.options[
                phraseSelect.selectedIndex
            ];

        arabicDisplay.textContent =
            option.dataset.ar;
    }

    /* Target buttons */

    function updateTargetButtons() {

        targetBtns.forEach(button => {

            const buttonTarget =
                parseInt(button.dataset.target);

            button.classList.toggle(
                "active",
                buttonTarget === target
            );
        });
    }

    /* Count */

    countBtn.addEventListener("click", () => {

        if (count >= target) {
            return;
        }

        count++;

        if (navigator.vibrate) {
            navigator.vibrate(10);
        }

        if (count === target) {

            session++;

            if (navigator.vibrate) {
                navigator.vibrate([
                    50,
                    50,
                    50
                ]);
            }

            progressCircle.style.stroke =
                "#003820";

            setTimeout(() => {
                progressCircle.style.stroke =
                    "";
            }, 1000);
        }

        updateUI();
        saveState();
    });

    /* Decrease */

    decrementBtn.addEventListener("click", () => {

        if (count > 0) {
            count--;

            updateUI();
            saveState();
        }
    });

    /* Reset */

    resetBtn.addEventListener("click", () => {

        count = 0;

        updateUI();
        saveState();
    });

    /* Reset everything */

    resetAllBtn.addEventListener("click", () => {

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
    });

    /* Target */

    targetBtns.forEach(button => {

        button.addEventListener("click", () => {

            target =
                parseInt(button.dataset.target);

            count = Math.min(
                count,
                target
            );

            updateTargetButtons();
            updateUI();
            saveState();
        });
    });

    /* Phrase */

    phraseSelect.addEventListener(
        "change",
        () => {

            updateArabic();

            count = 0;

            updateUI();
            saveState();
        }
    );

});
