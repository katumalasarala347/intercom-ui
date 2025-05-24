function ContactList({ contacts, selectedContact, onSelect }) {
  return (
    <div className="w-48 border-r dark:border-gray-700 p-2">
      <h2 className="font-semibold mb-2">Contacts</h2>
      {contacts.map((contact) => (
        <button
          key={contact}
          className={`block w-full text-left p-2 rounded mb-1 hover:bg-blue-100 dark:hover:bg-gray-700 ${
            contact === selectedContact ? "bg-blue-200 dark:bg-gray-700" : ""
          }`}
          onClick={() => onSelect(contact)}
        >
          {contact}
        </button>
      ))}
    </div>
  );
}

export default ContactList;