// 보내는 html

function setImg(coffee){
    // let 선언은 1번만 
    let $img;
    let file_name;
    let img_prc1=0;
    
    console.log(coffee);
    if(coffee == '1'){
        $img = document.querySelector('#Ame');
        img_prc1=4000;

    }else if(coffee == '2'){
        $img = document.querySelector('#Esp');
        img_prc1=3500;
        
    }else if(coffee == '3'){
        $img = document.querySelector('#Caf');
        img_prc1=4500;
        
    }else if(coffee == '4'){
        $img = document.querySelector('#Cam');
        img_prc1=4700;
        
    }else if(coffee == '5'){
        $img = document.querySelector('#Crm');
        img_prc1=5000;
        
    }else if(coffee == '6'){
        $img = document.querySelector('#Cpp');
        img_prc1=4700;
        
    }
    file_name = $img.src;
    localStorage.setItem('file_name',file_name);
    localStorage.setItem('price',img_prc1);
    window.open('kitchen.html');
}






    
            





    
            




    
            
