'use client';

import { motion } from 'framer-motion';

export default function Week4Section() {
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
          Week 4 • Blood Donation Awareness Sessions
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#444',
          }}
        >
          Week 4 was one of the most memorable phases of my BloodConnect
          internship. I had the opportunity to conduct both online and offline
          awareness sessions where I interacted with students and explained the
          importance of voluntary blood donation.

          <br />
          <br />

          During these sessions, I discussed the different types of blood
          donation, eligibility criteria, blood preservation techniques,
          donation myths, and the life-saving impact of becoming a regular
          donor. Seeing participants actively engage, ask thoughtful questions,
          and express interest in donating blood made every session meaningful.

          <br />
          <br />

          These experiences strengthened my public speaking, communication, and
          leadership skills while reinforcing my belief that awareness is the
          first step toward saving lives.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '25px',
            marginTop: '40px',
          }}
        >
          <img
            src="/images/session1.jpg"
            alt="Offline Awareness Session"
            style={{
              width: '100%',
              borderRadius: '18px',
              boxShadow: '0 8px 20px rgba(0,0,0,.15)',
            }}
          />

          <img
            src="/images/session2.jpg"
            alt="Online Session"
            style={{
              width: '100%',
              borderRadius: '18px',
              boxShadow: '0 8px 20px rgba(0,0,0,.15)',
            }}
          />

          <img
            src="/images/session3.jpg"
            alt="Blood Donation Presentation"
            style={{
              width: '100%',
              borderRadius: '18px',
              boxShadow: '0 8px 20px rgba(0,0,0,.15)',
            }}
          />
        </div>

        <div
          style={{
            marginTop: '45px',
            background: '#fff5f5',
            borderLeft: '6px solid #c1121f',
            padding: '25px',
            borderRadius: '12px',
          }}
        >
          <h3
            style={{
              color: '#c1121f',
              marginBottom: '15px',
            }}
          >
            Key Learning
          </h3>

          <p
            style={{
              color: '#555',
              lineHeight: '1.8',
            }}
          >
            Every awareness session proved that education has the power to save
            lives. A simple conversation can remove fear, clear misconceptions,
            and inspire someone to become a lifelong blood donor. These sessions
            reminded me that real change begins when knowledge is shared with
            compassion.
          </p>
        </div>

        <blockquote
          style={{
            marginTop: '35px',
            padding: '20px',
            background: '#ffffff',
            borderLeft: '6px solid #c1121f',
            borderRadius: '10px',
            fontStyle: 'italic',
            color: '#666',
          }}
        >
          "A single awareness session may last only an hour, but the decision it
          inspires can save lives for years to come."
        </blockquote>
      </div>
    </motion.section>
  );
}
