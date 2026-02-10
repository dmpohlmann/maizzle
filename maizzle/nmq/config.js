/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is the base configuration that Maizzle will use when you run commands
| like `npm run build` or `npm run dev`. Additional config files will
| inherit these settings, and can override them when necessary.
|
*/


export default {
  beforeRender(html) {
    const { body } = fm(html)

    return `
      <x-main>
        <md>${body}</md>
      </x-main>`
  },
}

/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    content: ['content/**/*.md'],
    static: {
      source: ['images/**/*.*'],
      destination: 'images',
    },
  },
}

import fm from 'front-matter'

