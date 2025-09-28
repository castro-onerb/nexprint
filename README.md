This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

src/
  |--> app/
    |--> (public)/register/page.tsx
    |--> api/business/create (creio que deva criar outra mais nominalmente correta, para descrer que é o primeiro registro lá da pessoa, essa aqui fica pra posteridade)
    |--> [globals.css, layout.tsx, middleware.ts, page.tsx]
  |--> core/
    |--> entities/ [entiti.ts]
    |--> errors/ [app-error.ts, either.ts, validation-error.ts]
    |--> permissions/ [permissions.ts, permissions-resolver.ts]
    |--> types/ [address.ts]
    |--> value-objects/ [address.ts, password.ts, unique-id.ts]
  |--> domain/
    |--> business/
      |--> repositories/ [business.repository.ts]
      |--> types/ [business.ts]
      |--> business.entity.ts
    |--> membership/
      |--> repositories/ [membership.repository.ts]
      |--> types/ [membership.ts]
      |--> membership.entity.ts
    |--> person/
      |--> repositories/ [person.repository.ts]
      |--> types/ [person.ts]
      |--> person.entity.ts
    |--> role/
      |--> repositories/ [role.repository.ts]
      |--> types/ [role.ts]
      |--> role.entity.ts
    |--> user/
      |--> repositories/ [user.repository.ts]
      |--> types/ [user.ts]
      |--> user.entity.ts
  |--> infra/
    |--> cryptography/ [bcrypt-password.ts]
    |--> database/
      |--> in-memory/
        |--> in-memory-business.repository.ts
        |--> in-memory-membership.repository.ts
        |--> in-memory-person.repository.ts
        |--> in-memory-role.repository.ts
        |--> in-memory-user.repository.ts
      |--> prisma/ (not implemented)
  |--> services/
    |--> business/
      |--> create-business/
        |--> index.ts
        |--> dto.ts
      |--> factories/
        |--> make-create-business.factory.ts
    |--> membership/
      |--> create-membership/
        |--> index.ts
        |--> dto.ts
      |--> factories/
        |--> make-create-membership.factory.ts
    |--> person/
      |--> create-person/
        |--> index.ts
        |--> dto.ts
      |--> factories/
        |--> make-create-person.factory.ts
    |--> role/
      |--> create-role/
        |--> index.ts
        |--> dto.ts
      |--> factories/
        |--> make-create-role.factory.ts
    |--> user/
      |--> create-user/
        |--> index.ts
        |--> dto.ts
      |--> factories/
        |--> make-create-user.factory.ts
  |--> shared/
    |--> components/ [Button/, Dropdown/, Effect/, Icon/, Input/, Layout/, Loading/, Navbar/]
    |--> configs/ [dayjs.config.ts]
    |--> hooks/ [use-viewport.ts]
    |--> utils/ [clone-with-ref.ts, cn.ts, guard.ts, guard.ts, use-debounce.ts]
