const progress = document.getElementById('progress');
const song = document.getElementById('song');
const ctrlIcon = document.getElementById('ctrl-icon');

if (song && progress) {
    song.onloadedmetadata = function () {
        progress.max = song.duration;
        console.log(song.duration);
        progress.value = song.currentTime;
    }
    // song.addEventListener('loadedmetadata', function() {
    //     progress.max = song.duration;
    //     console.log(song.duration);
    //     progress.value = song.currentTime;
    // });
} else {
    console.error("Either progress or song element is not found.");
}


function playPause () {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    } else {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    }
    if(song.play()) {
        setInterval(() => {
            progress.value = song.currentTime;
        }, 1000);
    }
}


progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
}
song.onended = function () {
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
}