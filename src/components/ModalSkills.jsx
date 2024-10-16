import { IoMdClose } from "react-icons/io";

import './ModalSkills.css'

export default function ModalSkills({ classModal, img, title, description, closeModal }) {
    return (
        <div className={classModal}>
            <button className='close-btn' onClick={() => closeModal()}>
                <IoMdClose />
            </button>
            <div className="img-container-modal">
                <img src={img} alt={title} />
            </div>
            <div className="text-container-modal">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}