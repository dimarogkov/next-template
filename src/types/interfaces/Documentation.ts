import type { ReactElement } from 'react';
import { ILink } from './Link';

export interface IDocumentationPreview {
    demo: ReactElement;
    code: string;
}

export interface IDocumentationLink extends ILink {
    isNew: boolean;
}

export interface IDocumentationCodeArr {
    label: string;
    code: string;
}

export interface IDocumentationCodeSection {
    id: string;
    title: string;
    link: string;
    description: ReactElement | null;
    withAccordion: boolean;
    codeArr: IDocumentationCodeArr[] | string[];
}

export interface IDocumentationData {
    title: string;
    description: string;
    links: ILink[];
    preview: IDocumentationPreview;
    codeSections: IDocumentationCodeSection[];
}

export interface IDocumentationBodyItem {
    title: string;
    text: string;
    links: IDocumentationLink[];
}
