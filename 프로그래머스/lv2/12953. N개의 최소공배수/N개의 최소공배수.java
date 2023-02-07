class Solution {
    public int gcd(int a, int b) {
        while(b > 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    public int lcm(int a, int b) {
            return (a * b) / gcd(a, b);
        }
    
    public int solution(int[] arr) {       
        int result = 1;
        for (int i = 0; i < arr.length; i++) {
            result = lcm(result, arr[i]);
        }
        return result;
    }
}