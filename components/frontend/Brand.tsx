/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import React from 'react';

const brandsData = [
  {
    imageSrc:
      'https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg',
    lightImageSrc:
      'https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg',
    altText: 'graygrids',
    link: '#',
  },
  {
    imageSrc:
      'https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg',
    lightImageSrc:
      'https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg',
    altText: 'lineicons',
    link: '#',
  },
  {
    imageSrc:
      'https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg',
    lightImageSrc:
      'https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg',
    altText: 'uideck',
    link: '#',
  },
  {
    imageSrc:
      'https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg',
    lightImageSrc:
      'https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg',
    altText: 'ayroui',
    link: '#',
  },
];

export default function Brand() {
  return (
    <section className="bg-gray-400  lg:py-[20px] dark:bg-dark">
     <h2 className="text-center py-4">
        Trusted by
     </h2>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage: React.FC<{ brand: typeof brandsData[number] }> = ({ brand }) => {
  const { link, imageSrc, lightImageSrc, altText } = brand;
  return (
    <a
      href={link}
      className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={150}
        height={40}
        className="h-10 w-full dark:hidden"
      />
      <Image
        src={lightImageSrc}
        alt={altText}
        width={150}
        height={40}
        className="hidden h-10 w-full dark:block"
      />
    </a>
  );
};
