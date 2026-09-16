export const REORDER_USAGE_CODE = `import { useState } from 'react';
import { Reorder } from 'framer-motion';

export const ReorderDemo = () => {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const setGrabbingCursor = () => document.body.classList.add('dragging');
  const resetCursor = () => document.body.classList.remove('dragging');

  return (
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          onDragStart={setGrabbingCursor}
          onDragEnd={resetCursor}
          className='relative cursor-grab active:cursor-grabbing'
        >
          <h4>Item {item}</h4>
          <p>Lorem ipsum dolor sit amet consectetur elit. Similique soluta consequatur vero velit.</p>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};`;

export const REORDER_TYPE_USAGE_CODE = `<Reorder.Group as='ul | ol | div'></Reorder.Group>`;

export const REORDER_AXIS_USAGE_CODE = `<Reorder.Group axis='y | x'>
  <Reorder.Item drag></Reorder.Item>
</Reorder.Group>`;
