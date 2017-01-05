export default 
[
  {
    title: 'Concertspot',
    links: [
      {title: 'Web', path: 'https://www.concertspot.co.uk'},
      {title: 'GitHub', path: 'https://github.com/tbtommyb/concertspot'}
    ],
    imgSrc: require('../assets/images/concertspot-narrow.jpg'),
    imgAlt: 'Concertspot page screenshot',
    summary: 'A gig/clubnight recommendation app built on top of the Skiddle APIs using React',
    paragraphs: [
      'The front end code uses React, Redux, Webpack and Sass.',
      'The server (written with Hapi.js) takes the user\'s search term and uses it to query a Postgresql database of artists and their associated musical terms (built from Discogs data). It then matches events in the user\'s search area. Redis is used for caching query results.'
    ]
  },
  {
    title: 'OxGrow',
    links: [
      {title: 'Web', path: 'https://www.oxgrow.org'},
      {title: 'GitHub', path: 'https://github.com/tbtommyb/oxgrow'}
    ],
    imgSrc: require('../assets/images/oxgrow-narrow.jpg'),
    imgAlt: 'OxGrow page screenshot',
    summary: 'Wordpress-backed website for a grassroots environmental group',
    paragraphs: [
      'I designed this site to be bright and inviting to new members while easy to maintain by volunteers.',
      'The previous, blog-based design was not suitable for an infrequently updated site, giving the group the appearance of being inactive. I restructured the site away from blog posts and integrated Mailchimp so that the latest content could be automatically pulled in from newsletter mailings.'
    ]
  },
  {
    title: 'Wedding',
    links: [
      {title: 'Web', path: 'http://www.tomandgeorgie.co.uk'},
      {title: 'GitHub', path: 'https://github.com/tbtommyb/wedding'}
    ],
    imgSrc: require('../assets/images/wedding-narrow.jpg'),
    imgAlt: 'Wedding page screenshot',
    summary: 'A website for my wedding, providing guests with information and the option to RSVP online',
    paragraphs: [
      'My aim was to create a simple, attractive site with minimal bloat so I used Hugo to generate a static site and served it directly with Nginx.',
      'Using a Google Script I was able to integrate the RSVP form with a Google Spreadsheet so that RSVPs are tracked automatically.'
    ]
  },
  {
    title: 'Number one app',
    links: [
      {title: 'Web', path: 'http://www.number-oneapp.herokuapp.com'},
      {title: 'GitHub', path: 'https://github.com/tbtommyb/number-one'}
    ],
    imgSrc: require('../assets/images/number-one-narrow.jpg'),
    imgAlt: 'Number one app page screenshot',
    summary: 'Demo project to show what was number one on your birthday (in the UK)',
    paragraphs: [
      'It uses jQuery on the front end and Express.js and Sqlite on the back end.',
      'A RESTful API is accessible at /api, allowing authenticated and authorised users to update the backing database.'
    ]
  }
];