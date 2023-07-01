import { init, register } from 'svelte-i18n'
import { getSetting } from '../utils/interfaces/Settings'

const defaultLocale = 'en'
register('en', () => import('./locales/en.json'))
register('de', () => import('./locales/de.json'))

initUserPrefLocale(getSetting("language", "global"));

function initUserPrefLocale(val: number) {
    let pref = "";
    switch(val) {
        case 0: 
            pref = "en"; 
            break;
        case 1: 
            pref = "de"; 
            break;
    }

    init({
        fallbackLocale:  defaultLocale,
        //initialLocale: browser ? window.navigator.language : defaultLocale,
        initialLocale: pref
    })
}
    

