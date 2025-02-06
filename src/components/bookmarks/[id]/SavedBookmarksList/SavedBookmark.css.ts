import { color } from '@/styles/color.css';
import { body1, body1Bold, title3 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem 2rem',
  justifyContent: 'space-between',
});
export const listItem = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  zIndex: '-1',
});
export const listItemTextBox = style({
  padding: '1.2rem 0',
});

export const listItemName = style({
  ...body1Bold,
});
export const listItemLocation = style({
  ...body1,
  color: color.grayScale.gray400,
});

export const listItemDivider = style({
  width: '100%',
  marginTop: '1rem',
  borderTop: '0.1rem solid #F0F0F0',
});

export const buttonSection = style({
  display: 'flex',
  gap: '0.8rem',
  width: '100%',
  position: 'absolute',
  bottom: '2.4rem',
  padding: '0 2rem',
  right: '0.25rem',
});


export const nonListContents = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
});
export const nonListTitle = style({
  ...title3,
});
export const nonListText = style({
  ...body1,
  color: color.grayScale.gray400,
});
export const nonListButton = style({
  backgroundColor: color.grayScale.gray500,
  color: color.grayScale.gray100,
  padding: '1.3rem 2rem',
  marginTop:'2rem',
  borderRadius:'0.5rem',
  cursor:'pointer',
});
