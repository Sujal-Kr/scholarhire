import { data } from '@/data/feed';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoPaperclip } from 'react-icons/go';
import { IoMdSend } from 'react-icons/io';

const Page = () => {
	return (
		<div className='pt-20 max-w-[85%] h-[40rem] mx-auto flex'>
			<div className='container-snap h-full rounded-lg border-2 border-black/50 w-[30%] p-4 space-y-3 overflow-auto'>
				{data.map((_, index) => (
					<div
						className='bg-slate-50/50 px-2 py-4 sdw cursor-pointer border-b shadow-md border-black'
						key={_.OrgName + index}>
						<div className='flex justify-between'>
							<h2>{_.OrgName}</h2>
							<p className='text-xs'>{_.DateOfPosting}</p>
						</div>
						<p className='text-xs border-black text-gray-500/90'>
							{_.VacancyFor}
						</p>
						<p className='text-sm mt-1 font-mono text-gray-800/70 leading-4 max-h-8 overflow-hidden'>
							This is the section where you will view some part of
							the message in a chunk. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Inventore beatae
							expedita laboriosam alias accusantium, dolorum
							provident iure porro magnam, sed, neque ullam natus
							nisi earum! Facilis, voluptate fuga, a nisi quasi
							quisquam, aspernatur dicta dolorum atque expedita
							fugit. Nesciunt, ipsam ipsum. Repellat tenetur
							excepturi modi consectetur aspernatur nam enim
							numquam.
						</p>
					</div>
				))}
			</div>
			<div className='text-gray-800 w-[70%] p-4 border-2 border-black border-l-0 rounded-lg'>
				<div className='w-full flex h-16 justify-between border-b-2 border-black items-center'>
					<div className='h-full px-8'>
						<p className='text-lg font-bold font-serif'>
							Company Name
						</p>
						<p className='font-mono'>
							Job Role | Chatting with recuter name
						</p>
					</div>
					<BsThreeDotsVertical size='24' />
				</div>
				<div className='max-h-[75%] px-4 pt-2 bg-slate-100/30 overflow-y-auto'>
					
					
					nobis unde distinctio harum tempora repellat tenetur,
					excepturi, architecto vitae eveniet fuga porro amet enim
					eligendi ullam, nostrum assumenda. Illo accusamus alias
					corrupti nulla nihil quam, et maxime minima qui minus
					incidunt, at tempora, autem delectus recusandae! Minima
					expedita iste quaerat fuga? Incidunt itaque est reiciendis!
					Inventore perferendis quos tenetur atque cum consequuntur
					minima? Rem voluptatum architecto itaque velit porro?

				</div>
				<div className='border-t-2 border-black mt-2 h-[13%] flex items-center px-2 gap-10'>
					<input
						className='w-[75%] font-sans text-lg rounded-lg outline-none h-12 px-4 border-2 border-r-0 border-black/50'
						type='text'
						name='message'
						placeholder='Type your message'
					/>
					<GoPaperclip size='20' />
					<button className='font-bold text-lg flex items-center bg-black text-white rounded-xl gap-2 py-2 px-4'>
						Send<IoMdSend color='white' size='24' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
