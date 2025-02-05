import BookmarkBasicImage from '@/assets/Icon/bookmarkBasic.svg';
import CloseIcon from '@/assets/Icon/closeIcon.svg';
import { ROUTE_PATH } from '@/constants/routePath';
import Link from 'next/link';
import { useState } from 'react';
import {
  bookmarkBasicImage,
  bookmarkListItem,
  closeIcon,
  container,
  listItemCounts,
  listItemCountsNumber,
  subTitle,
} from '../BookmarkList/BookmarkList.css';
import EditListModal from '../EditListModal';
import { BookmarkListType } from './hooks/useBookmarkList';
import Image from 'next/image';

interface BookmarkListProps {
  isEdit: boolean;
  isEditModalOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onDelete: (id: string) => void;
  bookmarkList: BookmarkListType[];
}

export default function BookmarkList({
  bookmarkList,
  isEdit,
  onDelete,
  onOpen,
  onClose,
  isEditModalOpen,
}: BookmarkListProps) {
  const [selectedId, setSelectedId] = useState<string>('');

  const handleCloseClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedId(id);
    onOpen();
  };

  const BookmarkItem = ({ item }: { item: BookmarkListType }) => {
    const listData = localStorage.getItem(item.listName); 

    let imageUrl = '';
    let itemCounts = 0;
    if (listData) {
      const parsedData = JSON.parse(listData);
      console.log('Parsed Data:', parsedData[0]?.mainImageUrl[0]);
      imageUrl = parsedData[0]?.mainImageUrl[0];
      itemCounts = parsedData.length;
    }

    return (
      <li className={bookmarkListItem}>
        <div className={subTitle}>
          {isEdit && (
            <CloseIcon
              className={closeIcon}
              onClick={(e: React.MouseEvent) => handleCloseClick(e, item.id)}
            />
          )}
          <div>{item.listName}</div>
        </div>
        {imageUrl ? (
          <Image
            src={`${imageUrl}`}
            alt={item.listName}
            className={bookmarkBasicImage}
            width={148}
            height={144}
          />
        ) : (
          <BookmarkBasicImage className={bookmarkBasicImage} />
        )}
        <div className={listItemCounts}>
          <span className={listItemCountsNumber}>{itemCounts}</span>
        </div>
      </li>
    );
  };

  return (
    <ul className={container}>
      {bookmarkList.map((item) =>
        isEdit ? (
          <BookmarkItem key={item.id} item={item} />
        ) : (
          <Link
            key={item.id}
            href={{
              pathname: `${ROUTE_PATH.bookmarks}/${item.id}`,
              query: { listName: item.listName },
            }}
          >
            <BookmarkItem item={item} />
          </Link>
        )
      )}
      <EditListModal
        id={selectedId}
        isOpen={isEditModalOpen}
        onClose={onClose}
        onDelete={onDelete}
        listName={bookmarkList.find((item) => item.id === selectedId)?.listName || ''}
      />
    </ul>
  );
}
