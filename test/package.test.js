import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';

test('npm package includes the source and type files', () => {
    const output = execSync('npm pack --dry-run --json', { encoding: 'utf8' });
    const [packageInfo] = JSON.parse(output);
    const files = packageInfo.files.map((file) => file.path);

    for (const expected of ['src/index.js', 'src/index.cjs', 'src/index.d.ts', 'src/index.d.cts']) {
        assert.ok(files.includes(expected), `${expected} is missing from the package`);
    }
});