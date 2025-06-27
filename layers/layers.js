var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Virtual_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Virtual<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Virtual_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10902249.028650, 3484532.317729, -10897797.405847, 3487388.748793]
        })
    });
var lyr_SAVI_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SAVI<br />\
    <img src="styles/legend/SAVI_2_0.png" /> 0.0000<br />\
    <img src="styles/legend/SAVI_2_1.png" /> 0.1250<br />\
    <img src="styles/legend/SAVI_2_2.png" /> 0.2500<br />\
    <img src="styles/legend/SAVI_2_3.png" /> 0.3750<br />\
    <img src="styles/legend/SAVI_2_4.png" /> 0.5000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SAVI_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10902249.028650, 3484532.317729, -10897797.405847, 3487388.748793]
        })
    });
var lyr_NDVI_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_3_0.png" /> -0.2078<br />\
    <img src="styles/legend/NDVI_3_1.png" /> -0.0065<br />\
    <img src="styles/legend/NDVI_3_2.png" /> 0.0461<br />\
    <img src="styles/legend/NDVI_3_3.png" /> 0.0834<br />\
    <img src="styles/legend/NDVI_3_4.png" /> 0.1213<br />\
    <img src="styles/legend/NDVI_3_5.png" /> 0.1655<br />\
    <img src="styles/legend/NDVI_3_6.png" /> 0.1941<br />\
    <img src="styles/legend/NDVI_3_7.png" /> 0.2126<br />\
    <img src="styles/legend/NDVI_3_8.png" /> 0.2273<br />\
    <img src="styles/legend/NDVI_3_9.png" /> 0.2408<br />\
    <img src="styles/legend/NDVI_3_10.png" /> 0.2538<br />\
    <img src="styles/legend/NDVI_3_11.png" /> 0.2685<br />\
    <img src="styles/legend/NDVI_3_12.png" /> 0.2839<br />\
    <img src="styles/legend/NDVI_3_13.png" /> 0.2981<br />\
    <img src="styles/legend/NDVI_3_14.png" /> 0.3114<br />\
    <img src="styles/legend/NDVI_3_15.png" /> 0.3238<br />\
    <img src="styles/legend/NDVI_3_16.png" /> 0.3346<br />\
    <img src="styles/legend/NDVI_3_17.png" /> 0.3440<br />\
    <img src="styles/legend/NDVI_3_18.png" /> 0.3523<br />\
    <img src="styles/legend/NDVI_3_19.png" /> 0.3595<br />\
    <img src="styles/legend/NDVI_3_20.png" /> 0.3663<br />\
    <img src="styles/legend/NDVI_3_21.png" /> 0.3726<br />\
    <img src="styles/legend/NDVI_3_22.png" /> 0.3788<br />\
    <img src="styles/legend/NDVI_3_23.png" /> 0.3848<br />\
    <img src="styles/legend/NDVI_3_24.png" /> 0.3912<br />\
    <img src="styles/legend/NDVI_3_25.png" /> 0.3970<br />\
    <img src="styles/legend/NDVI_3_26.png" /> 0.4027<br />\
    <img src="styles/legend/NDVI_3_27.png" /> 0.4084<br />\
    <img src="styles/legend/NDVI_3_28.png" /> 0.4141<br />\
    <img src="styles/legend/NDVI_3_29.png" /> 0.4196<br />\
    <img src="styles/legend/NDVI_3_30.png" /> 0.4252<br />\
    <img src="styles/legend/NDVI_3_31.png" /> 0.4306<br />\
    <img src="styles/legend/NDVI_3_32.png" /> 0.4359<br />\
    <img src="styles/legend/NDVI_3_33.png" /> 0.4409<br />\
    <img src="styles/legend/NDVI_3_34.png" /> 0.4460<br />\
    <img src="styles/legend/NDVI_3_35.png" /> 0.4509<br />\
    <img src="styles/legend/NDVI_3_36.png" /> 0.4557<br />\
    <img src="styles/legend/NDVI_3_37.png" /> 0.4606<br />\
    <img src="styles/legend/NDVI_3_38.png" /> 0.4658<br />\
    <img src="styles/legend/NDVI_3_39.png" /> 0.4714<br />\
    <img src="styles/legend/NDVI_3_40.png" /> 0.4778<br />\
    <img src="styles/legend/NDVI_3_41.png" /> 0.4844<br />\
    <img src="styles/legend/NDVI_3_42.png" /> 0.4915<br />\
    <img src="styles/legend/NDVI_3_43.png" /> 0.4988<br />\
    <img src="styles/legend/NDVI_3_44.png" /> 0.5060<br />\
    <img src="styles/legend/NDVI_3_45.png" /> 0.5133<br />\
    <img src="styles/legend/NDVI_3_46.png" /> 0.5209<br />\
    <img src="styles/legend/NDVI_3_47.png" /> 0.5292<br />\
    <img src="styles/legend/NDVI_3_48.png" /> 0.5426<br />\
    <img src="styles/legend/NDVI_3_49.png" /> 0.6104<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10902249.028650, 3484532.317729, -10897797.405847, 3487388.748793]
        })
    });
var lyr_DEM_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_4_0.png" /> 531.496<br />\
    <img src="styles/legend/DEM_4_1.png" /> 708.661<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10903759.584254, 3483695.033062, -10896183.674414, 3488865.375632]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_Virtual_1.setVisible(true);lyr_SAVI_2.setVisible(true);lyr_NDVI_3.setVisible(true);lyr_DEM_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Virtual_1,lyr_SAVI_2,lyr_NDVI_3,lyr_DEM_4];
