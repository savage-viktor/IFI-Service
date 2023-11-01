import { Formik, Field, Form, ErrorMessage } from 'formik';

import SubmitModel from '../../../../services/SubmitModel';
import EditModel from '../../../../services/EditModel';
import AddServiceForm from '../AddServiceForm/AddServiceForm';

import styles from './AddModelForm.module.css';
import { useState } from 'react';

// let initialModel = {
//   vendor: '',
//   model: '',
//   image: '',

//   type: {editModel.services || ""},
//   typeOfSim: '',
//   size: '',
//   battery: '',
//   bands: '',
//   antena: '',
//   wifi: '',
//   mobileNetwork: '',
// };
const flatObject = obj => {
  function flat(o) {
    return Object.entries(o).flatMap(([key, val]) => {
      if (typeof val === 'object') return flat(val);

      return [[key, val]];
    });
  }

  return Object.fromEntries(flat(obj));
};

function AddModelForm({ editModel }) {
  console.log(editModel);
  console.log(flatObject(editModel));

  let initialModel = {
    vendor: '',
    model: '',
    image: '',

    type: ``,
    typeOfSim: '',
    size: '',
    battery: '',
    bands: '',
    antena: '',
    wifi: '',
    mobileNetwork: '',
  };

  const [services, setServices] = useState(editModel.services || []);
  const handleSubmit = values => {
    const {
      vendor,
      model,
      type,
      typeOfSim,
      size,
      battery,
      bands,
      antena,
      wifi,
      mobileNetwork,
    } = values;

    const addingModel = {
      vendor,
      model,
      image:
        './images/models/' + model.split(' ').join('_').toLowerCase() + '.jpg',
      details: {
        type,
        typeOfSim,
        size,
        battery,
        bands,
        antena,
        wifi,
        mobileNetwork,
      },
      services,
    };
    console.log('Hello', addingModel, services);
    editModel ? EditModel(addingModel, editModel.id) : SubmitModel(addingModel);
  };

  const handleAddService = ({ serviceName, serviceDescription }) => {
    console.log(serviceName, serviceDescription);
    setServices(prevServices => {
      return [
        ...prevServices,
        { name: serviceName, description: serviceDescription },
      ];
    });
  };

  return (
    <div className={styles.section}>
      <Formik
        // validationSchema="erg"
        initialValues={editModel ? flatObject(editModel) : initialModel}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.columnModelMain}>
              <div className={styles.vendorModel}>
                <label className={styles.label}>
                  Виробник
                  <Field className={styles.field} as="select" name="vendor">
                    <option className={styles.option} value="Novatel">
                      Novatel
                    </option>
                    <option className={styles.option} value="Netgear">
                      Netgear
                    </option>
                    <option className={styles.option} value="Huawei">
                      Huawei
                    </option>
                    <option className={styles.option} value="ZTE">
                      ZTE
                    </option>
                    <option className={styles.option} value="Alcatel">
                      Alcatel
                    </option>
                    <option className={styles.option} value="Other">
                      Other
                    </option>
                  </Field>
                </label>
                <label className={styles.label}>
                  Модель
                  <Field
                    className={styles.field}
                    name="model"
                    placeholder="Модель"
                  />
                </label>
              </div>
              <div className={styles.servicesBox}>
                <span>Сервісні послуги</span>
                <div>
                  {services.length !== 0 &&
                    services.map(service => {
                      return service.name + service.description;
                    })}
                </div>
              </div>
            </div>

            <div className={styles.columnDetails}>
              <label className={styles.label}>
                Тип пристрою
                <Field
                  className={styles.field}
                  name="type"
                  placeholder="Тип пристрою"
                />
              </label>

              <label className={styles.label}>
                Тип SIM карти
                <Field
                  className={styles.field}
                  name="typeOfSim"
                  placeholder="Тип SIM карти"
                />
              </label>

              <label className={styles.label}>
                Розмір, мм
                <Field
                  className={styles.field}
                  name="size"
                  placeholder="Розмір"
                />
              </label>

              <label className={styles.label}>
                Акумулятор
                <Field
                  className={styles.field}
                  name="battery"
                  placeholder="Акумулятор"
                />
              </label>

              <label className={styles.label}>
                Частоти
                <Field
                  className={styles.field}
                  name="bands"
                  placeholder="Частоти"
                />
              </label>

              <label className={styles.label}>
                Антенний роз'єм
                <Field
                  className={styles.field}
                  name="antena"
                  placeholder="Антена"
                />
              </label>

              <label className={styles.label}>
                Wi-Fi
                <Field
                  className={styles.field}
                  name="wifi"
                  placeholder="Wi-Fi"
                />
              </label>

              <label className={styles.label}>
                Мобільна мережа
                <Field
                  className={styles.field}
                  name="mobileNetwork"
                  placeholder="Мобільна мережа"
                />
              </label>
            </div>
          </div>

          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      <AddServiceForm handleAddService={handleAddService} />
    </div>
  );
}

export default AddModelForm;
