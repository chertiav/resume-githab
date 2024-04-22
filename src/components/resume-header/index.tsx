import React, { ReactElement } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { getYear } from '../../utils/helpers';

const ResumeHeaderComponent: React.FC<any> = (props: any): ReactElement => {
	const { userData } = props;

	return (
		<Box>
			<Typography variant="h1" marginBottom={3}>
				{userData.name}
			</Typography>
			<Typography variant="h2" marginBottom={2}>
				On GitHub since {getYear(userData.created_at)}
			</Typography>
			<Typography variant="h3" marginBottom={2}>
				{userData.public_repos} public repositories
			</Typography>
			<Typography variant="h4" marginBottom={2}>
				This résumé is generated automatically using public information from the
				developer's GitHub account. The repositories are ordered by last updated
				date. Do not hesitate to visit
				<Link href={userData.html_url}> {userData.name} GitHub page </Link>
				for a complete work history.
			</Typography>
		</Box>
	);
};

export default ResumeHeaderComponent;
