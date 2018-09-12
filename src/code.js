const codes = `
/* 
 * 大家好 
 *
 * 我们是云平台前端团队
 *   
 * 这里向大家介绍我们的团队
 * 
 * 也希望能让大家感受到一丝前端的魅力
 * 
 */

* {
    -webkit-transition: all 1s;
}
                   
 /* 接下来，我们要表演了 */
 
body {
    background-color: #3D5F8F;
    color: #B6E7DC;
    font-size: 14px; line-height: 1.4;
    margin: 0;
    -webkit-font-smoothing: subpixel-antialiased;
}

/* 首先，准备我们的“背景板” */
 
#my-code {
    overflow: auto;
    position: fixed; width: 70%;
    margin: 0;
    top: 55px; bottom: 20px; left: 15%;
    transition: left 500ms, width 500ms, opacity 500ms;
    background-color: #111111; color: #f9f9f9;
    border: 1px solid rgba(0,0,0,0.2);
    padding: 24px 12px;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow:
        0px 0px 0px 1px rgba(255,255,255,0.2),
        0px 4px 0px 2px rgba(0,0,0,0.1);
}

/* 
 * 现在还很丑，我们把代码高亮一下就好看了
 *  
 * 就用我平时 IDE 里用的 Monokai 主题给我们的代码配色吧
 */

pre em:not(.comment) { font-style: normal; }

.comment       { color: #ffff99; font-size: 20px }
.selector      { color: #a6da27; }
.selector .key { color: #a6da27; }
.selector .int { color: #a6da27; }
.key           { color: #64d9ef; }
.int           { color: #fd971c; }
.hex           { color: #f92772; }
.hex .int      { color: #f92772; }
.value         { color: #fefefe; }
.var           { color: #66d9e0; }
.operator      { color: #f92772; }
.string        { color: #d2cc70; }
.method        { color: #f9245c; }
.run-command   { color: #ae81ff; }

/* 
 * 是不是很漂亮？             
 *
 * 光打印 CSS 还是有点无趣，不如来点 JS 代码？          
 *
 * 走起！               
 */
~\`

/* 我要操作 DOM，给这个页面加个标题 */
var title = document.createElement("h1");
title.id = "title";

/* 恩，起个名字 */
title.innerHTML = "<a>云平台<em>前端团队</em>自我介绍</a>";

/* 让它显示在页面上 */
document.body.appendChild(title);

 ~                 

/*
 * 怎么样？ 
 *                
 * 标题已经添加到 DOM 里了，但是有点丑
 *                
 * 再修改一下 CSS 代码吧~
 */
\`

#title {
  position: fixed; width: 100%; 
  top: 0; left: 0; right: 0;
  font-size: 20px; line-height: 1;
  font-weight: 100; text-align: center;
  padding: 10px; margin: 0;
  z-index: 10;
  background-color: #111111;
  border-top: 1px solid rgba(255,255,255,0.2);
  transition: opacity 500ms;
}

#title a {
    text-decoration: none;
    color: white;
}

#title em { 
  font-style: normal;
  color: #ff2eed;
}

/* 调整一下布局 */

#my-code { left: 20px; width: calc(50% - 30px); }

#wrapper {
  position: fixed;
  border: 0;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 25% 25% 25% 25%;
  background-color: white;
  border-radius: 2px;
  width: calc(50% - 30px); height: calc(100% - 75px);
  transition: left 500ms, width 500ms;
  top: 55px; bottom: 20px; left: 100%; 
  backgroud-image: url("asserts/horizon.png");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 
    0px 0px 0px 1px rgba(255,255,255,0.2),
    0px 4px 0px 2px rgba(0,0,0,0.1);
}

img {
  width: 100%;
  height: 100%
}

/* 接下来开始正式进行介绍 */

~\`

var wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.appendChild(wrapper); ~\`

#wrapper { left: calc(50% + 10px); } ~\`

/* -------------------------------------------*/
/* 接下来，团队正式登场了 */
/* 王辉军 */

huijun = document.createElement("img");
huijun.src = "asserts/王辉军.png";
wrapper.appendChild(huijun); ~\` \`

/* -------------------------------------------*/
/* 蒋政伟 */

zhengwei = document.createElement("img");
zhengwei.src = "asserts/蒋政伟.jpg";
wrapper.appendChild(zhengwei); ~\` \`

/* -------------------------------------------*/
/* 季海宁 */

haining = document.createElement("img");
haining.src = "asserts/季海宁.png";
wrapper.appendChild(haining); ~\` \`

/* -------------------------------------------*/
/* 张水生 */

shuisheng = document.createElement("img");
shuisheng.src = "asserts/张水生.png";
wrapper.appendChild(shuisheng); ~\` \`

/* -------------------------------------------*/
/* 朱玉东 */

yudong = document.createElement("img");
yudong.src = "asserts/朱玉东.png";
wrapper.appendChild(yudong); ~\` \`

/* -------------------------------------------*/
/* 李锋 */

feng = document.createElement("img");
feng.src = "asserts/李锋.jpeg";
wrapper.appendChild(feng); ~\` \`

/* -------------------------------------------*/
/* 张捷 */

jie = document.createElement("img");
jie.src = "asserts/张捷.png";
wrapper.appendChild(jie); ~\` \`

/* -------------------------------------------*/
/* 梁家瑞 */

jiarui = document.createElement("img");
jiarui.src = "asserts/梁家瑞.png";
wrapper.appendChild(jiarui); ~\` \`

/* -------------------------------------------*/
/* 张海龙 */

hailong = document.createElement("img");
hailong.src = "asserts/张海龙.png";
wrapper.appendChild(hailong); ~\` \`

/* -------------------------------------------*/
/* 赵珊珊 */

shanshan = document.createElement("img");
shanshan.src = "asserts/赵珊珊.png";
wrapper.appendChild(shanshan); ~\` \`

/* -------------------------------------------*/
/* 罗晓霞 */

xiaoxia = document.createElement("img");
xiaoxia.src = "asserts/罗晓霞.png";
wrapper.appendChild(xiaoxia); ~\` \`

/* -------------------------------------------*/
/* 朱婷婷 */

tingting = document.createElement("img");
tingting.src = "asserts/朱婷婷.png";
wrapper.appendChild(tingting); ~\` \`

/* -------------------------------------------*/

/* 谢谢大家 */
/* 介绍页地址: 10.10.108.18:9000 */
`;

module.exports = codes;
