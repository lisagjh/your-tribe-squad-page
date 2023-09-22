//Links
const links = [
    'https://www.linkedin.com/in/mira%C3%A7-murt-a55296195/',
    'https://www.instagram.com/miracc__m/',
    'https://github.com/miracc38',
    'https://www.youtube.com/channel/UCHaTiS9uXEJTW1zE3TFH0sQ',
    //****************************************************//
    'https://koeenm.github.io/your-tribe-profile-card/', //Koen
    'https://rubenerhardt.github.io/your-tribe-profile-card/', //Ruben
    'Https://ryank2004.github.io/your-tribe-profile-card/', //Ryan
    'http://zainablfz.github.io/your-tribe-profile-card/', //Zainab
    'https://saschavanvliet.github.io/your-tribe-profile-card/', //Sascha
    'https://treppord.github.io/your-tribe-profile-card/', //Jasper
    'https://miracc38.github.io/your-tribe-profile-card/', //Mirac
    'https://naddybs.github.io/your-tribe-profile-card/', //Nadira
    'https://daan645.github.io/your-tribe-profile-card-2/', //Daan
    'https://tomdeeterink1.github.io/your-tribe-profile-card/', //Tom
    'https://lisagjh.github.io/your-tribe-profile-card/profilecard-versie-2/versie2.html', //Lisa
    'https://annevd.github.io/your-tribe-profile-card/', //Anne
    'https://yujing-student.github.io/your-tribe-profile-card/', //Yu Jing
    'https://samarafelladina.github.io/your-tribe-profile-card/', //Samara
    'https://rileyesther.github.io/your-tribe-profile-card/', //Riley
    'https://akikosophia.github.io/your-tribe-profile-card/', //Akiko
    'https://bibekma.github.io/your-tribe-profile-card/visitekaartje2/', //Bibek
    'https://nadirelm.github.io/your-tribe-profile-card/', //Nadir
    '',
];

function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedLink = links[randomIndex];
    window.location.href = selectedLink;
}

const randomButton = document.getElementById('randomButton');
randomButton.addEventListener('click', getRandomLink);


const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const image = document.getElementById('door');
// image.src = 'assets/door-nacht.png';

toggle.onclick = function (){
    toggle.classList.toggle('active');
    body.classList.toggle('active');

    if(body.classList.contains("active")){ //als de body de class active heeft, dan plaatje van de deur vervangen. bron https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
        image.src = 'assets/door-nacht.png';
    }else{ //er is geen class active, dan weer het gewone deur plaatje
        image.src = 'assets/door.png';
    }
}