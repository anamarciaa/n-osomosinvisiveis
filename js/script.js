document.addEventListener("DOMContentLoaded", () => {
  
  const menuToggle = document.querySelector(".navbar__toggle");
  const navLinks = document.querySelector(".navbar__links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  
  const donationCTA = document.getElementById("donation-cta");
  donationCTA.addEventListener("click", () => {
    document.getElementById("pix").scrollIntoView({ behavior: "smooth" });
  });


  const donationButtons = document.querySelectorAll(".donation__button");
  const donationText = document.getElementById("donation-text");

  const donationContent = {
    fin: `
      <h3>Doação financeira</h3>
      <p>Ajude com qualquer valor via Pix ou transferência bancária. Toda contribuição é transparente e direcionada para ações reais.</p>
    `,
    itens: `
      <h3>Doação de itens</h3>
      <p>Roupas, calçados, alimentos não perecíveis, produtos de higiene, lençóis, livros e brinquedos são sempre bem-vindos.</p>
    `,
    tempo: `
      <h3>Doação de tempo</h3>
      <p>Quer ser voluntário? Junte-se a nós em ações presenciais e eventos solidários para fazer a diferença.</p>
    `
  };

  donationButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tipo = btn.getAttribute("data-target");
      donationText.innerHTML = donationContent[tipo] || "<p>Selecione um tipo de doação acima para ver os detalhes.</p>";
    });
  });


  const copyBtn = document.getElementById("copy-pix");
  const pixKey = document.getElementById("pix-key");
  const copyStatus = document.getElementById("copy-status");

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(pixKey.value).then(() => {
      copyStatus.textContent = "Chave Pix copiada!";
      setTimeout(() => copyStatus.textContent = "", 2000);
    });
  });

  const form = document.getElementById("volunteer-form");
  const formStatus = document.getElementById("form-status");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('service_32te7iy', 'service_32te7iy', this)
      .then(() => {
        formStatus.textContent = "Mensagem enviada com sucesso!";
        form.reset();
      })
      .catch(() => {
        formStatus.textContent = "Erro ao enviar a mensagem, tente novamente.";
      });
  });
});

