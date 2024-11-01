var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointSpring' )
  var i655 = data
  i654.spring = i655[0]
  i654.damper = i655[1]
  i654.targetPosition = i655[2]
  return i654
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointMotor' )
  var i657 = data
  i656.m_TargetVelocity = i657[0]
  i656.m_Force = i657[1]
  i656.m_FreeSpin = i657[2]
  return i656
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointLimits' )
  var i659 = data
  i658.m_Min = i659[0]
  i658.m_Max = i659[1]
  i658.m_Bounciness = i659[2]
  i658.m_BounceMinVelocity = i659[3]
  i658.m_ContactDistance = i659[4]
  i658.minBounce = i659[5]
  i658.maxBounce = i659[6]
  return i658
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointDrive' )
  var i661 = data
  i660.m_PositionSpring = i661[0]
  i660.m_PositionDamper = i661[1]
  i660.m_MaximumForce = i661[2]
  return i660
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i663 = data
  i662.m_Spring = i663[0]
  i662.m_Damper = i663[1]
  return i662
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i665 = data
  i664.m_Limit = i665[0]
  i664.m_Bounciness = i665[1]
  i664.m_ContactDistance = i665[2]
  return i664
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i667 = data
  i666.m_ExtremumSlip = i667[0]
  i666.m_ExtremumValue = i667[1]
  i666.m_AsymptoteSlip = i667[2]
  i666.m_AsymptoteValue = i667[3]
  i666.m_Stiffness = i667[4]
  return i666
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i669 = data
  i668.m_LowerAngle = i669[0]
  i668.m_UpperAngle = i669[1]
  return i668
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i671 = data
  i670.m_MotorSpeed = i671[0]
  i670.m_MaximumMotorTorque = i671[1]
  return i670
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i673 = data
  i672.m_DampingRatio = i673[0]
  i672.m_Frequency = i673[1]
  i672.m_Angle = i673[2]
  return i672
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i675 = data
  i674.m_LowerTranslation = i675[0]
  i674.m_UpperTranslation = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i676 = root || new pc.UnityMaterial()
  var i677 = data
  i676.name = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'shader')
  i676.renderQueue = i677[3]
  i676.enableInstancing = !!i677[4]
  var i679 = i677[5]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i679[i + 0]) );
  }
  i676.floatParameters = i678
  var i681 = i677[6]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i681[i + 0]) );
  }
  i676.colorParameters = i680
  var i683 = i677[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i683[i + 0]) );
  }
  i676.vectorParameters = i682
  var i685 = i677[8]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i685[i + 0]) );
  }
  i676.textureParameters = i684
  var i687 = i677[9]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i687[i + 0]) );
  }
  i676.materialFlags = i686
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i691 = data
  i690.name = i691[0]
  i690.value = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i695 = data
  i694.name = i695[0]
  i694.value = new pc.Color(i695[1], i695[2], i695[3], i695[4])
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i699 = data
  i698.name = i699[0]
  i698.value = new pc.Vec4( i699[1], i699[2], i699[3], i699[4] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i703 = data
  i702.name = i703[0]
  request.r(i703[1], i703[2], 0, i702, 'value')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i707 = data
  i706.name = i707[0]
  i706.enabled = !!i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i709 = data
  i708.name = i709[0]
  i708.width = i709[1]
  i708.height = i709[2]
  i708.mipmapCount = i709[3]
  i708.anisoLevel = i709[4]
  i708.filterMode = i709[5]
  i708.hdr = !!i709[6]
  i708.format = i709[7]
  i708.wrapMode = i709[8]
  i708.alphaIsTransparency = !!i709[9]
  i708.alphaSource = i709[10]
  i708.graphicsFormat = i709[11]
  i708.sRGBTexture = !!i709[12]
  i708.desiredColorSpace = i709[13]
  i708.wrapU = i709[14]
  i708.wrapV = i709[15]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i711 = data
  i710.position = new pc.Vec3( i711[0], i711[1], i711[2] )
  i710.scale = new pc.Vec3( i711[3], i711[4], i711[5] )
  i710.rotation = new pc.Quat(i711[6], i711[7], i711[8], i711[9])
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i713 = data
  i712.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i713[0], i712.main)
  i712.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i713[1], i712.colorBySpeed)
  i712.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i713[2], i712.colorOverLifetime)
  i712.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i713[3], i712.emission)
  i712.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i713[4], i712.rotationBySpeed)
  i712.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i713[5], i712.rotationOverLifetime)
  i712.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i713[6], i712.shape)
  i712.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i713[7], i712.sizeBySpeed)
  i712.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i713[8], i712.sizeOverLifetime)
  i712.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i713[9], i712.textureSheetAnimation)
  i712.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i713[10], i712.velocityOverLifetime)
  i712.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i713[11], i712.noise)
  i712.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i713[12], i712.inheritVelocity)
  i712.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i713[13], i712.forceOverLifetime)
  i712.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i713[14], i712.limitVelocityOverLifetime)
  i712.useAutoRandomSeed = !!i713[15]
  i712.randomSeed = i713[16]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemMain()
  var i715 = data
  i714.duration = i715[0]
  i714.loop = !!i715[1]
  i714.prewarm = !!i715[2]
  i714.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.startDelay)
  i714.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[4], i714.startLifetime)
  i714.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[5], i714.startSpeed)
  i714.startSize3D = !!i715[6]
  i714.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[7], i714.startSizeX)
  i714.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[8], i714.startSizeY)
  i714.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[9], i714.startSizeZ)
  i714.startRotation3D = !!i715[10]
  i714.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[11], i714.startRotationX)
  i714.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[12], i714.startRotationY)
  i714.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[13], i714.startRotationZ)
  i714.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i715[14], i714.startColor)
  i714.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[15], i714.gravityModifier)
  i714.simulationSpace = i715[16]
  request.r(i715[17], i715[18], 0, i714, 'customSimulationSpace')
  i714.simulationSpeed = i715[19]
  i714.useUnscaledTime = !!i715[20]
  i714.scalingMode = i715[21]
  i714.playOnAwake = !!i715[22]
  i714.maxParticles = i715[23]
  i714.emitterVelocityMode = i715[24]
  i714.stopAction = i715[25]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i716 = root || new pc.MinMaxCurve()
  var i717 = data
  i716.mode = i717[0]
  i716.curveMin = new pc.AnimationCurve( { keys_flow: i717[1] } )
  i716.curveMax = new pc.AnimationCurve( { keys_flow: i717[2] } )
  i716.curveMultiplier = i717[3]
  i716.constantMin = i717[4]
  i716.constantMax = i717[5]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i718 = root || new pc.MinMaxGradient()
  var i719 = data
  i718.mode = i719[0]
  i718.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i719[1], i718.gradientMin)
  i718.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i719[2], i718.gradientMax)
  i718.colorMin = new pc.Color(i719[3], i719[4], i719[5], i719[6])
  i718.colorMax = new pc.Color(i719[7], i719[8], i719[9], i719[10])
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i721 = data
  i720.mode = i721[0]
  var i723 = i721[1]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i723[i + 0]) );
  }
  i720.colorKeys = i722
  var i725 = i721[2]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i725[i + 0]) );
  }
  i720.alphaKeys = i724
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemColorBySpeed()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i727[1], i726.color)
  i726.range = new pc.Vec2( i727[2], i727[3] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i731 = data
  i730.color = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.time = i731[4]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i735 = data
  i734.alpha = i735[0]
  i734.time = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemColorOverLifetime()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i737[1], i736.color)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemEmitter()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.rateOverTime)
  i738.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.rateOverDistance)
  var i741 = i739[3]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i741[i + 0]) );
  }
  i738.bursts = i740
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemBurst()
  var i745 = data
  i744.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[0], i744.count)
  i744.cycleCount = i745[1]
  i744.minCount = i745[2]
  i744.maxCount = i745[3]
  i744.repeatInterval = i745[4]
  i744.time = i745[5]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemRotationBySpeed()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.x)
  i746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.y)
  i746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.z)
  i746.separateAxes = !!i747[4]
  i746.range = new pc.Vec2( i747[5], i747[6] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemRotationOverLifetime()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.separateAxes = !!i749[4]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemShape()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.shapeType = i751[1]
  i750.randomDirectionAmount = i751[2]
  i750.sphericalDirectionAmount = i751[3]
  i750.randomPositionAmount = i751[4]
  i750.alignToDirection = !!i751[5]
  i750.radius = i751[6]
  i750.radiusMode = i751[7]
  i750.radiusSpread = i751[8]
  i750.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[9], i750.radiusSpeed)
  i750.radiusThickness = i751[10]
  i750.angle = i751[11]
  i750.length = i751[12]
  i750.boxThickness = new pc.Vec3( i751[13], i751[14], i751[15] )
  i750.meshShapeType = i751[16]
  request.r(i751[17], i751[18], 0, i750, 'mesh')
  request.r(i751[19], i751[20], 0, i750, 'meshRenderer')
  request.r(i751[21], i751[22], 0, i750, 'skinnedMeshRenderer')
  i750.useMeshMaterialIndex = !!i751[23]
  i750.meshMaterialIndex = i751[24]
  i750.useMeshColors = !!i751[25]
  i750.normalOffset = i751[26]
  i750.arc = i751[27]
  i750.arcMode = i751[28]
  i750.arcSpread = i751[29]
  i750.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[30], i750.arcSpeed)
  i750.donutRadius = i751[31]
  i750.position = new pc.Vec3( i751[32], i751[33], i751[34] )
  i750.rotation = new pc.Vec3( i751[35], i751[36], i751[37] )
  i750.scale = new pc.Vec3( i751[38], i751[39], i751[40] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemSizeBySpeed()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.separateAxes = !!i753[4]
  i752.range = new pc.Vec2( i753[5], i753[6] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemSizeOverLifetime()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.separateAxes = !!i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.mode = i757[1]
  i756.animation = i757[2]
  i756.numTilesX = i757[3]
  i756.numTilesY = i757[4]
  i756.useRandomRow = !!i757[5]
  i756.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[6], i756.frameOverTime)
  i756.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[7], i756.startFrame)
  i756.cycleCount = i757[8]
  i756.rowIndex = i757[9]
  i756.flipU = i757[10]
  i756.flipV = i757[11]
  i756.spriteCount = i757[12]
  var i759 = i757[13]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.sprites = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.radial)
  i762.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[5], i762.speedModifier)
  i762.space = i763[6]
  i762.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[7], i762.orbitalX)
  i762.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[8], i762.orbitalY)
  i762.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[9], i762.orbitalZ)
  i762.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[10], i762.orbitalOffsetX)
  i762.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[11], i762.orbitalOffsetY)
  i762.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[12], i762.orbitalOffsetZ)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemNoise()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.separateAxes = !!i765[1]
  i764.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.strengthX)
  i764.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.strengthY)
  i764.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[4], i764.strengthZ)
  i764.frequency = i765[5]
  i764.damping = !!i765[6]
  i764.octaveCount = i765[7]
  i764.octaveMultiplier = i765[8]
  i764.octaveScale = i765[9]
  i764.quality = i765[10]
  i764.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[11], i764.scrollSpeed)
  i764.scrollSpeedMultiplier = i765[12]
  i764.remapEnabled = !!i765[13]
  i764.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[14], i764.remapX)
  i764.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[15], i764.remapY)
  i764.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[16], i764.remapZ)
  i764.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[17], i764.positionAmount)
  i764.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[18], i764.rotationAmount)
  i764.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[19], i764.sizeAmount)
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemInheritVelocity()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.mode = i767[1]
  i766.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.curve)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemForceOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.space = i769[4]
  i768.randomized = !!i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.limit)
  i770.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.limitX)
  i770.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.limitY)
  i770.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[4], i770.limitZ)
  i770.dampen = i771[5]
  i770.separateAxes = !!i771[6]
  i770.space = i771[7]
  i770.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[8], i770.drag)
  i770.multiplyDragByParticleSize = !!i771[9]
  i770.multiplyDragByParticleVelocity = !!i771[10]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i773 = data
  i772.enabled = !!i773[0]
  request.r(i773[1], i773[2], 0, i772, 'sharedMaterial')
  var i775 = i773[3]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.sharedMaterials = i774
  i772.receiveShadows = !!i773[4]
  i772.shadowCastingMode = i773[5]
  i772.sortingLayerID = i773[6]
  i772.sortingOrder = i773[7]
  i772.lightmapIndex = i773[8]
  i772.lightmapSceneIndex = i773[9]
  i772.lightmapScaleOffset = new pc.Vec4( i773[10], i773[11], i773[12], i773[13] )
  i772.lightProbeUsage = i773[14]
  i772.reflectionProbeUsage = i773[15]
  request.r(i773[16], i773[17], 0, i772, 'mesh')
  i772.meshCount = i773[18]
  i772.activeVertexStreamsCount = i773[19]
  i772.alignment = i773[20]
  i772.renderMode = i773[21]
  i772.sortMode = i773[22]
  i772.lengthScale = i773[23]
  i772.velocityScale = i773[24]
  i772.cameraVelocityScale = i773[25]
  i772.normalDirection = i773[26]
  i772.sortingFudge = i773[27]
  i772.minParticleSize = i773[28]
  i772.maxParticleSize = i773[29]
  i772.pivot = new pc.Vec3( i773[30], i773[31], i773[32] )
  request.r(i773[33], i773[34], 0, i772, 'trailMaterial')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i779 = data
  i778.name = i779[0]
  i778.tagId = i779[1]
  i778.enabled = !!i779[2]
  i778.isStatic = !!i779[3]
  i778.layer = i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i781 = data
  i780.name = i781[0]
  i780.halfPrecision = !!i781[1]
  i780.useUInt32IndexFormat = !!i781[2]
  i780.vertexCount = i781[3]
  i780.aabb = i781[4]
  var i783 = i781[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( !!i783[i + 0] );
  }
  i780.streams = i782
  i780.vertices = i781[6]
  var i785 = i781[7]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i785[i + 0]) );
  }
  i780.subMeshes = i784
  var i787 = i781[8]
  var i786 = []
  for(var i = 0; i < i787.length; i += 16) {
    i786.push( new pc.Mat4().setData(i787[i + 0], i787[i + 1], i787[i + 2], i787[i + 3],  i787[i + 4], i787[i + 5], i787[i + 6], i787[i + 7],  i787[i + 8], i787[i + 9], i787[i + 10], i787[i + 11],  i787[i + 12], i787[i + 13], i787[i + 14], i787[i + 15]) );
  }
  i780.bindposes = i786
  var i789 = i781[9]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i789[i + 0]) );
  }
  i780.blendShapes = i788
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i795 = data
  i794.triangles = i795[0]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i801 = data
  i800.name = i801[0]
  var i803 = i801[1]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i803[i + 0]) );
  }
  i800.frames = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i805 = data
  i804.pivot = new pc.Vec2( i805[0], i805[1] )
  i804.anchorMin = new pc.Vec2( i805[2], i805[3] )
  i804.anchorMax = new pc.Vec2( i805[4], i805[5] )
  i804.sizeDelta = new pc.Vec2( i805[6], i805[7] )
  i804.anchoredPosition3D = new pc.Vec3( i805[8], i805[9], i805[10] )
  i804.rotation = new pc.Quat(i805[11], i805[12], i805[13], i805[14])
  i804.scale = new pc.Vec3( i805[15], i805[16], i805[17] )
  return i804
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i806 = root || request.c( 'QuestSlot' )
  var i807 = data
  i806.InitialScale = new pc.Vec3( i807[0], i807[1], i807[2] )
  i806.MaximumScale = new pc.Vec3( i807[3], i807[4], i807[5] )
  i806.EndScale = new pc.Vec3( i807[6], i807[7], i807[8] )
  i806.animationDuration = i807[9]
  i806.maxSizeTrigger = i807[10]
  request.r(i807[11], i807[12], 0, i806, 'type')
  i806.amount = i807[13]
  i806.locked = !!i807[14]
  request.r(i807[15], i807[16], 0, i806, 'icon')
  request.r(i807[17], i807[18], 0, i806, 'amountTxt')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i809 = data
  i808.cullTransparentMesh = !!i809[0]
  return i808
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.Image' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_Sprite')
  i810.m_Type = i811[2]
  i810.m_PreserveAspect = !!i811[3]
  i810.m_FillCenter = !!i811[4]
  i810.m_FillMethod = i811[5]
  i810.m_FillAmount = i811[6]
  i810.m_FillClockwise = !!i811[7]
  i810.m_FillOrigin = i811[8]
  i810.m_UseSpriteMesh = !!i811[9]
  i810.m_PixelsPerUnitMultiplier = i811[10]
  request.r(i811[11], i811[12], 0, i810, 'm_Material')
  i810.m_Maskable = !!i811[13]
  i810.m_Color = new pc.Color(i811[14], i811[15], i811[16], i811[17])
  i810.m_RaycastTarget = !!i811[18]
  i810.m_RaycastPadding = new pc.Vec4( i811[19], i811[20], i811[21], i811[22] )
  return i810
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i813 = data
  i812.m_hasFontAssetChanged = !!i813[0]
  request.r(i813[1], i813[2], 0, i812, 'm_baseMaterial')
  i812.m_maskOffset = new pc.Vec4( i813[3], i813[4], i813[5], i813[6] )
  i812.m_text = i813[7]
  i812.m_isRightToLeft = !!i813[8]
  request.r(i813[9], i813[10], 0, i812, 'm_fontAsset')
  request.r(i813[11], i813[12], 0, i812, 'm_sharedMaterial')
  var i815 = i813[13]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.m_fontSharedMaterials = i814
  request.r(i813[14], i813[15], 0, i812, 'm_fontMaterial')
  var i817 = i813[16]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i812.m_fontMaterials = i816
  i812.m_fontColor32 = UnityEngine.Color32.ConstructColor(i813[17], i813[18], i813[19], i813[20])
  i812.m_fontColor = new pc.Color(i813[21], i813[22], i813[23], i813[24])
  i812.m_enableVertexGradient = !!i813[25]
  i812.m_colorMode = i813[26]
  i812.m_fontColorGradient = request.d('TMPro.VertexGradient', i813[27], i812.m_fontColorGradient)
  request.r(i813[28], i813[29], 0, i812, 'm_fontColorGradientPreset')
  request.r(i813[30], i813[31], 0, i812, 'm_spriteAsset')
  i812.m_tintAllSprites = !!i813[32]
  request.r(i813[33], i813[34], 0, i812, 'm_StyleSheet')
  i812.m_TextStyleHashCode = i813[35]
  i812.m_overrideHtmlColors = !!i813[36]
  i812.m_faceColor = UnityEngine.Color32.ConstructColor(i813[37], i813[38], i813[39], i813[40])
  i812.m_fontSize = i813[41]
  i812.m_fontSizeBase = i813[42]
  i812.m_fontWeight = i813[43]
  i812.m_enableAutoSizing = !!i813[44]
  i812.m_fontSizeMin = i813[45]
  i812.m_fontSizeMax = i813[46]
  i812.m_fontStyle = i813[47]
  i812.m_HorizontalAlignment = i813[48]
  i812.m_VerticalAlignment = i813[49]
  i812.m_textAlignment = i813[50]
  i812.m_characterSpacing = i813[51]
  i812.m_wordSpacing = i813[52]
  i812.m_lineSpacing = i813[53]
  i812.m_lineSpacingMax = i813[54]
  i812.m_paragraphSpacing = i813[55]
  i812.m_charWidthMaxAdj = i813[56]
  i812.m_enableWordWrapping = !!i813[57]
  i812.m_wordWrappingRatios = i813[58]
  i812.m_overflowMode = i813[59]
  request.r(i813[60], i813[61], 0, i812, 'm_linkedTextComponent')
  request.r(i813[62], i813[63], 0, i812, 'parentLinkedComponent')
  i812.m_enableKerning = !!i813[64]
  i812.m_enableExtraPadding = !!i813[65]
  i812.checkPaddingRequired = !!i813[66]
  i812.m_isRichText = !!i813[67]
  i812.m_parseCtrlCharacters = !!i813[68]
  i812.m_isOrthographic = !!i813[69]
  i812.m_isCullingEnabled = !!i813[70]
  i812.m_horizontalMapping = i813[71]
  i812.m_verticalMapping = i813[72]
  i812.m_uvLineOffset = i813[73]
  i812.m_geometrySortingOrder = i813[74]
  i812.m_IsTextObjectScaleStatic = !!i813[75]
  i812.m_VertexBufferAutoSizeReduction = !!i813[76]
  i812.m_useMaxVisibleDescender = !!i813[77]
  i812.m_pageToDisplay = i813[78]
  i812.m_margin = new pc.Vec4( i813[79], i813[80], i813[81], i813[82] )
  i812.m_isUsingLegacyAnimationComponent = !!i813[83]
  i812.m_isVolumetricText = !!i813[84]
  request.r(i813[85], i813[86], 0, i812, 'm_Material')
  i812.m_Maskable = !!i813[87]
  i812.m_Color = new pc.Color(i813[88], i813[89], i813[90], i813[91])
  i812.m_RaycastTarget = !!i813[92]
  i812.m_RaycastPadding = new pc.Vec4( i813[93], i813[94], i813[95], i813[96] )
  return i812
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.VertexGradient' )
  var i819 = data
  i818.topLeft = new pc.Color(i819[0], i819[1], i819[2], i819[3])
  i818.topRight = new pc.Color(i819[4], i819[5], i819[6], i819[7])
  i818.bottomLeft = new pc.Color(i819[8], i819[9], i819[10], i819[11])
  i818.bottomRight = new pc.Color(i819[12], i819[13], i819[14], i819[15])
  return i818
}

Deserializers["Tile"] = function (request, data, root) {
  var i820 = root || request.c( 'Tile' )
  var i821 = data
  i820.layer = i821[0]
  i820.line = i821[1]
  request.r(i821[2], i821[3], 0, i820, 'icon')
  request.r(i821[4], i821[5], 0, i820, 'lockTile')
  request.r(i821[6], i821[7], 0, i820, 'background')
  request.r(i821[8], i821[9], 0, i820, 'trail')
  i820.locked = !!i821[10]
  i820.isHidden = !!i821[11]
  i820.debug = !!i821[12]
  request.r(i821[13], i821[14], 0, i820, 'spawnAnim')
  request.r(i821[15], i821[16], 0, i820, 'type')
  i820.box = request.d('Box', i821[17], i820.box)
  request.r(i821[18], i821[19], 0, i820, 'movement')
  request.r(i821[20], i821[21], 0, i820, 'lockAnim')
  i820.iconSort = i821[22]
  i820.backGroundSort = i821[23]
  i820.disabledSort = i821[24]
  i820.trailSort = i821[25]
  var i823 = i821[26]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 1, i822, '')
  }
  i820.coverTiles = i822
  return i820
}

Deserializers["Box"] = function (request, data, root) {
  var i824 = root || request.c( 'Box' )
  var i825 = data
  i824.Position = new pc.Vec2( i825[0], i825[1] )
  i824.Width = i825[2]
  i824.Height = i825[3]
  return i824
}

Deserializers["TileMovement"] = function (request, data, root) {
  var i828 = root || request.c( 'TileMovement' )
  var i829 = data
  i828.speed = i829[0]
  i828._isMoving = !!i829[1]
  return i828
}

Deserializers["AnimationScale"] = function (request, data, root) {
  var i830 = root || request.c( 'AnimationScale' )
  var i831 = data
  i830.startSize = i831[0]
  i830.maxSize = i831[1]
  i830.endSize = i831[2]
  i830.duration = i831[3]
  return i830
}

Deserializers["TileLockAnimation"] = function (request, data, root) {
  var i832 = root || request.c( 'TileLockAnimation' )
  var i833 = data
  i832.lockAlpha = i833[0]
  i832.fadeDuration = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i835 = data
  i834.enabled = !!i835[0]
  request.r(i835[1], i835[2], 0, i834, 'sharedMaterial')
  var i837 = i835[3]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.sharedMaterials = i836
  i834.receiveShadows = !!i835[4]
  i834.shadowCastingMode = i835[5]
  i834.sortingLayerID = i835[6]
  i834.sortingOrder = i835[7]
  i834.lightmapIndex = i835[8]
  i834.lightmapSceneIndex = i835[9]
  i834.lightmapScaleOffset = new pc.Vec4( i835[10], i835[11], i835[12], i835[13] )
  i834.lightProbeUsage = i835[14]
  i834.reflectionProbeUsage = i835[15]
  i834.color = new pc.Color(i835[16], i835[17], i835[18], i835[19])
  request.r(i835[20], i835[21], 0, i834, 'sprite')
  i834.flipX = !!i835[22]
  i834.flipY = !!i835[23]
  i834.drawMode = i835[24]
  i834.size = new pc.Vec2( i835[25], i835[26] )
  i834.tileMode = i835[27]
  i834.adaptiveModeThreshold = i835[28]
  i834.maskInteraction = i835[29]
  i834.spriteSortPoint = i835[30]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i839 = data
  i838.enabled = !!i839[0]
  request.r(i839[1], i839[2], 0, i838, 'sharedMaterial')
  var i841 = i839[3]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.sharedMaterials = i840
  i838.receiveShadows = !!i839[4]
  i838.shadowCastingMode = i839[5]
  i838.sortingLayerID = i839[6]
  i838.sortingOrder = i839[7]
  i838.lightmapIndex = i839[8]
  i838.lightmapSceneIndex = i839[9]
  i838.lightmapScaleOffset = new pc.Vec4( i839[10], i839[11], i839[12], i839[13] )
  i838.lightProbeUsage = i839[14]
  i838.reflectionProbeUsage = i839[15]
  var i843 = i839[16]
  var i842 = []
  for(var i = 0; i < i843.length; i += 3) {
    i842.push( new pc.Vec3( i843[i + 0], i843[i + 1], i843[i + 2] ) );
  }
  i838.positions = i842
  i838.positionCount = i839[17]
  i838.time = i839[18]
  i838.startWidth = i839[19]
  i838.endWidth = i839[20]
  i838.widthMultiplier = i839[21]
  i838.autodestruct = !!i839[22]
  i838.emitting = !!i839[23]
  i838.numCornerVertices = i839[24]
  i838.numCapVertices = i839[25]
  i838.minVertexDistance = i839[26]
  i838.colorGradient = i839[27] ? new pc.ColorGradient(i839[27][0], i839[27][1], i839[27][2]) : null
  i838.startColor = new pc.Color(i839[28], i839[29], i839[30], i839[31])
  i838.endColor = new pc.Color(i839[32], i839[33], i839[34], i839[35])
  i838.generateLightingData = !!i839[36]
  i838.textureMode = i839[37]
  i838.alignment = i839[38]
  i838.widthCurve = new pc.AnimationCurve( { keys_flow: i839[39] } )
  return i838
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i846 = root || request.c( 'TileSlot' )
  var i847 = data
  i846.ID = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'Tile')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i849 = data
  i848.name = i849[0]
  i848.index = i849[1]
  i848.startup = !!i849[2]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i851 = data
  i850.enabled = !!i851[0]
  i850.aspect = i851[1]
  i850.orthographic = !!i851[2]
  i850.orthographicSize = i851[3]
  i850.backgroundColor = new pc.Color(i851[4], i851[5], i851[6], i851[7])
  i850.nearClipPlane = i851[8]
  i850.farClipPlane = i851[9]
  i850.fieldOfView = i851[10]
  i850.depth = i851[11]
  i850.clearFlags = i851[12]
  i850.cullingMask = i851[13]
  i850.rect = i851[14]
  request.r(i851[15], i851[16], 0, i850, 'targetTexture')
  i850.usePhysicalProperties = !!i851[17]
  i850.focalLength = i851[18]
  i850.sensorSize = new pc.Vec2( i851[19], i851[20] )
  i850.lensShift = new pc.Vec2( i851[21], i851[22] )
  i850.gateFit = i851[23]
  return i850
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_FirstSelected')
  i852.m_sendNavigationEvents = !!i853[2]
  i852.m_DragThreshold = i853[3]
  return i852
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i855 = data
  i854.m_HorizontalAxis = i855[0]
  i854.m_VerticalAxis = i855[1]
  i854.m_SubmitButton = i855[2]
  i854.m_CancelButton = i855[3]
  i854.m_InputActionsPerSecond = i855[4]
  i854.m_RepeatDelay = i855[5]
  i854.m_ForceModuleActive = !!i855[6]
  i854.m_SendPointerHoverToParent = !!i855[7]
  return i854
}

Deserializers["Game"] = function (request, data, root) {
  var i856 = root || request.c( 'Game' )
  var i857 = data
  i856._isGameEnded = !!i857[0]
  i856.autoGameOverInSeconds = i857[1]
  request.r(i857[2], i857[3], 0, i856, 'deck')
  request.r(i857[4], i857[5], 0, i856, 'actions')
  request.r(i857[6], i857[7], 0, i856, 'locker')
  request.r(i857[8], i857[9], 0, i856, 'box2DLocker')
  request.r(i857[10], i857[11], 0, i856, 'bag')
  request.r(i857[12], i857[13], 0, i856, 'spawnAnimation')
  request.r(i857[14], i857[15], 0, i856, 'tileMatcher')
  request.r(i857[16], i857[17], 0, i856, 'loseCondition')
  request.r(i857[18], i857[19], 0, i856, 'winCondition')
  request.r(i857[20], i857[21], 0, i856, 'input')
  request.r(i857[22], i857[23], 0, i856, 'endCard')
  request.r(i857[24], i857[25], 0, i856, 'quest')
  i856.useRandom = !!i857[26]
  request.r(i857[27], i857[28], 0, i856, 'spawnRandom')
  i856.tileToSpawn = i857[29]
  i856.tilesInScene = i857[30]
  var i859 = i857[31]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 1, i858, '')
  }
  i856.tilesInGame = i858
  return i856
}

Deserializers["TileLockerBox2D"] = function (request, data, root) {
  var i860 = root || request.c( 'TileLockerBox2D' )
  var i861 = data
  i860.enable = !!i861[0]
  return i860
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i862 = root || request.c( 'TileSpawner' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'Game')
  request.r(i863[2], i863[3], 0, i862, 'prefab')
  var i865 = i863[4]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 1, i864, '')
  }
  i862.spawned = i864
  i862.hideAtSpawn = !!i863[5]
  i862.spawnRate = i863[6]
  return i862
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i866 = root || request.c( 'TileRandomSpawner' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'Game')
  i866.spawnRate = i867[2]
  var i869 = i867[3]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i866.spawned = i868
  return i866
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i870 = root || request.c( 'TileSpawnAnimation' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'Game')
  i870.delayBetweenLines = i871[2]
  i870.delayBetweenTiles = i871[3]
  i870.delayBetweenLayers = i871[4]
  return i870
}

Deserializers["TileActions"] = function (request, data, root) {
  var i872 = root || request.c( 'TileActions' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'Game')
  return i872
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i874 = root || request.c( 'TileMatcher' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'Game')
  request.r(i875[2], i875[3], 0, i874, 'vfx')
  var i877 = i875[4]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 1, i876, '')
  }
  i874.completed = i876
  var i879 = i875[5]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i874.lastMatch = i878
  return i874
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i882 = root || request.c( 'LoseCondition' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'Game')
  return i882
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i884 = root || request.c( 'WinCondition' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'Game')
  return i884
}

Deserializers["Quest"] = function (request, data, root) {
  var i886 = root || request.c( 'Quest' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'Game')
  var i889 = i887[2]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 1, i888, '')
  }
  i886.slots = i888
  return i886
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i892 = root || request.c( 'InputTouch' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'Game')
  i892.inputCooldown = i893[2]
  var i895 = i893[3]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i895.length; i += 2) {
    i894.add(new pc.Vec2( i895[i + 0], i895[i + 1] ));
  }
  i892.touches = i894
  i892.touchSize = i893[4]
  return i892
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i898 = root || request.c( 'TileBagSorter' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'Game')
  i898.enable = !!i899[2]
  i898.intervalSec = i899[3]
  return i898
}

Deserializers["EndCard"] = function (request, data, root) {
  var i900 = root || request.c( 'EndCard' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'canvas')
  request.r(i901[2], i901[3], 0, i900, 'Game')
  return i900
}

Deserializers["Sounds"] = function (request, data, root) {
  var i902 = root || request.c( 'Sounds' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'Game')
  request.r(i903[2], i903[3], 0, i902, 'tileClick')
  request.r(i903[4], i903[5], 0, i902, 'tileMerge')
  request.r(i903[6], i903[7], 0, i902, 'levelWin')
  request.r(i903[8], i903[9], 0, i902, 'leveLose')
  request.r(i903[10], i903[11], 0, i902, 'source')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'clip')
  request.r(i905[2], i905[3], 0, i904, 'outputAudioMixerGroup')
  i904.playOnAwake = !!i905[4]
  i904.loop = !!i905[5]
  i904.time = i905[6]
  i904.volume = i905[7]
  i904.pitch = i905[8]
  i904.enabled = !!i905[9]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i907 = data
  i906.enabled = !!i907[0]
  i906.planeDistance = i907[1]
  i906.referencePixelsPerUnit = i907[2]
  i906.isFallbackOverlay = !!i907[3]
  i906.renderMode = i907[4]
  i906.renderOrder = i907[5]
  i906.sortingLayerName = i907[6]
  i906.sortingOrder = i907[7]
  i906.scaleFactor = i907[8]
  request.r(i907[9], i907[10], 0, i906, 'worldCamera')
  i906.overrideSorting = !!i907[11]
  i906.pixelPerfect = !!i907[12]
  i906.targetDisplay = i907[13]
  i906.overridePixelPerfect = !!i907[14]
  return i906
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i909 = data
  i908.m_UiScaleMode = i909[0]
  i908.m_ReferencePixelsPerUnit = i909[1]
  i908.m_ScaleFactor = i909[2]
  i908.m_ReferenceResolution = new pc.Vec2( i909[3], i909[4] )
  i908.m_ScreenMatchMode = i909[5]
  i908.m_MatchWidthOrHeight = i909[6]
  i908.m_PhysicalUnit = i909[7]
  i908.m_FallbackScreenDPI = i909[8]
  i908.m_DefaultSpriteDPI = i909[9]
  i908.m_DynamicPixelsPerUnit = i909[10]
  i908.m_PresetInfoIsWorld = !!i909[11]
  return i908
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i911 = data
  i910.m_IgnoreReversedGraphics = !!i911[0]
  i910.m_BlockingObjects = i911[1]
  i910.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i911[2] )
  return i910
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i912 = root || request.c( 'ResetLocalPosition' )
  var i913 = data
  return i912
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i915 = data
  i914.m_Spacing = i915[0]
  i914.m_ChildForceExpandWidth = !!i915[1]
  i914.m_ChildForceExpandHeight = !!i915[2]
  i914.m_ChildControlWidth = !!i915[3]
  i914.m_ChildControlHeight = !!i915[4]
  i914.m_ChildScaleWidth = !!i915[5]
  i914.m_ChildScaleHeight = !!i915[6]
  i914.m_ReverseArrangement = !!i915[7]
  i914.m_Padding = UnityEngine.RectOffset.FromPaddings(i915[8], i915[9], i915[10], i915[11])
  i914.m_ChildAlignment = i915[12]
  return i914
}

Deserializers["AnimationScaleLooped"] = function (request, data, root) {
  var i916 = root || request.c( 'AnimationScaleLooped' )
  var i917 = data
  i916.playFromStart = !!i917[0]
  i916.startScale = new pc.Vec3( i917[1], i917[2], i917[3] )
  i916.endScale = new pc.Vec3( i917[4], i917[5], i917[6] )
  i916.speed = i917[7]
  return i916
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i919 = data
  i918.m_StartCorner = i919[0]
  i918.m_StartAxis = i919[1]
  i918.m_CellSize = new pc.Vec2( i919[2], i919[3] )
  i918.m_Spacing = new pc.Vec2( i919[4], i919[5] )
  i918.m_Constraint = i919[6]
  i918.m_ConstraintCount = i919[7]
  i918.m_Padding = UnityEngine.RectOffset.FromPaddings(i919[8], i919[9], i919[10], i919[11])
  i918.m_ChildAlignment = i919[12]
  return i918
}

Deserializers["Sweeling"] = function (request, data, root) {
  var i920 = root || request.c( 'Sweeling' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'center')
  i920.radius = i921[2]
  i920.speed = i921[3]
  i920.angle = i921[4]
  return i920
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Button' )
  var i923 = data
  i922.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i923[0], i922.m_OnClick)
  i922.m_Navigation = request.d('UnityEngine.UI.Navigation', i923[1], i922.m_Navigation)
  i922.m_Transition = i923[2]
  i922.m_Colors = request.d('UnityEngine.UI.ColorBlock', i923[3], i922.m_Colors)
  i922.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i923[4], i922.m_SpriteState)
  i922.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i923[5], i922.m_AnimationTriggers)
  i922.m_Interactable = !!i923[6]
  request.r(i923[7], i923[8], 0, i922, 'm_TargetGraphic')
  return i922
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i925 = data
  i924.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i925[0], i924.m_PersistentCalls)
  return i924
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i927 = data
  var i929 = i927[0]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('UnityEngine.Events.PersistentCall', i929[i + 0]));
  }
  i926.m_Calls = i928
  return i926
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_Target')
  i932.m_TargetAssemblyTypeName = i933[2]
  i932.m_MethodName = i933[3]
  i932.m_Mode = i933[4]
  i932.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i933[5], i932.m_Arguments)
  i932.m_CallState = i933[6]
  return i932
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'm_ObjectArgument')
  i934.m_ObjectArgumentAssemblyTypeName = i935[2]
  i934.m_IntArgument = i935[3]
  i934.m_FloatArgument = i935[4]
  i934.m_StringArgument = i935[5]
  i934.m_BoolArgument = !!i935[6]
  return i934
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i937 = data
  i936.m_Mode = i937[0]
  i936.m_WrapAround = !!i937[1]
  request.r(i937[2], i937[3], 0, i936, 'm_SelectOnUp')
  request.r(i937[4], i937[5], 0, i936, 'm_SelectOnDown')
  request.r(i937[6], i937[7], 0, i936, 'm_SelectOnLeft')
  request.r(i937[8], i937[9], 0, i936, 'm_SelectOnRight')
  return i936
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i939 = data
  i938.m_NormalColor = new pc.Color(i939[0], i939[1], i939[2], i939[3])
  i938.m_HighlightedColor = new pc.Color(i939[4], i939[5], i939[6], i939[7])
  i938.m_PressedColor = new pc.Color(i939[8], i939[9], i939[10], i939[11])
  i938.m_SelectedColor = new pc.Color(i939[12], i939[13], i939[14], i939[15])
  i938.m_DisabledColor = new pc.Color(i939[16], i939[17], i939[18], i939[19])
  i938.m_ColorMultiplier = i939[20]
  i938.m_FadeDuration = i939[21]
  return i938
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'm_HighlightedSprite')
  request.r(i941[2], i941[3], 0, i940, 'm_PressedSprite')
  request.r(i941[4], i941[5], 0, i940, 'm_SelectedSprite')
  request.r(i941[6], i941[7], 0, i940, 'm_DisabledSprite')
  return i940
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i943 = data
  i942.m_NormalTrigger = i943[0]
  i942.m_HighlightedTrigger = i943[1]
  i942.m_PressedTrigger = i943[2]
  i942.m_SelectedTrigger = i943[3]
  i942.m_DisabledTrigger = i943[4]
  return i942
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i944 = root || request.c( 'TilesBag' )
  var i945 = data
  var i947 = i945[0]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 1, i946, '')
  }
  i944.slots = i946
  return i944
}

Deserializers["Deck"] = function (request, data, root) {
  var i948 = root || request.c( 'Deck' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'Game')
  return i948
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i950 = root || request.c( 'DeckLayer' )
  var i951 = data
  i950.layer = i951[0]
  var i953 = i951[1]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.Tiles = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i957 = data
  i956.ambientIntensity = i957[0]
  i956.reflectionIntensity = i957[1]
  i956.ambientMode = i957[2]
  i956.ambientLight = new pc.Color(i957[3], i957[4], i957[5], i957[6])
  i956.ambientSkyColor = new pc.Color(i957[7], i957[8], i957[9], i957[10])
  i956.ambientGroundColor = new pc.Color(i957[11], i957[12], i957[13], i957[14])
  i956.ambientEquatorColor = new pc.Color(i957[15], i957[16], i957[17], i957[18])
  i956.fogColor = new pc.Color(i957[19], i957[20], i957[21], i957[22])
  i956.fogEndDistance = i957[23]
  i956.fogStartDistance = i957[24]
  i956.fogDensity = i957[25]
  i956.fog = !!i957[26]
  request.r(i957[27], i957[28], 0, i956, 'skybox')
  i956.fogMode = i957[29]
  var i959 = i957[30]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i959[i + 0]) );
  }
  i956.lightmaps = i958
  i956.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i957[31], i956.lightProbes)
  i956.lightmapsMode = i957[32]
  i956.mixedBakeMode = i957[33]
  i956.environmentLightingMode = i957[34]
  i956.ambientProbe = new pc.SphericalHarmonicsL2(i957[35])
  i956.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i957[36])
  i956.useReferenceAmbientProbe = !!i957[37]
  request.r(i957[38], i957[39], 0, i956, 'customReflection')
  request.r(i957[40], i957[41], 0, i956, 'defaultReflection')
  i956.defaultReflectionMode = i957[42]
  i956.defaultReflectionResolution = i957[43]
  i956.sunLightObjectId = i957[44]
  i956.pixelLightCount = i957[45]
  i956.defaultReflectionHDR = !!i957[46]
  i956.hasLightDataAsset = !!i957[47]
  i956.hasManualGenerate = !!i957[48]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'lightmapColor')
  request.r(i963[2], i963[3], 0, i962, 'lightmapDirection')
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i964 = root || new UnityEngine.LightProbes()
  var i965 = data
  return i964
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i970 = root || request.c( 'TileLocker' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'Game')
  i970.enabled = !!i971[2]
  i970.lockDistance = i971[3]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'sharedMesh')
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'additionalVertexStreams')
  i974.enabled = !!i975[2]
  request.r(i975[3], i975[4], 0, i974, 'sharedMaterial')
  var i977 = i975[5]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i974.sharedMaterials = i976
  i974.receiveShadows = !!i975[6]
  i974.shadowCastingMode = i975[7]
  i974.sortingLayerID = i975[8]
  i974.sortingOrder = i975[9]
  i974.lightmapIndex = i975[10]
  i974.lightmapSceneIndex = i975[11]
  i974.lightmapScaleOffset = new pc.Vec4( i975[12], i975[13], i975[14], i975[15] )
  i974.lightProbeUsage = i975[16]
  i974.reflectionProbeUsage = i975[17]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i979 = data
  var i981 = i979[0]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i981[i + 0]));
  }
  i978.ShaderCompilationErrors = i980
  i978.name = i979[1]
  i978.guid = i979[2]
  var i983 = i979[3]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i978.shaderDefinedKeywords = i982
  var i985 = i979[4]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i985[i + 0]) );
  }
  i978.passes = i984
  var i987 = i979[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i987[i + 0]) );
  }
  i978.usePasses = i986
  var i989 = i979[6]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i989[i + 0]) );
  }
  i978.defaultParameterValues = i988
  request.r(i979[7], i979[8], 0, i978, 'unityFallbackShader')
  i978.readDepth = !!i979[9]
  i978.isCreatedByShaderGraph = !!i979[10]
  i978.usedBatchUniforms = i979[11]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i993 = data
  i992.shaderName = i993[0]
  i992.errorMessage = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i998 = root || new pc.UnityShaderPass()
  var i999 = data
  i998.id = i999[0]
  i998.subShaderIndex = i999[1]
  i998.name = i999[2]
  i998.passType = i999[3]
  i998.grabPassTextureName = i999[4]
  i998.usePass = !!i999[5]
  i998.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[6], i998.zTest)
  i998.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[7], i998.zWrite)
  i998.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[8], i998.culling)
  i998.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i999[9], i998.blending)
  i998.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i999[10], i998.alphaBlending)
  i998.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[11], i998.colorWriteMask)
  i998.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[12], i998.offsetUnits)
  i998.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[13], i998.offsetFactor)
  i998.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[14], i998.stencilRef)
  i998.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[15], i998.stencilReadMask)
  i998.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[16], i998.stencilWriteMask)
  i998.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i999[17], i998.stencilOp)
  i998.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i999[18], i998.stencilOpFront)
  i998.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i999[19], i998.stencilOpBack)
  var i1001 = i999[20]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1001[i + 0]) );
  }
  i998.tags = i1000
  var i1003 = i999[21]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( i1003[i + 0] );
  }
  i998.passDefinedKeywords = i1002
  var i1005 = i999[22]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1005[i + 0]) );
  }
  i998.passDefinedKeywordGroups = i1004
  var i1007 = i999[23]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1007[i + 0]) );
  }
  i998.variants = i1006
  var i1009 = i999[24]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1009[i + 0]) );
  }
  i998.excludedVariants = i1008
  i998.hasDepthReader = !!i999[25]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1011 = data
  i1010.val = i1011[0]
  i1010.name = i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1013 = data
  i1012.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1013[0], i1012.src)
  i1012.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1013[1], i1012.dst)
  i1012.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1013[2], i1012.op)
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1015 = data
  i1014.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[0], i1014.pass)
  i1014.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[1], i1014.fail)
  i1014.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[2], i1014.zFail)
  i1014.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[3], i1014.comp)
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.value = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1022.keywords = i1024
  i1022.hasDiscard = !!i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1029 = data
  i1028.passId = i1029[0]
  i1028.subShaderIndex = i1029[1]
  var i1031 = i1029[2]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1028.keywords = i1030
  i1028.vertexProgram = i1029[3]
  i1028.fragmentProgram = i1029[4]
  i1028.compiledForWebGL2 = !!i1029[5]
  i1028.readDepth = !!i1029[6]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'shader')
  i1034.pass = i1035[2]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.type = i1039[1]
  i1038.value = new pc.Vec4( i1039[2], i1039[3], i1039[4], i1039[5] )
  i1038.textureValue = i1039[6]
  i1038.shaderPropertyFlag = i1039[7]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1041 = data
  i1040.name = i1041[0]
  request.r(i1041[1], i1041[2], 0, i1040, 'texture')
  i1040.aabb = i1041[3]
  i1040.vertices = i1041[4]
  i1040.triangles = i1041[5]
  i1040.textureRect = UnityEngine.Rect.MinMaxRect(i1041[6], i1041[7], i1041[8], i1041[9])
  i1040.packedRect = UnityEngine.Rect.MinMaxRect(i1041[10], i1041[11], i1041[12], i1041[13])
  i1040.border = new pc.Vec4( i1041[14], i1041[15], i1041[16], i1041[17] )
  i1040.transparency = i1041[18]
  i1040.bounds = i1041[19]
  i1040.pixelsPerUnit = i1041[20]
  i1040.textureWidth = i1041[21]
  i1040.textureHeight = i1041[22]
  i1040.nativeSize = new pc.Vec2( i1041[23], i1041[24] )
  i1040.pivot = new pc.Vec2( i1041[25], i1041[26] )
  i1040.textureRectOffset = new pc.Vec2( i1041[27], i1041[28] )
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1043 = data
  i1042.name = i1043[0]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.bytes64 = i1045[1]
  i1044.data = i1045[2]
  return i1044
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1047 = data
  i1046.hashCode = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'material')
  i1046.materialHashCode = i1047[3]
  request.r(i1047[4], i1047[5], 0, i1046, 'atlas')
  i1046.normalStyle = i1047[6]
  i1046.normalSpacingOffset = i1047[7]
  i1046.boldStyle = i1047[8]
  i1046.boldSpacing = i1047[9]
  i1046.italicStyle = i1047[10]
  i1046.tabSize = i1047[11]
  i1046.m_Version = i1047[12]
  i1046.m_SourceFontFileGUID = i1047[13]
  request.r(i1047[14], i1047[15], 0, i1046, 'm_SourceFontFile_EditorRef')
  request.r(i1047[16], i1047[17], 0, i1046, 'm_SourceFontFile')
  i1046.m_AtlasPopulationMode = i1047[18]
  i1046.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1047[19], i1046.m_FaceInfo)
  var i1049 = i1047[20]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('UnityEngine.TextCore.Glyph', i1049[i + 0]));
  }
  i1046.m_GlyphTable = i1048
  var i1051 = i1047[21]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d('TMPro.TMP_Character', i1051[i + 0]));
  }
  i1046.m_CharacterTable = i1050
  var i1053 = i1047[22]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1046.m_AtlasTextures = i1052
  i1046.m_AtlasTextureIndex = i1047[23]
  i1046.m_IsMultiAtlasTexturesEnabled = !!i1047[24]
  i1046.m_ClearDynamicDataOnBuild = !!i1047[25]
  var i1055 = i1047[26]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('UnityEngine.TextCore.GlyphRect', i1055[i + 0]));
  }
  i1046.m_UsedGlyphRects = i1054
  var i1057 = i1047[27]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.add(request.d('UnityEngine.TextCore.GlyphRect', i1057[i + 0]));
  }
  i1046.m_FreeGlyphRects = i1056
  i1046.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1047[28], i1046.m_fontInfo)
  i1046.m_AtlasWidth = i1047[29]
  i1046.m_AtlasHeight = i1047[30]
  i1046.m_AtlasPadding = i1047[31]
  i1046.m_AtlasRenderMode = i1047[32]
  var i1059 = i1047[33]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('TMPro.TMP_Glyph', i1059[i + 0]));
  }
  i1046.m_glyphInfoList = i1058
  i1046.m_KerningTable = request.d('TMPro.KerningTable', i1047[34], i1046.m_KerningTable)
  i1046.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1047[35], i1046.m_FontFeatureTable)
  var i1061 = i1047[36]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1046.fallbackFontAssets = i1060
  var i1063 = i1047[37]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 1, i1062, '')
  }
  i1046.m_FallbackFontAssetTable = i1062
  i1046.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1047[38], i1046.m_CreationSettings)
  var i1065 = i1047[39]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('TMPro.TMP_FontWeightPair', i1065[i + 0]) );
  }
  i1046.m_FontWeightTable = i1064
  var i1067 = i1047[40]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('TMPro.TMP_FontWeightPair', i1067[i + 0]) );
  }
  i1046.fontWeights = i1066
  return i1046
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1069 = data
  i1068.m_FaceIndex = i1069[0]
  i1068.m_FamilyName = i1069[1]
  i1068.m_StyleName = i1069[2]
  i1068.m_PointSize = i1069[3]
  i1068.m_Scale = i1069[4]
  i1068.m_UnitsPerEM = i1069[5]
  i1068.m_LineHeight = i1069[6]
  i1068.m_AscentLine = i1069[7]
  i1068.m_CapLine = i1069[8]
  i1068.m_MeanLine = i1069[9]
  i1068.m_Baseline = i1069[10]
  i1068.m_DescentLine = i1069[11]
  i1068.m_SuperscriptOffset = i1069[12]
  i1068.m_SuperscriptSize = i1069[13]
  i1068.m_SubscriptOffset = i1069[14]
  i1068.m_SubscriptSize = i1069[15]
  i1068.m_UnderlineOffset = i1069[16]
  i1068.m_UnderlineThickness = i1069[17]
  i1068.m_StrikethroughOffset = i1069[18]
  i1068.m_StrikethroughThickness = i1069[19]
  i1068.m_TabWidth = i1069[20]
  return i1068
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1073 = data
  i1072.m_Index = i1073[0]
  i1072.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1073[1], i1072.m_Metrics)
  i1072.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1073[2], i1072.m_GlyphRect)
  i1072.m_Scale = i1073[3]
  i1072.m_AtlasIndex = i1073[4]
  i1072.m_ClassDefinitionType = i1073[5]
  return i1072
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1075 = data
  i1074.m_Width = i1075[0]
  i1074.m_Height = i1075[1]
  i1074.m_HorizontalBearingX = i1075[2]
  i1074.m_HorizontalBearingY = i1075[3]
  i1074.m_HorizontalAdvance = i1075[4]
  return i1074
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1077 = data
  i1076.m_X = i1077[0]
  i1076.m_Y = i1077[1]
  i1076.m_Width = i1077[2]
  i1076.m_Height = i1077[3]
  return i1076
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.TMP_Character' )
  var i1081 = data
  i1080.m_ElementType = i1081[0]
  i1080.m_Unicode = i1081[1]
  i1080.m_GlyphIndex = i1081[2]
  i1080.m_Scale = i1081[3]
  return i1080
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1087 = data
  i1086.Name = i1087[0]
  i1086.PointSize = i1087[1]
  i1086.Scale = i1087[2]
  i1086.CharacterCount = i1087[3]
  i1086.LineHeight = i1087[4]
  i1086.Baseline = i1087[5]
  i1086.Ascender = i1087[6]
  i1086.CapHeight = i1087[7]
  i1086.Descender = i1087[8]
  i1086.CenterLine = i1087[9]
  i1086.SuperscriptOffset = i1087[10]
  i1086.SubscriptOffset = i1087[11]
  i1086.SubSize = i1087[12]
  i1086.Underline = i1087[13]
  i1086.UnderlineThickness = i1087[14]
  i1086.strikethrough = i1087[15]
  i1086.strikethroughThickness = i1087[16]
  i1086.TabWidth = i1087[17]
  i1086.Padding = i1087[18]
  i1086.AtlasWidth = i1087[19]
  i1086.AtlasHeight = i1087[20]
  return i1086
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1091 = data
  i1090.id = i1091[0]
  i1090.x = i1091[1]
  i1090.y = i1091[2]
  i1090.width = i1091[3]
  i1090.height = i1091[4]
  i1090.xOffset = i1091[5]
  i1090.yOffset = i1091[6]
  i1090.xAdvance = i1091[7]
  i1090.scale = i1091[8]
  return i1090
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.KerningTable' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('TMPro.KerningPair', i1095[i + 0]));
  }
  i1092.kerningPairs = i1094
  return i1092
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.KerningPair' )
  var i1099 = data
  i1098.xOffset = i1099[0]
  i1098.m_FirstGlyph = i1099[1]
  i1098.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1099[2], i1098.m_FirstGlyphAdjustments)
  i1098.m_SecondGlyph = i1099[3]
  i1098.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1099[4], i1098.m_SecondGlyphAdjustments)
  i1098.m_IgnoreSpacingAdjustments = !!i1099[5]
  return i1098
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1103[i + 0]));
  }
  i1100.m_GlyphPairAdjustmentRecords = i1102
  return i1100
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1107 = data
  i1106.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1107[0], i1106.m_FirstAdjustmentRecord)
  i1106.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1107[1], i1106.m_SecondAdjustmentRecord)
  i1106.m_FeatureLookupFlags = i1107[2]
  return i1106
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1109 = data
  i1108.m_GlyphIndex = i1109[0]
  i1108.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1109[1], i1108.m_GlyphValueRecord)
  return i1108
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1111 = data
  i1110.m_XPlacement = i1111[0]
  i1110.m_YPlacement = i1111[1]
  i1110.m_XAdvance = i1111[2]
  i1110.m_YAdvance = i1111[3]
  return i1110
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1115 = data
  i1114.sourceFontFileName = i1115[0]
  i1114.sourceFontFileGUID = i1115[1]
  i1114.pointSizeSamplingMode = i1115[2]
  i1114.pointSize = i1115[3]
  i1114.padding = i1115[4]
  i1114.packingMode = i1115[5]
  i1114.atlasWidth = i1115[6]
  i1114.atlasHeight = i1115[7]
  i1114.characterSetSelectionMode = i1115[8]
  i1114.characterSequence = i1115[9]
  i1114.referencedFontAssetGUID = i1115[10]
  i1114.referencedTextAssetGUID = i1115[11]
  i1114.fontStyle = i1115[12]
  i1114.fontStyleModifier = i1115[13]
  i1114.renderMode = i1115[14]
  i1114.includeFontFeatures = !!i1115[15]
  return i1114
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'regularTypeface')
  request.r(i1119[2], i1119[3], 0, i1118, 'italicTypeface')
  return i1118
}

Deserializers["TileSO"] = function (request, data, root) {
  var i1120 = root || request.c( 'TileSO' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'icon')
  return i1120
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1122 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1123 = data
  i1122.hashCode = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'material')
  i1122.materialHashCode = i1123[3]
  request.r(i1123[4], i1123[5], 0, i1122, 'spriteSheet')
  var i1125 = i1123[6]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('TMPro.TMP_Sprite', i1125[i + 0]));
  }
  i1122.spriteInfoList = i1124
  var i1127 = i1123[7]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 1, i1126, '')
  }
  i1122.fallbackSpriteAssets = i1126
  i1122.m_Version = i1123[8]
  i1122.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1123[9], i1122.m_FaceInfo)
  var i1129 = i1123[10]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('TMPro.TMP_SpriteCharacter', i1129[i + 0]));
  }
  i1122.m_SpriteCharacterTable = i1128
  var i1131 = i1123[11]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('TMPro.TMP_SpriteGlyph', i1131[i + 0]));
  }
  i1122.m_SpriteGlyphTable = i1130
  return i1122
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.hashCode = i1135[1]
  i1134.unicode = i1135[2]
  i1134.pivot = new pc.Vec2( i1135[3], i1135[4] )
  request.r(i1135[5], i1135[6], 0, i1134, 'sprite')
  i1134.id = i1135[7]
  i1134.x = i1135[8]
  i1134.y = i1135[9]
  i1134.width = i1135[10]
  i1134.height = i1135[11]
  i1134.xOffset = i1135[12]
  i1134.yOffset = i1135[13]
  i1134.xAdvance = i1135[14]
  i1134.scale = i1135[15]
  return i1134
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1141 = data
  i1140.m_Name = i1141[0]
  i1140.m_HashCode = i1141[1]
  i1140.m_ElementType = i1141[2]
  i1140.m_Unicode = i1141[3]
  i1140.m_GlyphIndex = i1141[4]
  i1140.m_Scale = i1141[5]
  return i1140
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'sprite')
  i1144.m_Index = i1145[2]
  i1144.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1145[3], i1144.m_Metrics)
  i1144.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1145[4], i1144.m_GlyphRect)
  i1144.m_Scale = i1145[5]
  i1144.m_AtlasIndex = i1145[6]
  i1144.m_ClassDefinitionType = i1145[7]
  return i1144
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.TMP_Style', i1149[i + 0]));
  }
  i1146.m_StyleList = i1148
  return i1146
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_Style' )
  var i1153 = data
  i1152.m_Name = i1153[0]
  i1152.m_HashCode = i1153[1]
  i1152.m_OpeningDefinition = i1153[2]
  i1152.m_ClosingDefinition = i1153[3]
  i1152.m_OpeningTagArray = i1153[4]
  i1152.m_ClosingTagArray = i1153[5]
  i1152.m_OpeningTagUnicodeArray = i1153[6]
  i1152.m_ClosingTagUnicodeArray = i1153[7]
  return i1152
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.TMP_Settings' )
  var i1155 = data
  i1154.m_enableWordWrapping = !!i1155[0]
  i1154.m_enableKerning = !!i1155[1]
  i1154.m_enableExtraPadding = !!i1155[2]
  i1154.m_enableTintAllSprites = !!i1155[3]
  i1154.m_enableParseEscapeCharacters = !!i1155[4]
  i1154.m_EnableRaycastTarget = !!i1155[5]
  i1154.m_GetFontFeaturesAtRuntime = !!i1155[6]
  i1154.m_missingGlyphCharacter = i1155[7]
  i1154.m_warningsDisabled = !!i1155[8]
  request.r(i1155[9], i1155[10], 0, i1154, 'm_defaultFontAsset')
  i1154.m_defaultFontAssetPath = i1155[11]
  i1154.m_defaultFontSize = i1155[12]
  i1154.m_defaultAutoSizeMinRatio = i1155[13]
  i1154.m_defaultAutoSizeMaxRatio = i1155[14]
  i1154.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1155[15], i1155[16] )
  i1154.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1155[17], i1155[18] )
  i1154.m_autoSizeTextContainer = !!i1155[19]
  i1154.m_IsTextObjectScaleStatic = !!i1155[20]
  var i1157 = i1155[21]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1157.length; i += 2) {
  request.r(i1157[i + 0], i1157[i + 1], 1, i1156, '')
  }
  i1154.m_fallbackFontAssets = i1156
  i1154.m_matchMaterialPreset = !!i1155[22]
  request.r(i1155[23], i1155[24], 0, i1154, 'm_defaultSpriteAsset')
  i1154.m_defaultSpriteAssetPath = i1155[25]
  i1154.m_enableEmojiSupport = !!i1155[26]
  i1154.m_MissingCharacterSpriteUnicode = i1155[27]
  i1154.m_defaultColorGradientPresetsPath = i1155[28]
  request.r(i1155[29], i1155[30], 0, i1154, 'm_defaultStyleSheet')
  i1154.m_StyleSheetsResourcePath = i1155[31]
  request.r(i1155[32], i1155[33], 0, i1154, 'm_leadingCharacters')
  request.r(i1155[34], i1155[35], 0, i1154, 'm_followingCharacters')
  i1154.m_UseModernHangulLineBreakingRules = !!i1155[36]
  return i1154
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i1159 = data
  i1158._svcLunaVersion = i1159[0]
  var i1161 = i1159[1]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d(' .  ', i1161[i + 0]));
  }
  i1158._shaderVariants = i1160
  var i1163 = i1159[2]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d(' .  ', i1163[i + 0]));
  }
  i1158._usedByLunaBuild = i1162
  var i1165 = i1159[3]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d(' .  ', i1165[i + 0]));
  }
  i1158._includedShaderVariants = i1164
  var i1167 = i1159[4]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d(' .  ', i1167[i + 0]));
  }
  i1158._excludedShaderVariants = i1166
  i1158.version = System.Int64(i1159[5])
  var i1169 = i1159[6]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i1169[i + 0]));
  }
  i1158._shaderParsedShaders = i1168
  var i1171 = i1159[7]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(i1171[i + 0]);
  }
  i1158._modifiedShaders = i1170
  i1158.invalidShaders = !!i1159[8]
  i1158._cachedShadersPlatform = i1159[9]
  i1158._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i1159[10], i1158._sceneLightData)
  return i1158
}

Deserializers[" .  "] = function (request, data, root) {
  var i1174 = root || request.c( ' .  ' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'shader')
  i1174.passType = i1175[2]
  i1174.passId = i1175[3]
  i1174.subShaderIndex = i1175[4]
  i1174.upToDate = !!i1175[5]
  var i1177 = i1175[6]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1174.keywords = i1176
  return i1174
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i1183[i + 0]));
  }
  i1180.ParsedSubShaders = i1182
  request.r(i1181[1], i1181[2], 0, i1180, 'Shader')
  i1180.ShaderPath = i1181[3]
  var i1185 = i1181[4]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( i1185[i + 0] );
  }
  i1180.ShaderDefinedKeywords = i1184
  request.r(i1181[5], i1181[6], 0, i1180, 'fallbackShader')
  var i1187 = i1181[7]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i1187[i + 0]));
  }
  i1180.CompilationErrors = i1186
  i1180.shaderCompilerPlatform = i1181[8]
  return i1180
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i1191 = data
  i1190.Index = i1191[0]
  var i1193 = i1191[1]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i1193[i + 0]));
  }
  i1190.Passes = i1192
  var i1195 = i1191[2]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1195[i + 0]));
  }
  i1190.Tags = i1194
  i1190.UsePass = !!i1191[3]
  return i1190
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i1199 = data
  i1198.ShaderName = i1199[0]
  var i1201 = i1199[1]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i1201[i + 0]));
  }
  i1198.ShaderVariants = i1200
  var i1203 = i1199[2]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1198.definedKeywords = i1202
  var i1205 = i1199[3]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i1205[i + 0]));
  }
  i1198.keywordGroups = i1204
  i1198.KeywordsMinimalCardinality = i1199[4]
  i1198.ContainsInvalidVariant = !!i1199[5]
  i1198.ShaderCompilerPlatform = i1199[6]
  i1198.HasDepthReader = !!i1199[7]
  i1198.Id = i1199[8]
  i1198.SubShaderIndex = i1199[9]
  i1198.SerializedObjectId = i1199[10]
  var i1207 = i1199[11]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1207[i + 0]));
  }
  i1198.Tags = i1206
  i1198.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i1199[12], i1198.UsePass)
  i1198.GrabPassTextureName = i1199[13]
  i1198.PassShaderRequirements = i1199[14]
  i1198.PlatformMask = i1199[15]
  return i1198
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i1211 = data
  i1210.NoShaderVariant = !!i1211[0]
  i1210.VertexProgram = i1211[1]
  i1210.FragmentProgram = i1211[2]
  i1210.LOD = i1211[3]
  i1210.readDepth = !!i1211[4]
  i1210.Index = i1211[5]
  i1210.PassId = i1211[6]
  i1210.SubShaderIndex = i1211[7]
  var i1213 = i1211[8]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( i1213[i + 0] );
  }
  i1210.Keywords = i1212
  var i1215 = i1211[9]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1215[i + 0]));
  }
  i1210.Tags = i1214
  return i1210
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i1219 = data
  i1218.Key = i1219[0]
  i1218.Value = i1219[1]
  return i1218
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(i1225[i + 0]);
  }
  i1222.Keywords = i1224
  return i1222
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i1227 = data
  i1226.shader = i1227[0]
  i1226.pass = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i1231 = data
  i1230.ShaderName = i1231[0]
  var i1233 = i1231[1]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i1233[i + 0]));
  }
  i1230.Details = i1232
  return i1230
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i1237 = data
  i1236.PointLightCount = i1237[0]
  i1236.SpotLightCount = i1237[1]
  i1236.DirectionalLightCount = i1237[2]
  i1236.LightmapOn = !!i1237[3]
  i1236.DirlightmapCombined = !!i1237[4]
  i1236.DirectionalCookieExists = !!i1237[5]
  i1236.PointCookieExists = !!i1237[6]
  i1236.SpotCookieExists = !!i1237[7]
  i1236.AddiitonalLightsKeywordRequired = !!i1237[8]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1241[i + 0]) );
  }
  i1238.files = i1240
  i1238.componentToPrefabIds = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1245 = data
  i1244.path = i1245[0]
  request.r(i1245[1], i1245[2], 0, i1244, 'unityObject')
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1249[i + 0]) );
  }
  i1246.scriptsExecutionOrder = i1248
  var i1251 = i1247[1]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1251[i + 0]) );
  }
  i1246.sortingLayers = i1250
  var i1253 = i1247[2]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1253[i + 0]) );
  }
  i1246.cullingLayers = i1252
  i1246.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1247[3], i1246.timeSettings)
  i1246.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1247[4], i1246.physicsSettings)
  i1246.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1247[5], i1246.physics2DSettings)
  i1246.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1247[6], i1246.qualitySettings)
  i1246.enableRealtimeShadows = !!i1247[7]
  i1246.enableAutoInstancing = !!i1247[8]
  i1246.enableDynamicBatching = !!i1247[9]
  i1246.lightmapEncodingQuality = i1247[10]
  i1246.desiredColorSpace = i1247[11]
  var i1255 = i1247[12]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( i1255[i + 0] );
  }
  i1246.allTags = i1254
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.value = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1263 = data
  i1262.id = i1263[0]
  i1262.name = i1263[1]
  i1262.value = i1263[2]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1267 = data
  i1266.id = i1267[0]
  i1266.name = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1269 = data
  i1268.fixedDeltaTime = i1269[0]
  i1268.maximumDeltaTime = i1269[1]
  i1268.timeScale = i1269[2]
  i1268.maximumParticleTimestep = i1269[3]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1271 = data
  i1270.gravity = new pc.Vec3( i1271[0], i1271[1], i1271[2] )
  i1270.defaultSolverIterations = i1271[3]
  i1270.bounceThreshold = i1271[4]
  i1270.autoSyncTransforms = !!i1271[5]
  i1270.autoSimulation = !!i1271[6]
  var i1273 = i1271[7]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1273[i + 0]) );
  }
  i1270.collisionMatrix = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1277 = data
  i1276.enabled = !!i1277[0]
  i1276.layerId = i1277[1]
  i1276.otherLayerId = i1277[2]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'material')
  i1278.gravity = new pc.Vec2( i1279[2], i1279[3] )
  i1278.positionIterations = i1279[4]
  i1278.velocityIterations = i1279[5]
  i1278.velocityThreshold = i1279[6]
  i1278.maxLinearCorrection = i1279[7]
  i1278.maxAngularCorrection = i1279[8]
  i1278.maxTranslationSpeed = i1279[9]
  i1278.maxRotationSpeed = i1279[10]
  i1278.baumgarteScale = i1279[11]
  i1278.baumgarteTOIScale = i1279[12]
  i1278.timeToSleep = i1279[13]
  i1278.linearSleepTolerance = i1279[14]
  i1278.angularSleepTolerance = i1279[15]
  i1278.defaultContactOffset = i1279[16]
  i1278.autoSimulation = !!i1279[17]
  i1278.queriesHitTriggers = !!i1279[18]
  i1278.queriesStartInColliders = !!i1279[19]
  i1278.callbacksOnDisable = !!i1279[20]
  i1278.reuseCollisionCallbacks = !!i1279[21]
  i1278.autoSyncTransforms = !!i1279[22]
  var i1281 = i1279[23]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1281[i + 0]) );
  }
  i1278.collisionMatrix = i1280
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.layerId = i1285[1]
  i1284.otherLayerId = i1285[2]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1287 = data
  var i1289 = i1287[0]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1289[i + 0]) );
  }
  i1286.qualityLevels = i1288
  var i1291 = i1287[1]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1286.names = i1290
  i1286.shadows = i1287[2]
  i1286.anisotropicFiltering = i1287[3]
  i1286.antiAliasing = i1287[4]
  i1286.lodBias = i1287[5]
  i1286.shadowCascades = i1287[6]
  i1286.shadowDistance = i1287[7]
  i1286.shadowmaskMode = i1287[8]
  i1286.shadowProjection = i1287[9]
  i1286.shadowResolution = i1287[10]
  i1286.softParticles = !!i1287[11]
  i1286.softVegetation = !!i1287[12]
  i1286.activeColorSpace = i1287[13]
  i1286.desiredColorSpace = i1287[14]
  i1286.masterTextureLimit = i1287[15]
  i1286.maxQueuedFrames = i1287[16]
  i1286.particleRaycastBudget = i1287[17]
  i1286.pixelLightCount = i1287[18]
  i1286.realtimeReflectionProbes = !!i1287[19]
  i1286.shadowCascade2Split = i1287[20]
  i1286.shadowCascade4Split = new pc.Vec3( i1287[21], i1287[22], i1287[23] )
  i1286.streamingMipmapsActive = !!i1287[24]
  i1286.vSyncCount = i1287[25]
  i1286.asyncUploadBufferSize = i1287[26]
  i1286.asyncUploadTimeSlice = i1287[27]
  i1286.billboardsFaceCameraPosition = !!i1287[28]
  i1286.shadowNearPlaneOffset = i1287[29]
  i1286.streamingMipmapsMemoryBudget = i1287[30]
  i1286.maximumLODLevel = i1287[31]
  i1286.streamingMipmapsAddAllCameras = !!i1287[32]
  i1286.streamingMipmapsMaxLevelReduction = i1287[33]
  i1286.streamingMipmapsRenderersPerFrame = i1287[34]
  i1286.resolutionScalingFixedDPIFactor = i1287[35]
  i1286.streamingMipmapsMaxFileIORequests = i1287[36]
  i1286.currentQualityLevel = i1287[37]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1297 = data
  i1296.weight = i1297[0]
  i1296.vertices = i1297[1]
  i1296.normals = i1297[2]
  i1296.tangents = i1297[3]
  return i1296
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1299 = data
  i1298.xPlacement = i1299[0]
  i1298.yPlacement = i1299[1]
  i1298.xAdvance = i1299[2]
  i1298.yAdvance = i1299[3]
  return i1298
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i1303 = data
  i1302.SubShaderIndex = i1303[0]
  i1302.PassId = i1303[1]
  var i1305 = i1303[2]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( i1305[i + 0] );
  }
  i1302.ShaderVariantKeywords = i1304
  var i1307 = i1303[3]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( i1307[i + 0] );
  }
  i1302.Messages = i1306
  return i1302
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[24],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[24],"98":[59],"99":[100],"101":[100],"44":[7],"102":[24],"103":[7],"104":[59,7],"12":[7,13],"105":[7],"106":[13,7],"107":[59],"108":[13,7],"109":[7],"110":[111],"112":[7],"113":[7],"49":[44],"11":[13,7],"114":[7],"48":[44],"115":[7],"53":[7],"51":[7],"116":[7],"117":[7],"118":[7],"119":[7],"120":[7],"121":[7],"122":[13,7],"123":[7],"124":[7],"125":[7],"126":[7],"127":[13,7],"128":[7],"129":[26],"130":[26],"27":[26],"131":[26],"132":[24],"133":[24],"134":[111],"135":[18],"136":[137],"138":[111]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","QuestSlot","TileSO","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","Tile","UnityEngine.SpriteRenderer","UnityEngine.TrailRenderer","AnimationScale","TileMovement","TileLockAnimation","TileSlot","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileActions","TileLockerBox2D","TilesBag","TileSpawnAnimation","TileMatcher","LoseCondition","WinCondition","InputTouch","EndCard","Quest","TileRandomSpawner","TileSpawner","UnityEngine.GameObject","TileBagSorter","UnityEngine.Canvas","Sounds","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResetLocalPosition","UnityEngine.UI.HorizontalLayoutGroup","AnimationScaleLooped","UnityEngine.UI.GridLayoutGroup","Sweeling","UnityEngine.UI.Button","DeckLayer","TileLocker","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "3.1";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "ColelctSalmon";

Deserializers.lunaAppID = "25029";

Deserializers.projectId = "5b6cf7c73bef2a94eac4ebbca2d52761";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1653";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3657";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playble-3";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = true;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "6fe5683c-990a-46de-b3a7-9e56aae1e2e5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

