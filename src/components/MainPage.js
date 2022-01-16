import React from "react";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="main-body">
      <div className="main-container">
        <div className="pazarama">
          <img className="pazarama-logo" src="/pazarama_logo.svg" alt="" />

          <h1 className="main-title">
            Pazarama ile güvenli ve kolay <br />{" "}
            <span>alışverişe hoş geldiniz!</span>
          </h1>

          <p>
            Pazarama’da dilediğiniz kategorideki yüzlerce markanın ürününe
            kolayca ulaşabilir, cazip kampanyalardan yararlanarak alışverişin
            tadını çıkarmaya devam edebilirsiniz.
            <br />
            <br />
            <b>
              Web sitemizi en kısa sürede sizle buluşturabilmek için
              çalışmalarımız devam ediyor.
            </b>
            <br />
            <br />
            Pazarama’nın avantajlı dünyasından yararlanmak için hemen Maximum
            Mobil’i indirin!
          </p>

          <span className="download-app">
            <a href="https://play.google.com/store/apps/details?id=com.softtech.parakod&hl=tr">
              <img src="/google-play.svg" alt="google play" />
            </a>
            <a href="https://apps.apple.com/tr/app/parakod/id957789062?l=tr">
              <img src="/app-store.svg" alt="app store" />
            </a>
            <a href="https://appgallery.huawei.com/app/C102714327">
              <img src="/app-gallery.svg" alt="app gallery" />
            </a>
          </span>

        </div>
        <img className="pazarama-image" src="/top-image.png" alt="" />

      </div>
    </div>
  );
}
