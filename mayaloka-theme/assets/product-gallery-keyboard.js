const isEditableTarget = (target) => {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest('input, textarea, select, [contenteditable="true"], [role="textbox"]')
  );
};

document.addEventListener('keydown', (event) => {
  if (
    !['ArrowLeft', 'ArrowRight'].includes(event.key) ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    isEditableTarget(event.target) ||
    document.querySelector('dialog[open]')
  ) {
    return;
  }

  const gallery = document.querySelector('.product-information--mayaloka-pdp media-gallery');
  const action = event.key === 'ArrowLeft' ? 'previous' : 'next';
  const arrow = gallery?.querySelector(`slideshow-arrows .slideshow-control--${action}`);

  if (!arrow || arrow.disabled) return;

  event.preventDefault();
  arrow.click();
});
