'use client';

import { motion } from 'framer-motion';

export default function Week1Section() {
  return (
    <motion.section
      id="week1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ padding: '80px 20px' }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: '#c1121f',
          }}
        >
          Week 1 • Blood Bank Visit
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#444',
          }}
        >
          Week 1 marked the beginning of my BloodConnect journey through an
          inspiring Blood Bank Visit. Witnessing how every unit of donated blood
          can save multiple lives completely changed my perspective. Meeting
          healthcare professionals and understanding the blood collection,
          testing, and storage process made me realize that behind every blood
          bag lies hope, courage, and another chance at life.
          <br />
          <br />
          That day taught me that donating blood is much more than a medical
          procedure—it is a selfless act of humanity. Every donor becomes an
          unseen hero, and every drop donated carries someone's future.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '25px',
            marginTop: '40px',
          }}
        >
          <img
            src="/images/week1-frame.jpg"
            alt="Blood Bank Visit"
            style={{
              width: '100%',
              borderRadius: '18px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            }}
          />

          <img
            src="/images/week1-poster.jpg"
            alt="Blood Donation Poster"
            style={{
              width: '100%',
              borderRadius: '18px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            }}
          />
        </div>

        <blockquote
          style={{
            marginTop: '40px',
            padding: '20px',
            borderLeft: '6px solid #c1121f',
            background: '#fff5f5',
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: '#555',
            borderRadius: '10px',
          }}
        >
          "A blood bank stores more than blood—it stores hope, second chances,
          and countless untold stories waiting for a new beginning. This visit
          reminded me that every donor has the power to become someone's
          miracle."
        </blockquote>
      </div>
    </motion.section>
  );
}
