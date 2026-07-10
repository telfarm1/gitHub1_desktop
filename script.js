const ctaButton = document.getElementById("cta-button");
const message = document.getElementById("message");

if (ctaButton && message) {
  ctaButton.addEventListener("click", () => {
    message.textContent = "샘플 사이트가 정상적으로 동작하고 있습니다.";
  });
}
