// Generate exactly 40 Hadith entries
        const baseHadiths = [
            {
                number: 1,
                arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى...",
                english: "\"Actions are (judged) by motives (niyyah), so each man will have what he intended...\"",
                urdu: "\"اعمال کا دارومدار نیتوں پر ہے، اور ہر شخص کے لیے وہی ہے جس کی اس نے نیت کی...\"",
                reference: "Sahih Bukhari & Muslim"
            },
            {
                number: 2,
                arabic: "بُنِيَ الإِسْلامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لا إِلَهَ إِلا اللَّهُ...",
                english: "\"Islam is based on (the following) five (principles): To testify that none has the right to be worshipped but Allah...\"",
                urdu: "\"اسلام کی بنیاد پانچ چیزوں پر ہے: اس بات کی گواہی دینا کہ اللہ کے سوا کوئی معبود نہیں...\"",
                reference: "Sahih Bukhari & Muslim"
            },
            {
                number: 3,
                arabic: "لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
                english: "\"None of you truly believes until he loves for his brother what he loves for himself.\"",
                urdu: "\"تم میں سے کوئی شخص اس وقت تک مومن نہیں ہو سکتا جب تک کہ وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے کرتا ہے۔\"",
                reference: "Sahih Bukhari & Muslim"
            },
            {
                number: 4,
                arabic: "الدِّينُ النَّصِيحَةُ",
                english: "\"Religion is sincerity.\"",
                urdu: "\"دین خیر خواہی کا نام ہے۔\"",
                reference: "Sahih Muslim"
            }
        ];

        const hadithData = [];
        for (let i = 0; i < 40; i++) {
            const template = baseHadiths[i % baseHadiths.length];
            hadithData.push({
                number: i + 1,
                arabic: template.arabic,
                english: template.english,
                urdu: template.urdu,
                reference: template.reference
            });
        }

        const grid = document.getElementById('hadithGrid');
        const searchInput = document.getElementById('searchInput');
        const counterText = document.getElementById('counterText');
        
        const modal = document.getElementById('hadithModal');
        const modalContent = document.getElementById('modalContent');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modalTitle = document.getElementById('modalTitle');
        const modalArabic = document.getElementById('modalArabic');
        const modalEnglish = document.getElementById('modalEnglish');
        const modalUrdu = document.getElementById('modalUrdu');
        const modalRef = document.getElementById('modalRef');

        function createCard(hadith) {
            const article = document.createElement('article');
            article.className = "bg-surface-container-lowest rounded-2xl p-6 border border-[#F4F0E6] shadow-[0px_10px_30px_rgba(15,81,50,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative group overflow-hidden flex flex-col h-full";
            
            article.innerHTML = `
                <div class="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-secondary transition-colors duration-300"></div>
                <div class="flex justify-between items-start mb-4">
                    <span class="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container text-primary font-title-md text-title-md">${hadith.number}</span>
                    <button class="text-on-surface-variant hover:text-secondary transition-colors group/fav">
                        <span class="material-symbols-outlined group-hover/fav:text-secondary">favorite</span>
                    </button>
                </div>
                <div class="flex-1 flex flex-col gap-4">
                    <p class="font-body-ar-lg text-body-ar-lg text-primary text-right leading-loose mb-2" dir="rtl">${hadith.arabic}</p>
                    <div class="h-px w-full bg-surface-variant/50"></div>
                    <p class="font-body-md text-body-md text-on-surface line-clamp-3">${hadith.english}</p>
                    <p class="font-body-md text-body-md text-on-surface-variant line-clamp-2" dir="rtl">${hadith.urdu}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-surface-variant/30 flex justify-between items-center">
                    <span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">${hadith.reference}</span>
                    <button class="read-more-btn text-primary font-title-md text-title-md hover:text-secondary transition-colors flex items-center gap-1 text-sm">
                        Read More
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            `;
            
            article.querySelector('.read-more-btn').addEventListener('click', () => openModal(hadith));
            return article;
        }

        function renderGrid(data) {
            grid.innerHTML = '';
            data.forEach(hadith => {
                grid.appendChild(createCard(hadith));
            });
            counterText.textContent = `Showing ${data.length}/40`;
        }

        function filterData(query) {
            const lowerQuery = query.toLowerCase();
            return hadithData.filter(h => 
                h.english.toLowerCase().includes(lowerQuery) ||
                h.arabic.includes(lowerQuery) ||
                h.urdu.includes(lowerQuery) ||
                h.number.toString().includes(lowerQuery)
            );
        }

        searchInput.addEventListener('input', (e) => {
            const filtered = filterData(e.target.value);
            renderGrid(filtered);
        });

        function openModal(hadith) {
            modalTitle.textContent = `Hadith ${hadith.number}`;
            modalArabic.textContent = hadith.arabic;
            modalEnglish.textContent = hadith.english;
            modalUrdu.textContent = hadith.urdu;
            modalRef.textContent = hadith.reference;
            
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before animating opacity
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
            
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        });

        // Initial render
        renderGrid(hadithData);