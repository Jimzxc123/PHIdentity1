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
        video: 'artvideos/01.mp4',
        title: 'Promoting Philippine Arts and Cultures'
    },
    {
        video: 'artvideos/02.mp4',
        title: 'Top Famous Artist in the Philippines '
    },
    {
        video: 'artvideos/03.mp4',
        title: 'Art tradition Ethnic, Spanish, American and Contemporary'
    },
    {
        video: 'artvideos/04.mp4',
        title: 'Contemporary Art Forms from the Regions'
    },
    {
        video: 'artvideos/05.mp4',
        title: 'Contemporary Art Forms from the Regions Part 2'
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

