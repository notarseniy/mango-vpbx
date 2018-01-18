const base = 'https://app.mango-office.ru/vpbx/';

/**
 * суфиксы url-ов для API команд
 */
const suffix = {
	call: 'commands/callback',
	callGroup: 'commands/callback_group',
	callHangup: 'commands/call/hangup',
	route: 'commands/route',
	transfer: 'commands/transfer',
	users: 'config/users/request',
	statsRequest: 'stats/request',
	statsResult: 'stats/result',
	recording: 'queries/recording/post',
	recordingStart: 'commands/recording/start',
	sms: 'commands/sms',
	dctUserInfo: 'queries/user_info_by_dct_number',
	dctUserHistory: 'queries/user_history_by_dct_number'
};

module.exports = {
	base,
	suffix
};
