import './globals.css';
import ClientLayout from './ClientLayout';
import { prisma as prismaClient } from '../lib/prisma'; // Safe fallback for migration

export async function generateMetadata() {
  let seoTitle = 'Govina Go Self';
  let seoDescription = 'Self-drive car rental service';

  try {
    const settings = await prismaClient.setting.findMany({
      where: {
        key: { in: ['seoTitle', 'seoDescription'] }
      }
    });
    
    seoTitle = settings.find(s => s.key === 'seoTitle')?.value || seoTitle;
    seoDescription = settings.find(s => s.key === 'seoDescription')?.value || seoDescription;
  } catch (error) {
    console.error('Failed to fetch SEO settings during build, using defaults.');
  }

  return {
    title: seoTitle,
    description: seoDescription,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
