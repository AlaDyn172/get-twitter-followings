import test from 'tape';
import getTwitterFollowings from './index';
import getTwitterInfo from 'get-twitter-info';
import tokens from 'twitter-tokens';

test('getTwitterFollowings', { timeout: 30000 }, ({ equal, end }) => {
  getTwitterInfo(tokens, 'vjeux').then(({ followers_count }) => {
    getTwitterFollowings(tokens, 'vjeux').then(followers => {
      equal(followers.length, followers_count, 'should getTwitterFollowings exactly');
      equal(typeof followers[0], 'object', 'should getTwitterFollowings in `User Object` format');
      end();
    });
  });
});
