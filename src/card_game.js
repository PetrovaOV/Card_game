import shirtSvg from './img/shirt.svg'


export const difficulty = [
    {
        tag: 'div',
        cls: 'box',
        content: [
            {
                tag: 'h1',
                cls: 'title',
                content: 'Выбери сложность',
            },
            {
                tag: 'div',
                cls: 'windows',
                content: [
                    {
                        tag: 'div',
                        cls: 'window',
                        content: [
                            {
                                tag: 'input',
                                attrs: {
                                    type: 'radio',
                                    name: 'radio',
                                    id: 'radio_1',
                                    checked: '',
                                },
                            },
                            {
                                tag: 'label',
                                content: '1',
                                attrs: {
                                    for: 'radio_1',
                                },
                            },
                        ],
                    },
                    {
                        tag: 'div',
                        cls: 'window',
                        content: [
                            {
                                tag: 'input',
                                attrs: {
                                    type: 'radio',
                                    name: 'radio',
                                    id: 'radio_2',
                                },
                            },
                            {
                                tag: 'label',
                                content: '2',
                                attrs: {
                                    for: 'radio_2',
                                },
                            },
                        ],
                    },
                    {
                        tag: 'div',
                        cls: 'window',
                        content: [
                            {
                                tag: 'input',
                                attrs: {
                                    type: 'radio',
                                    name: 'radio',
                                    id: 'radio_3',
                                },
                            },
                            {
                                tag: 'label',
                                content: '3',
                                attrs: {
                                    for: 'radio_3',
                                },
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'button',
                attrs: {
                    id: 'btn',
                },
                content: 'Старт',
                cls: 'button__start',
            },
        ],
    },
]

export const oneCard = {
    tag: 'div',
    cls: 'card',
    attrs: {
        id: 'card',
    },
    content: [
        {
            tag: 'div',
            cls: 'front',
            content: [
                {
                    tag: 'img',
                    attrs: {
                        src: shirtSvg, // './src/img/shirt.svg'
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: 'back',
            content: [
                {
                    tag: 'svg',
                    attrs: {
                        viewBox: '0 0 169.075 244.64',
                    },
                    content: [
                        {
                            tag: 'use',
                            cls: 'imgBack',
                        },
                    ],
                },
            ],
        },
    ],
}

export const playField = {
    tag: 'div',
    cls: 'wrap',
    content: [
        {
            tag: 'div',
            cls: 'cap',
            content: [
                {
                    tag: 'div',
                    cls: 'time',
                    content: [
                        {
                            tag: 'div',
                            cls: 'min',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'min',
                                },
                                {
                                    tag: 'div',
                                    cls: 'show__min',
                                    content: '00',
                                },
                            ],
                        },
                        {
                            tag: 'div',
                            cls: 'empty',
                            content: [
                                {
                                    tag: 'div',
                                    cls: 'show__empty',
                                    content: '.',
                                },
                            ],
                        },
                        {
                            tag: 'div',
                            cls: 'sec',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'sec',
                                },
                                {
                                    tag: 'div',
                                    cls: 'show__sec',
                                    content: '00',
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: 'button',
                    attrs: {
                        id: 'btn',
                    },
                    content: 'Начать заново',
                    cls: 'button__start',
                },
            ],
        },
        {
            tag: 'div',
            cls: 'field__cards',
        },
    ],
}

// const cardsLevel2 = {
//     tag: 'div',
//     cls: 'wrap',
//     content: [
//         {
//             tag: 'div',
//             cls: 'cap',
//             content: [
//                 {
//                     tag: 'div',
//                     cls: 'time',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'min',
//                             content: [
//                                 {
//                                     tag: 'p',
//                                     content: 'min',
//                                 },
//                                 {
//                                     tag: 'div',
//                                     cls: 'show__min',
//                                     content: '00',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'empty',
//                             content: [
//                                 {
//                                     tag: 'div',
//                                     cls: 'show__empty',
//                                     content: '.',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'sec',
//                             content: [
//                                 {
//                                     tag: 'p',
//                                     content: 'sec',
//                                 },
//                                 {
//                                     tag: 'div',
//                                     cls: 'show__sec',
//                                     content: '00',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'button',
//                     attrs: {
//                         id: 'btn',
//                     },
//                     content: 'Начать заново',
//                     cls: 'button__start',
//                 },
//             ],
//         },
//         {
//             tag: 'div',
//             cls: 'field__cards',
//             content: [
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     attrs: {
//                         id: 'card00',
//                     },
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'img',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                         },
//                     ],
//                 },
//             ],
//         },
//     ],
// }

// const cardsLevel3 = {
//     tag: 'div',
//     cls: 'wrap',
//     content: [
//         {
//             tag: 'div',
//             cls: 'cap',
//             content: [
//                 {
//                     tag: 'div',
//                     cls: 'time',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'min',
//                             content: [
//                                 {
//                                     tag: 'p',
//                                     content: 'min',
//                                 },
//                                 {
//                                     tag: 'div',
//                                     cls: 'show__min',
//                                     content: '00',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'empty',
//                             content: [
//                                 {
//                                     tag: 'div',
//                                     cls: 'show__empty',
//                                     content: '.',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'sec',
//                             content: [
//                                 {
//                                     tag: 'p',
//                                     content: 'sec',
//                                 },
//                                 {
//                                     tag: 'div',
//                                     cls: 'show__sec',
//                                     content: '00',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'button',
//                     attrs: {
//                         id: 'btn',
//                     },
//                     content: 'Начать заново',
//                     cls: 'button__start',
//                 },
//             ],
//         },
//         {
//             tag: 'div',
//             cls: 'field__cards',
//             content: [
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     tag: 'div',
//                     cls: 'card',
//                     content: [
//                         {
//                             tag: 'div',
//                             cls: 'front',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'front',
//                                 },
//                             ],
//                         },
//                         {
//                             tag: 'div',
//                             cls: 'back',
//                             content: [
//                                 {
//                                     tag: 'span',
//                                     content: 'back',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//             ],
//         },
//     ],
// }
