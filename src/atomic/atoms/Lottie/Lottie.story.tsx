import * as React from 'react'

import { Lottie } from '../../../atomic/atoms/Lottie'

const size = {
  width: 200,
  height: 200,
}

export default {
  title: 'Atoms/Lottie',
}

export const gift = () => <Lottie source={require('../../../assets/anim/gift.json')} loop autoPlay autoSize style={size} />
export const comment = () => <Lottie source={require('../../../assets/anim/comment.json')} loop autoPlay autoSize style={size} />
export const heart = () => <Lottie source={require('../../../assets/anim/heart.json')} loop autoPlay autoSize style={size} />
export const loaderColor = () => <Lottie source={require('../../../assets/anim/loader-color.json')} loop autoPlay autoSize style={size} />
export const loaderMap = () => <Lottie source={require('../../../assets/anim/loader-map.json')} loop autoPlay autoSize style={size} />
export const loaderMapStar = () => <Lottie source={require('../../../assets/anim/loader-map-star.json')} loop autoPlay autoSize style={size} />
export const loaderMessage = () => <Lottie source={require('../../../assets/anim/loader-message.json')} loop autoPlay autoSize style={size} />
export const loaderPoints = () => <Lottie source={require('../../../assets/anim/loader-points.json')} loop autoPlay autoSize style={size} />
export const loaderPoints2 = () => <Lottie source={require('../../../assets/anim/loader-points2.json')} loop autoPlay autoSize style={size} />
export const loaderPulse = () => <Lottie source={require('../../../assets/anim/loader-pulse.json')} loop autoPlay autoSize style={size} />
export const loaderSuccess = () => <Lottie source={require('../../../assets/anim/loader-success.json')} loop autoPlay autoSize style={size} />
export const loadingSearch = () => <Lottie source={require('../../../assets/anim/loading-search.json')} loop autoPlay autoSize style={size} />
export const stars = () => <Lottie source={require('../../../assets/anim/stars.json')} loop autoPlay autoSize style={size} />
export const upload = () => <Lottie source={require('../../../assets/anim/upload.json')} loop autoPlay autoSize style={size} />
