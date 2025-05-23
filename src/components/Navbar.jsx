export default function Navbar() {
  return (
    <header className="h-16 px-6 bg-white border-b flex items-center justify-between">
      <h1 className="text-xl font-semibold">Intercom Clone</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border px-2 py-1 rounded"
      />
    </header>
  );
}
