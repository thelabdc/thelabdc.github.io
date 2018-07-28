# The Lab @ DC's Website

This is the source code for our website, which you can find at [thelab.dc.gov](http://thelab.dc.gov).

## Build

This is a [jekyll](https://jekyllrb.com/-based website hosted on GitHub pages.
It relies on having both ruby and node installed. We build the site with the
[https://hub.docker.com/r/circleci/ruby](ruby) Docker image from CircleCI. If
you would like to build the site yourself, you can use:

```
docker pull circleci/ruby:2.4.4-node-browsers
docker run --rm -it -v "$(pwd):/home/circleci/repo" circleci/ruby:2.4.4-node-browsers sh -c 'cd ~/repo && npm install'
docker run --rm -it -v "$(pwd):/home/circleci/repo" circleci/ruby:2.4.4-node-browsers sh -c 'cd ~/repo && bundle install && npm run gulp build:prod'
```

The rendered website can then be found in the `_site` folder.

## License

The content of this website is licensed under the Creative Commons Public Domain license. See [LICENSE.md](https://github.com/thelabdc/thelabdc.github.io/blob/source/LICENSE.md) for details.

Included in this repo is also [breakpoint](https://github.com/at-import/breakpoint), which is licensed under the MIT License. See their repository for more details.
