import { Btn, Modal, Separator, Text, Title } from '@components/atoms';

export const ModalDemo = () => {
    return (
        <Modal>
            <Modal.Trigger>
                <Btn variant="outline">Modal</Btn>
            </Modal.Trigger>
            <Modal.Content>
                <div className="w-full">
                    <Title size="h3" className="p-2.5 md:p-4">
                        Mountain Trail Guide
                    </Title>

                    <Separator />

                    <div className="flex w-full flex-col gap-2.5 p-2.5 md:p-4">
                        <Text>
                            Mountain trails wind through dense forest before opening into wide alpine meadows, where
                            wildflowers bloom through most of the summer.
                        </Text>
                        <Text>
                            Early starts are rewarded with cooler temperatures and quieter paths, giving hikers a better
                            chance to spot deer and other wildlife along the way.
                        </Text>
                        <Text>
                            Pack enough water for the full distance, since there are no refill points until the ranger
                            station near the final overlook.
                        </Text>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    );
};
