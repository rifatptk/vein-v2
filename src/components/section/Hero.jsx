'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RiButton from '../buttons/RiButton';

function Hero() {
  const router = useRouter();
  function gotoSignup() {
    router.push('/signup');
  }
  return (
    <section className='pt-24 bg-gray-200 rounded-ss-full md:pt-0'>
      <div className='container items-center h-full min-h-screen gap-4 md:flex '>
        <div className='flex flex-col flex-1 gap-8'>
          <h1 className='text-6xl'>
            Donate blood, <br />
            save life!
          </h1>
          <em>
            Many people owe their lives to selfless blood donors, said WHO
            Regional Director for the Western Pacific, Dr Shin Young-soo.
            Voluntary blood donors come from all walks of life, but they share a
            common concern for the welfare of others. We thank them for their
            admirable generosity and concern for those in need.
          </em>

          <RiButton text='Donate Now' onClick={gotoSignup} />
        </div>

        <div className='flex-1 mt-10 md:mt-0'>
          <div className='w-full h-[400px] bg-red-500 rounded-full rounded-es-none overflow-hidden'>
            <Image
              src='/img/blood_donation.jpg'
              alt='blood donation'
              width={600}
              height={400}
              className='object-cover w-full'
            />
          </div>
        </div>
      </div>

      <div className='relative mt-20 overflow-hidden bg-red-500  md:mt-0 rounded-se-full'>
        <div className='absolute rounded-full w-80 h-80 bg-red-400/50 top-5 left-5' />

        <div className='container relative items-center justify-between gap-10 py-10 md:flex'>
          <div className='text-white'>
            <h2 className='text-xl md:text-2xl'>
              We are helping people from 10 years
            </h2>
            <p className='mt-4 text-sm '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{' '}
              Animi magnam autem consectetur dolor. In laudantium corporis
              fugiat est sint officiis.
            </p>
          </div>
          <RiButton
            text='Donate Now'
            onClick={gotoSignup}
            className='mt-5 mr-20 md:mt-0'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
