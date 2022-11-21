def calculate_score(team_score, score_map):
    return sum([(team * score) for team, score in zip(team_score, score_map)])

def football_scoring(team1, team2):
    score_map = [6, 3, 2, 1, 2]
    
    team_1_score = calculate_score(team1, score_map)
    team_2_score = calculate_score(team2, score_map)
    
    return f"{team_1_score} {team_2_score}"


if __name__ == "__main__":
    team1 = list(map(int, input().split()))
    team2 = list(map(int, input().split()))
    
    print(football_scoring(team1, team2))