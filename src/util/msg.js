/**
 * Created by CL on 2017/11/14.
 */
import {Toast, Indicator} from 'mint-ui';
export function toast_bm(str) {
  Toast({
    message: str,
    position: 'bottom',
    duration: 3000
  });
}

export function toast_md(str, icon) {
  Toast({
    message: str,
    iconClass: 'icon ' + icon
  });
}
export function loading() {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'double-bounce'
  });
}
export function close_load() {
  Indicator.close();
}

export function alert1(e,str) {
  e.$message(str)
}
