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
