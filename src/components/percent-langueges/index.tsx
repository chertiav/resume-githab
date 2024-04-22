import React, { ReactElement } from 'react';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { ILanguage, ITablePercentData } from '../../common/types/user';

const PercentLanguageComponent: React.FC<ITablePercentData> = (
	props: ITablePercentData,
): ReactElement => {
	const { languages } = props;

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Language</TableCell>
						<TableCell align="right">%</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{languages.map((element: ILanguage) => (
						<TableRow
							key={element.language}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{element.language}
							</TableCell>
							<TableCell align="right">
								{Math.round(element.percent * 100) / 100}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default PercentLanguageComponent;
