// Carrega o bloco de Privacy & Autonomy em todas as fund pages
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("privacy-block");
  if (!target) return;

  fetch("../privacy.html")
    .then(res => res.text())
    .then(html => {
      target.innerHTML = html;
    })
    .catch(() => {
      console.warn("Não foi possível carregar o bloco de privacidade.");
    });
});
