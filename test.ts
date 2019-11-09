import test from 'ava'
import { platform } from 'os'
import stripAnsi from 'strip-ansi'
import { sync as resolve } from 'resolve-bin'
import { spawn } from 'node-pty'

test('it works', async t => {
  t.timeout(10000)

  // Run example.ts with virtual tty
  const cmd = platform() === 'win32' ? 'node.exe' : 'node'
  const ts = resolve('ts-node') as string
  const node = spawn(cmd, [ts, 'example.ts'], {})

  // Collect process output for testing procedurally
  let output = ''

  node.on('data', data => {
    output += stripAnsi(data)
  })

  const match = async (pattern: string) => {
    if (output.includes(pattern))
      return output = output.slice(output.indexOf(pattern))
    await new Promise(r => setTimeout(r, 100))
    return await match(pattern)
  }

  await match('start')
  await match('Press any key to continue...')

  node.write('a')

  await match('\r\n')
  await match('end')
  await match('Press any key to continue...')

  node.write('n')

  t.pass()

  // Prevent exit before complate processing
  await new Promise(resolve => node.on('exit', resolve))
})
