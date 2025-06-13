function checkLicense() {
  const inputKey = document.getElementById("license").value.trim();
  const status = document.getElementById("status");

  fetch("licenses.json")
    .then(res => res.json())
    .then(data => {
      const match = data.licenses.find(item =>
        item.key === inputKey &&
        new Date(item.expiry) >= new Date()
      );

      if (match) {
        localStorage.setItem("validLicense", inputKey);
        window.location.href = "tool.html";
      } else {
        status.innerText = "❌ Invalid or Expired License Key.";
      }
    })
    .catch(() => {
      status.innerText = "⚠️ Cannot load license file.";
    });
}

// Auto-redirect if already unlocked
if (localStorage.getItem("validLicense")) {
  window.location.href = "tool.html";
}
