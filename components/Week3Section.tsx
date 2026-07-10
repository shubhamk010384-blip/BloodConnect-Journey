'use client';

import { motion } from 'framer-motion';

export default function Week3Section() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        padding: '80px 20px',
        background: '#fff7f7'
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        <h2
          style={{
            fontSize: '2.6rem',
            color: '#c1121f'
          }}
        >
          🎉 Week 3 • Fun Week
        </h2>

        <p
          style={{
            marginTop: '20px',
            lineHeight: '1.9',
            color: '#444'
          }}
        >
          After two weeks of surveys and outreach, Week 3 was dedicated to
          team bonding and interactive activities. It reminded us that a
          motivated team creates a bigger impact. We laughed, competed,
          collaborated, and strengthened friendships while preparing
          ourselves for the awareness sessions ahead.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '20px',
            marginTop: '35px'
          }}
        >
          <div
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
          >
            <h3>🎬 Emoji Movie Challenge</h3>
            <p>
              Guessed movie names using only emojis. It encouraged quick
              thinking, creativity, and lots of laughter.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
          >
            <h3>😂 Wrong Answers Only</h3>
            <p>
              One of the funniest games where the goal was to intentionally
              give the funniest incorrect answers to simple questions.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
          >
            <h3>✏️ Skribbl Challenge</h3>
            <p>
              Played online drawing and guessing games that improved teamwork,
              communication, and coordination between interns.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
          >
            <h3>🤝 Team Bonding</h3>
            <p>
              Every activity brought interns closer together, creating a
              supportive environment that motivated us for the remaining
              weeks of the internship.
            </p>
          </div>
        </div>

        <blockquote
          style={{
            marginTop: '45px',
            padding: '25px',
            borderLeft: '6px solid #c1121f',
            background: '#fff',
            borderRadius: '12px',
            fontStyle: 'italic'
          }}
        >
          "Week 3 reminded us that behind every successful mission is a happy,
          connected team. We didn't just play games—we built friendships that
          made every challenge easier to overcome."
        </blockquote>
      </div>
    </motion.section>
  );
}
