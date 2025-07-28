export const TOAST_MAIN_USAGE_CODE = `import { Toaster } from 'react-hot-toast';

<Toaster
	position='bottom-right'
	reverseOrder={false}
	toastOptions={{ duration: 2000 }}
/>`;

export const TOAST_USAGE_CODE = `{/* Info Type by default */}
const toggleToast = () => {
	toast.custom((t) => (
		<Toast
			toast={t}
			type='info | success | warning | error'
			data={{
				title: 'Toast Title',
				text: 'This toast message notifies you of something.',
			}}
		/>
	));
};

<Btn onClick={toggleToast}>Toast Trigger</Btn>`;
