import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './styles/globals.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout-body">
        <Header />
        <main className="layout-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
