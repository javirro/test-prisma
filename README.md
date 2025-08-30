# PRISMA ORM EXAMPLE

This is the guide followed to setup the project:

https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-prismaPostgres



## Generate new migration

Each time we made some changes in the prisma schema, we must make a migration to force the database to update according the data we have changed. To run the migration use this command:

```sh
npx prisma migrate dev --name migration-name
```
This is a good practice for development environments. This will generate a migration.sql file where we will track each change we apply to the database. It helps a lot to send to production at the end of the project to know what changes must be applied in the real production database.
