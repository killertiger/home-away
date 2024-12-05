# HomeAway Project

Nextjs project with Typescript

Based on course:
https://bairesdev.udemy.com/course/mastering-nextjsbuild-an-airbnb-clone-from-scratch-2024

Original repository:
https://github.com/john-smilga/nextjs-course-home-away/tree/main/02-home-away-project

## References

### External packages:

- [Shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components that you can copy and paste into your apps.
- [react-icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easly with react-icons.
- [zod](https://zod.dev/) - TypeScript-first schema validation with static type inference
- [prisma](https://www.prisma.io/) - Simplify working and interacting with databases
- [world-countries](https://www.npmjs.com/package/world-countries) - List of world countries in JSON, CSV, XML and Yaml
- [use-debounce](https://www.npmjs.com/package/use-debounce) - React libraries for debouncing without tears!
- [react-share](https://www.npmjs.com/package/react-share) - Social media share buttons and share counts for your React apps.
- [Leaflet](https://leafletjs.com/) - JavaScript library for mobile-friendly interactive maps
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) - A small, fast, and scalable bearbones state management solution.
- [recharts](https://recharts.org/) - A composable charting library built on React components

## External dependencies

- [clerk](https://clerk.com/) - The most comprehensive User Management Platform
- [supabase](https://supabase.com/) - Supabase is an open source Firebase alternative.
- [stripe](https://stripe.com/) - Payment gateway
Alternatives to supabase:
- [render](https://render.com/)
- [planetscale](https://planetscale.com/) - The database platform built for scale
- [MongoDB](https://www.mongodb.com/) - Database. Deploy a multi-cloud database.


## Recommended Vscode Extensions
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)


## Development

### Environment file

#### `.env`

DATABASE_URL="{PRIMA_TRANSACTION_CONNECTION_URL}?pgbouncer=true&connection_limit=1"
DIRECT_URL="{PRIMA_SESSION_CONNECTION_URL}"

#### Prima
Running Prisma studio:
```
npx prisma studio
```
Access http://localhost:5555

Push database changes
```
npx prisma db push
```