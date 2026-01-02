const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=1200&fit=crop"
          className="w-full h-full object-cover"
          alt="auth"
        />
      </div>

      <div className="w-1/2 bg-black flex items-center justify-center px-16">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
