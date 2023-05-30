
import React,{useState} from "react";
import Modal from './Modal.js';

const App = () => {
  const [showModal,setShowModal] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <h2>Child Component</h2>
          <Modal state={showModal} setstate={setShowModal} title={
            'Modal Content'} desc={'This is the Modal content'}>
          </Modal>
        </div>
    </div>
  )
}

export default App
