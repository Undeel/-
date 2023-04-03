unction solution(babbling) {
    var answer = 0;
    var B_length = babbling.length;
    
    /*반복 횟수를 좀 정하긴 해야 할 거 아냐 그치?
    입력값이 5개라고 치면 5번 반복해야 하는 거 아냐
    더 남은 입력값이 없으면 패스 이런 건 좀 그렇잖아 그니까... length 치면 정직하게 3이면 3 나옴. 저 함수면 딱 되겠다 그치?
    */
    
    answer = B_length;
    
    for (var i = 0; i < B_length; i++){
        //이 안에서 검사를 뺑뺑 돌릴거야
        //하나씩밖에 못 하면, 네 개 다 도려내고 남은 게 있으면 범인이란 소리잖아 그치?
        
        var bab = babbling[i];    
        
        bab = bab.replace('aya','AAA');
        bab = bab.replace("ye","AA");
        bab = bab.replace("woo","AAA");
        bab = bab.replace("ma","AA");
        
        var bab_length = bab.length;
        for (var j = 0; j < bab_length; j++){
            if(bab[j] != "A"){
                answer = answer - 1;
                break;
            }
        }  
    }
    
    return answer;
}