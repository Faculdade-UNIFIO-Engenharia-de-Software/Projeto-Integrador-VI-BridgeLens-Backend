#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/300832575ace8feebb3d3442d1bca52150c46628de3e4c6c32a61cb0ab21100f/contract';
import endContract from '../../snapshots/300832575ace8feebb3d3442d1bca52150c46628de3e4c6c32a61cb0ab21100f/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/b5ae4e66fad1f0b7dd5590568f75a12a6f4576e9f367a787a69a4e729abac1fb/contract';
import startContract from '../../snapshots/b5ae4e66fad1f0b7dd5590568f75a12a6f4576e9f367a787a69a4e729abac1fb/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('phone', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
