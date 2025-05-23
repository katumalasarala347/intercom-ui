export default function ContactList({ onSelect }) {
  const contacts = ["John Doe", "Jane Smith", "Alex Turner"];

  return (
    <div className="w-full md:w-64 border-l p-4 bg-white dark:bg-gray-800 space-y-2 overflow-y-auto">
      <h2 className="text-lg font-bold mb-2">Contacts</h2>
      {contacts.map((contact, idx) => (
        <div
          key={idx}
          onClick={() => onSelect(contact)}
          className="border p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          {contact}
        </div>
      ))}
    </div>
  );
}