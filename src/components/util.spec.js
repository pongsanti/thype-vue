import {util} from './util'

describe('Util', () => {
  let spanObject = util.spanObject

  it('should create span array correctly', () => {
    let spanArray = util.spanArray('ตอนเช้า มีบางครั้งบางคราว')
    expect(spanArray).toEqual(
      [spanObject('ต', 0), spanObject('อ', 1), spanObject('น', 2), spanObject('เ', 3),
        spanObject('ช้', 4), spanObject('า',6), spanObject(' ', 7), spanObject('มี', 8),
        spanObject('บ', 10), spanObject('า', 11), spanObject('ง', 12), spanObject('ค', 13),
        spanObject('รั้', 14), spanObject('ง', 17), spanObject('บ', 18), spanObject('า', 19),
        spanObject('ง', 20), spanObject('ค', 21), spanObject('ร', 22), spanObject('า', 23),
        spanObject('ว', 24)])
  })
})