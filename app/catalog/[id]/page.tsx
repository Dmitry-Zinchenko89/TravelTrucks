import { getCampersById } from "@/lib/api/getCampersById";
import styles from "@/app/catalog/[id]/CamperDetails.module.css";
import Image from "next/image";
// import Features from "@/components/Features/Features";
import { BookingForm } from "@/components/BookingForm/BookingForm";
import { Gallery } from "@/components/Gallery/Gallery";

interface CamperPageProps {
    params: { id: string };
}

export default async function CamperDetailsPage({ params }: CamperPageProps) {
    const camper = await getCampersById(params.id);
    const reviewsCount = camper.reviews?.length ?? 0;

    if (!camper) {
        return <div className={styles.error}>Camper not found</div>;
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{camper.name}</h1>
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
                <p className={styles.price}>€{camper.price}.00</p>
            </div>

            <Gallery images={camper.gallery} />

            <p className={styles.description}>{camper.description}</p>

            <div className={styles.tabs}>
                <button className={`${styles.tab} ${styles.active}`}>Features
                </button>
                <button className={styles.tab}>Reviews</button>
            </div>
            <Image
                src="/Vector 2.svg"
                alt="rating icon"
                width={85}
                height={6}
                className={styles.svg}
            />

            <div className={styles.content}>



                <BookingForm />
            </div>
        </div>
    );
};

