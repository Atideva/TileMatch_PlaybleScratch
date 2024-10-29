var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointSpring' )
  var i355 = data
  i354.spring = i355[0]
  i354.damper = i355[1]
  i354.targetPosition = i355[2]
  return i354
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointMotor' )
  var i357 = data
  i356.m_TargetVelocity = i357[0]
  i356.m_Force = i357[1]
  i356.m_FreeSpin = i357[2]
  return i356
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointLimits' )
  var i359 = data
  i358.m_Min = i359[0]
  i358.m_Max = i359[1]
  i358.m_Bounciness = i359[2]
  i358.m_BounceMinVelocity = i359[3]
  i358.m_ContactDistance = i359[4]
  i358.minBounce = i359[5]
  i358.maxBounce = i359[6]
  return i358
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointDrive' )
  var i361 = data
  i360.m_PositionSpring = i361[0]
  i360.m_PositionDamper = i361[1]
  i360.m_MaximumForce = i361[2]
  return i360
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i363 = data
  i362.m_Spring = i363[0]
  i362.m_Damper = i363[1]
  return i362
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i365 = data
  i364.m_Limit = i365[0]
  i364.m_Bounciness = i365[1]
  i364.m_ContactDistance = i365[2]
  return i364
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i367 = data
  i366.m_ExtremumSlip = i367[0]
  i366.m_ExtremumValue = i367[1]
  i366.m_AsymptoteSlip = i367[2]
  i366.m_AsymptoteValue = i367[3]
  i366.m_Stiffness = i367[4]
  return i366
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i369 = data
  i368.m_LowerAngle = i369[0]
  i368.m_UpperAngle = i369[1]
  return i368
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i371 = data
  i370.m_MotorSpeed = i371[0]
  i370.m_MaximumMotorTorque = i371[1]
  return i370
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i373 = data
  i372.m_DampingRatio = i373[0]
  i372.m_Frequency = i373[1]
  i372.m_Angle = i373[2]
  return i372
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i375 = data
  i374.m_LowerTranslation = i375[0]
  i374.m_UpperTranslation = i375[1]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i376 = root || new pc.UnityMaterial()
  var i377 = data
  i376.name = i377[0]
  request.r(i377[1], i377[2], 0, i376, 'shader')
  i376.renderQueue = i377[3]
  i376.enableInstancing = !!i377[4]
  var i379 = i377[5]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i379[i + 0]) );
  }
  i376.floatParameters = i378
  var i381 = i377[6]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i381[i + 0]) );
  }
  i376.colorParameters = i380
  var i383 = i377[7]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i383[i + 0]) );
  }
  i376.vectorParameters = i382
  var i385 = i377[8]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i385[i + 0]) );
  }
  i376.textureParameters = i384
  var i387 = i377[9]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i387[i + 0]) );
  }
  i376.materialFlags = i386
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i391 = data
  i390.name = i391[0]
  i390.value = i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i395 = data
  i394.name = i395[0]
  i394.value = new pc.Color(i395[1], i395[2], i395[3], i395[4])
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i399 = data
  i398.name = i399[0]
  i398.value = new pc.Vec4( i399[1], i399[2], i399[3], i399[4] )
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i403 = data
  i402.name = i403[0]
  request.r(i403[1], i403[2], 0, i402, 'value')
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i407 = data
  i406.name = i407[0]
  i406.enabled = !!i407[1]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i409 = data
  i408.name = i409[0]
  i408.width = i409[1]
  i408.height = i409[2]
  i408.mipmapCount = i409[3]
  i408.anisoLevel = i409[4]
  i408.filterMode = i409[5]
  i408.hdr = !!i409[6]
  i408.format = i409[7]
  i408.wrapMode = i409[8]
  i408.alphaIsTransparency = !!i409[9]
  i408.alphaSource = i409[10]
  i408.graphicsFormat = i409[11]
  i408.sRGBTexture = !!i409[12]
  i408.desiredColorSpace = i409[13]
  i408.wrapU = i409[14]
  i408.wrapV = i409[15]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i411 = data
  i410.position = new pc.Vec3( i411[0], i411[1], i411[2] )
  i410.scale = new pc.Vec3( i411[3], i411[4], i411[5] )
  i410.rotation = new pc.Quat(i411[6], i411[7], i411[8], i411[9])
  return i410
}

Deserializers["Tile"] = function (request, data, root) {
  var i412 = root || request.c( 'Tile' )
  var i413 = data
  request.r(i413[0], i413[1], 0, i412, 'icon')
  request.r(i413[2], i413[3], 0, i412, 'disabledTile')
  var i415 = i413[4]
  var i414 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i415.length; i += 2) {
  request.r(i415[i + 0], i415[i + 1], 1, i414, '')
  }
  i412.coverTiles = i414
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i419 = data
  i418.radius = i419[0]
  i418.enabled = !!i419[1]
  i418.isTrigger = !!i419[2]
  i418.usedByEffector = !!i419[3]
  i418.density = i419[4]
  i418.offset = new pc.Vec2( i419[5], i419[6] )
  request.r(i419[7], i419[8], 0, i418, 'material')
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i421 = data
  i420.enabled = !!i421[0]
  request.r(i421[1], i421[2], 0, i420, 'sharedMaterial')
  var i423 = i421[3]
  var i422 = []
  for(var i = 0; i < i423.length; i += 2) {
  request.r(i423[i + 0], i423[i + 1], 2, i422, '')
  }
  i420.sharedMaterials = i422
  i420.receiveShadows = !!i421[4]
  i420.shadowCastingMode = i421[5]
  i420.sortingLayerID = i421[6]
  i420.sortingOrder = i421[7]
  i420.lightmapIndex = i421[8]
  i420.lightmapSceneIndex = i421[9]
  i420.lightmapScaleOffset = new pc.Vec4( i421[10], i421[11], i421[12], i421[13] )
  i420.lightProbeUsage = i421[14]
  i420.reflectionProbeUsage = i421[15]
  i420.color = new pc.Color(i421[16], i421[17], i421[18], i421[19])
  request.r(i421[20], i421[21], 0, i420, 'sprite')
  i420.flipX = !!i421[22]
  i420.flipY = !!i421[23]
  i420.drawMode = i421[24]
  i420.size = new pc.Vec2( i421[25], i421[26] )
  i420.tileMode = i421[27]
  i420.adaptiveModeThreshold = i421[28]
  i420.maskInteraction = i421[29]
  i420.spriteSortPoint = i421[30]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i427 = data
  i426.name = i427[0]
  i426.tagId = i427[1]
  i426.enabled = !!i427[2]
  i426.isStatic = !!i427[3]
  i426.layer = i427[4]
  return i426
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i428 = root || request.c( 'TileSlot' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'background')
  i428.spawnAnimSize = i429[2]
  i428.spawnAnimDuration = i429[3]
  i428.defaultSize = new pc.Vec3( i429[4], i429[5], i429[6] )
  i428.moveDuration = i429[7]
  i428.speed = i429[8]
  return i428
}

Deserializers["BagSlot"] = function (request, data, root) {
  var i430 = root || request.c( 'BagSlot' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'TileSlot')
  request.r(i431[2], i431[3], 0, i430, 'bookedSlot')
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i433 = data
  i432.name = i433[0]
  i432.index = i433[1]
  i432.startup = !!i433[2]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i435 = data
  i434.enabled = !!i435[0]
  i434.aspect = i435[1]
  i434.orthographic = !!i435[2]
  i434.orthographicSize = i435[3]
  i434.backgroundColor = new pc.Color(i435[4], i435[5], i435[6], i435[7])
  i434.nearClipPlane = i435[8]
  i434.farClipPlane = i435[9]
  i434.fieldOfView = i435[10]
  i434.depth = i435[11]
  i434.clearFlags = i435[12]
  i434.cullingMask = i435[13]
  i434.rect = i435[14]
  request.r(i435[15], i435[16], 0, i434, 'targetTexture')
  i434.usePhysicalProperties = !!i435[17]
  i434.focalLength = i435[18]
  i434.sensorSize = new pc.Vec2( i435[19], i435[20] )
  i434.lensShift = new pc.Vec2( i435[21], i435[22] )
  i434.gateFit = i435[23]
  return i434
}

Deserializers["Game"] = function (request, data, root) {
  var i436 = root || request.c( 'Game' )
  var i437 = data
  request.r(i437[0], i437[1], 0, i436, 'deck')
  request.r(i437[2], i437[3], 0, i436, 'spawner')
  request.r(i437[4], i437[5], 0, i436, 'actions')
  request.r(i437[6], i437[7], 0, i436, 'locker')
  request.r(i437[8], i437[9], 0, i436, 'bag')
  request.r(i437[10], i437[11], 0, i436, 'spawnAnimation')
  request.r(i437[12], i437[13], 0, i436, 'matchCondition')
  request.r(i437[14], i437[15], 0, i436, 'loseCondition')
  request.r(i437[16], i437[17], 0, i436, 'winCondition')
  i436.totalTiles = i437[18]
  i436.totalBricks = i437[19]
  i436.randomTiles = !!i437[20]
  var i439 = i437[21]
  var i438 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i439.length; i += 2) {
  request.r(i439[i + 0], i439[i + 1], 1, i438, '')
  }
  i436.tiles = i438
  return i436
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i440 = root || request.c( 'TileSpawner' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'prefab')
  var i443 = i441[2]
  var i442 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i443.length; i += 2) {
  request.r(i443[i + 0], i443[i + 1], 1, i442, '')
  }
  i440.spawned = i442
  var i445 = i441[3]
  var i444 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i445.length; i += 1) {
    i444.add(request.d('TileData', i445[i + 0]));
  }
  i440.spawnData = i444
  i440.hideAtSpawn = !!i441[4]
  i440.spawnRate = i441[5]
  var i447 = i441[6]
  var i446 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i447.length; i += 1) {
    i446.add(request.d('TileData', i447[i + 0]));
  }
  i440.level = i446
  return i440
}

Deserializers["TileData"] = function (request, data, root) {
  var i450 = root || request.c( 'TileData' )
  var i451 = data
  i450.type = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'icon')
  i450.amount = i451[3]
  return i450
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i452 = root || request.c( 'TileSpawnAnimation' )
  var i453 = data
  i452.delayBetweenLines = i453[0]
  i452.delayBetweenTiles = i453[1]
  i452.delayBetweenLayers = i453[2]
  return i452
}

Deserializers["TileActions"] = function (request, data, root) {
  var i454 = root || request.c( 'TileActions' )
  var i455 = data
  return i454
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i456 = root || request.c( 'TileLocker' )
  var i457 = data
  i456.lockDistance = i457[0]
  return i456
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i458 = root || request.c( 'LoseCondition' )
  var i459 = data
  return i458
}

Deserializers["MatchCondition"] = function (request, data, root) {
  var i460 = root || request.c( 'MatchCondition' )
  var i461 = data
  var i463 = i461[0]
  var i462 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i463.length; i += 2) {
  request.r(i463[i + 0], i463[i + 1], 1, i462, '')
  }
  i460.completeSlots = i462
  return i460
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i466 = root || request.c( 'WinCondition' )
  var i467 = data
  var i469 = i467[0]
  var i468 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i469.length; i += 2) {
  request.r(i469[i + 0], i469[i + 1], 1, i468, '')
  }
  i466.completeSlots = i468
  return i466
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i470 = root || request.c( 'TilesBag' )
  var i471 = data
  var i473 = i471[0]
  var i472 = new (System.Collections.Generic.List$1(Bridge.ns('BagSlot')))
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 1, i472, '')
  }
  i470.slots = i472
  return i470
}

Deserializers["Deck"] = function (request, data, root) {
  var i476 = root || request.c( 'Deck' )
  var i477 = data
  return i476
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i478 = root || request.c( 'DeckLayer' )
  var i479 = data
  i478.id = i479[0]
  return i478
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i481 = data
  request.r(i481[0], i481[1], 0, i480, 'm_FirstSelected')
  i480.m_sendNavigationEvents = !!i481[2]
  i480.m_DragThreshold = i481[3]
  return i480
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i483 = data
  i482.m_HorizontalAxis = i483[0]
  i482.m_VerticalAxis = i483[1]
  i482.m_SubmitButton = i483[2]
  i482.m_CancelButton = i483[3]
  i482.m_InputActionsPerSecond = i483[4]
  i482.m_RepeatDelay = i483[5]
  i482.m_ForceModuleActive = !!i483[6]
  i482.m_SendPointerHoverToParent = !!i483[7]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i485 = data
  i484.ambientIntensity = i485[0]
  i484.reflectionIntensity = i485[1]
  i484.ambientMode = i485[2]
  i484.ambientLight = new pc.Color(i485[3], i485[4], i485[5], i485[6])
  i484.ambientSkyColor = new pc.Color(i485[7], i485[8], i485[9], i485[10])
  i484.ambientGroundColor = new pc.Color(i485[11], i485[12], i485[13], i485[14])
  i484.ambientEquatorColor = new pc.Color(i485[15], i485[16], i485[17], i485[18])
  i484.fogColor = new pc.Color(i485[19], i485[20], i485[21], i485[22])
  i484.fogEndDistance = i485[23]
  i484.fogStartDistance = i485[24]
  i484.fogDensity = i485[25]
  i484.fog = !!i485[26]
  request.r(i485[27], i485[28], 0, i484, 'skybox')
  i484.fogMode = i485[29]
  var i487 = i485[30]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i487[i + 0]) );
  }
  i484.lightmaps = i486
  i484.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i485[31], i484.lightProbes)
  i484.lightmapsMode = i485[32]
  i484.mixedBakeMode = i485[33]
  i484.environmentLightingMode = i485[34]
  i484.ambientProbe = new pc.SphericalHarmonicsL2(i485[35])
  i484.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i485[36])
  i484.useReferenceAmbientProbe = !!i485[37]
  request.r(i485[38], i485[39], 0, i484, 'customReflection')
  request.r(i485[40], i485[41], 0, i484, 'defaultReflection')
  i484.defaultReflectionMode = i485[42]
  i484.defaultReflectionResolution = i485[43]
  i484.sunLightObjectId = i485[44]
  i484.pixelLightCount = i485[45]
  i484.defaultReflectionHDR = !!i485[46]
  i484.hasLightDataAsset = !!i485[47]
  i484.hasManualGenerate = !!i485[48]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'lightmapColor')
  request.r(i491[2], i491[3], 0, i490, 'lightmapDirection')
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i492 = root || new UnityEngine.LightProbes()
  var i493 = data
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i501 = data
  var i503 = i501[0]
  var i502 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i503.length; i += 1) {
    i502.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i503[i + 0]));
  }
  i500.ShaderCompilationErrors = i502
  i500.name = i501[1]
  i500.guid = i501[2]
  var i505 = i501[3]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( i505[i + 0] );
  }
  i500.shaderDefinedKeywords = i504
  var i507 = i501[4]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i507[i + 0]) );
  }
  i500.passes = i506
  var i509 = i501[5]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i509[i + 0]) );
  }
  i500.usePasses = i508
  var i511 = i501[6]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i511[i + 0]) );
  }
  i500.defaultParameterValues = i510
  request.r(i501[7], i501[8], 0, i500, 'unityFallbackShader')
  i500.readDepth = !!i501[9]
  i500.isCreatedByShaderGraph = !!i501[10]
  i500.usedBatchUniforms = i501[11]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i515 = data
  i514.shaderName = i515[0]
  i514.errorMessage = i515[1]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i520 = root || new pc.UnityShaderPass()
  var i521 = data
  i520.id = i521[0]
  i520.subShaderIndex = i521[1]
  i520.name = i521[2]
  i520.passType = i521[3]
  i520.grabPassTextureName = i521[4]
  i520.usePass = !!i521[5]
  i520.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[6], i520.zTest)
  i520.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[7], i520.zWrite)
  i520.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[8], i520.culling)
  i520.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i521[9], i520.blending)
  i520.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i521[10], i520.alphaBlending)
  i520.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[11], i520.colorWriteMask)
  i520.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[12], i520.offsetUnits)
  i520.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[13], i520.offsetFactor)
  i520.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[14], i520.stencilRef)
  i520.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[15], i520.stencilReadMask)
  i520.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[16], i520.stencilWriteMask)
  i520.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i521[17], i520.stencilOp)
  i520.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i521[18], i520.stencilOpFront)
  i520.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i521[19], i520.stencilOpBack)
  var i523 = i521[20]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i523[i + 0]) );
  }
  i520.tags = i522
  var i525 = i521[21]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( i525[i + 0] );
  }
  i520.passDefinedKeywords = i524
  var i527 = i521[22]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i527[i + 0]) );
  }
  i520.passDefinedKeywordGroups = i526
  var i529 = i521[23]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i529[i + 0]) );
  }
  i520.variants = i528
  var i531 = i521[24]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i531[i + 0]) );
  }
  i520.excludedVariants = i530
  i520.hasDepthReader = !!i521[25]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i533 = data
  i532.val = i533[0]
  i532.name = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i535 = data
  i534.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[0], i534.src)
  i534.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[1], i534.dst)
  i534.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[2], i534.op)
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i537 = data
  i536.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[0], i536.pass)
  i536.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[1], i536.fail)
  i536.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[2], i536.zFail)
  i536.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[3], i536.comp)
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i541 = data
  i540.name = i541[0]
  i540.value = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i545 = data
  var i547 = i545[0]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( i547[i + 0] );
  }
  i544.keywords = i546
  i544.hasDiscard = !!i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i551 = data
  i550.passId = i551[0]
  i550.subShaderIndex = i551[1]
  var i553 = i551[2]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( i553[i + 0] );
  }
  i550.keywords = i552
  i550.vertexProgram = i551[3]
  i550.fragmentProgram = i551[4]
  i550.compiledForWebGL2 = !!i551[5]
  i550.readDepth = !!i551[6]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'shader')
  i556.pass = i557[2]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i561 = data
  i560.name = i561[0]
  i560.type = i561[1]
  i560.value = new pc.Vec4( i561[2], i561[3], i561[4], i561[5] )
  i560.textureValue = i561[6]
  i560.shaderPropertyFlag = i561[7]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'texture')
  i562.aabb = i563[3]
  i562.vertices = i563[4]
  i562.triangles = i563[5]
  i562.textureRect = UnityEngine.Rect.MinMaxRect(i563[6], i563[7], i563[8], i563[9])
  i562.packedRect = UnityEngine.Rect.MinMaxRect(i563[10], i563[11], i563[12], i563[13])
  i562.border = new pc.Vec4( i563[14], i563[15], i563[16], i563[17] )
  i562.transparency = i563[18]
  i562.bounds = i563[19]
  i562.pixelsPerUnit = i563[20]
  i562.textureWidth = i563[21]
  i562.textureHeight = i563[22]
  i562.nativeSize = new pc.Vec2( i563[23], i563[24] )
  i562.pivot = new pc.Vec2( i563[25], i563[26] )
  i562.textureRectOffset = new pc.Vec2( i563[27], i563[28] )
  return i562
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i565 = data
  i564._svcLunaVersion = i565[0]
  var i567 = i565[1]
  var i566 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i567.length; i += 1) {
    i566.add(request.d(' .  ', i567[i + 0]));
  }
  i564._shaderVariants = i566
  var i569 = i565[2]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i569.length; i += 1) {
    i568.add(request.d(' .  ', i569[i + 0]));
  }
  i564._usedByLunaBuild = i568
  var i571 = i565[3]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i571.length; i += 1) {
    i570.add(request.d(' .  ', i571[i + 0]));
  }
  i564._includedShaderVariants = i570
  var i573 = i565[4]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i573.length; i += 1) {
    i572.add(request.d(' .  ', i573[i + 0]));
  }
  i564._excludedShaderVariants = i572
  i564.version = System.Int64(i565[5])
  var i575 = i565[6]
  var i574 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i575.length; i += 1) {
    i574.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i575[i + 0]));
  }
  i564._shaderParsedShaders = i574
  var i577 = i565[7]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i577.length; i += 1) {
    i576.add(i577[i + 0]);
  }
  i564._modifiedShaders = i576
  i564.invalidShaders = !!i565[8]
  i564._cachedShadersPlatform = i565[9]
  i564._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i565[10], i564._sceneLightData)
  return i564
}

Deserializers[" .  "] = function (request, data, root) {
  var i580 = root || request.c( ' .  ' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'shader')
  i580.passType = i581[2]
  i580.passId = i581[3]
  i580.subShaderIndex = i581[4]
  i580.upToDate = !!i581[5]
  var i583 = i581[6]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( i583[i + 0] );
  }
  i580.keywords = i582
  return i580
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i587 = data
  var i589 = i587[0]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i589.length; i += 1) {
    i588.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i589[i + 0]));
  }
  i586.ParsedSubShaders = i588
  request.r(i587[1], i587[2], 0, i586, 'Shader')
  i586.ShaderPath = i587[3]
  var i591 = i587[4]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i586.ShaderDefinedKeywords = i590
  request.r(i587[5], i587[6], 0, i586, 'fallbackShader')
  var i593 = i587[7]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i593.length; i += 1) {
    i592.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i593[i + 0]));
  }
  i586.CompilationErrors = i592
  i586.shaderCompilerPlatform = i587[8]
  return i586
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i597 = data
  i596.Index = i597[0]
  var i599 = i597[1]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i599.length; i += 1) {
    i598.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i599[i + 0]));
  }
  i596.Passes = i598
  var i601 = i597[2]
  var i600 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i601.length; i += 1) {
    i600.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i601[i + 0]));
  }
  i596.Tags = i600
  i596.UsePass = !!i597[3]
  return i596
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i605 = data
  i604.ShaderName = i605[0]
  var i607 = i605[1]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i607.length; i += 1) {
    i606.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i607[i + 0]));
  }
  i604.ShaderVariants = i606
  var i609 = i605[2]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( i609[i + 0] );
  }
  i604.definedKeywords = i608
  var i611 = i605[3]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i611.length; i += 1) {
    i610.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i611[i + 0]));
  }
  i604.keywordGroups = i610
  i604.KeywordsMinimalCardinality = i605[4]
  i604.ContainsInvalidVariant = !!i605[5]
  i604.ShaderCompilerPlatform = i605[6]
  i604.HasDepthReader = !!i605[7]
  i604.Id = i605[8]
  i604.SubShaderIndex = i605[9]
  i604.SerializedObjectId = i605[10]
  var i613 = i605[11]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i613.length; i += 1) {
    i612.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i613[i + 0]));
  }
  i604.Tags = i612
  i604.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i605[12], i604.UsePass)
  i604.GrabPassTextureName = i605[13]
  i604.PassShaderRequirements = i605[14]
  i604.PlatformMask = i605[15]
  return i604
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i617 = data
  i616.NoShaderVariant = !!i617[0]
  i616.VertexProgram = i617[1]
  i616.FragmentProgram = i617[2]
  i616.LOD = i617[3]
  i616.readDepth = !!i617[4]
  i616.Index = i617[5]
  i616.PassId = i617[6]
  i616.SubShaderIndex = i617[7]
  var i619 = i617[8]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( i619[i + 0] );
  }
  i616.Keywords = i618
  var i621 = i617[9]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i621.length; i += 1) {
    i620.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i621[i + 0]));
  }
  i616.Tags = i620
  return i616
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i625 = data
  i624.Key = i625[0]
  i624.Value = i625[1]
  return i624
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i629 = data
  var i631 = i629[0]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i631.length; i += 1) {
    i630.add(i631[i + 0]);
  }
  i628.Keywords = i630
  return i628
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i633 = data
  i632.shader = i633[0]
  i632.pass = i633[1]
  return i632
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i637 = data
  i636.ShaderName = i637[0]
  var i639 = i637[1]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i639[i + 0]));
  }
  i636.Details = i638
  return i636
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i643 = data
  i642.PointLightCount = i643[0]
  i642.SpotLightCount = i643[1]
  i642.DirectionalLightCount = i643[2]
  i642.LightmapOn = !!i643[3]
  i642.DirlightmapCombined = !!i643[4]
  i642.DirectionalCookieExists = !!i643[5]
  i642.PointCookieExists = !!i643[6]
  i642.SpotCookieExists = !!i643[7]
  i642.AddiitonalLightsKeywordRequired = !!i643[8]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i645 = data
  var i647 = i645[0]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i647[i + 0]) );
  }
  i644.files = i646
  i644.componentToPrefabIds = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i651 = data
  i650.path = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'unityObject')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i653 = data
  var i655 = i653[0]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i655[i + 0]) );
  }
  i652.scriptsExecutionOrder = i654
  var i657 = i653[1]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i657[i + 0]) );
  }
  i652.sortingLayers = i656
  var i659 = i653[2]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i659[i + 0]) );
  }
  i652.cullingLayers = i658
  i652.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i653[3], i652.timeSettings)
  i652.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i653[4], i652.physicsSettings)
  i652.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i653[5], i652.physics2DSettings)
  i652.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i653[6], i652.qualitySettings)
  i652.enableRealtimeShadows = !!i653[7]
  i652.enableAutoInstancing = !!i653[8]
  i652.enableDynamicBatching = !!i653[9]
  i652.lightmapEncodingQuality = i653[10]
  i652.desiredColorSpace = i653[11]
  var i661 = i653[12]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i652.allTags = i660
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i665 = data
  i664.name = i665[0]
  i664.value = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i669 = data
  i668.id = i669[0]
  i668.name = i669[1]
  i668.value = i669[2]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i673 = data
  i672.id = i673[0]
  i672.name = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i675 = data
  i674.fixedDeltaTime = i675[0]
  i674.maximumDeltaTime = i675[1]
  i674.timeScale = i675[2]
  i674.maximumParticleTimestep = i675[3]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i677 = data
  i676.gravity = new pc.Vec3( i677[0], i677[1], i677[2] )
  i676.defaultSolverIterations = i677[3]
  i676.bounceThreshold = i677[4]
  i676.autoSyncTransforms = !!i677[5]
  i676.autoSimulation = !!i677[6]
  var i679 = i677[7]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i679[i + 0]) );
  }
  i676.collisionMatrix = i678
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i683 = data
  i682.enabled = !!i683[0]
  i682.layerId = i683[1]
  i682.otherLayerId = i683[2]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'material')
  i684.gravity = new pc.Vec2( i685[2], i685[3] )
  i684.positionIterations = i685[4]
  i684.velocityIterations = i685[5]
  i684.velocityThreshold = i685[6]
  i684.maxLinearCorrection = i685[7]
  i684.maxAngularCorrection = i685[8]
  i684.maxTranslationSpeed = i685[9]
  i684.maxRotationSpeed = i685[10]
  i684.baumgarteScale = i685[11]
  i684.baumgarteTOIScale = i685[12]
  i684.timeToSleep = i685[13]
  i684.linearSleepTolerance = i685[14]
  i684.angularSleepTolerance = i685[15]
  i684.defaultContactOffset = i685[16]
  i684.autoSimulation = !!i685[17]
  i684.queriesHitTriggers = !!i685[18]
  i684.queriesStartInColliders = !!i685[19]
  i684.callbacksOnDisable = !!i685[20]
  i684.reuseCollisionCallbacks = !!i685[21]
  i684.autoSyncTransforms = !!i685[22]
  var i687 = i685[23]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i687[i + 0]) );
  }
  i684.collisionMatrix = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i691 = data
  i690.enabled = !!i691[0]
  i690.layerId = i691[1]
  i690.otherLayerId = i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i693 = data
  var i695 = i693[0]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i695[i + 0]) );
  }
  i692.qualityLevels = i694
  var i697 = i693[1]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i692.names = i696
  i692.shadows = i693[2]
  i692.anisotropicFiltering = i693[3]
  i692.antiAliasing = i693[4]
  i692.lodBias = i693[5]
  i692.shadowCascades = i693[6]
  i692.shadowDistance = i693[7]
  i692.shadowmaskMode = i693[8]
  i692.shadowProjection = i693[9]
  i692.shadowResolution = i693[10]
  i692.softParticles = !!i693[11]
  i692.softVegetation = !!i693[12]
  i692.activeColorSpace = i693[13]
  i692.desiredColorSpace = i693[14]
  i692.masterTextureLimit = i693[15]
  i692.maxQueuedFrames = i693[16]
  i692.particleRaycastBudget = i693[17]
  i692.pixelLightCount = i693[18]
  i692.realtimeReflectionProbes = !!i693[19]
  i692.shadowCascade2Split = i693[20]
  i692.shadowCascade4Split = new pc.Vec3( i693[21], i693[22], i693[23] )
  i692.streamingMipmapsActive = !!i693[24]
  i692.vSyncCount = i693[25]
  i692.asyncUploadBufferSize = i693[26]
  i692.asyncUploadTimeSlice = i693[27]
  i692.billboardsFaceCameraPosition = !!i693[28]
  i692.shadowNearPlaneOffset = i693[29]
  i692.streamingMipmapsMemoryBudget = i693[30]
  i692.maximumLODLevel = i693[31]
  i692.streamingMipmapsAddAllCameras = !!i693[32]
  i692.streamingMipmapsMaxLevelReduction = i693[33]
  i692.streamingMipmapsRenderersPerFrame = i693[34]
  i692.resolutionScalingFixedDPIFactor = i693[35]
  i692.streamingMipmapsMaxFileIORequests = i693[36]
  i692.currentQualityLevel = i693[37]
  return i692
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i703 = data
  i702.SubShaderIndex = i703[0]
  i702.PassId = i703[1]
  var i705 = i703[2]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i702.ShaderVariantKeywords = i704
  var i707 = i703[3]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i702.Messages = i706
  return i702
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"28":[29],"30":[29],"31":[29],"32":[29],"33":[29],"34":[29],"35":[36],"37":[10],"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[39],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[47],"55":[47],"56":[47],"57":[47],"58":[47],"59":[47],"60":[10],"61":[62],"63":[64],"65":[64],"66":[67],"68":[10],"69":[67],"70":[62,67],"71":[67,72],"73":[67],"74":[72,67],"75":[62],"76":[72,67],"77":[67],"78":[79],"80":[67],"81":[67],"82":[66],"83":[72,67],"84":[67],"85":[66],"86":[67],"87":[67],"88":[67],"89":[67],"90":[67],"91":[67],"92":[67],"93":[67],"94":[67],"95":[72,67],"96":[67],"97":[67],"98":[67],"99":[67],"100":[72,67],"101":[67],"102":[24],"103":[24],"25":[24],"104":[24],"105":[10],"106":[10],"107":[79],"108":[4],"109":[110],"111":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Tile","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","UnityEngine.Material","UnityEngine.Sprite","TileSlot","BagSlot","UnityEngine.Camera","UnityEngine.AudioListener","Game","Deck","TileSpawner","TileActions","TileLocker","TilesBag","TileSpawnAnimation","MatchCondition","LoseCondition","WinCondition","DeckLayer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/24/2024 03:51:21";

Deserializers.lunaDaysRunning = "4.9";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "TestFromScratch";

Deserializers.lunaAppID = "25029";

Deserializers.projectId = "5b6cf7c73bef2a94eac4ebbca2d52761";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1803";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3081";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

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

Deserializers.buildID = "2247f460-eb3c-47f9-94bd-dd17b9bb4923";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

