// 
// This file is part of PiSleepTalk.
//  Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   defines   = require('../defines.js')
	, framework = require('../framework.js')
	, fs        = require('fs')
;

module.exports = function(app) {
	app.post('/:name' + defines.audioFileExtension, function(req, res) {
		var filepath = framework.checkFile(req, res, defines.audioFileExtension, 'records-to-render');

		if (filepath) {
			var content 		= req.body.content + "\n\n";
			var contentFilePath = '/usr/sleeptalk/records-to-render/' + req.params.name + '.sleeptalk';

			fs.writeFileSync(contentFilePath, content); 

			res.status(200).send('OK');
		}
	});
}