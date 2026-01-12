export const colors = {
  primary: '#072981',
  primary2: '#3D67DA',
  primary3: '#FFB326',
  primary4: '#C9D8FF',
  white: '#ffffff',
  black: '#000000',
  yellow: ['#FFF2DA', '#FAC35B' ,'#FFB326' , '#E29300'],
  green: ['#B1F2C7', '#328D52', '#F3FFFD', '#13999B'],
  red: ['#FFBFB5', '#E55842', '#F4735F' , '#D5614B' , '#FCEDE6' , '#FFECE5'],
  gray: ['#F5F5F5', '#EBEBEB', '#7E7E7E', '#D5D5D5' , '#9E9E9E', '#F9F9F9', '#EFF3F7', '#F2F2F2', '#AAAAAA'],
  blue: ['#5E79EB', '#BECBFF', '#C9D8FF'],
  opacityBlack: ['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.6)'],
  opacityWhite: ['rgba(255, 255, 255, 0.8)'],
  opacityRed: ['rgba(244, 115, 95, 0.75)'],
} as const

export type colorType = keyof typeof colors