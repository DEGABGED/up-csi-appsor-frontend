const modalValues = (setStatus, success, message = '') => ({
  display: true,
  success,
  message,
  onClose: () => {
    setStatus({ display: false });
  },
  onFinish: () => {
    setStatus({ display: false });
    window.location.href = '/';
  },
});

const handleSubmit = (values, { setStatus }) => {
  const url = 'https://up-csi-appsor-backend.herokuapp.com/api/applicants';
  // const url = 'http://localhost:3001/api/applicants';

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(values),
  })
    .then((res) => {
      const wasSuccessful = res.ok;
      res.json()
        .then((data) => {
          setStatus(modalValues(setStatus, wasSuccessful, data));
        })
        .catch(() => {
          setStatus(modalValues(
            setStatus,
            false,
            'Please try submitting the form again. If the problem persists, please tell us. Thank you!',
          ));
        });
    })
    .catch(() => {
      setStatus(modalValues(setStatus,
        false,
        'Please try submitting the form again. If the problem persists, please tell us. Thank you!',
      ));
    });
};

export default handleSubmit;
