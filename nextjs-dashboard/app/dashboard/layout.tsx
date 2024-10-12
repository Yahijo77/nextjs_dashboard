import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  // The main layout component for the dashboard
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Sidebar navigation for the dashboard */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* Main content area that grows to fill available space */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}