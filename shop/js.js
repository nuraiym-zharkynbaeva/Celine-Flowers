let order = document.querySelector('.order')

let toggleOrder = ()=>{
    order.classList.toggle('active')
    
}

let done = document.querySelector('.done')

let toggleDone = ()=>{
    done.classList.toggle('active')
    order.classList.remove('active')
}

let follow = document.querySelector('.follow')

let toggleFollow = ()=>{
    follow.classList.toggle('active')
}

let download = document.querySelector('.download')

let toggleDownload = ()=>{
    download.classList.toggle('active')
}



