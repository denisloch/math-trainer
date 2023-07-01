import { init } from 'svelte-i18n'
import { getSetting } from './Settings';

function getLocale() {
    let getUserPrefLocale: number = getSetting("language", "global");
    let userPrefLocale: string = "en";
    switch(getUserPrefLocale) {
        case 0: userPrefLocale = "en"; break;
        case 1: userPrefLocale = "de"; break;
    }
    
    return userPrefLocale;
}

export let localeChanged = function() {
    init({
        fallbackLocale: "en",
        //initialLocale: browser ? window.navigator.language : defaultLocale,
        initialLocale: getLocale()
    })
}