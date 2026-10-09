import { Input, Kbd, Label } from '@components/atoms';
import { Search } from 'lucide-react';

export const HeaderSearchTrigger = () => {
    return (
        <Label className="bg-border pointer-events-none flex h-9 w-46! items-center gap-2.5 rounded-md px-2.5 md:w-50!">
            <Search className="group-hover:text-title size-5 transition-colors duration-300" />

            <Input
                name="search"
                placeholder="Search..."
                disabled
                className="group-hover:placeholder:text-title h-full! flex-1 border-none! bg-transparent! p-0! placeholder:transition-colors placeholder:duration-300"
            />

            <Kbd aria-hidden="true">/</Kbd>
        </Label>
    );
};
