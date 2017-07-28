# wikimedia-markdown-exporter

[![Greenkeeper badge](https://badges.greenkeeper.io/saibotsivad/wikimedia-markdown-exporter.svg)](https://greenkeeper.io/)

Export a Wikimedia website to a bunch of Markdown files, for use in something like Jekyll or Noddity.

As is the unfortunate nature of export-type modules, I haven't used this in a while.

I'm hoping that you can find the scraps of code here useful.

If you tidy up the code or anything to make this better, I would love love love it if you made a pull request.

## how to use

It might be easier to `git clone`, but `npm install` also works, you'll just need to go into
the folder `node_modules/wikimedia-markdown-exporter`.

Either way, once you are there run this command:

```sh
node wikimedia-markdown-export.js [text file of all pages to export] [site domain]
```

For example, go into your Wikimedia site and in the settings I think is a thing that lets
you list all your pages. You'll probably need some regex to tidy it up, but I don't remember
it being very hard.

Anyway, at the end you'll want a text file that looks like:

```txt
API
Advanced Setup
Aim
Belacqua
Bid
Bidding
Blue Sunlight
Brightling University
...
```

If you save that in the folder where the module is as `pages.txt`, and your website is `mysite.com`, you'd run:

```sh
node wikimedia-markdown-export.js pages.txt mysite.com
```

The output would be in a child folder, `output`.

## license

[VOL](http://veryopenlicense.com)
