<<<<<<< HEAD
import {data} from '@/data/feed'
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPaperclip } from "react-icons/go";
import { IoMdSend } from "react-icons/io";

const MessagePage = () => {
	return (
		<div className=' pt-20 max-w-[85%] h-[40rem]  mx-auto flex  '>
			<div className='container-snap h-full rounded-lg border-2 border-black/50  w-[30%] p-4 space-y-3 overflow-auto '>
				{data.map((_, index) => (
					<div
						className='bg-slate-50/50 px-2 py-4 sdw cursor-pointer border-b shadow-md border-black
						'
						key={_.OrgName + index}>
						<div className='flex justify-between'>
							<h2>{_.OrgName}</h2>
							<p className='text-xs'>{_.DateOfPosting}</p>
						</div>
						<p className='text-xs border-black  text-gray-500/90'>
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
			<div className=' text-gray-800 w-[70%] p-4 border-2 border-black border-l-0 rounded-lg'>
				<div className='w-full flex h-16 justify-between border-b-2 border-black items-center'>
					<div className='h-full px-8 '>
						<p className='text-lg font-bold font-serif'>
							Company Name
						</p>
						<p className='font-mono'>
							Job Role | Chatting with "Recurter Name"
						</p>
					</div>
					<BsThreeDotsVertical size='24'/>
				</div>
				<div className="max-h-[75%] px-4 pt-2 bg-slate-100/30 overflow-y-auto  ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga mollitia exercitationem laboriosam accusamus, beatae delectus id adipisci nemo, recusandae facere vero aperiam neque natus amet deleniti saepe! Consequuntur, alias animi veniam eius corrupti doloribus deserunt eum quos laudantium similique possimus rerum asperiores dolore ipsam voluptas ducimus in enim consectetur eaque, quia vel. Necessitatibus alias, repellendus quae, architecto quisquam molestiae nemo recusandae eos sunt nulla tempora. Aliquid consequatur fugiat ratione nesciunt perspiciatis et placeat, illum dolorum esse cum, est at voluptatum adipisci laudantium iusto aut tempore temporibus eum vitae molestiae, corrupti laboriosam ad eius quidem? Ut odio at vitae ab dolorum perferendis alias, sint repellendus corrupti provident, excepturi id totam architecto voluptatibus optio incidunt ipsum repellat similique perspiciatis accusantium minus aliquam rem. Deleniti facilis voluptatum nihil eveniet ducimus a! Minima ad culpa nam, dolor alias eum, ut sapiente fuga corrupti tenetur deleniti! Non quam laboriosam ratione quasi, id reprehenderit quos odit facere accusantium voluptatum maiores! Sunt obcaecati ipsa odit sit id expedita eum, earum corrupti molestiae molestias sed debitis ex, accusantium aspernatur impedit voluptatum laboriosam veniam. Eos quo libero repudiandae enim, eveniet cumque alias magni commodi sapiente, deserunt pariatur dolorum aperiam exercitationem fugiat mollitia. Aspernatur corporis repudiandae, saepe reprehenderit possimus incidunt officia, qui maxime maiores temporibus praesentium adipisci perspiciatis ipsam odit quaerat nostrum facere nobis, sit asperiores eius nam? Ex beatae dolor nihil magnam placeat omnis, numquam quia aspernatur odio dignissimos ullam ipsam maiores excepturi sunt saepe eaque temporibus qui laboriosam laudantium hic enim officia, aperiam delectus soluta. Ut quod quasi et laudantium, distinctio magni perferendis earum at repellendus consequatur cum fugiat, obcaecati est. Reiciendis voluptas repellat laborum. Cum ab magnam saepe sunt velit maxime odit illo quas in eos ullam dolorum odio et, placeat perspiciatis! Doloribus ab in, sed quasi maxime, fugiat totam corporis asperiores sit natus ea error iure obcaecati minima cupiditate. Vitae, tenetur odio ducimus impedit sed blanditiis, sapiente amet, expedita praesentium incidunt earum molestiae repudiandae iste qui quis aliquid maxime exercitationem porro saepe explicabo. Sunt quisquam necessitatibus error tenetur corrupti fugit in neque molestias inventore enim dolores, aliquid voluptates dolore recusandae deleniti eius odio! Veniam adipisci odit consectetur ea quas officiis corrupti libero quis dolore aperiam fuga est suscipit obcaecati, doloremque in vero quia temporibus. Omnis dolor similique quisquam quia modi eius nobis unde distinctio harum tempora repellat tenetur, excepturi, architecto vitae eveniet fuga porro amet enim eligendi ullam, nostrum assumenda. Illo accusamus alias corrupti nulla nihil quam, et maxime minima qui minus incidunt, at tempora, autem delectus recusandae! Minima expedita iste quaerat fuga? Incidunt itaque est reiciendis! Inventore perferendis quos tenetur atque cum consequuntur minima? Rem voluptatum architecto itaque velit porro? Ratione odio veritatis eum ex molestias cupiditate! Delectus tempora, eum enim omnis veritatis animi accusantium nesciunt aperiam et, fugiat accusamus nostrum repellendus tenetur fugit eos repellat id reprehenderit adipisci. Dolorum totam vitae modi quas? Quae, quo. Quisquam corrupti, ut delectus magnam dolore accusamus harum quidem, numquam possimus laboriosam adipisci? Nobis assumenda ea ipsam dolore quas iure suscipit perferendis, vero ex nostrum vitae enim sunt.
				</div>
				<div className="border-t-2 border-black mt-2 h-[13%] flex items-center px-2 gap-10">
					<input className='w-[75%] font-sans text-lg rounded-lg outline-none h-12 px-4 border-2 border-r-0 border-black/50 ' type="text" name="message" placeholder='Type your message' />
					<GoPaperclip size='20' />
					<button className='font-bold text-lg flex items-center bg-black text-white rounded-xl gap-2 py-2 px-4'>Send<IoMdSend color='white' size='24'/></button>
				</div>
			</div>
		</div>
	)
}

export default MessagePage
=======
import React from 'react';
import { CiSearch } from "react-icons/ci";

const Page = () => {
  return (
    <div className='pt-20 bg-slate-50 h-screen'>
      <div className='flex gap-2 h-full pb-2'>
        <div className='w-full h-full border max-w-sm'>
          <div className='relative bg-white py-4'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <CiSearch className='text-xl text-slate-400' />
            </div>
            <input 
              type="text" 
              className='pl-10 pr-4 py-2 w-full outline-none '  
              placeholder='Search' 
            />
          </div>
        </div>
        <div className='flex-grow border bg-white'>
          <p>message</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
>>>>>>> test-branch
