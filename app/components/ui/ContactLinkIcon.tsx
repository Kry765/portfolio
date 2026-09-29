"use client";
import { Icon } from "@iconify/react";
import { ContactLink } from "@/app/data/contactLinks";

export default function ContactLinkIcon({
  href,
  icon,
  alt,
  size,
  external,
}: ContactLink) {
  return (
    <a
      href={href}
      aria-label={alt}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon
        icon={icon}
        width={size}
        height={size}
        className="text-white hover:text-btn-accent transition-colors duration-500"
      />
    </a>
  );
}
