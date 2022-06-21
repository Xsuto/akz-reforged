import cheerio from 'cheerio'
import pageData from '@/testPage'
import type Course from '@/interfaces/Course'

function compare(a: Course, b: Course) {
  if (a.name < b.name)
    return -1
  if (a.name > b.name)
    return 1
  return 0
}

export default defineEventHandler(async (event) => {
  // Vercel Cache
  event.res.setHeader('Cache-Control', 's-max-age=15, stale-while-revalidate')

  const output: Course[] = []
  // const URL = 'https://akz.pwr.edu.pl/katalog_zap.html'
  // const page = await fetch('./it.html')
  // const pageBody = await page.text()
  const $ = cheerio.load(pageData)
  const table = $('tbody tr')

  table.each((_, elem) => {
    const item: Course = {
      degree: '',
      freeSlots: 0,
      groupId: '',
      name: '',
      stationary: false,
      teacher: '',
      timeframe: '',
      zzu: 0,
      courseId: '',
    }
    $(elem)
      .children()
      .each((i, it) => {
        const col = $(it).text()
        if (i === 0)
          item.courseId = col
        if (i === 1)
          item.groupId = col
        if (i === 2)
          item.name = col
        if (i === 3)
          item.timeframe = col
        if (i === 4)
          item.teacher = col
        if (i === 5)
          item.freeSlots = Number(col)
        if (i === 6)
          item.zzu = Number(col)
        if (i === 7)
          item.stationary = Boolean(col)
        if (i === 8)
          item.degree = col
      })
    output.push(item)
  })
  output.sort(compare)
  return output
})
