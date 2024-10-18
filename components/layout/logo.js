import React from 'react';
import classes from './logo.module.css';

export const Logo = React.forwardRef(({ href }, ref) => {
	return (
		<div className={classes.logo}>
			<a href={href} ref={ref}>
				Ira` next blog
			</a>
		</div>
	);
});
