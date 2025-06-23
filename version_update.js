document.addEventListener("DOMContentLoaded", function () {
  const latestVersion = "v1.0.7";
  const apkURL = "https://bjchack.github.io/app/ZltBands v1.0.7.apk";

  if (localStorage.getItem("last_apk_alert") !== latestVersion) {
    if (confirm(`📢 New APK Available!\n\nVersion: ${latestVersion}\n\nDownload now?`)) {
      window.open(apkURL, "_blank");
    }
    localStorage.setItem("last_apk_alert", latestVersion);
  }
});
