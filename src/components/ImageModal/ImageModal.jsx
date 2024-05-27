import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ImageModal({ openModal, modalIsOpen, afterOpenModal, closeModal }) {
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}
export default ImageModal;
const imageRef = useRef(null);
function lightScroll() {
  console.log(imageRef.current);
  const height = imageRef.current?.firstChild.getBoundingClientRect().height;
  if (height) {
    window.scrollBy({
      top: height * 3,
      behavior: 'smooth',
    });
  }
}
