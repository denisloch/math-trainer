<script lang="ts">
    import { onMount } from "svelte";
    import LocaleString from "../../../utils/components/LocaleString.svelte";
    import type { GameType } from "../../../utils/interfaces/Games";
    import { getSetting, storeSetting, type SettingsType } from "../../../utils/interfaces/Settings";

    export let id: string;
    export let label: string | undefined;
    export let settingsType: SettingsType;
    export let gameType: GameType | undefined;

    let value: boolean;

    onMount(() => {
        value = getSetting(id, settingsType, gameType);
    })

    function onChange() {
        storeSetting(id, settingsType, gameType, value);
    }
</script>

<div class="checkbox">
    <input 
        type="checkbox" 
        id={id} 
        bind:checked={value}
        on:change={onChange}
    >
    <label 
        for={id}
    >
        <LocaleString key={label + ".label"} />
    </label>
</div>