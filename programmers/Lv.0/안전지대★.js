/*
<안전지대>

문제 설명
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
image.png
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

제한사항
board는 n * n 배열입니다.
1 ≤ n ≤ 100
지뢰는 1로 표시되어 있습니다.
board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.
입출력 예
board	result
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]	16
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]	13
[[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]	0
입출력 예 설명
입출력 예 #1

(3, 2)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선 총 8칸은 위험지역입니다. 따라서 16을 return합니다.
입출력 예 #2

(3, 2), (3, 3)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선은 위험지역입니다. 따라서 위험지역을 제외한 칸 수 13을 return합니다.
입출력 예 #3

모든 지역에 지뢰가 있으므로 안전지역은 없습니다. 따라서 0을 return합니다.
*/


/*
이 코드는 지뢰 찾기 게임에서 안전한 지역의 수를 구하는 문제를 해결하는 함수입니다.

우선 함수의 인자로 board라는 이차원 배열이 전달됩니다. 이 배열은 n x n 크기로, 0 또는 1의 값을 가집니다. 
0은 지뢰가 없는 칸을 의미하고, 1은 지뢰가 있는 칸을 의미합니다.

이 함수는 board 배열을 반복하면서, 0인 칸을 찾고, 그 칸의 주변에 지뢰가 있는지 확인합니다. 
만약 주변에 지뢰가 없다면 안전한 지역으로 판단하고, 안전한 지역의 수를 1 증가시킵니다.

for 문을 이용해 board 배열의 모든 요소를 순회합니다. 이 중에서 0인 요소를 찾으면, 그 요소의 주변 8칸을 검사하여 지뢰가 있는지 확인합니다. 
이 때, for 문의 범위는 i-1 부터 i+1 까지, j-1 부터 j+1까지입니다. 
이 때, 주의할 점은, 배열의 인덱스가 0부터 시작한다는 점과, 배열의 범위를 벗어나는 인덱스는 검사하지 않아야 한다는 점입니다. 
따라서, x와 y가 0보다 작거나 n보다 크면 검사하지 않습니다.

만약 주변에 지뢰가 있다면, isSafe 변수의 값을 false로 바꾸고, 안전한 지역이 아님을 표시합니다. 
그리고 내부의 for문에서 더 이상 검사하지 않고 바로 break 합니다.

그리고, 바깥쪽 for문으로 돌아와 isSafe 변수가 true인 경우 안전한 지역이라고 판단하여 answer 값을 1 증가시킵니다.

마지막으로, 모든 반복이 끝나면 안전한 지역의 수인 answer 값을 반환합니다.
*/
//풀이 1
function solution(board) {
    const n = board.length; // 배열의 크기
    let answer = 0; // 안전한 지역의 칸 수
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) { // 지뢰가 없는 지역인 경우
                let isSafe = true;
                // 인접한 칸에 지뢰가 있는지 확인
                for (let x = i - 1; x <= i + 1; x++) {
                    console.log('x:' + i)
                    for (let y = j - 1; y <= j + 1; y++) {
                        console.log('y:' + j)
                        if (x >= 0 && x < n && y >= 0 && y < n && board[x][y] === 1) {
                            isSafe = false;
                            break;
                        }
                    }
                    if (!isSafe) break;
                }
                if (isSafe) answer++;
            }
        }
    }
    
    return answer;
}

//풀이 2
function solution(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 0) {
                let isSafe = true;
                for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, board.length - 1); x++) {
                    for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, board[0].length - 1); y++) {
                        if (board[x][y] === 1) {
                            isSafe = false;
                            break;
                        }
                    }
                    if (!isSafe) break;
                }
                if (isSafe) count++;
            }
        }
    }
    return count;
}
/*
변수 선언과 초기화
1.
배열의 크기를 n에 저장합니다.
안전한 지역의 칸 수를 저장할 answer 변수를 0으로 초기화합니다.
이중 반복문을 이용한 모든 칸 탐색
2.
이중 반복문을 사용하여 board 배열의 모든 칸을 탐색합니다.
현재 칸이 지뢰가 없는 칸일 경우 다음을 수행합니다.
인접한 칸에 지뢰가 있는지 확인
3.
현재 칸 주변 8칸을 탐색하여 인접한 칸에 지뢰가 있는지 확인합니다.
이중 반복문을 사용하여 현재 칸 기준으로 x, y 좌표를 변경하면서 8칸을 탐색합니다.
현재 칸 기준으로 x, y 좌표가 board 배열 내부에 있고, 해당 위치에 지뢰가 있다면 isSafe 변수를 false로 변경합니다.
만약 인접한 칸 중에 하나라도 지뢰가 있으면 isSafe 변수가 false가 되므로 탐색을 중단합니다.
안전한 지역인 경우 answer 값을 1 증가시킴

++ 더 자세한 설명
이 부분은 현재 점 (i, j)를 기준으로 상하좌우 8개의 인접한 점을 확인하는 부분입니다. 
그러나 이때 주의할 점은 배열의 인덱스가 0부터 시작하므로, 만약 현재 점이 경계에 위치한 경우 배열의 범위를 벗어나지 않도록 처리해주어야 합니다.

따라서, Math.max와 Math.min 함수를 사용하여 현재 인덱스와 경계를 비교하여 범위를 제한하게 됩니다.

예를 들어, 현재 점이 (i, j)라고 하면, x 값에 대한 범위는 Math.max(0, i-1)에서 시작하여 Math.min(i+1, board.length-1)에서 끝나게 됩니다. 
만약 i-1이 0보다 작은 경우, 즉 i가 0 또는 1인 경우, 시작 범위가 0이 되고, i+1이 board.length-1보다 큰 경우, 즉 i가 board.length-2 또는 board.length-1인 경우, 끝나는 범위가 board.length-1이 됩니다.

y 값에 대해서도 동일하게 처리해주어 현재 점 (i, j)를 기준으로 인접한 8개의 점을 확인할 수 있게 됩니다.

4.
만약 isSafe 변수가 true로 유지되면, 현재 칸 주변에 지뢰가 없는 것이므로 answer 변수를 1 증가시킵니다.
5.
안전한 지역의 칸 수인 answer 값을 반환합니다.

이렇게 코드를 작성하면, 이중 반복문과 조건문을 이용하여 각 칸의 주변 8칸을 탐색하여 안전한 칸 수를 계산할 수 있습니다.
*/