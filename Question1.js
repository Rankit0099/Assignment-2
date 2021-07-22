function v(){
	var text = document.getElementById("input_text").value;
	var word =  document.getElementById("word").value;
	var replace =  document.getElementById("replace").value;
	t = text.replaceAll(word,replace);
	alert(t);
}