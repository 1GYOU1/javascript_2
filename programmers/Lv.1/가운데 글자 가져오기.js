/*
<가운데 글자 가져오기>

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

입출력 예
s	     return
"abcde"	"c"
"qwer"	"we"
*/

//제출 답안
function solution(s) {
     if(s.length%2 == 0){
          answer = s.slice(s.length/2-1, s.length/2+1);
          return answer;
     }else{
          answer = s.slice(s.length/2, s.length/2+1);
          return answer;
     }
}
console.log(solution('123'))