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
        video: 'cuisinevideos/31.mp4',
        title: 'Sinigang, Adobo, at Tinola | Saan Nagmula? Ating Alamin!'
    },
    {
        video: 'cuisinevideos/32.mp4',
        title: 'Lechon Baboy | History and Its Tradition'
    },
    {
        video: 'cuisinevideos/33.mp4',
        title: 'Lumpiang Shanghai: Origin & Nutrition fact | EATymology'
    },
    {
        video: 'cuisinevideos/34.mp4',
        title: 'Balut: The Filipino Culinary Adventure'
    },
    {
        video: 'cuisinevideos/35.mp4',
        title: 'The History of Sisig, The Philippines Favorite Comfort Food.'
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

