//--------------------------------------system------------------------------
const scrX = parseInt(window.innerWidth);
const scrY = parseInt(window.innerHeight);
const percentage = scrY*15/100;

const onViewport = (elm)=>{
    const rect =  elm.getBoundingClientRect();
    return ((parseInt(rect.top) >= -percentage && parseInt(rect.top) <= scrY-percentage) || (parseInt(rect.bottom) >= percentage && parseInt(rect.bottom) <= scrY-percentage));
}

//------------------------------------variable------------------------------
const circleSVG = document.getElementById("visual");
const circles = circleSVG.getElementsByTagName("circle");
const divL = document.getElementById("home").getElementsByTagName('div')[0];
const divR = document.getElementById("home").getElementsByTagName('div')[1];

const octagons = document.getElementById("kdkja").getElementsByTagName("g");
const abtL = document.getElementById("aboutme").getElementsByTagName('div')[0];
const abtR = document.getElementById("aboutme").getElementsByTagName('div')[1];

const card1 = document.getElementById("skills").querySelector('.one').querySelectorAll('.wrapper');
const card2 = document.getElementById("skills").querySelector('.two').querySelectorAll('.wrapper');
const h1 = document.getElementById("skills").getElementsByTagName('h1')[0];

const prj = document.getElementById("projects").querySelectorAll('.crd');
const h3 = document.getElementById("projects").getElementsByTagName('h3');

const socialH1 = document.getElementById("social").getElementsByTagName('h1')[0];
const socialP = document.getElementById("social").getElementsByTagName('p')[0];
const socialCard = document.getElementById("social").querySelectorAll('.card');

const ham = document.querySelector('#ham');
const line1 = ham.querySelector("#line1");
const line2 = ham.querySelector("#line2");
const line3 = ham.querySelector("#line3");
const sdbr = document.getElementById("sidebar");

//-------------------------starting set up function-------------------------
    //----------------home screen set up 
const prepareCircleHomeScreen = (cir) =>{
    const choose = [-500,scrX,-500,scrY];
    const rad = scrX / 1075 * parseInt(cir.getAttribute('r'));
    cir.setAttribute('r',`${rad}`);
    const j = Math.floor(Math.random()*4);
    if(j==0 || j==1){
        cir.setAttribute('cx',`${(j==0)? choose[j]-rad*2:choose[j]+rad*2 }`);
        cir.setAttribute('cy',`${Math.floor(Math.random() * ((scrY + rad*2) + rad*2) - rad*2)}`);
    }
    else{
        cir.setAttribute('cy',`${(j==0)? choose[j]-rad*2:choose[j]+rad*2 }`);
        cir.setAttribute('cx',`${Math.floor(Math.random() * ((scrX + rad*2) + rad*2) - rad*2)}`);
    }

}

//---------------------------------animation function-------------------------------
    //----------------------------home animation
const homeCircleAnimation = (cir,dur)=>{ //-------------------for circle
    const choose = [-500,scrX,-500,scrY];
    const j = Math.floor(Math.random()*4);
    const rad = scrX / 1075 * parseInt(cir.getAttribute('r'));
    let x,y
    if(j==0 || j==1){
        x = (j==0)? choose[j]-rad*2:choose[j]+rad*2;
        y = Math.floor(Math.random() * ((scrY + rad*20 + rad*20) - rad*20));
    }
    else{
        y = (j==0)? choose[j]-rad*2:choose[j]+rad*2;
        x = Math.floor(Math.random() * ((scrX + rad*20) + rad*0) - rad*20);
    }
    cir.animate({
        cx:`${x}px`,
        cy:`${y}px`
    }, {duration: dur, fill:"forwards", iterations: 1});
}

        //------------------------------- On view animation-----------------------
const slideInAnimationForDiv = (divL,divR)=>{ //-------------div right left slide animation 
    divL.animate({
        marginLeft: `0px`,
    },{duration:1000, fill:'forwards', iterations: 1});
    divR.animate({
        marginLeft: `0px`,
    },{duration:1000, fill:'forwards', iterations: 1});
}

const slideUpDivInAnimation = (div)=>{
    div.animate({
        paddingTop: `0px`,
        opacity: `1`
    },{duration:1000, fill:'forwards', iterations: 1});
}

const aboutMeHexagonInAnimation = ()=>{//------------------hexagon
    for (let i=0; i<octagons.length;i++){
        octagons[i].animate({
            opacity: "1" 
        },{duration: 1000, fill:"forwards", iterations: 1});
    }
}

        //----------------------------- out view animation----------------------
const slideOutAnimationForDiv = (divL,divR)=>{//-------------div right left slide animation
    divL.animate({
        marginLeft: `-${parseInt(divL.offsetWidth) + 100}px`,
    },{duration:1000, fill:'forwards', iterations: 1});
    divR.animate({
        marginLeft: `${parseInt(divR.offsetWidth) + 100}px`,
    },{duration:1000, fill:'forwards', iterations: 1});
}

const slideUpDivOutAnimation = (div)=>{
    div.animate({
        paddingTop: `100px`,
        opacity: `0`
    },{duration:1000, fill:'forwards', iterations: 1});
}

const aboutMeHexagonOutAnimation = ()=>{//------------------------hexagon------------------
    for (let i=0; i<octagons.length;i++){
        octagons[i].animate({
            opacity:'0'
        },{duration: 1000, fill:"forwards", iterations: 1});
    }
}

//--------------------------------------------------------runner---------------------------------------------------------

//-----------------------------------------starting command---------------------------------------
divL.style.marginLeft = `-${parseInt(divL.offsetWidth) + 100}px`;
divR.style.marginLeft = `${parseInt(divR.offsetWidth) + 100}px`;

abtL.style.marginLeft = `-${parseInt(abtL.offsetWidth) + 100}px`;
abtR.style.marginLeft = `${parseInt(abtR.offsetWidth) + 100}px`;


for(let i=0;i<circles.length;i++){
    prepareCircleHomeScreen(circles[i]);
    let dur = Math.floor(Math.random() * (5000-3000)+3000);
    homeCircleAnimation(circles[i],dur);
    setInterval(()=>{
        homeCircleAnimation(circles[i],dur);
    },dur);
}

//-------------------------------------on viewport command-----------------------------------
const action = ()=>{
    if(onViewport(document.getElementById("home")) == true){
        slideInAnimationForDiv(divL,divR);
    }else{
        slideOutAnimationForDiv(divL,divR);
    }

    if(onViewport(document.getElementById("aboutme")) == true){
        aboutMeHexagonInAnimation();
        slideInAnimationForDiv(abtL,abtR);
    }
    else{
        aboutMeHexagonOutAnimation();
        slideOutAnimationForDiv(abtL,abtR);
    }

    if(onViewport(h1)){
        h1.animate({
            opacity:"1"
        },{duration: 1000, fill:"forwards", iterations: 1});
    }else{
        h1.animate({
            opacity:"0"
        },{duration: 1000, fill:"forwards", iterations: 1});
    }
    for (i=0;i<card1.length;i++){
        if(onViewport(card1[i].parentElement)){
            card1[i].animate({
                opacity: `1`,
                marginTop: `0%`
            },{duration:500, fill:'forwards', iterations: 1});
        }
        else{
            card1[i].animate({
                opacity: `0`,
                marginTop: `100px`
            },{duration:500, fill:'forwards', iterations: 1});
        }
    }
    for (i=0;i<card2.length;i++){
        if(onViewport(card2[i].parentElement)){
            card2[i].animate({
                opacity: `1`,
                marginTop: `0%`
            },{duration:500, fill:'forwards', iterations: 1});
        }
        else{
            card2[i].animate({
                opacity: `0`,
                marginTop: `100px`
            },{duration:500, fill:'forwards', iterations: 1});
        }
    }

    for (i=0;i<prj.length;i++){
        if(onViewport(prj[i])){
            prj[i].animate({
                opacity: `1`
            },{duration:1000, fill:'forwards', iterations: 1});
            prj[i].getElementsByTagName("img")[0].animate({
                marginTop: `0%`,
                opacity: `1`
            },{duration:1000, fill:'forwards', iterations: 1});
            prj[i].getElementsByTagName("h4")[0].animate({
                marginTop: `0%`,
                opacity: `1`
            },{duration:1000, fill:'forwards', iterations: 1});
        }
        else{
            prj[i].animate({
                opacity: `0`
            },{duration:1000, fill:'forwards', iterations: 1});
            prj[i].getElementsByTagName("img")[0].animate({
                marginTop: `100%`,
                opacity: `0`
            },{duration:1000, fill:'forwards', iterations: 1});
            prj[i].getElementsByTagName("h4")[0].animate({
                marginTop: `100%`,
                opacity: `0`
            },{duration:1000, fill:'forwards', iterations: 1});
        }
    }

    for (i=0;i<h3.length;i++){
        if(onViewport(h3[i])){
            h3[i].animate({
                opacity:"1"
            },{duration: 1000, fill:"forwards", iterations: 1});
        }
        else{
            h3[i].animate({
                opacity:"0"
            },{duration: 1000, fill:"forwards", iterations: 1});
        }
    }

    if (onViewport(socialH1)) {
        socialH1.animate({
            opacity:"1"
        },{duration: 1000, fill:"forwards", iterations: 1});
    }
    else{
        socialH1.animate({
            opacity:"0"
        },{duration: 1000, fill:"forwards", iterations: 1});
    }

    if (onViewport(socialP)) {
        socialP.animate({
            opacity:"1"
        },{duration: 1000, fill:"forwards", iterations: 1});
    }
    else{
        socialP.animate({
            opacity:"0"
        },{duration: 1000, fill:"forwards", iterations: 1});
    }

    if (onViewport(socialCard[0])){
        socialCard[0].animate({
            marginLeft: `0`,
            opacity: '1'
        },{duration:1000, fill:'forwards', iterations: 1});
    }
    else{
        socialCard[0].animate({
            marginLeft: `-${parseInt(divL.offsetWidth) + 100}px`,
            opacity: '0'
        },{duration:1000, fill:'forwards', iterations: 1});
    }

    if (onViewport(socialCard[1])){
        socialCard[1].animate({
            marginLeft: `0`,
            opacity: '1'
        },{duration:1000, fill:'forwards', iterations: 1});
    }
    else{
        socialCard[1].animate({
            marginLeft: `${parseInt(divL.offsetWidth) + 100}px`,
            opacity: '0'
        },{duration:1000, fill:'forwards', iterations: 1});
    }
}

action();

slideInAnimationForDiv(divL,divR);
document.addEventListener('scroll',()=>{
    action();
});

// ------------------------------------------sidebar animation--------------------------------------
let clicked = false;
ham.addEventListener('click',()=>{
    const sdbrSize = sdbr.getBoundingClientRect();
    if(clicked == false){
        sdbr.animate({
            right:`0%`
        },{duration:500, fill:'forwards', iterations: 1});
        ham.animate({
            right:`${sdbrSize.width + (scrX*5/100)}px`
        },{duration:500, fill:'forwards', iterations: 1});
        line1.animate({
            rotate: '45deg',
            transform:'translateX(49.5%) translateY(55.5%)'
        },{duration:500, fill:'forwards', iterations: 1});
        line2.animate({
            opacity: '0'
        },{duration:500, fill:'forwards', iterations: 1});
        line3.animate({
            rotate: '-45deg',
            transform:'translateX(36.5%) translateY(44.5%)'
        },{duration:500, fill:'forwards', iterations: 1});
        clicked = true;
    }else{
        sdbr.animate({
            right:`min(-40vw, -192px)`
        },{duration:500, fill:'forwards', iterations: 1});
        ham.animate({
            right:'5%'
        },{duration:500, fill:'forwards', iterations: 1});
        line1.animate({
            rotate: '0deg',
            transform:'translateX(0%) translateY(0%)'
        },{duration:500, fill:'forwards', iterations: 1});
        line2.animate({
            opacity: '1'
        },{duration:500, fill:'forwards', iterations: 1});
        line3.animate({
            rotate: '0deg',
            transform:'translateX(0%) translateY(0%)'
        },{duration:500, fill:'forwards', iterations: 1});
        clicked = false;
    }
});

