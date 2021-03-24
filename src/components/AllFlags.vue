<template>
  <div
    :style="{
      backgroundImage:
        'url(\'' + require('@/assets/images/flags-sprite.png') + '\')',
    }"
    class="fflag ff-md"
    :class="country"
  ></div>
</template>

<script>
export default {
  props: ['country'],
}
</script>


<style scoped>
.fflag {
  /* background-image:url('./assets/images/flags-sprite.png'); */
  background-repeat: no-repeat;
  background-size: 100% 49494%;
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  box-sizing: content-box;
}
.ch,
.np {
  box-shadow: none !important;
}
.dz {
  background-position: center 0.2287%;
}
.ao {
  background-position: center 0.4524%;
}
.bj {
  background-position: center 0.6721%;
}
.bw {
  background-position: center 0.8958%;
}
.bf {
  background-position: center 1.1162%;
}
.bi {
  background-position: center 1.3379%;
}
.cm {
  background-position: center 1.5589%;
}
.cv {
  background-position: center 1.7836%;
}
.cf {
  background-position: center 2.0047%;
}
.td {
  background-position: center 2.2247%;
}
.cd {
  background-position: left 2.4467%;
}
.dj {
  background-position: left 2.6674%;
}
.eg {
  background-position: center 2.8931%;
}
.gq {
  background-position: center 3.1125%;
}
.er {
  background-position: left 3.3325%;
}
.et {
  background-position: center 3.5542%;
}
.ga {
  background-position: center 3.7759%;
}
.gm {
  background-position: center 4.0015%;
}
.gh {
  background-position: center 4.2229%;
}
.gn {
  background-position: center 4.441%;
}
.gw {
  background-position: left 4.66663%;
}
.ci {
  background-position: center 4.8844%;
}
.ke {
  background-position: center 5.1061%;
}
.ls {
  background-position: center 5.3278%;
}
.lr {
  background-position: left 5.5495%;
}
.ly {
  background-position: center 5.7712%;
}
.mg {
  background-position: center 5.994%;
}
.mw {
  background-position: center 6.2156%;
}
.ml {
  background-position: center 6.4363%;
}
.mr {
  background-position: center 6.658%;
}
.mu {
  background-position: center 6.8805%;
}
.yt {
  background-position: center 7.1038%;
}
.ma {
  background-position: center 7.3231%;
}
.mz {
  background-position: left 7.5448%;
}
.na {
  background-position: left 7.7661%;
}
.ne {
  background-position: center 7.98937%;
}
.ng {
  background-position: center 8.2099%;
}
.cg {
  background-position: center 8.4316%;
}
.re {
  background-position: center 8.6533%;
}
.rw {
  background-position: right 8.875%;
}
.sh {
  background-position: center 9.0967%;
}
.st {
  background-position: center 9.32237%;
}
.sn {
  background-position: center 9.5426%;
}
.sc {
  background-position: left 9.7628%;
}
.sl {
  background-position: center 9.9845%;
}
.so {
  background-position: center 10.2052%;
}
.za {
  background-position: left 10.4269%;
}
.ss {
  background-position: left 10.6486%;
}
.sd {
  background-position: center 10.8703%;
}
.sr {
  background-position: center 11.0945%;
}
.sz {
  background-position: center 11.3135%;
}
.tg {
  background-position: left 11.5354%;
}
.tn {
  background-position: center 11.7593%;
}
.ug {
  background-position: center 11.9799%;
}
.tz {
  background-position: center 12.2005%;
}
.eh {
  background-position: center 12.4222%;
}
.ye {
  background-position: center 12.644%;
}
.zm {
  background-position: center 12.8664%;
}
.zw {
  background-position: left 13.0873%;
}
.ai {
  background-position: center 13.309%;
}
.ag {
  background-position: center 13.5307%;
}
.ar {
  background-position: center 13.7524%;
}
.aw {
  background-position: left 13.9741%;
}
.bs {
  background-position: left 14.1958%;
}
.bb {
  background-position: center 14.4175%;
}
.bq {
  background-position: center 14.6415%;
}
.bz {
  background-position: center 14.8609%;
}
.bm {
  background-position: center 15.0826%;
}
.bo {
  background-position: center 15.306%;
}
.vg {
  background-position: center 15.528%;
}
.br {
  background-position: center 15.7496%;
}
.ca {
  background-position: center 15.9694%;
}
.ky {
  background-position: center 16.1911%;
}
.cl {
  background-position: left 16.4128%;
}
.co {
  background-position: left 16.6345%;
}
.km {
  background-position: center 16.8562%;
}
.cr {
  background-position: center 17.0779%;
}
.cu {
  background-position: left 17.2996%;
}
.cw {
  background-position: center 17.5213%;
}
.dm {
  background-position: center 17.743%;
}
.do {
  background-position: center 17.968%;
}
.ec {
  background-position: center 18.1864%;
}
.sv {
  background-position: center 18.4081%;
}
.fk {
  background-position: center 18.6298%;
}
.gf {
  background-position: center 18.8515%;
}
.gl {
  background-position: left 19.0732%;
}
.gd {
  background-position: center 19.2987%;
}
.gp {
  background-position: center 19.518%;
}
.gt {
  background-position: center 19.7383%;
}
.gy {
  background-position: center 19.96%;
}
.ht {
  background-position: center 20.1817%;
}
.hn {
  background-position: center 20.4034%;
}
.jm {
  background-position: center 20.6241%;
}
.mq {
  background-position: center 20.8468%;
}
.mx {
  background-position: center 21.0685%;
}
.ms {
  background-position: center 21.2902%;
}
.ni {
  background-position: center 21.5119%;
}
.pa {
  background-position: center 21.7336%;
}
.py {
  background-position: center 21.9553%;
}
.pe {
  background-position: center 22.177%;
}
.pr {
  background-position: left 22.4002%;
}
.bl {
  background-position: center 22.6204%;
}
.kn {
  background-position: center 22.8421%;
}
.lc {
  background-position: center 23.0638%;
}
.pm {
  background-position: center 23.2855%;
}
.vc {
  background-position: center 23.5072%;
}
.sx {
  background-position: left 23.732%;
}
.tt {
  background-position: center 23.9506%;
}
.tc {
  background-position: center 24.1723%;
}
.us {
  background-position: center 24.394%;
}
.vi {
  background-position: center 24.6157%;
}
.uy {
  background-position: left 24.8374%;
}
.ve {
  background-position: center 25.0591%;
}
.af {
  background-position: center 25.2808%;
}
.az {
  background-position: center 25.5025%;
}
.bd {
  background-position: center 25.7242%;
}
.bt {
  background-position: center 25.9459%;
}
.bn {
  background-position: center 26.1676%;
}
.kh {
  background-position: center 26.3885%;
}
.cn {
  background-position: left 26.611%;
}
.ge {
  background-position: center 26.8327%;
}
.hk {
  background-position: center 27.0544%;
}
.in {
  background-position: center 27.2761%;
}
.id {
  background-position: center 27.4978%;
}
.jp {
  background-position: center 27.7195%;
}
.kz {
  background-position: center 27.9412%;
}
.la {
  background-position: center 28.1615%;
}
.mo {
  background-position: center 28.3846%;
}
.my {
  background-position: center 28.6063%;
}
.mv {
  background-position: center 28.829%;
}
.mn {
  background-position: left 29.0497%;
}
.mm {
  background-position: center 29.2714%;
}
.np {
  background-position: left 29.4931%;
}
.kp {
  background-position: left 29.7148%;
}
.mp {
  background-position: center 29.9365%;
}
.pw {
  background-position: center 30.1582%;
}
.pg {
  background-position: center 30.3799%;
}
.ph {
  background-position: left 30.6016%;
}
.sg {
  background-position: left 30.8233%;
}
.kr {
  background-position: center 31.045%;
}
.lk {
  background-position: right 31.2667%;
}
.tw {
  background-position: left 31.4884%;
}
.tj {
  background-position: center 31.7101%;
}
.th {
  background-position: center 31.9318%;
}
.tl {
  background-position: left 32.1535%;
}
.tm {
  background-position: center 32.3752%;
}
.vn {
  background-position: center 32.5969%;
}
.al {
  background-position: center 32.8186%;
}
.ad {
  background-position: center 33.0403%;
}
.am {
  background-position: center 33.258%;
}
.at {
  background-position: center 33.4837%;
}
.by {
  background-position: left 33.7054%;
}
.be {
  background-position: center 33.9271%;
}
.ba {
  background-position: center 34.1488%;
}
.bg {
  background-position: center 34.3705%;
}
.hr {
  background-position: center 34.5922%;
}
.cy {
  background-position: center 34.8139%;
}
.cz {
  background-position: left 35.0356%;
}
.dk {
  background-position: center 35.2555%;
}
.ee {
  background-position: center 35.479%;
}
.fo {
  background-position: center 35.7007%;
}
.fi {
  background-position: center 35.9224%;
}
.fr {
  background-position: center 36.1441%;
}
.de {
  background-position: center 36.3658%;
}
.gi {
  background-position: center 36.5875%;
}
.gr {
  background-position: left 36.8092%;
}
.hu {
  background-position: center 37.0309%;
}
.is {
  background-position: center 37.2526%;
}
.ie {
  background-position: center 37.4743%;
}
.im {
  background-position: center 37.696%;
}
.it {
  background-position: center 37.9177%;
}
.je {
  background-position: center 38.1394%;
}
.xk {
  background-position: center 38.3611%;
}
.lv {
  background-position: center 38.5828%;
}
.li {
  background-position: left 38.8045%;
}
.lt {
  background-position: center 39.0262%;
}
.lu {
  background-position: center 39.2479%;
}
.mt {
  background-position: left 39.4696%;
}
.md {
  background-position: center 39.6913%;
}
.mc {
  background-position: center 39.913%;
}
.me {
  background-position: center 40.1347%;
}
.nl {
  background-position: center 40.3564%;
}
.mk {
  background-position: center 40.5781%;
}
.no {
  background-position: center 40.7998%;
}
.pl {
  background-position: center 41.0215%;
}
.pt {
  background-position: center 41.2432%;
}
.ro {
  background-position: center 41.4649%;
}
.ru {
  background-position: center 41.6866%;
}
.sm {
  background-position: center 41.9083%;
}
.rs {
  background-position: center 42.13%;
}
.sk {
  background-position: center 42.3517%;
}
.si {
  background-position: center 42.5734%;
}
.es {
  background-position: left 42.7951%;
}
.se {
  background-position: center 43.0168%;
}
.ch {
  background-position: center 43.2385%;
}
.tr {
  background-position: center 43.4602%;
}
.ua {
  background-position: center 43.6819%;
}
.gb {
  background-position: center 43.9036%;
}
.va {
  background-position: right 44.1253%;
}
.bh {
  background-position: center 44.347%;
}
.ir {
  background-position: center 44.5687%;
}
.iq {
  background-position: center 44.7904%;
}
.il {
  background-position: center 45.0121%;
}
.kw {
  background-position: left 45.2338%;
}
.jo {
  background-position: left 45.4555%;
}
.kg {
  background-position: center 45.6772%;
}
.lb {
  background-position: center 45.897%;
}
.om {
  background-position: left 46.1206%;
}
.pk {
  background-position: center 46.3423%;
}
.ps {
  background-position: center 46.561%;
}
.qa {
  background-position: center 46.7857%;
}
.sa {
  background-position: center 47.0074%;
}
.sy {
  background-position: center 47.2291%;
}
.ae {
  background-position: center 47.4508%;
}
.uz {
  background-position: left 47.6725%;
}
.as {
  background-position: right 47.8942%;
}
.au {
  background-position: center 48.1159%;
}
.cx {
  background-position: center 48.3376%;
}
.cc {
  background-position: center 48.5593%;
}
.ck {
  background-position: center 48.781%;
}
.fj {
  background-position: center 49.0027%;
}
.pf {
  background-position: center 49.2244%;
}
.gu {
  background-position: center 49.4445%;
}
.ki {
  background-position: center 49.6678%;
}
.mh {
  background-position: left 49.8895%;
}
.fm {
  background-position: center 50.1112%;
}
.nc {
  background-position: center 50.3329%;
}
.nz {
  background-position: center 50.5546%;
}
.nr {
  background-position: left 50.7763%;
}
.nu {
  background-position: center 50.998%;
}
.nf {
  background-position: center 51.2197%;
}
.ws {
  background-position: left 51.4414%;
}
.sb {
  background-position: left 51.6631%;
}
.tk {
  background-position: center 51.8848%;
}
.to {
  background-position: left 52.1065%;
}
.tv {
  background-position: center 52.3282%;
}
.vu {
  background-position: left 52.5499%;
}
.wf {
  background-position: center 52.7716%;
}

/* .fflag.ff-sm {width: 18px;height: 11px} */
.fflag.ff-md {
  width: 34px;
  height: 22px;
}
/* .fflag.ff-lg {width: 42px;height: 27px}
.fflag.ff-xl {width: 60px;height: 37px} */
</style>