'use client';

import { motion } from 'framer-motion';

export default function Week5Section() {
  return (
    <motion.section
      id="week5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        padding: '80px 20px',
        background: '#fff'
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            color: '#c1121f'
          }}
        >
          Week 5 • Building a Lasting Impact
        </h2>

        <p
          style={{
            marginTop: '20px',
            lineHeight: '1.9',
            color: '#444'
          }}
        >
          The final week focused on creating long-term impact.
          I built a verified outreach database for colleges,
          documented my internship journey through a detailed
          reflection blog, and created an awareness video to
          encourage voluntary blood donation.

          This week made me realize that impact isn't only created
          through events—it is also created by building resources
          that future volunteers can use to save more lives.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '25px',
            marginTop: '40px'
          }}
        >

          <div
            style={{
              background: '#fff5f5',
              padding: '25px',
              borderRadius: '16px',
              textAlign: 'center'
            }}
          >
            <h3>📊 Outreach Database</h3>

            <p>
              Verified contact database of colleges,
              schools and institutions.
            </p>

            <a
              href="/week5-work.xlsx"
              download
            >
              Download Excel
            </a>
          </div>

          <div
            style={{
              background: '#fff5f5',
              padding: '25px',
              borderRadius: '16px',
              textAlign: 'center'
            }}
          >
            <h3>🎥 Awareness Video</h3>

            <video
              controls
              width="100%"
              style={{
                borderRadius: '12px',
                marginTop: '15px'
              }}
            >
              <source
                src="/week5-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div
            style={{
              background: '#fff5f5',
              padding: '25px',
              borderRadius: '16px',
              textAlign: 'center'
            }}
          >
            <h3>📝 Reflection Blog</h3>

            <p>
              My complete BloodConnect internship experience,
              learnings and reflections.
            </p>

            <a
              href="/blog.pdf"
              target="_blank"
            >
              Read Blog
            </a>
          </div>

        </div>

        <blockquote
          style={{
            marginTop: '45px',
            padding: '25px',
            borderLeft: '6px solid #c1121f',
            background: '#fafafa',
            borderRadius: '12px',
            fontStyle: 'italic'
          }}
        >
          "This internship taught me that every call,
          every spreadsheet, every awareness session,
          and every conversation has the power to save
          someone's life. Real impact begins with one
          person choosing to care."
        </blockquote>

      </div>
    </motion.section>
  );
}
