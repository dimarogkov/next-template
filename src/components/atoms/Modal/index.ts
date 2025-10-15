import ModalWrapper from './ModalWrapper';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';

export const Modal = Object.assign(ModalWrapper, {
    Trigger: ModalTrigger,
    Content: ModalContent,
});
