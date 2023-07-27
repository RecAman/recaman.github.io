"use client";
import { FunctionComponent } from "react";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";
import styles from "./ImageFallback.module.scss";

interface ImageFallbackProps extends ImageProps {
  className?: string;
  fallbackSrc?: string;
}

export const ImageFallback: FunctionComponent<ImageFallbackProps> = ({
  fallbackSrc = "/images/defaultImg.png",
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(props.src);

  useEffect(() => {
    setImgSrc(props.src);
  }, [props.src]);

  const onError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <Image
      {...props}
      alt={props.alt}
      className={`${styles.ImageFallback} ${className ?? ""}`}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          setImgSrc(fallbackSrc);
        }
      }}
      onError={onError}
    />
  );
};
