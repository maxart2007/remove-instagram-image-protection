function removeOverlays() {
  document.querySelectorAll('div[role="button"]').forEach((container) => {
    const children = container.children;
    if (children.length === 2) {
      const img = children[0].querySelector('img');
      const overlay = children[1];
      if (img && overlay.tagName === 'DIV') {
        overlay.remove();
      }
    }
  });
}

removeOverlays();

const observer = new MutationObserver(() => {
  removeOverlays();
});

observer.observe(document.body, { childList: true, subtree: true });
