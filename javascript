let video = document.querySelector(".videoContainer")
let btn = document.querySelector(".switchButton")
let countervalue=0
let value= document.querySelector('.value')
let btns= document.querySelectorAll('.btn')

btn.addEventListener('click',function(){
    if(this.classList.toggle('.activate')){
        video.pause()
    }else{
        video.play()
    }
})

btns.forEach(function(tri){
    tri.addEventListener('click',function(a){
        const style= a.currentTarget.classList

        if(style.contains('decrease')){
            countervalue--
        }if(style.contains('reset')){
            countervalue =0
        }if(style.contains('increase')){
            countervalue++
        }

        value.textContent= countervalue
    })
})

window.addEventListener('scroll',function(){
    if(scrollY> innerHeight/2){
       document.body.classList.add('change')
    }if(scrollY<innerHeight/2){
        document.body.classList.remove('change')
    }
})
