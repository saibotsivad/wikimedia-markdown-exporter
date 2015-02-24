var fs = require('fs')
var request = require('request')
var htmlparser = require("htmlparser2")
var toMarkdown = require('to-markdown').toMarkdown
var mkdirp = require('mkdirp')

if (process.argv[3] === undefined) {
	console.log("Usage: node wikimedia-markdown-export.js [text file of all pages to export] [site domain]")
	return
}

var settings = {
	fileName: process.argv[2],
	url: 'http://' + process.argv[3] + '/api.php?format=json&action=parse&page=',
	fileEncoding: 'utf8'
}

mkdirp(__dirname + '/output/', function (err) {
	if (err) {
		console.log(err)
	}
})

fs.readFile(settings.fileName, settings.fileEncoding, function (err, data) {
	if (!err) {
		data.split('\n').forEach(function (title) {
			request(settings.url + encodeURIComponent(title), function (error, response, body) {
				if (error) {
					console.log('Some error on: ' + settings.url + encodeURIComponent(title))
				} else {
					var html = JSON.parse(body).parse.text['*']
					var markdown = 'title: ' + title + '\n\n' + toMarkdown(html)
					fs.writeFile(__dirname + '/output/' + title + '.md', markdown, 'utf8')
					// var parser = new htmlparser.Parser({
					// 	onopentag: function (name, attribs) {
					// 		if (name === "img") {
					// 			console.log(settings.url + attribs.src)
					// 			request(settings.url + attribs.src).pipe(fs.createWriteStream(__dirname + '/output/' + attribs.src))
					// 		}
					// 	}
					// })
					// parser.write(html)
					// parser.end()
				}
			})
		})
	} else {
		console.log('Error reading file')
	}
})