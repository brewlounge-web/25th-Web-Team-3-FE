import * as React from 'react';
import introduceEndImage from '@/assets/introduce/intro-last.jpg';
import {
  introEndDescription,
  introEndImage,
  introEndSeparator,
  introEndTitle,
} from './introduce.css';
import PopUpButton from '../common/PopUpButton';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/routePath';
import { GOOGLE_FORM_URL } from '@/constants/externalUrl';

export default function IntroduceEnd() {
  return (
    <div>
      <h1 className={introEndTitle}>
        이제 브루라운지에서
        <br /> 마음에 드는 카페를 찾아보세요!
      </h1>
      <img className={introEndImage} src={introduceEndImage.src} />
      <p className={introEndDescription}>
        브루라운지와 함께 커피의 새로운 매력을 발견하고 <br />
        완벽한 한모금을 경험해보세요
      </p>
      <div style={{ marginBottom: '2.1rem' }}>
        <Link href={ROUTE_PATH.cafes}>
          <PopUpButton color="black" title="카페 찾으러 가기" />
        </Link>
      </div>
      <div className={introEndSeparator} />
      <p className={introEndDescription}>
        제보하고 싶은 카페가 있거나, 기재된 카페 정보에
        <br /> 오류가 있다면 저희에게 알려주세요.
        <br />
        검토 후 최대한 반영할 수 있도록 노력하겠습니다.
      </p>
      <a href={GOOGLE_FORM_URL} rel="noopener noreferrer">
        <PopUpButton title="카페 제보 / 오류 신고하기" />
      </a>
    </div>
  );
}
