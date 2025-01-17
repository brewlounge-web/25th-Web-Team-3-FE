'use client';
import { usePathname } from 'next/navigation';
import { hashTag, hashTagItem } from './HashTag.css';
import Baristar from '@/assets/Icon/baristar.svg';
import Roastery from '@/assets/Icon/roastery.svg';
import DirCoffee from '@/assets/Icon/dripCoffee.svg';
import Signiture from '@/assets/Icon/signiture.svg';

const HASH_TAG_DATA = [
  {
    Icon: Baristar,
    name: '전문 바리스타',
  },
  {
    Icon: Roastery,
    name: '로스터리',
  },
  {
    Icon: DirCoffee,
    name: '드립커피',
  },
  {
    Icon: Signiture,
    name: '시그니처',
  },
];

export function HashTag() {
  const pathName = usePathname();

  // 상세 페이지 여부를 판단
  function isDetailPage(pathName?: string): boolean {
    if (!pathName) return false;
    const segments = pathName.split('/');
    return segments[segments.length - 2] === 'cafes' && !!segments[segments.length - 1];
  }

  // cafes 페이지 여부 확인
  const isCafesPage = isDetailPage(pathName);

  return (
    <ul className={hashTag}>
      {HASH_TAG_DATA.map((tag, index) => (
        <li key={index} className={hashTagItem({ isCafesPage })}>
          {isCafesPage ? (
            <div>
              <tag.Icon/>
              <div>{tag.name}</div>
            </div>
          ) : (
            <span>{tag.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
