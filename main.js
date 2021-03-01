const mQuery = window.matchMedia('(min-width: 1024px)');

const social_media = document.getElementById("social_media");

if (mQuery.matches) {
    let size = 3;
    social_media.innerHTML = `<li class='social_media-icon'><i class='fab fa-facebook-square fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-twitter-square fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-instagram fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-youtube fa-${size}x'></i></li>`
}else {
    let size = 2;
    social_media.innerHTML = `<li class='social_media-icon'><i class='fab fa-facebook-square fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-twitter-square fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-instagram fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-youtube fa-${size}x'></i></li>`


}

function  screenTest(e){
    if(e.matches){
        let size = 3;
        social_media.innerHTML = `<li class='social_media-icon'><i class='fab fa-facebook-square fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-twitter-square fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-instagram fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-youtube fa-${size}x'></i></li>`;
    }
    else {
        let size = 2;
        social_media.innerHTML = `<li class='social_media-icon'><i class='fab fa-facebook-square fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-twitter-square fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-instagram fa-${size}x'></i></li><li class='social_media-icon'><i class='fab fa-youtube fa-${size}x'></i></li>`;

    }
}
mQuery.addListener(screenTest);