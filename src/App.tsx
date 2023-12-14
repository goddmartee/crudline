import { AcceptIcon, CreateIcon } from './components/icons';
import { useUsers, useValue } from './hooks';
import { UserRow } from './components/UserRow';

export default function App() {
	const { value, setValue } = useValue();
	const {
		users,
		isUpdating,
		createItem,
		updateItem,
		deleteItem,
		acceptUpdate,
	} = useUsers(value, setValue, [
		'Leanne Graham',
		'Ervin Howell',
		'Clementine Bauch',
	]);

	return (
		<main className='container my-auto mx-3 sm:m-auto'>
			<h1 className='text-4xl font-bold text-center mb-4'>CRUD with React</h1>
			<section className='flex mb-5'>
				<input
					type='text'
					className='px-3 py-2 my-auto w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600'
					placeholder='Write something...'
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<button
					type='button'
					className={
						isUpdating
							? 'p-2 ms-3 bg-green-500 duration-150 text-white rounded-full active:bg-green-600'
							: 'p-2 ms-3 bg-indigo-500 duration-150 text-white rounded-full active:bg-indigo-600'
					}
					onClick={isUpdating ? acceptUpdate : () => createItem(value)}
				>
					{isUpdating ? <AcceptIcon /> : <CreateIcon />}
				</button>
			</section>
			<section className='h-80 overflow-auto'>
				<ul>
					{users.map((user: string, id: number) => (
						<UserRow
							key={id}
							user={user}
							onDelete={() => deleteItem(id)}
							onUpdate={() => updateItem(id)}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}
