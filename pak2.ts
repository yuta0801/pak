const pak2 = (callback: () => void) => {
  process.stdout.write('Press any key to continue...')
  process.stdin.setRawMode(true)
  process.stdin.once('data', () => {
    process.stdout.write('\n')
    process.stdin.setRawMode(false)
    process.stdin.unref()
    callback()
  })
}

export default pak2
