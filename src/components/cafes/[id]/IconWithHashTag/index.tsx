'use client';
import { Tag } from '@/types';
import Image from 'next/image';
import { IconWithHashTagList, IconWithHashTagListItem, tagName } from './IconWithHashTag.css';



interface IconWithHashTageProps {
  tags: Tag[];
}
export default function IconWithHashTag({ tags }: IconWithHashTageProps) {
  return (
    <ul className={IconWithHashTagList}>
      {tags.map((tag) => (
        <li key={tag.id} className={IconWithHashTagListItem}>
          <Image src={`${tag.imageUrl}`} alt={tag.name} width={56} height={56} />
          <div className={tagName}>{tag.name}</div>
        </li>
      ))}
    </ul>
  );
}
