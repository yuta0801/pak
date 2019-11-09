import { promisify } from 'util'

function pak2(cb: () => void): void
function pak2(): Promise<void>
function pak2(callback?: () => void) {
  if (!callback) return promisify(pak2)()
  process.stdout.write('Press any key to continue...')
  process.stdin.resume()
  process.stdin.setRawMode(true)
  process.stdin.once('data', () => {
    process.stdout.write('\n')
    process.stdin.setRawMode(false)
    process.stdin.pause()
    callback()
  })
}

export default pak2
