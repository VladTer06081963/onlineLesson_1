document.addEventListener('DOMContentLoaded', function () {
    const themeParams = Telegram.WebApp.themeParams;
  
    if (themeParams.bg_color) {
      document.body.style.backgroundColor = themeParams.bg_color;
    }
  
    if (themeParams.text_color) {
      document.body.style.color = themeParams.text_color;
    }
  });