import './globals.css';

export const metadata = {
   title: 'SHIBASEINU',
   description:
      'Welcome to Shibase Inu - Soon the Biggest Thing On BASE Chain.',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
