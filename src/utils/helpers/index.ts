export const sortDate = (data: any[]): any[] => {
	if (data.length > 2) {
		data.sort((a, b) => {
			// @ts-ignore
			return new Date(b?.updated_at) - new Date(a?.updated_at);
		});
	}
	return data;
};
