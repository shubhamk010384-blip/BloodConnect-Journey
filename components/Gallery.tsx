'use client';

import { motion } from 'framer-motion';

const images = [
  {
    src: '/images/week1-frame.jpg',
    title: 'Week 1 • Blood Bank Visit',
  },
  {
    src: '/images/week1-poster.jpg',
    title: 'Week 1 • Blood Donation Poster',
  },
  {
    src: '/images/session1.jpg',
    title: 'Session 1',
  },
  {
    src: '/images/session2.jpg',
    title: 'Session 2',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: '80px 20px',
        background: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            fontSize: '2.7rem',
            color: '#c1121f',
            marginBottom: '15px',
          }}
        >
          Gallery
        </motion.h2>

        <p
          style={{
            textAlign: 'center',
            color: '#555',
            marginBottom: '50px',
            fontSize: '1.1rem',
          }}
        >
          Some memorable moments from my BloodConnect journey.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '30px',
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              style={{
                background: '#fff',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,.12)',
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                }}
              />

              <div
                style={{
                  padding: '18px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.05rem',
                }}
              >
                {image.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
