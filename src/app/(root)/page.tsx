export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black -z-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Desktop Background"
          className="h-full w-full object-cover"
        />
      </div>
    </main>
  );
}
