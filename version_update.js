 document.addEventListener("DOMContentLoaded", function () {
    const latestVersion = "v2.1"; // ← Baguhin mo kapag may bagong release
    const apkURL = "https://github.com/YourUser/YourRepo/releases/download/v2.1/zltbands_v2.1.apk";

    // Check kung na-alert na si admin
    if (localStorage.getItem("last_alert_version") !== latestVersion) {
      if (confirm(`📱 New APK Available!\n\nVersion: ${latestVersion}\n\nDo you want to download now?`)) {
        window.open(apkURL, "_blank");
      }
      localStorage.setItem("last_alert_version", latestVersion);
    }
  });
