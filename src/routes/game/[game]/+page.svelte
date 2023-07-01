<script lang="ts">
    import { page } from '$app/stores';
    import Game from './Game.svelte';

    import type { GameType } from '../../../utils/interfaces/Games';
    import { Games } from '../../../utils/interfaces/Games';
    import LocaleString from '../../../utils/components/LocaleString.svelte';

    let game = $page.params.game;

    function checkGameType(input: string): boolean {
        const lowerCaseGames = Games.map(game => game.toLowerCase());
        const lowerCaseInput = input.toLowerCase();

        return lowerCaseGames.includes(lowerCaseInput as GameType)
    }
</script>

<main class="game">
    {#if checkGameType(game)}
        <div class="item game-wrapper">
            <Game gameType={game} />
        </div>
    {:else}
        <h1 class="errortitle">
            <LocaleString key={`game-type.error-game-not-found`} />
        </h1>
    {/if}
</main>

<style lang="scss">
    @use "../../../assets/scss/global.scss";
    
    //$keyboard-height: 30vh;
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
            }

            &.keyboard-wrapper {
                //background: rgba(255, 255, 255, .25);
                background: rgba(255, 255, 255, .05);
                height: var(--keyboard-height);
            }
        }
    }

    .errortitle {
        text-align: center;
        margin: 1rem;
    }
</style>