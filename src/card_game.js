const difficulty = [
    {
        tag: "div",
        cls: 'box',
        content: [{

            tag: 'h1',
            cls: 'title',
            content: 'Выбери сложность'
        },
        {
            tag: 'div',
            cls: 'windows',
            content: [{

                tag: 'div',
                cls: 'window',
                content: [{

                    tag: 'input',
                    attrs: {
                        type: 'radio',
                        name: 'radio',
                        id: 'radio_1',
                        checked: ''
                    }
                },
                {
                    tag: 'label',
                    content: "1",
                    attrs: {
                        for: 'radio_1'
                    }
                }],
            },
            {
                tag: 'div',
                cls: 'window',
                content: [{

                    tag: 'input',
                    attrs: {
                        type: 'radio',
                        name: 'radio',
                        id: 'radio_2',
                    }
                },
                {
                    tag: 'label',
                    content: "2",
                    attrs: {
                        for: 'radio_2'
                    }
                }],
            },
            {
                tag: 'div',
                cls: 'window',
                content: [{

                    tag: 'input',
                    attrs: {
                        type: 'radio',
                        name: 'radio',
                        id: 'radio_3',
                    }
                },
                {
                    tag: 'label',
                    content: "3",
                    attrs: {
                        for: 'radio_3'
                    }
                }]
            }
            ]
        },
        {
            tag: 'button',
            attrs: {
                id: 'btn'
            },
            content: 'Старт',
            cls: 'button__start'
        }
        ]
    }
]

const temporary = {
    tag: "div",
    cls: 'box',
    content: [{

        tag: 'h1',
        cls: 'title',
        content: 'Следующая страница'
    }]
}