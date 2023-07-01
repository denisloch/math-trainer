<script lang="ts">
    import { Games } from "../utils/interfaces/Games";
    
    import LocaleString from "../utils/components/LocaleString.svelte";
    import GameSelector from "./GameSelector.svelte";
</script>

<svelte:head>
    <title>Math Trainer</title> 
</svelte:head>

<main>
    <div class="game-type">
        <h1>
            <LocaleString key="game-selector.select-game-type" />
        </h1>
    
        <div class="game-types-list">
            {#each Games as game}
                <GameSelector
                    gameType={game}
                />
            {/each}
        </div>
    </div>
</main>

<style lang="scss">
    @use "../assets/scss/global.scss";

    $wrapper-width: 80vw;

    main {
        text-align: center;

        h1 {
            font-weight: 600;
            height: 3em;
            line-height: 3em;
        }

        .game-types-list {
            padding: 0 0 2.5em 0;
            width: 80vw;
            display: inline-block;
            text-align: center;
        }
    }
</style>