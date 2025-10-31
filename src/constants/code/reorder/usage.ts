export const REORDER_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Reorder } from 'framer-motion';

export default function ReorderDemo() {
	const [items, setItems] = useState([1, 2, 3, 4]);

	return (
		<Reorder.Group values={items} onReorder={setItems}>
			{items.map((item) => (
				<Reorder.Item key={item} value={item} className='relative'>
					<h4>Item {item}</h4>
					<p>Lorem ipsum dolor sit amet consectetur elit. Similique soluta consequatur vero velit.</p>
				</Reorder.Item>
			))}
		</Reorder.Group>
	);
}`;

export const REORDER_TYPE_USAGE_CODE = `import { Reorder } from 'framer-motion';

{/* <ul> by default */}
<Reorder.Group as='ul | ol | div'></Reorder.Group>`;

export const REORDER_AXIS_USAGE_CODE = `import { Reorder } from 'framer-motion';

{/* Y axis by default */}
<Reorder.Group axis='y | x'>
	<Reorder.Item drag></Reorder.Item>
</Reorder.Group>`;
