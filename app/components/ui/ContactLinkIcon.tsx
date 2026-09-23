"use client";
import Image, { StaticImageData } from "next/image";

type ContactLinkProps = {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  external?: boolean;
};

export default function ContactLinkIcon({
  href,
  src,
  alt,
  width,
  height,
  external,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </a>
  );
}
