const findParentAnchor = target => {
	if (target instanceof HTMLAnchorElement) {
		return target;
	} else if (target.parentElement) {
		return findParentAnchor(target.parentElement);
	} else {
		return null;
	}
};

document.addEventListener('auxclick', event => {
	console.log(event);
	if (event.button != 1) {
		return;
	}
	const anchor = findParentAnchor(event.target);
	if (!anchor) {
		return;
	}
	const subredditMatch = anchor.href.match(/^https:\/\/www.reddit.com\/r\/(?<subreddit>[\w\d]{3,21})\/?$/);
	if (subredditMatch && subredditMatch.groups.subreddit) {
		event.preventDefault();
		open(`https://www.reddit.com/r/${subredditMatch.groups.subreddit}/top/?t=all`, '_blank');
	}
});
