import { color } from '@/styles/color.css';
import { body1, body1Bold } from '@/styles/typo.css';
import { ComplexStyleRule, style } from '@vanilla-extract/css';
export const scrollContainer = style({
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  display: 'flex', 
  gap: '1rem',
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none', 
    },
  },
});

export const menuItemList = style({
  display: 'flex', // 요소들을 한 줄로 배치
  gap: '2.4rem',
  marginTop: '2rem',
  width: '100%',
  padding: '0', // 불필요한 여백 제거
});

export const menuItemBox = style({
  backgroundColor: color.grayScale.gray100,
  color: color.grayScale.gray500,
  padding: '1.6rem',
  width: '27.6rem',
  flexShrink: 0, // 요소가 축소되지 않도록
});
export const menuItemTitleBox = style({
  ...body1Bold,
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1.2rem',
} as ComplexStyleRule);

export const menuItemImg = style({
  width: '100%',
  height: '24.4rem',
  objectFit: 'cover',
});

export const menuItemContent = style({
  ...body1,
  marginTop: '1.2rem',
  marginBottom: '1.6rem',
  maxWidth: '100%',
  whiteSpace: 'normal', 
  wordBreak: 'break-word', 
});