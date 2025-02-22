'use client';

import * as React from 'react';
import FullPageCarousel from '@/components/introduce/FullPageCarousel';
import IntroduceMain from '../../../components/introduce/IntroduceMain';
import IntroduceTemplate from '@/components/introduce/IntroduceTemplate';
import { introduceContents } from '../../../components/introduce/introduceContents';
import { introducePage } from '@/components/introduce/introduce.css';
import IntroduceEnd from '@/components/introduce/IntroduceEnd';

export default function Page() {
  return (
    <div className={introducePage}>
      <FullPageCarousel>
        <FullPageCarousel.Slide>
          <IntroduceMain />
        </FullPageCarousel.Slide>
        {introduceContents.map(({ id, title, icon, subTitle, description, image }) => {
          return (
            <FullPageCarousel.Slide key={id}>
              <IntroduceTemplate
                title={title}
                icon={icon}
                subTitle={subTitle}
                description={description}
                image={image}
              />
            </FullPageCarousel.Slide>
          );
        })}
        <FullPageCarousel.Slide>
          <IntroduceEnd />
        </FullPageCarousel.Slide>
      </FullPageCarousel>
    </div>
  );
}
