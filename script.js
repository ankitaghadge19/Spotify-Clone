console.log("Welcome to spotify!");

//initialize the variables

let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {songName: "Seasons - Rival, Cadmium, Harley Bird", filePath: "Songs/1.mp3", coverPath: "Covers/cover1.jpg", songTime: "04:08"},
    {songName: "Mercy - Shawn Mendes", filePath: "Songs/2.mp3", coverPath: "Covers/cover2.jpg", songTime: "03:28"},
    {songName: "Better - Ananya Birla", filePath: "Songs/3.mp3", coverPath: "Covers/cover3.jpg", songTime: "04:08"},
    {songName: "Run Free - Deep Chills, IVIE", filePath: "Songs/4.mp3", coverPath: "Covers/cover4.jpg", songTime: "02:50"},
    {songName: "Wolves - Salena Gomez, Marshmello", filePath: "Songs/5.mp3", coverPath: "Covers/cover5.jpg", songTime: "03:17"},
    {songName: "Imagination - Shawn Mendes", filePath: "Songs/6.mp3", coverPath: "Covers/cover6.jpg", songTime: "03:37"},
    {songName: "We Don't Talk Anymore - Chaelie Puth, Salena Gomez ", filePath: "Songs/7.mp3", coverPath: "Covers/cover7.jpg", songTime: "03:37"},
    {songName: "Let Me Down Slowly - Alec Benjamin", filePath: "Songs/8.mp3", coverPath: "Covers/cover8.jpg", songTime: "02:49"},
    {songName: "Attention - Charlie Puth", filePath: "Songs/9.mp3", coverPath: "Covers/cover9.jpg", songTime: "03:28"},
    {songName: "Dusk Till Down - Zayn", filePath: "Songs/10.mp3", coverPath: "Covers/cover10.jpg", songTime: "03:55"}
    
]

songItem.forEach((element,i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timeStamp")[0].innerText = songs[i].songTime;
    

})

document.getElementsByClassName


// let audioElement = new Audio('Songs/1.mp3');
//  audioElement.play();  

//listen to events

//handle play/pause click
masterPlay.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1 ;

    
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity= 0 ;

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value= progress;
})

myProgressBar,addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=() =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=> {
        // console.log(e.target);
        makeAllPlays();
        

        if(audioElement.paused || audioElement.currentTime<=0){
            songIndex = parseInt( e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src= `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity= 1 ;
        
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else{
            songIndex = parseInt( e.target.id);
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            audioElement.src= `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
           
            audioElement.pause();
            gif.style.opacity= 0 ;
        
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
        }
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    
    if(songIndex >= 9){
        songIndex =0;
    }
    else{
        songIndex +=1;
    }

    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity= 1 ;
       
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    
    if(songIndex <= 0){
        songIndex =9;
    }
    else{
        songIndex -=1;
    }

    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity= 1 ;
       
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})


























// console.log("Welcome to spotify!");

// //initialize the variables

// let songIndex = 0;
// let audioElement = new Audio('Songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songItem = Array.from(document.getElementsByClassName('songItem'));
// let masterSongName = document.getElementById('masterSongName');


// let songs = [
//     {songName: "Seasons - Rival, Cadmium, Harley Bird", filePath: "Songs/1.mp3", coverPath: "Covers/cover1.jpg", songTime: "04:08"},
//     {songName: "Mercy - Shawn Mendes", filePath: "Songs/2.mp3", coverPath: "Covers/cover2.jpg", songTime: "03:28"},
//     {songName: "Better - Ananya Birla", filePath: "Songs/3.mp3", coverPath: "Covers/cover3.jpg", songTime: "04:08"},
//     {songName: "Run Free - Deep Chills, IVIE", filePath: "Songs/4.mp3", coverPath: "Covers/cover4.jpg", songTime: "02:50"},
//     {songName: "Wolves - Salena Gomez, Marshmello", filePath: "Songs/5.mp3", coverPath: "Covers/cover5.jpg", songTime: "03:17"},
//     {songName: "Imagination - Shawn Mendes", filePath: "Songs/6.mp3", coverPath: "Covers/cover6.jpg", songTime: "03:37"},
//     {songName: "We Don't Talk Anymore - Chaelie Puth, Salena Gomez ", filePath: "Songs/7.mp3", coverPath: "Covers/cover7.jpg", songTime: "03:37"},
//     {songName: "Let Me Down Slowly - Alec Benjamin", filePath: "Songs/8.mp3", coverPath: "Covers/cover8.jpg", songTime: "02:49"},
//     {songName: "Attention - Charlie Puth", filePath: "Songs/9.mp3", coverPath: "Covers/cover9.jpg", songTime: "03:28"},
//     {songName: "Dusk Till Down - Zayn", filePath: "Songs/10.mp3", coverPath: "Covers/cover10.jpg", songTime: "03:55"}
    
// ]

// songItem.forEach((element,i)=>{
//     console.log(element, i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
//     element.getElementsByClassName("timeStamp")[0].innerText = songs[i].songTime;
    

// })

// document.getElementsByClassName


// // let audioElement = new Audio('Songs/1.mp3');
// //  audioElement.play();  

// //listen to events

// //handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity= 1 ;

//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.add('fa-play-circle');
//         masterPlay.classList.remove('fa-pause-circle');
//         gif.style.opacity= 0 ;

//     }
// })

// audioElement.addEventListener('timeupdate', ()=>{
//     console.log('timeupdate');
//     //update seekbar
//     progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
//     // console.log(progress);
//     myProgressBar.value= progress;
// })

// myProgressBar,addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays=() =>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//        element.classList.remove('fa-pause-circle');
//        element.classList.add('fa-play-circle');

//     })

// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=> {
//         console.log(e.target);
//         makeAllPlays();
        
//         songIndex = parseInt( e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src= `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime=0;
//         audioElement.play();
//         gif.style.opacity= 1 ;
       
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
    
//     if(songIndex >= 9){
//         songIndex =0;
//     }
//     else{
//         songIndex +=1;
//     }

//     audioElement.src= `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     gif.style.opacity= 1 ;
       
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
    
// })

// document.getElementById('previous').addEventListener('click', ()=>{
    
//     if(songIndex <= 0){
//         songIndex =9;
//     }
//     else{
//         songIndex -=1;
//     }

//     audioElement.src= `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     gif.style.opacity= 1 ;
       
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
    
// })
