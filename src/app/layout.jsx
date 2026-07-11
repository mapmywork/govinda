import './globals.css';
import ClientLayout from './ClientLayout';
import { prisma as prismaClient } from '../lib/prisma'; // Safe fallback for migration

export async function generateMetadata() {
  const settings = await prismaClient.setting.findMany({
    where: {
      key: { in: ['seoTitle', 'seoDescription'] }
    }
  });
  
  const seoTitle = settings.find(s => s.key === 'seoTitle')?.value || 'Govina Go Self';
  const seoDescription = settings.find(s => s.key === 'seoDescription')?.value || 'Self-drive car rental service';

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
