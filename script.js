q
  // ✅ IMEI Generator with Luhn checksum
  function generateIMEI() {
    const tac = "356938"; // Fixed TAC (6 digits)
    const serial8 = String(Math.floor(Math.random() * 100000000)).padStart(8, '0'); // Random 8 digits
    const imeiWithoutChecksum = tac + serial8;

    let sum = 0;
    for (let i = 0; i < imeiWithoutChecksum.length; i++) {
      let digit = parseInt(imeiWithoutChecksum.charAt(imeiWithoutChecksum.length - 1 - i));
      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }

    const checksum = (10 - (sum % 10)) % 10;
    const fullIMEI = imeiWithoutChecksum + checksum;

    const output = document.getElementById("imei-output");
    output.innerText = fullIMEI;

    if (document.getElementById("copy-checkbox").checked) {
      navigator.clipboard.writeText(fullIMEI)
        .then(() => console.log("IMEI copied"))
        .catch(err => console.error("Copy failed", err));
    }
  }

  // ✅ Back button prevention
  history.pushState(null, null, location.href);
  window.addEventListener("popstate", function () {
    history.pushState(null, null, location.href);
  });
