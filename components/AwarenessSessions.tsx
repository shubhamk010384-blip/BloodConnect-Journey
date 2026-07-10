'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AwarenessSessions() {
  return (
    <section
      id="sessions"
      style={{
        padding: '100px 20px',
        background: '#fafafa',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '20px',
            color: '#b00020',
          }}
        >
          Awareness Sessions
        </motion.h2>

        <p
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 50px',
            lineHeight: 1.8,
          }}
        >
          During my BloodConnect journey I conducted awareness sessions both
          offline and online to educate students about blood donation and
          inspire them to become regular blood donors.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: '30px',
          }}
        >
          <div>
            <Image
              src="/images/session1.jpg"
              alt="Classroom Session"
              width={600}
              height={400}
              style={{ width: '100%', borderRadius: '18px' }}
            />
            <h3>Offline Awareness Session</h3>
          </div>

          <div>
            <Image
              src="/images/session2.jpg"
              alt="Online Session"
              width={600}
              height={400}
              style={{ width: '100%', borderRadius: '18px' }}
            />
            <h3>Online Awareness Session</h3>
          </div>

          <div>
            <Image
              src="/images/session3.jpg"
              alt="Blood Donation Presentation"
              width={600}
              height={400}
              style={{ width: '100%', borderRadius: '18px' }}
            />
            <h3>Blood Preservation Session</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
