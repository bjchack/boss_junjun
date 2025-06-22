function generateIMEI() {
  const tac = "356938"; // 6 digits TAC
  const serial8 = String(Math.floor(Math.random() * 100000000)).padStart(8, '0'); // 8 digit serial
  const imeiWithoutChecksum = tac + serial8; // 14 digits total

  let sum = 0;
  // Apply Luhn Algorithm from right to left (excluding checksum)
  for (let i = 0; i < imeiWithoutChecksum.length; i++) {
    let digit = parseInt(imeiWithoutChecksum.charAt(imeiWithoutChecksum.length - 1 - i));
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  const checksum = (10 - (sum % 10)) % 10;
  const fullIMEI = imeiWithoutChecksum + checksum; // total 15 digits

  const output = document.getElementById("imei-output");
  output.value = fullIMEI;

  if (document.getElementById("copy-checkbox").checked) {
    navigator.clipboard.writeText(fullIMEI)
      .then(() => console.log("IMEI copied to clipboard"))
      .catch(err => console.error("Failed to copy IMEI", err));
  }
}
// ✅ APK Update Checker
(function checkUpdate() {
  const currentVersion = "1.0.6"; // ITO palitan mo based sa current app version
  const versionURL = "https://bjchack.github.io/zlts10g/version.json";

  fetch(versionURL)
    .then(res => res.json())
    .then(data => {
      if (data.version > currentVersion) {
        const updateBox = document.createElement("div");
        updateBox.style.position = "fixed";
        updateBox.style.bottom = "20px";
        updateBox.style.right = "20px";
        updateBox.style.background = "#ffc107";
        updateBox.style.color = "#000";
        updateBox.style.padding = "12px 20px";
        updateBox.style.borderRadius = "8px";
        updateBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
        updateBox.style.zIndex = "9999";
        updateBox.innerHTML = `
          <strong>⬆️ New Version: ${data.version}</strong><br>
          <small>${data.notes || 'Click update to get latest version'}</small><br>
          <a href="${data.update_url}" target="_blank" style="color:#000;text-decoration:underline;">📥 Update Now</a>
        `;
        document.body.appendChild(updateBox);
      }
    })
    .catch(e => console.warn("Update check failed:", e));
})();
