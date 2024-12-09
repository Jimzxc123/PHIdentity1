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
        video: 'culturevideos/11.mp4',
        title: 'Kamayan: The Ultimate Filipino Feast | Community Stories'
    },
    {
        video: 'culturevideos/12.mp4',
        title: 'The Grandest Festival In the PHILIPPINES! SINULOG FESTIVAL 2023'
    },
    {
        video: 'culturevideos/13.mp4',
        title: 'Bayanihan: The Spirit Of Community'
    },
    {
        video: 'culturevideos/14.mp4',
        title: 'HARANA: A Self-Trace Documentary'
    },
    {
        video: 'culturevideos/15.mp4',
        title: 'Cockfighting in the Phillipines - A Deadly Billion Dollar Industry'
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

