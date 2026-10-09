import { IPath } from '@interfaces/Path';

export const PATHS = {
    HOME: '/',
    DOCUMENTATION: '/documentation',
    NOT_FOUND: '*',
    PAGES: {
        COMPONENTS: {
            ACCORDION: { path: '/accordion', status: 'updated' },
            ALERT: { path: '/alert' },
            AVATAR: { path: '/avatar' },
            BADGE: { path: '/badge' },
            BLOCKQUOTE: { path: '/blockquote' },
            BREADCRUMB: { path: '/breadcrumb' },
            BTN: { path: '/button' },
            CARD: { path: '/card' },
            CAROUSEL: { path: '/carousel' },
            CHECKBOX: { path: '/checkbox' },
            DROPDOWN: { path: '/dropdown' },
            INPUT: { path: '/input' },
            INPUT_PASSWORD: { path: '/input-password' },
            LABEL: { path: '/label' },
            LOADER: { path: '/loader' },
            MODAL: { path: '/modal' },
            PAGINATION: { path: '/pagination' },
            PIN_INPUT: { path: '/pin-input' },
            PROGRESS: { path: '/progress' },
            RADIO: { path: '/radio' },
            REORDER: { path: '/reorder' },
            SELECT: { path: '/select', status: 'updated' },
            SEPARATOR: { path: '/separator' },
            SIMPLE_LINK: { path: '/simple-link' },
            SWITCH: { path: '/switch' },
            TABS: { path: '/tabs' },
            TEXT: { path: '/text' },
            TEXTAREA: { path: '/textarea' },
            TITLE: { path: '/title' },
            TOAST: { path: '/toast' },
            TOOLTIP: { path: '/tooltip', status: 'new' }
        } satisfies Record<string, IPath>,
        DATA_FETCHING: {
            RTK_QUERY: { path: '/RTK-query' },
            TANSTACK_QUERY: { path: '/tanStack-query' }
        } satisfies Record<string, IPath>,
        FORM_VALIDATION: {
            YUP: { path: '/yup' },
            ZOD: { path: '/zod' }
        } satisfies Record<string, IPath>,
        STORE: {
            REDUX_TOOLKIT: { path: '/redux-toolkit' },
            ZUSTAND: { path: '/zustand' }
        } satisfies Record<string, IPath>
    }
};
