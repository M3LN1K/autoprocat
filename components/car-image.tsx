import Image from "next/image";
import { cn } from "@/lib/utils";

type CarImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function CarImage({ src, alt, className, imgClassName }: CarImageProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl bg-muted", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
