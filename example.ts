// THIS FILE ALSO USED IN TEST

import pak2 from './pak2'

console.log('start')

pak2(async () => {
  console.log('end')

  await pak2()

  console.log('real end')
})
