import Card from '@components/Card'

/** @types */
import type { Movie } from '@types'

interface Props {
	movies: Movie[]
}

export default function Slider({ movies }: Props) {
	return (
		<div
			className='flex snap-x snap-mandatory items-center gap-4 overflow-x-auto p-4'
			style={{
				scrollbarWidth: 'none',
				WebkitOverflowScrolling: 'touch'
			}}>
			{movies?.map(
				movie => movie.poster_path && <Card key={movie.id} movie={movie} />
			)}
		</div>
	)
}
