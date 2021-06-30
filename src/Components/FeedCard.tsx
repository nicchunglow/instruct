import React from "react";
import {
	Avatar,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const FeedCard = (props: any) => {
	let { cardInfo } = props;

	return (
		<Card>
			<CardHeader
				avatar={<Avatar aria-label="recipe">R</Avatar>}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={cardInfo.message}
				subheader="September 14, 2016"
			/>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="400"
					image={cardInfo?.picture ? cardInfo.picture : "https://picsum.photos/400/400?grayscale"}
					title="CardInfo.message"
				/>
				<CardContent>
					<Typography variant="h6">{cardInfo?.message}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default FeedCard;
