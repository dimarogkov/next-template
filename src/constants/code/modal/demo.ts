export const MODAL_DEMO_CODE = `import { Btn, Modal, Separator, Text, Title } from '@components/atoms';

export default function ModalDemo() {
    return (
        <Modal>
            <Modal.Trigger>
                <Btn variant='outline'>Modal</Btn>
            </Modal.Trigger>
            <Modal.Content>
                <div className='w-full'>
                    <Title size='h3' className='p-2.5 md:p-4'>
                        Modal Title
                    </Title>

                    <Separator />

                    <div className='flex flex-col gap-2.5 w-full p-2.5 md:p-4'>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor nulla delectus
                            sint optio cum ducimus vitae placeat veritatis vero deleniti, voluptatibus fugit. Laudantium
                            error cum earum rem hic!
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor nulla delectus
                            sint optio cum ducimus vitae placeat veritatis vero deleniti, voluptatibus fugit. Laudantium
                            error cum earum rem hic!
                        </Text>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    );
}`;
