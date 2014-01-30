function replaceTwitterWithHtmlLink(text) {
	var twitter_exp = /(\s|>)(@(\w+))/gi;
	return text.replace(twitter_exp,"$1<a href='https://twitter.com/$3'>$2</a>")
}

function replaceAll(text) {
	var replaced = replaceTwitterWithHtmlLink(text);
	return replaced;
}


var replaced = replaceAll(document.body.innerHTML);
document.body.innerHTML = replaced;
