import { onShow } from '@dcloudio/uni-app' 

export default function useTabbar() {
  onShow(() => {
    uni.hideTabBar({
      animation: false
    })
  })
}