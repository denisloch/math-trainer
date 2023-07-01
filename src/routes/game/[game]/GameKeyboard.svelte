<script lang="ts">
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import Icon from "../../../utils/components/Icon.svelte";

    let inputValue: string = "";

    export let value: number = 0;

    $: value = Number(inputValue);

    let maxInputLength: number = 10;

    function writeToSolution(val: number) {
        if (inputValue.length <= maxInputLength) {
            inputValue = inputValue + val;
        }
    }

    function deleteLastCharacter() {
        inputValue = inputValue.substring(0, inputValue.length - 1);
    }

    function changeSign() {
        if (inputValue.substring(0, 1) === "-") {
            inputValue = inputValue.substring(1, inputValue.length);
        } else {
            inputValue = "-" + inputValue;
        }
    }

    function addComma() {
        if (!inputValue.includes(".") && inputValue.length <= maxInputLength) {
            inputValue = inputValue + ".";
        }
    }

    export function clearInput() {
        inputValue = "";
    }

    const dispatch = createEventDispatcher();
    function dispatchRefresh() {
        clearInput();
        dispatch("refresh");
    }

    function dispatchSubmit() {
        dispatch("submit");
    }

    export function showIncorrect() {
        var x = document.querySelector(".solution-wrapper .content") as HTMLElement;
        
        x.style.backgroundColor = "red";
        setTimeout(() => {
            x.style.backgroundColor = "white";
        }, 250)
    }

    export function showCorrect() {
        var x = document.querySelector(".solution-wrapper .content") as HTMLElement;
        
        x.style.backgroundColor = "#28a745";
        setTimeout(() => {
            x.style.backgroundColor = "white";
        }, 250)
    }

    const keydownListener = (e: KeyboardEvent) => {
        let allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "enter", "backspace", "c", "r", "-", ",", ".",  "escape"];

        if (allowedKeys.indexOf(e.key.toLowerCase()) > -1) {
            switch(e.key.toLowerCase()) {
                case "1":           writeToSolution(1);     break;
                case "2":           writeToSolution(2);     break;
                case "3":           writeToSolution(3);     break;
                case "4":           writeToSolution(4);     break;
                case "5":           writeToSolution(5);     break;
                case "6":           writeToSolution(6);     break;
                case "7":           writeToSolution(7);     break;
                case "8":           writeToSolution(8);     break;
                case "9":           writeToSolution(9);     break;
                case "0":           writeToSolution(0);     break;
                case "enter":       dispatchSubmit();       break;
                case "backspace":   deleteLastCharacter();  break;
                case "c":           clearInput();           break;
                case "escape":      clearInput();           break;
                case "r":           dispatchRefresh();      break;
                case "-":           changeSign();           break;
                case ",": case ".": addComma();             break;
            }
        }
    }

    onDestroy(() => {
        document.removeEventListener("keydown", keydownListener);
    })

    onMount(() => {
        document.addEventListener("keydown", keydownListener)
    })

    let solutionFlasher: string = "";
    export function flashSolution(type: string) {
        solutionFlasher = "";
        setTimeout(() => {
            solutionFlasher = type;
        }, 1)
    }
</script>

<main>
    <div class="solution-wrapper">
        <div class="content {solutionFlasher}">
            {inputValue}
        </div>
    </div>
    <div class="keyboard-wrapper">
        <div class="keyboard">
            <div class="key spacer-1"></div>
            <div class="key refresh darker" on:click={() => {dispatchRefresh()}}>
                <Icon class="icon" name={"refresh-cw"} />
            </div>

            <div class="key" on:click={() => {writeToSolution(7)}}>7</div>
            <div class="key" on:click={() => {writeToSolution(8)}}>8</div>
            <div class="key" on:click={() => {writeToSolution(9)}}>9</div>
            <div class="key" on:click={() => {writeToSolution(4)}}>4</div>
            <div class="key" on:click={() => {writeToSolution(5)}}>5</div>
            <div class="key" on:click={() => {writeToSolution(6)}}>6</div>
            <div class="key" on:click={() => {writeToSolution(1)}}>1</div>
            <div class="key" on:click={() => {writeToSolution(2)}}>2</div>
            <div class="key" on:click={() => {writeToSolution(3)}}>3</div>

            <div class="key sign" on:click={() => {changeSign()}}>
                {#if inputValue.substring(0, 1) === "-"}
                    +
                {:else}
                    --
                {/if}
            </div>

            <div class="key" on:click={() => {writeToSolution(0)}}>0</div>
            <div class="key comma" on:click={() => {addComma()}}>,</div>

            <div class="key delete darker" on:click={() => {deleteLastCharacter()}}>
                <Icon class="icon" name={"delete"} />
            </div>
        
            <div class="key clear darker" on:click={() => {clearInput()}}>
                <Icon class="icon" name={"x-circle"} />
            </div>

            <div class="key enter darker" on:click={() => {dispatchSubmit()}}>
                <Icon class="icon" name={"corner-down-left"} />
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    @use "../../../assets/scss/global.scss";

    main {
        width: 100%;
        height: 90%;
        
        .solution-wrapper {
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, .25);
            margin-bottom: .5rem;
            
            .content {
                background: global.$game-keyboard-solution-field-background;
                color: global.$game-keyboard-solution-field-font-color;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5em;
                width: 100%;
                height: 75%;
                border-radius: global.$border-radius;
                transition: 50ms;

                &.correct {
                    animation: correctAnimation linear .3s;
                }

                &.incorrect {
                    animation: incorrectAnimation linear .3s;
                }
                
                @keyframes correctAnimation {
                    0% { background: global.$game-keyboard-solution-field-solution-correct-flash; }
                    20% { background: global.$game-keyboard-solution-field-solution-correct-flash; }
                }

                @keyframes incorrectAnimation {
                    0% { background: global.$game-keyboard-solution-field-solution-incorrect-flash; }
                    20% { background: global.$game-keyboard-solution-field-solution-incorrect-flash; }
                }

                @media only screen and (min-width : 320px) {
                    width: 345px;
                }
            }
        }

        .keyboard-wrapper {
            overflow: hidden;
            width: 100vw;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            .keyboard {
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-columns: repeat(5, 65px);
                align-items: center;
                justify-content: center;
                grid-template-areas: "content", "sidebar";
                grid-column-gap: 5px;
                grid-row-gap: 5px;
        
                .key {
                    background: global.$game-keyboard-key;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: global.$border-radius;
                    position: relative;

                    :global(.icon) {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) scale(.35);
                    }
                    
                    &.clear {
                        grid-column: 5 / span 1;
                        grid-row: 2 / span 1;
                    }

                    &.enter {
                        grid-column: 5 / span 1;
                        grid-row: 3 / span 2;
                    }
                    
                    &.refresh {
                        grid-column: 1 / span 1;
                        grid-row: 3 / span 2;
                    }

                    &.spacer-1 {
                        background: transparent;
                        grid-column: 1 / span 1;
                        grid-row: 1 / span 2;
                    }

                    &.delete {
                        grid-column: 5 / span 1;
                        grid-row: 1 / span 1;
                    }

                    &.sign {
                       letter-spacing: -2px;
                    }

                    &:active {
                        background: global.$game-keyboard-key-active;
                    }

                    &.darker {
                        background: global.$game-keyboard-key-darker;

                        &:active {
                            background: global.$game-keyboard-key-darker-active;
                        }
                    }
                }
            }

        }
    }
</style>