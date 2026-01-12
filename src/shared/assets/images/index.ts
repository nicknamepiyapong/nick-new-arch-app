export const Images = {
    common: {
        backButton: require('./common/backButton.png'),
    },
    icons: {
        Plus: require('./icons/Plus.png'),
        Question: require('./icons/Question.png'),
    },
} as const
export type ImagesType = typeof Images