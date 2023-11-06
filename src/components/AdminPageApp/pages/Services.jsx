import { useState, useEffect } from 'react';

import { SubmitService } from '../../../services/ServicesAPI';

function Services() {
  const [input, setInput] = useState('');

  function inputHandle(event) {
    setInput(event.target.value);
  }

  function clickHandle() {
    console.log('click');
    SubmitService({
      label: input,
      value: input,
    });
  }

  return (
    <div>
      Сервісні послуги
      <input onChange={inputHandle} value={input} type="text" />
      <button onClick={clickHandle} type="button">
        Додати
      </button>
    </div>
  );
}
export default Services;
