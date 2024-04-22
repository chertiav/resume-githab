export interface IUser {
	id: number;
	login: string;
	node_id: string;
	avatar_url: string;
	gravatar_id: string | null;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	email: string | null;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string | null;
	company: string | null;
	blog: string | null;
	location: string | null;
	hireable: boolean | null;
	bio: string | null;
	twitter_username: string | null;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
	events_url: string;
}

export interface IUserState {
	userData: IUser;
	isLoading: boolean;
}

export interface IRepository {
	id: number;
	name: string;
	private: boolean;
	html_url: string;
	languages_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
}

export interface ILanguage {
	language: string;
	byte: number;
	percent: number;
}

export interface IRepositoriesState {
	repos: IRepository[];
	languages: ILanguage[];
	isLoadingRepos: boolean;
}

export interface ITablePercentData {
	languages: ILanguage[];
}
