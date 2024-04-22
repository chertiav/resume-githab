import React from 'react';
import { Divider, Link, Stack, Typography } from '@mui/material';
//=========================================================
import { IListRepo } from '../../common/types/user';

const ListRepoComponent: React.FC<IListRepo> = (props: IListRepo) => {
	const { repos } = props;

	return (
		<>
			<Typography variant="h3" marginBottom={1} padding={1}>
				List of the last ten updated repositories
			</Typography>
			<Divider />
			{repos.slice(0, 10).map((element) => {
				return (
					<>
						<Stack marginBottom={1} padding={1} alignItems={'baseline'}>
							<Link href={element.html_url} marginRight={1}>
								{element.name}
								{','}
							</Link>
							<Typography variant="h4">
								Last updated {new Date(element.updated_at).getDate()}
								{'.'}
								{new Date(element.updated_at).getMonth()}
								{'.'}
								{new Date(element.updated_at).getFullYear()}
							</Typography>
						</Stack>
						<Divider />
					</>
				);
			})}
		</>
	);
};

export default ListRepoComponent;
