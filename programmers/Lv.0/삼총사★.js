/*
이 문제는 3중 for문을 이용하여 모든 경우의 수를 탐색할 수 있습니다. 
각각의 for문은 배열에서 인덱스를 나타내며, 각각의 인덱스에 해당하는 값을 더해줍니다. 
3개의 숫자를 더한 합이 0이 되는 경우가 나오면 count를 증가시킵니다.

이 문제에서는 같은 학생이 중복해서 뽑힐 수 있기 때문에 같은 학생이 두 번 이상 뽑히는 경우를 처리해 주어야 합니다. 
이를 방지하기 위해 for문의 시작 인덱스를 조절합니다. 
첫 번째 for문은 0부터 n-2까지, 두 번째 for문은 i+1부터 n-1까지, 세 번째 for문은 j+1부터 n까지 반복합니다.

배열 number에서 삼총사를 만들기 위해서는 적어도 3개 이상의 원소가 필요합니다. 
따라서, i 변수가 n - 2보다 작을 때만 반복문이 실행되도록 하여 최소한 3개 이상의 원소를 가진 부분 배열을 생성하도록 합니다. 
그렇지 않으면 부분 배열의 길이가 2 이하가 되어 삼총사를 만들 수 없습니다.

반복문의 첫 번째 줄인 for (let i = 0; i < n - 2; i++)에서 i는 0부터 시작하며, n - 2보다 작을 때까지 1씩 증가합니다. 
여기서 n은 배열 number의 길이를 나타내는 변수입니다.

그러면 i가 0일 때부터 시작하여, n - 2보다 작은 동안에는 계속해서 반복문을 실행하게 됩니다. 
이 때, i는 배열 number의 인덱스로 사용되며, i가 증가하면서 배열에서의 위치도 변경됩니다.

이어지는 두 번째 반복문인 for (let j = i + 1; j < n - 1; j++)에서는 i 다음 위치부터 배열을 순회하면서, 
세 숫자 중 두 번째 숫자를 나타내는 j값을 설정합니다. j는 i보다 큰 값을 가지며, n - 1보다 작을 때까지 1씩 증가합니다.

세 번째 반복문인 for (let k = j + 1; k < n; k++)에서는 j 다음 위치부터 배열을 순회하면서, 
세 숫자 중 세 번째 숫자를 나타내는 k값을 설정합니다. k는 j보다 큰 값을 가지며, n보다 작을 때까지 1씩 증가합니다.

위의 반복문에서 i는 배열 number에서 첫 번째 숫자를 가리키고, j는 두 번째 숫자를 가리키며, k는 세 번째 숫자를 가리키게 됩니다. 
이 세 개의 숫자를 더해서 합이 0인 경우를 찾기 위해서는 모든 경우의 수를 확인해야 하기 때문에 이러한 반복문 구조가 필요합니다.
*/

//다시 풀어보기
function solution(number) {
    const n = number.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    count++;
                }
            }
        }
    }

    return count;
}
