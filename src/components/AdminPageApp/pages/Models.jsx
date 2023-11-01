import { useState, useEffect } from 'react';

import styles from './Models.module.css';

import GetModels from '../../../services/GetModels';
import EditModel from '../../../services/EditModel';
import DeleteModel from '../../../services/DeleteModel';

import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';

import ModelsList from '../components/ModelList/ModelList';

import AddModelBtn from '../components/AddModelBtn/AddModelBtn';
import AddModelForm from '../components/AddModelForm/AddModelForm';
import Modal from '../components/Modal/Modal';
import ModalConfirm from '../components/ModalConfirm/ModalConfirm';

// const model = {
//   vendor: '',
//   model: '',
//   image: '',
//   details: {
//     type: '',
//     typeOfSim: '',
//     size: '',
//     battery: '',
//     bands: '',
//     antena: '',
//     wifi: '',
//     mobileNetwork: '',
//   },
//   services: [],
// };

function Models() {
  const [status, setStatus] = useState('idle');
  const [models, setModels] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [update, setUpdate] = useState(1);

  useEffect(() => {
    setStatus('loading');
    GetModels(setStatus, setModels);
  }, [update]);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleCloseModalConfirm = () => {
    setModalConfirm(false);
  };

  // const handleDeleteModel = () => {
  //   DeleteModel();
  // };

  const handleEditModel = model => {
    console.log('Edit', model);
    EditModel(model);
  };

  const handleDeleteModel = async id => {
    try {
      await DeleteModel(id);
      setUpdate(prevState => prevState + 1);
    } catch (error) {
      console.log('Помилка видалення', error.message);
    }

    // DeleteModel(id);
    // console.log('After');
  };

  return (
    <div className={styles.section}>
      <AddModelBtn onClick={handleOpenModal} />

      {modal && (
        <Modal onClose={handleCloseModal}>
          <AddModelForm />
        </Modal>
      )}

      {modalConfirm && (
        <ModalConfirm onClose={handleCloseModalConfirm}></ModalConfirm>
      )}

      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {models && (
        <ModelsList
          models={models}
          onEdit={handleEditModel}
          onDelete={handleDeleteModel}
        />
      )}
    </div>
  );
}

export default Models;
