'use client';
import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { Card, Text, Title } from '@components/atoms';

export default function ReorderDemo() {
    const [itemsY, setItemsY] = useState([1, 2, 3]);
    const [itemsX, setItemsX] = useState([1, 2, 3]);

    return (
        <>
            <Reorder.Group values={itemsY} onReorder={setItemsY} axis='y' className='grid grid-cols-1 gap-2.5 mb-2.5'>
                {itemsY.map((item) => (
                    <Reorder.Item key={item} value={item} className='relative'>
                        <Card className='p-2.5 !bg-bg'>
                            <Card.Body>
                                <Title size='h4' className='mb-0.5 last:mb-0'>
                                    Item {item}
                                </Title>

                                <Text>Lorem ipsum dolor sit amet consectetur elit. Similique soluta vero velit.</Text>
                            </Card.Body>
                        </Card>
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            <Reorder.Group values={itemsX} onReorder={setItemsX} axis='x' className='grid grid-cols-3 gap-2.5'>
                {itemsX.map((item) => (
                    <Reorder.Item key={item} value={item} drag className='relative'>
                        <Card className='p-2.5 !bg-bg'>
                            <Card.Body>
                                <Title size='h4' className='mb-0.5 last:mb-0'>
                                    Item {item}
                                </Title>

                                <Text>Lorem ipsum dolor sit amet consectetur elit. Similique soluta vero velit.</Text>
                            </Card.Body>
                        </Card>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </>
    );
}
