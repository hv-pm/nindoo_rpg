alert("Nindō v1.0 -> 25/01/23\nUma ficha browser de RPG para amantes do universo de Kishimoto.\n\nNindō v1.1 -> Criação do backend para permitir criação de usuários e ferramentas para o mestre da mesa.\n\nEste projeto ainda está em desenvolvimento!\nO intuito foi exercer minhas recém habilidades de CSS ao máximo, conforme as ideias iam surgindo acabei incorporando e aprendendo a utilizar alguns recursos do Javascript.\nEventualmente este projeto será refeito com ferramentas mais adequadas conforme eu aprenda novas habilidades.");

const creditsBt = document.getElementById('credits-button');
const bioBt = document.getElementById('bio-button');
const bioImgBrowse = document.getElementById('bio-image-browse');
const bioImg = document.getElementById('bio-img');
const bioProfile = document.getElementById('profile-bio');
const bioExit = document.getElementById('profile-bg');
const villageBt = document.getElementById('village-button');
const villageChoose = document.getElementById('village-choose');

const charImgBrowse = document.getElementById('char-image-browse');
const charImg = document.getElementById('char-img');
const characterName = document.getElementById('name-input');
const sumImgBrowse = document.getElementById('summon-image-browse');
const sumImg = document.getElementById('summon-img');
const summonName = document.getElementById('summon-name-input');

const staTab = document.getElementById('stats');
const profTab = document.getElementById('proficiencies');
const jutTab = document.getElementById('jutsus');
const eleTab = document.getElementById('elements');
const sumTab = document.getElementById('summon');
const invTab = document.getElementById('inventory');

const konohaBt = document.getElementById('konoha-bt');
const kiriBt = document.getElementById('kiri-bt');
const sunaBt = document.getElementById('suna-bt');
const kumoBt = document.getElementById('kumo-bt');
const iwaBt = document.getElementById('iwa-bt');
const ameBt = document.getElementById('ame-bt');

const staBt = document.getElementById('stats-bt');
const profBt = document.getElementById('proficiencies-bt');
const jutBt = document.getElementById('jutsus-bt');
const eleBt = document.getElementById('elements-bt');
const sumBt = document.getElementById('summon-bt');
const invBt = document.getElementById('inventory-bt');

const scrollSFX = new Audio("sound/scroll-sfx.mp3"); //https://www.youtube.com/watch?v=-vXvmtF4-TE
const smokeSFX = new Audio("sound/smoke-sfx.mp3"); //https://www.myinstants.com/en/instant/smoke-clone-naruto-59408/

const leftSmoke1 = document.getElementById('smoke-left-1');
const leftSmoke2 = document.getElementById('smoke-left-2');
const leftSmoke3 = document.getElementById('smoke-left-3');
const upSmoke = document.getElementById('smoke-up');
const rightSmoke1 = document.getElementById('smoke-right-1');
const rightSmoke2 = document.getElementById('smoke-right-2');
const rightSmoke3 = document.getElementById('smoke-right-3');
const downSmoke = document.getElementById('smoke-down');
const smokeHide = document.getElementById('smoke-fx');

creditsBt.addEventListener("click", ()=> {
    alert("Desenvolvido por Hygor Vinícius @ https://github.com/hv-pm\n\nCréditos:\nNinja Academy @ https://comicvine.gamespot.com/images/1300-4229445\nSmoke SFX @ https://www.myinstants.com/en/instant/smoke-clone-naruto-59408/\nScroll SFX @ https://www.youtube.com/watch?v=-vXvmtF4-TE\nJapanese 3017 Font @ https://www.dafont.com/japanese-3017.font\nLevibrush Font @ https://www.dafont.com/levibrush.font");
    if (confirm ("Quer conhecer meu Git? ❤") == true){
        window.open("https://github.com/hv-pm", "_blank");
    }
});

charImgBrowse.addEventListener("change", uploadCharImg);
function uploadCharImg() {
    charImg.src = URL.createObjectURL(this.files[0]);
    charImg.onload = () => {
        URL.revokeObjectURL(charImg.src);
    }
}

bioImgBrowse.addEventListener("change", uploadBioImg);
function uploadBioImg() {
    bioImg.src = URL.createObjectURL(this.files[0]);
    bioImg.onload = () => {
        URL.revokeObjectURL(bioImg.src);
    }
}

sumImgBrowse.addEventListener("change", uploadSumImg);
function uploadSumImg() {
    sumImg.src = URL.createObjectURL(this.files[0]);
    sumImg.onload = () => {
        URL.revokeObjectURL(sumImg.src);
    }
}

bioBt.addEventListener("click", ()=> {
    bioProfile.style.display = 'flex';
    scrollSFX.play();
});

bioExit.addEventListener("click", ()=> {
    bioProfile.style.display = 'none';
});

villageBt.addEventListener("click", ()=> {
    if (villageBt.checked == false) {
        villageChoose.style.display = 'none';
    }
    else if (villageBt.checked == true){
        villageChoose.style.display = 'flex';
    }
});

konohaBt.addEventListener("click", ()=> {
    if (konohaBt.checked == true){
        kiriBt.checked = false;
        sunaBt.checked = false;
        iwaBt.checked = false;
        kumoBt.checked = false;
        ameBt.checked = false;
        villageBt.checked = false;
        villageChoose.style.display = 'none';
        villageBt.style.backgroundImage = 'url("img/konoha_banner.svg")';
        characterName.style.color = 'rgb(40, 131, 1)';
        characterName.style.textShadow = '0 0 5px rgb(0, 255, 13)';
        summonName.style.color = 'rgb(40, 131, 1)';
        summonName.style.textShadow = '0 0 5px rgb(0, 255, 13)';
    }
});

kiriBt.addEventListener("click", ()=> {
    if (kiriBt.checked == true){
        konohaBt.checked = false;
        sunaBt.checked = false;
        iwaBt.checked = false;
        kumoBt.checked = false;
        ameBt.checked = false;
        villageBt.checked = false;
        villageChoose.style.display = 'none';
        villageBt.style.backgroundImage = 'url("img/kiri_banner.svg")';
        characterName.style.color = 'rgb(0, 93, 116)';
        characterName.style.textShadow = '0 0 5px rgb(3, 255, 242)';
        summonName.style.color = 'rgb(0, 93, 116)';
        summonName.style.textShadow = '0 0 5px rgb(3, 255, 242)';
    }
});

sunaBt.addEventListener("click", ()=> {
    if (sunaBt.checked == true){
        konohaBt.checked = false;
        kiriBt.checked = false;
        iwaBt.checked = false;
        kumoBt.checked = false;
        ameBt.checked = false;
        villageBt.checked = false;
        villageChoose.style.display = 'none';
        villageBt.style.backgroundImage = 'url("img/suna_banner.svg")';
        characterName.style.color = 'rgb(161, 117, 4)';
        characterName.style.textShadow = '0 0 5px rgb(255, 221, 0)';
        summonName.style.color = 'rgb(161, 117, 4)';
        summonName.style.textShadow = '0 0 5px rgb(255, 221, 0)';
    }
});

iwaBt.addEventListener("click", ()=> {
    if (iwaBt.checked == true){
        konohaBt.checked = false;
        kiriBt.checked = false;
        sunaBt.checked = false;
        kumoBt.checked = false;
        ameBt.checked = false;
        villageBt.checked = false;
        villageChoose.style.display = 'none';
        villageBt.style.backgroundImage = 'url("img/iwa_banner.svg")';
        characterName.style.color = 'rgb(159, 8, 39)';
        characterName.style.textShadow = '0 0 5px rgb(255, 0, 0)';
        summonName.style.color = 'rgb(159, 8, 39)';
        summonName.style.textShadow = '0 0 5px rgb(255, 0, 0)';
    }
});

kumoBt.addEventListener("click", ()=> {
    if (kumoBt.checked == true){
        konohaBt.checked = false;
        kiriBt.checked = false;
        sunaBt.checked = false;
        iwaBt.checked = false;
        ameBt.checked = false;
        villageBt.checked = false;
        villageChoose.style.display = 'none';
        villageBt.style.backgroundImage = 'url("img/kumo_banner.svg")';
        characterName.style.color = 'rgb(83, 83, 83)';
        characterName.style.textShadow = '0 0 5px rgb(255, 255, 255)';
        summonName.style.color = 'rgb(83, 83, 83)';
        summonName.style.textShadow = '0 0 5px rgb(255, 255, 255)';
    }
});

ameBt.addEventListener("click", ()=> {
    if (ameBt.checked == true){
        konohaBt.checked = false;
        kiriBt.checked = false;
        sunaBt.checked = false;
        iwaBt.checked = false;
        kumoBt.checked = false;
        villageBt.checked = false;
        villageChoose.style.display = 'none';
        villageBt.style.backgroundImage = 'url("img/ame_banner.svg")';
        characterName.style.color = 'rgb(86, 51, 94)';
        characterName.style.textShadow = '0 0 5px rgb(254, 22, 184)';
        summonName.style.color = 'rgb(86, 51, 94)';
        summonName.style.textShadow = '0 0 5px rgb(254, 22, 184)';
    }
});


staBt.addEventListener("click", ()=> {
    if (staBt.checked == true){
        profBt.checked = false;
        jutBt.checked = false;
        eleBt.checked = false;
        sumBt.checked = false;
        invBt.checked = false;
        staTab.style.display = 'flex';
        profTab.style.display = 'none';
        jutTab.style.display = 'none';
        eleTab.style.display = 'none';
        sumTab.style.display = 'none';
        invTab.style.display = 'none';
    } else {
        staTab.style.display = 'none';
    }
    smokeSFX.play();
    leftSmoke1.style.animation = "";
    leftSmoke2.style.animation = "";
    leftSmoke3.style.animation = "";
    upSmoke.style.animation = "";
    rightSmoke1.style.animation = "";
    rightSmoke2.style.animation = "";
    rightSmoke3.style.animation = "";
    downSmoke.style.animation = "";
    smokeHide.style.animation = "";
    setTimeout(() => leftSmoke1.style.animation = "smoke-l1 0.7s forwards", 5);
    setTimeout(() => leftSmoke2.style.animation = "smoke-l2 0.7s forwards", 5);
    setTimeout(() => leftSmoke3.style.animation = "smoke-l3 0.7s forwards", 5);
    setTimeout(() => upSmoke.style.animation = "smoke-up 0.7s forwards", 5);
    setTimeout(() => rightSmoke1.style.animation = "smoke-r1 0.7s forwards", 5);
    setTimeout(() => rightSmoke2.style.animation = "smoke-r2 0.7s forwards", 5);
    setTimeout(() => rightSmoke3.style.animation = "smoke-r3 0.7s forwards", 5);
    setTimeout(() => downSmoke.style.animation = "smoke-down 0.7s forwards", 5);
    setTimeout(() => smokeHide.style.animation = "deactivate 0.7s forwards", 5);
});

profBt.addEventListener("click", ()=> {
    if (profBt.checked == true){
        staBt.checked = false;
        jutBt.checked = false;
        eleBt.checked = false;
        sumBt.checked = false;
        invBt.checked = false;
        profTab.style.display = 'flex';
        staTab.style.display = 'none';
        jutTab.style.display = 'none';
        eleTab.style.display = 'none';
        sumTab.style.display = 'none';
        invTab.style.display = 'none';
    } else {
        profTab.style.display = 'none';
    }
    smokeSFX.play();
    leftSmoke1.style.animation = "";
    leftSmoke2.style.animation = "";
    leftSmoke3.style.animation = "";
    upSmoke.style.animation = "";
    rightSmoke1.style.animation = "";
    rightSmoke2.style.animation = "";
    rightSmoke3.style.animation = "";
    downSmoke.style.animation = "";
    smokeHide.style.animation = "";
    setTimeout(() => leftSmoke1.style.animation = "smoke-l1 0.7s forwards", 5);
    setTimeout(() => leftSmoke2.style.animation = "smoke-l2 0.7s forwards", 5);
    setTimeout(() => leftSmoke3.style.animation = "smoke-l3 0.7s forwards", 5);
    setTimeout(() => upSmoke.style.animation = "smoke-up 0.7s forwards", 5);
    setTimeout(() => rightSmoke1.style.animation = "smoke-r1 0.7s forwards", 5);
    setTimeout(() => rightSmoke2.style.animation = "smoke-r2 0.7s forwards", 5);
    setTimeout(() => rightSmoke3.style.animation = "smoke-r3 0.7s forwards", 5);
    setTimeout(() => downSmoke.style.animation = "smoke-down 0.7s forwards", 5);
    setTimeout(() => smokeHide.style.animation = "deactivate 0.7s forwards", 5);
});

jutBt.addEventListener("click", ()=> {
    if (jutBt.checked == true){
        staBt.checked = false;
        profBt.checked = false;
        eleBt.checked = false;
        sumBt.checked = false;
        invBt.checked = false;
        jutTab.style.display = 'flex';
        staTab.style.display = 'none';
        profTab.style.display = 'none';
        eleTab.style.display = 'none';
        sumTab.style.display = 'none';
        invTab.style.display = 'none';
    } else {
        jutTab.style.display = 'none';
    }
    smokeSFX.play();
    leftSmoke1.style.animation = "";
    leftSmoke2.style.animation = "";
    leftSmoke3.style.animation = "";
    upSmoke.style.animation = "";
    rightSmoke1.style.animation = "";
    rightSmoke2.style.animation = "";
    rightSmoke3.style.animation = "";
    downSmoke.style.animation = "";
    smokeHide.style.animation = "";
    setTimeout(() => leftSmoke1.style.animation = "smoke-l1 0.7s forwards", 5);
    setTimeout(() => leftSmoke2.style.animation = "smoke-l2 0.7s forwards", 5);
    setTimeout(() => leftSmoke3.style.animation = "smoke-l3 0.7s forwards", 5);
    setTimeout(() => upSmoke.style.animation = "smoke-up 0.7s forwards", 5);
    setTimeout(() => rightSmoke1.style.animation = "smoke-r1 0.7s forwards", 5);
    setTimeout(() => rightSmoke2.style.animation = "smoke-r2 0.7s forwards", 5);
    setTimeout(() => rightSmoke3.style.animation = "smoke-r3 0.7s forwards", 5);
    setTimeout(() => downSmoke.style.animation = "smoke-down 0.7s forwards", 5);
    setTimeout(() => smokeHide.style.animation = "deactivate 0.7s forwards", 5);
});

eleBt.addEventListener("click", ()=> {
    if (eleBt.checked == true){
        staBt.checked = false;
        profBt.checked = false;
        jutBt.checked = false;
        sumBt.checked = false;
        invBt.checked = false;
        eleTab.style.display = 'flex';
        staTab.style.display = 'none';
        profTab.style.display = 'none';
        jutTab.style.display = 'none';
        sumTab.style.display = 'none';
        invTab.style.display = 'none';
    } else {
        eleTab.style.display = 'none';
    }
    smokeSFX.play();
    leftSmoke1.style.animation = "";
    leftSmoke2.style.animation = "";
    leftSmoke3.style.animation = "";
    upSmoke.style.animation = "";
    rightSmoke1.style.animation = "";
    rightSmoke2.style.animation = "";
    rightSmoke3.style.animation = "";
    downSmoke.style.animation = "";
    smokeHide.style.animation = "";
    setTimeout(() => leftSmoke1.style.animation = "smoke-l1 0.7s forwards", 5);
    setTimeout(() => leftSmoke2.style.animation = "smoke-l2 0.7s forwards", 5);
    setTimeout(() => leftSmoke3.style.animation = "smoke-l3 0.7s forwards", 5);
    setTimeout(() => upSmoke.style.animation = "smoke-up 0.7s forwards", 5);
    setTimeout(() => rightSmoke1.style.animation = "smoke-r1 0.7s forwards", 5);
    setTimeout(() => rightSmoke2.style.animation = "smoke-r2 0.7s forwards", 5);
    setTimeout(() => rightSmoke3.style.animation = "smoke-r3 0.7s forwards", 5);
    setTimeout(() => downSmoke.style.animation = "smoke-down 0.7s forwards", 5);
    setTimeout(() => smokeHide.style.animation = "deactivate 0.7s forwards", 5);
});

sumBt.addEventListener("click", ()=> {
    if (sumBt.checked == true){
        staBt.checked = false;
        profBt.checked = false;
        jutBt.checked = false;
        eleBt.checked = false;
        invBt.checked = false;
        sumTab.style.display = 'grid';
        staTab.style.display = 'none';
        profTab.style.display = 'none';
        jutTab.style.display = 'none';
        eleTab.style.display = 'none';
        invTab.style.display = 'none';
    } else {
        sumTab.style.display = 'none';
    }
    smokeSFX.play();
    leftSmoke1.style.animation = "";
    leftSmoke2.style.animation = "";
    leftSmoke3.style.animation = "";
    upSmoke.style.animation = "";
    rightSmoke1.style.animation = "";
    rightSmoke2.style.animation = "";
    rightSmoke3.style.animation = "";
    downSmoke.style.animation = "";
    smokeHide.style.animation = "";
    setTimeout(() => leftSmoke1.style.animation = "smoke-l1 0.7s forwards", 5);
    setTimeout(() => leftSmoke2.style.animation = "smoke-l2 0.7s forwards", 5);
    setTimeout(() => leftSmoke3.style.animation = "smoke-l3 0.7s forwards", 5);
    setTimeout(() => upSmoke.style.animation = "smoke-up 0.7s forwards", 5);
    setTimeout(() => rightSmoke1.style.animation = "smoke-r1 0.7s forwards", 5);
    setTimeout(() => rightSmoke2.style.animation = "smoke-r2 0.7s forwards", 5);
    setTimeout(() => rightSmoke3.style.animation = "smoke-r3 0.7s forwards", 5);
    setTimeout(() => downSmoke.style.animation = "smoke-down 0.7s forwards", 5);
    setTimeout(() => smokeHide.style.animation = "deactivate 0.7s forwards", 5);
});

invBt.addEventListener("click", ()=> {
    if (invBt.checked == true){
        staBt.checked = false;
        profBt.checked = false;
        jutBt.checked = false;
        sumBt.checked = false;
        eleBt.checked = false;
        invTab.style.display = 'flex';
        staTab.style.display = 'none';
        profTab.style.display = 'none';
        jutTab.style.display = 'none';
        sumTab.style.display = 'none';
        eleTab.style.display = 'none';
    } else {
        invTab.style.display = 'none';
    }
    smokeSFX.play();
    leftSmoke1.style.animation = "";
    leftSmoke2.style.animation = "";
    leftSmoke3.style.animation = "";
    upSmoke.style.animation = "";
    rightSmoke1.style.animation = "";
    rightSmoke2.style.animation = "";
    rightSmoke3.style.animation = "";
    downSmoke.style.animation = "";
    smokeHide.style.animation = "";
    setTimeout(() => leftSmoke1.style.animation = "smoke-l1 0.7s forwards", 5);
    setTimeout(() => leftSmoke2.style.animation = "smoke-l2 0.7s forwards", 5);
    setTimeout(() => leftSmoke3.style.animation = "smoke-l3 0.7s forwards", 5);
    setTimeout(() => upSmoke.style.animation = "smoke-up 0.7s forwards", 5);
    setTimeout(() => rightSmoke1.style.animation = "smoke-r1 0.7s forwards", 5);
    setTimeout(() => rightSmoke2.style.animation = "smoke-r2 0.7s forwards", 5);
    setTimeout(() => rightSmoke3.style.animation = "smoke-r3 0.7s forwards", 5);
    setTimeout(() => downSmoke.style.animation = "smoke-down 0.7s forwards", 5);
    setTimeout(() => smokeHide.style.animation = "deactivate 0.7s forwards", 5);
});