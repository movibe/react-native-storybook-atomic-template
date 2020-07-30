import * as format from './format'

describe('Format utils', () => {
  it('should format points', () => {
    expect(format.formatPoints('0')).toEqual('0')
    expect(format.formatPoints('10000')).toEqual('10.000')
    expect(format.formatPoints('100000')).toEqual('100.000')
    expect(format.formatPoints('0100000')).toEqual('100.000')
    expect(format.formatPoints('1000000')).toEqual('1.000.000')
    expect(format.formatPoints('01000000')).toEqual('1.000.000')
    expect(format.formatPoints('10000000')).toEqual('10.000.000')
    expect(format.formatPoints('0100000000')).toEqual('100.000.000')
    expect(format.formatPoints('1000000000')).toEqual('1.000.000.000')
  })
})
