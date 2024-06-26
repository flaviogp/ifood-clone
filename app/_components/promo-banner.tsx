import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      src="/promo-banner-pizza.webp"
      height={0}
      width={0}
      className="h-auto w-full object-contain"
      sizes="100vw"
      quality={100}
      {...props}
    />
  );
};

export default PromoBanner;
