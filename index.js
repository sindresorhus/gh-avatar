import ghUser from 'gh-user';

export default async function ghAvatar(username, {token} = {}) {
	const user = await ghUser(username, {token});
	return user.avatar_url;
}
