import DropdownWrapper from './DropdownWrapper';
import DropdownTrigger from './DropdownTrigger';
import DropdownContent from './DropdownContent';

const Dropdown = Object.assign(DropdownWrapper, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
});

export default Dropdown;
