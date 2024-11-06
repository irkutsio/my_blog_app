const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'kutsevoliryna18',
				mongodb_password: 'YFU5X1GHYsM4ag6b',
				mongodb_clustername: 'cluster0',
				// mongodb_database: 'dev-test',
			},
		};
	}
	return {
		env: {
			mongodb_username: 'kutsevoliryna18',
			mongodb_password: 'YFU5X1GHYsM4ag6b',
			mongodb_clustername: 'cluster0',
			// mongodb_database: 'test',
		},
	};
};
