document.addEventListener("DOMContentLoaded", function () {
  const latestVersion = "v2.1"; // 📝 Palitan kapag may bagong release
  const apkURL = "https://github.com/YourUser/YourRepo/releases/download/v2.1/zltbands_v2.1.apk";

  if (localStorage.getItem("last_apk_alert") !== latestVersion) {
    if (confirm(`📢 New APK Available!\n\nVersion: ${latestVersion}\n\nDownload now?`)) {
      window.open(apkURL, "_blank");
    }
    localStorage.setItem("last_apk_alert", latestVersion);
  }
});
