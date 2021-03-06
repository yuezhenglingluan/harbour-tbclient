.pragma library

var PHOTO_THUMBNAIL = Qt.resolvedUrl("../tbclient/gfx/photo.png");

function getThumbnail(bigPic){
    if (bigPic.indexOf(".hiphotos.baidu.com") > 0){
        return "https://imgsrc.baidu.com/forum/abpic/item/"+bigPic.split("/").pop();
    } else if (bigPic.indexOf("https://imgsrc.baidu.com/forum/pic/item/") === 0){
        return "https://imgsrc.baidu.com/forum/abpic/item/"+bigPic.substring(39);
    } else {
        return utility.percentDecode(bigPic);
    }
}

function getBigImage(cdnpic){
    if (cdnpic.indexOf(".hiphotos.baidu.com") > 0){
        return "https://imgsrc.baidu.com/forum/pic/item/"+cdnpic.split("/").pop();
    } else {
        return utility.percentDecode(cdnpic);
    }
}

function getPortrait(portrait){
    if (portrait){
        return "https://himg.baidu.com/sys/portraitn/item/"+portrait;
    } else {
        return PHOTO_THUMBNAIL;
    }
}

function getAudioUrl(md5){//amr
    return "https://c.tieba.baidu.com/c/p/voice?voice_md5="+md5;
}
function getMp3AudioUrl(tid,pid){//mp3
    return "https://tieba.baidu.com/voice/index?tid="+tid+"&pid="+pid;
}

function milliSecondsToString(milliseconds) {
    milliseconds = milliseconds > 0 ? milliseconds : 0;
    var timeInSeconds = Math.floor(milliseconds / 1000);
    var minutes = Math.floor(timeInSeconds / 60);
    var minutesString = minutes < 10 ? "0" + minutes : minutes;
    var seconds = Math.floor(timeInSeconds % 60);
    var secondsString = seconds < 10 ? "0" + seconds : seconds;
    return minutesString + ":" + secondsString;
}

function getEmoticon(text, c){
    var url = utility.emoticonUrl(text);
    return url ? "<img src=\""+url+"\"/>" : "["+(c||text)+"]";
}

var TextSlicer = {
    textLength: function(text){
                    var result = 0;
                    for (var i=0; i<text.length; i++){
                        if (text.charCodeAt(i) > 255) result += 2;
                        else result ++;
                    }
                    return result;
                },
    slice: function(text, maxLength){
               var result = "";
               for (var i=0; this.textLength(result)<=maxLength && i<text.length; i++){
                   result += text.charAt(i);
               }
               return result;
           }
}
