// book cover scale animation 
function coverScale(){
    let div = document.querySelectorAll('.hover')
    div.forEach(function (i){
        let img = i.querySelector('img')
        i.addEventListener('mouseenter', ()=>{
            gsap.to(img,{
                scale:1.1,
                duration:0.2
            })
        })
        i.addEventListener('mouseleave', ()=>{
            gsap.to(img,{
                scale:1,
                duration:0.2
            })
        })
    })
    
}
coverScale()