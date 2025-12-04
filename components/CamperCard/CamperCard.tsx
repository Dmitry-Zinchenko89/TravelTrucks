import Link from "next/link";
import type { Camper } from "@/types/campers";
import styles from "./CamperCard.module.css";
import Image from "next/image";
import { useState } from "react";


const formatPrice = (n: number) => `€${n.toFixed(2)}`;

export const CamperCard = ({ camper }: { camper: Camper }) => {
    const [favorite, setFavorite] = useState(false);
    const reviewsCount = camper.reviews?.length ?? 0;

    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={camper.gallery?.[0]?.thumb}
                    alt={camper.name}
                    fill
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.headerGroup}>
                    <header className={styles.top}>
                        <h3 className={styles.title}>{camper.name}</h3>
                        <span className={styles.price}>{formatPrice(camper.price)}
                            <button className={styles.heartBtn} onClick={() => setFavorite(!favorite)}>
                                <Image
                                    src={favorite ? "/heart-red.svg" : "/heart.svg"}
                                    alt="favorite"
                                    width={26}
                                    height={24}
                                />
                            </button>
                        </span>
                    </header>

                    <div className={styles.meta}>
                        <span className={styles.spanRating}>
                            <Image
                                src="/Rating.svg"
                                alt="map icon"
                                width={16}
                                height={15}
                            />
                            {camper.rating.toFixed(1)} ({reviewsCount} Reviews)</span>
                        <span className={styles.spanMeta}>
                            <Image
                                src="/Vector.svg"
                                alt="rating icon"
                                width={16}
                                height={16}
                            />
                            {camper.location}</span>
                    </div>
                </div>

                <p className={styles.desc}>{camper.description}</p>

                <ul className={styles.chips}>

                    {camper.transmission === "automatic" &&
                        <li className={styles.filter}>
                            <Image
                                src="/diagram.svg"
                                alt="map icon"
                                width={20}
                                height={20}
                            />
                            Automatic</li>}
                    {camper.engine &&
                        <li className={styles.filter}>
                            <Image
                                src="/fuel-pump.svg"
                                alt="map icon"
                                width={20}
                                height={20}
                            />
                            {camper.engine[0].toUpperCase() + camper.engine.slice(1)}
                        </li>}
                    {camper.kitchen &&
                        <li className={styles.filter}>
                            <Image
                                src="/cup-hot.svg"
                                alt="map icon"
                                width={20}
                                height={20}
                            />
                            Kitchen</li>}
                    {camper.AC &&
                        <li className={styles.filter}>
                            <Image
                                src="/wind.svg"
                                alt="map icon"
                                width={20}
                                height={20}
                            />
                            AC</li>}
                </ul>

                <Link href={`/catalog/${camper.id}`} className={styles.btn}>
                    Show more
                </Link>
            </div>
        </article>
    );
}