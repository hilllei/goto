function travelling() {
  let urls = [];
  const https = "https://";
  const reg = new RegExp("^" + https);
  const empty = null;
  const suffix = "/?utm_source=goto";

  urls[0] = "hilllei.com";
  urls[1] = "hilllei.com";


  urls[urls.length] = "https://github.com/hilllei/goto";

  // 去除 null ，以及拼接 https://
  urls = urls
    .filter((url) => url)
    .map((url) => (reg.test(url) ? url : https + url + suffix));

  if (document.referrer) {
    const origin = new URL(document.referrer).origin;
    if (urls.includes(origin)) {
      urls.splice(urls.indexOf(origin), 1);
    }
  }

  const index = Math.floor(Math.random() * urls.length);
  window.location = urls[index];
}
