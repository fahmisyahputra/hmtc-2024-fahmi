// src/app/page.tsx
import Image from 'next/image';

import KetuaCarousel from '@/components/carousel/KetuaCarousel';
import Divider from '@/components/Divider';
import GalleryHMTC from '@/components/landing/GalleryHMTC';
import HMTCBlog from '@/components/landing/HMTCBlog';
import LifeAtHMTC from '@/components/landing/LifeAtHMTC';
import PeopleHMTC from '@/components/landing/PeopleHMTC';
import Quotes from '@/components/landing/Quotes';
import QuotesKahima from '@/components/landing/QuotesKahima';
import VisiMisi from '@/components/landing/VisiMisi';

export default function Page() {
  const slides = [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6];

  return (
    <main className='relative scroll-smooth'>
      <div id='home' className='relative min-h-screen bg-black text-white'>
        <div className='absolute inset-0 overflow-hidden'>
          <Image
            src='/images/halamandepan.png'
            alt='Background'
            fill
            className='z-0 object-cover object-center'
          />
          <div className='absolute inset-0 z-10 bg-black opacity-75'></div>
        </div>

        <div className='relative z-20 mx-4 flex flex-col items-start p-6 pb-40 pt-[40%] sm:mx-6 md:mx-11 md:p-12'>
          <div className='mt-20 space-y-8 md:mt-28'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
              <h1 className='font-libre text-4xl italic sm:text-8xl md:mr-auto md:text-8xl lg:text-7xl'>
                Bersama Bersinergi <br />
              </h1>
              <p className='invisible absolute right-16 mt-4 font-satoshi sm:invisible md:invisible md:mt-0 md:text-lg lg:visible'>
                Elementum mantis <br />
                vulputate faucibus.
              </p>
            </div>
            <div className='flex flex-col pb-12 pt-12 md:flex-row md:justify-center md:pb-20 md:pt-20'>
              <p className='invisible mt-4 font-satoshi text-sm sm:text-xl sm:invisible md:invisible md:mr-auto md:text-lg lg:visible'>
                Justo aliquet aliquet <br />
                nulla ultrices etiam.
              </p>
              <h1 className='absolute start-[45%] font-libre text-5xl italic sm:text-8xl md:mr-auto md:pl-8 md:text-7xl lg:text-8xl'>
                Menjadi
              </h1>
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
              <h1 className='font-libre text-5xl leading-tight sm:text-8xl md:text-7xl lg:text-8xl'>
                <span className='font-libre italic'>Kunci Transformasi</span>
              </h1>
              <p className='invisible absolute bottom-[155px] right-[236px] mt-2 font-satoshi text-sm sm:invisible md:mt-0 md:pr-8 md:text-lg lg:visible lg:bottom-[140px] lg:right-[10px]'>
                HMTC 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id='aboutus'
        className='flex flex-col items-center justify-center bg-white py-8'
      >
        <div className='flex w-full flex-1 flex-col items-center justify-center px-10 pt-16 md:px-16 lg:px-20 lg:pt-40'>
          <div className='flex w-full flex-col items-center justify-between lg:flex-row'>
            <div className='flex justify-center lg:w-1/2'>
              <Image
                src='/images/fotbarhmtc2024.png'
                alt='HMTC Informatics'
                width={550}
                height={400}
                className='rounded-[15px] object-cover'
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='mt-8 text-left md:pt-8 lg:ml-8 lg:mt-0 lg:w-1/2'>
              <h2 className='font-satoshi text-xl text-blue-600'>About Us</h2>
              <h1 className='mt-2 font-adelphe text-4xl font-bold leading-[50px]'>
                Dedication to Excellence in Education and Technology
              </h1>
              <p className='mt-6 text-gray-700'>
                Organisasi ini bernama Himpunan Mahasiswa Teknik Computer —
                Informatika yang selanjutnya disebut HMTC.
              </p>
              <p className='mt-6 text-gray-700'>
                Tujuan HMTC adalah tercapainya kesempurnaan pendidikan dalam
                rangka membentuk pribadi mahasiswa yang bertaqwa kepada Tuhan
                Yang Maha Esa, memiliki sikap kecendekiawanan, integritas,
                kepekaan sosial, serta mampu menguasai dan mengembangkan Ilmu
                Pengetahuan dan Teknologi Informatika dan Komputer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative bg-gray-100'>
        <div className='relative h-screen w-full'>
          <Image
            src='/images/fotohmtc2024.png'
            alt='fotohmtc'
            fill
            className='object-cover'
            priority
            style={{ objectFit: 'cover' }} // Untuk kompatibilitas lebih baik
          />
        </div>
        <div className='flex h-full w-full items-center justify-center bg-[#121212] py-10 md:py-24'>
          <div className='flex w-full flex-col justify-between gap-x-6 gap-y-6 px-6 md:w-[90%] md:px-0 lg:flex-row lg:gap-x-32'>
            <div>
              <VisiMisi
                text1='Vision'
                text2='Transformasi HMTC sebagai Pionir Utama Elemen Teknik Informatika Demi Mewujudkan Organisasi Yang Berdampak dan Berkualitas'
              />
            </div>
            <div>
              <VisiMisi
                text1='Mission'
                text2={[
                  'Mengimplementasi program transformasi yang inovatif untuk meningkatkan daya saing dan memperbaiki kondisi HMTC sebagai organisasi di Teknik Informatika.',
                  'Menginisiasi dan mempelopori seluruh aspek pergerakan mahasiswa Teknik Informatika untuk menciptakan lingkungan yang dinamis dan kolaboratif.',
                  'Mengevaluasi dan mengoptimalkan aksi HMTC untuk menciptakan keberdampakan yang signifikan dan berkualitas di seluruh lapisan Teknik Informatika.',
                ]}
              />
            </div>
          </div>
        </div>
        <div className='flex h-full w-full  bg-[#121212] py-10 md:py-24'>
          <div className='flex w-full flex-col gap-x-6 gap-y-6 px-6'>
            <Quotes />
          </div>
        </div>
        <div className='flex h-full w-full items-center bg-[#121212] px-4 py-10 md:px-20 md:py-24 lg:px-[8%]'>
          <div className='flex w-full flex-col justify-between'>
            <div className='relative w-full'>
              <KetuaCarousel slides={slides} options={{ loop: true }} />
            </div>
          </div>
        </div>
        <Divider id='kepengurusan' />
      </div>

      <div className='relative mx-auto w-full'>
        <PeopleHMTC />
        <LifeAtHMTC />
        <GalleryHMTC />
        <HMTCBlog />
        <QuotesKahima />
      </div>
    </main>
  );
}
