; (function (global) {
  const NativePromise = global['Promise']
  NativePromise['allSettled'] = global['Promise']['allSettled'] || function () {
    console.log('allSettled 实现')
  }
})(
  typeof window != 'undefined'
    ? window
    : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
        ? self
        : this
)
