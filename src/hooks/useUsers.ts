import { useState, SetStateAction, useEffect } from 'react';

export const useUsers = (
	value: string,
	setStateAction: React.Dispatch<SetStateAction<string>>,
	initialUsers: string[]
) => {
	const [users, setUsers] = useState(() => {
		try {
			const storedUsers = window.localStorage.getItem('users');
			return storedUsers ? JSON.parse(storedUsers) : initialUsers;
		} catch (error) {
			console.log(error);
			return initialUsers;
		}
	});

	const [isUpdating, setIsUpdating] = useState(false);
	const [updateIndex, setUpdateIndex] = useState(0);

	const createItem = (value: string) => {
		if (!value) return;

		setUsers((prevUsers: string[]) => [...prevUsers, value]);
		setStateAction('');
	};

	const updateItem = (indexItem: number) => {
		setStateAction(users[indexItem]);
		setIsUpdating(true);
		setUpdateIndex(indexItem);
	};

	const deleteItem = (indexItem: number) => {
		setUsers((prevUsers: string[]) =>
			prevUsers.filter((_value, index) => index !== indexItem)
		);
	};

	const acceptUpdate = () => {
		if (!value) return;

		setUsers((prevUsers: string[]) =>
			prevUsers.map((user, index) => (index === updateIndex ? value : user))
		);

		setIsUpdating(false);
		setUpdateIndex(0);
		setStateAction('');
	};

	useEffect(() => {
		try {
			const storedUsers = window.localStorage.getItem('users');
			if (storedUsers) {
				setUsers(JSON.parse(storedUsers));
			}
		} catch (error) {
			console.log(error);
		}
	}, [setUsers]);

	useEffect(() => {
		try {
			window.localStorage.setItem('users', JSON.stringify(users));
		} catch (error) {
			console.log(error);
		}
	}, [users]);

	return {
		users,
		isUpdating,
		createItem,
		updateItem,
		deleteItem,
		acceptUpdate,
	};
};
