var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointSpring' )
  var i549 = data
  i548.spring = i549[0]
  i548.damper = i549[1]
  i548.targetPosition = i549[2]
  return i548
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointMotor' )
  var i551 = data
  i550.m_TargetVelocity = i551[0]
  i550.m_Force = i551[1]
  i550.m_FreeSpin = i551[2]
  return i550
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointLimits' )
  var i553 = data
  i552.m_Min = i553[0]
  i552.m_Max = i553[1]
  i552.m_Bounciness = i553[2]
  i552.m_BounceMinVelocity = i553[3]
  i552.m_ContactDistance = i553[4]
  i552.minBounce = i553[5]
  i552.maxBounce = i553[6]
  return i552
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointDrive' )
  var i555 = data
  i554.m_PositionSpring = i555[0]
  i554.m_PositionDamper = i555[1]
  i554.m_MaximumForce = i555[2]
  return i554
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i557 = data
  i556.m_Spring = i557[0]
  i556.m_Damper = i557[1]
  return i556
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i559 = data
  i558.m_Limit = i559[0]
  i558.m_Bounciness = i559[1]
  i558.m_ContactDistance = i559[2]
  return i558
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i561 = data
  i560.m_ExtremumSlip = i561[0]
  i560.m_ExtremumValue = i561[1]
  i560.m_AsymptoteSlip = i561[2]
  i560.m_AsymptoteValue = i561[3]
  i560.m_Stiffness = i561[4]
  return i560
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i563 = data
  i562.m_LowerAngle = i563[0]
  i562.m_UpperAngle = i563[1]
  return i562
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i565 = data
  i564.m_MotorSpeed = i565[0]
  i564.m_MaximumMotorTorque = i565[1]
  return i564
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i567 = data
  i566.m_DampingRatio = i567[0]
  i566.m_Frequency = i567[1]
  i566.m_Angle = i567[2]
  return i566
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i569 = data
  i568.m_LowerTranslation = i569[0]
  i568.m_UpperTranslation = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i570 = root || new pc.UnityMaterial()
  var i571 = data
  i570.name = i571[0]
  request.r(i571[1], i571[2], 0, i570, 'shader')
  i570.renderQueue = i571[3]
  i570.enableInstancing = !!i571[4]
  var i573 = i571[5]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i573[i + 0]) );
  }
  i570.floatParameters = i572
  var i575 = i571[6]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i575[i + 0]) );
  }
  i570.colorParameters = i574
  var i577 = i571[7]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i577[i + 0]) );
  }
  i570.vectorParameters = i576
  var i579 = i571[8]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i579[i + 0]) );
  }
  i570.textureParameters = i578
  var i581 = i571[9]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i581[i + 0]) );
  }
  i570.materialFlags = i580
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i589 = data
  i588.name = i589[0]
  i588.value = new pc.Color(i589[1], i589[2], i589[3], i589[4])
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i593 = data
  i592.name = i593[0]
  i592.value = new pc.Vec4( i593[1], i593[2], i593[3], i593[4] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i597 = data
  i596.name = i597[0]
  request.r(i597[1], i597[2], 0, i596, 'value')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i601 = data
  i600.name = i601[0]
  i600.enabled = !!i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i603 = data
  i602.name = i603[0]
  i602.width = i603[1]
  i602.height = i603[2]
  i602.mipmapCount = i603[3]
  i602.anisoLevel = i603[4]
  i602.filterMode = i603[5]
  i602.hdr = !!i603[6]
  i602.format = i603[7]
  i602.wrapMode = i603[8]
  i602.alphaIsTransparency = !!i603[9]
  i602.alphaSource = i603[10]
  i602.graphicsFormat = i603[11]
  i602.sRGBTexture = !!i603[12]
  i602.desiredColorSpace = i603[13]
  i602.wrapU = i603[14]
  i602.wrapV = i603[15]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i605 = data
  i604.position = new pc.Vec3( i605[0], i605[1], i605[2] )
  i604.scale = new pc.Vec3( i605[3], i605[4], i605[5] )
  i604.rotation = new pc.Quat(i605[6], i605[7], i605[8], i605[9])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i607 = data
  i606.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i607[0], i606.main)
  i606.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i607[1], i606.colorBySpeed)
  i606.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i607[2], i606.colorOverLifetime)
  i606.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i607[3], i606.emission)
  i606.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i607[4], i606.rotationBySpeed)
  i606.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i607[5], i606.rotationOverLifetime)
  i606.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i607[6], i606.shape)
  i606.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i607[7], i606.sizeBySpeed)
  i606.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i607[8], i606.sizeOverLifetime)
  i606.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i607[9], i606.textureSheetAnimation)
  i606.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i607[10], i606.velocityOverLifetime)
  i606.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i607[11], i606.noise)
  i606.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i607[12], i606.inheritVelocity)
  i606.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i607[13], i606.forceOverLifetime)
  i606.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i607[14], i606.limitVelocityOverLifetime)
  i606.useAutoRandomSeed = !!i607[15]
  i606.randomSeed = i607[16]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemMain()
  var i609 = data
  i608.duration = i609[0]
  i608.loop = !!i609[1]
  i608.prewarm = !!i609[2]
  i608.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.startDelay)
  i608.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[4], i608.startLifetime)
  i608.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[5], i608.startSpeed)
  i608.startSize3D = !!i609[6]
  i608.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[7], i608.startSizeX)
  i608.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[8], i608.startSizeY)
  i608.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[9], i608.startSizeZ)
  i608.startRotation3D = !!i609[10]
  i608.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[11], i608.startRotationX)
  i608.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[12], i608.startRotationY)
  i608.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[13], i608.startRotationZ)
  i608.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i609[14], i608.startColor)
  i608.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[15], i608.gravityModifier)
  i608.simulationSpace = i609[16]
  request.r(i609[17], i609[18], 0, i608, 'customSimulationSpace')
  i608.simulationSpeed = i609[19]
  i608.useUnscaledTime = !!i609[20]
  i608.scalingMode = i609[21]
  i608.playOnAwake = !!i609[22]
  i608.maxParticles = i609[23]
  i608.emitterVelocityMode = i609[24]
  i608.stopAction = i609[25]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i610 = root || new pc.MinMaxCurve()
  var i611 = data
  i610.mode = i611[0]
  i610.curveMin = new pc.AnimationCurve( { keys_flow: i611[1] } )
  i610.curveMax = new pc.AnimationCurve( { keys_flow: i611[2] } )
  i610.curveMultiplier = i611[3]
  i610.constantMin = i611[4]
  i610.constantMax = i611[5]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i612 = root || new pc.MinMaxGradient()
  var i613 = data
  i612.mode = i613[0]
  i612.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i613[1], i612.gradientMin)
  i612.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i613[2], i612.gradientMax)
  i612.colorMin = new pc.Color(i613[3], i613[4], i613[5], i613[6])
  i612.colorMax = new pc.Color(i613[7], i613[8], i613[9], i613[10])
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i615 = data
  i614.mode = i615[0]
  var i617 = i615[1]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i617[i + 0]) );
  }
  i614.colorKeys = i616
  var i619 = i615[2]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i619[i + 0]) );
  }
  i614.alphaKeys = i618
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemColorBySpeed()
  var i621 = data
  i620.enabled = !!i621[0]
  i620.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i621[1], i620.color)
  i620.range = new pc.Vec2( i621[2], i621[3] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i625 = data
  i624.color = new pc.Color(i625[0], i625[1], i625[2], i625[3])
  i624.time = i625[4]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i629 = data
  i628.alpha = i629[0]
  i628.time = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemColorOverLifetime()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i631[1], i630.color)
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemEmitter()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[1], i632.rateOverTime)
  i632.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[2], i632.rateOverDistance)
  var i635 = i633[3]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i635[i + 0]) );
  }
  i632.bursts = i634
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemBurst()
  var i639 = data
  i638.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[0], i638.count)
  i638.cycleCount = i639[1]
  i638.minCount = i639[2]
  i638.maxCount = i639[3]
  i638.repeatInterval = i639[4]
  i638.time = i639[5]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemRotationBySpeed()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[1], i640.x)
  i640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.y)
  i640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.z)
  i640.separateAxes = !!i641[4]
  i640.range = new pc.Vec2( i641[5], i641[6] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemRotationOverLifetime()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.x)
  i642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.y)
  i642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.z)
  i642.separateAxes = !!i643[4]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemShape()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.shapeType = i645[1]
  i644.randomDirectionAmount = i645[2]
  i644.sphericalDirectionAmount = i645[3]
  i644.randomPositionAmount = i645[4]
  i644.alignToDirection = !!i645[5]
  i644.radius = i645[6]
  i644.radiusMode = i645[7]
  i644.radiusSpread = i645[8]
  i644.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[9], i644.radiusSpeed)
  i644.radiusThickness = i645[10]
  i644.angle = i645[11]
  i644.length = i645[12]
  i644.boxThickness = new pc.Vec3( i645[13], i645[14], i645[15] )
  i644.meshShapeType = i645[16]
  request.r(i645[17], i645[18], 0, i644, 'mesh')
  request.r(i645[19], i645[20], 0, i644, 'meshRenderer')
  request.r(i645[21], i645[22], 0, i644, 'skinnedMeshRenderer')
  i644.useMeshMaterialIndex = !!i645[23]
  i644.meshMaterialIndex = i645[24]
  i644.useMeshColors = !!i645[25]
  i644.normalOffset = i645[26]
  i644.arc = i645[27]
  i644.arcMode = i645[28]
  i644.arcSpread = i645[29]
  i644.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[30], i644.arcSpeed)
  i644.donutRadius = i645[31]
  i644.position = new pc.Vec3( i645[32], i645[33], i645[34] )
  i644.rotation = new pc.Vec3( i645[35], i645[36], i645[37] )
  i644.scale = new pc.Vec3( i645[38], i645[39], i645[40] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemSizeBySpeed()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[1], i646.x)
  i646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.y)
  i646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.z)
  i646.separateAxes = !!i647[4]
  i646.range = new pc.Vec2( i647[5], i647[6] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemSizeOverLifetime()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.x)
  i648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.y)
  i648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[3], i648.z)
  i648.separateAxes = !!i649[4]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.mode = i651[1]
  i650.animation = i651[2]
  i650.numTilesX = i651[3]
  i650.numTilesY = i651[4]
  i650.useRandomRow = !!i651[5]
  i650.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[6], i650.frameOverTime)
  i650.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[7], i650.startFrame)
  i650.cycleCount = i651[8]
  i650.rowIndex = i651[9]
  i650.flipU = i651[10]
  i650.flipV = i651[11]
  i650.spriteCount = i651[12]
  var i653 = i651[13]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i650.sprites = i652
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.x)
  i656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.y)
  i656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.z)
  i656.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[4], i656.radial)
  i656.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[5], i656.speedModifier)
  i656.space = i657[6]
  i656.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[7], i656.orbitalX)
  i656.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[8], i656.orbitalY)
  i656.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[9], i656.orbitalZ)
  i656.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[10], i656.orbitalOffsetX)
  i656.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[11], i656.orbitalOffsetY)
  i656.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[12], i656.orbitalOffsetZ)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemNoise()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.separateAxes = !!i659[1]
  i658.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.strengthX)
  i658.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.strengthY)
  i658.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[4], i658.strengthZ)
  i658.frequency = i659[5]
  i658.damping = !!i659[6]
  i658.octaveCount = i659[7]
  i658.octaveMultiplier = i659[8]
  i658.octaveScale = i659[9]
  i658.quality = i659[10]
  i658.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[11], i658.scrollSpeed)
  i658.scrollSpeedMultiplier = i659[12]
  i658.remapEnabled = !!i659[13]
  i658.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[14], i658.remapX)
  i658.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[15], i658.remapY)
  i658.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[16], i658.remapZ)
  i658.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[17], i658.positionAmount)
  i658.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[18], i658.rotationAmount)
  i658.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[19], i658.sizeAmount)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemInheritVelocity()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.mode = i661[1]
  i660.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.curve)
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemForceOverLifetime()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.x)
  i662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.y)
  i662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.z)
  i662.space = i663[4]
  i662.randomized = !!i663[5]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.limit)
  i664.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.limitX)
  i664.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.limitY)
  i664.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[4], i664.limitZ)
  i664.dampen = i665[5]
  i664.separateAxes = !!i665[6]
  i664.space = i665[7]
  i664.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[8], i664.drag)
  i664.multiplyDragByParticleSize = !!i665[9]
  i664.multiplyDragByParticleVelocity = !!i665[10]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i667 = data
  i666.enabled = !!i667[0]
  request.r(i667[1], i667[2], 0, i666, 'sharedMaterial')
  var i669 = i667[3]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sharedMaterials = i668
  i666.receiveShadows = !!i667[4]
  i666.shadowCastingMode = i667[5]
  i666.sortingLayerID = i667[6]
  i666.sortingOrder = i667[7]
  i666.lightmapIndex = i667[8]
  i666.lightmapSceneIndex = i667[9]
  i666.lightmapScaleOffset = new pc.Vec4( i667[10], i667[11], i667[12], i667[13] )
  i666.lightProbeUsage = i667[14]
  i666.reflectionProbeUsage = i667[15]
  request.r(i667[16], i667[17], 0, i666, 'mesh')
  i666.meshCount = i667[18]
  i666.activeVertexStreamsCount = i667[19]
  i666.alignment = i667[20]
  i666.renderMode = i667[21]
  i666.sortMode = i667[22]
  i666.lengthScale = i667[23]
  i666.velocityScale = i667[24]
  i666.cameraVelocityScale = i667[25]
  i666.normalDirection = i667[26]
  i666.sortingFudge = i667[27]
  i666.minParticleSize = i667[28]
  i666.maxParticleSize = i667[29]
  i666.pivot = new pc.Vec3( i667[30], i667[31], i667[32] )
  request.r(i667[33], i667[34], 0, i666, 'trailMaterial')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i673 = data
  i672.name = i673[0]
  i672.tagId = i673[1]
  i672.enabled = !!i673[2]
  i672.isStatic = !!i673[3]
  i672.layer = i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i675 = data
  i674.name = i675[0]
  i674.halfPrecision = !!i675[1]
  i674.useUInt32IndexFormat = !!i675[2]
  i674.vertexCount = i675[3]
  i674.aabb = i675[4]
  var i677 = i675[5]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( !!i677[i + 0] );
  }
  i674.streams = i676
  i674.vertices = i675[6]
  var i679 = i675[7]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i679[i + 0]) );
  }
  i674.subMeshes = i678
  var i681 = i675[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 16) {
    i680.push( new pc.Mat4().setData(i681[i + 0], i681[i + 1], i681[i + 2], i681[i + 3],  i681[i + 4], i681[i + 5], i681[i + 6], i681[i + 7],  i681[i + 8], i681[i + 9], i681[i + 10], i681[i + 11],  i681[i + 12], i681[i + 13], i681[i + 14], i681[i + 15]) );
  }
  i674.bindposes = i680
  var i683 = i675[9]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i683[i + 0]) );
  }
  i674.blendShapes = i682
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i689 = data
  i688.triangles = i689[0]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i695 = data
  i694.name = i695[0]
  var i697 = i695[1]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i697[i + 0]) );
  }
  i694.frames = i696
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i699 = data
  i698.pivot = new pc.Vec2( i699[0], i699[1] )
  i698.anchorMin = new pc.Vec2( i699[2], i699[3] )
  i698.anchorMax = new pc.Vec2( i699[4], i699[5] )
  i698.sizeDelta = new pc.Vec2( i699[6], i699[7] )
  i698.anchoredPosition3D = new pc.Vec3( i699[8], i699[9], i699[10] )
  i698.rotation = new pc.Quat(i699[11], i699[12], i699[13], i699[14])
  i698.scale = new pc.Vec3( i699[15], i699[16], i699[17] )
  return i698
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i700 = root || request.c( 'QuestSlot' )
  var i701 = data
  i700.InitialScale = new pc.Vec3( i701[0], i701[1], i701[2] )
  i700.MaximumScale = new pc.Vec3( i701[3], i701[4], i701[5] )
  i700.EndScale = new pc.Vec3( i701[6], i701[7], i701[8] )
  i700.animationDuration = i701[9]
  i700.maxSizeTrigger = i701[10]
  request.r(i701[11], i701[12], 0, i700, 'type')
  i700.amount = i701[13]
  i700.locked = !!i701[14]
  request.r(i701[15], i701[16], 0, i700, 'icon')
  request.r(i701[17], i701[18], 0, i700, 'amountTxt')
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i703 = data
  i702.cullTransparentMesh = !!i703[0]
  return i702
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.Image' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Sprite')
  i704.m_Type = i705[2]
  i704.m_PreserveAspect = !!i705[3]
  i704.m_FillCenter = !!i705[4]
  i704.m_FillMethod = i705[5]
  i704.m_FillAmount = i705[6]
  i704.m_FillClockwise = !!i705[7]
  i704.m_FillOrigin = i705[8]
  i704.m_UseSpriteMesh = !!i705[9]
  i704.m_PixelsPerUnitMultiplier = i705[10]
  request.r(i705[11], i705[12], 0, i704, 'm_Material')
  i704.m_Maskable = !!i705[13]
  i704.m_Color = new pc.Color(i705[14], i705[15], i705[16], i705[17])
  i704.m_RaycastTarget = !!i705[18]
  i704.m_RaycastPadding = new pc.Vec4( i705[19], i705[20], i705[21], i705[22] )
  return i704
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i706 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i707 = data
  i706.m_hasFontAssetChanged = !!i707[0]
  request.r(i707[1], i707[2], 0, i706, 'm_baseMaterial')
  i706.m_maskOffset = new pc.Vec4( i707[3], i707[4], i707[5], i707[6] )
  i706.m_text = i707[7]
  i706.m_isRightToLeft = !!i707[8]
  request.r(i707[9], i707[10], 0, i706, 'm_fontAsset')
  request.r(i707[11], i707[12], 0, i706, 'm_sharedMaterial')
  var i709 = i707[13]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.m_fontSharedMaterials = i708
  request.r(i707[14], i707[15], 0, i706, 'm_fontMaterial')
  var i711 = i707[16]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i706.m_fontMaterials = i710
  i706.m_fontColor32 = UnityEngine.Color32.ConstructColor(i707[17], i707[18], i707[19], i707[20])
  i706.m_fontColor = new pc.Color(i707[21], i707[22], i707[23], i707[24])
  i706.m_enableVertexGradient = !!i707[25]
  i706.m_colorMode = i707[26]
  i706.m_fontColorGradient = request.d('TMPro.VertexGradient', i707[27], i706.m_fontColorGradient)
  request.r(i707[28], i707[29], 0, i706, 'm_fontColorGradientPreset')
  request.r(i707[30], i707[31], 0, i706, 'm_spriteAsset')
  i706.m_tintAllSprites = !!i707[32]
  request.r(i707[33], i707[34], 0, i706, 'm_StyleSheet')
  i706.m_TextStyleHashCode = i707[35]
  i706.m_overrideHtmlColors = !!i707[36]
  i706.m_faceColor = UnityEngine.Color32.ConstructColor(i707[37], i707[38], i707[39], i707[40])
  i706.m_fontSize = i707[41]
  i706.m_fontSizeBase = i707[42]
  i706.m_fontWeight = i707[43]
  i706.m_enableAutoSizing = !!i707[44]
  i706.m_fontSizeMin = i707[45]
  i706.m_fontSizeMax = i707[46]
  i706.m_fontStyle = i707[47]
  i706.m_HorizontalAlignment = i707[48]
  i706.m_VerticalAlignment = i707[49]
  i706.m_textAlignment = i707[50]
  i706.m_characterSpacing = i707[51]
  i706.m_wordSpacing = i707[52]
  i706.m_lineSpacing = i707[53]
  i706.m_lineSpacingMax = i707[54]
  i706.m_paragraphSpacing = i707[55]
  i706.m_charWidthMaxAdj = i707[56]
  i706.m_enableWordWrapping = !!i707[57]
  i706.m_wordWrappingRatios = i707[58]
  i706.m_overflowMode = i707[59]
  request.r(i707[60], i707[61], 0, i706, 'm_linkedTextComponent')
  request.r(i707[62], i707[63], 0, i706, 'parentLinkedComponent')
  i706.m_enableKerning = !!i707[64]
  i706.m_enableExtraPadding = !!i707[65]
  i706.checkPaddingRequired = !!i707[66]
  i706.m_isRichText = !!i707[67]
  i706.m_parseCtrlCharacters = !!i707[68]
  i706.m_isOrthographic = !!i707[69]
  i706.m_isCullingEnabled = !!i707[70]
  i706.m_horizontalMapping = i707[71]
  i706.m_verticalMapping = i707[72]
  i706.m_uvLineOffset = i707[73]
  i706.m_geometrySortingOrder = i707[74]
  i706.m_IsTextObjectScaleStatic = !!i707[75]
  i706.m_VertexBufferAutoSizeReduction = !!i707[76]
  i706.m_useMaxVisibleDescender = !!i707[77]
  i706.m_pageToDisplay = i707[78]
  i706.m_margin = new pc.Vec4( i707[79], i707[80], i707[81], i707[82] )
  i706.m_isUsingLegacyAnimationComponent = !!i707[83]
  i706.m_isVolumetricText = !!i707[84]
  request.r(i707[85], i707[86], 0, i706, 'm_Material')
  i706.m_Maskable = !!i707[87]
  i706.m_Color = new pc.Color(i707[88], i707[89], i707[90], i707[91])
  i706.m_RaycastTarget = !!i707[92]
  i706.m_RaycastPadding = new pc.Vec4( i707[93], i707[94], i707[95], i707[96] )
  return i706
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i712 = root || request.c( 'TMPro.VertexGradient' )
  var i713 = data
  i712.topLeft = new pc.Color(i713[0], i713[1], i713[2], i713[3])
  i712.topRight = new pc.Color(i713[4], i713[5], i713[6], i713[7])
  i712.bottomLeft = new pc.Color(i713[8], i713[9], i713[10], i713[11])
  i712.bottomRight = new pc.Color(i713[12], i713[13], i713[14], i713[15])
  return i712
}

Deserializers["Tile"] = function (request, data, root) {
  var i714 = root || request.c( 'Tile' )
  var i715 = data
  i714.layer = i715[0]
  i714.line = i715[1]
  request.r(i715[2], i715[3], 0, i714, 'icon')
  request.r(i715[4], i715[5], 0, i714, 'lockTile')
  request.r(i715[6], i715[7], 0, i714, 'background')
  request.r(i715[8], i715[9], 0, i714, 'trail')
  i714.defaultSize = new pc.Vec3( i715[10], i715[11], i715[12] )
  i714.speed = i715[13]
  i714.spawnAnimSize = i715[14]
  i714.spawnAnimDuration = i715[15]
  i714.locked = !!i715[16]
  i714.isHidden = !!i715[17]
  i714.lockAlpha = i715[18]
  i714.fadeDuration = i715[19]
  i714.debug = !!i715[20]
  request.r(i715[21], i715[22], 0, i714, 'type')
  i714.iconSort = i715[23]
  i714.backGroundSort = i715[24]
  i714.disabledSort = i715[25]
  i714.trailSort = i715[26]
  var i717 = i715[27]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i714.coverTiles = i716
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i721 = data
  i720.usedByComposite = !!i721[0]
  i720.autoTiling = !!i721[1]
  i720.size = new pc.Vec2( i721[2], i721[3] )
  i720.edgeRadius = i721[4]
  i720.enabled = !!i721[5]
  i720.isTrigger = !!i721[6]
  i720.usedByEffector = !!i721[7]
  i720.density = i721[8]
  i720.offset = new pc.Vec2( i721[9], i721[10] )
  request.r(i721[11], i721[12], 0, i720, 'material')
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i723 = data
  i722.bodyType = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'material')
  i722.simulated = !!i723[3]
  i722.useAutoMass = !!i723[4]
  i722.mass = i723[5]
  i722.drag = i723[6]
  i722.angularDrag = i723[7]
  i722.gravityScale = i723[8]
  i722.collisionDetectionMode = i723[9]
  i722.sleepMode = i723[10]
  i722.constraints = i723[11]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i725 = data
  i724.enabled = !!i725[0]
  request.r(i725[1], i725[2], 0, i724, 'sharedMaterial')
  var i727 = i725[3]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.sharedMaterials = i726
  i724.receiveShadows = !!i725[4]
  i724.shadowCastingMode = i725[5]
  i724.sortingLayerID = i725[6]
  i724.sortingOrder = i725[7]
  i724.lightmapIndex = i725[8]
  i724.lightmapSceneIndex = i725[9]
  i724.lightmapScaleOffset = new pc.Vec4( i725[10], i725[11], i725[12], i725[13] )
  i724.lightProbeUsage = i725[14]
  i724.reflectionProbeUsage = i725[15]
  i724.color = new pc.Color(i725[16], i725[17], i725[18], i725[19])
  request.r(i725[20], i725[21], 0, i724, 'sprite')
  i724.flipX = !!i725[22]
  i724.flipY = !!i725[23]
  i724.drawMode = i725[24]
  i724.size = new pc.Vec2( i725[25], i725[26] )
  i724.tileMode = i725[27]
  i724.adaptiveModeThreshold = i725[28]
  i724.maskInteraction = i725[29]
  i724.spriteSortPoint = i725[30]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i729 = data
  i728.enabled = !!i729[0]
  request.r(i729[1], i729[2], 0, i728, 'sharedMaterial')
  var i731 = i729[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.sharedMaterials = i730
  i728.receiveShadows = !!i729[4]
  i728.shadowCastingMode = i729[5]
  i728.sortingLayerID = i729[6]
  i728.sortingOrder = i729[7]
  i728.lightmapIndex = i729[8]
  i728.lightmapSceneIndex = i729[9]
  i728.lightmapScaleOffset = new pc.Vec4( i729[10], i729[11], i729[12], i729[13] )
  i728.lightProbeUsage = i729[14]
  i728.reflectionProbeUsage = i729[15]
  var i733 = i729[16]
  var i732 = []
  for(var i = 0; i < i733.length; i += 3) {
    i732.push( new pc.Vec3( i733[i + 0], i733[i + 1], i733[i + 2] ) );
  }
  i728.positions = i732
  i728.positionCount = i729[17]
  i728.time = i729[18]
  i728.startWidth = i729[19]
  i728.endWidth = i729[20]
  i728.widthMultiplier = i729[21]
  i728.autodestruct = !!i729[22]
  i728.emitting = !!i729[23]
  i728.numCornerVertices = i729[24]
  i728.numCapVertices = i729[25]
  i728.minVertexDistance = i729[26]
  i728.colorGradient = i729[27] ? new pc.ColorGradient(i729[27][0], i729[27][1], i729[27][2]) : null
  i728.startColor = new pc.Color(i729[28], i729[29], i729[30], i729[31])
  i728.endColor = new pc.Color(i729[32], i729[33], i729[34], i729[35])
  i728.generateLightingData = !!i729[36]
  i728.textureMode = i729[37]
  i728.alignment = i729[38]
  i728.widthCurve = new pc.AnimationCurve( { keys_flow: i729[39] } )
  return i728
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i736 = root || request.c( 'TileSlot' )
  var i737 = data
  i736.ID = i737[0]
  request.r(i737[1], i737[2], 0, i736, 'Tile')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i739 = data
  i738.name = i739[0]
  i738.index = i739[1]
  i738.startup = !!i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i741 = data
  i740.enabled = !!i741[0]
  i740.aspect = i741[1]
  i740.orthographic = !!i741[2]
  i740.orthographicSize = i741[3]
  i740.backgroundColor = new pc.Color(i741[4], i741[5], i741[6], i741[7])
  i740.nearClipPlane = i741[8]
  i740.farClipPlane = i741[9]
  i740.fieldOfView = i741[10]
  i740.depth = i741[11]
  i740.clearFlags = i741[12]
  i740.cullingMask = i741[13]
  i740.rect = i741[14]
  request.r(i741[15], i741[16], 0, i740, 'targetTexture')
  i740.usePhysicalProperties = !!i741[17]
  i740.focalLength = i741[18]
  i740.sensorSize = new pc.Vec2( i741[19], i741[20] )
  i740.lensShift = new pc.Vec2( i741[21], i741[22] )
  i740.gateFit = i741[23]
  return i740
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_FirstSelected')
  i742.m_sendNavigationEvents = !!i743[2]
  i742.m_DragThreshold = i743[3]
  return i742
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i745 = data
  i744.m_HorizontalAxis = i745[0]
  i744.m_VerticalAxis = i745[1]
  i744.m_SubmitButton = i745[2]
  i744.m_CancelButton = i745[3]
  i744.m_InputActionsPerSecond = i745[4]
  i744.m_RepeatDelay = i745[5]
  i744.m_ForceModuleActive = !!i745[6]
  i744.m_SendPointerHoverToParent = !!i745[7]
  return i744
}

Deserializers["Game"] = function (request, data, root) {
  var i746 = root || request.c( 'Game' )
  var i747 = data
  i746.autoGameOverInSeconds = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'deck')
  request.r(i747[3], i747[4], 0, i746, 'actions')
  request.r(i747[5], i747[6], 0, i746, 'locker')
  request.r(i747[7], i747[8], 0, i746, 'bag')
  request.r(i747[9], i747[10], 0, i746, 'spawnAnimation')
  request.r(i747[11], i747[12], 0, i746, 'tileMatcher')
  request.r(i747[13], i747[14], 0, i746, 'loseCondition')
  request.r(i747[15], i747[16], 0, i746, 'winCondition')
  request.r(i747[17], i747[18], 0, i746, 'input')
  request.r(i747[19], i747[20], 0, i746, 'endCard')
  request.r(i747[21], i747[22], 0, i746, 'quest')
  i746.useRandom = !!i747[23]
  request.r(i747[24], i747[25], 0, i746, 'spawnRandom')
  i746.tileToSpawn = i747[26]
  i746.tilesInScene = i747[27]
  var i749 = i747[28]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i746.tilesInGame = i748
  return i746
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i750 = root || request.c( 'TileSpawner' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'Game')
  request.r(i751[2], i751[3], 0, i750, 'prefab')
  var i753 = i751[4]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i750.spawned = i752
  i750.hideAtSpawn = !!i751[5]
  i750.spawnRate = i751[6]
  return i750
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i754 = root || request.c( 'TileRandomSpawner' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'Game')
  i754.spawnRate = i755[2]
  var i757 = i755[3]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i754.spawned = i756
  return i754
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i758 = root || request.c( 'TileSpawnAnimation' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'Game')
  i758.delayBetweenLines = i759[2]
  i758.delayBetweenTiles = i759[3]
  i758.delayBetweenLayers = i759[4]
  return i758
}

Deserializers["TileActions"] = function (request, data, root) {
  var i760 = root || request.c( 'TileActions' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'Game')
  return i760
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i762 = root || request.c( 'TileMatcher' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'Game')
  request.r(i763[2], i763[3], 0, i762, 'vfx')
  var i765 = i763[4]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i762.completed = i764
  var i767 = i763[5]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i762.lastMatch = i766
  return i762
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i770 = root || request.c( 'LoseCondition' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'Game')
  return i770
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i772 = root || request.c( 'WinCondition' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'Game')
  return i772
}

Deserializers["Quest"] = function (request, data, root) {
  var i774 = root || request.c( 'Quest' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'Game')
  var i777 = i775[2]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 1, i776, '')
  }
  i774.slots = i776
  return i774
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i780 = root || request.c( 'InputTouch' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'Game')
  i780.inputCooldown = i781[2]
  var i783 = i781[3]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i783.length; i += 2) {
    i782.add(new pc.Vec2( i783[i + 0], i783[i + 1] ));
  }
  i780.touches = i782
  i780.touchSize = i781[4]
  return i780
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i786 = root || request.c( 'TileBagSorter' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'Game')
  i786.enable = !!i787[2]
  i786.intervalSec = i787[3]
  return i786
}

Deserializers["EndCard"] = function (request, data, root) {
  var i788 = root || request.c( 'EndCard' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'canvas')
  request.r(i789[2], i789[3], 0, i788, 'Game')
  return i788
}

Deserializers["Sounds"] = function (request, data, root) {
  var i790 = root || request.c( 'Sounds' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'Game')
  request.r(i791[2], i791[3], 0, i790, 'tileClick')
  request.r(i791[4], i791[5], 0, i790, 'tileMerge')
  request.r(i791[6], i791[7], 0, i790, 'levelWin')
  request.r(i791[8], i791[9], 0, i790, 'leveLose')
  request.r(i791[10], i791[11], 0, i790, 'source')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'clip')
  request.r(i793[2], i793[3], 0, i792, 'outputAudioMixerGroup')
  i792.playOnAwake = !!i793[4]
  i792.loop = !!i793[5]
  i792.time = i793[6]
  i792.volume = i793[7]
  i792.pitch = i793[8]
  i792.enabled = !!i793[9]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i795 = data
  i794.enabled = !!i795[0]
  i794.planeDistance = i795[1]
  i794.referencePixelsPerUnit = i795[2]
  i794.isFallbackOverlay = !!i795[3]
  i794.renderMode = i795[4]
  i794.renderOrder = i795[5]
  i794.sortingLayerName = i795[6]
  i794.sortingOrder = i795[7]
  i794.scaleFactor = i795[8]
  request.r(i795[9], i795[10], 0, i794, 'worldCamera')
  i794.overrideSorting = !!i795[11]
  i794.pixelPerfect = !!i795[12]
  i794.targetDisplay = i795[13]
  i794.overridePixelPerfect = !!i795[14]
  return i794
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i797 = data
  i796.m_UiScaleMode = i797[0]
  i796.m_ReferencePixelsPerUnit = i797[1]
  i796.m_ScaleFactor = i797[2]
  i796.m_ReferenceResolution = new pc.Vec2( i797[3], i797[4] )
  i796.m_ScreenMatchMode = i797[5]
  i796.m_MatchWidthOrHeight = i797[6]
  i796.m_PhysicalUnit = i797[7]
  i796.m_FallbackScreenDPI = i797[8]
  i796.m_DefaultSpriteDPI = i797[9]
  i796.m_DynamicPixelsPerUnit = i797[10]
  i796.m_PresetInfoIsWorld = !!i797[11]
  return i796
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i799 = data
  i798.m_IgnoreReversedGraphics = !!i799[0]
  i798.m_BlockingObjects = i799[1]
  i798.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i799[2] )
  return i798
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i800 = root || request.c( 'ResetLocalPosition' )
  var i801 = data
  return i800
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i803 = data
  i802.m_Spacing = i803[0]
  i802.m_ChildForceExpandWidth = !!i803[1]
  i802.m_ChildForceExpandHeight = !!i803[2]
  i802.m_ChildControlWidth = !!i803[3]
  i802.m_ChildControlHeight = !!i803[4]
  i802.m_ChildScaleWidth = !!i803[5]
  i802.m_ChildScaleHeight = !!i803[6]
  i802.m_ReverseArrangement = !!i803[7]
  i802.m_Padding = UnityEngine.RectOffset.FromPaddings(i803[8], i803[9], i803[10], i803[11])
  i802.m_ChildAlignment = i803[12]
  return i802
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i805 = data
  i804.m_StartCorner = i805[0]
  i804.m_StartAxis = i805[1]
  i804.m_CellSize = new pc.Vec2( i805[2], i805[3] )
  i804.m_Spacing = new pc.Vec2( i805[4], i805[5] )
  i804.m_Constraint = i805[6]
  i804.m_ConstraintCount = i805[7]
  i804.m_Padding = UnityEngine.RectOffset.FromPaddings(i805[8], i805[9], i805[10], i805[11])
  i804.m_ChildAlignment = i805[12]
  return i804
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.Button' )
  var i807 = data
  i806.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i807[0], i806.m_OnClick)
  i806.m_Navigation = request.d('UnityEngine.UI.Navigation', i807[1], i806.m_Navigation)
  i806.m_Transition = i807[2]
  i806.m_Colors = request.d('UnityEngine.UI.ColorBlock', i807[3], i806.m_Colors)
  i806.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i807[4], i806.m_SpriteState)
  i806.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i807[5], i806.m_AnimationTriggers)
  i806.m_Interactable = !!i807[6]
  request.r(i807[7], i807[8], 0, i806, 'm_TargetGraphic')
  return i806
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i809 = data
  i808.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i809[0], i808.m_PersistentCalls)
  return i808
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('UnityEngine.Events.PersistentCall', i813[i + 0]));
  }
  i810.m_Calls = i812
  return i810
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_Target')
  i816.m_TargetAssemblyTypeName = i817[2]
  i816.m_MethodName = i817[3]
  i816.m_Mode = i817[4]
  i816.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i817[5], i816.m_Arguments)
  i816.m_CallState = i817[6]
  return i816
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_ObjectArgument')
  i818.m_ObjectArgumentAssemblyTypeName = i819[2]
  i818.m_IntArgument = i819[3]
  i818.m_FloatArgument = i819[4]
  i818.m_StringArgument = i819[5]
  i818.m_BoolArgument = !!i819[6]
  return i818
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i821 = data
  i820.m_Mode = i821[0]
  i820.m_WrapAround = !!i821[1]
  request.r(i821[2], i821[3], 0, i820, 'm_SelectOnUp')
  request.r(i821[4], i821[5], 0, i820, 'm_SelectOnDown')
  request.r(i821[6], i821[7], 0, i820, 'm_SelectOnLeft')
  request.r(i821[8], i821[9], 0, i820, 'm_SelectOnRight')
  return i820
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i823 = data
  i822.m_NormalColor = new pc.Color(i823[0], i823[1], i823[2], i823[3])
  i822.m_HighlightedColor = new pc.Color(i823[4], i823[5], i823[6], i823[7])
  i822.m_PressedColor = new pc.Color(i823[8], i823[9], i823[10], i823[11])
  i822.m_SelectedColor = new pc.Color(i823[12], i823[13], i823[14], i823[15])
  i822.m_DisabledColor = new pc.Color(i823[16], i823[17], i823[18], i823[19])
  i822.m_ColorMultiplier = i823[20]
  i822.m_FadeDuration = i823[21]
  return i822
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_HighlightedSprite')
  request.r(i825[2], i825[3], 0, i824, 'm_PressedSprite')
  request.r(i825[4], i825[5], 0, i824, 'm_SelectedSprite')
  request.r(i825[6], i825[7], 0, i824, 'm_DisabledSprite')
  return i824
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i827 = data
  i826.m_NormalTrigger = i827[0]
  i826.m_HighlightedTrigger = i827[1]
  i826.m_PressedTrigger = i827[2]
  i826.m_SelectedTrigger = i827[3]
  i826.m_DisabledTrigger = i827[4]
  return i826
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i828 = root || request.c( 'TilesBag' )
  var i829 = data
  var i831 = i829[0]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 1, i830, '')
  }
  i828.slots = i830
  return i828
}

Deserializers["Deck"] = function (request, data, root) {
  var i832 = root || request.c( 'Deck' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'Game')
  return i832
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i834 = root || request.c( 'DeckLayer' )
  var i835 = data
  i834.layer = i835[0]
  var i837 = i835[1]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.Tiles = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i841 = data
  i840.ambientIntensity = i841[0]
  i840.reflectionIntensity = i841[1]
  i840.ambientMode = i841[2]
  i840.ambientLight = new pc.Color(i841[3], i841[4], i841[5], i841[6])
  i840.ambientSkyColor = new pc.Color(i841[7], i841[8], i841[9], i841[10])
  i840.ambientGroundColor = new pc.Color(i841[11], i841[12], i841[13], i841[14])
  i840.ambientEquatorColor = new pc.Color(i841[15], i841[16], i841[17], i841[18])
  i840.fogColor = new pc.Color(i841[19], i841[20], i841[21], i841[22])
  i840.fogEndDistance = i841[23]
  i840.fogStartDistance = i841[24]
  i840.fogDensity = i841[25]
  i840.fog = !!i841[26]
  request.r(i841[27], i841[28], 0, i840, 'skybox')
  i840.fogMode = i841[29]
  var i843 = i841[30]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i843[i + 0]) );
  }
  i840.lightmaps = i842
  i840.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i841[31], i840.lightProbes)
  i840.lightmapsMode = i841[32]
  i840.mixedBakeMode = i841[33]
  i840.environmentLightingMode = i841[34]
  i840.ambientProbe = new pc.SphericalHarmonicsL2(i841[35])
  i840.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i841[36])
  i840.useReferenceAmbientProbe = !!i841[37]
  request.r(i841[38], i841[39], 0, i840, 'customReflection')
  request.r(i841[40], i841[41], 0, i840, 'defaultReflection')
  i840.defaultReflectionMode = i841[42]
  i840.defaultReflectionResolution = i841[43]
  i840.sunLightObjectId = i841[44]
  i840.pixelLightCount = i841[45]
  i840.defaultReflectionHDR = !!i841[46]
  i840.hasLightDataAsset = !!i841[47]
  i840.hasManualGenerate = !!i841[48]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'lightmapColor')
  request.r(i847[2], i847[3], 0, i846, 'lightmapDirection')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i848 = root || new UnityEngine.LightProbes()
  var i849 = data
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i855 = data
  var i857 = i855[0]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i857[i + 0]));
  }
  i854.ShaderCompilationErrors = i856
  i854.name = i855[1]
  i854.guid = i855[2]
  var i859 = i855[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i854.shaderDefinedKeywords = i858
  var i861 = i855[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i861[i + 0]) );
  }
  i854.passes = i860
  var i863 = i855[5]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i863[i + 0]) );
  }
  i854.usePasses = i862
  var i865 = i855[6]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i865[i + 0]) );
  }
  i854.defaultParameterValues = i864
  request.r(i855[7], i855[8], 0, i854, 'unityFallbackShader')
  i854.readDepth = !!i855[9]
  i854.isCreatedByShaderGraph = !!i855[10]
  i854.usedBatchUniforms = i855[11]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i869 = data
  i868.shaderName = i869[0]
  i868.errorMessage = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i874 = root || new pc.UnityShaderPass()
  var i875 = data
  i874.id = i875[0]
  i874.subShaderIndex = i875[1]
  i874.name = i875[2]
  i874.passType = i875[3]
  i874.grabPassTextureName = i875[4]
  i874.usePass = !!i875[5]
  i874.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[6], i874.zTest)
  i874.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[7], i874.zWrite)
  i874.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[8], i874.culling)
  i874.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i875[9], i874.blending)
  i874.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i875[10], i874.alphaBlending)
  i874.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[11], i874.colorWriteMask)
  i874.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[12], i874.offsetUnits)
  i874.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[13], i874.offsetFactor)
  i874.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[14], i874.stencilRef)
  i874.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[15], i874.stencilReadMask)
  i874.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[16], i874.stencilWriteMask)
  i874.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i875[17], i874.stencilOp)
  i874.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i875[18], i874.stencilOpFront)
  i874.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i875[19], i874.stencilOpBack)
  var i877 = i875[20]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i877[i + 0]) );
  }
  i874.tags = i876
  var i879 = i875[21]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( i879[i + 0] );
  }
  i874.passDefinedKeywords = i878
  var i881 = i875[22]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i881[i + 0]) );
  }
  i874.passDefinedKeywordGroups = i880
  var i883 = i875[23]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i883[i + 0]) );
  }
  i874.variants = i882
  var i885 = i875[24]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i885[i + 0]) );
  }
  i874.excludedVariants = i884
  i874.hasDepthReader = !!i875[25]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i887 = data
  i886.val = i887[0]
  i886.name = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i889 = data
  i888.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[0], i888.src)
  i888.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[1], i888.dst)
  i888.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[2], i888.op)
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i891 = data
  i890.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[0], i890.pass)
  i890.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[1], i890.fail)
  i890.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[2], i890.zFail)
  i890.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[3], i890.comp)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i895 = data
  i894.name = i895[0]
  i894.value = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i898.keywords = i900
  i898.hasDiscard = !!i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i905 = data
  i904.passId = i905[0]
  i904.subShaderIndex = i905[1]
  var i907 = i905[2]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i904.keywords = i906
  i904.vertexProgram = i905[3]
  i904.fragmentProgram = i905[4]
  i904.compiledForWebGL2 = !!i905[5]
  i904.readDepth = !!i905[6]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'shader')
  i910.pass = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i915 = data
  i914.name = i915[0]
  i914.type = i915[1]
  i914.value = new pc.Vec4( i915[2], i915[3], i915[4], i915[5] )
  i914.textureValue = i915[6]
  i914.shaderPropertyFlag = i915[7]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i917 = data
  i916.name = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'texture')
  i916.aabb = i917[3]
  i916.vertices = i917[4]
  i916.triangles = i917[5]
  i916.textureRect = UnityEngine.Rect.MinMaxRect(i917[6], i917[7], i917[8], i917[9])
  i916.packedRect = UnityEngine.Rect.MinMaxRect(i917[10], i917[11], i917[12], i917[13])
  i916.border = new pc.Vec4( i917[14], i917[15], i917[16], i917[17] )
  i916.transparency = i917[18]
  i916.bounds = i917[19]
  i916.pixelsPerUnit = i917[20]
  i916.textureWidth = i917[21]
  i916.textureHeight = i917[22]
  i916.nativeSize = new pc.Vec2( i917[23], i917[24] )
  i916.pivot = new pc.Vec2( i917[25], i917[26] )
  i916.textureRectOffset = new pc.Vec2( i917[27], i917[28] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i919 = data
  i918.name = i919[0]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i921 = data
  i920.name = i921[0]
  i920.bytes64 = i921[1]
  i920.data = i921[2]
  return i920
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i923 = data
  i922.hashCode = i923[0]
  request.r(i923[1], i923[2], 0, i922, 'material')
  i922.materialHashCode = i923[3]
  request.r(i923[4], i923[5], 0, i922, 'atlas')
  i922.normalStyle = i923[6]
  i922.normalSpacingOffset = i923[7]
  i922.boldStyle = i923[8]
  i922.boldSpacing = i923[9]
  i922.italicStyle = i923[10]
  i922.tabSize = i923[11]
  i922.m_Version = i923[12]
  i922.m_SourceFontFileGUID = i923[13]
  request.r(i923[14], i923[15], 0, i922, 'm_SourceFontFile_EditorRef')
  request.r(i923[16], i923[17], 0, i922, 'm_SourceFontFile')
  i922.m_AtlasPopulationMode = i923[18]
  i922.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i923[19], i922.m_FaceInfo)
  var i925 = i923[20]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('UnityEngine.TextCore.Glyph', i925[i + 0]));
  }
  i922.m_GlyphTable = i924
  var i927 = i923[21]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('TMPro.TMP_Character', i927[i + 0]));
  }
  i922.m_CharacterTable = i926
  var i929 = i923[22]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i922.m_AtlasTextures = i928
  i922.m_AtlasTextureIndex = i923[23]
  i922.m_IsMultiAtlasTexturesEnabled = !!i923[24]
  i922.m_ClearDynamicDataOnBuild = !!i923[25]
  var i931 = i923[26]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('UnityEngine.TextCore.GlyphRect', i931[i + 0]));
  }
  i922.m_UsedGlyphRects = i930
  var i933 = i923[27]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('UnityEngine.TextCore.GlyphRect', i933[i + 0]));
  }
  i922.m_FreeGlyphRects = i932
  i922.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i923[28], i922.m_fontInfo)
  i922.m_AtlasWidth = i923[29]
  i922.m_AtlasHeight = i923[30]
  i922.m_AtlasPadding = i923[31]
  i922.m_AtlasRenderMode = i923[32]
  var i935 = i923[33]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('TMPro.TMP_Glyph', i935[i + 0]));
  }
  i922.m_glyphInfoList = i934
  i922.m_KerningTable = request.d('TMPro.KerningTable', i923[34], i922.m_KerningTable)
  i922.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i923[35], i922.m_FontFeatureTable)
  var i937 = i923[36]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i922.fallbackFontAssets = i936
  var i939 = i923[37]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i922.m_FallbackFontAssetTable = i938
  i922.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i923[38], i922.m_CreationSettings)
  var i941 = i923[39]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('TMPro.TMP_FontWeightPair', i941[i + 0]) );
  }
  i922.m_FontWeightTable = i940
  var i943 = i923[40]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('TMPro.TMP_FontWeightPair', i943[i + 0]) );
  }
  i922.fontWeights = i942
  return i922
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i945 = data
  i944.m_FaceIndex = i945[0]
  i944.m_FamilyName = i945[1]
  i944.m_StyleName = i945[2]
  i944.m_PointSize = i945[3]
  i944.m_Scale = i945[4]
  i944.m_UnitsPerEM = i945[5]
  i944.m_LineHeight = i945[6]
  i944.m_AscentLine = i945[7]
  i944.m_CapLine = i945[8]
  i944.m_MeanLine = i945[9]
  i944.m_Baseline = i945[10]
  i944.m_DescentLine = i945[11]
  i944.m_SuperscriptOffset = i945[12]
  i944.m_SuperscriptSize = i945[13]
  i944.m_SubscriptOffset = i945[14]
  i944.m_SubscriptSize = i945[15]
  i944.m_UnderlineOffset = i945[16]
  i944.m_UnderlineThickness = i945[17]
  i944.m_StrikethroughOffset = i945[18]
  i944.m_StrikethroughThickness = i945[19]
  i944.m_TabWidth = i945[20]
  return i944
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i949 = data
  i948.m_Index = i949[0]
  i948.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i949[1], i948.m_Metrics)
  i948.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i949[2], i948.m_GlyphRect)
  i948.m_Scale = i949[3]
  i948.m_AtlasIndex = i949[4]
  i948.m_ClassDefinitionType = i949[5]
  return i948
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i951 = data
  i950.m_Width = i951[0]
  i950.m_Height = i951[1]
  i950.m_HorizontalBearingX = i951[2]
  i950.m_HorizontalBearingY = i951[3]
  i950.m_HorizontalAdvance = i951[4]
  return i950
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i953 = data
  i952.m_X = i953[0]
  i952.m_Y = i953[1]
  i952.m_Width = i953[2]
  i952.m_Height = i953[3]
  return i952
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_Character' )
  var i957 = data
  i956.m_ElementType = i957[0]
  i956.m_Unicode = i957[1]
  i956.m_GlyphIndex = i957[2]
  i956.m_Scale = i957[3]
  return i956
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i963 = data
  i962.Name = i963[0]
  i962.PointSize = i963[1]
  i962.Scale = i963[2]
  i962.CharacterCount = i963[3]
  i962.LineHeight = i963[4]
  i962.Baseline = i963[5]
  i962.Ascender = i963[6]
  i962.CapHeight = i963[7]
  i962.Descender = i963[8]
  i962.CenterLine = i963[9]
  i962.SuperscriptOffset = i963[10]
  i962.SubscriptOffset = i963[11]
  i962.SubSize = i963[12]
  i962.Underline = i963[13]
  i962.UnderlineThickness = i963[14]
  i962.strikethrough = i963[15]
  i962.strikethroughThickness = i963[16]
  i962.TabWidth = i963[17]
  i962.Padding = i963[18]
  i962.AtlasWidth = i963[19]
  i962.AtlasHeight = i963[20]
  return i962
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_Glyph' )
  var i967 = data
  i966.id = i967[0]
  i966.x = i967[1]
  i966.y = i967[2]
  i966.width = i967[3]
  i966.height = i967[4]
  i966.xOffset = i967[5]
  i966.yOffset = i967[6]
  i966.xAdvance = i967[7]
  i966.scale = i967[8]
  return i966
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.KerningTable' )
  var i969 = data
  var i971 = i969[0]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('TMPro.KerningPair', i971[i + 0]));
  }
  i968.kerningPairs = i970
  return i968
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.KerningPair' )
  var i975 = data
  i974.xOffset = i975[0]
  i974.m_FirstGlyph = i975[1]
  i974.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i975[2], i974.m_FirstGlyphAdjustments)
  i974.m_SecondGlyph = i975[3]
  i974.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i975[4], i974.m_SecondGlyphAdjustments)
  i974.m_IgnoreSpacingAdjustments = !!i975[5]
  return i974
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i977 = data
  var i979 = i977[0]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i979.length; i += 1) {
    i978.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i979[i + 0]));
  }
  i976.m_GlyphPairAdjustmentRecords = i978
  return i976
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i983 = data
  i982.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i983[0], i982.m_FirstAdjustmentRecord)
  i982.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i983[1], i982.m_SecondAdjustmentRecord)
  i982.m_FeatureLookupFlags = i983[2]
  return i982
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i985 = data
  i984.m_GlyphIndex = i985[0]
  i984.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i985[1], i984.m_GlyphValueRecord)
  return i984
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i987 = data
  i986.m_XPlacement = i987[0]
  i986.m_YPlacement = i987[1]
  i986.m_XAdvance = i987[2]
  i986.m_YAdvance = i987[3]
  return i986
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i991 = data
  i990.sourceFontFileName = i991[0]
  i990.sourceFontFileGUID = i991[1]
  i990.pointSizeSamplingMode = i991[2]
  i990.pointSize = i991[3]
  i990.padding = i991[4]
  i990.packingMode = i991[5]
  i990.atlasWidth = i991[6]
  i990.atlasHeight = i991[7]
  i990.characterSetSelectionMode = i991[8]
  i990.characterSequence = i991[9]
  i990.referencedFontAssetGUID = i991[10]
  i990.referencedTextAssetGUID = i991[11]
  i990.fontStyle = i991[12]
  i990.fontStyleModifier = i991[13]
  i990.renderMode = i991[14]
  i990.includeFontFeatures = !!i991[15]
  return i990
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'regularTypeface')
  request.r(i995[2], i995[3], 0, i994, 'italicTypeface')
  return i994
}

Deserializers["TileSO"] = function (request, data, root) {
  var i996 = root || request.c( 'TileSO' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'icon')
  return i996
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Settings' )
  var i999 = data
  i998.m_enableWordWrapping = !!i999[0]
  i998.m_enableKerning = !!i999[1]
  i998.m_enableExtraPadding = !!i999[2]
  i998.m_enableTintAllSprites = !!i999[3]
  i998.m_enableParseEscapeCharacters = !!i999[4]
  i998.m_EnableRaycastTarget = !!i999[5]
  i998.m_GetFontFeaturesAtRuntime = !!i999[6]
  i998.m_missingGlyphCharacter = i999[7]
  i998.m_warningsDisabled = !!i999[8]
  request.r(i999[9], i999[10], 0, i998, 'm_defaultFontAsset')
  i998.m_defaultFontAssetPath = i999[11]
  i998.m_defaultFontSize = i999[12]
  i998.m_defaultAutoSizeMinRatio = i999[13]
  i998.m_defaultAutoSizeMaxRatio = i999[14]
  i998.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i999[15], i999[16] )
  i998.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i999[17], i999[18] )
  i998.m_autoSizeTextContainer = !!i999[19]
  i998.m_IsTextObjectScaleStatic = !!i999[20]
  var i1001 = i999[21]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i998.m_fallbackFontAssets = i1000
  i998.m_matchMaterialPreset = !!i999[22]
  request.r(i999[23], i999[24], 0, i998, 'm_defaultSpriteAsset')
  i998.m_defaultSpriteAssetPath = i999[25]
  i998.m_enableEmojiSupport = !!i999[26]
  i998.m_MissingCharacterSpriteUnicode = i999[27]
  i998.m_defaultColorGradientPresetsPath = i999[28]
  request.r(i999[29], i999[30], 0, i998, 'm_defaultStyleSheet')
  i998.m_StyleSheetsResourcePath = i999[31]
  request.r(i999[32], i999[33], 0, i998, 'm_leadingCharacters')
  request.r(i999[34], i999[35], 0, i998, 'm_followingCharacters')
  i998.m_UseModernHangulLineBreakingRules = !!i999[36]
  return i998
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1003 = data
  i1002.hashCode = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'material')
  i1002.materialHashCode = i1003[3]
  request.r(i1003[4], i1003[5], 0, i1002, 'spriteSheet')
  var i1005 = i1003[6]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Sprite', i1005[i + 0]));
  }
  i1002.spriteInfoList = i1004
  var i1007 = i1003[7]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1002.fallbackSpriteAssets = i1006
  i1002.m_Version = i1003[8]
  i1002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1003[9], i1002.m_FaceInfo)
  var i1009 = i1003[10]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_SpriteCharacter', i1009[i + 0]));
  }
  i1002.m_SpriteCharacterTable = i1008
  var i1011 = i1003[11]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('TMPro.TMP_SpriteGlyph', i1011[i + 0]));
  }
  i1002.m_SpriteGlyphTable = i1010
  return i1002
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.hashCode = i1015[1]
  i1014.unicode = i1015[2]
  i1014.pivot = new pc.Vec2( i1015[3], i1015[4] )
  request.r(i1015[5], i1015[6], 0, i1014, 'sprite')
  i1014.id = i1015[7]
  i1014.x = i1015[8]
  i1014.y = i1015[9]
  i1014.width = i1015[10]
  i1014.height = i1015[11]
  i1014.xOffset = i1015[12]
  i1014.yOffset = i1015[13]
  i1014.xAdvance = i1015[14]
  i1014.scale = i1015[15]
  return i1014
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1021 = data
  i1020.m_Name = i1021[0]
  i1020.m_HashCode = i1021[1]
  i1020.m_ElementType = i1021[2]
  i1020.m_Unicode = i1021[3]
  i1020.m_GlyphIndex = i1021[4]
  i1020.m_Scale = i1021[5]
  return i1020
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'sprite')
  i1024.m_Index = i1025[2]
  i1024.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1025[3], i1024.m_Metrics)
  i1024.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1025[4], i1024.m_GlyphRect)
  i1024.m_Scale = i1025[5]
  i1024.m_AtlasIndex = i1025[6]
  i1024.m_ClassDefinitionType = i1025[7]
  return i1024
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Style', i1029[i + 0]));
  }
  i1026.m_StyleList = i1028
  return i1026
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_Style' )
  var i1033 = data
  i1032.m_Name = i1033[0]
  i1032.m_HashCode = i1033[1]
  i1032.m_OpeningDefinition = i1033[2]
  i1032.m_ClosingDefinition = i1033[3]
  i1032.m_OpeningTagArray = i1033[4]
  i1032.m_ClosingTagArray = i1033[5]
  i1032.m_OpeningTagUnicodeArray = i1033[6]
  i1032.m_ClosingTagUnicodeArray = i1033[7]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1037[i + 0]) );
  }
  i1034.files = i1036
  i1034.componentToPrefabIds = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1041 = data
  i1040.path = i1041[0]
  request.r(i1041[1], i1041[2], 0, i1040, 'unityObject')
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1045[i + 0]) );
  }
  i1042.scriptsExecutionOrder = i1044
  var i1047 = i1043[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1047[i + 0]) );
  }
  i1042.sortingLayers = i1046
  var i1049 = i1043[2]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1049[i + 0]) );
  }
  i1042.cullingLayers = i1048
  i1042.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1043[3], i1042.timeSettings)
  i1042.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1043[4], i1042.physicsSettings)
  i1042.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1043[5], i1042.physics2DSettings)
  i1042.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1043[6], i1042.qualitySettings)
  i1042.enableRealtimeShadows = !!i1043[7]
  i1042.enableAutoInstancing = !!i1043[8]
  i1042.enableDynamicBatching = !!i1043[9]
  i1042.lightmapEncodingQuality = i1043[10]
  i1042.desiredColorSpace = i1043[11]
  var i1051 = i1043[12]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1042.allTags = i1050
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.value = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.name = i1059[1]
  i1058.value = i1059[2]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.name = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1065 = data
  i1064.fixedDeltaTime = i1065[0]
  i1064.maximumDeltaTime = i1065[1]
  i1064.timeScale = i1065[2]
  i1064.maximumParticleTimestep = i1065[3]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1067 = data
  i1066.gravity = new pc.Vec3( i1067[0], i1067[1], i1067[2] )
  i1066.defaultSolverIterations = i1067[3]
  i1066.bounceThreshold = i1067[4]
  i1066.autoSyncTransforms = !!i1067[5]
  i1066.autoSimulation = !!i1067[6]
  var i1069 = i1067[7]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1069[i + 0]) );
  }
  i1066.collisionMatrix = i1068
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1073 = data
  i1072.enabled = !!i1073[0]
  i1072.layerId = i1073[1]
  i1072.otherLayerId = i1073[2]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'material')
  i1074.gravity = new pc.Vec2( i1075[2], i1075[3] )
  i1074.positionIterations = i1075[4]
  i1074.velocityIterations = i1075[5]
  i1074.velocityThreshold = i1075[6]
  i1074.maxLinearCorrection = i1075[7]
  i1074.maxAngularCorrection = i1075[8]
  i1074.maxTranslationSpeed = i1075[9]
  i1074.maxRotationSpeed = i1075[10]
  i1074.baumgarteScale = i1075[11]
  i1074.baumgarteTOIScale = i1075[12]
  i1074.timeToSleep = i1075[13]
  i1074.linearSleepTolerance = i1075[14]
  i1074.angularSleepTolerance = i1075[15]
  i1074.defaultContactOffset = i1075[16]
  i1074.autoSimulation = !!i1075[17]
  i1074.queriesHitTriggers = !!i1075[18]
  i1074.queriesStartInColliders = !!i1075[19]
  i1074.callbacksOnDisable = !!i1075[20]
  i1074.reuseCollisionCallbacks = !!i1075[21]
  i1074.autoSyncTransforms = !!i1075[22]
  var i1077 = i1075[23]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1077[i + 0]) );
  }
  i1074.collisionMatrix = i1076
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1081 = data
  i1080.enabled = !!i1081[0]
  i1080.layerId = i1081[1]
  i1080.otherLayerId = i1081[2]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1085[i + 0]) );
  }
  i1082.qualityLevels = i1084
  var i1087 = i1083[1]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.names = i1086
  i1082.shadows = i1083[2]
  i1082.anisotropicFiltering = i1083[3]
  i1082.antiAliasing = i1083[4]
  i1082.lodBias = i1083[5]
  i1082.shadowCascades = i1083[6]
  i1082.shadowDistance = i1083[7]
  i1082.shadowmaskMode = i1083[8]
  i1082.shadowProjection = i1083[9]
  i1082.shadowResolution = i1083[10]
  i1082.softParticles = !!i1083[11]
  i1082.softVegetation = !!i1083[12]
  i1082.activeColorSpace = i1083[13]
  i1082.desiredColorSpace = i1083[14]
  i1082.masterTextureLimit = i1083[15]
  i1082.maxQueuedFrames = i1083[16]
  i1082.particleRaycastBudget = i1083[17]
  i1082.pixelLightCount = i1083[18]
  i1082.realtimeReflectionProbes = !!i1083[19]
  i1082.shadowCascade2Split = i1083[20]
  i1082.shadowCascade4Split = new pc.Vec3( i1083[21], i1083[22], i1083[23] )
  i1082.streamingMipmapsActive = !!i1083[24]
  i1082.vSyncCount = i1083[25]
  i1082.asyncUploadBufferSize = i1083[26]
  i1082.asyncUploadTimeSlice = i1083[27]
  i1082.billboardsFaceCameraPosition = !!i1083[28]
  i1082.shadowNearPlaneOffset = i1083[29]
  i1082.streamingMipmapsMemoryBudget = i1083[30]
  i1082.maximumLODLevel = i1083[31]
  i1082.streamingMipmapsAddAllCameras = !!i1083[32]
  i1082.streamingMipmapsMaxLevelReduction = i1083[33]
  i1082.streamingMipmapsRenderersPerFrame = i1083[34]
  i1082.resolutionScalingFixedDPIFactor = i1083[35]
  i1082.streamingMipmapsMaxFileIORequests = i1083[36]
  i1082.currentQualityLevel = i1083[37]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1093 = data
  i1092.weight = i1093[0]
  i1092.vertices = i1093[1]
  i1092.normals = i1093[2]
  i1092.tangents = i1093[3]
  return i1092
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1095 = data
  i1094.xPlacement = i1095[0]
  i1094.yPlacement = i1095[1]
  i1094.xAdvance = i1095[2]
  i1094.yAdvance = i1095[3]
  return i1094
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[23],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[21],"76":[21],"77":[21],"78":[21],"79":[21],"80":[21],"81":[21],"82":[21],"83":[21],"84":[21],"85":[21],"86":[21],"87":[21],"88":[23],"89":[90],"91":[92],"93":[92],"42":[7],"94":[23],"95":[7],"96":[90,7],"12":[7,13],"97":[7],"98":[13,7],"99":[90],"100":[13,7],"101":[7],"102":[103],"104":[7],"105":[7],"47":[42],"11":[13,7],"106":[7],"46":[42],"107":[7],"50":[7],"49":[7],"108":[7],"109":[7],"110":[7],"111":[7],"112":[7],"113":[7],"114":[13,7],"115":[7],"116":[7],"117":[7],"118":[7],"119":[13,7],"120":[7],"121":[25],"122":[25],"26":[25],"123":[25],"124":[23],"125":[23],"126":[103],"127":[18],"128":[129],"130":[103]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","QuestSlot","TileSO","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","Tile","UnityEngine.SpriteRenderer","UnityEngine.TrailRenderer","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","TileSlot","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileActions","TilesBag","TileSpawnAnimation","TileMatcher","LoseCondition","WinCondition","InputTouch","EndCard","Quest","TileRandomSpawner","TileSpawner","UnityEngine.GameObject","TileBagSorter","UnityEngine.Canvas","Sounds","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResetLocalPosition","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Button","DeckLayer","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "2.3";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "ColelctSalmon";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1653";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3659";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playble-3";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "5b03c96c-1856-4274-a291-ba729fff6434";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

