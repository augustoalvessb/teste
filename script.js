// var img = document.querySelector('.alunos-img');
// var array1 = new Array();
// array1[0] = '<img src="img/design.png">';
// array1[1] = '<img src="img/design-1.png">';
// array1[2] = '<img src="img/design-2.png">';
// array1[3] = '<img src="img/design-3.png">';
// array1[4] = '<img src="img/design-4.png">';
// array1[5] = '<img src="img/design-5.png">';

// var loop = 1;

// function proximo() {
//     if (loop == array1.length)
//     {
//         loop = 0;
//     }
//     img[loop];
//      loop++;
// }
let imgIndex = 1;
let imagens = ["img/design.png", "img/design-1.png", "img/design-2.png", "img/design-3.png", "img/design-4.png", "img/design-5.png"];
function proximo() {
    
    if (imgIndex == imagens.length){
        imgIndex = 0;
    }
    document.querySelector('#alunos-img').src=imagens[imgIndex];
    imgIndex++;
    
}
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1478409745912988');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1478409745912988&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->




// var imagens = ['img/design.png', 'img/design-1.png', 'img/design-2.png', 'img/design-3.png', 'img/design-4.png', 'img/design-5.png'];



// function trocar() {
//     var img = document.querySelector('#alunos-img');
//     var img_src = img.scr;
//     var img_idx = imagens.indexOf(img_src);
//     img_src = imagens[ img_idx == imagens.length-1 ? 0 : img_idx+1];
// }



