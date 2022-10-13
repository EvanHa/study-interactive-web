let scrollTop = 0;
let progressBar;

window.onload = function() {
    progressBar = document.getElementsByClassName('progress-bar')[0];
}

window.addEventListener('scroll', function(e) {
    scrollTop = document.documentElement.scrollTop;
    console.log("스크롤값 : " + scrollTop);

    let per = Math.round((scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100);
    console.log(per);

    progressBar.style.width = per +"%";
},false)