// 보내는 html

// 만약 $img가 #Esp라면?


function setImg($img) {   
    if('#Ame'){
        let $img = document.querySelector('#Ame');
        let file_name = $img.src;
        localStorage.setItem('file_name',file_name);
        window.open('kitchen.html')

    }else if('#Esp'){
        let $img = document.querySelector('#Esp');
        let file_name = $img.src;
        localStorage.setItem('file_name',file_name);
        window.open('kitchen.html')

    }
    

}



// 받는 html

    

    
            
