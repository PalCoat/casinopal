import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/PalCoat/casinopal.git', // Update to point to your repository
  user: {
   name: 'Pal Miskolczi', // update to use your name
   email: 'palmis@edu.umea.se' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);