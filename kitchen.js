    // 받는 html    
    


    // 재료 클릭 시 재료값 출력

    let coin=0;
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
        
    };

    
    