import React from 'react';

const Awards = () => {
   const items = [
    {
      id: 1,
      src: 'https://www.domains.lk/wp-content/uploads/2023/04/mymail-logo-n.png',
      link: 'link here',
    },
    {
      id: 2,
      src: 'https://www.domains.lk/wp-content/uploads/2023/04/bestweblogo.png',
      link: 'link here',
    },
    {
      id: 3,
      src: 'https://www.domains.lk/wp-content/uploads/2023/04/topweb-logo-n.png',
      link: 'link here',
    },
    {
      id: 4,
      src: 'https://www.domains.lk/wp-content/uploads/2023/04/Hithawathi-logo-newall.png',
      link: 'link here',
    },
    {
      id: 5,
      src: 'https://www.domains.lk/wp-content/uploads/2023/09/suhurusara.png',
      link: 'link here',
    },
  ];
  return (
    <>
      <div
        name=''
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen text-center md:text-left sm:pb-10 pb-1 font-poppins'
      >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
Other Services           </p>
            <p className='py-6'>You May Also Like</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
              >
                <img
                  src={src}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105 object-cover w-full h-30'
                />
                <div className='flex items-center justify-center'>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={() => window.open(link, '_blank')}
                  >
                    Visit Site
                  </button>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;