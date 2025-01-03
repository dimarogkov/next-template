import ModalContent from './ModalContent';
import ModalTrigger from './ModalTrigger';
import ModalWrapper from './ModalWrapper';

const Modal = Object.assign(ModalWrapper, {
    Trigger: ModalTrigger,
    Content: ModalContent,
});

export default Modal;
