import * as React from 'react';
import { introDescription, introImage, introSubTitle, introTitle } from './introduce.css';

export interface IntroduceTemplateProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  subTitle: string;
  description: React.ReactNode;
  image: string;
}

export default function IntroduceTemplate({
  title,
  icon,
  subTitle,
  description,
  image,
}: IntroduceTemplateProps) {
  return (
    <div>
      <h1 className={introTitle}>{title}</h1>
      <div className={introSubTitle}>
        {icon} {subTitle}
      </div>
      <p className={introDescription}>{description}</p>
      <img className={introImage} src={image} />
    </div>
  );
}
