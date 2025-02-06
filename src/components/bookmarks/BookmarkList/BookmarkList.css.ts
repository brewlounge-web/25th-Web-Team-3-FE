import { color } from '@/styles/color.css';
import { body1Bold } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: '0.8rem',
});

export const bookmarkLink = style({
  display: 'block',
  width: '16.3rem',
  height: '19.1rem',
  textDecoration: 'none',
});
export const bookmarkListItem = style({
  position: 'relative',
  width: '16.3rem',
  height: '19.1rem',
  backgroundColor: color.grayScale.gray100,
  cursor: 'pointer',
  padding: '0.8rem',
});
export const subTitle = style({
  ...body1Bold,
  color: color.grayScale.gray500,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});
export const closeIcon = style({
  position: 'absolute',
  top: '0.8rem',
  right: '0.8rem',
  cursor: 'pointer',
  alignContent: 'center',
});
export const bookmarkBasicImage = style({
  position: 'absolute',
  height:'14.4rem',
  right:'0.7rem',
  left: '0.7rem',
  bottom: '0.8rem',
  display:'block'
});
export const listItemCounts = style({
  position:'absolute',
  bottom:'0.8rem',
  right:'0.8rem',
  width: '3.6rem',
  height: '3.6rem',
  backgroundColor: color.grayScale.gray500,
  opacity:'80%',
  color: color.grayScale.gray100,
  zIndex: '9999',
});
export const listItemCountsNumber= style({
  position:'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
})