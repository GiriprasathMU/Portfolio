function openPopup(button) {
  const card = button.closest('.card');
  const title = card.getAttribute('data-title');
  const description = card.getAttribute('data-description');
  const extra = card.getAttribute('data-extra');
  const linkPrimary = card.getAttribute('data-link-primary');
  const linkSecondary = card.getAttribute('data-link-secondary');

  document.getElementById('popupTitle').textContent = title;
  document.getElementById('popupDescription').innerHTML = description || "";
  document.getElementById('popupExtra').innerHTML = extra || "";

  const primaryBtn = document.getElementById('popupPrimaryBtn');
  const secondaryBtn = document.getElementById('popupSecondaryBtn');

  primaryBtn.href = linkPrimary || "#";
  primaryBtn.style.display = linkPrimary ? "inline-block" : "none";

  secondaryBtn.href = linkSecondary || "#";
  secondaryBtn.style.display = linkSecondary ? "inline-block" : "none";

  document.getElementById('popupOverlay').classList.add('active');
}

function closePopup(event) {
  document.getElementById('popupOverlay').classList.remove('active');
}
