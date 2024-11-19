import { URL_IMG } from '@utils/const'
import { Link } from 'react-router-dom'

/** @types */
import type { Movie } from '@types'

interface Props {
	movie: Movie
}

export default function MovieCard({ movie }: Props) {
	const { id, title, poster_path } = movie

	return (
		<Link className='w-44 flex-none snap-start' to={`/movie/${id}`}>
			<div
				key={id}
				className='transition-transform duration-150 hover:scale-105'>
				<img
					className='size-full select-none object-cover'
					src={URL_IMG + poster_path}
					alt={`${title} Poster`}
					loading='lazy'
				/>
			</div>
		</Link>
	)
}
