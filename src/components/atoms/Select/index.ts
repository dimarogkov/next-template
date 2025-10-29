import SelectWrapper from './SelectWrapper';
import SelectTrigger from './SelectTrigger';
import SelectOptions from './SelectOptions';
import SelectGroup from './SelectGroup';
import SelectLabel from './SelectLabel';
import SelectOption from './SelectOption';

export const Select = Object.assign(SelectWrapper, {
    Trigger: SelectTrigger,
    Options: SelectOptions,
    Group: SelectGroup,
    Label: SelectLabel,
    Option: SelectOption,
});
