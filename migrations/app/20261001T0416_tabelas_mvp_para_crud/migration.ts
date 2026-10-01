#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/300832575ace8feebb3d3442d1bca52150c46628de3e4c6c32a61cb0ab21100f/contract';
import startContract from '../../snapshots/300832575ace8feebb3d3442d1bca52150c46628de3e4c6c32a61cb0ab21100f/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/c0dae822c48125bfa53e7583304b96c725727a0609bab776d2d8de75d9168dd3/contract';
import endContract from '../../snapshots/c0dae822c48125bfa53e7583304b96c725727a0609bab776d2d8de75d9168dd3/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropTable({ schema: 'public', table: 'User' }),
      this.createTable({
        schema: 'public',
        table: 'accounts',
        columns: [
          col('account_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('provider', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('provider_account_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('user_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
        ],
        constraints: [
          checkExpression(
            'accounts_provider_check_5918ff78',
            "\"provider\" IN ('GOOGLE', 'GITHUB')",
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'people_contacts',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('is_current', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('peopleId', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('people_contact_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('phone_with_ddd', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['people_contact_id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'peoples',
        columns: [
          col('birthDate', 'date', { notNull: true, codecRef: { codecId: 'pg/date-temporal@1' } }),
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('firstName', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('people_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('remainingName', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('sex', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('user_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
        ],
        constraints: [
          primaryKey(['people_id']),
          checkExpression(
            'peoples_sex_check_c59d1a73',
            "\"sex\" IN ('MALE', 'FEMALE', 'NON_BINARY', 'NONE')",
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'roles',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('entity', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('role_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('role_type', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('userCan', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('userCannot', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['role_id']),
          checkExpression('roles_role_type_check_7e6a2c6d', "\"role_type\" IN ('ABAC', 'RBAC')"),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'tokens',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('token_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('type', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('user_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
        ],
        constraints: [
          primaryKey(['token_id']),
          checkExpression('tokens_type_check_587ace7e', '"type" IN (\'PASSWORD_RECOVER\')'),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'user_roles',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('created_by', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('role_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('user_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('user_role_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
        ],
        constraints: [primaryKey(['user_role_id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'users',
        columns: [
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('created_origin', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('password_hash', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('user_id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('username', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['user_id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'peoples',
        constraint: 'peoples_user_id_key',
        columns: ['user_id'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'users',
        constraint: 'users_email_key',
        columns: ['email'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'accounts',
        index: 'accounts_user_id_idx_6c952402',
        columns: ['user_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'people_contacts',
        index: 'people_contacts_peopleId_idx_5c7b58a2',
        columns: ['peopleId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'tokens',
        index: 'tokens_user_id_idx_6c952402',
        columns: ['user_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'user_roles',
        index: 'user_roles_role_id_idx_d9467c50',
        columns: ['role_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'user_roles',
        index: 'user_roles_user_id_idx_6c952402',
        columns: ['user_id'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'accounts',
        foreignKey: {
          name: 'accounts_user_id_fkey',
          columns: ['user_id'],
          references: { schema: 'public', table: 'users', columns: ['user_id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'people_contacts',
        foreignKey: {
          name: 'people_contacts_peopleId_fkey',
          columns: ['peopleId'],
          references: { schema: 'public', table: 'peoples', columns: ['people_id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'peoples',
        foreignKey: {
          name: 'peoples_user_id_fkey',
          columns: ['user_id'],
          references: { schema: 'public', table: 'users', columns: ['user_id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'tokens',
        foreignKey: {
          name: 'tokens_user_id_fkey',
          columns: ['user_id'],
          references: { schema: 'public', table: 'users', columns: ['user_id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'user_roles',
        foreignKey: {
          name: 'user_roles_user_id_fkey',
          columns: ['user_id'],
          references: { schema: 'public', table: 'users', columns: ['user_id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'user_roles',
        foreignKey: {
          name: 'user_roles_role_id_fkey',
          columns: ['role_id'],
          references: { schema: 'public', table: 'roles', columns: ['role_id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
