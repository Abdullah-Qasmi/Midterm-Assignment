// =====================================================
// 40 HADITH - ILM-E-QURAN
// WORKING FAVORITES + SEARCH + MODAL + AUDIO
// =====================================================


// =====================================================
// HADITH DATA
// =====================================================

const hadithData = [

    {
        number: 1,
        arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
        english: "Actions are judged by intentions, and every person will have only what they intended.",
        urdu: "اعمال کا دار و مدار نیتوں پر ہے، اور ہر شخص کو وہی ملے گا جس کی اس نے نیت کی۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 2,
        arabic: "بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ",
        english: "Islam is built upon five pillars: testimony of faith, prayer, zakat, fasting Ramadan, and pilgrimage to the House.",
        urdu: "اسلام کی بنیاد پانچ چیزوں پر ہے: کلمۂ شہادت، نماز، زکوٰۃ، رمضان کے روزے اور بیت اللہ کا حج۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 3,
        arabic: "مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ",
        english: "Whoever introduces into this matter of ours that which is not from it, it will be rejected.",
        urdu: "جس نے ہمارے اس دین میں ایسی چیز ایجاد کی جو اس میں سے نہیں، وہ مردود ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 4,
        arabic: "إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ",
        english: "The lawful is clear and the unlawful is clear, and between them are doubtful matters.",
        urdu: "حلال واضح ہے اور حرام بھی واضح ہے، اور ان دونوں کے درمیان کچھ مشتبہ امور ہیں۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 5,
        arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
        english: "Part of the perfection of a person's Islam is leaving what does not concern him.",
        urdu: "آدمی کے اسلام کی خوبی یہ ہے کہ وہ ان چیزوں کو چھوڑ دے جو اس سے متعلق نہیں۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 6,
        arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
        english: "None of you truly believes until he loves for his brother what he loves for himself.",
        urdu: "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 7,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
        english: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
        urdu: "جو شخص اللہ اور آخرت کے دن پر ایمان رکھتا ہے اسے چاہیے کہ اچھی بات کہے یا خاموش رہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 8,
        arabic: "لَا تَغْضَبْ",
        english: "Do not become angry.",
        urdu: "غصہ نہ کرو۔",
        reference: "Sahih Bukhari"
    },

    {
        number: 9,
        arabic: "مَنْ لَا يَرْحَمْ لَا يُرْحَمْ",
        english: "Whoever does not show mercy will not be shown mercy.",
        urdu: "جو رحم نہیں کرتا اس پر رحم نہیں کیا جاتا۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 10,
        arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
        english: "A Muslim is the one from whose tongue and hand other Muslims are safe.",
        urdu: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 11,
        arabic: "الدِّينُ النَّصِيحَةُ",
        english: "Religion is sincere advice.",
        urdu: "دین خیر خواہی کا نام ہے۔",
        reference: "Sahih Muslim"
    },

    {
        number: 12,
        arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ",
        english: "Purification is half of faith.",
        urdu: "پاکیزگی نصف ایمان ہے۔",
        reference: "Sahih Muslim"
    },

    {
        number: 13,
        arabic: "الصَّلَاةُ نُورٌ",
        english: "Prayer is light.",
        urdu: "نماز نور ہے۔",
        reference: "Sahih Muslim"
    },

    {
        number: 14,
        arabic: "الصَّدَقَةُ بُرْهَانٌ",
        english: "Charity is a proof of faith.",
        urdu: "صدقہ ایمان کی دلیل ہے۔",
        reference: "Sahih Muslim"
    },

    {
        number: 15,
        arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
        english: "A good word is charity.",
        urdu: "اچھی بات بھی صدقہ ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 16,
        arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
        english: "Your smile in the face of your brother is charity.",
        urdu: "اپنے بھائی کے سامنے تمہارا مسکرانا بھی تمہارے لیے صدقہ ہے۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 17,
        arabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
        english: "Whoever cheats us is not one of us.",
        urdu: "جو ہمیں دھوکا دے وہ ہم میں سے نہیں۔",
        reference: "Sahih Muslim"
    },

    {
        number: 18,
        arabic: "لَا ضَرَرَ وَلَا ضِرَارَ",
        english: "There should be neither harm nor reciprocating harm.",
        urdu: "نہ خود نقصان پہنچاؤ اور نہ بدلے میں نقصان پہنچاؤ۔",
        reference: "Sunan Ibn Majah"
    },

    {
        number: 19,
        arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ",
        english: "Fear Allah wherever you are.",
        urdu: "تم جہاں بھی ہو اللہ سے ڈرو۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 20,
        arabic: "وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا",
        english: "Follow a bad deed with a good deed and it will erase it.",
        urdu: "برے عمل کے بعد نیک عمل کرو، وہ اسے مٹا دے گا۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 21,
        arabic: "احْفَظِ اللَّهَ يَحْفَظْكَ",
        english: "Be mindful of Allah and He will protect you.",
        urdu: "اللہ کے احکام کی حفاظت کرو، اللہ تمہاری حفاظت فرمائے گا۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 22,
        arabic: "إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ",
        english: "When you ask, ask Allah.",
        urdu: "جب مانگو تو اللہ ہی سے مانگو۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 23,
        arabic: "إِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ",
        english: "When you seek help, seek help from Allah.",
        urdu: "جب مدد مانگو تو اللہ ہی سے مدد مانگو۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 24,
        arabic: "الْبِرُّ حُسْنُ الْخُلُقِ",
        english: "Righteousness is good character.",
        urdu: "نیکی اچھے اخلاق کا نام ہے۔",
        reference: "Sahih Muslim"
    },

    {
        number: 25,
        arabic: "الْحَيَاءُ مِنَ الْإِيمَانِ",
        english: "Modesty is part of faith.",
        urdu: "حیا ایمان کا حصہ ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 26,
        arabic: "مَنْ صَمَتَ نَجَا",
        english: "Whoever remains silent is saved.",
        urdu: "جو خاموش رہا وہ نجات پا گیا۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 27,
        arabic: "الْمَرْءُ مَعَ مَنْ أَحَبَّ",
        english: "A person will be with those whom he loves.",
        urdu: "انسان اسی کے ساتھ ہوگا جس سے وہ محبت کرتا ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 28,
        arabic: "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ",
        english: "Whoever guides to good will have a reward similar to the one who does it.",
        urdu: "جو کسی نیکی کی طرف رہنمائی کرے اسے نیکی کرنے والے کے برابر اجر ملے گا۔",
        reference: "Sahih Muslim"
    },

    {
        number: 29,
        arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
        english: "The best of you are those who learn the Quran and teach it.",
        urdu: "تم میں سب سے بہتر وہ ہے جو قرآن سیکھے اور اسے سکھائے۔",
        reference: "Sahih Bukhari"
    },

    {
        number: 30,
        arabic: "اقْرَؤُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ",
        english: "Recite the Quran, for it will come on the Day of Resurrection as an intercessor for its companions.",
        urdu: "قرآن پڑھا کرو، کیونکہ یہ قیامت کے دن اپنے پڑھنے والوں کے لیے سفارشی بن کر آئے گا۔",
        reference: "Sahih Muslim"
    },

    {
        number: 31,
        arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
        english: "Whoever follows a path seeking knowledge, Allah will make easy for him a path to Paradise.",
        urdu: "جو شخص علم حاصل کرنے کے لیے راستہ اختیار کرے اللہ اس کے لیے جنت کا راستہ آسان فرما دیتا ہے۔",
        reference: "Sahih Muslim"
    },

    {
        number: 32,
        arabic: "مَنْ لَا يَشْكُرِ النَّاسَ لَا يَشْكُرِ اللَّهَ",
        english: "Whoever does not thank people does not thank Allah.",
        urdu: "جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا بھی شکر ادا نہیں کرتا۔",
        reference: "Jami` at-Tirmidhi"
    },

    {
        number: 33,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever fulfills the need of his brother, Allah will fulfill his need.",
        urdu: "جو اپنے بھائی کی ضرورت پوری کرتا ہے اللہ اس کی ضرورت پوری فرماتا ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 34,
        arabic: "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        urdu: "جو لوگوں پر رحم نہیں کرتا اللہ اس پر رحم نہیں کرتا۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 35,
        arabic: "مَنْ غَدَا إِلَى الْمَسْجِدِ أَوْ رَاحَ أَعَدَّ اللَّهُ لَهُ نُزُلًا فِي الْجَنَّةِ",
        english: "Whoever goes to the mosque in the morning or evening, Allah prepares for him a place in Paradise.",
        urdu: "جو شخص صبح یا شام مسجد جاتا ہے اللہ اس کے لیے جنت میں مہمانی تیار فرماتا ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 36,
        arabic: "مَنْ بَنَى لِلَّهِ مَسْجِدًا بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ",
        english: "Whoever builds a mosque for Allah, Allah will build for him a house in Paradise.",
        urdu: "جو اللہ کے لیے مسجد بنائے اللہ اس کے لیے جنت میں گھر بناتا ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 37,
        arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
        english: "The most beloved deeds to Allah are those that are consistent, even if they are few.",
        urdu: "اللہ کو سب سے محبوب اعمال وہ ہیں جو پابندی سے کیے جائیں، اگرچہ وہ کم ہوں۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 38,
        arabic: "يَسِّرُوا وَلَا تُعَسِّرُوا وَبَشِّرُوا وَلَا تُنَفِّرُوا",
        english: "Make things easy and do not make them difficult; give glad tidings and do not repel people.",
        urdu: "آسانی پیدا کرو، مشکل نہ بناؤ، خوشخبری دو اور لوگوں کو متنفر نہ کرو۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 39,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        urdu: "جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے اسے اپنے پڑوسی کو تکلیف نہیں دینی چاہیے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    },

    {
        number: 40,
        arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
        english: "A believer to another believer is like a building whose parts support one another.",
        urdu: "ایک مومن دوسرے مومن کے لیے عمارت کی مانند ہے جس کا ایک حصہ دوسرے حصے کو مضبوط کرتا ہے۔",
        reference: "Sahih Bukhari & Sahih Muslim"
    }

];


// =====================================================
// ELEMENTS
// =====================================================

const grid = document.getElementById("hadithGrid");
const searchInput = document.getElementById("searchInput");
const counterText = document.getElementById("counterText");

const modal = document.getElementById("hadithModal");
const modalContent = document.getElementById("modalContent");

const closeModalBtn = document.getElementById("closeModalBtn");

const modalTitle = document.getElementById("modalTitle");
const modalArabic = document.getElementById("modalArabic");
const modalEnglish = document.getElementById("modalEnglish");
const modalUrdu = document.getElementById("modalUrdu");
const modalRef = document.getElementById("modalRef");


// =====================================================
// FAVORITES - LOCAL STORAGE
// =====================================================

let favorites = [];

try {

    const savedFavorites =
        localStorage.getItem("hadithFavorites");

    if (savedFavorites) {

        const parsed =
            JSON.parse(savedFavorites);

        if (Array.isArray(parsed)) {

            favorites = parsed.map(Number);

        }

    }

} catch (error) {

    console.error(
        "Could not load favorites:",
        error
    );

    favorites = [];

}


// =====================================================
// SAVE FAVORITES
// =====================================================

function saveFavorites() {

    try {

        localStorage.setItem(
            "hadithFavorites",
            JSON.stringify(favorites)
        );

    } catch (error) {

        console.error(
            "Could not save favorites:",
            error
        );

    }

}


// =====================================================
// CHECK FAVORITE
// =====================================================

function isFavorite(number) {

    return favorites.includes(Number(number));

}


// =====================================================
// CREATE HADITH CARD
// =====================================================

function createCard(hadith) {

    const article =
        document.createElement("article");


    article.className =
        "hadith-card relative group overflow-hidden flex flex-col h-full";


    const favorite =
        isFavorite(hadith.number);


    article.innerHTML = `

        <!-- TOP -->

        <div class="flex justify-between items-start mb-4">

            <!-- NUMBER -->

            <span
                class="flex items-center justify-center
                w-9 h-9 rounded-full
                bg-[#f0f1ec]
                text-[#0f5132]
                font-bold">

                ${hadith.number}

            </span>


            <!-- FAVORITE BUTTON -->

            <button
                type="button"
                class="favorite-btn
                flex items-center justify-center
                w-10 h-10 rounded-full
                hover:bg-red-50
                transition-all duration-200"
                title="${
                    favorite
                    ? "Remove from Favorites"
                    : "Add to Favorites"
                }">

                <span
                    class="material-symbols-outlined favorite-icon"
                    style="
                        color: ${favorite ? "#ef4444" : "#68776e"};
                        font-size: 28px;
                        font-variation-settings:
                        'FILL' ${favorite ? 1 : 0},
                        'wght' 500,
                        'GRAD' 0,
                        'opsz' 28;
                    "
                >${favorite ? "favorite" : "favorite_border"}</span>

            </button>

        </div>


        <!-- CONTENT -->

        <div class="flex-1 flex flex-col gap-4">

            <!-- ARABIC -->

            <p
                class="font-serif text-2xl
                text-[#0f5132]
                text-right
                leading-loose"
                dir="rtl">

                ${hadith.arabic}

            </p>


            <!-- LINE -->

            <div
                class="h-px w-full bg-[#e3e3de]">
            </div>


            <!-- ENGLISH -->

            <p
                class="text-[#173c2a]
                leading-relaxed">

                ${hadith.english}

            </p>


            <!-- URDU -->

            <p
                class="text-[#52635a]
                leading-relaxed
                text-right"
                dir="rtl">

                ${hadith.urdu}

            </p>

        </div>


        <!-- BOTTOM -->

        <div
            class="mt-6 pt-4
            border-t border-[#e3e3de]
            flex flex-wrap
            justify-between
            items-center gap-3">

            <!-- REFERENCE -->

            <span
                class="text-xs
                text-[#68776e]
                bg-[#f4f5f0]
                px-2 py-1
                rounded">

                ${hadith.reference}

            </span>


            <!-- LISTEN -->

            <button
                type="button"
                class="listen-btn
                text-[#0f5132]
                font-semibold
                text-sm
                hover:text-[#c89b25]
                transition-colors">

                🔊 Listen

            </button>


            <!-- READ MORE -->

            <button
                type="button"
                class="read-more-btn
                text-[#0f5132]
                font-semibold
                text-sm
                hover:text-[#c89b25]
                transition-colors">

                Read More →

            </button>

        </div>

    `;


    // =================================================
    // FAVORITE BUTTON
    // =================================================

    const favoriteBtn =
        article.querySelector(".favorite-btn");


    favoriteBtn.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            toggleFavorite(
                hadith.number,
                favoriteBtn
            );

        }
    );


    // =================================================
    // LISTEN BUTTON
    // =================================================

    const listenBtn =
        article.querySelector(".listen-btn");


    listenBtn.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            speakHadith(hadith);

        }
    );


    // =================================================
    // READ MORE BUTTON
    // =================================================

    const readMoreBtn =
        article.querySelector(".read-more-btn");


    readMoreBtn.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            openModal(hadith);

        }
    );


    // =================================================
    // CARD CLICK
    // =================================================

    article.addEventListener(
        "click",
        function() {

            openModal(hadith);

        }
    );


    return article;

}


// =====================================================
// TOGGLE FAVORITE
// =====================================================

function toggleFavorite(
    number,
    button
) {

    number = Number(number);


    const index =
        favorites.indexOf(number);


    // =================================================
    // ADD FAVORITE
    // =================================================

    if (index === -1) {

        favorites.push(number);

    }


    // =================================================
    // REMOVE FAVORITE
    // =================================================

    else {

        favorites.splice(
            index,
            1
        );

    }


    // SAVE
    saveFavorites();


    // GET ICON
    const icon =
        button.querySelector(
            ".favorite-icon"
        );


    if (!icon) return;


    const nowFavorite =
        favorites.includes(number);


    // =================================================
    // FULL RED HEART
    // =================================================

    if (nowFavorite) {

        icon.textContent =
            "favorite";


        // FULL RED
        icon.style.color =
            "#ef4444";


        // FILL HEART
        icon.style.fontVariationSettings =
            "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 28";


        icon.style.transform =
            "scale(1.25)";


        button.title =
            "Remove from Favorites";


        // Animation
        setTimeout(
            function() {

                icon.style.transform =
                    "scale(1)";

            },
            200
        );

    }


    // =================================================
    // OUTLINE HEART
    // =================================================

    else {

        icon.textContent =
            "favorite_border";


        // GREY
        icon.style.color =
            "#68776e";


        // OUTLINE
        icon.style.fontVariationSettings =
            "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 28";


        icon.style.transform =
            "scale(1)";


        button.title =
            "Add to Favorites";

    }

}


// =====================================================
// RENDER GRID
// =====================================================

function renderGrid(data) {

    if (!grid) {

        console.error(
            "hadithGrid element not found!"
        );

        return;

    }


    grid.innerHTML = "";


    // COUNTER

    if (counterText) {

        counterText.textContent =
            `Showing ${data.length}/40`;

    }


    // DISPLAY CARDS

    data.forEach(
        function(hadith) {

            grid.appendChild(
                createCard(hadith)
            );

        }
    );


    // NO RESULTS

    const noResults =
        document.getElementById(
            "noResults"
        );


    if (noResults) {

        if (data.length === 0) {

            noResults.classList.remove(
                "hidden"
            );

        }

        else {

            noResults.classList.add(
                "hidden"
            );

        }

    }

}


// =====================================================
// SEARCH
// =====================================================

function filterData(query) {

    const q =
        query
            .toLowerCase()
            .trim();


    if (!q) {

        return hadithData;

    }


    return hadithData.filter(
        function(hadith) {

            return (

                hadith.english
                    .toLowerCase()
                    .includes(q)

                ||

                hadith.urdu
                    .toLowerCase()
                    .includes(q)

                ||

                hadith.arabic
                    .includes(q)

                ||

                hadith.reference
                    .toLowerCase()
                    .includes(q)

                ||

                hadith.number
                    .toString()
                    .includes(q)

            );

        }
    );

}


// =====================================================
// SEARCH EVENT
// =====================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const filtered =
                filterData(
                    this.value
                );


            renderGrid(
                filtered
            );

        }
    );

}


// =====================================================
// OPEN MODAL
// =====================================================

function openModal(hadith) {

    if (!modal) return;


    if (modalTitle) {

        modalTitle.textContent =
            `Hadith ${hadith.number}`;

    }


    if (modalArabic) {

        modalArabic.textContent =
            hadith.arabic;

    }


    if (modalEnglish) {

        modalEnglish.textContent =
            hadith.english;

    }


    if (modalUrdu) {

        modalUrdu.textContent =
            hadith.urdu;

    }


    if (modalRef) {

        modalRef.textContent =
            hadith.reference;

    }


    modal.classList.remove(
        "hidden"
    );


    modal.classList.add(
        "flex"
    );


    document.body.style.overflow =
        "hidden";


    if (modalContent) {

        modalContent.classList.remove(
            "scale-95"
        );

        modalContent.classList.add(
            "scale-100"
        );

    }

}


// =====================================================
// CLOSE MODAL
// =====================================================

function closeModal() {

    if (!modal) return;


    if (modalContent) {

        modalContent.classList.remove(
            "scale-100"
        );

        modalContent.classList.add(
            "scale-95"
        );

    }


    modal.classList.add(
        "hidden"
    );


    modal.classList.remove(
        "flex"
    );


    document.body.style.overflow =
        "";

}


// =====================================================
// CLOSE BUTTON
// =====================================================

if (closeModalBtn) {

    closeModalBtn.addEventListener(
        "click",
        closeModal
    );

}


// =====================================================
// CLICK OUTSIDE MODAL
// =====================================================

if (modal) {

    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );

}


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            modal &&
            !modal.classList.contains(
                "hidden"
            )
        ) {

            closeModal();

        }

    }
);


// =====================================================
// AUDIO / LISTEN
// =====================================================

function speakHadith(hadith) {

    if (
        !(
            "speechSynthesis"
            in window
        )
    ) {

        alert(
            "Sorry, audio is not supported in this browser."
        );

        return;

    }


    // STOP PREVIOUS AUDIO

    window.speechSynthesis.cancel();


    const text =
        hadith.arabic +
        ". " +
        hadith.english;


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.lang =
        "en-US";


    speech.rate =
        0.85;


    speech.pitch =
        1;


    window.speechSynthesis.speak(
        speech
    );

}


// =====================================================
// INITIAL LOAD
// =====================================================

renderGrid(
    hadithData
);