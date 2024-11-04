var arr = [
    {songName:"Dynamite", url:"./songs/BTS-Dynamite.mp3", img:"./images/dynamite.webp",duration:"3.21"},
    {songName:"Butter", url:"./songs/BTS-Butter.mp3", img:"./images/butter.webp",duration:"2.45"},
    {songName:"Boy with luv", url:"./songs/BTS-boy with luv.mp3", img:"./images/bts-halsey.webp" ,duration:"3.48"},
    {songName:"Lifes goes on", url:"./songs/Life-Goes-On_BTS.mp3", img:"./images/bts-life.webp" ,duration:"3.26"},
    {songName:"Fake love", url:"./songs/BTS-fake love.mp3", img:"./images/bts-Fake.webp",duration:"5.16"},
    {songName:"Run bts", url:"./songs/BTS-Run-BTS.mp3", img:"./images/bts-run.webp",duration:"3.22"},
    {songName:"Yet to come", url:"./songs/BTS-Yet-To-Com-MV.mp3", img:"./images/yet-to-come.webp",duration:"4.40"},
    {songName:"Permission to dance", url:"./songs/BTS-Permission-to-Dance.mp3", img:"./images/bts-permission.webp",duration:"4.59"},
]
const allSongs = document.querySelector("#all-songs")
const poster =  document.querySelector("#left")
const play = document.querySelector("#play")
const backward = document.querySelector("#backward")
const forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction() {
    var clutter = "";
    arr.forEach(function(elem,idx){
        clutter += `<div class="song-card" id=${idx}>
    <div class="part-1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>${elem.duration}</h6>
    </div>`
    })

    allSongs.innerHTML = clutter
    
    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    mainFunction()
    audio.play()
})

var flag = 0

play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click",function(){
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click",function(){
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})