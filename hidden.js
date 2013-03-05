var display_tag;
if (document.getElementsByTagName) window.onload = function() {
	var change_tag = document.getElementsByTagName("h5");		// 見出しの部分のタグ
	display_tag = document.getElementsByTagName("dl");		// 非表示させたい部分のタグ

	for (var i = 0; i < change_tag.length; i++) {
		// 見出しの文字を取得して表示切り替えのリンクに変更
		var ele = change_tag.item(i);
		var str = ele.innerText || ele.innerHTML;		// var str = ele.firstChild.data;
		ele.innerHTML = '<a href="javascript:show(' + i + ');">' + str + '<\/a>';

		// 非表示させたいタグの処理
		display_tag.item(i).style.display = "none";
	}
}
function show(a) {
	var ele = display_tag.item(a);
	ele.style.display = (ele.style.display == "none") ? "block" : "none";
}