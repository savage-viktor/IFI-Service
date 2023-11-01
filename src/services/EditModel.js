const EditModel = model => {
  fetch(
    `https://6519e0a5340309952f0cc472.mockapi.io/api/ifiservice/Models/${model.id}`,
    {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(model),
    }
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      console.log('Error 1');

      //   setStatus('error');
    })
    .then(models => {
      console.log('Success');
      //   setModels(models);
      //   setStatus('idle');
    })
    .catch(error => {
      console.log('Error 2');

      //   setStatus('error');
    });
};

export default EditModel;
