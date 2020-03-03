let scoreCounter = 0;
let i = 0;
let questionValue = null;
let storedAnswers = [];

const questions = [
    {
    question: "1.   Kuka ohjaa kuntien tupakkavalvontaviranomaisten toimintaa?",
    answer1: "Aluehallintovirasto (AVI)",
    answer2: "Sosiaali- ja terveysalan lupa- ja valvontavirasto (Valvira)",
    answer3: "Sosiaali- ja terveysministeriö (STM)",
    answer4: "Kunnan sosiaali- ja terveyslautakunta",
    correct: 1,
    source: "AVI 27.3.2019. Tupakka. https://www.avi.fi/web/avi/tupakka",
    },
    {
    question: "2.	Mitkä seuraavista ovat tatuoinnin riskejä?",
    answer1: "Pigmenttien ja väriaineiden aiheuttamat yliherkkyysreaktiot",
    answer2: "HIV, B- ja C-hepatiitti",
    answer3: "Krooninen ihosairaus tai vaikea bakteeritulehdus",
    answer4: "Kaikki edelliset",
    correct: 4,
    source: "STM. Tatuoinnit. https://stm.fi/kemikaalivalvonta/tatuoinnit",
    },
    {
    question: "3.	Mikä seuraavista ympäristötekijöistä aiheuttaa suurimman tautitaakan suomalaisille?",
    answer1: "Sisäilman formaldehydi",
    answer2: "Ulkoilman pienhiukkaset",
    answer3: "Sisäilman radon",
    answer4: "Passiivitupakointi",
    correct: 2,
    source: "THL 12.9.2019. Tautitaakka. https://thl.fi/fi/web/ymparistoterveys/riskinarvio/tautitaakka",
    },
    {
    question: "4.	Mikä on yleisin vesiepidemioiden aiheuttaja Suomessa?",
    answer1: "Kemiallinen aiheuttaja",
    answer2: "Norovirus",
    answer3: "Giardia",
    answer4: "Kampylobakteeri",
    correct: 2,
    source: "THL 12.9.2019. https://thl.fi/fi/web/ymparistoterveys/vesi/vesiepidemiat/taustatietoa",
    },
    {
    question: "5.	Tupakkalaki uudistui 15.8.2016. Uudistuksen myötä tupakointikielto laajeni mm. siten, että ajoneuvossa ei saa tupakoida mikäli autossa on:",
    answer1: "Alle 1-vuotias lapsi",
    answer2: "Alle 5-vuotias lapsi",
    answer3: "Alle 10-vuotias lapsi",
    answer4: "Alle 15-vuotias lapsi",
    correct: 4,
    source: "Kuntaliitto 14.12.2016. Ympäristöterveydenhuolto. Tupakkalaki ja savuton kunta. https://www.kuntaliitto.fi/yhdyskunnat-ja-ymparisto/tupakkalaki-ja-savuton-kunta", 
    },
    {
    question: "6.	Mikä näistä kuuluu ympäristöterveydenhuollon piiriin?",
    answer1: "Terveydensuojelu",
    answer2: "Tupakkalain valvonta",
    answer3: "Eläinlääkäripalvelut",
    answer4: "Kaikki edelliset",
    correct: 4,
    source: "Valvira 30.1.2019. Ympäristöterveydenhuolto. https://www.valvira.fi/ymparistoterveys/ymparistoterveydenhuolto ", 
    },
    {
    question: "7.	Olet töissä neuvolassa. Asiakkaanasi on lapsi joka sairastelee jatkuvasti. Epäilet, että sairastelun taustalla on terveydelle haitalliset kotiolot (vakavia sisäilmaongelmia, lukuisia kotieläimiä). Lapsen äiti ei ota esille tuomaasi huolta tosissaan. Voiko terveysviranomainen tehdä asunnon tarkastuksen?",
    answer1: "Ei missään tapauksessa, asumisolot ovat ihmisten henkilökohtainen asia, eikä terveysviranomainen voi niihin puuttua",
    answer2: "Tarkastuksen voi tehdä vain asukkaiden aloitteesta/heidän luvallaan",
    answer3: "Asunnon tarkastus asukkaan tahdon vastaisesti voidaan tehdä vain, jos viranomaisella on perusteltu syy epäillä välittömiä toimia edellyttävää vakavaa terveyshaittaa",
    answer4: "Asuntojen tarkastus on rutiinitoimenpide ja voidaan tehdä kenen tahansa tekemän ilmoituksen perusteella myös ilman asukkaiden suostumusta. Kirjallisia lupia ei tarvita",
    correct: 3,
    source: "Terveydensuojelulaki 19.8.1994/763. 46 § (19.12.2014/1237) Asunnontarkastus. https://www.finlex.fi/fi/laki/ajantasa/1994/19940763#L10P46 ",
    },
    {
    question: "8.	Työterveyshuollon asiakkaasi soittaa sinulle ja kertoo rajuista ruokamyrkytyksen oireista. Hän kertoo syöneensä edellisenä iltana kalaa paikallisessa ravintolassa. Miten neuvot asiakasta?",
    answer1: "Annat kotihoito-ohjeet ruokamyrkytyksen hoitoon",
    answer2: "Annat kotihoito-ohjeet ja ohjeistat asiakasta tekemään ruokamyrkytysepäilyilmoituksen kunnan elintarvikevalvontaviranomaiselle",
    answer3: "Annat kotihoito-ohjeet, mutta kerrot ettet usko oireiden johtuvan ravintolan ruuasta, onhan Suomessa erittäin korkeatasoinen ja valvottu ravintolahygienia",
    answer4: "Annat kotihoito-ohjeet ja neuvot asiakasta vastaisuudessa välttämään kyseistä ravintolaa",
    correct: 2,
    source: "Elintarvikelaki 13.1.2006/23. 45 § Ruokamyrkytysten selvittäminen. https://www.finlex.fi/fi/laki/ajantasa/2006/20060023#L6P45", 
    },
    {
    question: "9.	Mitä tarkoittaa YVA-menettely?",
    answer1: "Ympäristölle vahingollisten aineiden turvallinen hävittäminen",
    answer2: "Ympäristölle vahingollisten aineiden käytön rajoittaminen",
    answer3: "Hankkeiden ympäristövaikutusten arviointia",
    answer4: "Ympäristölle vahingollisten aineiden alkuperän selvittäminen",
    correct: 3,
    source: "Ympäristö.fi. 21.11.2018. Hankkeiden YVA-menettely. https://www.ymparisto.fi/fi-FI/Asiointi_luvat_ja_ymparistovaikutusten_arviointi/Ymparistovaikutusten_arviointi/Hankkeiden_YVAmenettely",
    },
    {
    question: "10.  Mikä seuraavista on Työterveyslaitoksen (TTL:n) tehtävä?",
    answer1: "Harjoittaa ja edistää työn ja terveyden välisen vuorovaikutuksen tutkimusta.",
    answer2: "Suorittaa työpaikoilla tai muutoin työympäristössä esiintyvien terveydellisten vaarojen ja haittojen ehkäisemiseen ja poistamiseen liittyvää selvitys-, mittaus- ja palvelutoimintaa.",
    answer3: "Harjoittaa itsenäistä terveydenhuolto-, sairaanhoito- sekä laboratoriotoimintaa ammattitautien, työperäisten ja työhön liittyvien sairauksien toteamiseksi, hoitamiseksi ja ehkäisemiseksi sekä työkyvyn arvioimiseksi.",
    answer4: "Kaikki edelliset",
    correct: 4,
    source: "STM 2017. Sosiaali- ja terveysministeriön raportteja ja muistioita 2017/33, sivut 18-19. Työterveyslaitos TTL. http://julkaisut.valtioneuvosto.fi/bitstream/handle/10024/160504/Rap_ja_muistioita_2017_33.pdf?sequence=1&isAllowed=y",
    },
    {
        question: "11. Ympäristöterveydenhuollon ylin johto ja lainsäädännön valmistelu kuuluu kahdelle eri ministeriölle joista toinen on sosiaali- ja terveysministeriö (STM). Mikä on toinen?",
        answer1: "Maa- ja metsätalousministeriö (MMM)",
        answer2: "Ympäristöministeriö (YM)",
        answer3: "Työ- ja elinkeinoministeriö (TEM)",
        answer4: "Sisäministeriö (SM)",
        correct: 1,
        source: "AVI 15.2.2019. Ympäristöterveys. https://www.avi.fi/web/avi/ymparistoterveys;jsessionid=74452F59382E50918086660C576EF57D",
        },
        {
        question: "12. Kuka pitää yllä tartuntatautirekisteriä?",
        answer1: "AVI",
        answer2: "THL",
        answer3: "STM",
        answer4: "Kuntien sosiaali- ja terveyslautakunnat",
        correct: 2,
        source: "STM 2017. Ympäristöterveyden häiriötilanteiden hallinta ja yhteistyö sosiaali-ja terveysministeriön hallinnonalalla -yhteistyöverkosto. Verkoston loppuraportti, sivu 25.  http://julkaisut.valtioneuvosto.fi/bitstream/handle/10024/160504/Rap_ja_muistioita_2017_33.pdf?sequence=1&isAllowed=y",
        },
        {
        question: "13. Mikä on zoonoosi?",
        answer1: "Ihmisestä eläimeen tarttuva tauti",
        answer2: "Eläimestä ihmiseen tarttuva tauti",
        answer3: "Villieläimestä kotieläimeen tarttuva tauti",
        answer4: "Eläimestä ihmiseen ja myös päinvastoin tarttuva tauti",
        correct: 4,
        source: "Suomen Eläinlääkäriliitto. Zoonoosit. https://www.sell.fi/elainlaakarin-ammatti/elainlaakari-yhteiskunnassa/zoonoosit",
        },
        {
        question: "14.	Mikä on maailmanlaajuisesti eniten kuolemia aiheuttava tartuntatauti?",
        answer1: "Tuberkuloosi",
        answer2: "Malaria",
        answer3: "Alahengitystieinfektio",
        answer4: "AIDS",
        correct: 3,
        source: "WHO 2018. The top 10 causes of death. https://www.who.int/en/news-room/fact-sheets/detail/the-top-10-causes-of-death ",
        },
        {
        question: "15. Mikä on nosebo-ilmiö?",
        answer1: "Henkilö kokee altistuvansa jollekin haitalliselle",
        answer2: "Henkilö saa oireita sähköstä",
        answer3: "Henkilö saa oireita eri kemikaaleista",
        answer4: "Henkilö saa oireita rakennuksen epäpuhtauksista",
        correct: 1,
        source: "THL 28.2.2020. Miksi on tärkeää puhua erilaisista sisäilmaoireiluun vaikuttavista tekijöistä – ei vain sisäilman epäpuhtauksista? https://blogi.thl.fi/miksi-on-tarkeaa-puhua-erilaisista-sisailmaoireiluun-vaikuttavista-tekijoista-ei-vain-sisailman-epapuhtauksista/", 
        },
        {
        question: "16.	Mihin vuoteen mennessä Suomella on tavoite olla hiilineutraali?",
        answer1: "2030",
        answer2: "2035",
        answer3: "2040",
        answer4: "2050",
        correct: 2,
        source: "Ympäristöministeriö 19.2.2020. Ilmastolain uudistus. https://www.ym.fi/ilmastolaki", 
        },
        {
        question: "17.	Mitkä ovat ympäristöterveydenhuollon kaksi keskusvirastoa?",
        answer1: "Valvira ja Ruokavirasto",
        answer2: "Ympäristövirasto ja Hallintovirasto",
        answer3: "Terveydenhuoltovirasto ja Luontovirasto",
        answer4: "Maa- ja vesivirasto ja Maakuntavirasto",
        correct: 1,
        source: "AVI 15.2.2019. Ympäristöterveys. https://www.avi.fi/web/avi/ymparistoterveys#.WDMFPnrX7Y8",
        },
        {
        question: "18. Mitä tarkoittaa termi One health – Yhteinen terveys?",
        answer1: "Ihmisen ja ekosysteemin vaikutusta toisiinsa ja terveyteen",
        answer2: "Maailmanlaajuista ihmisten terveyttä",
        answer3: "Ihmisen, eläinten ja ympäristön laajaa, toisiinsa kietoutuvaa kokonaisuutta",
        answer4: "Ihmisen vaikutusta eläinten terveyteen",
        correct: 3,
        source: "Suomen Eläinlääkäriliitto. Yhteinen terveys. https://www.sell.fi/elainlaakarin-ammatti/elainlaakari-yhteiskunnassa/yksi-yhteinen-terveys", 
        },
        {
        question: "19.	Terveyden biodiversiteettihypoteesin mukaan ihmisen yksipuolistunut mikrobisto on yhteydessä:",
        answer1: "Tulehdusperäisten sairauksien kuten allergioiden ja astman lisääntymiseen",
        answer2: "Heikentyneeseen vastustuskykyyn",
        answer3: "Lihavuuden riskin lisääntymiseen",
        answer4: "Kaikkiin edellisiin",
        correct: 4,
        source: "THL 20.3.2019. Luonnon monimuotoisuus ja ihmisen terveys kulkevat käsi kädessä. https://blogi.thl.fi/luonnon-monimuotoisuus-ja-ihmisen-terveys-kulkevat-kasi-kadessa/",
        },
        {
        question: "20. Millä keinolla listeriabakteerilta voi välttyä?",
        answer1: "Huuhtomalla vihannekset",
        answer2: "Säilyttämällä kala alle 6 asteen lämpötilassa",
        answer3: "Kuumentamalla ruoka kiehuvaksi",
        answer4: "Juomalla pastöroimatonta maitoa",
        correct: 3,
        source: "Ruokavirasto. Listeriabakteeri. https://www.ruokavirasto.fi/henkiloasiakkaat/tietoa-elintarvikkeista/elintarvikkeiden-turvallisen-kayton-ohjeet/turvallisen-kayton-ohjeet/listeriabakteeri/",
        },
];

function createInner() {
    // making question/answer string and storing it to fullQuestion and then inputing whole thing to DOM with .innerHTML
    if (i == 0) { // display info if game hasn't started yet
        let beginning = "<h1>Peli sisältää kaksikymmentä monivalintakysymystä. Pelin päätyttyä näet oikeat vastaukset. Vastaa huolella!</h1>"
        document.getElementById('title').innerHTML = beginning;
    } else {
        document.getElementById('title').innerHTML = "";
    };
    let fullQuestion = "<h2>" + questions[i].question + "</h2><img id=\"terkkarikuva\" src=\"resources/img/terkkarikys.png\"><input type=\"radio\" name=\"question\" id=\"question1\" value=\"1\"><label for=\"question1\"> " + questions[i].answer1 + "</label><br><input type=\"radio\" name=\"question\" id=\"question2\" value=\"2\"><label for=\"question2\"> " + questions[i].answer2 + "</label><br><input type=\"radio\" name=\"question\" id=\"question3\" value=\"3\"><label for=\"question3\"> " + questions[i].answer3 + "</label><br><input type=\"radio\" name=\"question\" id=\"question4\" value=\"4\"><label for=\"question4\"> " + questions[i].answer4 + "</label><br><button onclick=\"nextQuestion()\">Seuraava</button>";
    document.getElementById('questions').innerHTML = fullQuestion;
};

createInner();

function nextQuestion() {
    if(document.getElementById("question1").checked == true || document.getElementById("question2").checked == true || document.getElementById("question3").checked == true || document.getElementById("question4").checked == true) {
        // clearing warning text if no option was selected
        document.getElementById('eivalittu').innerHTML = "";

        // Assign value of question to questionValue for evalution if answer is correct
        if(document.getElementById("question1").checked) {
            questionValue = document.getElementById("question1").value;
        } else if (document.getElementById("question2").checked) {
            questionValue = document.getElementById("question2").value;
        } else if (document.getElementById("question3").checked) {
            questionValue = document.getElementById("question3").value;
        } else if (document.getElementById("question4").checked) {
            questionValue = document.getElementById("question4").value;
        };

        // storing answer into storedAnswers
        storedAnswers.push(questionValue);

        // check if questionValue is same as correct answer number and increment score counter if so
        if(questionValue == questions[i].correct) {
            scoreCounter = scoreCounter + 1;
        };
        i++;
        
        // checking if all questions are answered and running calcResults if so
        if(questions.length <= i) {
            calcResults();
        } else {
            createInner();
        }
        
    } else {
        // if nothing is selected, update UI to notify user
        let eiValittu = "<h3>Valitse yksi vaihtoehdoista!</h3>";
        document.getElementById('eivalittu').innerHTML = eiValittu;
    }
    
};

function calcResults() {
    // load image based on results, init here:
    let imgload = ""
    let resultsText = ""
    if (scoreCounter < 15) {
        imgLoad = "<img src=\"resources/img/resultbad.png\"";
        resultsText = "Vielä on varaa parantaa!"
    } else {
        imgLoad = "<img src=\"resources/img/resultgood.png\"";
        resultsText = "Erinomainen tulos!"
    }
    
    // calculating and displaying results, adding "play again" and "näytä vastaukset" button
    let resultsHTML = "<h4>Tuloksesi: " + scoreCounter + "/" + questions.length + " Oikein. " + resultsText + "</h4>" + "<div id=\"results_centerer\"><button onclick=\"playAgain()\">Yritä uudestaan</button><button onclick=\"showCorrect()\">Oikeat vastaukset</button></div><div id=\"imagecenter\">" + imgLoad + "</div>";
    document.getElementById('questions').innerHTML = resultsHTML;
};

function playAgain() {
    // clear previous answers
    document.getElementById('right_answers').innerHTML = "";
    // reset counters
    i = 0;
    scoreCounter = 0;
    storedAnswers = [];
    createInner();
};

function showCorrect() {
    // erase previous results if already pressed:
    document.getElementById('right_answers').innerHTML = "";
    // adding table with questions and correct answers using for loop
    for (c = 0; c < questions.length; c++) {
        let dynamicID = "question" + c; // so each question has own id for css stylings (need for red/green bg changes)
        let insertQuestion = "<div><table style=\"width:100%\"><tr><th>" + questions[c].question + "</th></tr><tr><td id=" + dynamicID + "\q1\>" + questions[c].answer1 + "</td></tr><tr><td id=" + dynamicID + "\q2\>" + questions[c].answer2 + "</td></tr><tr><td id=" + dynamicID + "\q3\>" + questions[c].answer3 + "</td></tr><tr><td id=" + dynamicID + "\q4\>" + questions[c].answer4 + "</td></tr><tr><td>Lähde: " + questions[c].source + "</table></div>";
        document.getElementById('right_answers').innerHTML += insertQuestion;

        // label correct answer green and bold them
        if (questions[c].correct == 1) {
            document.getElementById(dynamicID+"q1").style.backgroundColor = "#86c486";
            document.getElementById(dynamicID+"q1").style.fontWeight = "700";
        } else if (questions[c].correct == 2) {
            document.getElementById(dynamicID+"q2").style.backgroundColor = "#86c486";
            document.getElementById(dynamicID+"q2").style.fontWeight = "700";
        } else if (questions[c].correct == 3) {
            document.getElementById(dynamicID+"q3").style.backgroundColor = "#86c486";
            document.getElementById(dynamicID+"q3").style.fontWeight = "700";
        } else if (questions[c].correct == 4) {
            document.getElementById(dynamicID+"q4").style.backgroundColor = "#86c486";
            document.getElementById(dynamicID+"q4").style.fontWeight = "700";
        }
        // label users wrong answers red
        if (storedAnswers[c] != questions[c].correct) {
            document.getElementById("question" + c + "q" + storedAnswers[c]).style.backgroundColor = "#ff5c5c";
        }
    }
};
