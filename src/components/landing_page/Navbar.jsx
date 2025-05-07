export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black shadow-md">
      <h1 className="text-2xl font-bold text-blue-500">WritingArena</h1>
      <div className="space-x-4 bg">
        <a href="/login" className="px-4 py-2 text-white rounded-full hover:bg-white hover:text-black">Sign in</a>
      </div>
    </nav>
  );
}