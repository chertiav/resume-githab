import { createAsyncThunk } from '@reduxjs/toolkit';
//=====================================================
import { instance } from '../../../utils/axios';
import { showError } from '../../../utils/errors';
import { sortDate } from '../../../utils/helpers';
import { ILanguage, IRepository } from '../../../common/types/user';

export const getUsersRepositories = createAsyncThunk(
	':username',
	async (userNameData: any) => {
		try {
			const { data }: { data: any[] } = await instance.get(userNameData);
			const sortedData: any[] = sortDate(data);
			const repositories: IRepository[] = castingToInterface(sortedData);
			const languages = await getLanguages(repositories);
			const statistic = getStatistic(languages);
			return {
				repositories,
				languages: statistic,
			};
		} catch (e: any) {
			showError(e);
		}
	},
);

const castingToInterface = (data: any[]): IRepository[] =>
	data.map((element) => ({
		id: element.id,
		name: element.name,
		private: element.private,
		html_url: element.html_url,
		languages_url: element.languages_url,
		created_at: element.created_at,
		updated_at: element.updated_at,
		pushed_at: element.pushed_at,
	}));

const getLanguages = async (repositories: IRepository[]): Promise<{}[]> => {
	const languages = [];
	for (let i = 0; i < repositories.length; i++) {
		const { data }: { data: {} } = await instance.get(
			repositories[i].languages_url,
		);
		languages.push({
			...data,
		});
	}
	return languages;
};

const getStatistic = (languages: {}[]): ILanguage[] => {
	const sumByteByLanguage: { language: string; byte: number }[] =
		getSumByteByLanguage(languages);
	const sumAllByte = sumByteByLanguage.reduce(
		(sum, element) => sum + element.byte,
		0,
	);
	return sumByteByLanguage.map((element) => ({
		...element,
		percent: (element.byte / sumAllByte) * 100,
	}));
};

const getSumByteByLanguage = (
	languages: any[],
): { language: string; byte: number }[] => {
	const result: { language: string; byte: number }[] = [];
	const languagesName: Set<string> = getUniqLanguagesName(languages);
	languagesName.forEach((language) => {
		let byte = 0;
		languages.forEach((element) => {
			byte += element[language] ? element[language] : 0;
		});
		result.push({
			language,
			byte,
		});
	});
	return result;
};

const getUniqLanguagesName = (languages: any[]): Set<string> => {
	const uiqLanguagesName: Set<string> = new Set();
	if (languages.length) {
		languages.forEach((element) => {
			Object.keys(element).forEach((element: string) =>
				uiqLanguagesName.add(element),
			);
		});
	}
	return uiqLanguagesName;
};
