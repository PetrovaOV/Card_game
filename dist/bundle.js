/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card_game.css":
/*!***************************!*\
  !*** ./src/card_game.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/card_game.js":
/*!**************************!*\
  !*** ./src/card_game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "difficulty": () => (/* binding */ difficulty),
/* harmony export */   "oneCard": () => (/* binding */ oneCard),
/* harmony export */   "playField": () => (/* binding */ playField)
/* harmony export */ });
/* harmony import */ var _img_shirt_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/shirt.svg */ "./src/img/shirt.svg");



const difficulty = [
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

const oneCard = {
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
                        src: _img_shirt_svg__WEBPACK_IMPORTED_MODULE_0__, // './src/img/shirt.svg'
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

const playField = {
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


/***/ }),

/***/ "./src/game_class.js":
/*!***************************!*\
  !*** ./src/game_class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _template_engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-engine.js */ "./src/template-engine.js");
/* harmony import */ var _card_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card_game.js */ "./src/card_game.js");
/* harmony import */ var _img_svg_cards_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/svg-cards.svg */ "./src/img/svg-cards.svg");




class Game {
    constructor(screen) {
        if (!(screen instanceof HTMLElement)) {
            console.error('Error: the argument must be an HTML element')
            return
        }

        this.screen = screen
        this.init()
        this.numberOfCards
    }

    init() {
        window.application.screen = _card_game_js__WEBPACK_IMPORTED_MODULE_1__.difficulty
        this.renderScreen()

        const radioButtons = this.screen.querySelectorAll('[id^="radio_"]')
        const startButton = this.screen.querySelector('#btn')

        radioButtons.forEach((radioButton) => {
            radioButton.addEventListener('change', (event) => {
                if (event.target.checked) {
                    window.application.difficultyLevel =
                        radioButton.nextSibling.textContent
                }
            })
        })

        startButton.addEventListener('click', () => this.playProcess())
    }

    playProcess() {
        const levels = {
            1: 6,
            2: 12,
            3: 18,
        }
        this.numberOfCards = levels[window.application.difficultyLevel] || 6

        let suits = ['club', 'spade', 'heart', 'diamond']
        let ranks = [
            'king',
            'queen',
            'jack',
            '10',
            '9',
            '8',
            '7',
            '6',
            '5',
            '4',
            '3',
            '2',
            '1',
        ]
        let fullCardDeck = []

        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                let card = '#' + suit + '_' + rank
                fullCardDeck.push(card)
            })
        })
        // получаем набор парных карт из колоды
        for (let index = 0; index < this.numberOfCards / 2; index++) {
            let randomCard = fullCardDeck.splice(
                Math.floor(Math.random() * fullCardDeck.length),
                1
            )[0]
            window.application.cards.push(randomCard, randomCard)
        }
        //  тасуем колоду по методу Фишера — Йетса
        for (let i = window.application.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[window.application.cards[i], window.application.cards[j]] = [
                window.application.cards[j],
                window.application.cards[i],
            ]
        }

        window.application.screen = _card_game_js__WEBPACK_IMPORTED_MODULE_1__.playField
        this.renderScreen()
        const field = document.querySelector('.field__cards')
        for (let index = 0; index < this.numberOfCards; index++) {
            field.appendChild((0,_template_engine_js__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(_card_game_js__WEBPACK_IMPORTED_MODULE_1__.oneCard))
            let cardId = document.querySelector('#card')
            let cardFront = cardId.querySelector('.imgBack')
            cardFront.setAttribute(
                'href',
                _img_svg_cards_svg__WEBPACK_IMPORTED_MODULE_2__ + window.application.cards[index]
            )
            cardId.setAttribute('id', `${index}`)
        }
        setTimeout(() => {
            this.showAllCards()
        }, 100)

        setTimeout(() => {
            this.hideAllCards()
        }, 5000)

        const cards = document.querySelectorAll('.card')
        window.application.counterCards = this.numberOfCards
        cards.forEach((card) => {
            card.addEventListener('click', (event) => {
                card.firstElementChild.classList.add('card__front')
                card.lastElementChild.classList.add('card__back')
                let currentCard = event.target.parentElement.parentElement.id
                window.application.counterCards =
                    window.application.counterCards - 1
                if (window.application.counterCards > 0) {
                    if (!window.application.chosenCard) {
                        window.application.chosenCard = currentCard
                    } else {
                        if (
                            window.application.cards[
                                window.application.chosenCard
                            ] !== window.application.cards[currentCard]
                        ) {
                            this.showAllCards
                            setTimeout(() => {
                                alert('Вы проиграли!')
                            }, 1000)
                        } else {
                            window.application.chosenCard = null
                        }
                    }
                } else {
                    this.showAllCards
                    setTimeout(() => {
                        alert('Вы победили!')
                    }, 1000)
                }
            })
        })
    }

    showAllCards() {
        const frontCards = document.querySelectorAll('.front')
        const backCards = document.querySelectorAll('.back')
        backCards.forEach((backCard) => {
            backCard.classList.add('card__back')
        })
        frontCards.forEach((frontCard) => {
            frontCard.classList.add('card__front')
        })
    }
    hideAllCards() {
        const frontCards = document.querySelectorAll('.front')
        const backCards = document.querySelectorAll('.back')
        backCards.forEach((backCard) => {
            backCard.classList.remove('card__back')
            backCard.classList.add('card__back_hidden')
        })
        frontCards.forEach((frontCard) => {
            frontCard.classList.remove('card__front')
            frontCard.classList.add('card__front_hidden')
        })
        setTimeout(() => {
            backCards.forEach((backCard) => {
                backCard.classList.remove('card__back_hidden')
            })
            frontCards.forEach((frontCard) => {
                frontCard.classList.remove('card__front_hidden')
            })
        }, 999)
    }

    renderScreen() {
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild)
        }
        this.screen.appendChild((0,_template_engine_js__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(window.application.screen))
    }
}


/***/ }),

/***/ "./src/template-engine.js":
/*!********************************!*\
  !*** ./src/template-engine.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateEngine": () => (/* binding */ templateEngine)
/* harmony export */ });
function templateEngine(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('')
    }
    if (
        typeof block === 'string' ||
        typeof block === 'number' ||
        block === true
    ) {
        return document.createTextNode(block)
    }
    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment()

        block.forEach((item) => {
            const el = templateEngine(item)

            fragment.appendChild(el)
        })

        return fragment
    }

    let element
    if (block.tag === 'svg' || block.tag === 'use') {
        element = document.createElementNS(
            'http://www.w3.org/2000/svg',
            block.tag
        )
    } else {
        element = document.createElement(block.tag)
    }

    if (block.cls) {
        element.classList.add(...[].concat(block.cls).filter(Boolean))
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs)

        keys.forEach((key) => {
            element.setAttribute(key, block.attrs[key])
        })
    }

    const content = templateEngine(block.content)

    element.appendChild(content)

    return element
}


/***/ }),

/***/ "./src/img/shirt.svg":
/*!***************************!*\
  !*** ./src/img/shirt.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64d239af384975b86e8d.svg";

/***/ }),

/***/ "./src/img/svg-cards.svg":
/*!*******************************!*\
  !*** ./src/img/svg-cards.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "218fd87b282c15dbca48.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_class.js */ "./src/game_class.js");
/* harmony import */ var _card_game_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card_game.css */ "./src/card_game.css");



window.application = {
    difficultyLevel: 1,
    screen: {},
    spentTime: undefined,
    cards: [],
    chosenCard: null,
    counterCards: null,
}

const screen = document.querySelector('.app')
document.addEventListener('DOMContentLoaded', () => {
  const game = new _game_class_js__WEBPACK_IMPORTED_MODULE_0__.Game(screen);
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map