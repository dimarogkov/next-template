export interface IDocumentationCodeArr {
    label: string;
    code: string;
}

export interface IDocumentationCodeSection {
    id: string;
    title: string;
    link: string;
    description: JSX.Element | null;
    withAccordion: boolean;
    codeArr: IDocumentationCodeArr[] | string[];
}

export interface IDocumentationData {
    title: string;
    description: string;
    preview: JSX.Element;
    codeSections: IDocumentationCodeSection[];
}

export interface IDocumentationBodyItem {
    title: string;
    text: string;
    links: {
        name: string;
        href: string;
    }[];
}
