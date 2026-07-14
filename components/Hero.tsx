'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg,#8B0000,#C1121F)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p
          style={{
            letterSpacing: '6px',
            marginBottom: '15px',
          }}
        >
          MY BLOODCONNECT JOURNEY
        </p>

        <h1
          style={{
            fontSize: '4rem',
            margin: '20px 0',
            lineHeight: '1.2',
          }}
        >
          From a Volunteer
          <br />
          to a Voice
        </h1>

        <p
          style={{
            fontSize: '1.1rem',
            opacity: 0.9,
          }}
        >
          Every drop has a story. This is mine.
        </p>

        <button
          onClick={() =>
            document
              .getElementById('timeline')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          style={{
            marginTop: '35px',
            padding: '16px 32px',
            border: 'none',
            borderRadius: '40px',
            background: 'white',
            color: '#C1121F',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Begin Journey ↓
        </button>
      </motion.div>
    </section>
  );
}
