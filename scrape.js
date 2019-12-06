import rp from 'request-promise';
import cheerio from 'cheerio';

const links = [];
rp(options)
	.then($ => {
		// Getting the hrefs:
		$('tbody tr').each(function(i, element) {
			const link = $(this)
				.find('.record-data a')
				.attr('href');
			links.push(link);
		});
		// Mapping the urls to the request-promises:
		const promises = links.map(link => rp({ uri: link, transform: body => cheerio.load(body) }));
		// Resolving the promises:
		return Promise.all(promises);
	})
	.then(resolved => {
		// I have 50 links in total. The `resolved` is an array with 50 nulls
	})
	.catch(error => {
		console.error('Error:', error);
	});
