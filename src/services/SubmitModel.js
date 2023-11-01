const SubmitModel = model => {
  fetch('https://6519e0a5340309952f0cc472.mockapi.io/api/ifiservice/Models', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(model),
  });
};

export default SubmitModel;
