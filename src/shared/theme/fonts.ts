
export const fonts = {
  kanit: {
    regular: 'Kanit-Regular',
    light: 'Kanit-Light',
    bold: 'Kanit-Bold',
    medium: 'Kanit-Medium',
    semiBold: 'Kanit-SemiBold',
    italic: 'Kanit-Italic',
  },
  sarabun: {
    regular: 'Sarabun-Regular',
    italic: 'Sarabun-Italic',
    bold: 'Sarabun-Bold',
  },
} as const

export type fontsType = typeof fonts
