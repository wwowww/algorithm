def climbing_stairs(n):
    if n == 0:
        return 0
    
    dp = [0] * (n + 1)
    
    if n >= 1:
        dp[1] = 1
    if n >= 2:
        dp[2] = 2
    
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

print(climbing_stairs(4), climbing_stairs(5), climbing_stairs(6))