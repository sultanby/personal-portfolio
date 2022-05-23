let langResources = {
    "en": {
        "about": "about",
        "projects": "projects",
        "contact": "contact",
        "developer": "full stack developer",
        "running": "a few words about me",
        "greeting": "Hello<br />my name is<br />Yulia",
        "about-me": "I have a bachelor degree in biomaterials for medical application, there on final year i tried algoritmisation and programming course, excelled on it and came to conclusion about my new direction. After some career attempts and taken online courses i came to conclusion what programming is perfect for me because of both logic-requiring and creative challenges. I would to use my acquired soft-skills as patience, analytic thinking, team playing and also would like to extend my technical skills and help out on some interesting projects.",
        "location": "Prague",
        "background": "background",
        "bachelor": "UCT, Prague<br>Bachelor degree in Biomaterials for medical application",
        "master": "UCT, Prague<br>Master program in Bioinformatics",
        "harvard": "CS50 Harvard online course<br>CS50web Harvard online course",
        "languages": "languages",
        "languages-enumeration": "russian - native <br>czech - C1 <br>english - B2 <br>french - A1 <br>",
        "skills": "skills",
        "off": "off work",
        "hobbies": "table tennis, video editing, painting",
        "projects": "projects",
        "message": "feel free to send me a message <i>or let's be social</i>"
    },
    "cz": {
        "about": "o mně",
        "projects": "projekty",
        "contact": "kontakt",
        "developer": "full stack vývojářka",
        "running": "pár slov o mně",
        "greeting": "Čau<br />jmenuji se<br />Yulia",
        "about-me": "Mám bakalářský titul z biomateriálů pro medicínské využití, kde na posledním ročníku jsem uspěšně absolvovala volitelný předmět 'algoritmizace a programování' a padlo mi do oka nové zajímavé zaměření. Po několika kariérních pokusech mimo IT a absolvování on-line kurzů jsem dospěla k závěru, že programování je pro mě ideální, a to kvůli jak logickým, tak zároveň i kreativním výzvám. Ráda bych uplatnila své získané soft-skills jako trpělivost, analytické myšlení, týmové hraní a taký bych ráda uplatnila získané a rozšířila své technické dovednosti na zajímavých projektech.",
        "location": "Praha",
        "background": "vzdělání",
        "bachelor": "VŠCHT, Praha<br>bakalářské studium, obor Biomaterialy pro medicínské využití",
        "master": "VŠCHT, Praha<br>magisterské studium, obor Bioinformatika",
        "harvard": "CS50 Harvard online kurz<br>CS50web Harvard online kurz",
        "languages": "jazyky",
        "languages-enumeration": "ruština - rodilý mluvčí <br>čeština - C1 <br>angličtina - B2 <br>francouzština - A1 <br>",
        "skills": "dovednosti",
        "off": "volný čas",
        "hobbies": "stolní tenis, editace videa, malování",
        "projects": "projekty",
        "message": "kontaktujte mě na mailu <i>nebo v sociálních sítích</i>"
    }
};

function changeLang(lang){
    let textElements = document.querySelectorAll("[id^='text-']");
    for(let i = 0; i < textElements.length; i++){
        textElements[i].innerHTML = langResources[lang][textElements[i].id.substring(5)];
    }
}