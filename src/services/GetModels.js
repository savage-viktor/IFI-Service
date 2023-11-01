const GetModels = (setStatus, setModels) => {
  fetch('https://6519e0a5340309952f0cc472.mockapi.io/api/ifiservice/Models', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      setStatus('error');
    })
    .then(models => {
      setModels(models);
      setStatus('idle');
    })
    .catch(error => {
      setStatus('error');
    });
};

export default GetModels;
