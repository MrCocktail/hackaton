import { BsGoogle } from "react-icons/bs"; 
'use client';

import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from "../services/userContext.service";
import { getUser } from "../services/user.service";

export default function Connection() {
  const [openModal, setOpenModal] = useState(true);
  const {login} = useUserContext()
  console.log('jj');
  useEffect(() => {
    const getUserById = async (userId) => {
      try {
        const response = await getUser(userId);
        const user = response.data;
        console.log(user);
        login(user);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        console.log('Une erreur s\'est produite lors de la récupération de l\'utilisateur :', error);
      }
    };

    getUserById(2);
  }, []); 

  
  

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} position={"top-right"} onClose={() => setOpenModal(false)}>
        <Modal.Header>Google Authentication</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Button>
                <Link className='text-white' to="http://localhost:8000/auth/google"><BsGoogle className="inline me-5" fontSize={24} />Connect with Google</Link> 
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
