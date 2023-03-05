//music controll start
const music = new Audio('audio/16.mp3');
// music.play();
//music controll end
//all music in obj start
const songs = [
    {
    id: 1,
        songName: `On my Way <br>
                  <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
    id: 2,
        songName: `Alan Walker-Fade <br>
                  <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
    id: 3,
        songName: `Cartoon - On & on  <br>
                  <div class="subtitle">Daniel Levi</div>`,
        poster: "img/3.jpg"
    },
    {
    id: 4,
        songName: `Warriyo - Mortals <br>
                  <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg"
    },
    {
    id: 5,
        songName: `Ertugrul Gazi <br>
                  <div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg"
    },
    {
    id: 6,
        songName: `Elcronic Music <br>
                  <div class="subtitle">Electro</div>`,
        poster: "img/6.jpg"
    },
    {
    id: 7,
        songName: `Agar tum Sath Ho <br>
                  <div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg"
    },
    {
    id: 8,
        songName: `Suna Hai <br>
                  <div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg"
    },
    {
    id: 9,
        songName: `Dilber <br>
                  <div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg"
    },
    {
    id: 10,
        songName: `Duniya <br>
                  <div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg"
    },
    {
    id: 11,
        songName: `Lagdi Lahori di <br>
                  <div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg"
    },
    {
    id: 12,
        songName: `Pott Jatt Da <br>
                  <div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg"
    },
    {
    id: 13,
        songName: `Baarishein <br>
                  <div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg"
    },
    {
    id: 14,
        songName: `Vaaste <br>
                  <div class="subtitle">Dhuani Bhanushali</div>`,
        poster: "img/14.jpg"
    },
    {
    id: 15,
        songName: `Lut Gaya <br>
                  <div class="subtitle">Jubin nautiyal</div>`,
        poster: "img/15.jpg"
    },
    {
    id: 16,
        songName: `Tu Meri Jindgi Hai Tu <br>
                  <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpg"
    },
    {
    id: 17,
        songName: `Batao Yasd hai Tumko Wo Jab Dil Ko Churaya Tha <br>
                  <div class="subtitle">Rahat Fateh Ali</div>`,
        poster: "img/17.jpg"
    },
    {
    id: 18,
        songName: `Mere Dhol Judaiyan <br>
                  <div class="subtitle">Ali Sethi seha Gill</div>`,
        poster: "img/18.jpg"
    },
    {
    id: 19,
        songName: `Eh Munde Pagal Ne Saare <br>
                  <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/19.jpg"
    },
    {
    id: 20,
        songName: `Dunny 82k <br>
                  <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/20.jpg"
    },
    {
        id: 21,
        songName: `Naia Ashq Na Ho <br>
                  <div class="subtitle">Republic Day Walker</div>`,
        poster: "img/arjit_img/1.jpg"
    },
    {
        id: 22,
        songName: `Khairiyat (Sad)  <br>
                  <div class="subtitle">Chhichhore</div>`,
        poster: "img/arjit_img/2.jpg"
    },
    {
        id: 23,
        songName: `Desh Mere <br>
                  <div class="subtitle">Bhuj The Pride OfIndian</div>`,
        poster: "img/arjit_img/3.jpg"
    },
    {
        id: 24,
        songName: `Dhokha <br>
                  <div class="subtitle">Dhokha</div>`,
        poster: "img/arjit_img/4.jpg"
    },
    {
        id: 25,
        songName: `Tere Yaar Hoon Main <br>
                  <div class="subtitle">Sonu Ke Titi Ki Sweety</div>`,
        poster: "img/arjit_img/5.jpg"
    },
    {
        id: 26,
        songName: `Chunar <br>
                  <div class="subtitle">ABCD 2</div>`,
        poster: "img/arjit_img/6.jpg"
    },
    {
        id: 27,
        songName: `Galti se Mistake  <br>
                  <div class="subtitle">Jagga Jasoos</div>`,
        poster: "img/arjit_img/7.jpg"
    },
    {
        id: 28,
        songName: `Hamari Adhuri Kahani <br>
                  <div class="subtitle">Hamari Adhuri Kahani</div>`,
        poster: "img/arjit_img/8.jpg"
    },
    {
        id: 29,
        songName: `Neki ki Raah <br>
                  <div class="subtitle">Traffic</div>`,
        poster: "img/arjit_img/9.jpg"
    },
    {
        id: 30,
        songName: `Humdard <br>
                  <div class="subtitle">Ek Villain</div>`,
        poster: "img/arjit_img/10.jpg"
    },
    {
        id: 31,
        songName: `mere Yaaraa <br>
                  <div class="subtitle">Sooryavanshi</div>`,
        poster: "img/arjit_img/11.jpg"
    },
    {
        id: 32,
        songName: `Nashe Si Chadh Gayi <br>
                  <div class="subtitle">Befikre</div>`,
        poster: "img/arjit_img/12.jpg"
    },
    {
        id: 33,
        songName: `Ae Watan <br>
                  <div class="subtitle">Raazi</div>`,
        poster: "img/arjit_img/13.jpg"
    },
    {
        id: 44,
        songName: `Agar tum Saath ho <br>
                  <div class="subtitle">Tamasha</div>`,
        poster: "img/arjit_img/14.jpg"
    },
    {
        id: 35,
        songName: `Pachtaoge <br>
                  <div class="subtitle">Jaani ve</div>`,
        poster: "img/arjit_img/15.jpg"
    }
]


// playlis resonsive

let menu_sides = document.getElementsByClassName('menu_side')[0];
let xxx = document.getElementsByClassName('bi-x-lg')[0];
xxx.addEventListener("click", () => {
    menu_sides.style.display = "none"
})
// let menu_sides = document.getElementsByClassName('menu_side')[0];
let bilist = document.getElementsByClassName('bi-list')[0];
bilist.addEventListener("click", () => {
    menu_sides.style.display = "block"
})


// 


  // song array list
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

//all music in obj  end

// search
let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = ` <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>`
    search_results.appendChild(card);
});
let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_vale = as.textContent || as.innerHTML;
        
        if (text_vale.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }
        
        if (input.value == 0) {
            search_results.style.display = "none"
        } else {
            search_results.style.display = ""
        }
    }
})
// search
// music play start
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
    // masterPlay.classList.toggle('bi-stop-fill');
})
// music play end

//1. scroll button start
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 150;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 150;
})
//1. sroll button end

//2. scrll button start
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 150;
})
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 150;
})
// 2. scroll end
const makeAllplays = () => {
    Array.from(Document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-stop-fill')
        el.classList.remove('bi-play-fill')
    })
    Array.from(document.getElementsByClassName('playListPlay'))[index -1].classList.toggle('bi-stop-fill');
}

const makeallBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })

}

// music and title 
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title  = document.getElementById('title');
// console.log(index)
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=> {
    e.addEventListener('click', (el) => {
        
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`
        // music.play();
        poster_master_play.src = `img/${index}.jpg`
        
        if (music.paused || music.currentTime <= 0) {
            music.play();
            wave.classList.add('active1');
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
        } else {
            music.pause();
            wave.classList.remove('active1');
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
        }

        //
        download_music.href = `audio/${index}.mp3`;
        // 
        
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
        makeallBackground();
        Array.from(document.getElementsByClassName('songItem'))[index -1].style.background = 'black';
        // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';
        
        makeAllplays();
        el.target.classList.remove('bi-stop-fill');
        el.target.classList.add('bi-play-fill');
        el.target.classList.toggle('bi-stop-fill');
      
    })
})

//play timer
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60)
    let min2 = Math.floor(music_dur % 60)
    let min3 = ` ${min1}:${min2}`
    document.getElementById('currentEnd').innerText = min3 ;
    let sec1 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    let sec3 = ` ${sec1}:${sec2}`
    document.getElementById('currentStart').innerText = sec3;
    
    
    //// minut progressbar
    
    let seek = document.getElementById('seek');
    let bar2 = document.getElementById('bar2');
    let dot = document.getElementsByClassName('dot')[0];
    
    let progressBar = parseInt((music_curr / music_dur) * 100);
    bar2.style.width = progressBar +'%';
    dot.style.left = progressBar +'%';
    dot.style.background = red;

    /////
})

// input progressBar
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

//

// music valuem
let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_ber = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');
vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        
    } if (vol.value > 60) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        
    }
    let vol_a = vol.value;
    vol_ber.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100;
})

// music valuem

// next music button
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        // index += 21;
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    // console.log(index)
    music.src = `audio/${index}.mp3`
    // music.play();
    poster_master_play.src = `img/${index}.jpg`

    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    makeallBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background = 'black';
    // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';

    makeAllplays();
    el.target.classList.remove('bi-stop-fill');
    el.target.classList.add('bi-play-fill');
    el.target.classList.toggle('bi-stop-fill');
   
})
next.addEventListener('click', () => {
    index++;
    let ll = Array.from(document.getElementsByClassName('songItem')).length;
    if ( index > ll) {
        index = 1;
        // index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    // console.log(index)
    music.src = `audio/${index}.mp3`
    // music.play();
    poster_master_play.src = `img/${index}.jpg`

    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    makeallBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background = 'black';
    // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';

    makeAllplays();
    el.target.classList.remove('bi-stop-fill');
    el.target.classList.add('bi-play-fill');
    el.target.classList.toggle('bi-stop-fill');
   
})

// next music button

// 
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add("bi-repeat");
            shuffle.classList.remove("bi-vinyl-fill");
            shuffle.classList.remove("bi-shuffle");
            shuffle.innerHTML= 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove("bi-repeat");
            shuffle.classList.remove("bi-vinyl-fill");
            shuffle.classList.add("bi-shuffle");
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove("bi-repeat");
            shuffle.classList.add("bi-vinyl-fill");
            shuffle.classList.remove("bi-shuffle");
            shuffle.innerHTML = 'next';
            break;
    }
})

const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`
    music.play();
    poster_master_play.src = `img/${index}.jpg`

    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

    //
    download_music.href = `audio/${index}.mp3`;
    // 

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeallBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background = 'black';
    // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';

    makeAllplays();
    el.target.classList.remove('bi-stop-fill');
    el.target.classList.add('bi-play-fill');
    el.target.classList.toggle('bi-stop-fill');
}
const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`
    music.play();
    poster_master_play.src = `img/${index}.jpg`

    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

    //
    download_music.href = `audio/${index}.mp3`;
    // 

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeallBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background = 'black';
    // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';

    makeAllplays();
    el.target.classList.remove('bi-stop-fill');
    el.target.classList.add('bi-play-fill');
    el.target.classList.toggle('bi-stop-fill');
}
const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`
    music.play();
    poster_master_play.src = `img/${index}.jpg`

    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

    //
    download_music.href = `audio/${index}.mp3`;
    // 

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeallBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background = 'black';
    // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';

    makeAllplays();
    el.target.classList.remove('bi-stop-fill');
    el.target.classList.add('bi-play-fill');
    el.target.classList.toggle('bi-stop-fill');
}

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;
        switch (b) {
            case 'repeat':
            repeat_music();
                break;
            case 'next':
            next_music();
                break;
            case 'random':
            random_music();
                break;
        }
})
//
//
//
// 
