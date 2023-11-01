import { Formik, Field, Form, ErrorMessage } from 'formik';

const initialService = {
  serviceName: '',
  serviceDescription: '',
};

function AddServiceForm({ handleAddService }) {
  const addService = (values, { resetForm }) => {
    handleAddService(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialService} onSubmit={addService}>
      <Form autoComplete="off">
        <div>
          <label>
            Назва послуги
            <Field name="serviceName" placeholder="Назва послуги" />
          </label>
          <label>
            Опис послуги
            <Field name="serviceDescription" placeholder="Опис послуги" />
          </label>
        </div>
        <button type="submit">Додати послугу</button>
      </Form>
    </Formik>
  );
}

export default AddServiceForm;
