import { container } from '@/containers/container';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    persons: await container.identity.person.personRepo.findAll(),
    users: await container.identity.user.userRepo.findAll(),
    businesses: await container.company.business.businessRepo.findAll(),
    memberships: await container.company.membership.membershipRepo.findAll(),
    roles: await container.company.role.roleRepo.findAll(),
  });
}
