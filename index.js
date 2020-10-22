// const updateAnchor = anchor => {
// 	if (anchor instanceof HTMLAnchorElement) {
// 		const subredditMatch = anchor.href.match(/^https:\/\/www.reddit.com\/r\/(?<subreddit>[\w\d]{3,21})\/?$/)
// 		if (subredditMatch && subredditMatch.groups.subreddit) {
// 			console.log(anchor);
// 			anchor.href = `https://www.reddit.com/r/${subredditMatch.groups.subreddit}/top/t=all`;
// 		}
// 	}
// };

// const mutationObserver = new MutationObserver(mutationRecord => {
// 	console.log(mutationRecord);
// 	if (muationRecord.type === 'attributes') {
// 		updateAnchor(mutationRecord.target);
// 	}
// });
// mutationObserver.observe(document.body, {
// 	subtree: true;
// });

// const anchors = document.getElementsByTagName('a');
// for (const anchor of anchors) {
// 	updateAnchor(anchor);
// };

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
	console.log(subredditMatch);
	if (subredditMatch && subredditMatch.groups.subreddit) {
		console.log(subredditMatch.groups.subreddit);
		// event.preventDefault();
		// event.stopPropagation();
		// event.stopImmediatePropagation();
		open(`https://www.reddit.com/r/${subredditMatch.groups.subreddit}/top/?t=all`, '_blank');
	}
});
