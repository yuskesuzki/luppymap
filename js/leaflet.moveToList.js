/**
 * leaflet.moveToList
 * 店舗移動用セレクトボックスを地図上に表示する leaflet.js 用カスタムコントロール
 *
 * (c) 2015 Yusuke Suzuki.
 */
// 店舗移動セレクトボックス選択時の挙動を定義
function moveToFunc() {
    selected = $('#moveTo').val();
    moveToStore(selected);
}

// 移動先セレクトボックスに要素を追加する
function addMoveToList(storeJson) {
    for(i in storeJson.features) {
        feature = storeJson.features[i];
        storeName = feature.properties['店舗名'] + ' ' + feature.properties['支店名'];
        $('#moveTo').append(
            $('<option>').html(storeName).val(storeName)
            );
    }
}

L.Control.MoveToList = L.Control.extend({
    options: {
        // topright, topleft, bottomleft, bottomright
        position: 'topright',
        placeholder: 'move to...',
    },
    initialize: function (options) {
        // constructor
    },
    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control moveTo-container');

        // コントロールクリック時、地図クリックイベント発生を防ぐ
		L.DomEvent.disableClickPropagation(container);

        contents  = '';
        contents += '<select id="moveTo" onChange="moveToFunc()"><option value=""></option></select>';
        container.innerHTML = contents;

        return container;
    },
    onRemove: function (map) {
        // when removed
    }
});

L.control.moveToList = function(options) {
    return new L.Control.MoveToList(options);
}
