function excludeCommonModules(container1, container2) {
  // 使用 Set 数据结构来保存 container1 中的模块
  const moduleSet = new Set(container1);

  // 过滤 container2，保留不在 moduleSet 中的模块
  const result = container2.filter(module => !moduleSet.has(module));

  return result;
}

// 两个容器的示例数据
const fusionContainer = [
"XJCFLocation",
"DidipaySMModule",
"MapWebModule",
"DDMBridgeAdaptor",
"ONEGame",
"XPanelModule",
"SFCarModule",
"MultipleImagePicker",
"CashierBridgeModule",
"SafetyModule",
"XJCFImage",
"ImageBrowser",
"SafetyGodModule",
"DiFaceDetectionModule",
"ExpressOperation",
"FKInternalModule",
"DeviceprintFusionModule",
"TraceModule",
"XJCFGatewayRequest",
"BlackHorseBridge",
"WSGHybridModule",
"DADForceShowActivityModule",
"CarhailingModule",
"GreatWallModule",
"DidiBridgeAdapter",
"BTBridgeModule",
"DiDiOneCarModule",
"DRTCVOIPJSBridgeModule",
"SDidiBikeBridgeModule",
"DidiPayJSModule",
"BTBikeEndServiceModule",
"SRDFusionCommonBridgeModule",
];

const androidPaymentContainer = [
  "FKInternalModule",
  "SDidiBikeBridgeModule",
  "ManhattanModule",
  "BTBridgeModule",
  "SugPageModule",
  "CarhailingModule",
  "WebTitleModule",
  "DidipaySMModule",
  "GreatWallModule",
  "DRTCVOIPJSBridgeModule",
  "HebeBridgeModule",
  "SRDFusionCommonBridgeModule",
  "ImageBrowser",
  "BtsDidiBridgeAdapter",
  "SFCarModule",
  "WSGHybridModule",
  "DiDiDriverServiceModule",
  "PayModule",
  "BTBikeModule",
  "HttpModule",
  "DiFaceDetectionModule",
  "DiSliderVerifyModule",
  "ContactModule",
  "SDidiOfoBridgeModule",
  "SafetyModule",
  "XPanelModule",
  "XJCFGatewayRequest",
  "DADForceShowActivityModule",
  "TraceModule",
  "BTBikeEndServiceModule",
  "DidiBridgeAdapter",
  "SafetyGodModule",
  "OneSDKAccessSecurityModule",
  "FaceRecognizeModel",
  "VoIPModule",
  "DidiPayModule",
  "CashierBridgeModule",
  "StaticModule",
  "ShareModule",
  "BlackHorseBridge"
]

// 获取剔除公共模块后的结果
const result = excludeCommonModules(fusionContainer, androidPaymentContainer);

console.log(result);
