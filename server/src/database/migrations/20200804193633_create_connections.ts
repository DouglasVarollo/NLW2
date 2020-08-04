import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("connections", (table) => {
		table.increments("id").primary();
		table
			.integer("user_id")
			.notNullable()
			.references("id")
			.inTable("users")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table.timestamp("created_at").defaultTo("now()");
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("connections");
}
