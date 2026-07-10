'use client';

import { motion } from 'framer-motion';

export default function Week2Section() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ padding: '80px 20px', background: '#fafafa' }}
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
            color: '#c1121f',
            marginBottom: '20px',
          }}
        >
          Week 2 • Community Outreach & Contact Collection
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#444',
          }}
        >
          During Week 2, I actively connected with schools, colleges, gyms,
          coaching institutes and other organizations to spread awareness about
          BloodConnect. The objective was to build a strong network of potential
          volunteers, donors and institutional partners who could contribute to
          future blood donation drives.

          <br /><br />

          Every conversation was an opportunity to inspire someone to become a
          lifesaver. This experience strengthened my communication skills,
          confidence and belief that meaningful change begins with awareness and
          community participation.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '35px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="/week2-work.xlsx"
            download
            style={{
              background: '#c1121f',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            📥 Download Contact Sheet
          </a>

          <a
            href="/week2-work.xlsx"
            target="_blank"
            rel="noreferrer"
            style={{
              border: '2px solid #c1121f',
              color: '#c1121f',
              padding: '14px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            📄 View Excel File
          </a>
        </div>

        <div
          style={{
            marginTop: '45px',
            padding: '25px',
            background: '#fff5f5',
            borderLeft: '6px solid #c1121f',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ color: '#c1121f' }}>Reflection</h3>

          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Every contact collected represented more than just a phone number—it
            represented a future opportunity to save lives. Building connections
            today creates a stronger community of blood donors for tomorrow.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
