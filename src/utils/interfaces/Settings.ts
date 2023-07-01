import { Games, gamesLowerCaseStringArray, type GameType } from "./Games";
import { localeChanged } from "./onChangeTriggers";
import { browser } from "$app/environment";

export type SettingsType = "global" | "game";

export type GlobalSettings = SettingsItem;

export type GameSettings = {
    gameType: GameType,
    settings: SettingsItem[]
}

export type SettingsItem = {
    type: "single", // single select checkbox
    id: string,
    value: boolean,
    onChange?: () => void
} | {
    type: "multi", // multi select radio group
    id: string,
    value: number,
    item_count: number,
    onChange?: () => void
}


/* ========== SETTINGS  ============= */
const globalSettings: GlobalSettings[] = [
    /*
    {
        type: "single",
        id: "checkbox-1",
        value: false
    },
    {
        type: "multi",
        id: "radiogroup-1",
        value: 0,
        item_count: 3
    }
    */
    {
        type: "multi",
        id: "language",
        value: 0,
        item_count: 2,
        onChange: localeChanged
    }
]

const gameSettings: GameSettings[] = [
    /*
    {
        gameType: "Addition",
        settings: [
            {
                type: "single",
                id: "checkbox-1",
                value: false
            },
        ]
    }
    */
]
/* ========== SETTINGS  ============= */


function getSettingsObjectFromLocalStorage(type: SettingsType, game?: GameType): Array<object> | null {
    if (browser) {
        let item = localStorage[type === "global" ? "globalSettings" : `gameSettings-${game}`];
        
        if (typeof item !== "undefined") {
            return JSON.parse(item);
        } else {
            return null;
        }
    }

    return null;
}

function setLocalStorageItem(key: string, value: Array<object>) {
    if (browser) {
        localStorage[key] = JSON.stringify(value);
    }
}

function createNewObject(...pairs: Array<object>) {
    let obj: object = {};

    pairs.forEach((pair) => {
        obj = {...obj, ...pair}
    })

    return obj;
}

export function getSettingsObject(type: SettingsType, game?: GameType, includeType?: boolean): Array<object> | null {
    if (type === "global") {
        let settingsObj = new Array<object>;
        globalSettings.forEach((item) => {
            let newObj;

            // Is includeType true?: add item.type
            // Is item["type"] multi?: add item_count
            newObj = createNewObject(
                includeType ? 
                    {"type": item.type} : 
                    {}, 
                {"id": item.id}, 
                {"value": item.value}, 
                item["type"] !== "single" ?
                    {"item_count": item.item_count} : 
                    {}
            )
            
            if (typeof newObj !== "undefined") {
                settingsObj.push(newObj);
            }
        })

        return settingsObj;
    } else if (type === "game") {
        if (typeof game !== "undefined") {
            let gameObj = gameSettings.find((item) => {
                return item.gameType.toLowerCase() === game.toLowerCase();
            })
            
            if (typeof gameObj !== "undefined") {
                let settingsObj = new Array<object>;

                gameObj.settings.forEach((item) => {
                    let newObj;
                    if (!includeType) {
                        newObj = {
                            id: item.id,
                            value: item.value
                        }
                    } else {
                        newObj = {
                            type: item.type,
                            id: item.id,
                            value: item.value
                        }
                    }

                    settingsObj.push(newObj);
                })

                return settingsObj;
            }
        }
    }

    return null;
}

function getGlobalSettingsObject(): Array<object> | null {
    return getSettingsObject("global");
}

function getGameSettingsObj(game: string | undefined): Array<object> | null {
    if (typeof game !== "undefined" && gamesLowerCaseStringArray.indexOf(game.toLowerCase()) > -1) {
        return getSettingsObject("game", Games[gamesLowerCaseStringArray.indexOf(game.toLowerCase())]);
    }

    return null;
}

function findObjByKey(arr: Array<object> | null | undefined, value: string): object | null {
    if (arr !== null && typeof arr !== "undefined") {
        let findObj = arr.find((item) => {
            // @ts-ignore
            return item["id"] === value;
        })
    
        if (typeof findObj !== "undefined") {
            return findObj;
        }
    }

    return null;
}

function addSettingsObjToLocalStorage(type: SettingsType, id: string, game?: GameType) {
    let settingsObjArr: Array<object> | null = getSettingsObjectFromLocalStorage(type, game);

    if (settingsObjArr !== null) {
        let initialSettingsObjArr;
        if (type === "global") {
            initialSettingsObjArr = getGlobalSettingsObject();
        } else if (type === "game") {
            initialSettingsObjArr = getGameSettingsObj(game);
        }

        if (initialSettingsObjArr !== null) {
            let findObj: object | null = findObjByKey(initialSettingsObjArr, id);
            
            if (findObj !== null) {
                settingsObjArr.push(findObj);
                setLocalStorageItem(type === "global" ? "globalSettings" : `gameSettings-${game}`, settingsObjArr);

                // @ts-ignore
                let val = findObj["value"];
                if (typeof val !== "undefined") {
                    return val;
                }
            }
        }
    }

    return null;
}

export function getSetting(id: string, type: SettingsType, game?: GameType) {
    if (browser) {
        // Finds settings object
        let settingsObjArr: Array<object> | null = getSettingsObjectFromLocalStorage(type, game);
        if (settingsObjArr === null) {
            // Settings object doesn't exist -> create

            let initialSettingsObjArr = null;
            if (type === "global") {
                initialSettingsObjArr = getGlobalSettingsObject();
            } else if (type === "game") {
                if (typeof game !== "undefined") {
                    initialSettingsObjArr = getGameSettingsObj(game);
                }
            }

            if (initialSettingsObjArr !== null) {
                setLocalStorageItem(type === "global" ? "globalSettings" : `gameSettings-${game}`, initialSettingsObjArr);
            }
        }

        let findObj: object | null = findObjByKey(settingsObjArr, id);
        if (findObj !== null) {
            // @ts-ignore
            return findObj.value;
        } else {
            // Object not found, try finding it in settings and adding it then
            return addSettingsObjToLocalStorage(type, id, game);
        }

        return null;
    }
}

export function storeSetting(id: string, type: SettingsType, game?: GameType, setting?: boolean | number) {
    if (browser) {
        // Currently only implemented for global settings
        if (type === "global") {
            let arr = getGlobalSettingsObject();
            let found = arr?.find((item) => {
                return (item as SettingsItem).id === id;
            }) as SettingsItem

            if (found) {
                if (typeof setting !== "undefined") {
                    found.value = setting;

                    if (arr !== null) {
                        setLocalStorageItem("globalSettings", arr);
                    }

                    let findInGlobalSettings = globalSettings.find((item => {
                        return (item as SettingsItem).id === id;
                    })) as SettingsItem

                    if (findInGlobalSettings) {
                        if (typeof findInGlobalSettings.onChange !== "undefined") {
                            findInGlobalSettings.onChange();
                        }
                    }
                }

            }
        }
    }
}