import './globals.css';

export const metadata = {
  title: 'Pulse - My BloodConnect Journey',
  description: 'Interactive BloodConnect Journey'
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
