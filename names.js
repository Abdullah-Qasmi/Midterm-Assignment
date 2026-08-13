const ALLAH_NAMES = [
        { id: 1, arabic: "الرحمن", transliteration: "Ar-Rahman", english: "The Beneficent", urdu: "بڑی رحمت والا", desc: "The One who wills goodness and mercy for all His creatures." },
        { id: 2, arabic: "الرحيم", transliteration: "Ar-Raheem", english: "The Merciful", urdu: "نہایت مہربان", desc: "The One who acts with extreme kindness." },
        { id: 3, arabic: "الملك", transliteration: "Al-Malik", english: "The Eternal Lord", urdu: "حقیقی بادشاہ", desc: "The One who is the absolute ruler of the entire universe." },
        { id: 4, arabic: "القدوس", transliteration: "Al-Quddus", english: "The Most Sacred", urdu: "نہایت پاک", desc: "The One who is pure from any imperfection." },
        { id: 5, arabic: "السلام", transliteration: "As-Salam", english: "The Embodiment of Peace", urdu: "سلامتی والا", desc: "The One who is free from every imperfection and flaw." },
        { id: 6, arabic: "المؤمن", transliteration: "Al-Mu'min", english: "The Infuser of Faith", urdu: "امن و امان دینے والا", desc: "The One who witnessed for Himself that no one is God but Him." },
        { id: 7, arabic: "المهيمن", transliteration: "Al-Muhaymin", english: "The Preserver of Safety", urdu: "نگہبان", desc: "The One who witnesses the saying and deeds of His creatures." },
        { id: 8, arabic: "العزيز", transliteration: "Al-Aziz", english: "The Mighty One", urdu: "غالب اور زبردست", desc: "The Defeater who is not defeated." },
        { id: 9, arabic: "الجبار", transliteration: "Al-Jabbar", english: "The Omnipotent One", urdu: "زبردست", desc: "The One that nothing happens in His Dominion except that which He willed." },
        { id: 10, arabic: "المتكبر", transliteration: "Al-Mutakabbir", english: "The Dominant One", urdu: "بڑائی والا", desc: "The One who is clear from the attributes of the creatures." },
        { id: 11, arabic: "الخالق", transliteration: "Al-Khaliq", english: "The Creator", urdu: "پیدا کرنے والا", desc: "The One who brings everything from non-existence to existence." },
        { id: 12, arabic: "البارئ", transliteration: "Al-Bari", english: "The Evolver", urdu: "ٹھیک بنانے والا", desc: "The One who has the power to create the entities." },
        { id: 13, arabic: "المصور", transliteration: "Al-Musawwir", english: "The Flawless Shaper", urdu: "صورت گری کرنے والا", desc: "The One who forms His creatures in different pictures." },
        { id: 14, arabic: "الغفار", transliteration: "Al-Ghaffar", english: "The Constant Forgiver", urdu: "بہت بخشنے والا", desc: "The One who forgives the sins of His slaves time and time again." },
        { id: 15, arabic: "القهار", transliteration: "Al-Qahhar", english: "The All-Prevailing One", urdu: "سب پر غالب", desc: "The One who has the perfect power and is dominant over everything." },
        { id: 16, arabic: "الوهاب", transliteration: "Al-Wahhab", english: "The Supreme Bestower", urdu: "بہت دینے والا", desc: "The One who is Generous in giving plenty without any return." },
        { id: 17, arabic: "الرزاق", transliteration: "Ar-Razzaq", english: "The Provider", urdu: "رزق دینے والا", desc: "The One who provides sustenance to His creatures." },
        { id: 18, arabic: "الفتاح", transliteration: "Al-Fattah", english: "The Supreme Solver", urdu: "مشکل کشا", desc: "The One who opens for His slaves the closed worldly and religious matters." },
        { id: 19, arabic: "العليم", transliteration: "Al-Alim", english: "The All-Knowing", urdu: "سب کچھ جاننے والا", desc: "The Knowledgeable; The One nothing is absent from His knowledge." },
        { id: 20, arabic: "القابض", transliteration: "Al-Qabid", english: "The Withholder", urdu: "تنگی کرنے والا", desc: "The One who constricts the sustenance by His wisdom." },
        { id: 21, arabic: "الباسط", transliteration: "Al-Basit", english: "The Extender", urdu: "فراخی کرنے والا", desc: "The One who expands and widens sustenance with His generosity." },
        { id: 22, arabic: "الخافض", transliteration: "Al-Khafid", english: "The Reducer", urdu: "پست کرنے والا", desc: "The One who lowers whoever He willed by His destruction." },
        { id: 23, arabic: "الرافع", transliteration: "Ar-Rafi", english: "The Exalter", urdu: "بلند کرنے والا", desc: "The One who raises whoever He willed by His endowment." },
        { id: 24, arabic: "المعز", transliteration: "Al-Mu'izz", english: "The Bestower of Honor", urdu: "عزت دینے والا", desc: "The One who gives esteem to whoever He willed." },
        { id: 25, arabic: "المذل", transliteration: "Al-Mudhill", english: "The Humiliator", urdu: "ذلت دینے والا", desc: "The One who humiliates whoever He willed." },
        { id: 26, arabic: "السميع", transliteration: "As-Sami", english: "The All-Hearing", urdu: "سب کچھ سننے والا", desc: "The One who Hears all things without an ear, instrument or organ." },
        { id: 27, arabic: "البصير", transliteration: "Al-Basir", english: "The All-Seeing", urdu: "سب کچھ دیکھنے والا", desc: "The One who Sees all things that are objects for sight." },
        { id: 28, arabic: "الحكم", transliteration: "Al-Hakam", english: "The Impartial Judge", urdu: "فیصلہ کرنے والا", desc: "He is the Ruler and His judgment is His Word." },
        { id: 29, arabic: "العدل", transliteration: "Al-Adl", english: "The Utterly Just", urdu: "عدل کرنے والا", desc: "The One who is entitled to do what He does." },
        { id: 30, arabic: "اللطيف", transliteration: "Al-Latif", english: "The Subtle One", urdu: "مہربان", desc: "The One who is kind to His slaves and endows upon them." },
        { id: 31, arabic: "الخبير", transliteration: "Al-Khabir", english: "The All-Aware", urdu: "باخبر", desc: "The One who knows the internal reality of things." },
        { id: 32, arabic: "الحليم", transliteration: "Al-Halim", english: "The Most Forbearing", urdu: "بردبار", desc: "The One who delays the punishment for those who deserve it." },
        { id: 33, arabic: "العظيم", transliteration: "Al-Azim", english: "The Magnificent", urdu: "بڑی عظمت والا", desc: "The One deserving the attributes of Exaltation, Glory, and Purity." },
        { id: 34, arabic: "الغفور", transliteration: "Al-Ghafur", english: "The Forgiving", urdu: "معاف کرنے والا", desc: "The One who forgives a lot." },
        { id: 35, arabic: "الشكور", transliteration: "Ash-Shakur", english: "The Most Appreciative", urdu: "قدردان", desc: "The One who gives a lot of reward for a little obedience." },
        { id: 36, arabic: "العلي", transliteration: "Al-Ali", english: "The Highest", urdu: "سب سے بلند", desc: "The One who is above and clear of the attributes of creatures." },
        { id: 37, arabic: "الكبير", transliteration: "Al-Kabir", english: "The Greatest", urdu: "بہت بڑا", desc: "The One who is greater than everything in status." },
        { id: 38, arabic: "الحفيظ", transliteration: "Al-Hafiz", english: "The Preserver", urdu: "حفاظت کرنے والا", desc: "The One who protects whatever He willed to protect." },
        { id: 39, arabic: "المقيت", transliteration: "Al-Muqit", english: "The Sustainer", urdu: "روزی پہنچانے والا", desc: "The One who gives the creatures what strengthens them." },
        { id: 40, arabic: "الحسيب", transliteration: "Al-Hasib", english: "The Reckoner", urdu: "حساب لینے والا", desc: "The One who gives the satisfaction." },
        { id: 41, arabic: "الجليل", transliteration: "Al-Jalil", english: "The Majestic", urdu: "بزرگی والا", desc: "The One who is attributed with greatness of power and glory of status." },
        { id: 42, arabic: "الكريم", transliteration: "Al-Karim", english: "The Bountiful", urdu: "کرم کرنے والا", desc: "The One who is attributed with abundance of good and generosity." },
        { id: 43, arabic: "الرقيب", transliteration: "Ar-Raqib", english: "The Watchful", urdu: "نگہبان", desc: "The One that nothing is absent from Him." },
        { id: 44, arabic: "المجيب", transliteration: "Al-Mujib", english: "The Responsive", urdu: "دعا قبول کرنے والا", desc: "The One who answers the one in need if he asks Him." },
        { id: 45, arabic: "الواسع", transliteration: "Al-Wasi", english: "The All-Encompassing", urdu: "کشائش والا", desc: "The Knowledgeable; The One whose Knowledge encompasses everything." },
        { id: 46, arabic: "الحكيم", transliteration: "Al-Hakim", english: "The All-Wise", urdu: "حکمت والا", desc: "The One who is correct in His doings." },
        { id: 47, arabic: "الودود", transliteration: "Al-Wadud", english: "The Most Loving", urdu: "محبت کرنے والا", desc: "The One who loves His believing slaves." },
        { id: 48, arabic: "المجيد", transliteration: "Al-Majid", english: "The Glorious", urdu: "بزرگی والا", desc: "The One who is with perfect Power, High Status, Compassion, and Kindness." },
        { id: 49, arabic: "الباعث", transliteration: "Al-Ba'ith", english: "The Resurrector", urdu: "اٹھانے والا", desc: "The One who resurrects the creatures after death." },
        { id: 50, arabic: "الشهيد", transliteration: "Ash-Shahid", english: "The Witness", urdu: "گواہ", desc: "The One from whom nothing is absent." },
        { id: 51, arabic: "الحق", transliteration: "Al-Haqq", english: "The Absolute Truth", urdu: "برحق", desc: "The One who truly exists." },
        { id: 52, arabic: "الوكيل", transliteration: "Al-Wakil", english: "The Trustee", urdu: "کارساز", desc: "The One who gives the satisfaction and is relied upon." },
        { id: 53, arabic: "القوي", transliteration: "Al-Qawiyy", english: "The All-Strong", urdu: "طاقتور", desc: "The One with the complete Power." },
        { id: 54, arabic: "المتين", transliteration: "Al-Matin", english: "The Firm", urdu: "مضبوط", desc: "The One with extreme Power which is uninterrupted." },
        { id: 55, arabic: "الولي", transliteration: "Al-Waliyy", english: "The Protecting Associate", urdu: "دوست", desc: "The One who gives support and help." },
        { id: 56, arabic: "الحميد", transliteration: "Al-Hamid", english: "The Praiseworthy", urdu: "تعریف والا", desc: "The praised One who deserves to be praised." },
        { id: 57, arabic: "المحصي", transliteration: "Al-Muhsi", english: "The Counter", urdu: "گھیرنے والا", desc: "The One who the count of things are known to him." },
        { id: 58, arabic: "المبدئ", transliteration: "Al-Mubdi", english: "The Originator", urdu: "پہلی بار پیدا کرنے والا", desc: "The One who started the human." },
        { id: 59, arabic: "المعيد", transliteration: "Al-Mu'id", english: "The Restorer", urdu: "دوبارہ پیدا کرنے والا", desc: "The One who brings back the creatures after death." },
        { id: 60, arabic: "المحيي", transliteration: "Al-Muhyi", english: "The Giver of Life", urdu: "زندہ کرنے والا", desc: "The One who took out a living human from semen." },
        { id: 61, arabic: "المميت", transliteration: "Al-Mumit", english: "The Bringer of Death", urdu: "مارنے والا", desc: "The One who renders the living dead." },
        { id: 62, arabic: "الحي", transliteration: "Al-Hayy", english: "The Ever-Living", urdu: "زندہ", desc: "The One attributed with a life that is unlike our life." },
        { id: 63, arabic: "القيوم", transliteration: "Al-Qayyum", english: "The Self-Subsisting", urdu: "قائم رہنے والا", desc: "The One who remains and does not end." },
        { id: 64, arabic: "الواجد", transliteration: "Al-Wajid", english: "The Perceiver", urdu: "پانے والا", desc: "The One who does not lack anything." },
        { id: 65, arabic: "الماجد", transliteration: "Al-Majid", english: "The Illustrious", urdu: "بزرگی والا", desc: "The One who is with perfect Power, High Status." },
        { id: 66, arabic: "الواحد", transliteration: "Al-Wahid", english: "The One", urdu: "اکیلا", desc: "The One without a partner." },
        { id: 67, arabic: "الاحد", transliteration: "Al-Ahad", english: "The Unique", urdu: "ایک", desc: "The Sole One." },
        { id: 68, arabic: "الصمد", transliteration: "As-Samad", english: "The Eternal", urdu: "بے نیاز", desc: "The Master who is relied upon in matters." },
        { id: 69, arabic: "القادر", transliteration: "Al-Qadir", english: "The Capable", urdu: "قدرت والا", desc: "The One attributed with Power." },
        { id: 70, arabic: "المقتدر", transliteration: "Al-Muqtadir", english: "The Omnipotent", urdu: "اقتدار والا", desc: "The One with the perfect Power that nothing is difficult for Him." },
        { id: 71, arabic: "المقدم", transliteration: "Al-Muqaddim", english: "The Expediter", urdu: "آگے کرنے والا", desc: "The One who puts things in their right places." },
        { id: 72, arabic: "المؤخر", transliteration: "Al-Mu'akhkhir", english: "The Delayer", urdu: "پیچھے کرنے والا", desc: "The One who delays things." },
        { id: 73, arabic: "الأول", transliteration: "Al-Awwal", english: "The First", urdu: "سب سے پہلا", desc: "The One whose Existence is without a beginning." },
        { id: 74, arabic: "الأخر", transliteration: "Al-Akhir", english: "The Last", urdu: "سب سے آخری", desc: "The One whose Existence is without an end." },
        { id: 75, arabic: "الظاهر", transliteration: "Az-Zahir", english: "The Manifest", urdu: "ظاہر", desc: "The One that nothing is above Him." },
        { id: 76, arabic: "الباطن", transliteration: "Al-Batin", english: "The Hidden", urdu: "پوشیدہ", desc: "The One that nothing is under Him." },
        { id: 77, arabic: "الوالي", transliteration: "Al-Wali", english: "The Governor", urdu: "مالک", desc: "The One who owns things and manages them." },
        { id: 78, arabic: "المتعالي", transliteration: "Al-Muta'ali", english: "The Most Exalted", urdu: "سب سے بلند", desc: "The One who is clear from the attributes of the creatures." },
        { id: 79, arabic: "البر", transliteration: "Al-Barr", english: "The Source of All Goodness", urdu: "احسان کرنے والا", desc: "The One who is kind to His creatures." },
        { id: 80, arabic: "التواب", transliteration: "At-Tawwab", english: "The Ever-Relenting", urdu: "توبہ قبول کرنے والا", desc: "The One who grants repentance to whoever He willed." },
        { id: 81, arabic: "المنتقم", transliteration: "Al-Muntaqim", english: "The Avenger", urdu: "بدلہ لینے والا", desc: "The One who victoriously prevails over His enemies." },
        { id: 82, arabic: "العفو", transliteration: "Al-Afuww", english: "The Pardoner", urdu: "معاف کرنے والا", desc: "The One with wide forgiveness." },
        { id: 83, arabic: "الرؤوف", transliteration: "Ar-Ra'uf", english: "The Compassionate", urdu: "نہایت مہربان", desc: "The One with extreme Mercy." },
        { id: 84, arabic: "مالك الملك", transliteration: "Malik-ul-Mulk", english: "The Owner of Sovereignty", urdu: "کائنات کا مالک", desc: "The One who controls the Dominion." },
        { id: 85, arabic: "ذو الجلال والإكرام", transliteration: "Dhul-Jalal wal-Ikram", english: "The Lord of Majesty and Generosity", urdu: "جلال اور کرم والا", desc: "The One who deserves to be Exalted." },
        { id: 86, arabic: "المقسط", transliteration: "Al-Muqsit", english: "The Equitable", urdu: "انصاف کرنے والا", desc: "The One who is Just in His judgment." },
        { id: 87, arabic: "الجامع", transliteration: "Al-Jami", english: "The Gatherer", urdu: "اکٹھا کرنے والا", desc: "The One who gathers the creatures on a day there is no doubt about." },
        { id: 88, arabic: "الغني", transliteration: "Al-Ghani", english: "The Self-Sufficient", urdu: "بے نیاز", desc: "The One who does not need the creatures." },
        { id: 89, arabic: "المغني", transliteration: "Al-Mughni", english: "The Enricher", urdu: "مالدار کرنے والا", desc: "The One who satisfies the necessities of the creatures." },
        { id: 90, arabic: "المانع", transliteration: "Al-Mani", english: "The Preventer", urdu: "روکنے والا", desc: "The One who prevents whoever He willed from what He willed." },
        { id: 91, arabic: "الضار", transliteration: "Ad-Darr", english: "The Distressor", urdu: "نقصان پہنچانے والا", desc: "The One who makes harm reach whoever He willed." },
        { id: 92, arabic: "النافع", transliteration: "An-Nafi", english: "The Propitator", urdu: "نفع پہنچانے والا", desc: "The One who makes good reach whoever He willed." },
        { id: 93, arabic: "النور", transliteration: "An-Nur", english: "The Light", urdu: "نور", desc: "The One who guides." },
        { id: 94, arabic: "الهادي", transliteration: "Al-Hadi", english: "The Guide", urdu: "ہدایت دینے والا", desc: "The One who with His Guidance His believers were guided." },
        { id: 95, arabic: "البديع", transliteration: "Al-Badi", english: "The Incomparable", urdu: "انوکھا پیدا کرنے والا", desc: "The One who created the creatures and designed them without any prior example." },
        { id: 96, arabic: "الباقي", transliteration: "Al-Baqi", english: "The Everlasting", urdu: "ہمیشہ رہنے والا", desc: "The One that state of non-existence is impossible for Him." },
        { id: 97, arabic: "الوارث", transliteration: "Al-Warith", english: "The Supreme Inheritor", urdu: "سب کا وارث", desc: "The One whose Existence remains after all His creatures perish." },
        { id: 98, arabic: "الرشيد", transliteration: "Ar-Rashid", english: "The Guide to the Right Path", urdu: "نیک راہ دکھانے والا", desc: "The One who guides the creatures to what is beneficial for them." },
        { id: 99, arabic: "الصبور", transliteration: "As-Sabur", english: "The Patient", urdu: "صبر کرنے والا", desc: "The One who does not quickly punish the sinners." }
    ];

    const namesGrid = document.getElementById('namesGrid');
    const counterDisplay = document.getElementById('counter');
    const desktopSearch = document.getElementById('desktopSearch');
    const mobileSearch = document.getElementById('mobileSearch');
    const detailsModal = document.getElementById('detailsModal');

    function renderNames(filteredNames) {
        namesGrid.innerHTML = '';
        filteredNames.forEach(name => {
            const card = document.createElement('div');
            card.className = "bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover:shadow-lg hover:border-primary-container transition-all cursor-pointer group flex flex-col justify-between h-48 relative overflow-hidden";
            card.onclick = () => openModal(name);
            card.innerHTML = `
                <div class="flex justify-between items-start relative z-10">
                    <span class="text-xs font-bold text-primary-container bg-primary-fixed-dim/20 px-2 py-1 rounded-md">#${String(name.id).padStart(2, '0')}</span>
                    <button class="text-outline hover:text-error transition-colors">
                        <span class="material-symbols-outlined text-xl">favorite</span>
                    </button>
                </div>
                <div class="text-center relative z-10">
                    <h3 class="arabic-text text-3xl text-on-surface mb-1 group-hover:scale-110 transition-transform">${name.arabic}</h3>
                    <p class="font-bold text-on-surface text-sm">${name.transliteration}</p>
                </div>
                <div class="text-center relative z-10">
                    <p class="text-xs text-outline font-medium line-clamp-1">${name.english}</p>
                </div>
                <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span class="arabic-text text-8xl">${name.arabic}</span>
                </div>
            `;
            namesGrid.appendChild(card);
        });
        counterDisplay.textContent = `Showing ${filteredNames.length} Names`;
    }

    function filterNames(query) {
        const lowerQuery = query.toLowerCase();
        const filtered = ALLAH_NAMES.filter(name => 
            name.transliteration.toLowerCase().includes(lowerQuery) ||
            name.english.toLowerCase().includes(lowerQuery) ||
            name.urdu.toLowerCase().includes(lowerQuery) ||
            name.arabic.includes(query)
        );
        renderNames(filtered);
    }

    function openModal(name) {
        document.getElementById('modalNumber').textContent = `#${String(name.id).padStart(2, '0')}`;
        document.getElementById('modalTransliteration').textContent = name.transliteration;
        document.getElementById('modalArabic').textContent = name.arabic;
        document.getElementById('modalEnglish').textContent = name.english;
        document.getElementById('modalUrdu').textContent = name.urdu;
        document.getElementById('modalDescription').textContent = name.desc;
        detailsModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        detailsModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Event Listeners
    desktopSearch.addEventListener('input', (e) => {
        filterNames(e.target.value);
        mobileSearch.value = e.target.value;
    });

    mobileSearch.addEventListener('input', (e) => {
        filterNames(e.target.value);
        desktopSearch.value = e.target.value;
    });

    detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) closeModal();
    });

    // Initial Render
    renderNames(ALLAH_NAMES);