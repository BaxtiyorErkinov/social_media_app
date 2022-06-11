import * as Icons from '@mui/icons-material';
import { IMenuItems } from './types';

export const menuItems: IMenuItems[] = [
	{
		id: 1,
		title: "Profile",
		link: "/profile",
		icon: Icons.Home
	},
	{
		id: 2,
		title: "Friends",
		link: "/friends",
		icon: Icons.People
	},
	{
		id: 3,
		title: "News",
		link: "/",
		icon: Icons.Article
	}
]
