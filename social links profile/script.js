const icon = document.querySelector('#icon')

icon.addEventListener('click',()=>{
    document.body.classList.toggle('light')
    if(icon.innerHTML == 'dark_mode'){

        icon.innerHTML = 'light_mode';
    }else{
        icon.innerHTML ='dark_mode';
    }
})