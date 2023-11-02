// 보내는 html

function setImg(coffee){
    // let 선언은 1번만 
    let $img;
    let file_name;
    
    console.log(coffee);
    if(coffee === '1'){
        $img = document.querySelector('#Ame');
        
        
    }else if(coffee == '2'){
        $img = document.querySelector('#Esp');
        
    }else if(coffee == '3'){
        $img = document.querySelector('#Caf');
        
    }else if(coffee == '4'){
        $img = document.querySelector('#Cam');
        
    }else if(coffee == '5'){
        $img = document.querySelector('#Crm');
        
    }else if(coffee == '6'){
        $img = document.querySelector('#Cpp');
        
    }
    file_name = $img.src;
    localStorage.setItem('file_name',file_name);
    window.open('kitchen.html')
}






    
            
