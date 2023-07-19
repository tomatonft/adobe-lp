'use strict';

{
  // ----------------
  // スマホでの100vhの見え方の違いを調節（hero) 
  // ----------------

  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;//ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
    document.documentElement.style.setProperty('--vh',`${vh}px`);//カスタム変数--vhの値をドキュメントのルートに設定
}

window.addEventListener('resize', setFillHeight);//画面のサイズ変動があった時に高さを再計算

setFillHeight();//初期化

// ----------------
  // スムーススクロール
  // ----------------
  const anchors = document.querySelectorAll('a[href^="#"]'); 
  const header = document.querySelector('header').offsetHeight; //header高さ
  const urlHash = location.hash; // URLのアンカー（#以降の部分）を取得

    // 各 anchor にクリックイベント
    for ( let i = 0; i < anchors.length; i++ ) {
      anchors[i].addEventListener('click', (e) => {
        e.preventDefault();  //デフォルトのクリックイベント無効化

      // 各 anchor の href属性取得
      const href= anchors[i].getAttribute("href");

      // topに戻る以外のアンカー
      if (href !== '#') {

        // スクロール先の要素を取得 （アンカーの リンク先 #.. の # を取り除いた名前と一致する id名の要素）
        const target = document.getElementById(href.replace('#', ''));

        // スクロール先の要素の位置を取得
        const position = window.pageYOffset + target.getBoundingClientRect().top;
        

        // スクロールアニメーション
        window.scroll({
          top: position,      // スクロール先要素の左上までスクロール
          behavior: 'smooth'  // スクロールアニメーション
        });

      // topに戻る
      } else {
        // スクロールアニメーション
        window.scroll({
          top: 0,  // スクロール先
          behavior: 'smooth'    // スクロールアニメーション
        });
      }
    });
  }

// -----------
//  アコーディオン
// -----------
const dts = document.querySelectorAll('dt');

dts.forEach(dt => {
  dt.addEventListener('click', () => {
    dt.parentNode.classList.toggle('appear');
      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
  });
});
}