import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingContact } from './FloatingContact';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-surface w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
