function replaceSubredditsWithHtmlLink(text) {
	var subreddit_exp = /(?!<a[^>]*?>)(\s|>)(\/?r\/(\w+))(?![^<]*?<\/a>)/gim;
	return text.replace(subreddit_exp,"$1<a href='http://reddit.com/r/$3'>$2</a>")
}

function replaceRedditUsersWithHtmlLink(text) {
	var reddituser_exp = /(?!<a[^>]*?>)(\s|>)(\/?u\/(\w+))(?![^<]*?<\/a>)/gim;
	return text.replace(reddituser_exp,"$1<a href='http://reddit.com/u/$3'>$2</a>")
}

function replaceAll(text) {
	var replaced = replaceSubredditsWithHtmlLink(text);
	replaced = replaceRedditUsersWithHtmlLink(replaced);
	return replaced;
}


var replaced = replaceAll(document.body.innerHTML);
document.body.innerHTML = replaced;
