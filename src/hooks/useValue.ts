import { useState } from 'react';

export const useValue = () => {
	const [value, setValue] = useState('');

	return { value, setValue };
};
