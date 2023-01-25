class Solution {
    public int[] solution(int money) {
        int aa = 5500;
        int cnt = money / aa;
        int re = money % aa;
        int[] answer = {cnt, re};
        return answer;
    }
}