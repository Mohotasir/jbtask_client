

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex  justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow p-4 w-3/4 md:w-1/2">
        <button className="float-right text-gray-500 hover:text-gray-700" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
