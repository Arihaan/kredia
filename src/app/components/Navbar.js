"use client";

export default function Navbar() {
  return (
    
    <header className="p-4">
    <div className="container ml-16 flex items-center justify-between mt-4">
        <div className="flex items-center">
            <a href="/"><img src="logo.png" alt="Kredia Logo" className="w-10"/></a>
            <span className="text-white text-3xl font-semibold ml-2">Kredia</span> 
        </div>
    </div>
</header>
  );
}
