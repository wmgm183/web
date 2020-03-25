// ==UserScript==
// @name         鼠标点击冒泡
// @namespace    https://www.zfsf520.cn
// @version      0.1
// @description  一个用JS写的鼠标左击特效
// @description  一些Emoji 😀😃😄😁😆😅😂🤣☺😊😚😙😗😘😍😌😉🙃🙂😇😋😜😝😛🤑🤗🤓😎🤡🤠😖😣☹🙁😕😟😔😞😒😏😫😩😤😠😡😶😐😑😯😦😥😢😨😱😳😵😲😮😧🤤😭😪😴🙄🤔😬🤥🤐💩👺👹👿😈🤕🤒😷🤧🤢👻💀☠👽👾🤖🎃😺😸😹🙏👏🙌👐😾😿🙀😽😼😻
// @author       一碗单炒饭
// @include      /[a-zA-z]+://[^\s]*/
// @run-at       document_start
// ==/UserScript==
onload = function() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.userSelect = "none"; //禁止选中
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = x + "px";  //x初始x定位
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 10:
                $elem.innerText = "OωO";
                break;
            case 20:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
                break;
            case 30:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
                break;
            case 40:
                $elem.innerText = "(๑•̀_•́๑)";
                break;
            case 50:
                $elem.innerText = "（￣へ￣）";
                break;
            case 60:
                $elem.innerText = "(╯°口°)╯(┴—┴";
                break;
            case 70:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 80:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 90:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 100: // ↓
                $elem.innerText = "CSURヘ(￣ω￣ヘ)Yes!";
                break;
            case 110: // 101
                $elem.innerText = "｡◕‿◕｡";
                break;
            case 120: //102
                $elem.innerText = "(´?ω?`)";
                break;
            case 130:  //103
                $elem.innerText = "๑乛◡乛๑";
                break;
            case 131:  //
                $elem.innerText = "≖‿≖✧";
                break;
            case 133:  //
                $elem.innerText = "( ｡ớ ₃ờ)ھ";
                break;
            case 134:  //
                $elem.innerText = "(๑•̀ㅂ•́)و✧";
                break;
            case 136:  //
                $elem.innerText = "♪(＾∀＾●爱我嘛";
                break;
            case 140: // 104
                $elem.innerText = "((٩(//̀Д/́/)۶))";
                click_cnt = 0; // 循环
                break; // ↑
            case 105:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
                // 手动更换下面这行双引号里面的内容 如"😀"
                $elem.innerText = "❤";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
            anim = setInterval(function() {
                if (++increase == 250) { // 150
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (250 - increase) / 120;
            }, 8);                    // 150
        }, 70);
        $body.appendChild($elem);
    };
};