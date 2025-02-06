'use client';

import { useState, useEffect } from 'react';
import BookMarkIcon from '@/assets/Icon/Bookmark.svg';
import { bookMarkButton } from './BookMark.css';
import { color } from '@/styles/color.css';

interface CafeBookmark {
  id: string;
  name: string;
  location: string;
  mainImageUrl: string[];
}
interface BookMarkProps {
  cafe: CafeBookmark;
}

export default function BookMarkButton({ cafe }: BookMarkProps) {
  const [bookMarks, setBookMarks] = useState<CafeBookmark[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookMarkList');
    if (savedBookmarks) {
      setBookMarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const toggleBookmark = () => {
    const isBookmarked = bookMarks.some((bookmark) => bookmark.id === cafe.id);

    let updatedBookMarks;
    if (isBookmarked) {

      updatedBookMarks = bookMarks.filter((bookmark) => bookmark.id !== cafe.id);
    } else {
   
      const newBookmark: CafeBookmark = {
        id: cafe.id,
        name: cafe.name,
        location: cafe.location,
        mainImageUrl: cafe.mainImageUrl,
      };
      updatedBookMarks = [...bookMarks, newBookmark];
    }

    setBookMarks(updatedBookMarks);
    localStorage.setItem('bookMarkList', JSON.stringify(updatedBookMarks));
  };

  const isCurrentCafeBookMarked = bookMarks.some((bookmark) => bookmark.id === cafe.id);

  return (
    <div className={bookMarkButton}>
      <BookMarkIcon
        onClick={toggleBookmark}
        fill={isCurrentCafeBookMarked ? color.grayScale.gray500 : 'none'}
      />
    </div>
  );
}
