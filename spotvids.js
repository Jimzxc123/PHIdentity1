const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});


const vidlist = [
    {
        video: 'spotvideos/21.mp4',
        title: 'MT. Mayon Volcano | Danger Zone'
    },
    {
        video: 'spotvideos/22.mp4',
        title: 'Boracay: Most Beautiful Tourist Spot and Its History'
    },
    {
        video: 'spotvideos/23.mp4',
        title: 'Chocolate Hills: History in Philippines'
    },
    {
        video: 'spotvideos/24.mp4',
        title: 'Soar Over the Lush Rice Terraces of the Philippines | National Geographic'
    },
    {
        video: 'spotvideos/25.mp4',
        title: 'Palawan: The History of our Islands |Philippines Archipelago.'
    },
    
]

const playlist = [...new Set(vidlist.map((item) => {
    return item
}))]


document.getElementById('list-play').innerHTML = playlist.map((item) => {
    var { video, title } = item

    return (
        " <div class='list'>" +
        " <video class='list-video' src='" + video + "'>" + " </video>" +
        " <h5 class='list-title'>" + title + " </h5>" +
        "</div>"
    )
}).join('')


let listPlay = document.querySelectorAll('.list-play .list')

console.log(listPlay.length + ' count')



listPlay.forEach(playl => {
    playl.onclick = () => {
        listPlay.forEach(remove => {
            remove.classList.remove('active')
        })
        playl.classList.add('active')
        let playL_src = playl.querySelector('.list-video').src
        console.log('playL_src'+playL_src)
        document.querySelector('.main-video').src = playL_src
        document.querySelector('.main-video').play()


        let playL_title = playl.querySelector('.list-title').innerText
        console.log('playL_title'+playL_title)
        document.querySelector('.main-title').innerText = playL_title

    }
})

