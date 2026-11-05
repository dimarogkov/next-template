import { Text } from '@components/atoms';

export const TextDemo = () => {
    return (
        <div className="flex flex-col gap-2.5">
            <Text size="large">
                Good typography makes long paragraphs easier to read without the words ever calling attention to
                themselves.
            </Text>

            <Text>
                Good typography makes long paragraphs easier to read without the words ever calling attention to
                themselves.
            </Text>

            <Text size="small">
                Good typography makes long paragraphs easier to read without the words ever calling attention to
                themselves.
            </Text>
        </div>
    );
};
