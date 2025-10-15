export const TOAST_MAIN_USAGE_CODE = `import { Toaster } from 'react-hot-toast';

<Toaster
	position='bottom-right'
	reverseOrder={false}
	toastOptions={{ duration: 2000 }}
/>`;

export const TOAST_USAGE_CODE = `{/* Default type by default */}
const toggleToast = () => {
	toast.custom((t) => (
		<Toast
			toast={t}
			type='default | success | warning | error'
			data={{
				title: 'Toast Title',
				text: 'This toast message notifies you of something.',
			}}
		/>
	));
};

<Btn onClick={toggleToast}>Toast Trigger</Btn>`;
