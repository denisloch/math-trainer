/*
    Add Radio settings option here:
    {
        [
            {
                radio 1
            },
            {
                radio 2
            },
            {
                radio 3
            }
        ],
        [...],
        ...
    }

    (multi-select that is -> digit-type: single-digit, multi-digit, triple-digit and so on and so forth)
*/

interface RadioSetting {
    label: string,
    id: string
}

interface RadioSettingsGroup {
    label: string,
    items: RadioSetting[]
}

// Group of radio groups
let radiosettingsgroups: RadioSettingsGroup[] = [];
radiosettingsgroups = [
    {
        label: "test group",
        items: [
            {
                label: "item 1",
                id: "item-1"
            },
            {
                label: "item 2",
                id: "item-2"
            }
        ]
    }
]