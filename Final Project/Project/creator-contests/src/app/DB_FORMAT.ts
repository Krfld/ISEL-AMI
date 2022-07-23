// enum ChallengeCategory {
// 	image,
// 	video,
// 	music,
// 	text,
// };

// enum ChallengeState {
// 	open,
// 	vote,
// 	winners,
// };

const user = {
	name: '',
	photoUrl: '',
	news: true,
	wins: 1,
};

const challenge = {
	category: ChallengeCategory,
	state: ChallengeState,
	submissionDateLimit: 0,
	votingDateLimit: 0,
	award: '',
	thumbnail: '',
	submissions: 0,
};

const submission = {
	user: '',
	challenge: '',
	category: ChallengeCategory,
	contentUrl: '',
	votes: [{ user: '', vote: 5 }, { user: '', vote: 1 }],
};
