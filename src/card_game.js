import shirtSvg from './img/shirt.svg'
import winSvg from './img/win.svg'
import loseSvg from './img/lose.svg'

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

export const winner = [
    {
        tag: 'div',
        cls: 'curtain',
    },
    {
        tag: 'div',
        cls: 'box__2',
        content: [
            {
                tag: 'img',
                attrs: {
                    src: winSvg,
                },
            },
            {
                tag: 'h1',
                cls: 'title__win_lose',
                content: 'Вы выиграли!',
            },
            {
                tag: 'p',
                cls: 'blackText',
                content: 'Затраченное время: ',
            },
            {
                tag: 'p',
                cls: 'time_2',
            },
            {
                tag: 'button',
                attrs: {
                    id: 'btn',
                },
                content: 'Играть снова',
                cls: 'play__again',
            },
        ],
    },
]

export const loser = [
    {
        tag: 'div',
        cls: 'curtain',
    },
    {
        tag: 'div',
        cls: 'box__2',
        content: [
            {
                tag: 'img',
                attrs: {
                    src: loseSvg,
                },
            },
            {
                tag: 'h1',
                cls: 'title__win_lose',
                content: 'Вы проиграли!',
            },
            {
                tag: 'p',
                cls: 'blackText',
                content: 'Затраченное время: ',
            },
            {
                tag: 'p',
                cls: 'time_2',
            },
            {
                tag: 'button',
                attrs: {
                    id: 'btn',
                },
                content: 'Играть снова',
                cls: 'play__again',
            },
        ],
    },
]
