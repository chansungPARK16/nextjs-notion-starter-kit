import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '202b882ac11e80e8b0a8c11fcebfbb33',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Moast Blog',
  domain: 'nextjs-notion-starter-git-fdfb0b-chansung-astarcorpcos-projects.vercel.app',
  author: 'Park',

  // open graph metadata (optional)
  description: 'Moast Blog',

  // social usernames (optional)
  // twitter: '#',
  github: 'daeho-ro',
  // linkedin: '#',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  
}
