var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.JointSpring' )
  var i377 = data
  i376.spring = i377[0]
  i376.damper = i377[1]
  i376.targetPosition = i377[2]
  return i376
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.JointMotor' )
  var i379 = data
  i378.m_TargetVelocity = i379[0]
  i378.m_Force = i379[1]
  i378.m_FreeSpin = i379[2]
  return i378
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.JointLimits' )
  var i381 = data
  i380.m_Min = i381[0]
  i380.m_Max = i381[1]
  i380.m_Bounciness = i381[2]
  i380.m_BounceMinVelocity = i381[3]
  i380.m_ContactDistance = i381[4]
  i380.minBounce = i381[5]
  i380.maxBounce = i381[6]
  return i380
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointDrive' )
  var i383 = data
  i382.m_PositionSpring = i383[0]
  i382.m_PositionDamper = i383[1]
  i382.m_MaximumForce = i383[2]
  return i382
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i385 = data
  i384.m_Spring = i385[0]
  i384.m_Damper = i385[1]
  return i384
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i387 = data
  i386.m_Limit = i387[0]
  i386.m_Bounciness = i387[1]
  i386.m_ContactDistance = i387[2]
  return i386
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i389 = data
  i388.m_ExtremumSlip = i389[0]
  i388.m_ExtremumValue = i389[1]
  i388.m_AsymptoteSlip = i389[2]
  i388.m_AsymptoteValue = i389[3]
  i388.m_Stiffness = i389[4]
  return i388
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i391 = data
  i390.m_LowerAngle = i391[0]
  i390.m_UpperAngle = i391[1]
  return i390
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i393 = data
  i392.m_MotorSpeed = i393[0]
  i392.m_MaximumMotorTorque = i393[1]
  return i392
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i395 = data
  i394.m_DampingRatio = i395[0]
  i394.m_Frequency = i395[1]
  i394.m_Angle = i395[2]
  return i394
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i397 = data
  i396.m_LowerTranslation = i397[0]
  i396.m_UpperTranslation = i397[1]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i398 = root || new pc.UnityMaterial()
  var i399 = data
  i398.name = i399[0]
  request.r(i399[1], i399[2], 0, i398, 'shader')
  i398.renderQueue = i399[3]
  i398.enableInstancing = !!i399[4]
  var i401 = i399[5]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i401[i + 0]) );
  }
  i398.floatParameters = i400
  var i403 = i399[6]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i403[i + 0]) );
  }
  i398.colorParameters = i402
  var i405 = i399[7]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i405[i + 0]) );
  }
  i398.vectorParameters = i404
  var i407 = i399[8]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i407[i + 0]) );
  }
  i398.textureParameters = i406
  var i409 = i399[9]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i409[i + 0]) );
  }
  i398.materialFlags = i408
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i413 = data
  i412.name = i413[0]
  i412.value = i413[1]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i417 = data
  i416.name = i417[0]
  i416.value = new pc.Color(i417[1], i417[2], i417[3], i417[4])
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i421 = data
  i420.name = i421[0]
  i420.value = new pc.Vec4( i421[1], i421[2], i421[3], i421[4] )
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i425 = data
  i424.name = i425[0]
  request.r(i425[1], i425[2], 0, i424, 'value')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i429 = data
  i428.name = i429[0]
  i428.enabled = !!i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i431 = data
  i430.name = i431[0]
  i430.width = i431[1]
  i430.height = i431[2]
  i430.mipmapCount = i431[3]
  i430.anisoLevel = i431[4]
  i430.filterMode = i431[5]
  i430.hdr = !!i431[6]
  i430.format = i431[7]
  i430.wrapMode = i431[8]
  i430.alphaIsTransparency = !!i431[9]
  i430.alphaSource = i431[10]
  i430.graphicsFormat = i431[11]
  i430.sRGBTexture = !!i431[12]
  i430.desiredColorSpace = i431[13]
  i430.wrapU = i431[14]
  i430.wrapV = i431[15]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i433 = data
  i432.position = new pc.Vec3( i433[0], i433[1], i433[2] )
  i432.scale = new pc.Vec3( i433[3], i433[4], i433[5] )
  i432.rotation = new pc.Quat(i433[6], i433[7], i433[8], i433[9])
  return i432
}

Deserializers["Tile"] = function (request, data, root) {
  var i434 = root || request.c( 'Tile' )
  var i435 = data
  request.r(i435[0], i435[1], 0, i434, 'icon')
  request.r(i435[2], i435[3], 0, i434, 'disabledTile')
  var i437 = i435[4]
  var i436 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i437.length; i += 2) {
  request.r(i437[i + 0], i437[i + 1], 1, i436, '')
  }
  i434.coverTiles = i436
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i441 = data
  i440.radius = i441[0]
  i440.enabled = !!i441[1]
  i440.isTrigger = !!i441[2]
  i440.usedByEffector = !!i441[3]
  i440.density = i441[4]
  i440.offset = new pc.Vec2( i441[5], i441[6] )
  request.r(i441[7], i441[8], 0, i440, 'material')
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i443 = data
  i442.enabled = !!i443[0]
  request.r(i443[1], i443[2], 0, i442, 'sharedMaterial')
  var i445 = i443[3]
  var i444 = []
  for(var i = 0; i < i445.length; i += 2) {
  request.r(i445[i + 0], i445[i + 1], 2, i444, '')
  }
  i442.sharedMaterials = i444
  i442.receiveShadows = !!i443[4]
  i442.shadowCastingMode = i443[5]
  i442.sortingLayerID = i443[6]
  i442.sortingOrder = i443[7]
  i442.lightmapIndex = i443[8]
  i442.lightmapSceneIndex = i443[9]
  i442.lightmapScaleOffset = new pc.Vec4( i443[10], i443[11], i443[12], i443[13] )
  i442.lightProbeUsage = i443[14]
  i442.reflectionProbeUsage = i443[15]
  i442.color = new pc.Color(i443[16], i443[17], i443[18], i443[19])
  request.r(i443[20], i443[21], 0, i442, 'sprite')
  i442.flipX = !!i443[22]
  i442.flipY = !!i443[23]
  i442.drawMode = i443[24]
  i442.size = new pc.Vec2( i443[25], i443[26] )
  i442.tileMode = i443[27]
  i442.adaptiveModeThreshold = i443[28]
  i442.maskInteraction = i443[29]
  i442.spriteSortPoint = i443[30]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i449 = data
  i448.name = i449[0]
  i448.tagId = i449[1]
  i448.enabled = !!i449[2]
  i448.isStatic = !!i449[3]
  i448.layer = i449[4]
  return i448
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i450 = root || request.c( 'TileSlot' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'background')
  i450.defaultSize = new pc.Vec3( i451[2], i451[3], i451[4] )
  i450.speed = i451[5]
  i450.spawnAnimSize = i451[6]
  i450.spawnAnimDuration = i451[7]
  i450.moveDuration = i451[8]
  return i450
}

Deserializers["BagSlot"] = function (request, data, root) {
  var i452 = root || request.c( 'BagSlot' )
  var i453 = data
  i452.ID = i453[0]
  request.r(i453[1], i453[2], 0, i452, 'TileSlot')
  request.r(i453[3], i453[4], 0, i452, 'bookedSlot')
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i455 = data
  i454.name = i455[0]
  i454.index = i455[1]
  i454.startup = !!i455[2]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i457 = data
  i456.enabled = !!i457[0]
  i456.aspect = i457[1]
  i456.orthographic = !!i457[2]
  i456.orthographicSize = i457[3]
  i456.backgroundColor = new pc.Color(i457[4], i457[5], i457[6], i457[7])
  i456.nearClipPlane = i457[8]
  i456.farClipPlane = i457[9]
  i456.fieldOfView = i457[10]
  i456.depth = i457[11]
  i456.clearFlags = i457[12]
  i456.cullingMask = i457[13]
  i456.rect = i457[14]
  request.r(i457[15], i457[16], 0, i456, 'targetTexture')
  i456.usePhysicalProperties = !!i457[17]
  i456.focalLength = i457[18]
  i456.sensorSize = new pc.Vec2( i457[19], i457[20] )
  i456.lensShift = new pc.Vec2( i457[21], i457[22] )
  i456.gateFit = i457[23]
  return i456
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i459 = data
  request.r(i459[0], i459[1], 0, i458, 'm_FirstSelected')
  i458.m_sendNavigationEvents = !!i459[2]
  i458.m_DragThreshold = i459[3]
  return i458
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i461 = data
  i460.m_HorizontalAxis = i461[0]
  i460.m_VerticalAxis = i461[1]
  i460.m_SubmitButton = i461[2]
  i460.m_CancelButton = i461[3]
  i460.m_InputActionsPerSecond = i461[4]
  i460.m_RepeatDelay = i461[5]
  i460.m_ForceModuleActive = !!i461[6]
  i460.m_SendPointerHoverToParent = !!i461[7]
  return i460
}

Deserializers["Game"] = function (request, data, root) {
  var i462 = root || request.c( 'Game' )
  var i463 = data
  request.r(i463[0], i463[1], 0, i462, 'deck')
  request.r(i463[2], i463[3], 0, i462, 'spawner')
  request.r(i463[4], i463[5], 0, i462, 'actions')
  request.r(i463[6], i463[7], 0, i462, 'locker')
  request.r(i463[8], i463[9], 0, i462, 'bag')
  request.r(i463[10], i463[11], 0, i462, 'spawnAnimation')
  request.r(i463[12], i463[13], 0, i462, 'matchCondition')
  request.r(i463[14], i463[15], 0, i462, 'loseCondition')
  request.r(i463[16], i463[17], 0, i462, 'winCondition')
  request.r(i463[18], i463[19], 0, i462, 'input')
  i462.totalTiles = i463[20]
  i462.totalBricks = i463[21]
  i462.randomTiles = !!i463[22]
  var i465 = i463[23]
  var i464 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i465.length; i += 2) {
  request.r(i465[i + 0], i465[i + 1], 1, i464, '')
  }
  i462.tiles = i464
  return i462
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i466 = root || request.c( 'TileSpawner' )
  var i467 = data
  request.r(i467[0], i467[1], 0, i466, 'prefab')
  var i469 = i467[2]
  var i468 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i469.length; i += 2) {
  request.r(i469[i + 0], i469[i + 1], 1, i468, '')
  }
  i466.spawned = i468
  var i471 = i467[3]
  var i470 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i471.length; i += 1) {
    i470.add(request.d('TileData', i471[i + 0]));
  }
  i466.spawnData = i470
  i466.hideAtSpawn = !!i467[4]
  i466.spawnRate = i467[5]
  var i473 = i467[6]
  var i472 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i473.length; i += 1) {
    i472.add(request.d('TileData', i473[i + 0]));
  }
  i466.level = i472
  return i466
}

Deserializers["TileData"] = function (request, data, root) {
  var i476 = root || request.c( 'TileData' )
  var i477 = data
  i476.type = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'icon')
  i476.amount = i477[3]
  return i476
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i478 = root || request.c( 'TileSpawnAnimation' )
  var i479 = data
  i478.delayBetweenLines = i479[0]
  i478.delayBetweenTiles = i479[1]
  i478.delayBetweenLayers = i479[2]
  return i478
}

Deserializers["TileActions"] = function (request, data, root) {
  var i480 = root || request.c( 'TileActions' )
  var i481 = data
  request.r(i481[0], i481[1], 0, i480, '_cam')
  return i480
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i482 = root || request.c( 'TileLocker' )
  var i483 = data
  i482.lockDistance = i483[0]
  return i482
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i484 = root || request.c( 'LoseCondition' )
  var i485 = data
  return i484
}

Deserializers["MatchCondition"] = function (request, data, root) {
  var i486 = root || request.c( 'MatchCondition' )
  var i487 = data
  var i489 = i487[0]
  var i488 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i489.length; i += 2) {
  request.r(i489[i + 0], i489[i + 1], 1, i488, '')
  }
  i486.completeSlots = i488
  return i486
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i492 = root || request.c( 'WinCondition' )
  var i493 = data
  var i495 = i493[0]
  var i494 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i495.length; i += 2) {
  request.r(i495[i + 0], i495[i + 1], 1, i494, '')
  }
  i492.completeSlots = i494
  return i492
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i496 = root || request.c( 'InputTouch' )
  var i497 = data
  var i499 = i497[0]
  var i498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i499.length; i += 2) {
    i498.add(new pc.Vec2( i499[i + 0], i499[i + 1] ));
  }
  i496.touches = i498
  i496.touchSize = i497[1]
  return i496
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i502 = root || request.c( 'TileBagSorter' )
  var i503 = data
  i502.enable = !!i503[0]
  i502.intervalSec = i503[1]
  return i502
}

Deserializers["EndCard"] = function (request, data, root) {
  var i504 = root || request.c( 'EndCard' )
  var i505 = data
  return i504
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i506 = root || request.c( 'TilesBag' )
  var i507 = data
  var i509 = i507[0]
  var i508 = new (System.Collections.Generic.List$1(Bridge.ns('BagSlot')))
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 1, i508, '')
  }
  i506.slots = i508
  return i506
}

Deserializers["Deck"] = function (request, data, root) {
  var i512 = root || request.c( 'Deck' )
  var i513 = data
  return i512
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i514 = root || request.c( 'DeckLayer' )
  var i515 = data
  i514.id = i515[0]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i517 = data
  i516.pivot = new pc.Vec2( i517[0], i517[1] )
  i516.anchorMin = new pc.Vec2( i517[2], i517[3] )
  i516.anchorMax = new pc.Vec2( i517[4], i517[5] )
  i516.sizeDelta = new pc.Vec2( i517[6], i517[7] )
  i516.anchoredPosition3D = new pc.Vec3( i517[8], i517[9], i517[10] )
  i516.rotation = new pc.Quat(i517[11], i517[12], i517[13], i517[14])
  i516.scale = new pc.Vec3( i517[15], i517[16], i517[17] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i519 = data
  i518.enabled = !!i519[0]
  i518.planeDistance = i519[1]
  i518.referencePixelsPerUnit = i519[2]
  i518.isFallbackOverlay = !!i519[3]
  i518.renderMode = i519[4]
  i518.renderOrder = i519[5]
  i518.sortingLayerName = i519[6]
  i518.sortingOrder = i519[7]
  i518.scaleFactor = i519[8]
  request.r(i519[9], i519[10], 0, i518, 'worldCamera')
  i518.overrideSorting = !!i519[11]
  i518.pixelPerfect = !!i519[12]
  i518.targetDisplay = i519[13]
  i518.overridePixelPerfect = !!i519[14]
  return i518
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i521 = data
  i520.m_UiScaleMode = i521[0]
  i520.m_ReferencePixelsPerUnit = i521[1]
  i520.m_ScaleFactor = i521[2]
  i520.m_ReferenceResolution = new pc.Vec2( i521[3], i521[4] )
  i520.m_ScreenMatchMode = i521[5]
  i520.m_MatchWidthOrHeight = i521[6]
  i520.m_PhysicalUnit = i521[7]
  i520.m_FallbackScreenDPI = i521[8]
  i520.m_DefaultSpriteDPI = i521[9]
  i520.m_DynamicPixelsPerUnit = i521[10]
  i520.m_PresetInfoIsWorld = !!i521[11]
  return i520
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i523 = data
  i522.m_IgnoreReversedGraphics = !!i523[0]
  i522.m_BlockingObjects = i523[1]
  i522.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i523[2] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i525 = data
  i524.cullTransparentMesh = !!i525[0]
  return i524
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.Image' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'm_Sprite')
  i526.m_Type = i527[2]
  i526.m_PreserveAspect = !!i527[3]
  i526.m_FillCenter = !!i527[4]
  i526.m_FillMethod = i527[5]
  i526.m_FillAmount = i527[6]
  i526.m_FillClockwise = !!i527[7]
  i526.m_FillOrigin = i527[8]
  i526.m_UseSpriteMesh = !!i527[9]
  i526.m_PixelsPerUnitMultiplier = i527[10]
  request.r(i527[11], i527[12], 0, i526, 'm_Material')
  i526.m_Maskable = !!i527[13]
  i526.m_Color = new pc.Color(i527[14], i527[15], i527[16], i527[17])
  i526.m_RaycastTarget = !!i527[18]
  i526.m_RaycastPadding = new pc.Vec4( i527[19], i527[20], i527[21], i527[22] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i529 = data
  i528.ambientIntensity = i529[0]
  i528.reflectionIntensity = i529[1]
  i528.ambientMode = i529[2]
  i528.ambientLight = new pc.Color(i529[3], i529[4], i529[5], i529[6])
  i528.ambientSkyColor = new pc.Color(i529[7], i529[8], i529[9], i529[10])
  i528.ambientGroundColor = new pc.Color(i529[11], i529[12], i529[13], i529[14])
  i528.ambientEquatorColor = new pc.Color(i529[15], i529[16], i529[17], i529[18])
  i528.fogColor = new pc.Color(i529[19], i529[20], i529[21], i529[22])
  i528.fogEndDistance = i529[23]
  i528.fogStartDistance = i529[24]
  i528.fogDensity = i529[25]
  i528.fog = !!i529[26]
  request.r(i529[27], i529[28], 0, i528, 'skybox')
  i528.fogMode = i529[29]
  var i531 = i529[30]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i531[i + 0]) );
  }
  i528.lightmaps = i530
  i528.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i529[31], i528.lightProbes)
  i528.lightmapsMode = i529[32]
  i528.mixedBakeMode = i529[33]
  i528.environmentLightingMode = i529[34]
  i528.ambientProbe = new pc.SphericalHarmonicsL2(i529[35])
  i528.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i529[36])
  i528.useReferenceAmbientProbe = !!i529[37]
  request.r(i529[38], i529[39], 0, i528, 'customReflection')
  request.r(i529[40], i529[41], 0, i528, 'defaultReflection')
  i528.defaultReflectionMode = i529[42]
  i528.defaultReflectionResolution = i529[43]
  i528.sunLightObjectId = i529[44]
  i528.pixelLightCount = i529[45]
  i528.defaultReflectionHDR = !!i529[46]
  i528.hasLightDataAsset = !!i529[47]
  i528.hasManualGenerate = !!i529[48]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'lightmapColor')
  request.r(i535[2], i535[3], 0, i534, 'lightmapDirection')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i536 = root || new UnityEngine.LightProbes()
  var i537 = data
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i545 = data
  var i547 = i545[0]
  var i546 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i547.length; i += 1) {
    i546.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i547[i + 0]));
  }
  i544.ShaderCompilationErrors = i546
  i544.name = i545[1]
  i544.guid = i545[2]
  var i549 = i545[3]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( i549[i + 0] );
  }
  i544.shaderDefinedKeywords = i548
  var i551 = i545[4]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i551[i + 0]) );
  }
  i544.passes = i550
  var i553 = i545[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i553[i + 0]) );
  }
  i544.usePasses = i552
  var i555 = i545[6]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i555[i + 0]) );
  }
  i544.defaultParameterValues = i554
  request.r(i545[7], i545[8], 0, i544, 'unityFallbackShader')
  i544.readDepth = !!i545[9]
  i544.isCreatedByShaderGraph = !!i545[10]
  i544.usedBatchUniforms = i545[11]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i559 = data
  i558.shaderName = i559[0]
  i558.errorMessage = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i564 = root || new pc.UnityShaderPass()
  var i565 = data
  i564.id = i565[0]
  i564.subShaderIndex = i565[1]
  i564.name = i565[2]
  i564.passType = i565[3]
  i564.grabPassTextureName = i565[4]
  i564.usePass = !!i565[5]
  i564.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[6], i564.zTest)
  i564.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[7], i564.zWrite)
  i564.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[8], i564.culling)
  i564.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i565[9], i564.blending)
  i564.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i565[10], i564.alphaBlending)
  i564.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[11], i564.colorWriteMask)
  i564.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[12], i564.offsetUnits)
  i564.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[13], i564.offsetFactor)
  i564.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[14], i564.stencilRef)
  i564.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[15], i564.stencilReadMask)
  i564.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[16], i564.stencilWriteMask)
  i564.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[17], i564.stencilOp)
  i564.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[18], i564.stencilOpFront)
  i564.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[19], i564.stencilOpBack)
  var i567 = i565[20]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i567[i + 0]) );
  }
  i564.tags = i566
  var i569 = i565[21]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( i569[i + 0] );
  }
  i564.passDefinedKeywords = i568
  var i571 = i565[22]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i571[i + 0]) );
  }
  i564.passDefinedKeywordGroups = i570
  var i573 = i565[23]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i573[i + 0]) );
  }
  i564.variants = i572
  var i575 = i565[24]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i575[i + 0]) );
  }
  i564.excludedVariants = i574
  i564.hasDepthReader = !!i565[25]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i577 = data
  i576.val = i577[0]
  i576.name = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i579 = data
  i578.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[0], i578.src)
  i578.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[1], i578.dst)
  i578.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[2], i578.op)
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i581 = data
  i580.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[0], i580.pass)
  i580.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[1], i580.fail)
  i580.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[2], i580.zFail)
  i580.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[3], i580.comp)
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i585 = data
  i584.name = i585[0]
  i584.value = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i589 = data
  var i591 = i589[0]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i588.keywords = i590
  i588.hasDiscard = !!i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i595 = data
  i594.passId = i595[0]
  i594.subShaderIndex = i595[1]
  var i597 = i595[2]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( i597[i + 0] );
  }
  i594.keywords = i596
  i594.vertexProgram = i595[3]
  i594.fragmentProgram = i595[4]
  i594.compiledForWebGL2 = !!i595[5]
  i594.readDepth = !!i595[6]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'shader')
  i600.pass = i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i605 = data
  i604.name = i605[0]
  i604.type = i605[1]
  i604.value = new pc.Vec4( i605[2], i605[3], i605[4], i605[5] )
  i604.textureValue = i605[6]
  i604.shaderPropertyFlag = i605[7]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i607 = data
  i606.name = i607[0]
  request.r(i607[1], i607[2], 0, i606, 'texture')
  i606.aabb = i607[3]
  i606.vertices = i607[4]
  i606.triangles = i607[5]
  i606.textureRect = UnityEngine.Rect.MinMaxRect(i607[6], i607[7], i607[8], i607[9])
  i606.packedRect = UnityEngine.Rect.MinMaxRect(i607[10], i607[11], i607[12], i607[13])
  i606.border = new pc.Vec4( i607[14], i607[15], i607[16], i607[17] )
  i606.transparency = i607[18]
  i606.bounds = i607[19]
  i606.pixelsPerUnit = i607[20]
  i606.textureWidth = i607[21]
  i606.textureHeight = i607[22]
  i606.nativeSize = new pc.Vec2( i607[23], i607[24] )
  i606.pivot = new pc.Vec2( i607[25], i607[26] )
  i606.textureRectOffset = new pc.Vec2( i607[27], i607[28] )
  return i606
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i609 = data
  i608._svcLunaVersion = i609[0]
  var i611 = i609[1]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i611.length; i += 1) {
    i610.add(request.d(' .  ', i611[i + 0]));
  }
  i608._shaderVariants = i610
  var i613 = i609[2]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i613.length; i += 1) {
    i612.add(request.d(' .  ', i613[i + 0]));
  }
  i608._usedByLunaBuild = i612
  var i615 = i609[3]
  var i614 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i615.length; i += 1) {
    i614.add(request.d(' .  ', i615[i + 0]));
  }
  i608._includedShaderVariants = i614
  var i617 = i609[4]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i617.length; i += 1) {
    i616.add(request.d(' .  ', i617[i + 0]));
  }
  i608._excludedShaderVariants = i616
  i608.version = System.Int64(i609[5])
  var i619 = i609[6]
  var i618 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i619.length; i += 1) {
    i618.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i619[i + 0]));
  }
  i608._shaderParsedShaders = i618
  var i621 = i609[7]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i621.length; i += 1) {
    i620.add(i621[i + 0]);
  }
  i608._modifiedShaders = i620
  i608.invalidShaders = !!i609[8]
  i608._cachedShadersPlatform = i609[9]
  i608._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i609[10], i608._sceneLightData)
  return i608
}

Deserializers[" .  "] = function (request, data, root) {
  var i624 = root || request.c( ' .  ' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'shader')
  i624.passType = i625[2]
  i624.passId = i625[3]
  i624.subShaderIndex = i625[4]
  i624.upToDate = !!i625[5]
  var i627 = i625[6]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i624.keywords = i626
  return i624
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i631 = data
  var i633 = i631[0]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i633.length; i += 1) {
    i632.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i633[i + 0]));
  }
  i630.ParsedSubShaders = i632
  request.r(i631[1], i631[2], 0, i630, 'Shader')
  i630.ShaderPath = i631[3]
  var i635 = i631[4]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( i635[i + 0] );
  }
  i630.ShaderDefinedKeywords = i634
  request.r(i631[5], i631[6], 0, i630, 'fallbackShader')
  var i637 = i631[7]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i637.length; i += 1) {
    i636.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i637[i + 0]));
  }
  i630.CompilationErrors = i636
  i630.shaderCompilerPlatform = i631[8]
  return i630
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i641 = data
  i640.Index = i641[0]
  var i643 = i641[1]
  var i642 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i643.length; i += 1) {
    i642.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i643[i + 0]));
  }
  i640.Passes = i642
  var i645 = i641[2]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i645[i + 0]));
  }
  i640.Tags = i644
  i640.UsePass = !!i641[3]
  return i640
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i649 = data
  i648.ShaderName = i649[0]
  var i651 = i649[1]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i651.length; i += 1) {
    i650.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i651[i + 0]));
  }
  i648.ShaderVariants = i650
  var i653 = i649[2]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( i653[i + 0] );
  }
  i648.definedKeywords = i652
  var i655 = i649[3]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i655[i + 0]));
  }
  i648.keywordGroups = i654
  i648.KeywordsMinimalCardinality = i649[4]
  i648.ContainsInvalidVariant = !!i649[5]
  i648.ShaderCompilerPlatform = i649[6]
  i648.HasDepthReader = !!i649[7]
  i648.Id = i649[8]
  i648.SubShaderIndex = i649[9]
  i648.SerializedObjectId = i649[10]
  var i657 = i649[11]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i657.length; i += 1) {
    i656.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i657[i + 0]));
  }
  i648.Tags = i656
  i648.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i649[12], i648.UsePass)
  i648.GrabPassTextureName = i649[13]
  i648.PassShaderRequirements = i649[14]
  i648.PlatformMask = i649[15]
  return i648
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i661 = data
  i660.NoShaderVariant = !!i661[0]
  i660.VertexProgram = i661[1]
  i660.FragmentProgram = i661[2]
  i660.LOD = i661[3]
  i660.readDepth = !!i661[4]
  i660.Index = i661[5]
  i660.PassId = i661[6]
  i660.SubShaderIndex = i661[7]
  var i663 = i661[8]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( i663[i + 0] );
  }
  i660.Keywords = i662
  var i665 = i661[9]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i665[i + 0]));
  }
  i660.Tags = i664
  return i660
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i669 = data
  i668.Key = i669[0]
  i668.Value = i669[1]
  return i668
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i673 = data
  var i675 = i673[0]
  var i674 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i675.length; i += 1) {
    i674.add(i675[i + 0]);
  }
  i672.Keywords = i674
  return i672
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i677 = data
  i676.shader = i677[0]
  i676.pass = i677[1]
  return i676
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i681 = data
  i680.ShaderName = i681[0]
  var i683 = i681[1]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i683[i + 0]));
  }
  i680.Details = i682
  return i680
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i687 = data
  i686.PointLightCount = i687[0]
  i686.SpotLightCount = i687[1]
  i686.DirectionalLightCount = i687[2]
  i686.LightmapOn = !!i687[3]
  i686.DirlightmapCombined = !!i687[4]
  i686.DirectionalCookieExists = !!i687[5]
  i686.PointCookieExists = !!i687[6]
  i686.SpotCookieExists = !!i687[7]
  i686.AddiitonalLightsKeywordRequired = !!i687[8]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i689 = data
  var i691 = i689[0]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i691[i + 0]) );
  }
  i688.files = i690
  i688.componentToPrefabIds = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i695 = data
  i694.path = i695[0]
  request.r(i695[1], i695[2], 0, i694, 'unityObject')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i699[i + 0]) );
  }
  i696.scriptsExecutionOrder = i698
  var i701 = i697[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i701[i + 0]) );
  }
  i696.sortingLayers = i700
  var i703 = i697[2]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i703[i + 0]) );
  }
  i696.cullingLayers = i702
  i696.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i697[3], i696.timeSettings)
  i696.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i697[4], i696.physicsSettings)
  i696.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i697[5], i696.physics2DSettings)
  i696.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i697[6], i696.qualitySettings)
  i696.enableRealtimeShadows = !!i697[7]
  i696.enableAutoInstancing = !!i697[8]
  i696.enableDynamicBatching = !!i697[9]
  i696.lightmapEncodingQuality = i697[10]
  i696.desiredColorSpace = i697[11]
  var i705 = i697[12]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i696.allTags = i704
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i709 = data
  i708.name = i709[0]
  i708.value = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i713 = data
  i712.id = i713[0]
  i712.name = i713[1]
  i712.value = i713[2]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i717 = data
  i716.id = i717[0]
  i716.name = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i719 = data
  i718.fixedDeltaTime = i719[0]
  i718.maximumDeltaTime = i719[1]
  i718.timeScale = i719[2]
  i718.maximumParticleTimestep = i719[3]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i721 = data
  i720.gravity = new pc.Vec3( i721[0], i721[1], i721[2] )
  i720.defaultSolverIterations = i721[3]
  i720.bounceThreshold = i721[4]
  i720.autoSyncTransforms = !!i721[5]
  i720.autoSimulation = !!i721[6]
  var i723 = i721[7]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i723[i + 0]) );
  }
  i720.collisionMatrix = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i727 = data
  i726.enabled = !!i727[0]
  i726.layerId = i727[1]
  i726.otherLayerId = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'material')
  i728.gravity = new pc.Vec2( i729[2], i729[3] )
  i728.positionIterations = i729[4]
  i728.velocityIterations = i729[5]
  i728.velocityThreshold = i729[6]
  i728.maxLinearCorrection = i729[7]
  i728.maxAngularCorrection = i729[8]
  i728.maxTranslationSpeed = i729[9]
  i728.maxRotationSpeed = i729[10]
  i728.baumgarteScale = i729[11]
  i728.baumgarteTOIScale = i729[12]
  i728.timeToSleep = i729[13]
  i728.linearSleepTolerance = i729[14]
  i728.angularSleepTolerance = i729[15]
  i728.defaultContactOffset = i729[16]
  i728.autoSimulation = !!i729[17]
  i728.queriesHitTriggers = !!i729[18]
  i728.queriesStartInColliders = !!i729[19]
  i728.callbacksOnDisable = !!i729[20]
  i728.reuseCollisionCallbacks = !!i729[21]
  i728.autoSyncTransforms = !!i729[22]
  var i731 = i729[23]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i731[i + 0]) );
  }
  i728.collisionMatrix = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i735 = data
  i734.enabled = !!i735[0]
  i734.layerId = i735[1]
  i734.otherLayerId = i735[2]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i739[i + 0]) );
  }
  i736.qualityLevels = i738
  var i741 = i737[1]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i736.names = i740
  i736.shadows = i737[2]
  i736.anisotropicFiltering = i737[3]
  i736.antiAliasing = i737[4]
  i736.lodBias = i737[5]
  i736.shadowCascades = i737[6]
  i736.shadowDistance = i737[7]
  i736.shadowmaskMode = i737[8]
  i736.shadowProjection = i737[9]
  i736.shadowResolution = i737[10]
  i736.softParticles = !!i737[11]
  i736.softVegetation = !!i737[12]
  i736.activeColorSpace = i737[13]
  i736.desiredColorSpace = i737[14]
  i736.masterTextureLimit = i737[15]
  i736.maxQueuedFrames = i737[16]
  i736.particleRaycastBudget = i737[17]
  i736.pixelLightCount = i737[18]
  i736.realtimeReflectionProbes = !!i737[19]
  i736.shadowCascade2Split = i737[20]
  i736.shadowCascade4Split = new pc.Vec3( i737[21], i737[22], i737[23] )
  i736.streamingMipmapsActive = !!i737[24]
  i736.vSyncCount = i737[25]
  i736.asyncUploadBufferSize = i737[26]
  i736.asyncUploadTimeSlice = i737[27]
  i736.billboardsFaceCameraPosition = !!i737[28]
  i736.shadowNearPlaneOffset = i737[29]
  i736.streamingMipmapsMemoryBudget = i737[30]
  i736.maximumLODLevel = i737[31]
  i736.streamingMipmapsAddAllCameras = !!i737[32]
  i736.streamingMipmapsMaxLevelReduction = i737[33]
  i736.streamingMipmapsRenderersPerFrame = i737[34]
  i736.resolutionScalingFixedDPIFactor = i737[35]
  i736.streamingMipmapsMaxFileIORequests = i737[36]
  i736.currentQualityLevel = i737[37]
  return i736
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i747 = data
  i746.SubShaderIndex = i747[0]
  i746.PassId = i747[1]
  var i749 = i747[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i746.ShaderVariantKeywords = i748
  var i751 = i747[3]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i746.Messages = i750
  return i746
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[10],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[56],"64":[56],"65":[56],"66":[56],"67":[56],"68":[56],"69":[10],"70":[71],"72":[73],"74":[73],"30":[29],"75":[10],"76":[29],"77":[71,29],"78":[29,33],"79":[29],"80":[33,29],"81":[71],"82":[33,29],"83":[29],"84":[85],"86":[29],"87":[29],"32":[30],"34":[33,29],"88":[29],"31":[30],"89":[29],"90":[29],"91":[29],"92":[29],"93":[29],"94":[29],"95":[29],"96":[29],"97":[29],"98":[33,29],"99":[29],"100":[29],"101":[29],"102":[29],"103":[33,29],"104":[29],"105":[13],"106":[13],"14":[13],"107":[13],"108":[10],"109":[10],"110":[85],"111":[4],"112":[113],"114":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Tile","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","UnityEngine.Material","UnityEngine.Sprite","TileSlot","BagSlot","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileSpawner","TileActions","TileLocker","TilesBag","TileSpawnAnimation","MatchCondition","LoseCondition","WinCondition","InputTouch","TileBagSorter","EndCard","DeckLayer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Texture2D","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.buildID = "f795fa3d-525e-4cc6-a3f5-43530b02620c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

