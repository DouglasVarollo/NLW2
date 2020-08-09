import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable();
    table.string("password_hash").notNullable();
    table
      .string("avatar_url")
      .notNullable()
      .defaultTo("https://api.adorable.io/avatars/285/abott@adorable.png");
    table.string("whatsapp").notNullable().defaultTo("");
    table.string("bio").notNullable().defaultTo("");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
