import SelectWrapper from './SelectWrapper';
import SelectTrigger from './SelectTrigger';
import SelectOptions from './SelectOptions';
import SelectOption from './SelectOption';

export const Select = Object.assign(SelectWrapper, {
    Trigger: SelectTrigger,
    Options: SelectOptions,
    Option: SelectOption,
});
