<script>
    // Import global styles
    import "../assets/scss/app.scss";
    import "../assets/scss/global.scss";
    
    // Import to initialize. Important :)
    import '../i18n'
    import "../utils/interfaces/Settings";

    import LocaleString from "../utils/components/LocaleString.svelte";
    import { base } from "$app/paths";
</script>

<main>
    <div class="nav">
        <a class="item" href="{`${base}/`}">
            <LocaleString key="navbar.home" />
        </a>
        <a class="item" href="{`${base}/settings/`}">
            <LocaleString key="navbar.global-settings" />
        </a>
    </div>

    <div class="page-content-wrapper">
        <slot>
            <LocaleString key="navbar.no-games-fallback" />
        </slot>
    </div>
</main>

<style lang="scss">
    @use "../assets/scss/global.scss";
    .nav {
        width: 100%;
        height: global.$nav-bar-height;
        display: flex;
        justify-content: center;
        align-items: center;
        background: global.$accent-color;
        position: fixed; // Unfortunately, this must be fixed as the game view has to be fixed as well for 100% viewport height on mobile -> scroll behavior on iOS would be janky otherwise
        z-index: 1;

        .item {
            text-decoration: none;
            color: global.$font-color;
            height: 2.5em;
            line-height: 2.5em;
            background: rgba(0, 0, 0, .25);
            display: inline-block;
            padding: .25em 1em;
            border-radius: global.$border-radius;
            margin: 0 .5em 0 .5em;

            &:hover {
                background: rgba(0, 0, 0, .5);
                cursor: pointer;
            }
        }
    }

    .page-content-wrapper {
        position: fixed;
        width: 100%;
        height: calc(100% - global.$nav-bar-height);
        margin-top: global.$nav-bar-height;
    }
</style>