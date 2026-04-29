export const config = { runtime: "edge" };

const _0x4d2e = [
  "TARGET_DOMAIN",
  "replace",
  "/$",
  "",
  "indexOf",
  "slice",
  "Headers",
  "set",
  "method",
  "GET",
  "HEAD",
  "body",
  "duplex",
  "half",
  "redirect",
  "manual",
  "error",
  "relay error:",
  "x-real-ip",
  "x-forwarded-for",
  "x-vercel-"
];

const _0x2c1a = function(_0x1a, _0x2b){
  _0x1a = _0x1a - 0x0;
  return _0x4d2e[_0x1a];
};

const _0x7aa1b3 = (process.env[_0x2c1a(0x0)] || "")[_0x2c1a(0x1)](/\/$/, _0x2c1a(0x3));

const _0x9cfe = new Set([
  "ho"+"st",
  "connec"+"tion",
  "keep-"+"alive",
  "proxy-authe"+"nticate",
  "proxy-author"+"ization",
  "t"+"e",
  "trai"+"ler",
  "transfer-enco"+"ding",
  "upg"+"rade",
  "forw"+"arded",
  "x-forwarded-"+"host",
  "x-forwarded-"+"proto",
  "x-forwarded-"+"port"
]);

(function(){
  let _0x1 = 0;
  for(;_0x1 < 1;){
    try{
      if(Date.now() > 0){
        _0x1++;
      }
    }catch(_){}
  }
})();

function _0xdead(_0xv){
  return _0xv;
}

export default async function _0xhandler(_0xreq){

  if(!_0x7aa1b3){
    return new Response("Misconfigured: TARGET_DOMAIN is not set", { status: 500 });
  }

  try{

    let _0xidx = _0xreq.url[_0x2c1a(0x4)]("/", 8);

    let _0xurl = _0xidx === -1
      ? _0x7aa1b3 + "/"
      : _0x7aa1b3 + _0xreq.url[_0x2c1a(0x5)](_0xidx);

    let _0xh = new globalThis[_0x2c1a(0x6)]();

    let _0xip = null;

    for (let [_0xk,_0xv] of _0xreq.headers){

      if(_0x9cfe.has(_0xk)) continue;

      if(_0xk[0] === "x" && _0xk.startsWith(_0x2c1a(0x14))) continue;

      if(_0xk === _0x2c1a(0x12)){
        _0xip = _0xv;
        continue;
      }

      if(_0xk === _0x2c1a(0x13)){
        if(!_0xip) _0xip = _0xv;
        continue;
      }

      _0xh[_0x2c1a(0x7)](_0xk,_0xv);
    }

    if(_0xip){
      _0xh[_0x2c1a(0x7)](_0x2c1a(0x13), _0xip);
    }

    const _0xm = _0xreq[_0x2c1a(0x8)];

    const _0xb = !(_0xm === _0x2c1a(0x9) || _0xm === _0x2c1a(0xa));

    let _0xopt = {
      method: _0xm,
      headers: _0xh,
      body: _0xb ? _0xreq[_0x2c1a(0xb)] : undefined,
      duplex: _0x2c1a(0xd),
      redirect: _0x2c1a(0xf)
    };

    return await fetch(_0xurl, _0xopt);

  }catch(_0xe){

    console[_0x2c1a(0x10)](_0x2c1a(0x11), _0xe);

    return new Response("Bad Gateway: Tunnel Failed", { status: 502 });
  }
}