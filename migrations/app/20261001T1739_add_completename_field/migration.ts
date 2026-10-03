#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/3d0a007fcbda6d84cc6c8e70e617618ae080af0df27834020f8d0219b1f2f4c4/contract';
import endContract from '../../snapshots/3d0a007fcbda6d84cc6c8e70e617618ae080af0df27834020f8d0219b1f2f4c4/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/c0dae822c48125bfa53e7583304b96c725727a0609bab776d2d8de75d9168dd3/contract';
import startContract from '../../snapshots/c0dae822c48125bfa53e7583304b96c725727a0609bab776d2d8de75d9168dd3/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, placeholder } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'users',
        column: col('complete_name', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.dataTransform(endContract, 'backfill-users-complete_name', {
        check: () => placeholder('backfill-users-complete_name:check'),
        run: () => placeholder('backfill-users-complete_name:run'),
      }),
      this.setNotNull({ schema: 'public', table: 'users', column: 'complete_name' }),
      this.dropNotNull({ schema: 'public', table: 'users', column: 'username' }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
