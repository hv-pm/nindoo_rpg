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

const bioTxt = document.getElementById('bio-txt');
const type = document.getElementById('type');
const rank = document.getElementById('rank');
const weaponName = document.getElementById('weapon-name');
const weaponDice = document.getElementById('weapon-dice');
const weaponDesc = document.getElementById('weapon-desc');
const armorName = document.getElementById('armor-name');
const armorClass = document.getElementById('armor-class');
const armorDesc = document.getElementById('armor-desc');
const holsterName = document.getElementById('holster-name');
const holsterDice = document.getElementById('holster-dice');
const holsterQnt = document.getElementById('holster-quantity');
const holsterDesc = document.getElementById('holster-desc');
const charHp = document.getElementById('hp-txt');
const charCh = document.getElementById('ch-txt');
const charLevel = document.getElementById('level');
const charExp = document.getElementById('exp');
const str = document.getElementById('STR');
const strMod = document.getElementById('str-mod');
const int = document.getElementById('INT');
const intMod = document.getElementById('int-mod');
const dex = document.getElementById('DEX');
const dexMod = document.getElementById('dex-mod');
const con = document.getElementById('CON');
const conMod = document.getElementById('con-mod');
const cha = document.getElementById('CHA');
const chaMod = document.getElementById('cha-mod');
const wis = document.getElementById('WIS');
const wisMod = document.getElementById('wis-mod');
const tai = document.getElementById('TAI');
const buki = document.getElementById('BUKI');
const gen = document.getElementById('GEN');
const nin = document.getElementById('NIN');
const bunshin = document.getElementById('BUNSHIN');
const konbi = document.getElementById('KONBI');
const fuuin = document.getElementById('FUUIN');
const kugutsu = document.getElementById('KUGUTSU');
const kin = document.getElementById('KIN');
const hi = document.getElementById('HI');
const yuugoo = document.getElementById('YUUGOO');
const nintai = document.getElementById('NINTAI');
const tansaku = document.getElementById('TANSAKU');
const kinko = document.getElementById('KINKO');
const saisei = document.getElementById('SAISEI');
const kyuuin = document.getElementById('KYUUIN');
const jutsuTxt = document.getElementById('jutsu-txt');
const water = document.getElementById('water');
const fire = document.getElementById('fire');
const wind = document.getElementById('wind');
const lightning = document.getElementById('lightning');
const earth = document.getElementById('earth');
const yin = document.getElementById('yin');
const yang = document.getElementById('yang');
const yinyang = document.getElementById('yinyang');
const sumName = document.getElementById('summon-name-input');
const sumStr = document.getElementById('summon-STR');
const sumInt = document.getElementById('summon-INT');
const sumDex = document.getElementById('summon-DEX');
const sumCon = document.getElementById('summon-CON');
const sumCha = document.getElementById('summon-CHA');
const sumWis = document.getElementById('summon-WIS');
const sumProfName = document.getElementById('summon-proficiency-input');
const sumProfValue = document.getElementById('summon-proficiency-value');
const sumWeaponDice = document.getElementById('summon-weapon');
const sumArmorClass = document.getElementById('summon-armor-class');
const sumHp = document.getElementById('summon-hp-txt');
const sumCh = document.getElementById('summon-ch-txt');
const sumLevel = document.getElementById('summon-level');
const sumExp = document.getElementById('summon-exp');
const hpPillQnt = document.getElementById('i-1-qnt');
const hpPillDesc = document.getElementById('i-1-desc');
const chPillQnt = document.getElementById('i-2-qnt');
const chPillDesc = document.getElementById('i-2-desc');
const missionItemName = document.getElementById('i-3');
const missionItemQnt = document.getElementById('i-3-qnt');
const missionItemDesc = document.getElementById('i-3-desc');
const retreatName = document.getElementById('i-4');
const retreatQnt = document.getElementById('i-4-qnt');
const retreatDesc = document.getElementById('i-4-desc');
const miscFirstName = document.getElementById('i-5');
const miscFirstQnt = document.getElementById('i-5-qnt');
const miscFirstDesc = document.getElementById('i-5-desc');
const miscSecondName = document.getElementById('i-6');
const miscSecondQnt = document.getElementById('i-6-qnt');
const miscSecondDesc = document.getElementById('i-6-desc');
const miscThirdName = document.getElementById('i-7');
const miscThirdQnt = document.getElementById('i-7-qnt');
const miscThirdDesc = document.getElementById('i-7-desc');
const miscFourthName = document.getElementById('i-8');
const miscFourthQnt = document.getElementById('i-8-qnt');
const miscFourthDesc = document.getElementById('i-8-desc');
const money = document.getElementById('money');

const saveBt = document.getElementById('saveBt');
saveBt.addEventListener("click", ()=>{
    var data = {
        "charName":characterName.value,
        "konohagakure":konohaBt.checked,
        "kirigakure":kiriBt.checked,
        "sunagakure":sunaBt.checked,
        "iwagakure":iwaBt.checked,
        "kumogakure":kumoBt.checked,
        "amegakure":ameBt.checked,
        "bio":bioTxt.value,
        "type":type.value,
        "rank":rank.value,
        "weaponName":weaponName.value,
        "weaponDice":weaponDice.value,
        "weaponDesc":weaponDesc.value,
        "armorName":armorName.value,
        "armorClass":armorClass.value,
        "armorDesc":armorDesc.value,
        "holserName":holsterName.value,
        "holsterDice":holsterDice.value,
        "holsterQnt":holsterQnt.value,
        "holsterDesc":holsterDesc.value,
        "charHp":charHp.value,
        "charCh":charCh.value,
        "charLevel":charLevel.value,
        "charExp":charExp.value,
        "charStr":str.value,
        "charStrMod":strMod.value,
        "charInt":int.value,
        "charIntMod":intMod.value,
        "charDex":dex.value,
        "charDexMod":dexMod.value,
        "charCon":con.value,
        "charConMod":conMod.value,
        "charCha":cha.value,
        "charChaMod":chaMod.value,
        "charWis":wis.value,
        "charWisMod":wisMod.value,
        "taijutsu":tai.value,
        "bukijutsu":buki.value,
        "genjutsu":gen.value,
        "ninjutsu":nin.value,
        "bunshinjutsu":bunshin.value,
        "konbijutsu":konbi.value,
        "fuuinjutsu":fuuin.value,
        "kugutsujutsu":kugutsu.value,
        "kinjutsu":kin.value,
        "hijutsu":hi.value,
        "yuugoojutsu":yuugoo.value,
        "nintaijutsu":nintai.value,
        "tansakujutsu":tansaku.value,
        "kinkojutsu":kinko.value,
        "saiseijutsu":saisei.value,
        "kyuuinjutsu":kyuuin.value,
        "jutsuTxt":jutsuTxt.value,
        "water":water.checked,
        "fire":fire.checked,
        "wind":wind.checked,
        "lightning":lightning.checked,
        "earth":earth.checked,
        "yin":yin.checked,
        "yang":yang.checked,
        "yinyang":yinyang.checked,
        "sumName":sumName.value,
        "sumStr":sumStr.value,
        "sumInt":sumInt.value,
        "sumDex":sumDex.value,
        "sumCon":sumCon.value,
        "sumCha":sumCha.value,
        "sumWis":sumWis.value,
        "sumProfName":sumProfName.value,
        "sumProfValue":sumProfValue.value,
        "sumWeaponDice":sumWeaponDice.value,
        "sumArmorClass":sumArmorClass.value,
        "sumHp":sumHp.value,
        "sumCh":sumCh.value,
        "sumLevel":sumLevel.value,
        "sumExp":sumExp.value,
        "hpPillQnt":hpPillQnt.value,
        "hpPillDesc":hpPillDesc.value,
        "chPillQnt":chPillQnt.value,
        "chPillDesc":chPillDesc.value,
        "missionItemName":missionItemName.value,
        "missionItemQnt":missionItemQnt.value,
        "missionItemDesc":missionItemDesc.value,
        "retreatName":retreatName.value,
        "retreatQnt":retreatQnt.value,
        "retreatDesc":retreatDesc.value,
        "miscFirstName":miscFirstName.value,
        "miscFirstQnt":miscFirstQnt.value,
        "miscFirstDesc":miscFirstDesc.value,
        "miscSecondName":miscSecondName.value,
        "miscSecondQnt":miscSecondQnt.value,
        "miscSecondDesc":miscSecondDesc.value,
        "miscThirdName":miscThirdName.value,
        "miscThirdQnt":miscThirdQnt.value,
        "miscThirdDesc":miscThirdDesc.value,
        "miscFourthName":miscFourthName.value,
        "miscFourthQnt":miscFourthQnt.value,
        "miscFourthDesc":miscFourthDesc.value,
        "money":money.value
    }
    var json = JSON.stringify(data);
    json = [json];
    var blob = new Blob(json, { type: "text/plain;charset=utf-8" });
    var url = window.URL || window.webkitURL;
    link = url.createObjectURL(blob);
    var a = document.createElement("a");
    a.download = "myNinja.json";
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    alert("Personagem guardado no arquivo 'myNinja.json'");
})

const loadBt = document.getElementById('loadBt');
loadBt.addEventListener("change", loadCharacter);
function loadCharacter() {
    var file = URL.createObjectURL(this.files[0]);
    file.onload = () => {
        URL.revokeObjectURL(file);
    }
    fetch(file).then((response) =>{
        response.json().then((data) =>{
            characterName.value = data.charName;
            konohaBt.checked = data.konohagakure;
            kiriBt.checked = data.kirigakure;
            sunaBt.checked = data.sunagakure;
            iwaBt.checked = data.iwagakure;
            kumoBt.checked = data.kumogakure;
            ameBt.checked = data.amegakure;
            if(konohaBt.checked == true){
                konohaBt.checked = false;
                konohaBt.click();
            } else if(kiriBt.checked == true){
                kiriBt.checked = false;
                kiriBt.click();
            } else if(sunaBt.checked == true){
                sunaBt.checked = false;
                sunaBt.click();
            } else if(iwaBt.checked == true){
                iwaBt.checked = false;
                iwaBt.click();
            } else if(kumoBt.checked == true){
                kumoBt.checked = false;
                kumoBt.click();
            } else if(ame.checked == true){
                ame.checked = false;
                ame.click();
            }
            bioTxt.value = data.bio;
            type.value = data.type;
            rank.value = data.rank;
            weaponName.value = data.weaponName;
            weaponDice.value = data.weaponDice; 
            weaponDesc.value = data.weaponDesc; 
            armorName.value = data.armorName; 
            armorClass.value = data.armorClass; 
            armorDesc.value = data.armorDesc; 
            holsterName.value = data.holserName; 
            holsterDice.value = data.holsterDice; 
            holsterQnt.value = data.holsterQnt; 
            holsterDesc.value = data.holsterDesc; 
            charHp.value = data.charHp; 
            charCh.value = data.charCh; 
            charLevel.value = data.charLevel; 
            charExp.value = data.charExp; 
            str.value = data.charStr; 
            strMod.value = data.charStrMod; 
            int.value = data.charInt; 
            intMod.value = data.charIntMod; 
            dex.value = data.charDex; 
            dexMod.value = data.charDexMod; 
            con.value = data.charCon; 
            conMod.value = data.charConMod; 
            cha.value = data.charCha; 
            chaMod.value = data.charChaMod; 
            wis.value = data.charWis; 
            wisMod.value = data.charWisMod; 
            tai.value = data.taijutsu; 
            buki.value = data.bukijutsu; 
            gen.value = data.genjutsu; 
            nin.value = data.ninjutsu; 
            bunshin.value = data.bunshinjutsu; 
            konbi.value = data.konbijutsu; 
            fuuin.value = data.fuuinjutsu; 
            kugutsu.value = data.kugutsujutsu; 
            kin.value = data.kinjutsu; 
            hi.value = data.hijutsu; 
            yuugoo.value = data.yuugoojutsu; 
            nintai.value = data.nintaijutsu; 
            tansaku.value = data.tansakujutsu; 
            kinko.value = data.kinkojutsu; 
            saisei.value = data.saiseijutsu; 
            kyuuin.value = data.kyuuinjutsu; 
            jutsuTxt.value = data.jutsuTxt; 
            water.checked = data.water; 
            fire.checked = data.fire; 
            wind.checked = data.wind; 
            lightning.checked = data.lightning; 
            earth.checked = data.earth; 
            yin.checked = data.yin; 
            yang.checked = data.yang; 
            yinyang.checked = data.yinyang; 
            sumName.value = data.sumName; 
            sumStr.value = data.sumStr; 
            sumInt.value = data.sumInt; 
            sumDex.value = data.sumDex; 
            sumCon.value = data.sumCon; 
            sumCha.value = data.sumCha; 
            sumWis.value = data.sumWis; 
            sumProfName.value = data.sumProfName; 
            sumProfValue.value = data.sumProfValue; 
            sumWeaponDice.value = data.sumWeaponDice; 
            sumArmorClass.value = data.sumArmorClass; 
            sumHp.value = data.sumHp; 
            sumCh.value = data.sumCh; 
            sumLevel.value = data.sumLevel; 
            sumExp.value = data.sumExp; 
            hpPillQnt.value = data.hpPillQnt; 
            hpPillDesc.value = data.hpPillDesc; 
            chPillQnt.value = data.chPillQnt; 
            chPillDesc.value = data.chPillDesc; 
            missionItemName.value = data.missionItemName; 
            missionItemQnt.value = data.missionItemQnt; 
            missionItemDesc.value = data.missionItemDesc; 
            retreatName.value = data.retreatName; 
            retreatQnt.value = data.retreatQnt; 
            retreatDesc.value = data.retreatDesc; 
            miscFirstName.value = data.miscFirstName; 
            miscFirstQnt.value = data.miscFirstQnt; 
            miscFirstDesc.value = data.miscFirstDesc; 
            miscSecondName.value = data.miscSecondName; 
            miscSecondQnt.value = data.miscSecondQnt; 
            miscSecondDesc.value = data.miscSecondDesc; 
            miscThirdName.value = data.miscThirdName; 
            miscThirdQnt.value = data.miscThirdQnt; 
            miscThirdDesc.value = data.miscThirdDesc; 
            miscFourthName.value = data.miscFourthName; 
            miscFourthQnt.value = data.miscFourthQnt; 
            miscFourthDesc.value = data.miscFourthDesc;
            money.value = data.money;
        })
    })
}
