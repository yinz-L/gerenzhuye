if (!window.COZE_CONFIG) {
  throw new Error("Missing COZE_CONFIG. Ensure coze-config.js is loaded first.");
}

const token = window.COZE_CONFIG.auth && window.COZE_CONFIG.auth.token;
const appId = window.COZE_CONFIG.appId;

if (!token || !appId) {
  console.warn("Skipping AppWebSDK init: missing token or appId in COZE_CONFIG.");
} else {
  new CozeWebSDK.AppWebSDK({
    token: token,
    appId: appId,
    container: "#app",
    userInfo: window.COZE_CONFIG.userInfo,
    ui: window.COZE_CONFIG.ui,
  });
}
