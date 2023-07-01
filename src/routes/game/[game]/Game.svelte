<script lang="ts">
    import { AdditionGameInstance, SubtractionGameInstance, MultiplicationGameInstance, type GameInstance } from "./Game";
    import GameKeyboard from "./GameKeyboard.svelte";
    
    export let gameType:string;
    
    let gameInstance: GameInstance;
    let numbers: [number, number] = [0, 0];
    let solutionInputValue: number;
    let keyboardInstance: any = "";
    
    function init() {
        switch(gameType.toLowerCase()) {
            case "addition": {
                gameInstance = new AdditionGameInstance();
                break;
            }
            case "subtraction": {
                gameInstance = new SubtractionGameInstance();
                break;
            }
            case "multiplication": {
                gameInstance = new MultiplicationGameInstance();
                break;
            }
        }

        gameInstance.numbers.subscribe((val) => {
            numbers[0] = val[0];
            numbers[1] = val[1];
        })
    }

    init();


    function refreshGame() {
        gameInstance.generateNumbers();
    }

    function submitSolution() {
        keyboardInstance.clearInput();
        if (gameInstance.verifySolution(solutionInputValue)) {
            // Solution is correct - generate new Numbers
            keyboardInstance.flashSolution("correct");
            gameInstance.generateNumbers();
        } else {
            // Solution is incorrect
            keyboardInstance.flashSolution("incorrect");
        }
    }
</script>

<div class="game">
    <div class="item game-wrapper">
        <div class="wrapper">
            <div class="centered">
                <div class="task">
                    <span id="number-first">{numbers[0]}</span>
                    {gameInstance.getOperationSign()}
                    <span id="number-second">{numbers[1]}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="item keyboard-wrapper">
        <GameKeyboard
            on:refresh={refreshGame}
            on:submit={submitSolution}
            bind:value={solutionInputValue}
            bind:this={keyboardInstance}
        />
    </div>
</div>

<style lang="scss">
    @use "../../../assets/scss/global.scss";

    :root {
        --keyboard-height: 40vh;

        @media screen and (max-height: 700px) {
            --keyboard-height: 45vh;
        }

        @media screen and (max-height: 600px) {
            --keyboard-height: 50vh;
        }

        @media screen and (max-height: 500px) {
            --keyboard-height: 55vh;
        }

        @media screen and (max-height: 400px) {
            --keyboard-height: 60vh;
        }
    }

    
    .game {
        width: 100vw;
        position: fixed;
        height: calc(100% - global.$nav-bar-height);

        .item {
            width: 100%;

            &.game-wrapper {
                background: global.$background-color;
                height: calc(100% - var(--keyboard-height));

                .wrapper {
                    width: 100vw;
                    height: 100%;
                    //height: calc(100vh - global.$game-keyboard-height - global.$nav-bar-height);

                    .centered {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        font-size: 3em;

                        .task {
                            font-weight: 600;
                        }
                    }
                }
            }
    
            &.keyboard-wrapper {
                background: rgba(255, 255, 255, .05);
                height: var(--keyboard-height);
            }
        }
    }
</style>