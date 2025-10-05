import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  discord: text('discord').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
