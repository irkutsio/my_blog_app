import { MainNavigation } from './main-navigation';

export const Layout = (props) => {
	return <>
		<MainNavigation />
		<main>{props.children}</main>
	</>;
};
