import Modal from '@/components/common/Modal';
import EditListModalContents from './EditListMdoalContents';

interface EditListModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
  listName: string;
}
export default function EditListModal({
  id,
  isOpen,
  onClose,
  listName,
  onDelete,
}: EditListModalProps) {
  return (
    <Modal title={`'${listName}' 폴더를 삭제하시겠습니까?`} isOpen={isOpen} onClose={onClose} closeButton={false}>
      <EditListModalContents listName={listName} onClose={onClose} onDelete={() => onDelete(id)} />
    </Modal>
  );
}
