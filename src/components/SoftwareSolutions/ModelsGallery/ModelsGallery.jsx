function ModelsGallery({ models, activeService }) {
  return (
    <ul class="models-gallery-list">
      {models.map(model => {
        let serviceIndex = 0;

        model.services.map((service, index) => {
          if (service.name === activeService) {
            serviceIndex = index;
          }
          return 0;
        });

        const isPage = model.services[serviceIndex].page === '' ? false : true;

        return (
          <li class="models-gallery-item" key={model.id}>
            <a
              class={
                isPage ? ' models-gallery-link' : 'models-gallery-link disabled'
              }
              href={model.services[serviceIndex].page}
            >
              <img
                class="models-gallery-image"
                src={model.image}
                alt={model.model}
              />
              <p class="models-gallery-model">
                {model.vendor} {model.model}
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default ModelsGallery;
