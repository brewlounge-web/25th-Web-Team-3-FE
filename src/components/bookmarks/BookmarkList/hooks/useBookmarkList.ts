import { useEffect, useState } from 'react';

export interface BookmarkListType {
  id: string;
  listName: string;
  mainImageUrl?: string;
}
export const useBookmarkList = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType[]>([]);

  useEffect(() => {
    localStorage.removeItem('bookId')
    const savedBookmarks = localStorage.getItem('bookmarkList');
    if (savedBookmarks) {
      setBookmarkList(JSON.parse(savedBookmarks));
    }
  }, []);
  const addBookmarkList = (listName: string) => {
    setBookmarkList((prev) => {
      const updatedList = [
        ...prev,
        {
          id: `bookmark-${Date.now()}`,
          listName,
        },
      ];
      localStorage.setItem('bookmarkList', JSON.stringify(updatedList));

      return updatedList;
    });
  };

  const deleteBookmarkList = (id: string) => {
    const updatedList = bookmarkList.filter((item) => item.id !== id);
    setBookmarkList(updatedList);
    localStorage.setItem('bookmarkList', JSON.stringify(updatedList));
  };

  return { bookmarkList, addBookmarkList, deleteBookmarkList };
};
