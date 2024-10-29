var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.JointSpring' )
  var i1237 = data
  i1236.spring = i1237[0]
  i1236.damper = i1237[1]
  i1236.targetPosition = i1237[2]
  return i1236
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.JointMotor' )
  var i1239 = data
  i1238.m_TargetVelocity = i1239[0]
  i1238.m_Force = i1239[1]
  i1238.m_FreeSpin = i1239[2]
  return i1238
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.JointLimits' )
  var i1241 = data
  i1240.m_Min = i1241[0]
  i1240.m_Max = i1241[1]
  i1240.m_Bounciness = i1241[2]
  i1240.m_BounceMinVelocity = i1241[3]
  i1240.m_ContactDistance = i1241[4]
  i1240.minBounce = i1241[5]
  i1240.maxBounce = i1241[6]
  return i1240
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.JointDrive' )
  var i1243 = data
  i1242.m_PositionSpring = i1243[0]
  i1242.m_PositionDamper = i1243[1]
  i1242.m_MaximumForce = i1243[2]
  return i1242
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1245 = data
  i1244.m_Spring = i1245[0]
  i1244.m_Damper = i1245[1]
  return i1244
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1247 = data
  i1246.m_Limit = i1247[0]
  i1246.m_Bounciness = i1247[1]
  i1246.m_ContactDistance = i1247[2]
  return i1246
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1249 = data
  i1248.m_ExtremumSlip = i1249[0]
  i1248.m_ExtremumValue = i1249[1]
  i1248.m_AsymptoteSlip = i1249[2]
  i1248.m_AsymptoteValue = i1249[3]
  i1248.m_Stiffness = i1249[4]
  return i1248
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1251 = data
  i1250.m_LowerAngle = i1251[0]
  i1250.m_UpperAngle = i1251[1]
  return i1250
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1253 = data
  i1252.m_MotorSpeed = i1253[0]
  i1252.m_MaximumMotorTorque = i1253[1]
  return i1252
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1255 = data
  i1254.m_DampingRatio = i1255[0]
  i1254.m_Frequency = i1255[1]
  i1254.m_Angle = i1255[2]
  return i1254
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1257 = data
  i1256.m_LowerTranslation = i1257[0]
  i1256.m_UpperTranslation = i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1258 = root || new pc.UnityMaterial()
  var i1259 = data
  i1258.name = i1259[0]
  request.r(i1259[1], i1259[2], 0, i1258, 'shader')
  i1258.renderQueue = i1259[3]
  i1258.enableInstancing = !!i1259[4]
  var i1261 = i1259[5]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1261[i + 0]) );
  }
  i1258.floatParameters = i1260
  var i1263 = i1259[6]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1263[i + 0]) );
  }
  i1258.colorParameters = i1262
  var i1265 = i1259[7]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1265[i + 0]) );
  }
  i1258.vectorParameters = i1264
  var i1267 = i1259[8]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1267[i + 0]) );
  }
  i1258.textureParameters = i1266
  var i1269 = i1259[9]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1269[i + 0]) );
  }
  i1258.materialFlags = i1268
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.value = i1273[1]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1277 = data
  i1276.name = i1277[0]
  i1276.value = new pc.Color(i1277[1], i1277[2], i1277[3], i1277[4])
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1281 = data
  i1280.name = i1281[0]
  i1280.value = new pc.Vec4( i1281[1], i1281[2], i1281[3], i1281[4] )
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1285 = data
  i1284.name = i1285[0]
  request.r(i1285[1], i1285[2], 0, i1284, 'value')
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1289 = data
  i1288.name = i1289[0]
  i1288.enabled = !!i1289[1]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1291 = data
  i1290.name = i1291[0]
  i1290.width = i1291[1]
  i1290.height = i1291[2]
  i1290.mipmapCount = i1291[3]
  i1290.anisoLevel = i1291[4]
  i1290.filterMode = i1291[5]
  i1290.hdr = !!i1291[6]
  i1290.format = i1291[7]
  i1290.wrapMode = i1291[8]
  i1290.alphaIsTransparency = !!i1291[9]
  i1290.alphaSource = i1291[10]
  i1290.graphicsFormat = i1291[11]
  i1290.sRGBTexture = !!i1291[12]
  i1290.desiredColorSpace = i1291[13]
  i1290.wrapU = i1291[14]
  i1290.wrapV = i1291[15]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1293 = data
  i1292.position = new pc.Vec3( i1293[0], i1293[1], i1293[2] )
  i1292.scale = new pc.Vec3( i1293[3], i1293[4], i1293[5] )
  i1292.rotation = new pc.Quat(i1293[6], i1293[7], i1293[8], i1293[9])
  return i1292
}

Deserializers["Tile"] = function (request, data, root) {
  var i1294 = root || request.c( 'Tile' )
  var i1295 = data
  request.r(i1295[0], i1295[1], 0, i1294, 'icon')
  request.r(i1295[2], i1295[3], 0, i1294, 'disabledTile')
  var i1297 = i1295[4]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1297.length; i += 2) {
  request.r(i1297[i + 0], i1297[i + 1], 1, i1296, '')
  }
  i1294.coverTiles = i1296
  request.r(i1295[5], i1295[6], 0, i1294, 'background')
  i1294.defaultSize = new pc.Vec3( i1295[7], i1295[8], i1295[9] )
  i1294.speed = i1295[10]
  i1294.spawnAnimSize = i1295[11]
  i1294.spawnAnimDuration = i1295[12]
  i1294.moveDuration = i1295[13]
  i1294._isClickable = !!i1295[14]
  i1294.IsInit = !!i1295[15]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1301 = data
  i1300.radius = i1301[0]
  i1300.enabled = !!i1301[1]
  i1300.isTrigger = !!i1301[2]
  i1300.usedByEffector = !!i1301[3]
  i1300.density = i1301[4]
  i1300.offset = new pc.Vec2( i1301[5], i1301[6] )
  request.r(i1301[7], i1301[8], 0, i1300, 'material')
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1303 = data
  i1302.enabled = !!i1303[0]
  request.r(i1303[1], i1303[2], 0, i1302, 'sharedMaterial')
  var i1305 = i1303[3]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 2, i1304, '')
  }
  i1302.sharedMaterials = i1304
  i1302.receiveShadows = !!i1303[4]
  i1302.shadowCastingMode = i1303[5]
  i1302.sortingLayerID = i1303[6]
  i1302.sortingOrder = i1303[7]
  i1302.lightmapIndex = i1303[8]
  i1302.lightmapSceneIndex = i1303[9]
  i1302.lightmapScaleOffset = new pc.Vec4( i1303[10], i1303[11], i1303[12], i1303[13] )
  i1302.lightProbeUsage = i1303[14]
  i1302.reflectionProbeUsage = i1303[15]
  i1302.color = new pc.Color(i1303[16], i1303[17], i1303[18], i1303[19])
  request.r(i1303[20], i1303[21], 0, i1302, 'sprite')
  i1302.flipX = !!i1303[22]
  i1302.flipY = !!i1303[23]
  i1302.drawMode = i1303[24]
  i1302.size = new pc.Vec2( i1303[25], i1303[26] )
  i1302.tileMode = i1303[27]
  i1302.adaptiveModeThreshold = i1303[28]
  i1302.maskInteraction = i1303[29]
  i1302.spriteSortPoint = i1303[30]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1309 = data
  i1308.name = i1309[0]
  i1308.tagId = i1309[1]
  i1308.enabled = !!i1309[2]
  i1308.isStatic = !!i1309[3]
  i1308.layer = i1309[4]
  return i1308
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i1310 = root || request.c( 'TileSlot' )
  var i1311 = data
  i1310.ID = i1311[0]
  request.r(i1311[1], i1311[2], 0, i1310, 'Tile')
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.index = i1313[1]
  i1312.startup = !!i1313[2]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1315 = data
  i1314.enabled = !!i1315[0]
  i1314.aspect = i1315[1]
  i1314.orthographic = !!i1315[2]
  i1314.orthographicSize = i1315[3]
  i1314.backgroundColor = new pc.Color(i1315[4], i1315[5], i1315[6], i1315[7])
  i1314.nearClipPlane = i1315[8]
  i1314.farClipPlane = i1315[9]
  i1314.fieldOfView = i1315[10]
  i1314.depth = i1315[11]
  i1314.clearFlags = i1315[12]
  i1314.cullingMask = i1315[13]
  i1314.rect = i1315[14]
  request.r(i1315[15], i1315[16], 0, i1314, 'targetTexture')
  i1314.usePhysicalProperties = !!i1315[17]
  i1314.focalLength = i1315[18]
  i1314.sensorSize = new pc.Vec2( i1315[19], i1315[20] )
  i1314.lensShift = new pc.Vec2( i1315[21], i1315[22] )
  i1314.gateFit = i1315[23]
  return i1314
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1317 = data
  request.r(i1317[0], i1317[1], 0, i1316, 'm_FirstSelected')
  i1316.m_sendNavigationEvents = !!i1317[2]
  i1316.m_DragThreshold = i1317[3]
  return i1316
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1319 = data
  i1318.m_HorizontalAxis = i1319[0]
  i1318.m_VerticalAxis = i1319[1]
  i1318.m_SubmitButton = i1319[2]
  i1318.m_CancelButton = i1319[3]
  i1318.m_InputActionsPerSecond = i1319[4]
  i1318.m_RepeatDelay = i1319[5]
  i1318.m_ForceModuleActive = !!i1319[6]
  i1318.m_SendPointerHoverToParent = !!i1319[7]
  return i1318
}

Deserializers["Game"] = function (request, data, root) {
  var i1320 = root || request.c( 'Game' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'deck')
  request.r(i1321[2], i1321[3], 0, i1320, 'spawnRandom')
  request.r(i1321[4], i1321[5], 0, i1320, 'actions')
  request.r(i1321[6], i1321[7], 0, i1320, 'locker')
  request.r(i1321[8], i1321[9], 0, i1320, 'bag')
  request.r(i1321[10], i1321[11], 0, i1320, 'spawnAnimation')
  request.r(i1321[12], i1321[13], 0, i1320, 'matchCondition')
  request.r(i1321[14], i1321[15], 0, i1320, 'loseCondition')
  request.r(i1321[16], i1321[17], 0, i1320, 'winCondition')
  request.r(i1321[18], i1321[19], 0, i1320, 'input')
  i1320.tileToSpawn = i1321[20]
  i1320.tilesInScene = i1321[21]
  i1320.randomTiles = !!i1321[22]
  var i1323 = i1321[23]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1323.length; i += 2) {
  request.r(i1323[i + 0], i1323[i + 1], 1, i1322, '')
  }
  i1320.tiles = i1322
  return i1320
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i1324 = root || request.c( 'TileSpawner' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'prefab')
  var i1327 = i1325[2]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 1, i1326, '')
  }
  i1324.spawned = i1326
  i1324.hideAtSpawn = !!i1325[3]
  i1324.spawnRate = i1325[4]
  var i1329 = i1325[5]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('TileData', i1329[i + 0]));
  }
  i1324.level = i1328
  return i1324
}

Deserializers["TileData"] = function (request, data, root) {
  var i1332 = root || request.c( 'TileData' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'tile')
  i1332.amount = i1333[2]
  return i1332
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i1334 = root || request.c( 'TileRandomSpawner' )
  var i1335 = data
  i1334.spawnRate = i1335[0]
  var i1337 = i1335[1]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 1, i1336, '')
  }
  i1334.spawned = i1336
  var i1339 = i1335[2]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.add(request.d('TileData', i1339[i + 0]));
  }
  i1334.level = i1338
  return i1334
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i1340 = root || request.c( 'TileSpawnAnimation' )
  var i1341 = data
  i1340.delayBetweenLines = i1341[0]
  i1340.delayBetweenTiles = i1341[1]
  i1340.delayBetweenLayers = i1341[2]
  return i1340
}

Deserializers["TileActions"] = function (request, data, root) {
  var i1342 = root || request.c( 'TileActions' )
  var i1343 = data
  return i1342
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i1344 = root || request.c( 'TileLocker' )
  var i1345 = data
  i1344.lockDistance = i1345[0]
  return i1344
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i1346 = root || request.c( 'LoseCondition' )
  var i1347 = data
  return i1346
}

Deserializers["MatchCondition"] = function (request, data, root) {
  var i1348 = root || request.c( 'MatchCondition' )
  var i1349 = data
  var i1351 = i1349[0]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1351.length; i += 2) {
  request.r(i1351[i + 0], i1351[i + 1], 1, i1350, '')
  }
  i1348.completeSlots = i1350
  return i1348
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i1352 = root || request.c( 'WinCondition' )
  var i1353 = data
  var i1355 = i1353[0]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1352.completeSlots = i1354
  return i1352
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i1356 = root || request.c( 'InputTouch' )
  var i1357 = data
  var i1359 = i1357[0]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1359.length; i += 2) {
    i1358.add(new pc.Vec2( i1359[i + 0], i1359[i + 1] ));
  }
  i1356.touches = i1358
  i1356.touchSize = i1357[1]
  return i1356
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i1362 = root || request.c( 'TileBagSorter' )
  var i1363 = data
  i1362.enable = !!i1363[0]
  i1362.intervalSec = i1363[1]
  return i1362
}

Deserializers["EndCard"] = function (request, data, root) {
  var i1364 = root || request.c( 'EndCard' )
  var i1365 = data
  return i1364
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i1366 = root || request.c( 'TilesBag' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i1369.length; i += 2) {
  request.r(i1369[i + 0], i1369[i + 1], 1, i1368, '')
  }
  i1366.slots = i1368
  return i1366
}

Deserializers["Deck"] = function (request, data, root) {
  var i1372 = root || request.c( 'Deck' )
  var i1373 = data
  return i1372
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i1374 = root || request.c( 'DeckLayer' )
  var i1375 = data
  i1374.layer = i1375[0]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1377 = data
  i1376.pivot = new pc.Vec2( i1377[0], i1377[1] )
  i1376.anchorMin = new pc.Vec2( i1377[2], i1377[3] )
  i1376.anchorMax = new pc.Vec2( i1377[4], i1377[5] )
  i1376.sizeDelta = new pc.Vec2( i1377[6], i1377[7] )
  i1376.anchoredPosition3D = new pc.Vec3( i1377[8], i1377[9], i1377[10] )
  i1376.rotation = new pc.Quat(i1377[11], i1377[12], i1377[13], i1377[14])
  i1376.scale = new pc.Vec3( i1377[15], i1377[16], i1377[17] )
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1379 = data
  i1378.enabled = !!i1379[0]
  i1378.planeDistance = i1379[1]
  i1378.referencePixelsPerUnit = i1379[2]
  i1378.isFallbackOverlay = !!i1379[3]
  i1378.renderMode = i1379[4]
  i1378.renderOrder = i1379[5]
  i1378.sortingLayerName = i1379[6]
  i1378.sortingOrder = i1379[7]
  i1378.scaleFactor = i1379[8]
  request.r(i1379[9], i1379[10], 0, i1378, 'worldCamera')
  i1378.overrideSorting = !!i1379[11]
  i1378.pixelPerfect = !!i1379[12]
  i1378.targetDisplay = i1379[13]
  i1378.overridePixelPerfect = !!i1379[14]
  return i1378
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1381 = data
  i1380.m_UiScaleMode = i1381[0]
  i1380.m_ReferencePixelsPerUnit = i1381[1]
  i1380.m_ScaleFactor = i1381[2]
  i1380.m_ReferenceResolution = new pc.Vec2( i1381[3], i1381[4] )
  i1380.m_ScreenMatchMode = i1381[5]
  i1380.m_MatchWidthOrHeight = i1381[6]
  i1380.m_PhysicalUnit = i1381[7]
  i1380.m_FallbackScreenDPI = i1381[8]
  i1380.m_DefaultSpriteDPI = i1381[9]
  i1380.m_DynamicPixelsPerUnit = i1381[10]
  i1380.m_PresetInfoIsWorld = !!i1381[11]
  return i1380
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1383 = data
  i1382.m_IgnoreReversedGraphics = !!i1383[0]
  i1382.m_BlockingObjects = i1383[1]
  i1382.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1383[2] )
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1385 = data
  i1384.cullTransparentMesh = !!i1385[0]
  return i1384
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.UI.Image' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'm_Sprite')
  i1386.m_Type = i1387[2]
  i1386.m_PreserveAspect = !!i1387[3]
  i1386.m_FillCenter = !!i1387[4]
  i1386.m_FillMethod = i1387[5]
  i1386.m_FillAmount = i1387[6]
  i1386.m_FillClockwise = !!i1387[7]
  i1386.m_FillOrigin = i1387[8]
  i1386.m_UseSpriteMesh = !!i1387[9]
  i1386.m_PixelsPerUnitMultiplier = i1387[10]
  request.r(i1387[11], i1387[12], 0, i1386, 'm_Material')
  i1386.m_Maskable = !!i1387[13]
  i1386.m_Color = new pc.Color(i1387[14], i1387[15], i1387[16], i1387[17])
  i1386.m_RaycastTarget = !!i1387[18]
  i1386.m_RaycastPadding = new pc.Vec4( i1387[19], i1387[20], i1387[21], i1387[22] )
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1389 = data
  i1388.ambientIntensity = i1389[0]
  i1388.reflectionIntensity = i1389[1]
  i1388.ambientMode = i1389[2]
  i1388.ambientLight = new pc.Color(i1389[3], i1389[4], i1389[5], i1389[6])
  i1388.ambientSkyColor = new pc.Color(i1389[7], i1389[8], i1389[9], i1389[10])
  i1388.ambientGroundColor = new pc.Color(i1389[11], i1389[12], i1389[13], i1389[14])
  i1388.ambientEquatorColor = new pc.Color(i1389[15], i1389[16], i1389[17], i1389[18])
  i1388.fogColor = new pc.Color(i1389[19], i1389[20], i1389[21], i1389[22])
  i1388.fogEndDistance = i1389[23]
  i1388.fogStartDistance = i1389[24]
  i1388.fogDensity = i1389[25]
  i1388.fog = !!i1389[26]
  request.r(i1389[27], i1389[28], 0, i1388, 'skybox')
  i1388.fogMode = i1389[29]
  var i1391 = i1389[30]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1391[i + 0]) );
  }
  i1388.lightmaps = i1390
  i1388.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1389[31], i1388.lightProbes)
  i1388.lightmapsMode = i1389[32]
  i1388.mixedBakeMode = i1389[33]
  i1388.environmentLightingMode = i1389[34]
  i1388.ambientProbe = new pc.SphericalHarmonicsL2(i1389[35])
  i1388.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1389[36])
  i1388.useReferenceAmbientProbe = !!i1389[37]
  request.r(i1389[38], i1389[39], 0, i1388, 'customReflection')
  request.r(i1389[40], i1389[41], 0, i1388, 'defaultReflection')
  i1388.defaultReflectionMode = i1389[42]
  i1388.defaultReflectionResolution = i1389[43]
  i1388.sunLightObjectId = i1389[44]
  i1388.pixelLightCount = i1389[45]
  i1388.defaultReflectionHDR = !!i1389[46]
  i1388.hasLightDataAsset = !!i1389[47]
  i1388.hasManualGenerate = !!i1389[48]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'lightmapColor')
  request.r(i1395[2], i1395[3], 0, i1394, 'lightmapDirection')
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1396 = root || new UnityEngine.LightProbes()
  var i1397 = data
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1405 = data
  var i1407 = i1405[0]
  var i1406 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1407[i + 0]));
  }
  i1404.ShaderCompilationErrors = i1406
  i1404.name = i1405[1]
  i1404.guid = i1405[2]
  var i1409 = i1405[3]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( i1409[i + 0] );
  }
  i1404.shaderDefinedKeywords = i1408
  var i1411 = i1405[4]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1411[i + 0]) );
  }
  i1404.passes = i1410
  var i1413 = i1405[5]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1413[i + 0]) );
  }
  i1404.usePasses = i1412
  var i1415 = i1405[6]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1415[i + 0]) );
  }
  i1404.defaultParameterValues = i1414
  request.r(i1405[7], i1405[8], 0, i1404, 'unityFallbackShader')
  i1404.readDepth = !!i1405[9]
  i1404.isCreatedByShaderGraph = !!i1405[10]
  i1404.usedBatchUniforms = i1405[11]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1419 = data
  i1418.shaderName = i1419[0]
  i1418.errorMessage = i1419[1]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1424 = root || new pc.UnityShaderPass()
  var i1425 = data
  i1424.id = i1425[0]
  i1424.subShaderIndex = i1425[1]
  i1424.name = i1425[2]
  i1424.passType = i1425[3]
  i1424.grabPassTextureName = i1425[4]
  i1424.usePass = !!i1425[5]
  i1424.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[6], i1424.zTest)
  i1424.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[7], i1424.zWrite)
  i1424.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[8], i1424.culling)
  i1424.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1425[9], i1424.blending)
  i1424.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1425[10], i1424.alphaBlending)
  i1424.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[11], i1424.colorWriteMask)
  i1424.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[12], i1424.offsetUnits)
  i1424.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[13], i1424.offsetFactor)
  i1424.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[14], i1424.stencilRef)
  i1424.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[15], i1424.stencilReadMask)
  i1424.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[16], i1424.stencilWriteMask)
  i1424.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1425[17], i1424.stencilOp)
  i1424.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1425[18], i1424.stencilOpFront)
  i1424.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1425[19], i1424.stencilOpBack)
  var i1427 = i1425[20]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1427[i + 0]) );
  }
  i1424.tags = i1426
  var i1429 = i1425[21]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( i1429[i + 0] );
  }
  i1424.passDefinedKeywords = i1428
  var i1431 = i1425[22]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1431[i + 0]) );
  }
  i1424.passDefinedKeywordGroups = i1430
  var i1433 = i1425[23]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1433[i + 0]) );
  }
  i1424.variants = i1432
  var i1435 = i1425[24]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1435[i + 0]) );
  }
  i1424.excludedVariants = i1434
  i1424.hasDepthReader = !!i1425[25]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1437 = data
  i1436.val = i1437[0]
  i1436.name = i1437[1]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1439 = data
  i1438.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1439[0], i1438.src)
  i1438.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1439[1], i1438.dst)
  i1438.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1439[2], i1438.op)
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1441 = data
  i1440.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[0], i1440.pass)
  i1440.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[1], i1440.fail)
  i1440.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[2], i1440.zFail)
  i1440.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[3], i1440.comp)
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.value = i1445[1]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1449 = data
  var i1451 = i1449[0]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1448.keywords = i1450
  i1448.hasDiscard = !!i1449[1]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1455 = data
  i1454.passId = i1455[0]
  i1454.subShaderIndex = i1455[1]
  var i1457 = i1455[2]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( i1457[i + 0] );
  }
  i1454.keywords = i1456
  i1454.vertexProgram = i1455[3]
  i1454.fragmentProgram = i1455[4]
  i1454.compiledForWebGL2 = !!i1455[5]
  i1454.readDepth = !!i1455[6]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1461 = data
  request.r(i1461[0], i1461[1], 0, i1460, 'shader')
  i1460.pass = i1461[2]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.type = i1465[1]
  i1464.value = new pc.Vec4( i1465[2], i1465[3], i1465[4], i1465[5] )
  i1464.textureValue = i1465[6]
  i1464.shaderPropertyFlag = i1465[7]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1467 = data
  i1466.name = i1467[0]
  request.r(i1467[1], i1467[2], 0, i1466, 'texture')
  i1466.aabb = i1467[3]
  i1466.vertices = i1467[4]
  i1466.triangles = i1467[5]
  i1466.textureRect = UnityEngine.Rect.MinMaxRect(i1467[6], i1467[7], i1467[8], i1467[9])
  i1466.packedRect = UnityEngine.Rect.MinMaxRect(i1467[10], i1467[11], i1467[12], i1467[13])
  i1466.border = new pc.Vec4( i1467[14], i1467[15], i1467[16], i1467[17] )
  i1466.transparency = i1467[18]
  i1466.bounds = i1467[19]
  i1466.pixelsPerUnit = i1467[20]
  i1466.textureWidth = i1467[21]
  i1466.textureHeight = i1467[22]
  i1466.nativeSize = new pc.Vec2( i1467[23], i1467[24] )
  i1466.pivot = new pc.Vec2( i1467[25], i1467[26] )
  i1466.textureRectOffset = new pc.Vec2( i1467[27], i1467[28] )
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.ascent = i1469[1]
  i1468.originalLineHeight = i1469[2]
  i1468.fontSize = i1469[3]
  var i1471 = i1469[4]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1471[i + 0]) );
  }
  i1468.characterInfo = i1470
  request.r(i1469[5], i1469[6], 0, i1468, 'texture')
  i1468.originalFontSize = i1469[7]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1475 = data
  i1474.index = i1475[0]
  i1474.advance = i1475[1]
  i1474.bearing = i1475[2]
  i1474.glyphWidth = i1475[3]
  i1474.glyphHeight = i1475[4]
  i1474.minX = i1475[5]
  i1474.maxX = i1475[6]
  i1474.minY = i1475[7]
  i1474.maxY = i1475[8]
  i1474.uvBottomLeftX = i1475[9]
  i1474.uvBottomLeftY = i1475[10]
  i1474.uvBottomRightX = i1475[11]
  i1474.uvBottomRightY = i1475[12]
  i1474.uvTopLeftX = i1475[13]
  i1474.uvTopLeftY = i1475[14]
  i1474.uvTopRightX = i1475[15]
  i1474.uvTopRightY = i1475[16]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1477 = data
  i1476.name = i1477[0]
  i1476.bytes64 = i1477[1]
  i1476.data = i1477[2]
  return i1476
}

Deserializers["TileSO"] = function (request, data, root) {
  var i1478 = root || request.c( 'TileSO' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'icon')
  return i1478
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1480 = root || request.c( 'TMPro.TMP_Settings' )
  var i1481 = data
  i1480.m_enableWordWrapping = !!i1481[0]
  i1480.m_enableKerning = !!i1481[1]
  i1480.m_enableExtraPadding = !!i1481[2]
  i1480.m_enableTintAllSprites = !!i1481[3]
  i1480.m_enableParseEscapeCharacters = !!i1481[4]
  i1480.m_EnableRaycastTarget = !!i1481[5]
  i1480.m_GetFontFeaturesAtRuntime = !!i1481[6]
  i1480.m_missingGlyphCharacter = i1481[7]
  i1480.m_warningsDisabled = !!i1481[8]
  request.r(i1481[9], i1481[10], 0, i1480, 'm_defaultFontAsset')
  i1480.m_defaultFontAssetPath = i1481[11]
  i1480.m_defaultFontSize = i1481[12]
  i1480.m_defaultAutoSizeMinRatio = i1481[13]
  i1480.m_defaultAutoSizeMaxRatio = i1481[14]
  i1480.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1481[15], i1481[16] )
  i1480.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1481[17], i1481[18] )
  i1480.m_autoSizeTextContainer = !!i1481[19]
  i1480.m_IsTextObjectScaleStatic = !!i1481[20]
  var i1483 = i1481[21]
  var i1482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1483.length; i += 2) {
  request.r(i1483[i + 0], i1483[i + 1], 1, i1482, '')
  }
  i1480.m_fallbackFontAssets = i1482
  i1480.m_matchMaterialPreset = !!i1481[22]
  request.r(i1481[23], i1481[24], 0, i1480, 'm_defaultSpriteAsset')
  i1480.m_defaultSpriteAssetPath = i1481[25]
  i1480.m_enableEmojiSupport = !!i1481[26]
  i1480.m_MissingCharacterSpriteUnicode = i1481[27]
  i1480.m_defaultColorGradientPresetsPath = i1481[28]
  request.r(i1481[29], i1481[30], 0, i1480, 'm_defaultStyleSheet')
  i1480.m_StyleSheetsResourcePath = i1481[31]
  request.r(i1481[32], i1481[33], 0, i1480, 'm_leadingCharacters')
  request.r(i1481[34], i1481[35], 0, i1480, 'm_followingCharacters')
  i1480.m_UseModernHangulLineBreakingRules = !!i1481[36]
  return i1480
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1486 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1487 = data
  i1486.hashCode = i1487[0]
  request.r(i1487[1], i1487[2], 0, i1486, 'material')
  i1486.materialHashCode = i1487[3]
  request.r(i1487[4], i1487[5], 0, i1486, 'atlas')
  i1486.normalStyle = i1487[6]
  i1486.normalSpacingOffset = i1487[7]
  i1486.boldStyle = i1487[8]
  i1486.boldSpacing = i1487[9]
  i1486.italicStyle = i1487[10]
  i1486.tabSize = i1487[11]
  i1486.m_Version = i1487[12]
  i1486.m_SourceFontFileGUID = i1487[13]
  request.r(i1487[14], i1487[15], 0, i1486, 'm_SourceFontFile_EditorRef')
  request.r(i1487[16], i1487[17], 0, i1486, 'm_SourceFontFile')
  i1486.m_AtlasPopulationMode = i1487[18]
  i1486.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1487[19], i1486.m_FaceInfo)
  var i1489 = i1487[20]
  var i1488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.add(request.d('UnityEngine.TextCore.Glyph', i1489[i + 0]));
  }
  i1486.m_GlyphTable = i1488
  var i1491 = i1487[21]
  var i1490 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.add(request.d('TMPro.TMP_Character', i1491[i + 0]));
  }
  i1486.m_CharacterTable = i1490
  var i1493 = i1487[22]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 2) {
  request.r(i1493[i + 0], i1493[i + 1], 2, i1492, '')
  }
  i1486.m_AtlasTextures = i1492
  i1486.m_AtlasTextureIndex = i1487[23]
  i1486.m_IsMultiAtlasTexturesEnabled = !!i1487[24]
  i1486.m_ClearDynamicDataOnBuild = !!i1487[25]
  var i1495 = i1487[26]
  var i1494 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.add(request.d('UnityEngine.TextCore.GlyphRect', i1495[i + 0]));
  }
  i1486.m_UsedGlyphRects = i1494
  var i1497 = i1487[27]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('UnityEngine.TextCore.GlyphRect', i1497[i + 0]));
  }
  i1486.m_FreeGlyphRects = i1496
  i1486.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1487[28], i1486.m_fontInfo)
  i1486.m_AtlasWidth = i1487[29]
  i1486.m_AtlasHeight = i1487[30]
  i1486.m_AtlasPadding = i1487[31]
  i1486.m_AtlasRenderMode = i1487[32]
  var i1499 = i1487[33]
  var i1498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.add(request.d('TMPro.TMP_Glyph', i1499[i + 0]));
  }
  i1486.m_glyphInfoList = i1498
  i1486.m_KerningTable = request.d('TMPro.KerningTable', i1487[34], i1486.m_KerningTable)
  i1486.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1487[35], i1486.m_FontFeatureTable)
  var i1501 = i1487[36]
  var i1500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1501.length; i += 2) {
  request.r(i1501[i + 0], i1501[i + 1], 1, i1500, '')
  }
  i1486.fallbackFontAssets = i1500
  var i1503 = i1487[37]
  var i1502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1503.length; i += 2) {
  request.r(i1503[i + 0], i1503[i + 1], 1, i1502, '')
  }
  i1486.m_FallbackFontAssetTable = i1502
  i1486.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1487[38], i1486.m_CreationSettings)
  var i1505 = i1487[39]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('TMPro.TMP_FontWeightPair', i1505[i + 0]) );
  }
  i1486.m_FontWeightTable = i1504
  var i1507 = i1487[40]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('TMPro.TMP_FontWeightPair', i1507[i + 0]) );
  }
  i1486.fontWeights = i1506
  return i1486
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1509 = data
  i1508.m_FaceIndex = i1509[0]
  i1508.m_FamilyName = i1509[1]
  i1508.m_StyleName = i1509[2]
  i1508.m_PointSize = i1509[3]
  i1508.m_Scale = i1509[4]
  i1508.m_UnitsPerEM = i1509[5]
  i1508.m_LineHeight = i1509[6]
  i1508.m_AscentLine = i1509[7]
  i1508.m_CapLine = i1509[8]
  i1508.m_MeanLine = i1509[9]
  i1508.m_Baseline = i1509[10]
  i1508.m_DescentLine = i1509[11]
  i1508.m_SuperscriptOffset = i1509[12]
  i1508.m_SuperscriptSize = i1509[13]
  i1508.m_SubscriptOffset = i1509[14]
  i1508.m_SubscriptSize = i1509[15]
  i1508.m_UnderlineOffset = i1509[16]
  i1508.m_UnderlineThickness = i1509[17]
  i1508.m_StrikethroughOffset = i1509[18]
  i1508.m_StrikethroughThickness = i1509[19]
  i1508.m_TabWidth = i1509[20]
  return i1508
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1513 = data
  i1512.m_Index = i1513[0]
  i1512.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1513[1], i1512.m_Metrics)
  i1512.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1513[2], i1512.m_GlyphRect)
  i1512.m_Scale = i1513[3]
  i1512.m_AtlasIndex = i1513[4]
  i1512.m_ClassDefinitionType = i1513[5]
  return i1512
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1515 = data
  i1514.m_Width = i1515[0]
  i1514.m_Height = i1515[1]
  i1514.m_HorizontalBearingX = i1515[2]
  i1514.m_HorizontalBearingY = i1515[3]
  i1514.m_HorizontalAdvance = i1515[4]
  return i1514
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1517 = data
  i1516.m_X = i1517[0]
  i1516.m_Y = i1517[1]
  i1516.m_Width = i1517[2]
  i1516.m_Height = i1517[3]
  return i1516
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1520 = root || request.c( 'TMPro.TMP_Character' )
  var i1521 = data
  i1520.m_ElementType = i1521[0]
  i1520.m_Unicode = i1521[1]
  i1520.m_GlyphIndex = i1521[2]
  i1520.m_Scale = i1521[3]
  return i1520
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1526 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1527 = data
  i1526.Name = i1527[0]
  i1526.PointSize = i1527[1]
  i1526.Scale = i1527[2]
  i1526.CharacterCount = i1527[3]
  i1526.LineHeight = i1527[4]
  i1526.Baseline = i1527[5]
  i1526.Ascender = i1527[6]
  i1526.CapHeight = i1527[7]
  i1526.Descender = i1527[8]
  i1526.CenterLine = i1527[9]
  i1526.SuperscriptOffset = i1527[10]
  i1526.SubscriptOffset = i1527[11]
  i1526.SubSize = i1527[12]
  i1526.Underline = i1527[13]
  i1526.UnderlineThickness = i1527[14]
  i1526.strikethrough = i1527[15]
  i1526.strikethroughThickness = i1527[16]
  i1526.TabWidth = i1527[17]
  i1526.Padding = i1527[18]
  i1526.AtlasWidth = i1527[19]
  i1526.AtlasHeight = i1527[20]
  return i1526
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1531 = data
  i1530.id = i1531[0]
  i1530.x = i1531[1]
  i1530.y = i1531[2]
  i1530.width = i1531[3]
  i1530.height = i1531[4]
  i1530.xOffset = i1531[5]
  i1530.yOffset = i1531[6]
  i1530.xAdvance = i1531[7]
  i1530.scale = i1531[8]
  return i1530
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1532 = root || request.c( 'TMPro.KerningTable' )
  var i1533 = data
  var i1535 = i1533[0]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.add(request.d('TMPro.KerningPair', i1535[i + 0]));
  }
  i1532.kerningPairs = i1534
  return i1532
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1538 = root || request.c( 'TMPro.KerningPair' )
  var i1539 = data
  i1538.xOffset = i1539[0]
  i1538.m_FirstGlyph = i1539[1]
  i1538.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1539[2], i1538.m_FirstGlyphAdjustments)
  i1538.m_SecondGlyph = i1539[3]
  i1538.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1539[4], i1538.m_SecondGlyphAdjustments)
  i1538.m_IgnoreSpacingAdjustments = !!i1539[5]
  return i1538
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1540 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1543[i + 0]));
  }
  i1540.m_GlyphPairAdjustmentRecords = i1542
  return i1540
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1546 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1547 = data
  i1546.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1547[0], i1546.m_FirstAdjustmentRecord)
  i1546.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1547[1], i1546.m_SecondAdjustmentRecord)
  i1546.m_FeatureLookupFlags = i1547[2]
  return i1546
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1548 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1549 = data
  i1548.m_GlyphIndex = i1549[0]
  i1548.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1549[1], i1548.m_GlyphValueRecord)
  return i1548
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1550 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1551 = data
  i1550.m_XPlacement = i1551[0]
  i1550.m_YPlacement = i1551[1]
  i1550.m_XAdvance = i1551[2]
  i1550.m_YAdvance = i1551[3]
  return i1550
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1552 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1553 = data
  i1552.sourceFontFileName = i1553[0]
  i1552.sourceFontFileGUID = i1553[1]
  i1552.pointSizeSamplingMode = i1553[2]
  i1552.pointSize = i1553[3]
  i1552.padding = i1553[4]
  i1552.packingMode = i1553[5]
  i1552.atlasWidth = i1553[6]
  i1552.atlasHeight = i1553[7]
  i1552.characterSetSelectionMode = i1553[8]
  i1552.characterSequence = i1553[9]
  i1552.referencedFontAssetGUID = i1553[10]
  i1552.referencedTextAssetGUID = i1553[11]
  i1552.fontStyle = i1553[12]
  i1552.fontStyleModifier = i1553[13]
  i1552.renderMode = i1553[14]
  i1552.includeFontFeatures = !!i1553[15]
  return i1552
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1556 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'regularTypeface')
  request.r(i1557[2], i1557[3], 0, i1556, 'italicTypeface')
  return i1556
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1558 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1559 = data
  i1558.hashCode = i1559[0]
  request.r(i1559[1], i1559[2], 0, i1558, 'material')
  i1558.materialHashCode = i1559[3]
  request.r(i1559[4], i1559[5], 0, i1558, 'spriteSheet')
  var i1561 = i1559[6]
  var i1560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.add(request.d('TMPro.TMP_Sprite', i1561[i + 0]));
  }
  i1558.spriteInfoList = i1560
  var i1563 = i1559[7]
  var i1562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1563.length; i += 2) {
  request.r(i1563[i + 0], i1563[i + 1], 1, i1562, '')
  }
  i1558.fallbackSpriteAssets = i1562
  i1558.m_Version = i1559[8]
  i1558.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1559[9], i1558.m_FaceInfo)
  var i1565 = i1559[10]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.add(request.d('TMPro.TMP_SpriteCharacter', i1565[i + 0]));
  }
  i1558.m_SpriteCharacterTable = i1564
  var i1567 = i1559[11]
  var i1566 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.add(request.d('TMPro.TMP_SpriteGlyph', i1567[i + 0]));
  }
  i1558.m_SpriteGlyphTable = i1566
  return i1558
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1570 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1571 = data
  i1570.name = i1571[0]
  i1570.hashCode = i1571[1]
  i1570.unicode = i1571[2]
  i1570.pivot = new pc.Vec2( i1571[3], i1571[4] )
  request.r(i1571[5], i1571[6], 0, i1570, 'sprite')
  i1570.id = i1571[7]
  i1570.x = i1571[8]
  i1570.y = i1571[9]
  i1570.width = i1571[10]
  i1570.height = i1571[11]
  i1570.xOffset = i1571[12]
  i1570.yOffset = i1571[13]
  i1570.xAdvance = i1571[14]
  i1570.scale = i1571[15]
  return i1570
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1576 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1577 = data
  i1576.m_Name = i1577[0]
  i1576.m_HashCode = i1577[1]
  i1576.m_ElementType = i1577[2]
  i1576.m_Unicode = i1577[3]
  i1576.m_GlyphIndex = i1577[4]
  i1576.m_Scale = i1577[5]
  return i1576
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1580 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'sprite')
  i1580.m_Index = i1581[2]
  i1580.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1581[3], i1580.m_Metrics)
  i1580.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1581[4], i1580.m_GlyphRect)
  i1580.m_Scale = i1581[5]
  i1580.m_AtlasIndex = i1581[6]
  i1580.m_ClassDefinitionType = i1581[7]
  return i1580
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1582 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1583 = data
  var i1585 = i1583[0]
  var i1584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.add(request.d('TMPro.TMP_Style', i1585[i + 0]));
  }
  i1582.m_StyleList = i1584
  return i1582
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1588 = root || request.c( 'TMPro.TMP_Style' )
  var i1589 = data
  i1588.m_Name = i1589[0]
  i1588.m_HashCode = i1589[1]
  i1588.m_OpeningDefinition = i1589[2]
  i1588.m_ClosingDefinition = i1589[3]
  i1588.m_OpeningTagArray = i1589[4]
  i1588.m_ClosingTagArray = i1589[5]
  i1588.m_OpeningTagUnicodeArray = i1589[6]
  i1588.m_ClosingTagUnicodeArray = i1589[7]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1591 = data
  var i1593 = i1591[0]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1593[i + 0]) );
  }
  i1590.files = i1592
  i1590.componentToPrefabIds = i1591[1]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1597 = data
  i1596.path = i1597[0]
  request.r(i1597[1], i1597[2], 0, i1596, 'unityObject')
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1599 = data
  var i1601 = i1599[0]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1601[i + 0]) );
  }
  i1598.scriptsExecutionOrder = i1600
  var i1603 = i1599[1]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1603[i + 0]) );
  }
  i1598.sortingLayers = i1602
  var i1605 = i1599[2]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1605[i + 0]) );
  }
  i1598.cullingLayers = i1604
  i1598.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1599[3], i1598.timeSettings)
  i1598.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1599[4], i1598.physicsSettings)
  i1598.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1599[5], i1598.physics2DSettings)
  i1598.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1599[6], i1598.qualitySettings)
  i1598.enableRealtimeShadows = !!i1599[7]
  i1598.enableAutoInstancing = !!i1599[8]
  i1598.enableDynamicBatching = !!i1599[9]
  i1598.lightmapEncodingQuality = i1599[10]
  i1598.desiredColorSpace = i1599[11]
  var i1607 = i1599[12]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( i1607[i + 0] );
  }
  i1598.allTags = i1606
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.value = i1611[1]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1615 = data
  i1614.id = i1615[0]
  i1614.name = i1615[1]
  i1614.value = i1615[2]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1619 = data
  i1618.id = i1619[0]
  i1618.name = i1619[1]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1621 = data
  i1620.fixedDeltaTime = i1621[0]
  i1620.maximumDeltaTime = i1621[1]
  i1620.timeScale = i1621[2]
  i1620.maximumParticleTimestep = i1621[3]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1623 = data
  i1622.gravity = new pc.Vec3( i1623[0], i1623[1], i1623[2] )
  i1622.defaultSolverIterations = i1623[3]
  i1622.bounceThreshold = i1623[4]
  i1622.autoSyncTransforms = !!i1623[5]
  i1622.autoSimulation = !!i1623[6]
  var i1625 = i1623[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1625[i + 0]) );
  }
  i1622.collisionMatrix = i1624
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1629 = data
  i1628.enabled = !!i1629[0]
  i1628.layerId = i1629[1]
  i1628.otherLayerId = i1629[2]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'material')
  i1630.gravity = new pc.Vec2( i1631[2], i1631[3] )
  i1630.positionIterations = i1631[4]
  i1630.velocityIterations = i1631[5]
  i1630.velocityThreshold = i1631[6]
  i1630.maxLinearCorrection = i1631[7]
  i1630.maxAngularCorrection = i1631[8]
  i1630.maxTranslationSpeed = i1631[9]
  i1630.maxRotationSpeed = i1631[10]
  i1630.baumgarteScale = i1631[11]
  i1630.baumgarteTOIScale = i1631[12]
  i1630.timeToSleep = i1631[13]
  i1630.linearSleepTolerance = i1631[14]
  i1630.angularSleepTolerance = i1631[15]
  i1630.defaultContactOffset = i1631[16]
  i1630.autoSimulation = !!i1631[17]
  i1630.queriesHitTriggers = !!i1631[18]
  i1630.queriesStartInColliders = !!i1631[19]
  i1630.callbacksOnDisable = !!i1631[20]
  i1630.reuseCollisionCallbacks = !!i1631[21]
  i1630.autoSyncTransforms = !!i1631[22]
  var i1633 = i1631[23]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1633[i + 0]) );
  }
  i1630.collisionMatrix = i1632
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1637 = data
  i1636.enabled = !!i1637[0]
  i1636.layerId = i1637[1]
  i1636.otherLayerId = i1637[2]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1639 = data
  var i1641 = i1639[0]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1641[i + 0]) );
  }
  i1638.qualityLevels = i1640
  var i1643 = i1639[1]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( i1643[i + 0] );
  }
  i1638.names = i1642
  i1638.shadows = i1639[2]
  i1638.anisotropicFiltering = i1639[3]
  i1638.antiAliasing = i1639[4]
  i1638.lodBias = i1639[5]
  i1638.shadowCascades = i1639[6]
  i1638.shadowDistance = i1639[7]
  i1638.shadowmaskMode = i1639[8]
  i1638.shadowProjection = i1639[9]
  i1638.shadowResolution = i1639[10]
  i1638.softParticles = !!i1639[11]
  i1638.softVegetation = !!i1639[12]
  i1638.activeColorSpace = i1639[13]
  i1638.desiredColorSpace = i1639[14]
  i1638.masterTextureLimit = i1639[15]
  i1638.maxQueuedFrames = i1639[16]
  i1638.particleRaycastBudget = i1639[17]
  i1638.pixelLightCount = i1639[18]
  i1638.realtimeReflectionProbes = !!i1639[19]
  i1638.shadowCascade2Split = i1639[20]
  i1638.shadowCascade4Split = new pc.Vec3( i1639[21], i1639[22], i1639[23] )
  i1638.streamingMipmapsActive = !!i1639[24]
  i1638.vSyncCount = i1639[25]
  i1638.asyncUploadBufferSize = i1639[26]
  i1638.asyncUploadTimeSlice = i1639[27]
  i1638.billboardsFaceCameraPosition = !!i1639[28]
  i1638.shadowNearPlaneOffset = i1639[29]
  i1638.streamingMipmapsMemoryBudget = i1639[30]
  i1638.maximumLODLevel = i1639[31]
  i1638.streamingMipmapsAddAllCameras = !!i1639[32]
  i1638.streamingMipmapsMaxLevelReduction = i1639[33]
  i1638.streamingMipmapsRenderersPerFrame = i1639[34]
  i1638.resolutionScalingFixedDPIFactor = i1639[35]
  i1638.streamingMipmapsMaxFileIORequests = i1639[36]
  i1638.currentQualityLevel = i1639[37]
  return i1638
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1647 = data
  i1646.xPlacement = i1647[0]
  i1646.yPlacement = i1647[1]
  i1646.xAdvance = i1647[2]
  i1646.yAdvance = i1647[3]
  return i1646
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[9],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[9],"76":[77],"78":[79],"80":[79],"31":[30],"81":[9],"82":[30],"83":[77,30],"84":[30,34],"85":[30],"86":[34,30],"87":[77],"88":[34,30],"89":[30],"90":[91],"92":[30],"93":[30],"33":[31],"35":[34,30],"94":[30],"32":[31],"95":[30],"96":[30],"97":[30],"98":[30],"99":[30],"100":[30],"101":[30],"102":[30],"103":[30],"104":[34,30],"105":[30],"106":[30],"107":[30],"108":[30],"109":[34,30],"110":[30],"111":[12],"112":[12],"13":[12],"113":[12],"114":[9],"115":[9],"116":[91],"117":[4],"118":[119],"120":[91]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Tile","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","UnityEngine.Material","UnityEngine.Sprite","TileSlot","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileRandomSpawner","TileActions","TileLocker","TilesBag","TileSpawnAnimation","MatchCondition","LoseCondition","WinCondition","InputTouch","TileSpawner","TileSO","TileBagSorter","EndCard","DeckLayer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Texture2D","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "25027";

Deserializers.projectId = "5b6cf7c73bef2a94eac4ebbca2d52761";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playble-3";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "4be05d2a-2ad3-48ef-8ad2-6b6401a21e13";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

