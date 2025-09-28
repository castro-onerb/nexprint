import { businessContainer } from './company/business/container';
import { membershipContainer } from './company/membership/container';
import { personContainer } from './identity/person/container';
import { roleContainer } from './company/role/container';
import { userContainer } from './identity/user/container';

export const container = {
  company: {
    business: businessContainer,
    membership: membershipContainer,
    role: roleContainer,
  },
  identity: {
    person: personContainer,
    user: userContainer,
  },
};
