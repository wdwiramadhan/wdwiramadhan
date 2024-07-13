import type { ImageProps } from "next/image";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type NextImageProps = {
  className?: string;
  imgClassName?: string;
} & ImageProps;

const NextImage = ({
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  ...rest
}: NextImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className={className}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={clsx("imgClassName", !isLoaded && "animate-pulse")}
        onLoadingComplete={() => setIsLoaded(true)}
        {...rest}
      />
    </figure>
  );
};

export default NextImage;
