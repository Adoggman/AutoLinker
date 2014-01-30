function replaceTwitterWithHtmlLink(text) {
	var twitter_exp = /(\s|>)(@(\w+))/gi;
	return text.replace(twitter_exp,"$1<a href='https://twitter.com/$3'>$2</a>")
}

function replaceSubredditsWithHtmlLink(text) {
	var subreddit_exp = /(\s|>)(\/?r\/(\w+))/gim;
	return text.replace(subreddit_exp,"$1<a href='http://reddit.com/r/$3'>$2</a>")
}

function replaceRedditUsersWithHtmlLink(text) {
	var reddituser_exp = /(\s|>)(\/?u\/(\w+))/gim;
	return text.replace(reddituser_exp,"$1<a href='http://reddit.com/u/$3'>$2</a>")
}

function replaceAll(text) {
	var replaced = replaceTwitterWithHtmlLink(text);
	replaced = replaceSubredditsWithHtmlLink(replaced);
	replaced = replaceRedditUsersWithHtmlLink(replaced);
	return replaced;
}


var replaced = replaceAll(document.body.innerHTML);
document.body.innerHTML = replaced;
