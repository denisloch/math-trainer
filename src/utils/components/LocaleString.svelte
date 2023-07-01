<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';

    export let key: string | undefined;
</script>

{#if !$isLoading}
    {#if typeof key !== "undefined"}
        {$_(key, {default: ""})}
    {/if}
{/if}