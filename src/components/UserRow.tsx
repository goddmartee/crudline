import { DeleteIcon, UpdateIcon } from './icons';

interface Props {
	user: string;
	onDelete: () => void;
	onUpdate: () => void;
}

export const UserRow: React.FC<Props> = ({ user, onDelete, onUpdate }) => {
	return (
		<li className='flex justify-between py-4 px-2 border-b-2'>
			<span className='my-auto'>{user}</span>
			<span className='whitespace-nowrap'>
				<button
					type='button'
					className='p-3 bg-indigo-500 duration-150 text-white rounded-full active:bg-indigo-600'
					onClick={onUpdate}
				>
					<UpdateIcon />
				</button>
				<button
					type='button'
					className='p-3 ms-2 bg-red-500 duration-150 rounded-full active:bg-red-600'
					onClick={onDelete}
				>
					<DeleteIcon />
				</button>
			</span>
		</li>
	);
};
