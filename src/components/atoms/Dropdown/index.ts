import DropdownWrapper from './DropdownWrapper';
import DropdownTrigger from './DropdownTrigger';
import DropdownContent from './DropdownContent';
import DropdownMenu from './DropdownMenu';
import DropdownLabel from './DropdownLabel';
import DropdownSeparator from './DropdownSeparator';
import DropdownItem from './DropdownItem';
import DropdownSubMenu from './DropdownSubMenu';
import DropdownSubTrigger from './DropdownSubTrigger';
import DropdownSubContent from './DropdownSubContent';

export const Dropdown = Object.assign(DropdownWrapper, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
    Menu: DropdownMenu,
    Label: DropdownLabel,
    Separator: DropdownSeparator,
    Item: DropdownItem,
    SubMenu: DropdownSubMenu,
    SubTrigger: DropdownSubTrigger,
    SubContent: DropdownSubContent,
});
