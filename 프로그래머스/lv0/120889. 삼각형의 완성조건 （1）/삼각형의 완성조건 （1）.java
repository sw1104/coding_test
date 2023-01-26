// import java.util.Arrays;

// class Solution {
//     public int solution(int[] sides) {
//         Arrays.sort(sides);
//         int sum = 0;
//         for(int i = 0; i < sides.length - 1; i ++) {
//             sum += sides[i];
//         }
//         if(sum > sides[sides.length - 1]) {
//             return 1;
//         }
//         return 2;
//     }
// }

import java.util.Arrays;

class Solution {
    public int solution(int[] sides) {
        Arrays.sort(sides);
        return sides[2] < sides[0] + sides[1] ? 1 : 2;
    }
}