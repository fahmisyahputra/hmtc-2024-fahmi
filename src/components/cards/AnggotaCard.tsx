import Image from 'next/image';

import { DataAnggota } from '@/constants/anggota';

export default function AnggotaCard({ nama, jabatan, image }: DataAnggota) {
  return (
    <div className='mx-auto w-fit space-y-6'>
      <div className='bg-base-gray pt-6'>
        <Image {...image} alt='' />
      </div>
      <div className='flex justify-center'>
        <div className=' text-center font-semibold'>
          <p className='text-[20px] text-black-main'>{nama}</p>
          <p className='uppercase tracking-wider text-orange-light-5'>
            {jabatan}
          </p>
        </div>
      </div>
    </div>
  );
}
