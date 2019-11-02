function makeGif(options){
gifshot.createGIF(options, function(obj) {
    if(!obj.error) {
      var image = obj.image,
      animatedImage = document.createElement('img');
      animatedImage.src = image;
      document.body.appendChild(animatedImage);
    }
});
}
function random(count,route){
    let i = 1;
    let imgs = [];
    while(i < count){
        let tmp = random()*route.l;
        imgs.push('giffyfig.tech/sources/'+route.r+String(tmp));
    }

    makeGif({'images':imgs});
}

function cat(){
    let meow = {'l':10,'r':'cat'};
    random(2,meow);
}