import { useState, useEffect } from 'react';
import ModelsGallery from './ModelsGallery/ModelsGallery';
import FilterButtons from './FilterButtons/FilterButtons';
import Loader from '../Loader/Loader';
import Error from './Error/Error';

const services = [
  'Ремонт антенних роз`ємів',
  'Ремонт SIM приймача',
  'Ремонт приймача мережі',
  'Перепайка під антену',
  'Ремонт кнопки ввімкнення',
  'Ремонт роз`єму USB',
  'Ремонт ланцюга живлення',
  'Заміна мікросхеми пам`яті',
];

function SoftwareSolutions() {
  const [status, setStatus] = useState('idle');
  const [models, setModels] = useState(false);

  // const [filter, setFilter] = useState('Укранський інтерфейс');
  const [activeService, setActiveService] = useState(
    'Ремонт антенних роз`ємів'
  );

  useEffect(() => {
    setStatus('loading');
    fetch('https://6519e0a5340309952f0cc472.mockapi.io/api/ifiservice/Models', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // handle error
        setStatus('error');
      })
      .then(tasks => {
        // Do something with the list of tasks
        setModels(tasks);
        setStatus('idle');
      })
      .catch(error => {
        // handle error
        setStatus('error');
      });
  }, []);

  const filteredModels = models
    ? models.filter(model => {
        let x = false;
        model.services.map(service => {
          if (service.description === activeService) {
            x = true;
          }
        });
        return x;
      })
    : '';

  const onClick = event => {
    setActiveService(event.target.innerHTML);
  };

  return (
    <>
      <FilterButtons
        services={services}
        activeService={activeService}
        onClick={onClick}
      />
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}

      {models && (
        <ModelsGallery models={filteredModels} activeService={activeService} />
      )}
    </>
  );
}
export default SoftwareSolutions;
