const description = [
    {
        name:'hunter',
        title: 'Hunter',
        description:`Hunter is a simple web game that I made while learning more deep about JavaScript HTML DOM. This game is not safe from cheating. You can cheat this game by simply type some code into the inspection console from your browser. The gameplay is simple with rock, paper, scissors mechanics to fight enemies. You also need to upgrade your equipment so you can defeat monsters easily.`,
        img:'resource/hunter.jpg',
        visit:`https://machive5.github.io/Hunter`,
        github:`https://github.com/Machive5/Hunter`
    },
    {
        name:'A-star',
        title: 'A* Algorithm Visualizer',
        description:`As the name suggests, A-star visualizer is a website that I created to visualize how A-star path finder algorithm works. On this website you can adjust how big your area is, placing some blocks, adding a start point, and adding an endpoint so you can see how A-star pathfinder tries to find the best route to get to the destination.`,
        img:'resource/astar.jpg',
        visit:`https://machive5.github.io/astar`,
        github:`https://github.com/Machive5/astar`
    },
    {
        name:'bookshelfAPI',
        title: 'Bookshelf API',
        description:`bookshelf API was actually my project when I was learning about backend developers at dicoding. This project is a final task to pass the exam in the course.`,
        img:'resource/restApi.png',
        github:`https://github.com/Machive5/bookshelfAPI`
    },
    {
        name:'bell',
        title: 'Bell Chat Bot',
        description:`Bell is a chatbot for WhatsApp. I plan for Bell to be able to give responses to everyone who texts her, provide some games to play, and offer useful features. In the future, I hope that Bell can become a helpful AI.`,
        img:'resource/wepik-export-20230617115658r34g.png'
    },
    {
        name:'rpgGame',
        title: 'RPG Game',
        description:`I actually want to make this project with my friend, but we are still in our own businesses. I'm really looking forward for this project done.`,
        img: 'resource/rpg.jpg'
    }
];


const crd = document.querySelectorAll('.crd');
const popup = document.getElementById("popup");
const close = document.querySelector('.close');

for (i=0;i<crd.length;i++){
    let elm = crd[i];
    crd[i].addEventListener("click", ()=>{
        const obj = description.find((e)=>{
            return e.name == elm.getAttribute('class').slice(4);
        });
        popup.getElementsByTagName('p')[0].innerText = obj.description;
        popup.getElementsByTagName('img')[0].setAttribute('src',`${obj.img}`);
        popup.getElementsByTagName('h5')[0].innerText = obj.title;

        if(obj.visit != undefined){
            popup.querySelector('.visit').setAttribute('onclick',`parent.open('${obj.visit}')`);
            popup.querySelector('.visit').style.display = 'block';
            popup.querySelector('.visit').style.paddingBottom = '1%';
        }else{popup.querySelector('.visit').style.display = 'none';}

        if(obj.github != undefined){
            popup.querySelector('.github').setAttribute('onclick',`parent.open('${obj.github}')`);
            popup.querySelector('.github').style.display = 'block';
            popup.querySelector('.github').style.paddingBottom = '1%';
        }else{popup.querySelector('.github').style.display = 'none';}

        popup.style.display = 'grid';
        popup.animate({
            opacity: '1',
        },{duration: 300, fill:"forwards", iterations: 1})
    });
}

close.addEventListener("click",()=>{
    popup.animate({
        opacity: '0',
    },{duration: 300, fill:"forwards", iterations: 1})
    setTimeout(()=>{popup.style.display = 'none';},300);
})
