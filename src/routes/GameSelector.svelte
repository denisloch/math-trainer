<script lang="ts">
    import type { GameType } from "../utils/interfaces/Games";
    import { base } from "$app/paths";

    import LocaleString from "../utils/components/LocaleString.svelte";

    export let gameType: GameType;
</script>

<a class="game-type-wrapper" href="{`${base}/game/${gameType.toLowerCase()}`}">
    <div class="game-type">
        <LocaleString key={`game-type.game-${gameType.toLowerCase()}`} />
    </div>
</a>

<style lang="scss">
    @use "../assets/scss/global.scss";

    .game-type-wrapper {
        width: 30%;
        aspect-ratio: 1 / 1;
        float: left;
        text-decoration: none;
        color: global.$font-color;

        .game-type {
            display: flex;
            height: 90%;
            width: 90%;
            margin: 5%;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, .05);
            border-radius: global.$border-radius;

            &:hover {
                cursor: pointer;
                background: rgba(255, 255, 255, .1);
            }
        }
    }
</style>