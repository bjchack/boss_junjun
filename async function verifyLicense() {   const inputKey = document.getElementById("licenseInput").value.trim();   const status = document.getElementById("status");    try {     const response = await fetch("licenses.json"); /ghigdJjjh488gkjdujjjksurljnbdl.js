async function verifyLicense() {
  const inputKey = document.getElementById("licenseInput").value.trim();
  const status = document.getElementById("status");

  try {
    const response = await fetch("licenses.json"); // Local fetch from GitHub Pages
    const data = await response.json();

    const match = data.licenses.find(item => item.key === inputKey);
    if (!match) {
      status.innerText = "❌ Invalid license key.";
      return;
    }

    const expiry = new Date(match.expiry);
    const now = new Date();
    if (expiry < now) {
      status.innerText = "❌ License expired.";
      return;
    }

    localStorage.setItem("valid_license", inputKey);
    window.location.href = "tool.html";
  } catch (err) {
    status.innerText = "⚠️ Could not verify license. Try again later.";
  }
}
