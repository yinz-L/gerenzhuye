window.COZE_CONFIG = {
  config: {
    bot_id: "7595494365775380516",
  },
  componentProps: {
    title: "Leege",
  },
    ui: {
    base: {
      position: "right",
      offset: {
        x: 32,
        y: 140,
      },
    },
    chat: {
      width: 420,
      height: 680,
    },
  },
  auth: {
    type: "token",
    token: "pat_bgIlAsUcau5qORXJQft2R9NWHCtIzH6ICDNa6DYMEjTDc2z85jz8KzcU0kbB1vhj",
    onRefreshToken: function () {
      return "pat_bgIlAsUcau5qORXJQft2R9NWHCtIzH6ICDNa6DYMEjTDc2z85jz8KzcU0kbB1vhj";
    },
  },
};

window.applyCozeLauncherIcon = function () {
  var imgUrl = "images/Q.png?v=" + Date.now();
  var apply = function () {
    var btn = document.querySelector(".coze-ast-btn");
    if (!btn) {
      return false;
    }
    btn.style.backgroundImage = 'url("' + imgUrl + '")';
    btn.style.backgroundSize = "cover";
    btn.style.backgroundPosition = "center";
    btn.style.borderRadius = "50%";
    var svg = btn.querySelector("svg");
    if (svg) {
      svg.style.opacity = "0";
    }
    return true;
  };

  if (apply()) {
    return;
  }

  var observer = new MutationObserver(function () {
    if (apply()) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
};
          
