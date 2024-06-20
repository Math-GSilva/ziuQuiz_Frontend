type player_score = {
    player: string;
    score: number;
};

export interface Quiz {
    name: string;
    image: string;
    description: string;
    questions: Array<string>;        //['Pergunta 1?', 'Pergunta 2?', 'Pergunta 3?']
    answers: Array<Array<string>>;   //[['Resposta 1A', 'Resposta 1B', 'Resposta 1C', 'Resposta 1D'], ['Resposta 2A', 'Resposta 2B', 'Resposta 2C', 'Resposta 2D'], ['Resposta 3A', 'Resposta 3B', 'Resposta 3C', 'Resposta 3D']]
    correct_answers: Array<number>;  //[ 1, 3, 2 ]
    times_played: number;
    ranked_players: number;
    favorites: number;
    category: string;
    tags: Array<string>;
    top_scores: Array<player_score>; //[{ player: 'Player 1', score: 150 }, { player: 'Player2', score: 140 }, { player: 'Player3', score: 130 }]
}