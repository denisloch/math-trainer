<script lang="ts">
    import LocaleString from "../../../utils/components/LocaleString.svelte";
    import { onMount } from "svelte";
    import { getSetting, storeSetting, type SettingsType } from "../../../utils/interfaces/Settings";
    import type { GameType } from "../../../utils/interfaces/Games";

    export let id: string;
    export let label: string;
    export let settingsType: SettingsType;
    export let gameType: GameType | undefined;
    export let item_count: number;

    let value: number;

    onMount(() => {
        value = getSetting(id, settingsType, gameType);
    })

    function valueChange(index: number) {
        value = index;

        storeSetting(id, settingsType, gameType, index);
    }
</script>

<fieldset class="radio" id={id}>
    {#each {length: item_count} as _, i}
        <input 
            type="radio"
            id={id + "--" + i}
            name={id}
            checked={value === i ? true : false}
            on:change={() => {valueChange(i)}}
        >

        <label 
            for={id + "--" + i}
        >
            <LocaleString key={`${label}.radioitems.${i+1}`} />
        </label>
    {/each}
</fieldset>

<style lang="scss">
    fieldset {
        border: 0;
        outline: 0;
    }
</style>