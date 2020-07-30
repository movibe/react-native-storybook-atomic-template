import * as quality from './qualityAssurance'

describe('Quality Gate', () => {
  describe('assignTestId', () => {
    it('should test assignTestId', () => {
      quality.assignTestId('Modal', 'view')
      quality.assignTestId('ActivityIndicator', 'view')
    })

    it('should test assignTestId', () => {
      quality.assignTestId('Modal', 'view')
      quality.assignTestId('ImageBackground', 'view')
    })
  })

  describe('mockTestID', () => {
    it('should test MockId', () => {
      const id = quality.assignTestId('Modal', 'view').testID
      expect(quality.mockTestID('Modal', 'view').testID).toEqual(id)
    })
  })
})
