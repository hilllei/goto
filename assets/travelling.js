function travelling() {
  let urls = [];
  const http = "http://";
  const reg = new RegExp("^" + http);
  const empty = null;
  const suffix = "";


    urls[1] = "www.wwfchina.org";
    urls[2] = "";
    urls[3] = "";
    urls[4] = "";
    urls[5] = "";
    urls[6] = "";
    urls[7] = "";
    urls[8] = "";
    urls[9] = "";
    urls[10] = "";


    urls[11] = "www.foryuanbo.com";
    urls[12] = "slykiten.com";
    urls[13] = "2cat.net";
    urls[14] = "zblogs.top";
    urls[15] = "www.winegrower.cn";
    urls[16] = "feng.pub";
    urls[17] = "www.ntiy.com";
    urls[18] = "www.thyuu.com";
    urls[19] = "wind.ink";
    urls[20] = "maie.name";
    urls[21] = "muguayuan.com";
    urls[22] = "www.winature.com";
    urls[23] = "www.zairun.com";
    urls[24] = "blog.zhheo.com";
    urls[25] = "fatesinger.com";
    urls[26] = "rawchen.com";
    urls[27] = "imzm.im";
    urls[28] = "novcu.com";
    urls[29] = "";
    urls[30] = "synyan.cn";
    urls[31] = "mingxin.life";
    urls[32] = "onojyun.com";
    urls[33] = "immmmm.com";
    urls[34] = "blog.shaoxiao.net";
    urls[35] = "wuse.ink";
    urls[36] = "www.xiangshitan.com";
    urls[37] = "www.yayu.net";
    urls[38] = "yyjn.org";
    urls[39] = "couqiao.net";
    urls[40] = "www.juroku.net";
    urls[41] = "laomai.org";
    urls[42] = "ichov.com";
    urls[43] = "zhufan.net";
    urls[44] = "her.blue";
    urls[45] = "www.lushaojun.com";
    urls[46] = "blog.99xin.me";
    urls[47] = "";
    urls[48] = "";
    urls[49] = "";
    urls[50] = "";
    urls[51] = "";
    urls[52] = "";
    urls[53] = "";
    urls[54] = "";
    urls[55] = "";
    urls[56] = "";
    urls[57] = "";
    urls[58] = "";
    urls[59] = "";
    urls[60] = "";


  // 去除 null ，以及拼接 http://
  urls = urls
    .filter((url) => url)
    .map((url) => (reg.test(url) ? url : http + url + suffix));

  if (document.referrer) {
    const origin = new URL(document.referrer).origin;
    if (urls.includes(origin)) {
      urls.splice(urls.indexOf(origin), 1);
    }
  }

  const index = Math.floor(Math.random() * urls.length);
  window.location = urls[index];
}
