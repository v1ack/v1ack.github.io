function install_metric(alt = false) {
  let link = alt
    ? "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js"
    : "https://mc.yandex.ru/metrika/tag.js"

  ;(function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        ;(m[i].a = m[i].a || []).push(arguments)
      }
    m[i].l = 1 * new Date()
    ;(k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a)
  })(window, document, "script", link, "ym")

  ym(74988706, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  })
}

;(function () {
  console.log("here")
  if (location.host.indexOf("localhost") + 1)
    return null
  install_metric()
  setTimeout(function () {
    if (typeof Ya === "undefined") install_metric(true)
  }, 10000)
})()
