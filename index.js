const request = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://www.laguardiaairport.com/to-from-airport/parking';

async function scrapeLaGuardiaParking() {
	try {
		const htmlResult = await request.get(url);
		const $ = await cheerio.load(htmlResult);

		y = [];
		x = $('.terminal-percentage').each((index, element) => {
			y.push(
				$(element)
					.text()
					.trim()
			);
		});
		console.log(y);
	} catch (err) {
		console.error(err);
	}
}

scrapeLaGuardiaParking();

// ----- alternate not working -----

// (async () => {
// 	const url = 'https://www.laguardiaairport.com/to-from-airport/parking';

// 	const response = await request(url);

// 	const $ = cheerio.load(response);

// 	// let data = $('.terminal-percentage').text();
// 	let title = $('div[class="terminal-percentage"]').innerText;
// 	// document.querySelector('div[class="terminal-percentage"]').innerText;

// 	console.log(title);
// })();
