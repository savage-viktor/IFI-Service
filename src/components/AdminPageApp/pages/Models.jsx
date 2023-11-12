import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Models.module.css';

import GetModels from '../../../services/GetModels';
import SubmitModel from '../../../services/SubmitModel';
import EditModel from '../../../services/EditModel';
import DeleteModel from '../../../services/DeleteModel';

import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';

import ModelsList from '../components/ModelList/ModelList';

import FindInput from '../components/FindInput/FindInput';
import AddModelBtn from '../components/AddModelBtn/AddModelBtn';
import BackUpButton from '../components/BackUpButton/BackUpButton';
import RestoreButton from '../components/RestoreButton/RestoreButton';

import AddModelForm from '../components/AddModelForm/AddModelForm';
import Modal from '../components/Modal/Modal';
import ModalConfirm from '../components/ModalConfirm/ModalConfirm';
import Confirm from '../components/Confirm/Confirm';

const initialModel = {
  vendor: '',
  model: '',
  image: '',
  services: [],
  details: {
    type: '',
    typeOfSim: '',
    size: '',
    battery: '',
    bands: '',
    antena: '',
    wifi: '',
    mobileNetwork: '',
  },
};

function Models() {
  const [status, setStatus] = useState('idle');
  const [models, setModels] = useState(false);
  const [model, setModel] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalConfirmText, setModalConfirmText] = useState('');
  const [modalConfirmType, setModalConfirmType] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [findModel, setFindModel] = useState('');

  const [update, setUpdate] = useState(1);

  useEffect(() => {
    setStatus('loading');
    GetModels()
      .then(models => {
        setModels(models);
        setStatus('idle');
      })
      .catch(error => {
        console.log(error.message);
        setStatus('error');
      });
  }, [update]);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setModel(false);
  };

  const handleConfirmModal = async () => {
    switch (modalConfirmType) {
      case 'delete':
        try {
          handleCloseModalConfirm();
          await DeleteModel(deleteId);
          setUpdate(prevState => prevState + 1);

          toast.success('Видалено успішно', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        } catch (error) {
          toast.error(`Помилка видалення ${error.message}`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }

        break;

      case 'submit':
        try {
          handleCloseModalConfirm();
          handleCloseModal();

          await SubmitModel(model);
          setUpdate(prevState => prevState + 1);

          toast.success('Додано модель успішно', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        } catch (error) {
          toast.error(`Помилка дадавання моделі ${error.message}`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }

        break;

      case 'edit':
        try {
          handleCloseModalConfirm();
          handleCloseModal();

          await EditModel(model);
          setUpdate(prevState => prevState + 1);

          toast.success('Відредаговано успішно', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        } catch (error) {
          toast.error(`Помилка редагування ${error.message}`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }

        break;

      default:
        alert('Помилка типу модального вікна');
    }
  };

  const handleCloseModalConfirm = () => {
    setModalConfirm(false);
  };

  const handleSubmitModel = model => {
    setModel(model);
    setModalConfirmType(model.id ? 'edit' : 'submit');
    setModalConfirmText(model.id ? 'Зберегти зміни?' : 'Додати нову модель?');
    setModalConfirm(true);
  };

  const handleEditModel = model => {
    setModel(model);
    setModalConfirmType('edit');
    setModal(true);
  };

  const handleDeleteModel = async id => {
    setDeleteId(id);
    setModalConfirmType('delete');
    setModalConfirmText('Ви дійсно бажаєте видалити?');
    setModalConfirm(true);
  };

  const filterModels = models => {
    return models.filter(model => {
      return model.model.toLowerCase().includes(findModel);
    });
  };

  return (
    <div className={styles.section}>
      <FindInput onChange={setFindModel} />
      <AddModelBtn onClick={handleOpenModal} />
      <BackUpButton getQuery={GetModels} name="Моделі" />
      <RestoreButton />
      {modal && (
        <Modal onClose={handleCloseModal}>
          <AddModelForm
            model={model || initialModel}
            onSubmit={handleSubmitModel}
          />
        </Modal>
      )}
      {modalConfirm && (
        <ModalConfirm onClose={handleCloseModalConfirm}>
          <Confirm
            text={modalConfirmText}
            accept={handleConfirmModal}
            decline={handleCloseModalConfirm}
          />
        </ModalConfirm>
      )}
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {models && (
        <ModelsList
          models={filterModels(models)}
          onEdit={handleEditModel}
          onDelete={handleDeleteModel}
        />
      )}
    </div>
  );
}

export default Models;
