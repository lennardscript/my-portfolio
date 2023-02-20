import React from 'react'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {

  const notify = () => {
    //toast.info('CV no disponible. Actualizando mi CV, disculpe los inconvenientes', {position: toast.POSITION.BOTTOM_RIGHT})

    toast.info('CV no disponible. Actualizando mi CV, disculpe los inconvenientes', {

      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar',
      theme: 'light',
      transition: Zoom,
      autoClose: 3000,

    })
  }

  return (
    <>
      <button onClick={notify} className='text-neutral-100 font-semibold px-6 py-3 bg-[#035AA6] rounded shadow hover:bg-[#001E6C]'><a href="#">Ver mi CV</a></button>

      <ToastContainer limit={1} />
    </>
  )
}

export default Notification