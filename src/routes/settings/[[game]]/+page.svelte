<script lang="ts">
    import CheckboxItem from "./CheckboxItem.svelte";
    import RadioItem from "./RadioItem.svelte";
    import { type SettingsItem, type SettingsType, getSettingsObject } from "../../../utils/interfaces/Settings";
    import { page } from "$app/stores";
    import { Games, gamesLowerCaseStringArray, type GameType } from "../../../utils/interfaces/Games";
    import { writable, type Writable } from "svelte/store";
    import LocaleString from "../../../utils/components/LocaleString.svelte";

    let settingsType: SettingsType = "global";
    let gameString: string = $page.params.game;
    let gameType: GameType | undefined;
    let settingsItemArray: Writable<SettingsItem[]> = writable([]);
    
    if (typeof gameString !== "undefined") {
        if (gamesLowerCaseStringArray.indexOf(gameString.toLowerCase()) > -1) {
            settingsType = "game";
        }
    }

    if (settingsType === "global" || settingsType === "game") {
        if (settingsType === "game") {
            gameType = Games[gamesLowerCaseStringArray.indexOf(gameString.toLowerCase())];
        } else {
            gameType = undefined;
        }
        
        let res = (getSettingsObject(settingsType, settingsType === "global" ? undefined : gameType, true) as unknown as SettingsItem[]);


        if (res !== null) {
            settingsItemArray.set(res);
        }
    }
</script>

<div class="settings-wrapper">
    {#if settingsType === "global"}
        <h1>
            <LocaleString key={`settings.global.page-title`} />
        </h1>
    {:else}
        <h1>
            <LocaleString key={`settings.game.page-title`} />
            {gameType}
        </h1>
    {/if}

    {#if $settingsItemArray.length > 0}
        {#each $settingsItemArray as item}
            <div class="item-wrapper">
                <!-- Title -->
                <div class="title">
                    <LocaleString key={`setting-items.${settingsType}.${item.id}.title`} />
                </div>
    
                <!-- Subtitle -->
                <div class="subtitle">
                    <LocaleString key={`setting-items.${settingsType}.${item.id}.subtitle`} />
                </div>
    
                <div class="spacer"></div>
    
                {#if item.type === "single"}
                    <CheckboxItem
                        id={item.id}
                        label={`setting-items.${settingsType}.${item.id}`}
                        settingsType={settingsType}
                        gameType={gameType}
                    />
                {:else if item.type === "multi"}
                    <RadioItem
                        id={item.id}
                        label={`setting-items.${settingsType}.${item.id}`}
                        settingsType={settingsType}
                        gameType={gameType}
                        item_count={item.item_count}
                    />
                {/if}
            </div>
        {/each}
    {:else}
        <br>
        <h1>
            <LocaleString key={`settings.error.no-settings-found`} />
        </h1>
    {/if}
</div>

<style lang="scss">
    .settings-wrapper {
        height: 100%;
        width: 50%;
        margin: 1em auto;
        text-align: center;
        max-width: 900px;

        .title {
            font-size: 1.6em;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: .9em;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .spacer {
            margin: .75em;
        }

        .item-wrapper {
            padding: 1em;
            margin: 1em;
            border-radius: 8px;
            background: rgba(255, 255, 255, .1);
            overflow: hidden;
            text-overflow: ellipsis;
        }

        @media screen and (max-width: 600px) {
            width: 90%;
        }

        @media screen and (min-width: 600px) and (max-width: 1000px) {
            width: 70%;
        }
    }
</style>