"use client";

import styles from "@/app/catalog/[id]/CamperDetails.module.css";


export const BookingForm = () => {
    return (
        <form className={styles.form}>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>

            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="date" placeholder="Booking date*" required />
            <textarea placeholder="Comment"></textarea>

            <button type="submit" className={styles.submit}>
                Send
            </button>
        </form>
    );
}