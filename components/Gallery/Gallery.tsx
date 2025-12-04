"use client";
import Image from "next/image";
import styles from "@/app/catalog/[id]/CamperDetails.module.css";

interface GalleryProps {
    images: { original: string }[];
}

export const Gallery = ({ images }: GalleryProps) => {
    return (
        <div className={styles.gallery}>
            {images.map((img, i) => (
                <Image
                    key={i}
                    src={img.original}
                    alt={`camper photo ${i + 1}`}
                    width={292}
                    height={312}
                    className={styles.galleryImage}
                />
            ))}
        </div>
    );
}