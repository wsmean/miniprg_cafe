window.onload = function() {
    // 받는 html    
    // 사진 넘겨 받는 값
    let file_name1 = localStorage.getItem('file_name');
    let $img = document.querySelector('#img1');
    $img.src = file_name1;
    
    $img_prc = document.querySelector('#img_prc');
    
    // 가격 넘겨 받는 값
    img_prc2 = localStorage.getItem('price');
    $img_prc.textContent= img_prc2;
    
    
    // 버튼 클릭시 총 매출 뜨게하기
    // let mymoney = localStorage.getItem('mymoney');
    // let $mymoney = document.querySelector();
    
}

// 재료 클릭 시 재료값 출력
let coin=0;

let $img_prc;
// 가격 넘겨 받는 값
let img_prc2;


function btnFun1(num){
    if(num == 1){
        coin += 300;            
    }else if(num == 2){
        coin += 100;
    }else if(num == 3){
        coin += 200;
    }else if(num == 4){
        coin += 150;
    }else if(num == 5){
        coin += 150;
    }else if(num == 6){
        coin += 130;
    }else if(num == 7){
        coin += 250;
    }else if(num == 8){
        coin += 400;
    }
    // console.log(coin);
    document.getElementById('putcoin').innerHTML = coin;


    let $mymoney = document.querySelector('#mymoney');
    let img_prc3 = parseInt($img_prc.textContent);
    $mymoney.textContent = (img_prc3 - coin);

    // localStorage.setItem('mymoney',$mymoney.textContent);
    if(num == 0) {
        document.getElementById("addtotal").innerHTML =
            " &#128176; 와! 오늘 "+($mymoney.textContent) +"원 벌었다 &#129297;";
    }
}



 

    

    
    