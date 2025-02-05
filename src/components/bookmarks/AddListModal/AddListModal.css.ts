import { color } from '@/styles/color.css';
import { body1, button2 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const contentsInputContainer = style({
  color: color.grayScale.gray500,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
export const addListModalInput = style({
  ...body1,
  width: '100%',
  backgroundColor: color.grayScale.gray100,
  color: color.grayScale.gray500,

  outline: 'none',
  padding: '1.2rem 1.6rem 1.2rem 1.2rem ',
  borderRadius: '0.5rem',
  border: '1px solid',
});

export const addListCompleteButton = recipe({
  base: {
    ...button2,
    backgroundColor: '#E7E7E7',
    width: '100%',
    textAlign: 'center',
    padding: '1.3rem 0',
    borderRadius: '0.5rem',
    color: color.grayScale.gray100,
    cursor: 'not-allowed',
  },
  variants: {
    isButtonActive: {
      true: {
        backgroundColor: color.grayScale.gray500,
        color: color.grayScale.gray100,
        cursor: 'pointer',
      }
    },
  },
});

export const maxLengthText = style({
  ...body1,
  position: 'absolute',
  top: '1.2rem',
  right: '1.6rem',
  color: color.grayScale.gray400,
});
