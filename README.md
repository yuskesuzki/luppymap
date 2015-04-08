# 函館ラッピ地図について
========

函館のグルメ情報をマッピングした地図です。
現在、北海道を代表するご当地バーガー・ラッキーピエロとやきとり弁当で知られるハセガワストアの店舗位置をマッピングしています。

各店舗の座標に配置したアイコンをクリックすると、店舗の住所・電話番号・特徴等の情報をポップアップで表示します。
また地図上の任意の位置をクリックすると、その地点から最も近い店舗名と距離をポップアップで表示します。

ユーザの現在地を地図上に表示するボタンも用意しています。

## 利用しているライブラリ

本マップは以下のJavaScriptライブラリを利用して表示を行っています。

- Leaflet.js 0.7.3
- Leaflet-hash
- Leaflet-ajax
- Leaflet-locatecontrol
- Leaflet.Label
- jQuery 2.1.1

## 画像

本マップの画像は以下のサイトで提供されている素材を利用しています。

「かわいいフリー素材集いらすとや」

- http://www.irasutoya.com/2012/02/blog-post_9500.html
- http://www.irasutoya.com/2012/03/blog-post_1494.html

## 利用している地図について

本マップではOpen Street Mapが提供しているタイル情報を利用しています。

- http://www.openstreetmap.org

## データについて

地図で利用している店舗情報は以下のページから取得した各店舗の住所から、東京大学CSVアドレスマッチングサービスを用いて緯度経度情報を設定したデータを元に作成したGeoJsonファイルを利用しています。

- ラッキーピエロ：http://www.luckypierrot.jp/shop/index.html
- ハセガワストア：http://www.hasesuto.co.jp/shop-info.html
