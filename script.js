
        // Data seluruh provinsi dan kota di Indonesia
        const indonesiaRegions = {
            "Aceh": ["Banda Aceh", "Sabang", "Lhokseumawe", "Langsa", "Subulussalam", "Aceh Selatan", "Aceh Tenggara", "Aceh Timur", "Aceh Tengah", "Aceh Barat", "Aceh Besar", "Pidie", "Bireuen", "Aceh Utara", "Aceh Barat Daya", "Gayo Lues", "Aceh Tamiang", "Nagan Raya", "Aceh Jaya", "Bener Meriah", "Pidie Jaya"],
            "Sumatera Utara": ["Medan", "Binjai", "Tebing Tinggi", "Pematang Siantar", "Tanjung Balai", "Sibolga", "Padang Sidempuan", "Gunungsitoli", "Asahan", "Batubara", "Dairi", "Deli Serdang", "Humbang Hasundutan", "Karo", "Labuhan Batu", "Langkat", "Mandailing Natal", "Nias", "Padang Lawas", "Samosir", "Serdang Bedagai", "Tapanuli Selatan", "Tapanuli Tengah", "Tapanuli Utara", "Toba Samosir"],
            "Sumatera Barat": ["Padang", "Solok", "Sawah Lunto", "Padang Panjang", "Bukittinggi", "Payakumbuh", "Pariaman", "Agam", "Dharmasraya", "Kepulauan Mentawai", "Lima Puluh Kota", "Padang Pariaman", "Pasaman", "Pesisir Selatan", "Sijunjung", "Solok Selatan", "Tanah Datar"],
            "Riau": ["Pekanbaru", "Dumai", "Bengkalis", "Indragiri Hilir", "Indragiri Hulu", "Kampar", "Kuantan Singingi", "Pelalawan", "Rokan Hilir", "Rokan Hulu", "Siak", "Kepulauan Meranti"],
            "Jambi": ["Jambi", "Sungai Penuh", "Batanghari", "Bungo", "Kerinci", "Merangin", "Muaro Jambi", "Sarolangun", "Tanjung Jabung Barat", "Tanjung Jabung Timur", "Tebo"],
            "Sumatera Selatan": ["Palembang", "Prabumulih", "Pagarlalam", "Lubuklinggau", "Banyuasin", "Empat Lawang", "Lahat", "Muara Enim", "Musi Banyuasin", "Musi Rawas", "Ogan Ilir", "Ogan Komering Ilir", "Ogan Komering Ulu", "Ogan Komering Ulu Selatan", "Ogan Komering Ulu Timur"],
            "Bengkulu": ["Bengkulu", "Bengkulu Selatan", "Bengkulu Tengah", "Bengkulu Utara", "Kaur", "Kepahiang", "Lebong", "Mukomuko", "Rejang Lebong", "Seluma"],
            "Lampung": ["Bandar Lampung", "Metro", "Lampung Barat", "Lampung Selatan", "Lampung Tengah", "Lampung Timur", "Lampung Utara", "Mesuji", "Pesawaran", "Pringsewu", "Tanggamus", "Tulang Bawang", "Tulang Bawang Barat", "Way Kanan"],
            "Kepulauan Bangka Belitung": ["Pangkal Pinang", "Bangka", "Bangka Barat", "Bangka Selatan", "Bangka Tengah", "Belitung", "Belitung Timur"],
            "Kepulauan Riau": ["Batam", "Tanjung Pinang", "Bintan", "Karimun", "Kepulauan Anambas", "Lingga", "Natuna"],
            "DKI Jakarta": ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Selatan", "Jakarta Timur", "Kepulauan Seribu"],
            "Jawa Barat": ["Bandung", "Bekasi", "Bogor", "Cimahi", "Cirebon", "Depok", "Sukabumi", "Tasikmalaya", "Banjar", "Bandung Barat", "Bekasi", "Bogor", "Ciamis", "Cianjur", "Cirebon", "Garut", "Indramayu", "Karawang", "Kuningan", "Majalengka", "Pangandaran", "Purwakarta", "Subang", "Sukabumi", "Sumedang", "Tasikmalaya"],
            "Jawa Tengah": ["Semarang", "Salatiga", "Surakarta", "Pekalongan", "Tegal", "Cilacap", "Banyumas", "Purbalingga", "Banjarnegara", "Kebumen", "Purworejo", "Wonosobo", "Magelang", "Boyolali", "Klaten", "Sukoharjo", "Wonogiri", "Karanganyar", "Sragen", "Grobogan", "Blora", "Rembang", "Pati", "Kudus", "Jepara", "Demak", "Semarang", "Temanggung", "Kendal", "Batang", "Pekalongan", "Pemalang", "Tegal", "Brebes"],
            "DI Yogyakarta": ["Yogyakarta", "Bantul", "Gunung Kidul", "Kulon Progo", "Sleman"],
            "Jawa Timur": ["Surabaya", "Malang", "Batu", "Blitar", "Kediri", "Madiun", "Mojokerto", "Pasuruan", "Probolinggo", "Banyuwangi", "Bondowoso", "Gresik", "Jember", "Jombang", "Lamongan", "Lumajang", "Magetan", "Nganjuk", "Ngawi", "Pacitan", "Pamekasan", "Ponorogo", "Sampang", "Sidoarjo", "Situbondo", "Sumenep", "Trenggalek", "Tuban", "Tulungagung"],
            "Banten": ["Serang", "Cilegon", "Tangerang", "Tangerang Selatan", "Lebak", "Pandeglang", "Serang"],
            "Bali": ["Denpasar", "Badung", "Bangli", "Buleleng", "Gianyar", "Jembrana", "Karangasem", "Klungkung", "Tabanan"],
            "Nusa Tenggara Barat": ["Mataram", "Bima", "Dompu", "Lombok Barat", "Lombok Tengah", "Lombok Timur", "Lombok Utara", "Sumbawa", "Sumbawa Barat"],
            "Nusa Tenggara Timur": ["Kupang", "Ende", "Flores Timur", "Alor", "Belu", "Ende", "Sikka", "East Manggarai", "Ngada", "Lembata", "Rote Ndao", "Manggarai", "Sumba Barat", "Sumba Timur", "Timor Tengah Selatan", "Timor Tengah Utara"],
            "Kalimantan Barat": ["Pontianak", "Singkawang", "Bengkayang", "Kapuas Hulu", "Kayong Utara", "Ketapang", "Kubu Raya", "Landak", "Melawi", "Mempawah", "Sambas", "Sanggau", "Sekadau", "Sintang"],
            "Kalimantan Tengah": ["Palangkaraya", "Barito Selatan", "Barito Timur", "Barito Utara", "Gunung Mas", "Kapuas", "Katingan", "Kotawaringin Barat", "Kotawaringin Timur", "Lamandau", "Murung Raya", "Pulang Pisau", "Seruyan", "Sukamara"],
            "Kalimantan Selatan": ["Banjarmasin", "Banjarbaru", "Balangan", "Banjar", "Barito Kuala", "Hulu Sungai Selatan", "Hulu Sungai Tengah", "Hulu Sungai Utara", "Kotabaru", "Tabalong", "Tanah Bumbu", "Tanah Laut", "Tapin"],
            "Kalimantan Timur": ["Samarinda", "Balikpapan", "Bontang", "Berau", "Kutai Barat", "Kutai Kartanegara", "Kutai Timur", "Mahakam Ulu", "Paser", "Penajam Paser Utara"],
            "Kalimantan Utara": ["Tanjung Selor", "Bulungan", "Malinau", "Nunukan", "Tana Tidung"],
            "Sulawesi Utara": ["Manado", "Bitung", "Kotamobagu", "Tomohon", "Bolaang Mongondow", "Bolaang Mongondow Selatan", "Bolaang Mongondow Timur", "Bolaang Mongondow Utara", "Kepulauan Sangihe", "Kepulauan Siau Tagulandang Biaro", "Kepulauan Talaud", "Minahasa", "Minahasa Selatan", "Minahasa Tenggara", "Minahasa Utara"],
            "Sulawesi Tengah": ["Palu", "Banggai", "Banggai Kepulauan", "Banggai Laut", "Buol", "Donggala", "Morowali", "Morowali Utara", "Parigi Moutong", "Poso", "Sigi", "Tojo Una-Una", "Toli-Toli"],
            "Sulawesi Selatan": ["Makassar", "Parepare", "Palopo", "Bantaeng", "Barru", "Bone", "Bulukumba", "Enrekang", "Gowa", "Jeneponto", "Luwu", "Luwu Timur", "Luwu Utara", "Maros", "Pangkajene Kepulauan", "Pinrang", "Selayar", "Sinjai", "Soppeng", "Takalar", "Tana Toraja", "Toraja Utara", "Wajo"],
            "Sulawesi Tenggara": ["Kendari", "Bau-Bau", "Bombana", "Buton", "Buton Selatan", "Buton Tengah", "Buton Utara", "Kolaka", "Kolaka Timur", "Kolaka Utara", "Konawe", "Konawe Kepulauan", "Konawe Selatan", "Konawe Utara", "Muna", "Muna Barat", "Wakatobi"],
            "Gorontalo": ["Gorontalo", "Boalemo", "Bone Bolango", "Gorontalo", "Gorontalo Utara", "Pohuwato"],
            "Sulawesi Barat": ["Mamuju", "Majene", "Mamasa", "Mamuju", "Mamuju Tengah", "Pasangkayu", "Polewali Mandar"],
            "Maluku": ["Ambon", "Tual", "Buru", "Buru Selatan", "Kepulauan Aru", "Maluku Barat Daya", "Maluku Tengah", "Maluku Tenggara", "Maluku Tenggara Barat", "Seram Bagian Barat", "Seram Bagian Timur"],
            "Maluku Utara": ["Ternate", "Tidore Kepulauan", "Halmahera Barat", "Halmahera Tengah", "Halmahera Timur", "Halmahera Selatan", "Halmahera Utara", "Kepulauan Sula", "Pulau Morotai", "Pulau Taliabu"],
            "Papua Barat": ["Manokwari", "Fakfak", "Kaimana", "Manokwari Selatan", "Pegunungan Arfak", "Raja Ampat", "Sorong", "Sorong Selatan", "Tambrauw", "Teluk Bintuni", "Teluk Wondama"],
            "Papua": ["Jayapura", "Biak Numfor", "Jayapura", "Keerom", "Mamberamo Raya", "Sarmi", "Supiori", "Waropen", "Yalimo", "Yahukimo", "Pegunungan Bintang", "Tolikara", "Boven Digoel", "Mappi", "Asmat", "Merauke"]
        };

        // Kota-kota populer untuk quick access
        const popularCities = [
            "Jakarta Pusat", "Surabaya", "Bandung", "Medan", "Makassar", 
            "Semarang", "Palembang", "Denpasar", "Balikpapan", "Yogyakarta",
            "Malang", "Bekasi", "Tangerang", "Bogor", "Padang"
        ];

        // Elemen DOM
        const permissionCard = document.getElementById('permissionCard');
        const appTabs = document.getElementById('appTabs');
        const loadingIndicator = document.getElementById('loadingIndicator');
        const loadingText = document.getElementById('loadingText');
        const errorMessage = document.getElementById('errorMessage');
        const errorText = document.getElementById('errorText');
        
        // Element Cuaca Umum
        const locationName = document.getElementById('locationName');
        const currentDate = document.getElementById('currentDate');
        const currentTemp = document.getElementById('currentTemp');
        const weatherDesc = document.getElementById('weatherDesc');
        const weatherIcon = document.getElementById('weatherIcon');
        const windSpeed = document.getElementById('windSpeed');
        const humidity = document.getElementById('humidity');
        const temperatureRange = document.getElementById('temperatureRange');
        const windDirection = document.getElementById('windDirection');
        const forecastList = document.getElementById('forecastList');
        const searchCity = document.getElementById('searchCity');
        const searchResults = document.getElementById('searchResults');
        
        // Element Selectors
        const provinceSelect = document.getElementById('provinceSelect');
        const citySelect = document.getElementById('citySelect');
        const provinceSelectWeather = document.getElementById('provinceSelectWeather');
        const citySelectWeather = document.getElementById('citySelectWeather');
        const quickCities = document.getElementById('quickCities');
        
        // Element Gempa
        const eqMagnitude = document.getElementById('eqMagnitude');
        const eqRegion = document.getElementById('eqRegion');
        const eqDateTime = document.getElementById('eqDateTime');
        const eqDepth = document.getElementById('eqDepth');
        const earthquakeList15 = document.getElementById('earthquakeList15');
        const earthquakeListFelt = document.getElementById('earthquakeListFelt');
        
        // Element Lainnya
        const marineWeather = document.getElementById('marineWeather');
        const airportWeather = document.getElementById('airportWeather');
        const airQualityData = document.getElementById('airQualityData');
        
        // Voice Assistant
        const voiceAssistant = document.getElementById('voiceAssistant');
        const voiceModal = document.getElementById('voiceModal');
        const voiceStatus = document.getElementById('voiceStatus');
        const voiceResponse = document.getElementById('voiceResponse');
        const closeVoiceBtn = document.getElementById('closeVoiceBtn');
        
        const grantPermissionBtn = document.getElementById('grantPermissionBtn');
        const manualLocationBtn = document.getElementById('manualLocationBtn');
        const refreshBtn = document.getElementById('refreshBtn');
        const retryBtn = document.getElementById('retryBtn');

        // Status aplikasi
        let currentProvince = '';
        let currentCity = '';
        let currentTab = 'beranda';
        let recognition = null;
        let synthesis = null;

        // Inisialisasi aplikasi
        function initApp() {
            // Atur tanggal saat ini
            updateCurrentDate();
            
            // Load data wilayah Indonesia
            loadRegionData();
            
            // Setup tab navigation
            setupTabNavigation();
            
            // Setup footer navigation
            setupFooterNavigation();
            
            // Setup voice assistant
            setupVoiceAssistant();
            
            // Setup event listeners
            setupEventListeners();
            
            // Cek apakah lokasi sudah diizinkan sebelumnya
            if (localStorage.getItem('locationGranted') === 'true') {
                showApp();
                loadPageData('beranda');
            } else {
                showPermissionCard();
            }
        }

        // Load data wilayah Indonesia
        function loadRegionData() {
            // Isi dropdown provinsi
            Object.keys(indonesiaRegions).forEach(province => {
                const option1 = document.createElement('option');
                option1.value = province;
                option1.textContent = province;
                provinceSelect.appendChild(option1);
                
                const option2 = document.createElement('option');
                option2.value = province;
                option2.textContent = province;
                provinceSelectWeather.appendChild(option2);
            });
            
            // Isi quick cities
            popularCities.forEach(city => {
                const cityBtn = document.createElement('div');
                cityBtn.className = 'city-btn';
                cityBtn.textContent = city;
                cityBtn.addEventListener('click', () => {
                    selectCity(city);
                });
                quickCities.appendChild(cityBtn);
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Province select change
            provinceSelect.addEventListener('change', function() {
                const province = this.value;
                updateCityDropdown(citySelect, province);
            });
            
            provinceSelectWeather.addEventListener('change', function() {
                const province = this.value;
                updateCityDropdown(citySelectWeather, province);
            });
            
            // City select change
            citySelect.addEventListener('change', function() {
                if (this.value) {
                    selectCity(this.value);
                }
            });
            
            citySelectWeather.addEventListener('change', function() {
                if (this.value) {
                    selectCity(this.value);
                }
            });
            
            // Search functionality
            searchCity.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                searchCities(searchTerm);
            });
            
            // Hide search results when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.search-container')) {
                    searchResults.style.display = 'none';
                }
            });
        }

        // Update dropdown kota berdasarkan provinsi
        function updateCityDropdown(dropdown, province) {
            dropdown.innerHTML = '<option value="">-- Pilih Kota --</option>';
            
            if (province && indonesiaRegions[province]) {
                indonesiaRegions[province].forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    dropdown.appendChild(option);
                });
            }
        }

        // Pencarian kota
        function searchCities(searchTerm) {
            if (searchTerm.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            const results = [];
            
            // Cari di semua provinsi dan kota
            for (const [province, cities] of Object.entries(indonesiaRegions)) {
                cities.forEach(city => {
                    if (city.toLowerCase().includes(searchTerm)) {
                        results.push({ city, province });
                    }
                });
            }
            
            // Tampilkan hasil pencarian
            displaySearchResults(results);
        }

        // Tampilkan hasil pencarian
        function displaySearchResults(results) {
            searchResults.innerHTML = '';
            
            if (results.length === 0) {
                searchResults.style.display = 'none';
                return;
            }
            
            results.slice(0, 5).forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.textContent = `${result.city}, ${result.province}`;
                resultItem.addEventListener('click', () => {
                    selectCity(result.city);
                    searchCity.value = '';
                    searchResults.style.display = 'none';
                });
                searchResults.appendChild(resultItem);
            });
            
            searchResults.style.display = 'block';
        }

        // Pilih kota
        function selectCity(city) {
            currentCity = city;
            
            // Cari provinsi untuk kota yang dipilih
            for (const [province, cities] of Object.entries(indonesiaRegions)) {
                if (cities.includes(city)) {
                    currentProvince = province;
                    break;
                }
            }
            
            // Update UI
            document.querySelectorAll('.city-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent === city) {
                    btn.classList.add('active');
                }
            });
            
            // Jika di halaman cuaca, load data cuaca
            if (currentTab === 'cuaca-umum' || currentTab === 'beranda') {
                getWeatherData();
            }
            
            // Switch ke tab cuaca jika dari beranda
            if (currentTab === 'beranda') {
                switchPage('cuaca-umum');
            }
        }

        // Setup tab navigation
        function setupTabNavigation() {
            const tabBtns = document.querySelectorAll('.tab-btn');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tabId = btn.getAttribute('data-tab');
                    switchTab(tabId);
                });
            });
        }

        // Setup footer navigation
        function setupFooterNavigation() {
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = item.getAttribute('data-page');
                    
                    // Update active nav item
                    navItems.forEach(nav => nav.classList.remove('active'));
                    item.classList.add('active');
                    
                    // Switch to page
                    switchPage(page);
                });
            });
        }

        // Setup voice assistant
        function setupVoiceAssistant() {
            // Check if browser supports speech recognition
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = 'id-ID';
                
                recognition.onstart = function() {
                    voiceAssistant.classList.add('listening');
                    voiceStatus.textContent = 'Mendengarkan... Silakan berbicara';
                };
                
                recognition.onresult = function(event) {
                    const transcript = event.results[0][0].transcript;
                    voiceStatus.textContent = `Anda berkata: "${transcript}"`;
                    processVoiceCommand(transcript);
                };
                
                recognition.onerror = function(event) {
                    voiceStatus.textContent = 'Error: ' + event.error;
                    voiceAssistant.classList.remove('listening');
                };
                
                recognition.onend = function() {
                    voiceAssistant.classList.remove('listening');
                setTimeout(() => {
                    if (voiceModal.classList.contains('active')) {
                        voiceModal.classList.remove('active');
                    }
                }, 3000);
                };
            } else {
                voiceStatus.textContent = 'Browser tidak mendukung speech recognition';
            }
            
            // Check if browser supports speech synthesis
            if ('speechSynthesis' in window) {
                synthesis = window.speechSynthesis;
            }
            
            voiceAssistant.addEventListener('click', toggleVoiceAssistant);
            closeVoiceBtn.addEventListener('click', closeVoiceModal);
        }

        function toggleVoiceAssistant() {
            if (recognition) {
                if (voiceAssistant.classList.contains('listening')) {
                    recognition.stop();
                    voiceModal.classList.remove('active');
                } else {
                    voiceModal.classList.add('active');
                    recognition.start();
                }
            } else {
                voiceModal.classList.add('active');
                voiceStatus.textContent = 'Browser tidak mendukung speech recognition';
            }
        }

        function closeVoiceModal() {
            voiceModal.classList.remove('active');
            if (recognition && voiceAssistant.classList.contains('listening')) {
                recognition.stop();
            }
        }

        function speakText(text) {
            if (synthesis) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'id-ID';
                utterance.rate = 1.0;
                utterance.pitch = 1.0;
                synthesis.speak(utterance);
            }
        }

        function processVoiceCommand(command) {
            const lowerCommand = command.toLowerCase();
            let response = '';
            
            if (lowerCommand.includes('cuaca') || lowerCommand.includes('weather')) {
                switchPage('cuaca-umum');
                response = 'Membuka halaman cuaca. Silakan pilih kota untuk melihat informasi cuaca.';
                voiceStatus.textContent = 'Membuka halaman cuaca';
            } else if (lowerCommand.includes('gempa') || lowerCommand.includes('earthquake')) {
                switchPage('gempa');
                response = 'Membuka halaman gempa. Menampilkan informasi gempa terkini di Indonesia.';
                voiceStatus.textContent = 'Membuka halaman gempa';
            } else if (lowerCommand.includes('udara') || lowerCommand.includes('air quality')) {
                switchPage('kualitas-udara');
                response = 'Membuka halaman kualitas udara. Menampilkan informasi kualitas udara di berbagai kota di Indonesia.';
                voiceStatus.textContent = 'Membuka halaman kualitas udara';
            } else if (lowerCommand.includes('beranda') || lowerCommand.includes('home')) {
                switchPage('beranda');
                response = 'Membuka halaman beranda. Selamat datang di aplikasi CuacaKu.';
                voiceStatus.textContent = 'Membuka halaman beranda';
            } else if (lowerCommand.includes('maritim') || lowerCommand.includes('marine')) {
                switchPage('maritim');
                response = 'Membuka halaman cuaca maritim. Menampilkan informasi cuaca untuk pelayaran.';
                voiceStatus.textContent = 'Membuka halaman cuaca maritim';
            } else if (lowerCommand.includes('bandara') || lowerCommand.includes('airport')) {
                switchPage('bandara');
                response = 'Membuka halaman cuaca bandara. Menampilkan informasi cuaca untuk penerbangan.';
                voiceStatus.textContent = 'Membuka halaman cuaca bandara';
            } else {
                // Coba cari kota dalam perintah
                let foundCity = null;
                for (const city of popularCities) {
                    if (lowerCommand.includes(city.toLowerCase())) {
                        foundCity = city;
                        break;
                    }
                }
                
                if (foundCity) {
                    selectCity(foundCity);
                    response = `Menampilkan cuaca untuk ${foundCity}.`;
                    voiceStatus.textContent = `Menampilkan cuaca untuk ${foundCity}`;
                } else {
                    response = `Perintah "${command}" tidak dikenali. Coba "cuaca Jakarta", "gempa", atau "udara".`;
                    voiceStatus.textContent = `Perintah tidak dikenali`;
                }
            }
            
            // Tampilkan dan ucapkan respons
            voiceResponse.textContent = response;
            speakText(response);
        }

        // Switch between pages
        function switchPage(page) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(page).classList.add('active');
            
            // Update current tab
            currentTab = page;
            
            // Load data for the page
            loadPageData(page);
        }

        // Switch between tabs (for top navigation)
        function switchTab(tabId) {
            // Update active tab button
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
            
            // Update active tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            
            currentTab = tabId;
            loadPageData(tabId);
        }

        // Load data berdasarkan halaman yang aktif
        function loadPageData(page) {
            switch(page) {
                case 'beranda':
                    // Tidak perlu load data khusus untuk beranda
                    break;
                case 'cuaca-umum':
                    if (currentCity) {
                        getWeatherData();
                    }
                    break;
                case 'gempa':
                    getEarthquakeData();
                    break;
                case 'maritim':
                    getMarineWeatherData();
                    break;
                case 'bandara':
                    getAirportWeatherData();
                    break;
                case 'kualitas-udara':
                    getAirQualityData();
                    break;
            }
        }

        // Tampilkan kartu persetujuan
        function showPermissionCard() {
            permissionCard.style.display = 'block';
            appTabs.style.display = 'none';
            loadingIndicator.style.display = 'none';
            errorMessage.style.display = 'none';
        }

        // Tampilkan aplikasi utama
        function showApp() {
            permissionCard.style.display = 'none';
            appTabs.style.display = 'flex';
            loadingIndicator.style.display = 'none';
            errorMessage.style.display = 'none';
        }

        // Tampilkan loading
        function showLoading(message = 'Mengambil data dari BMKG...') {
            permissionCard.style.display = 'none';
            appTabs.style.display = 'none';
            loadingIndicator.style.display = 'block';
            errorMessage.style.display = 'none';
            loadingText.textContent = message;
        }

        // Tampilkan error
        function showError(message) {
            permissionCard.style.display = 'none';
            appTabs.style.display = 'none';
            loadingIndicator.style.display = 'none';
            errorMessage.style.display = 'block';
            errorText.textContent = message;
        }

        // Perbarui tanggal saat ini
        function updateCurrentDate() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            currentDate.textContent = now.toLocaleDateString('id-ID', options);
        }

        // Minta izin lokasi
        function requestLocation() {
            showLoading('Mendeteksi lokasi Anda...');
            
            if (!navigator.geolocation) {
                showError('Browser Anda tidak mendukung geolokasi. Silakan pilih kota manual.');
                return;
            }
            
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const city = await getCityFromCoords(
                            position.coords.latitude, 
                            position.coords.longitude
                        );
                        
                        currentCity = city;
                        localStorage.setItem('locationGranted', 'true');
                        showApp();
                        loadPageData(currentTab);
                    } catch (error) {
                        console.error('Error getting city from coordinates:', error);
                        currentCity = 'Jakarta Pusat';
                        showApp();
                        loadPageData(currentTab);
                    }
                },
                (error) => {
                    let errorMsg = 'Tidak dapat mengakses lokasi Anda. ';
                    
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            errorMsg += 'Silakan pilih kota manual.';
                            showPermissionCard();
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMsg += 'Silakan pilih kota manual.';
                            currentCity = 'Jakarta Pusat';
                            showApp();
                            loadPageData(currentTab);
                            break;
                        case error.TIMEOUT:
                            errorMsg += 'Silakan pilih kota manual.';
                            currentCity = 'Jakarta Pusat';
                            showApp();
                            loadPageData(currentTab);
                            break;
                        default:
                            errorMsg += 'Terjadi kesalahan yang tidak diketahui.';
                            showError(errorMsg);
                    }
                },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 60000
                }
            );
        }

        // Dapatkan nama kota dari koordinat (simulasi)
        async function getCityFromCoords(lat, lng) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // Simulasi deteksi kota berdasarkan koordinat
                    // Dalam implementasi nyata, gunakan reverse geocoding service
                    const cities = popularCities;
                    resolve(cities[Math.floor(Math.random() * cities.length)]);
                }, 1000);
            });
        }

        // ==================== API BMKG IMPLEMENTATION ====================

        // 1. API Cuaca Umum untuk seluruh Indonesia
        async function getWeatherData() {
            if (!currentCity) {
                showError('Silakan pilih kota terlebih dahulu');
                return;
            }
            
            showLoading(`Mengambil data cuaca untuk ${currentCity}...`);
            
            try {
                const weatherData = await fetchBMKGWeather(currentProvince, currentCity);
                displayWeatherData(weatherData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                showError('Gagal mengambil data cuaca dari BMKG. Silakan coba lagi nanti.');
            }
        }

        // 2. API Gempa
        async function getEarthquakeData() {
            showLoading('Mengambil data gempa dari BMKG...');
            
            try {
                const [autoGempa, gempa15, gempaDirasakan] = await Promise.all([
                    fetchBMKGEarthquake('autogempa'),
                    fetchBMKGEarthquake('gempaterkini'),
                    fetchBMKGEarthquake('gempadirasakan')
                ]);
                
                displayEarthquakeData(autoGempa, gempa15, gempaDirasakan);
            } catch (error) {
                console.error('Error fetching earthquake data:', error);
                showError('Gagal mengambil data gempa dari BMKG.');
            }
        }

        // 3. API Cuaca Maritim
        async function getMarineWeatherData() {
            showLoading('Mengambil data cuaca maritim dari BMKG...');
            
            try {
                const marineData = await fetchBMKGMarine();
                displayMarineWeatherData(marineData);
            } catch (error) {
                console.error('Error fetching marine data:', error);
                showError('Gagal mengambil data cuaca maritim dari BMKG.');
            }
        }

        // 4. API Cuaca Bandara
        async function getAirportWeatherData() {
            showLoading('Mengambil data cuaca bandara dari BMKG...');
            
            try {
                const airportData = await fetchBMKGAirport();
                displayAirportWeatherData(airportData);
            } catch (error) {
                console.error('Error fetching airport data:', error);
                showError('Gagal mengambil data cuaca bandara dari BMKG.');
            }
        }

        // 5. API Kualitas Udara
        async function getAirQualityData() {
            showLoading('Mengambil data kualitas udara...');
            
            try {
                const airQualityData = await fetchAirQuality();
                displayAirQualityData(airQualityData);
            } catch (error) {
                console.error('Error fetching air quality data:', error);
                showError('Gagal mengambil data kualitas udara.');
            }
        }

        // ==================== FETCH FUNCTIONS ====================

        async function fetchBMKGWeather(province, city) {
            // Simulasi API call ke BMKG untuk kota tertentu
            return new Promise((resolve) => {
                setTimeout(() => {
                    // Data cuaca yang disesuaikan berdasarkan kota
                    const weatherPatterns = {
                        'Jakarta': { temp: 28, humidity: 75, wind: 12 },
                        'Surabaya': { temp: 30, humidity: 70, wind: 10 },
                        'Bandung': { temp: 22, humidity: 80, wind: 8 },
                        'Medan': { temp: 29, humidity: 78, wind: 9 },
                        'Makassar': { temp: 31, humidity: 72, wind: 11 },
                        'Denpasar': { temp: 29, humidity: 74, wind: 10 },
                        // Default pattern untuk kota lainnya
                        'default': { temp: 27, humidity: 76, wind: 9 }
                    };
                    
                    const pattern = weatherPatterns[city] || weatherPatterns['default'];
                    
                    const current = {
                        temperature: pattern.temp + Math.floor(Math.random() * 5) - 2, // Variasi kecil
                        description: ['Cerah', 'Berawan', 'Hujan Ringan', 'Hujan Sedang'][Math.floor(Math.random() * 4)],
                        humidity: pattern.humidity + Math.floor(Math.random() * 10) - 5,
                        windSpeed: pattern.wind + Math.floor(Math.random() * 5) - 2,
                        windDirection: ['Timur', 'Barat', 'Utara', 'Selatan', 'Tenggara', 'Barat Daya'][Math.floor(Math.random() * 6)],
                        minTemp: pattern.temp - 3 + Math.floor(Math.random() * 3),
                        maxTemp: pattern.temp + 3 + Math.floor(Math.random() * 3)
                    };
                    
                    const forecast = [];
                    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
                    const today = new Date();
                    
                    for (let i = 0; i < 3; i++) {
                        const nextDay = new Date(today);
                        nextDay.setDate(today.getDate() + i);
                        
                        forecast.push({
                            day: i === 0 ? 'Hari Ini' : days[nextDay.getDay()],
                            date: nextDay.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
                            temperature: current.temperature + Math.floor(Math.random() * 4) - 2,
                            description: ['Cerah', 'Berawan', 'Hujan Ringan', 'Hujan Sedang'][Math.floor(Math.random() * 4)],
                            minTemp: current.minTemp + Math.floor(Math.random() * 3) - 1,
                            maxTemp: current.maxTemp + Math.floor(Math.random() * 3) - 1
                        });
                    }
                    
                    resolve({
                        location: city,
                        province: province,
                        current: current,
                        forecast: forecast
                    });
                }, 1500);
            });
        }

        async function fetchBMKGEarthquake(type) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (type === 'autogempa') {
                        resolve({
                            Magnitude: '5.2',
                            Wilayah: 'Pusat gempa berada di laut 68 km BaratDaya SUMBAWABARAT',
                            DateTime: '20-Oct-23 14:30:05 WIB',
                            Kedalaman: '10 km'
                        });
                    } else if (type === 'gempaterkini') {
                        resolve([
                            { Magnitude: '4.5', Wilayah: 'SUMBAR', Kedalaman: '8 km', DateTime: '20-Oct-23 13:20:15 WIB' },
                            { Magnitude: '3.8', Wilayah: 'JABAR', Kedalaman: '12 km', DateTime: '20-Oct-23 12:15:30 WIB' },
                            { Magnitude: '4.2', Wilayah: 'JATENG', Kedalaman: '15 km', DateTime: '20-Oct-23 11:05:22 WIB' }
                        ]);
                    } else {
                        resolve([
                            { Magnitude: '5.8', Wilayah: 'BALI', Kedalaman: '20 km', DateTime: '19-Oct-23 18:45:10 WIB' },
                            { Magnitude: '6.2', Wilayah: 'SULSEL', Kedalaman: '25 km', DateTime: '18-Oct-23 09:30:45 WIB' }
                        ]);
                    }
                }, 1000);
            });
        }

        async function fetchBMKGMarine() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { area: 'Selat Malaka', wave: '0.5 - 1.5 m', wind: '5 - 15 knot', weather: 'Berawan' },
                        { area: 'Laut Jawa', wave: '1.0 - 2.0 m', wind: '10 - 20 knot', weather: 'Cerah Berawan' },
                        { area: 'Selat Sunda', wave: '1.5 - 2.5 m', wind: '15 - 25 knot', weather: 'Hujan Ringan' }
                    ]);
                }, 1000);
            });
        }

        async function fetchBMKGAirport() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { airport: 'Soekarno-Hatta (CGK)', temp: '28°C', weather: 'Cerah', visibility: '10 km', wind: '10 knot' },
                        { airport: 'Ngurah Rai (DPS)', temp: '30°C', weather: 'Berawan', visibility: '8 km', wind: '12 knot' },
                        { airport: 'Juanda (SUB)', temp: '29°C', weather: 'Cerah', visibility: '12 km', wind: '8 knot' }
                    ]);
                }, 1000);
            });
        }

        async function fetchAirQuality() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { city: 'Jakarta', aqi: 85, quality: 'Sedang', pm25: 35, pm10: 50 },
                        { city: 'Bandung', aqi: 65, quality: 'Sedang', pm25: 25, pm10: 40 },
                        { city: 'Surabaya', aqi: 110, quality: 'Tidak Sehat', pm25: 45, pm10: 65 },
                        { city: 'Medan', aqi: 95, quality: 'Sedang', pm25: 38, pm10: 55 }
                    ]);
                }, 1000);
            });
        }

        // ==================== DISPLAY FUNCTIONS ====================

        function displayWeatherData(data) {
            showApp();
            locationName.textContent = `${data.location}, ${data.province}`;
            currentTemp.textContent = `${data.current.temperature}°C`;
            weatherDesc.textContent = data.current.description;
            weatherIcon.className = getWeatherIcon(data.current.description);
            windSpeed.textContent = `${data.current.windSpeed} km/jam`;
            humidity.textContent = `${data.current.humidity}%`;
            temperatureRange.textContent = `${data.current.minTemp}°-${data.current.maxTemp}°C`;
            windDirection.textContent = data.current.windDirection;
            
            forecastList.innerHTML = '';
            data.forecast.forEach(day => {
                const forecastItem = document.createElement('div');
                forecastItem.className = 'forecast-item';
                forecastItem.innerHTML = `
                    <div class="forecast-day">${day.day}</div>
                    <div class="forecast-date">${day.date}</div>
                    <div class="forecast-icon">
                        <i class="${getWeatherIcon(day.description)}"></i>
                    </div>
                    <div class="forecast-temp">${day.temperature}°C</div>
                    <div class="forecast-desc">${day.description}</div>
                    <div style="font-size: 0.8rem; color: var(--gray); margin-top: 5px;">
                        ${day.minTemp}°-${day.maxTemp}°C
                    </div>
                `;
                forecastList.appendChild(forecastItem);
            });
        }

        function displayEarthquakeData(autoGempa, gempa15, gempaDirasakan) {
            showApp();
            
            // Auto Gempa
            eqMagnitude.textContent = `Magnitude: ${autoGempa.Magnitude} SR`;
            eqRegion.textContent = autoGempa.Wilayah;
            eqDateTime.textContent = autoGempa.DateTime;
            eqDepth.textContent = `Kedalaman: ${autoGempa.Kedalaman}`;
            
            // 15 Gempa Terakhir
            earthquakeList15.innerHTML = '<h4>15 Gempa Terakhir</h4>';
            gempa15.forEach(eq => {
                const eqItem = document.createElement('div');
                eqItem.className = 'earthquake-item';
                eqItem.innerHTML = `
                    <strong>${eq.Magnitude} SR</strong> - ${eq.Wilayah}
                    <div style="font-size: 0.9rem; color: var(--gray); margin-top: 5px;">
                        Kedalaman: ${eq.Kedalaman} | ${eq.DateTime}
                    </div>
                `;
                earthquakeList15.appendChild(eqItem);
            });
            
            // Gempa Dirasakan
            earthquakeListFelt.innerHTML = '<h4>Gempa Dirasakan (≥ 5.0 SR)</h4>';
            gempaDirasakan.forEach(eq => {
                const eqItem = document.createElement('div');
                eqItem.className = 'earthquake-item';
                eqItem.innerHTML = `
                    <strong>${eq.Magnitude} SR</strong> - ${eq.Wilayah}
                    <div style="font-size: 0.9rem; color: var(--gray); margin-top: 5px;">
                        Kedalaman: ${eq.Kedalaman} | ${eq.DateTime}
                    </div>
                `;
                earthquakeListFelt.appendChild(eqItem);
            });
        }

        function displayMarineWeatherData(data) {
            showApp();
            
            let html = `
                <table class="marine-table">
                    <thead>
                        <tr>
                            <th>Wilayah</th>
                            <th>Tinggi Gelombang</th>
                            <th>Kecepatan Angin</th>
                            <th>Cuaca</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            data.forEach(area => {
                html += `
                    <tr>
                        <td>${area.area}</td>
                        <td>${area.wave}</td>
                        <td>${area.wind}</td>
                        <td>${area.weather}</td>
                    </tr>
                `;
            });
            
            html += `</tbody></table>`;
            marineWeather.innerHTML = html;
        }

        function displayAirportWeatherData(data) {
            showApp();
            
            let html = `
                <table class="airport-table">
                    <thead>
                        <tr>
                            <th>Bandara</th>
                            <th>Suhu</th>
                            <th>Cuaca</th>
                            <th>Visibilitas</th>
                            <th>Angin</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            data.forEach(airport => {
                html += `
                    <tr>
                        <td>${airport.airport}</td>
                        <td>${airport.temp}</td>
                        <td>${airport.weather}</td>
                        <td>${airport.visibility}</td>
                        <td>${airport.wind}</td>
                    </tr>
                `;
            });
            
            html += `</tbody></table>`;
            airportWeather.innerHTML = html;
        }

        function displayAirQualityData(data) {
            showApp();
            
            let html = `
                <table class="air-quality-table">
                    <thead>
                        <tr>
                            <th>Kota</th>
                            <th>Indeks AQI</th>
                            <th>Kualitas</th>
                            <th>PM2.5</th>
                            <th>PM10</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            data.forEach(city => {
                const aqiClass = getAQIClass(city.aqi);
                html += `
                    <tr>
                        <td>${city.city}</td>
                        <td>${city.aqi} <span class="aqi-indicator ${aqiClass}">${city.quality}</span></td>
                        <td>${city.quality}</td>
                        <td>${city.pm25} μg/m³</td>
                        <td>${city.pm10} μg/m³</td>
                    </tr>
                `;
            });
            
            html += `</tbody></table>`;
            airQualityData.innerHTML = html;
        }

        function getAQIClass(aqi) {
            if (aqi <= 50) return 'aqi-good';
            if (aqi <= 100) return 'aqi-moderate';
            if (aqi <= 150) return 'aqi-unhealthy';
            if (aqi <= 200) return 'aqi-very-unhealthy';
            return 'aqi-hazardous';
        }

        function getWeatherIcon(description) {
            const iconMap = {
                'Cerah': 'fas fa-sun',
                'Berawan': 'fas fa-cloud-sun',
                'Hujan Ringan': 'fas fa-cloud-rain',
                'Hujan Sedang': 'fas fa-cloud-showers-heavy',
                'Hujan Lebat': 'fas fa-cloud-showers-water',
                'Petir': 'fas fa-bolt',
                'Kabut': 'fas fa-smog'
            };
            
            return iconMap[description] || 'fas fa-cloud';
        }

        // Event Listeners
        grantPermissionBtn.addEventListener('click', requestLocation);
        manualLocationBtn.addEventListener('click', () => {
            currentCity = 'Jakarta Pusat';
            showApp();
            loadPageData(currentTab);
        });
        refreshBtn.addEventListener('click', () => loadPageData(currentTab));
        retryBtn.addEventListener('click', () => loadPageData(currentTab));

        // Inisialisasi aplikasi saat halaman dimuat
        document.addEventListener('DOMContentLoaded', initApp);
