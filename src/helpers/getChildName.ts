import { ReactElement } from 'react';

export const getChildName = (child: ReactElement) => {
    return (child.type as any)._payload.value.displayName;
};
