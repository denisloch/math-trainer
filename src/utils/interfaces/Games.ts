export const Games = ["Addition", "Subtraction", "Multiplication"] as const;

export const gamesLowerCaseStringArray = Games.map((item) => {
    return item.toLowerCase();
})

export type GameType = typeof Games[number];
