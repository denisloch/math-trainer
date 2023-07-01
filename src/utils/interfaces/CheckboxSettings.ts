import { writable, type Writable } from "svelte/store";

interface CheckboxSetting {
    label?: string | undefined,
    id: string,
    value: Writable<boolean>
}

let checkboxSettings: CheckboxSetting[] = [];
checkboxSettings = [
    {
        label: "Only Positive Solutions",
        id: "onlyPositiveSolutions",
        value: writable(false)
    }
]

export { checkboxSettings };