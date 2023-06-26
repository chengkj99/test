// import urlParams from '@/config/paramsFromURL'
const _ = require('lodash')

// TODO DELETE: MOCK DATA
const urlParams = {
  order_id: 'orderId_value',
  prepay_id: 'prepayId_value',
  product_line: 'product_line_value',
  coupon_extra_data: 'coupon_extra_data_value',
  extra_info: 'extra_info_value',
  rights_id: 'rights_id_value'
}

// 上报 Omage 相关参数 Map
const checkstandAttrMap = {
  orderId: 'order_id',
  prepayId: 'prepay_id',
  productLine: 'product_line',
  couponExtraData: 'coupon_extra_data',
  extraInfo: 'extra_info'
}
const noCheckstandAttrMap = {
  rightsId: 'rights_id',
  extraInfo: 'extra_info',
}

// 上报后端相关参数 Map
const checkstandAttrMapForHttp = {
  [checkstandAttrMap.orderId]: 'x-order-id',
  [checkstandAttrMap.prepayId]: 'x-prepay-id',
  [checkstandAttrMap.productLine]: 'x-product-ine',
  [checkstandAttrMap.couponExtraData]: 'x-coupon-extra-data',
  [checkstandAttrMap.extraInfo]: 'x-extra-info'
}
const noCheckstandAttrMapForHttp = {
  [noCheckstandAttrMap.rightsId]: 'x-rights-id',
  [noCheckstandAttrMap.extraInfo]: 'x-extra-info',
}

// 上报 Omage 相关参数
const checkstandAttrsForOmega = _.values(checkstandAttrMap)
const noCheckstandAttrsForOmega = _.values(noCheckstandAttrMap)

const attrList = [...checkstandAttrsForOmega, ...noCheckstandAttrsForOmega]

// 获取 Omage 参数值的函数
const getCheckstandAttrsForOmega = (baseAttrs) => {
  const attrs = _.pick(urlParams, baseAttrs)
  const valuableAttrs = _.pickBy(attrs)
  return valuableAttrs
}


// 获取上报后端参数值的函数
const getCheckstandAttrsForHttp = () => {
  const checkstandAttrs = getCheckstandAttrsForOmega(attrList)
  const checkstandAttrMap = {
    ...checkstandAttrMapForHttp,
    ...noCheckstandAttrMapForHttp
  }
  return _.keys(checkstandAttrs).reduce((pre, curKey) => {
    return {
      ...pre,
      [checkstandAttrMap[curKey]]: checkstandAttrs[curKey]
    }
  }, {})
}

console.log(':::', getCheckstandAttrsForHttp())
