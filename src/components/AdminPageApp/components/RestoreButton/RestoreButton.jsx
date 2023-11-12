import models from '../../../../Models_2023-11-12_12-28-48.json';

import { useState, useRef } from 'react';

function RestoreButton({ onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState(null);

  //   const fileInput = useRef(null);

  const handleInput = event => {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
      const loadedModels = JSON.parse(reader.result);
      console.log(loadedModels);

      loadedModels.map((model, index) => {
        setTimeout(() => {
          fetch(
            'https://6519e0a5340309952f0cc472.mockapi.io/api/ifiservice/ContactUs',
            {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(model),
            }
          );
        }, 1000 * index);
      });
    };

    reader.readAsText(input.files[0]);
  };

  return (
    <div>
      <label>
        <button>Відновити</button>

        <input
          //   style="display: none"
          type="file"
          accept="application/JSON"
          disabled={false}
          // value={selectedFile}
          onChange={handleInput}
        />
      </label>
    </div>

    // <button onClick={handleRestore} type="button">
    //   Відновити
    // </button>
  );
}

export default RestoreButton;
