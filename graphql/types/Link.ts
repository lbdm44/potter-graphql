import { objectType, extendType } from 'nexus';
import { User } from './User';
import { links } from '../../data/links';
import { users } from '../../data/users';

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.string('id');
    t.string('title');
    t.string('url');
    t.string('description');
    t.string('imageUrl');
    t.string('category');
    t.list.field('users', {
      type: User,
      resolve(_parent, _args, ctx) {
        return users;
      },
    });
  },
});

// export const LinksQuery = extendType({
//   type: 'Query',
//   definition(t) {
//     t.nonNull.list.field('links', {
//       type: 'Link',
//       resolve(_parent, _args, ctx) {
//         return links;
//       },
//     });
//   },
// });
