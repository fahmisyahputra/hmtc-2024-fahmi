'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

const HMTCBlog: React.FC = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const posts = [
    {
      image: '/images/bloghmtc/blog-1.png',
      title: 'Melukiskan Hikmah, Kembali Fitrah',
      excerpt:
        'Bulan Ramadhan buat aku adalah waktu yang spesial. Bukan cuma soal puasa, tapi juga tentang gimana orang-orang di lin..',
      link: 'https://www.instagram.com/p/C5j83s6yKTE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      image: '/images/bloghmtc/blog-2.png',
      title: 'Kartini: Simbol Perjuangan Perempuan Indonesia',
      excerpt:
        'Kartini bukan sekadar nama, dia adalah simbol perjuangan bagi semua perempuan di Indonesia. Melalui semangatnya yang..',
      link: 'https://www.instagram.com/p/C6AM32Rycy8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      image: '/images/bloghmtc/blog-3.png',
      title: 'Bisnis Bagi Anak Muda di Era Digital',
      excerpt:
        'Menggali Peluang Bisnis di Era Digital! Anak muda punya potensi besar untuk menciptakan inovasi di dunia digital..',
      link: 'https://www.instagram.com/p/C7Dmkdtx9iD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      image: '/images/bloghmtc/blog-4.png',
      title: 'Idul Adha di Perantauan, Ngapain ya?',
      excerpt:
        'Idul Adha di Perantaun, Ngapain ya? Hari Raya Idul Adha selalu jadi momen yang ditunggu-tunggu umat Muslim di seluruh..',
      link: 'https://www.instagram.com/p/C8TQi0rC4OU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      image: '/images/bloghmtc/blog-1.png',
      title: 'Melukiskan Hikmah, Kembali Fitrah',
      excerpt:
        'Bulan Ramadhan buat aku adalah waktu yang spesial. Bukan cuma soal puasa, tapi juga tentang gimana orang-orang di lin...',
      link: 'https://www.instagram.com/p/C5j83s6yKTE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];

  const scrollTo = useCallback(
    (index: number) => {
      if (embla) embla.scrollTo(index);
    },
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
    onSelect();
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <section className='bg-white px-4 pb-24 pt-10 md:px-[10%] md:pt-24'>
      <div
        id='blog'
        className='my-0 flex flex-col items-center justify-center bg-white'
      ></div>
      <div className='container mx-auto p-6 lg:p-0'>
        <h2
          className='text-gradient font-satoshi text-lg font-medium'
          style={{
            background:
              'linear-gradient(263.67deg, #00AAE7 -8.55%, #0076C0 97.16%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          HMTC BLOG
        </h2>
        <h1 className='mb-6 mt-3 w-full font-adelphe text-3xl font-bold md:w-[80%] md:text-5xl md:leading-[52.80px]'>
          Delving into Stories, Insights, and the Latest Trends from HMTC
        </h1>

        <div className='w-full max-w-7xl'>
          <div className='embla' ref={emblaRef}>
            <div className='embla__container'>
              {posts.map((post, index) => (
                <div className='embla__slide-blog' key={index}>
                  <a href={post.link} target='_blank' rel='noopener noreferrer'>
                    <div className='relative h-[314px] w-full'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-contain'
                      />
                    </div>
                    <div className='px-1 pt-4 lg:pt-4'>
                      <h3 className='mb-3  text-xl font-bold'>{post.title}</h3>
                      <p className='text-sm text-gray-600'>{post.excerpt}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-8 flex justify-center md:mt-4'>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${
                index === selectedIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HMTCBlog;
