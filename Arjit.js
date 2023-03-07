//music controll start
const music = new Audio('audio/16.mp3');
// music.play();
//music controll end
//all music in obj start
const songs = [
    {
    id: 1,
        songName: `Naia Ashq Na Ho <br>
                  <div class="subtitle">Republic Day</div>`,
        poster: "img/arjit_img/1.jpg"
    },
    {
    id: 2,
        songName: `Khairiyat (Sad) <br>
                  <div class="subtitle">Chhichhore</div>`,
        poster: "img/arjit_img/2.jpg"
    },
    {
    id: 3,
        songName: `Desh Mere  <br>
                  <div class="subtitle">Bhuj The Pride OfIndian</div>`,
        poster: "img/arjit_img/3.jpg"
    },
    {
    id: 4,
        songName: `Dhokha <br>
                  <div class="subtitle">Dhokha</div>`,
        poster: "img/arjit_img/4.jpg"
    },
    {
    id: 5,
        songName: `Tere Yaar Hoon Main <br>
                  <div class="subtitle">Sonu Ke Titi Ki Sweety</div>`,
        poster: "img/arjit_img/5.jpg"
    },
    {
    id: 6,
        songName: `Chunar <br>
                  <div class="subtitle">ABCD 2</div>`,
        poster: "img/arjit_img/6.jpg"
    },
    {
    id: 7,
        songName: `Galti se Mistake <br>
                  <div class="subtitle">Jagga Jasoos</div>`,
        poster: "img/arjit_img/7.jpg"
    },
    {
    id: 8,
        songName: `Hamari Adhuri Kahani  <br>
                  <div class="subtitle">Hamari adhuri Kahani</div>`,
        poster: "img/arjit_img/8.jpg"
    },
    {
    id: 9,
        songName: `Neki ki Raah <br>
                  <div class="subtitle">Traffic</div>`,
        poster: "img/arjit_img/9.jpg"
    },
    {
    id: 10,
        songName: `Humdard <br>
                  <div class="subtitle">Ek Villain</div>`,
        poster: "img/arjit_img/10.jpg"
    },
    {
    id: 11,
        songName: `mere Yaaraa <br>
                  <div class="subtitle">Sooryavanshi</div>`,
        poster: "img/arjit_img/11.jpg"
    },
    {
    id: 12,
        songName: `Nashe Si Chadh Gayi<br>
                  <div class="subtitle">Befikre</div>`,
        poster: "img/arjit_img/12.jpg"
    },
    {
    id: 13,
        songName: `Ae Watan <br>
                  <div class="subtitle">Raazi</div>`,
        poster: "img/arjit_img/13.jpg"
    },
    {
    id: 14,
        songName: `Agar tum Saath ho <br>
                  <div class="subtitle">Tamasha</div>`,
        poster: "img/arjit_img/14.jpg"
    },
    {
    id: 15,
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
// bi-play-fill

// playbar up ^
let up = document.getElementsByClassName('bi-chevron-double-up')[0];
let down = document.getElementsByClassName('bi-chevron-double-down')[0];
let master_plays = document.getElementsByClassName('master_play')[0];
let master_pl = document.getElementsByClassName('master_pl');
// master_play_mobil
up.addEventListener("click", () => {
    up.classList.toggle('bi-chevron-double-up');
    up.classList.toggle('bi-chevron-double-down');
    master_plays.classList.toggle('master_play_mobil');
    master_plays.classList.toggle('master_pl');
})

//

  // song array list
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

//all music in obj  end

// music play start
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        alert(astart)
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
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-fill');
    })
    // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.toggle('bi-stop-fill');
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
        music.src = `audio/arjit_audio/${index}.mp3`
        poster_master_play.src = `img/arjit_img/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
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
        download_music.href = `audio/arjit_audio/${index}.mp3`;
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
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'black';
        // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';
        
        makeAllplays();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-fill');
      
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
    // dot.style.background = red;

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
    music.src = `audio/arjit_audio/${index}.mp3`
    // music.play();
    poster_master_play.src = `img/arjit_img/${index}.jpg`

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
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'black';
    // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';

    makeAllplays();
    el.target.classList.remove('bi-stop-fill');
    el.target.classList.add('bi-play-fill');
    // el.target.classList.toggle('bi-stop-fill');
   
})
next.addEventListener('click', () => {
    index ++;
    let ll = Array.from(document.getElementsByClassName('songItem')).length;
    if ( index  > ll) {
        index = 1;
        // index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    // console.log(index)
    music.src = `audio/arjit_audio/${index}.mp3`
    // music.play();
    poster_master_play.src = `img/arjit_img/${index}.jpg`

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
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'black';
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
    music.src = `audio/arjit_audio/${index}.mp3`
    music.play();
    poster_master_play.src = `img/arjit_img/${index}.jpg`

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
    download_music.href = `audio/arjit_audio/${index}.mp3`;
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
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'black';
    // Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.color = 'rgb(0, 255, 153)';

    makeAllplays();
    el.target.classList.remove('bi-stop-fill');
    el.target.classList.add('bi-play-fill');
    el.target.classList.toggle('bi-stop-fill');
}
const repeat_music = () => {
    index;
    music.src = `audio/arjit_audio/${index}.mp3`
    music.play();
    poster_master_play.src = `img/arjit_img/${index}.jpg`

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
    download_music.href = `audio/arjit_audio/${index}.mp3`;
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
    music.src = `audio/arjit_audio/${index}.mp3`
    music.play();
    poster_master_play.src = `img/arjit_img/${index}.jpg`

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
    download_music.href = `audio/arjit_audio/${index}.mp3`;
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
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'black';
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