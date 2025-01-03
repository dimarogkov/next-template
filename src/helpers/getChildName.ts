import { ReactElement } from 'react';

export const getChildName = (child: ReactElement) => (child.type as any)._payload.value.displayName;
