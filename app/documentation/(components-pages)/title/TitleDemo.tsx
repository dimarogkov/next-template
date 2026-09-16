import { Title } from '@components/atoms';

export const TitleDemo = () => {
    return (
        <div className="relative flex w-full flex-col gap-1.5">
            <Title>Title H1</Title>
            <Title size="h2">Title H2</Title>
            <Title size="h3">Title H3</Title>
            <Title size="h4">Title H4</Title>
        </div>
    );
};
