/**
 * Created by slouie on 5/7/2016.
 */
function audioVolumeIn(q){
    if(q.volume){
        var InT = 0;
        var setVolume = 0.2; // До какого уровня поднимать
        var speed = 0.005; // Скорость увиличения
        q.volume = InT;
        var eAudio = setInterval(function(){
            InT += speed;
            q.volume = InT.toFixed(1);
            if(InT.toFixed(1) >= setVolume){
                clearInterval(eAudio);
                //alert('clearInterval eAudio'+ InT.toFixed(1));
            };
        },50);
    };
};

function audioVolumeOut(q){
    if(q.volume){
        var InT = 0.4;
        var setVolume = 0;  // Начальное значение звука
        var speed = 0.005;  // скорость затухания
        q.volume = InT;
        var fAudio = setInterval(function(){
            InT -= speed;
            q.volume = InT.toFixed(1);
            if(InT.toFixed(1) <= setVolume){
                clearInterval(fAudio);
                //alert('clearInterval fAudio'+ InT.toFixed(1));
            };
        },50);
    };
};
