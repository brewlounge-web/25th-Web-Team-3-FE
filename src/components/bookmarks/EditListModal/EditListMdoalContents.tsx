import PopUpButton from '@/components/common/PopUpButton';
import { buttonSection, editModalContainer, subTitle } from './EditListModal.css';

interface EditListModalContentsProps {
  listName: string;
  onClose: () => void;
  onDelete: (id: string) => void;
}
export default function EditListModalContents({
  onClose,
  onDelete,
}: EditListModalContentsProps) {
  const handleDelete = (id: string) => {
    onDelete(id);
    onClose();
  };
  return (
    <div className={editModalContainer}>
      <p className={subTitle}>폴더에 저장해 놓은 카페가 함께 삭제됩니다.</p>
      <section className={buttonSection}>
        <PopUpButton title="아니오" onClick={onClose} />
        <PopUpButton title="네" color="black" onClick={handleDelete} />
      </section>
    </div>
  );
}
