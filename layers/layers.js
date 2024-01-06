var wms_layers = [];


        var lyr_WorldBaseMap_0 = new ol.layer.Tile({
            'title': 'World Base Map',
            'type': 'base',
            'opacity': 0.451000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SomaliaAllStatesBaseLayer_1 = new ol.format.GeoJSON();
var features_SomaliaAllStatesBaseLayer_1 = format_SomaliaAllStatesBaseLayer_1.readFeatures(json_SomaliaAllStatesBaseLayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomaliaAllStatesBaseLayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomaliaAllStatesBaseLayer_1.addFeatures(features_SomaliaAllStatesBaseLayer_1);
var lyr_SomaliaAllStatesBaseLayer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SomaliaAllStatesBaseLayer_1, 
                style: style_SomaliaAllStatesBaseLayer_1,
                interactive: true,
                title: '<img src="styles/legend/SomaliaAllStatesBaseLayer_1.png" /> Somalia - All States Base Layer'
            });
var format_SomaliaAllRegionsBaseLayer_2 = new ol.format.GeoJSON();
var features_SomaliaAllRegionsBaseLayer_2 = format_SomaliaAllRegionsBaseLayer_2.readFeatures(json_SomaliaAllRegionsBaseLayer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomaliaAllRegionsBaseLayer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomaliaAllRegionsBaseLayer_2.addFeatures(features_SomaliaAllRegionsBaseLayer_2);
var lyr_SomaliaAllRegionsBaseLayer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SomaliaAllRegionsBaseLayer_2, 
                style: style_SomaliaAllRegionsBaseLayer_2,
                interactive: true,
                title: '<img src="styles/legend/SomaliaAllRegionsBaseLayer_2.png" /> Somalia - All Regions Base Layer'
            });
var format_SomaliaAllDistrictsBaseLayer_3 = new ol.format.GeoJSON();
var features_SomaliaAllDistrictsBaseLayer_3 = format_SomaliaAllDistrictsBaseLayer_3.readFeatures(json_SomaliaAllDistrictsBaseLayer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomaliaAllDistrictsBaseLayer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomaliaAllDistrictsBaseLayer_3.addFeatures(features_SomaliaAllDistrictsBaseLayer_3);
var lyr_SomaliaAllDistrictsBaseLayer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SomaliaAllDistrictsBaseLayer_3, 
                style: style_SomaliaAllDistrictsBaseLayer_3,
                interactive: true,
                title: '<img src="styles/legend/SomaliaAllDistrictsBaseLayer_3.png" /> Somalia - All Districts Base Layer'
            });
var format_27FQKActedDistricts_4 = new ol.format.GeoJSON();
var features_27FQKActedDistricts_4 = format_27FQKActedDistricts_4.readFeatures(json_27FQKActedDistricts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27FQKActedDistricts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27FQKActedDistricts_4.addFeatures(features_27FQKActedDistricts_4);
var lyr_27FQKActedDistricts_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27FQKActedDistricts_4, 
                style: style_27FQKActedDistricts_4,
                interactive: true,
                title: '<img src="styles/legend/27FQKActedDistricts_4.png" /> 27 FQK - Acted Districts'
            });
var format_27FLUActedDistricts_5 = new ol.format.GeoJSON();
var features_27FLUActedDistricts_5 = format_27FLUActedDistricts_5.readFeatures(json_27FLUActedDistricts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27FLUActedDistricts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27FLUActedDistricts_5.addFeatures(features_27FLUActedDistricts_5);
var lyr_27FLUActedDistricts_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27FLUActedDistricts_5, 
                style: style_27FLUActedDistricts_5,
                interactive: true,
                title: '<img src="styles/legend/27FLUActedDistricts_5.png" /> 27 FLU - Acted Districts'
            });
var format_27ELNY3ActedDistricts_6 = new ol.format.GeoJSON();
var features_27ELNY3ActedDistricts_6 = format_27ELNY3ActedDistricts_6.readFeatures(json_27ELNY3ActedDistricts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27ELNY3ActedDistricts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27ELNY3ActedDistricts_6.addFeatures(features_27ELNY3ActedDistricts_6);
var lyr_27ELNY3ActedDistricts_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27ELNY3ActedDistricts_6, 
                style: style_27ELNY3ActedDistricts_6,
                interactive: true,
                title: '<img src="styles/legend/27ELNY3ActedDistricts_6.png" /> 27 ELN (Y3) - Acted Districts'
            });
var format_27FPWActedDistricts_7 = new ol.format.GeoJSON();
var features_27FPWActedDistricts_7 = format_27FPWActedDistricts_7.readFeatures(json_27FPWActedDistricts_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27FPWActedDistricts_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27FPWActedDistricts_7.addFeatures(features_27FPWActedDistricts_7);
var lyr_27FPWActedDistricts_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27FPWActedDistricts_7, 
                style: style_27FPWActedDistricts_7,
                interactive: true,
                title: '<img src="styles/legend/27FPWActedDistricts_7.png" /> 27 FPW - Acted Districts'
            });
var format_27FMMActedDistricts_8 = new ol.format.GeoJSON();
var features_27FMMActedDistricts_8 = format_27FMMActedDistricts_8.readFeatures(json_27FMMActedDistricts_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27FMMActedDistricts_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27FMMActedDistricts_8.addFeatures(features_27FMMActedDistricts_8);
var lyr_27FMMActedDistricts_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27FMMActedDistricts_8, 
                style: style_27FMMActedDistricts_8,
                interactive: true,
                title: '<img src="styles/legend/27FMMActedDistricts_8.png" /> 27 FMM - Acted Districts'
            });
var format_27FREActedDistricts_9 = new ol.format.GeoJSON();
var features_27FREActedDistricts_9 = format_27FREActedDistricts_9.readFeatures(json_27FREActedDistricts_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27FREActedDistricts_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27FREActedDistricts_9.addFeatures(features_27FREActedDistricts_9);
var lyr_27FREActedDistricts_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27FREActedDistricts_9, 
                style: style_27FREActedDistricts_9,
                interactive: true,
                title: '<img src="styles/legend/27FREActedDistricts_9.png" /> 27 FRE - Acted Districts'
            });
var format_27ETVActedDistricts_10 = new ol.format.GeoJSON();
var features_27ETVActedDistricts_10 = format_27ETVActedDistricts_10.readFeatures(json_27ETVActedDistricts_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27ETVActedDistricts_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27ETVActedDistricts_10.addFeatures(features_27ETVActedDistricts_10);
var lyr_27ETVActedDistricts_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27ETVActedDistricts_10, 
                style: style_27ETVActedDistricts_10,
                interactive: true,
                title: '<img src="styles/legend/27ETVActedDistricts_10.png" /> 27 ETV - Acted Districts'
            });
var format_27FKRActedDistricts_11 = new ol.format.GeoJSON();
var features_27FKRActedDistricts_11 = format_27FKRActedDistricts_11.readFeatures(json_27FKRActedDistricts_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27FKRActedDistricts_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27FKRActedDistricts_11.addFeatures(features_27FKRActedDistricts_11);
var lyr_27FKRActedDistricts_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27FKRActedDistricts_11, 
                style: style_27FKRActedDistricts_11,
                interactive: true,
                title: '<img src="styles/legend/27FKRActedDistricts_11.png" /> 27 FKR - Acted Districts'
            });
var format_27FNIActedDistricts_12 = new ol.format.GeoJSON();
var features_27FNIActedDistricts_12 = format_27FNIActedDistricts_12.readFeatures(json_27FNIActedDistricts_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27FNIActedDistricts_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27FNIActedDistricts_12.addFeatures(features_27FNIActedDistricts_12);
var lyr_27FNIActedDistricts_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27FNIActedDistricts_12, 
                style: style_27FNIActedDistricts_12,
                interactive: true,
                title: '<img src="styles/legend/27FNIActedDistricts_12.png" /> 27 FNI - Acted Districts'
            });
var format_27FITActedDistricts_13 = new ol.format.GeoJSON();
var features_27FITActedDistricts_13 = format_27FITActedDistricts_13.readFeatures(json_27FITActedDistricts_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27FITActedDistricts_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27FITActedDistricts_13.addFeatures(features_27FITActedDistricts_13);
var lyr_27FITActedDistricts_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27FITActedDistricts_13, 
                style: style_27FITActedDistricts_13,
                interactive: true,
                title: '<img src="styles/legend/27FITActedDistricts_13.png" /> 27 FIT - Acted Districts'
            });
var format_BHA2024ActedDistrictsProposed_14 = new ol.format.GeoJSON();
var features_BHA2024ActedDistrictsProposed_14 = format_BHA2024ActedDistrictsProposed_14.readFeatures(json_BHA2024ActedDistrictsProposed_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BHA2024ActedDistrictsProposed_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BHA2024ActedDistrictsProposed_14.addFeatures(features_BHA2024ActedDistrictsProposed_14);
var lyr_BHA2024ActedDistrictsProposed_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BHA2024ActedDistrictsProposed_14, 
                style: style_BHA2024ActedDistrictsProposed_14,
                interactive: true,
                title: '<img src="styles/legend/BHA2024ActedDistrictsProposed_14.png" /> BHA 2024 - Acted Districts (Proposed)'
            });
var format_ECHO2024ActedDistrictsProposed_15 = new ol.format.GeoJSON();
var features_ECHO2024ActedDistrictsProposed_15 = format_ECHO2024ActedDistrictsProposed_15.readFeatures(json_ECHO2024ActedDistrictsProposed_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECHO2024ActedDistrictsProposed_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECHO2024ActedDistrictsProposed_15.addFeatures(features_ECHO2024ActedDistrictsProposed_15);
var lyr_ECHO2024ActedDistrictsProposed_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ECHO2024ActedDistrictsProposed_15, 
                style: style_ECHO2024ActedDistrictsProposed_15,
                interactive: true,
                title: '<img src="styles/legend/ECHO2024ActedDistrictsProposed_15.png" /> ECHO 2024 - Acted Districts (Proposed)'
            });
var format_SomaliaAllStatesNames_16 = new ol.format.GeoJSON();
var features_SomaliaAllStatesNames_16 = format_SomaliaAllStatesNames_16.readFeatures(json_SomaliaAllStatesNames_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomaliaAllStatesNames_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomaliaAllStatesNames_16.addFeatures(features_SomaliaAllStatesNames_16);
var lyr_SomaliaAllStatesNames_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SomaliaAllStatesNames_16, 
                style: style_SomaliaAllStatesNames_16,
                interactive: true,
                title: '<img src="styles/legend/SomaliaAllStatesNames_16.png" /> Somalia - All States Names'
            });
var format_SomaliaAllRegionsNames_17 = new ol.format.GeoJSON();
var features_SomaliaAllRegionsNames_17 = format_SomaliaAllRegionsNames_17.readFeatures(json_SomaliaAllRegionsNames_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomaliaAllRegionsNames_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomaliaAllRegionsNames_17.addFeatures(features_SomaliaAllRegionsNames_17);
var lyr_SomaliaAllRegionsNames_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SomaliaAllRegionsNames_17, 
                style: style_SomaliaAllRegionsNames_17,
                interactive: true,
                title: '<img src="styles/legend/SomaliaAllRegionsNames_17.png" /> Somalia - All Regions Names'
            });
var format_SomaliaAllDistrictNames_18 = new ol.format.GeoJSON();
var features_SomaliaAllDistrictNames_18 = format_SomaliaAllDistrictNames_18.readFeatures(json_SomaliaAllDistrictNames_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomaliaAllDistrictNames_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomaliaAllDistrictNames_18.addFeatures(features_SomaliaAllDistrictNames_18);
var lyr_SomaliaAllDistrictNames_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SomaliaAllDistrictNames_18, 
                style: style_SomaliaAllDistrictNames_18,
                interactive: true,
                title: '<img src="styles/legend/SomaliaAllDistrictNames_18.png" /> Somalia - All District Names'
            });

lyr_WorldBaseMap_0.setVisible(true);lyr_SomaliaAllStatesBaseLayer_1.setVisible(true);lyr_SomaliaAllRegionsBaseLayer_2.setVisible(true);lyr_SomaliaAllDistrictsBaseLayer_3.setVisible(true);lyr_27FQKActedDistricts_4.setVisible(true);lyr_27FLUActedDistricts_5.setVisible(true);lyr_27ELNY3ActedDistricts_6.setVisible(true);lyr_27FPWActedDistricts_7.setVisible(true);lyr_27FMMActedDistricts_8.setVisible(true);lyr_27FREActedDistricts_9.setVisible(true);lyr_27ETVActedDistricts_10.setVisible(true);lyr_27FKRActedDistricts_11.setVisible(true);lyr_27FNIActedDistricts_12.setVisible(true);lyr_27FITActedDistricts_13.setVisible(true);lyr_BHA2024ActedDistrictsProposed_14.setVisible(true);lyr_ECHO2024ActedDistrictsProposed_15.setVisible(true);lyr_SomaliaAllStatesNames_16.setVisible(true);lyr_SomaliaAllRegionsNames_17.setVisible(true);lyr_SomaliaAllDistrictNames_18.setVisible(true);
var layersList = [lyr_WorldBaseMap_0,lyr_SomaliaAllStatesBaseLayer_1,lyr_SomaliaAllRegionsBaseLayer_2,lyr_SomaliaAllDistrictsBaseLayer_3,lyr_27FQKActedDistricts_4,lyr_27FLUActedDistricts_5,lyr_27ELNY3ActedDistricts_6,lyr_27FPWActedDistricts_7,lyr_27FMMActedDistricts_8,lyr_27FREActedDistricts_9,lyr_27ETVActedDistricts_10,lyr_27FKRActedDistricts_11,lyr_27FNIActedDistricts_12,lyr_27FITActedDistricts_13,lyr_BHA2024ActedDistrictsProposed_14,lyr_ECHO2024ActedDistrictsProposed_15,lyr_SomaliaAllStatesNames_16,lyr_SomaliaAllRegionsNames_17,lyr_SomaliaAllDistrictNames_18];
lyr_SomaliaAllStatesBaseLayer_1.set('fieldAliases', {'STATE_EN': 'STATE_EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SomaliaAllRegionsBaseLayer_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_SomaliaAllDistrictsBaseLayer_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27FQKActedDistricts_4.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27FLUActedDistricts_5.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27ELNY3ActedDistricts_6.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27FPWActedDistricts_7.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27FMMActedDistricts_8.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27FREActedDistricts_9.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27ETVActedDistricts_10.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27FKRActedDistricts_11.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27FNIActedDistricts_12.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_27FITActedDistricts_13.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_BHA2024ActedDistrictsProposed_14.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_ECHO2024ActedDistrictsProposed_15.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_SomaliaAllStatesNames_16.set('fieldAliases', {'STATE_EN': 'STATE_EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SomaliaAllRegionsNames_17.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_SomaliaAllDistrictNames_18.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_SomaliaAllStatesBaseLayer_1.set('fieldImages', {'STATE_EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SomaliaAllRegionsBaseLayer_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_SomaliaAllDistrictsBaseLayer_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27FQKActedDistricts_4.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27FLUActedDistricts_5.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27ELNY3ActedDistricts_6.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27FPWActedDistricts_7.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27FMMActedDistricts_8.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27FREActedDistricts_9.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27ETVActedDistricts_10.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27FKRActedDistricts_11.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27FNIActedDistricts_12.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_27FITActedDistricts_13.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_BHA2024ActedDistrictsProposed_14.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_ECHO2024ActedDistrictsProposed_15.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_SomaliaAllStatesNames_16.set('fieldImages', {'STATE_EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SomaliaAllRegionsNames_17.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_SomaliaAllDistrictNames_18.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_SomaliaAllStatesBaseLayer_1.set('fieldLabels', {'STATE_EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SomaliaAllRegionsBaseLayer_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_SomaliaAllDistrictsBaseLayer_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27FQKActedDistricts_4.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27FLUActedDistricts_5.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27ELNY3ActedDistricts_6.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27FPWActedDistricts_7.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27FMMActedDistricts_8.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27FREActedDistricts_9.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27ETVActedDistricts_10.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27FKRActedDistricts_11.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27FNIActedDistricts_12.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_27FITActedDistricts_13.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_BHA2024ActedDistrictsProposed_14.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_ECHO2024ActedDistrictsProposed_15.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'inline label', 'validTo': 'header label', });
lyr_SomaliaAllStatesNames_16.set('fieldLabels', {'STATE_EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SomaliaAllRegionsNames_17.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_SomaliaAllDistrictNames_18.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_SomaliaAllDistrictNames_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});