// Get the select elements
var districtSelect = document.getElementById("district");
var upazilaSelect = document.getElementById("upazila");

// Define the district-to-upazila mapping
var districtToUpazila = {
    Dhaka: ["Savar", "Dhamrai", "Keraniganj", "Nawabganj", "Dohar"],
    Faridpur: ["Alfadanga", "Bhanga", "Boalmari", "Charbhadrasan", "Faridpur Sadar", "Madhukhali", "Nagarkanda", "Sadarpur", "Saltha"],
    Gazipur: ["Gazipur Sadar", "Kaliakoir", "Kapasia", "Sreepur", "Kaliganj"],
    Gopalganj: ["Gopalganj Sadar", "Kotalipara", "Kashiani", "Tungipara", "Muksudpur"],
    Jamalpur: ["Jamalpur Sadar", "Dewanganj", "Madarganj", "Melandaha", "Sarishabari", "Islampur"],
    Kishoreganj: ["Kishoreganj Sadar", "Astagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kuliarchar", "Mithamain", "Nikli", "Pakundia", "Tarail"],
    Madaripur: ["Madaripur Sadar", "Kalkini", "Rajoir", "Shibchar"],
    Manikganj: ["Manikganj Sadar", "Singair", "Saturia", "Harirampur", "Shibalaya", "Ghior", "Daulatpur"],
    Munshiganj: ["Munshiganj Sadar", "Sreenagar", "Sirajdikhan", "Lohajang", "Tongibari", "Gazaria", "Louhajong"],
    Mymensingh: ["Mymensingh Sadar", "Bhaluka", "Trishal", "Muktagacha", "Gaffargaon", "Nandail", "Phulpur", "Ishwarganj", "Dhobaura", "Fulbaria", "Gauripur", "Haluaghat"],
    Narayanganj: ["Narayanganj Sadar", "Araihazar", "Bandar", "Rupganj", "Sonargaon"],
    Narsingdi: ["Narsingdi Sadar", "Belabo", "Monohardi", "Palash", "Raipura", "Shibpur"],
    Netrokona: ["Netrokona Sadar", "Aditmari", "Atpara", "Barhatta", "Durgapur", "Kendua", "Kalmakanda", "Khaliajuri", "Madan", "Mohanganj", "Purbadhala"],
    Rajbari: ["Rajbari Sadar", "Baliakandi", "Goalanda", "Pangsha", "Kalukhali"],
    Shariatpur: ["Shariatpur Sadar", "Damudya", "Naria", "Zanjira", "Bhedarganj", "Gosairhat", "Shakhipur"],
    Sherpur: ["Sherpur Sadar", "Jhenaigati", "Nalitabari", "Nakla", "Sreebardi"],
    Tangail: ["Tangail Sadar", "Basail", "Bhuapur", "Delduar", "Ghatail", "Gopalpur", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur"],
    Bogra: ["Adamdighi", "Bogra Sadar", "Dhunat", "Dupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Shibganj", "Sherpur", "Sonatala"],
    Joypurhat: ["Akkelpur", "Joypurhat-S", "Kalai", "Khetlal", "Panchbibi"],
    Naogaon: ["Atrai", "Badalgachi", "Dhamoirhat", "Manda", "Mohadevpur", "Naogaon-S", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Shapahar"],
    Natore: ["Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Naldanga", "Natore-S", "Singra"],
    Nawabganj: ["Bholahat", "Gomostapur", "Nachol", "Nawabganj-S", "Shibganj"],
    Pabna: ["Atghoria", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna-S", "Santhia", "Sujanagar"],
    Rajshahi: ["Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore"],
    Sirajgonj: ["Belkuchi", "Chowhali", "Kamarkhand", "Kazipur", "Raiganj", "Shahzadpur", "Sirajganj-S", "Tarash", "Ullapara"],
    Dinajpur: ["Birampur", "Birganj", "Birol", "Bochaganj", "Chirirbandar", "Dinajpur-S", "Fulbari", "Ghoraghat", "Hakimpur", "Kaharol", "Khanshama", "Nawabganj", "Parbatipur"],
    Gaibandha: ["Fulchari", "Gaibandha-S", "Gobindaganj", "Palashbari", "Sadullapur", "Saghata", "Sundarganj"],
    Kurigram: ["Bhurungamari", "Chilmari", "Fulbari", "Kurigram-S", "Nageswari", "Rajarhat", "Rajibpur", "Rowmari", "Ulipur"],
    Lalmonirhat: ["Aditmari", "Hatibandha", "Kaliganj", "Lalmonirhat-S", "Patgram"],
    Nilphamari: ["Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari-S", "Sayedpur"],
    Panchagarh: ["Atwari", "Boda", "Debiganj", "Panchagarh-S", "Tetulia"],
    Rangpur: ["Badarganj", "Gangachara", "Kaunia", "Mithapukur", "Pirgacha", "Pirganj", "Rangpur-S", "Taraganj"],
    Thakurgaon: ["Baliadangi", "Haripur", "Pirganj", "Ranisankail", "Thakurgaon-S"],
    Barguna: ["Amtali", "Bamna", "Barguna-S", "Betagi", "Patharghata", "Taltali"],
    Barisal: ["Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Barishal-S", "Gouranadi", "Hizla", "Mehendiganj", "Muladi", "Uzirpur"],
    Bhola: ["Bhola-S", "Borhanuddin", "Charfassion", "Daulatkhan", "Lalmohan", "Monpura", "Tazumuddin"],
    Jhalokati: ["Jhalokathi-S", "Kathalia", "Nalchity", "Rajapur"],
    Patuakhali: ["Bauphal", "Dashmina", "Dumki", "Galachipa", "Kalapara", "Mirjaganj", "Patuakhali-S", "Rangabali"],
    Pirojpur: ["Bhandaria", "Kawkhali", "Mothbaria", "Nazirpur", "Nesarabad", "Pirojpur-S", "Zianagar"],
    Brahmanbaria: ["Akhaura", "Ashuganj", "B.Baria-S", "Bancharampur", "Bijoynagar", "Kasba", "Nabinagar", "Nasirnagar", "Sarail"],
    Bandarban: ["Alikadam", "Bandarban-S", "Lama", "Naikhyongchari", "Rowangchari", "Ruma", "Thanchi"],
    Chandpur: ["Chandpur-S", "Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab (Dakshin)", "Matlab (Uttar)", "Shahrasti"],
    Chattogram: ["Anwara", "Banskhali", "Boalkhali", "Chandanish", "Fatikchari", "Hathazari", "Karnaphuli", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raojan", "Sandwip", "Satkania", "Sitakunda"],
    Comilla: ["Barura", "Brahmanpara", "Burichong", "Chandina", "Chouddagram", "Cumilla-S", "Cumilla-S Daksin", "Daudkandi", "Debidwar", "Homna", "Laksham", "Lalmai", "Meghna", "Monohorganj", "Muradnagar", "Nangalkot", "Titas"],
    CoxsBazar: ["Chakoria", "Cox's Bazar-S", "Kutubdia", "Moheskhali", "Pekua", "Ramu", "Teknaf", "Ukhiya"],
    Feni: ["Chhagalniya", "Daganbhuiyan", "Feni-S", "Fulgazi", "Porshuram", "Sonagazi"],
    Khagrachari: ["Dighinala", "Guimara", "Khagrachari-S", "Laxmichari", "Mahalchari", "Manikchari", "Matiranga", "Panchari", "Ramgarh"],
    Lakshmipur: ["Komol Nagar", "Laxmipur-S", "Raipur", "Ramganj", "Ramgati"],
    Noakhali: ["Begumganj", "Chatkhil", "Companiganj", "Hatiya", "Kabir Hat", "Noakhali-S", "Senbag", "Sonaimuri", "Subarna Char"],
    Rangamati: ["Baghaichari", "Barkal", "Belaichari", "Juraichari", "Kaptai", "Kaukhali", "Langadu", "Nanniarchar", "Rajosthali", "Rangamati-S"],
    Habiganj: ["Azmiriganj", "Bahubal", "Baniachong", "Chunarughat", "Habiganj-S", "Lakhai", "Madhabpur", "Nabiganj", "Sayestaganj"],
    Maulvibazar: ["Barlekha", "Juri", "Kamalganj", "Kulaura", "Moulvibazar-S", "Rajnagar", "Sreemangal"],
    Sunamganj: ["Biswamvarpur", "Chatak", "Dakhin Sunamganj", "Derai", "Dharmapasha", "Doarabazar", "Jagannathpur", "Jamalganj", "Sulla", "Sunamganj-S", "Tahirpur"],
    Sylhet: ["Balaganj", "Beanibazar", "Biswanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jointiapur", "Kanaighat", "Osmaninagar", "Sylhet-S", "Zakiganj"],
    Bagerhat: ["Bagerhat-S", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sharankhola"],
    Chuadanga: ["Alamdanga", "Chuadanga-S", "Damurhuda", "Jibannagar"],
    
    
    
    Jhenaidah: ["Harinakunda", "Jhenaidah-S", "Kaliganj", "Kotchandpur", "Moheshpur", "Shailkupa"],
    Khulna: ["Batiaghata", "Dacope", "Dighalia", "Dumuria", "Koira", "Paikgacha", "Phultala", "Rupsa", "Terokhada"],
    Kushtia: ["Bheramara", "Daulatpur", "Khoksha", "Kumarkhali", "Kushtia-S", "Mirpur"],
    Magura: ["Magura-S", "Mohammadpur", "Salikha", "Sreepur"],
    Meherpur: ["Gangni", "Meherpur-S", "Mujib Nagar"],
    Narail: ["Kalia", "Lohagara", "Narail-S"],
    Satkhira: ["Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Satkhira-S", "Shyamnagar", "Tala"],
    
    Jashore: ["Abhoynagar", "Bagherpara", "Chowgacha", "Jashore-S", "Jhikargacha", "Keshabpur", "Monirampur", "Sarsha"],
};

// Event listener for district select element
districtSelect.addEventListener("change", function () {
    var selectedDistrict = districtSelect.value;

    // Clear previous upazila options
    upazilaSelect.innerHTML = '<option value="">Select a Upazila</option>';

    if (selectedDistrict !== "") {
        var upazilas = districtToUpazila[selectedDistrict];

        // Create new upazila options
        for (var i = 0; i < upazilas.length; i++) {
            var option = document.createElement("option");
            option.value = upazilas[i];
            option.textContent = upazilas[i];
            upazilaSelect.appendChild(option);
        }
    }
});
