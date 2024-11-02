var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointSpring' )
  var i677 = data
  i676.spring = i677[0]
  i676.damper = i677[1]
  i676.targetPosition = i677[2]
  return i676
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointMotor' )
  var i679 = data
  i678.m_TargetVelocity = i679[0]
  i678.m_Force = i679[1]
  i678.m_FreeSpin = i679[2]
  return i678
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointLimits' )
  var i681 = data
  i680.m_Min = i681[0]
  i680.m_Max = i681[1]
  i680.m_Bounciness = i681[2]
  i680.m_BounceMinVelocity = i681[3]
  i680.m_ContactDistance = i681[4]
  i680.minBounce = i681[5]
  i680.maxBounce = i681[6]
  return i680
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointDrive' )
  var i683 = data
  i682.m_PositionSpring = i683[0]
  i682.m_PositionDamper = i683[1]
  i682.m_MaximumForce = i683[2]
  return i682
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i685 = data
  i684.m_Spring = i685[0]
  i684.m_Damper = i685[1]
  return i684
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i687 = data
  i686.m_Limit = i687[0]
  i686.m_Bounciness = i687[1]
  i686.m_ContactDistance = i687[2]
  return i686
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i689 = data
  i688.m_ExtremumSlip = i689[0]
  i688.m_ExtremumValue = i689[1]
  i688.m_AsymptoteSlip = i689[2]
  i688.m_AsymptoteValue = i689[3]
  i688.m_Stiffness = i689[4]
  return i688
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i691 = data
  i690.m_LowerAngle = i691[0]
  i690.m_UpperAngle = i691[1]
  return i690
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i693 = data
  i692.m_MotorSpeed = i693[0]
  i692.m_MaximumMotorTorque = i693[1]
  return i692
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i695 = data
  i694.m_DampingRatio = i695[0]
  i694.m_Frequency = i695[1]
  i694.m_Angle = i695[2]
  return i694
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i697 = data
  i696.m_LowerTranslation = i697[0]
  i696.m_UpperTranslation = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i698 = root || new pc.UnityMaterial()
  var i699 = data
  i698.name = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'shader')
  i698.renderQueue = i699[3]
  i698.enableInstancing = !!i699[4]
  var i701 = i699[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i701[i + 0]) );
  }
  i698.floatParameters = i700
  var i703 = i699[6]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i703[i + 0]) );
  }
  i698.colorParameters = i702
  var i705 = i699[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i705[i + 0]) );
  }
  i698.vectorParameters = i704
  var i707 = i699[8]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i707[i + 0]) );
  }
  i698.textureParameters = i706
  var i709 = i699[9]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i709[i + 0]) );
  }
  i698.materialFlags = i708
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i713 = data
  i712.name = i713[0]
  i712.value = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i717 = data
  i716.name = i717[0]
  i716.value = new pc.Color(i717[1], i717[2], i717[3], i717[4])
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = new pc.Vec4( i721[1], i721[2], i721[3], i721[4] )
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i725 = data
  i724.name = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'value')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i729 = data
  i728.name = i729[0]
  i728.enabled = !!i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i731 = data
  i730.position = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.scale = new pc.Vec3( i731[3], i731[4], i731[5] )
  i730.rotation = new pc.Quat(i731[6], i731[7], i731[8], i731[9])
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i733 = data
  i732.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i733[0], i732.main)
  i732.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i733[1], i732.colorBySpeed)
  i732.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i733[2], i732.colorOverLifetime)
  i732.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i733[3], i732.emission)
  i732.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i733[4], i732.rotationBySpeed)
  i732.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i733[5], i732.rotationOverLifetime)
  i732.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i733[6], i732.shape)
  i732.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i733[7], i732.sizeBySpeed)
  i732.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i733[8], i732.sizeOverLifetime)
  i732.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i733[9], i732.textureSheetAnimation)
  i732.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i733[10], i732.velocityOverLifetime)
  i732.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i733[11], i732.noise)
  i732.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i733[12], i732.inheritVelocity)
  i732.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i733[13], i732.forceOverLifetime)
  i732.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i733[14], i732.limitVelocityOverLifetime)
  i732.useAutoRandomSeed = !!i733[15]
  i732.randomSeed = i733[16]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemMain()
  var i735 = data
  i734.duration = i735[0]
  i734.loop = !!i735[1]
  i734.prewarm = !!i735[2]
  i734.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.startDelay)
  i734.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[4], i734.startLifetime)
  i734.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[5], i734.startSpeed)
  i734.startSize3D = !!i735[6]
  i734.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[7], i734.startSizeX)
  i734.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[8], i734.startSizeY)
  i734.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[9], i734.startSizeZ)
  i734.startRotation3D = !!i735[10]
  i734.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[11], i734.startRotationX)
  i734.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[12], i734.startRotationY)
  i734.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[13], i734.startRotationZ)
  i734.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i735[14], i734.startColor)
  i734.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[15], i734.gravityModifier)
  i734.simulationSpace = i735[16]
  request.r(i735[17], i735[18], 0, i734, 'customSimulationSpace')
  i734.simulationSpeed = i735[19]
  i734.useUnscaledTime = !!i735[20]
  i734.scalingMode = i735[21]
  i734.playOnAwake = !!i735[22]
  i734.maxParticles = i735[23]
  i734.emitterVelocityMode = i735[24]
  i734.stopAction = i735[25]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i736 = root || new pc.MinMaxCurve()
  var i737 = data
  i736.mode = i737[0]
  i736.curveMin = new pc.AnimationCurve( { keys_flow: i737[1] } )
  i736.curveMax = new pc.AnimationCurve( { keys_flow: i737[2] } )
  i736.curveMultiplier = i737[3]
  i736.constantMin = i737[4]
  i736.constantMax = i737[5]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i738 = root || new pc.MinMaxGradient()
  var i739 = data
  i738.mode = i739[0]
  i738.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i739[1], i738.gradientMin)
  i738.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i739[2], i738.gradientMax)
  i738.colorMin = new pc.Color(i739[3], i739[4], i739[5], i739[6])
  i738.colorMax = new pc.Color(i739[7], i739[8], i739[9], i739[10])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i741 = data
  i740.mode = i741[0]
  var i743 = i741[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i743[i + 0]) );
  }
  i740.colorKeys = i742
  var i745 = i741[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i745[i + 0]) );
  }
  i740.alphaKeys = i744
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemColorBySpeed()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i747[1], i746.color)
  i746.range = new pc.Vec2( i747[2], i747[3] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i751 = data
  i750.color = new pc.Color(i751[0], i751[1], i751[2], i751[3])
  i750.time = i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i755 = data
  i754.alpha = i755[0]
  i754.time = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemColorOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[1], i756.color)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemEmitter()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.rateOverTime)
  i758.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.rateOverDistance)
  var i761 = i759[3]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i761[i + 0]) );
  }
  i758.bursts = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemBurst()
  var i765 = data
  i764.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[0], i764.count)
  i764.cycleCount = i765[1]
  i764.minCount = i765[2]
  i764.maxCount = i765[3]
  i764.repeatInterval = i765[4]
  i764.time = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemRotationBySpeed()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.separateAxes = !!i767[4]
  i766.range = new pc.Vec2( i767[5], i767[6] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemRotationOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.separateAxes = !!i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemShape()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.shapeType = i771[1]
  i770.randomDirectionAmount = i771[2]
  i770.sphericalDirectionAmount = i771[3]
  i770.randomPositionAmount = i771[4]
  i770.alignToDirection = !!i771[5]
  i770.radius = i771[6]
  i770.radiusMode = i771[7]
  i770.radiusSpread = i771[8]
  i770.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[9], i770.radiusSpeed)
  i770.radiusThickness = i771[10]
  i770.angle = i771[11]
  i770.length = i771[12]
  i770.boxThickness = new pc.Vec3( i771[13], i771[14], i771[15] )
  i770.meshShapeType = i771[16]
  request.r(i771[17], i771[18], 0, i770, 'mesh')
  request.r(i771[19], i771[20], 0, i770, 'meshRenderer')
  request.r(i771[21], i771[22], 0, i770, 'skinnedMeshRenderer')
  i770.useMeshMaterialIndex = !!i771[23]
  i770.meshMaterialIndex = i771[24]
  i770.useMeshColors = !!i771[25]
  i770.normalOffset = i771[26]
  i770.arc = i771[27]
  i770.arcMode = i771[28]
  i770.arcSpread = i771[29]
  i770.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[30], i770.arcSpeed)
  i770.donutRadius = i771[31]
  i770.position = new pc.Vec3( i771[32], i771[33], i771[34] )
  i770.rotation = new pc.Vec3( i771[35], i771[36], i771[37] )
  i770.scale = new pc.Vec3( i771[38], i771[39], i771[40] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemSizeBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  i772.range = new pc.Vec2( i773[5], i773[6] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemSizeOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.separateAxes = !!i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.mode = i777[1]
  i776.animation = i777[2]
  i776.numTilesX = i777[3]
  i776.numTilesY = i777[4]
  i776.useRandomRow = !!i777[5]
  i776.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[6], i776.frameOverTime)
  i776.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[7], i776.startFrame)
  i776.cycleCount = i777[8]
  i776.rowIndex = i777[9]
  i776.flipU = i777[10]
  i776.flipV = i777[11]
  i776.spriteCount = i777[12]
  var i779 = i777[13]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.sprites = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[4], i782.radial)
  i782.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[5], i782.speedModifier)
  i782.space = i783[6]
  i782.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[7], i782.orbitalX)
  i782.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[8], i782.orbitalY)
  i782.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[9], i782.orbitalZ)
  i782.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[10], i782.orbitalOffsetX)
  i782.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[11], i782.orbitalOffsetY)
  i782.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[12], i782.orbitalOffsetZ)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemNoise()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.separateAxes = !!i785[1]
  i784.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.strengthX)
  i784.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.strengthY)
  i784.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[4], i784.strengthZ)
  i784.frequency = i785[5]
  i784.damping = !!i785[6]
  i784.octaveCount = i785[7]
  i784.octaveMultiplier = i785[8]
  i784.octaveScale = i785[9]
  i784.quality = i785[10]
  i784.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[11], i784.scrollSpeed)
  i784.scrollSpeedMultiplier = i785[12]
  i784.remapEnabled = !!i785[13]
  i784.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[14], i784.remapX)
  i784.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[15], i784.remapY)
  i784.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[16], i784.remapZ)
  i784.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[17], i784.positionAmount)
  i784.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[18], i784.rotationAmount)
  i784.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[19], i784.sizeAmount)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemInheritVelocity()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.mode = i787[1]
  i786.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.curve)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemForceOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.space = i789[4]
  i788.randomized = !!i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.limit)
  i790.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.limitX)
  i790.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.limitY)
  i790.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.limitZ)
  i790.dampen = i791[5]
  i790.separateAxes = !!i791[6]
  i790.space = i791[7]
  i790.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[8], i790.drag)
  i790.multiplyDragByParticleSize = !!i791[9]
  i790.multiplyDragByParticleVelocity = !!i791[10]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i793 = data
  i792.enabled = !!i793[0]
  request.r(i793[1], i793[2], 0, i792, 'sharedMaterial')
  var i795 = i793[3]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.sharedMaterials = i794
  i792.receiveShadows = !!i793[4]
  i792.shadowCastingMode = i793[5]
  i792.sortingLayerID = i793[6]
  i792.sortingOrder = i793[7]
  i792.lightmapIndex = i793[8]
  i792.lightmapSceneIndex = i793[9]
  i792.lightmapScaleOffset = new pc.Vec4( i793[10], i793[11], i793[12], i793[13] )
  i792.lightProbeUsage = i793[14]
  i792.reflectionProbeUsage = i793[15]
  request.r(i793[16], i793[17], 0, i792, 'mesh')
  i792.meshCount = i793[18]
  i792.activeVertexStreamsCount = i793[19]
  i792.alignment = i793[20]
  i792.renderMode = i793[21]
  i792.sortMode = i793[22]
  i792.lengthScale = i793[23]
  i792.velocityScale = i793[24]
  i792.cameraVelocityScale = i793[25]
  i792.normalDirection = i793[26]
  i792.sortingFudge = i793[27]
  i792.minParticleSize = i793[28]
  i792.maxParticleSize = i793[29]
  i792.pivot = new pc.Vec3( i793[30], i793[31], i793[32] )
  request.r(i793[33], i793[34], 0, i792, 'trailMaterial')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i799 = data
  i798.name = i799[0]
  i798.tagId = i799[1]
  i798.enabled = !!i799[2]
  i798.isStatic = !!i799[3]
  i798.layer = i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i801 = data
  i800.name = i801[0]
  i800.width = i801[1]
  i800.height = i801[2]
  i800.mipmapCount = i801[3]
  i800.anisoLevel = i801[4]
  i800.filterMode = i801[5]
  i800.hdr = !!i801[6]
  i800.format = i801[7]
  i800.wrapMode = i801[8]
  i800.alphaIsTransparency = !!i801[9]
  i800.alphaSource = i801[10]
  i800.graphicsFormat = i801[11]
  i800.sRGBTexture = !!i801[12]
  i800.desiredColorSpace = i801[13]
  i800.wrapU = i801[14]
  i800.wrapV = i801[15]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i803 = data
  i802.name = i803[0]
  i802.halfPrecision = !!i803[1]
  i802.useUInt32IndexFormat = !!i803[2]
  i802.vertexCount = i803[3]
  i802.aabb = i803[4]
  var i805 = i803[5]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( !!i805[i + 0] );
  }
  i802.streams = i804
  i802.vertices = i803[6]
  var i807 = i803[7]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i807[i + 0]) );
  }
  i802.subMeshes = i806
  var i809 = i803[8]
  var i808 = []
  for(var i = 0; i < i809.length; i += 16) {
    i808.push( new pc.Mat4().setData(i809[i + 0], i809[i + 1], i809[i + 2], i809[i + 3],  i809[i + 4], i809[i + 5], i809[i + 6], i809[i + 7],  i809[i + 8], i809[i + 9], i809[i + 10], i809[i + 11],  i809[i + 12], i809[i + 13], i809[i + 14], i809[i + 15]) );
  }
  i802.bindposes = i808
  var i811 = i803[9]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i811[i + 0]) );
  }
  i802.blendShapes = i810
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i817 = data
  i816.triangles = i817[0]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i823 = data
  i822.name = i823[0]
  var i825 = i823[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i825[i + 0]) );
  }
  i822.frames = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i827 = data
  i826.pivot = new pc.Vec2( i827[0], i827[1] )
  i826.anchorMin = new pc.Vec2( i827[2], i827[3] )
  i826.anchorMax = new pc.Vec2( i827[4], i827[5] )
  i826.sizeDelta = new pc.Vec2( i827[6], i827[7] )
  i826.anchoredPosition3D = new pc.Vec3( i827[8], i827[9], i827[10] )
  i826.rotation = new pc.Quat(i827[11], i827[12], i827[13], i827[14])
  i826.scale = new pc.Vec3( i827[15], i827[16], i827[17] )
  return i826
}

Deserializers["FloatingText"] = function (request, data, root) {
  var i828 = root || request.c( 'FloatingText' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'txt')
  i828.moveSpeed = i829[2]
  i828.fadeSpeed = i829[3]
  return i828
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TextMeshPro' )
  var i831 = data
  i830._SortingLayer = i831[0]
  i830._SortingLayerID = i831[1]
  i830._SortingOrder = i831[2]
  i830.m_hasFontAssetChanged = !!i831[3]
  request.r(i831[4], i831[5], 0, i830, 'm_renderer')
  i830.m_maskType = i831[6]
  i830.m_text = i831[7]
  i830.m_isRightToLeft = !!i831[8]
  request.r(i831[9], i831[10], 0, i830, 'm_fontAsset')
  request.r(i831[11], i831[12], 0, i830, 'm_sharedMaterial')
  var i833 = i831[13]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.m_fontSharedMaterials = i832
  request.r(i831[14], i831[15], 0, i830, 'm_fontMaterial')
  var i835 = i831[16]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i830.m_fontMaterials = i834
  i830.m_fontColor32 = UnityEngine.Color32.ConstructColor(i831[17], i831[18], i831[19], i831[20])
  i830.m_fontColor = new pc.Color(i831[21], i831[22], i831[23], i831[24])
  i830.m_enableVertexGradient = !!i831[25]
  i830.m_colorMode = i831[26]
  i830.m_fontColorGradient = request.d('TMPro.VertexGradient', i831[27], i830.m_fontColorGradient)
  request.r(i831[28], i831[29], 0, i830, 'm_fontColorGradientPreset')
  request.r(i831[30], i831[31], 0, i830, 'm_spriteAsset')
  i830.m_tintAllSprites = !!i831[32]
  request.r(i831[33], i831[34], 0, i830, 'm_StyleSheet')
  i830.m_TextStyleHashCode = i831[35]
  i830.m_overrideHtmlColors = !!i831[36]
  i830.m_faceColor = UnityEngine.Color32.ConstructColor(i831[37], i831[38], i831[39], i831[40])
  i830.m_fontSize = i831[41]
  i830.m_fontSizeBase = i831[42]
  i830.m_fontWeight = i831[43]
  i830.m_enableAutoSizing = !!i831[44]
  i830.m_fontSizeMin = i831[45]
  i830.m_fontSizeMax = i831[46]
  i830.m_fontStyle = i831[47]
  i830.m_HorizontalAlignment = i831[48]
  i830.m_VerticalAlignment = i831[49]
  i830.m_textAlignment = i831[50]
  i830.m_characterSpacing = i831[51]
  i830.m_wordSpacing = i831[52]
  i830.m_lineSpacing = i831[53]
  i830.m_lineSpacingMax = i831[54]
  i830.m_paragraphSpacing = i831[55]
  i830.m_charWidthMaxAdj = i831[56]
  i830.m_enableWordWrapping = !!i831[57]
  i830.m_wordWrappingRatios = i831[58]
  i830.m_overflowMode = i831[59]
  request.r(i831[60], i831[61], 0, i830, 'm_linkedTextComponent')
  request.r(i831[62], i831[63], 0, i830, 'parentLinkedComponent')
  i830.m_enableKerning = !!i831[64]
  i830.m_enableExtraPadding = !!i831[65]
  i830.checkPaddingRequired = !!i831[66]
  i830.m_isRichText = !!i831[67]
  i830.m_parseCtrlCharacters = !!i831[68]
  i830.m_isOrthographic = !!i831[69]
  i830.m_isCullingEnabled = !!i831[70]
  i830.m_horizontalMapping = i831[71]
  i830.m_verticalMapping = i831[72]
  i830.m_uvLineOffset = i831[73]
  i830.m_geometrySortingOrder = i831[74]
  i830.m_IsTextObjectScaleStatic = !!i831[75]
  i830.m_VertexBufferAutoSizeReduction = !!i831[76]
  i830.m_useMaxVisibleDescender = !!i831[77]
  i830.m_pageToDisplay = i831[78]
  i830.m_margin = new pc.Vec4( i831[79], i831[80], i831[81], i831[82] )
  i830.m_isUsingLegacyAnimationComponent = !!i831[83]
  i830.m_isVolumetricText = !!i831[84]
  request.r(i831[85], i831[86], 0, i830, 'm_Material')
  i830.m_Maskable = !!i831[87]
  i830.m_Color = new pc.Color(i831[88], i831[89], i831[90], i831[91])
  i830.m_RaycastTarget = !!i831[92]
  i830.m_RaycastPadding = new pc.Vec4( i831[93], i831[94], i831[95], i831[96] )
  return i830
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.VertexGradient' )
  var i837 = data
  i836.topLeft = new pc.Color(i837[0], i837[1], i837[2], i837[3])
  i836.topRight = new pc.Color(i837[4], i837[5], i837[6], i837[7])
  i836.bottomLeft = new pc.Color(i837[8], i837[9], i837[10], i837[11])
  i836.bottomRight = new pc.Color(i837[12], i837[13], i837[14], i837[15])
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'additionalVertexStreams')
  i838.enabled = !!i839[2]
  request.r(i839[3], i839[4], 0, i838, 'sharedMaterial')
  var i841 = i839[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.sharedMaterials = i840
  i838.receiveShadows = !!i839[6]
  i838.shadowCastingMode = i839[7]
  i838.sortingLayerID = i839[8]
  i838.sortingOrder = i839[9]
  i838.lightmapIndex = i839[10]
  i838.lightmapSceneIndex = i839[11]
  i838.lightmapScaleOffset = new pc.Vec4( i839[12], i839[13], i839[14], i839[15] )
  i838.lightProbeUsage = i839[16]
  i838.reflectionProbeUsage = i839[17]
  return i838
}

Deserializers["Tile"] = function (request, data, root) {
  var i842 = root || request.c( 'Tile' )
  var i843 = data
  i842.layer = i843[0]
  i842.line = i843[1]
  request.r(i843[2], i843[3], 0, i842, 'icon')
  request.r(i843[4], i843[5], 0, i842, 'lockTile')
  request.r(i843[6], i843[7], 0, i842, 'background')
  request.r(i843[8], i843[9], 0, i842, 'trail')
  i842.locked = !!i843[10]
  i842.isHidden = !!i843[11]
  i842.debug = !!i843[12]
  request.r(i843[13], i843[14], 0, i842, 'spawnAnim')
  request.r(i843[15], i843[16], 0, i842, 'type')
  i842.box = request.d('Box', i843[17], i842.box)
  request.r(i843[18], i843[19], 0, i842, 'movement')
  request.r(i843[20], i843[21], 0, i842, 'lockAnim')
  i842.iconSort = i843[22]
  i842.backGroundSort = i843[23]
  i842.disabledSort = i843[24]
  i842.trailSort = i843[25]
  var i845 = i843[26]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 1, i844, '')
  }
  i842.coverTiles = i844
  return i842
}

Deserializers["Box"] = function (request, data, root) {
  var i846 = root || request.c( 'Box' )
  var i847 = data
  i846.Position = new pc.Vec2( i847[0], i847[1] )
  i846.Width = i847[2]
  i846.Height = i847[3]
  return i846
}

Deserializers["TileMovement"] = function (request, data, root) {
  var i850 = root || request.c( 'TileMovement' )
  var i851 = data
  i850.speed = i851[0]
  i850._isMoving = !!i851[1]
  return i850
}

Deserializers["AnimationScale"] = function (request, data, root) {
  var i852 = root || request.c( 'AnimationScale' )
  var i853 = data
  i852.startSize = i853[0]
  i852.maxSize = i853[1]
  i852.endSize = i853[2]
  i852.duration = i853[3]
  return i852
}

Deserializers["TileLockAnimation"] = function (request, data, root) {
  var i854 = root || request.c( 'TileLockAnimation' )
  var i855 = data
  i854.lockAlpha = i855[0]
  i854.fadeDuration = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i857 = data
  i856.enabled = !!i857[0]
  request.r(i857[1], i857[2], 0, i856, 'sharedMaterial')
  var i859 = i857[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.sharedMaterials = i858
  i856.receiveShadows = !!i857[4]
  i856.shadowCastingMode = i857[5]
  i856.sortingLayerID = i857[6]
  i856.sortingOrder = i857[7]
  i856.lightmapIndex = i857[8]
  i856.lightmapSceneIndex = i857[9]
  i856.lightmapScaleOffset = new pc.Vec4( i857[10], i857[11], i857[12], i857[13] )
  i856.lightProbeUsage = i857[14]
  i856.reflectionProbeUsage = i857[15]
  i856.color = new pc.Color(i857[16], i857[17], i857[18], i857[19])
  request.r(i857[20], i857[21], 0, i856, 'sprite')
  i856.flipX = !!i857[22]
  i856.flipY = !!i857[23]
  i856.drawMode = i857[24]
  i856.size = new pc.Vec2( i857[25], i857[26] )
  i856.tileMode = i857[27]
  i856.adaptiveModeThreshold = i857[28]
  i856.maskInteraction = i857[29]
  i856.spriteSortPoint = i857[30]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i861 = data
  i860.enabled = !!i861[0]
  request.r(i861[1], i861[2], 0, i860, 'sharedMaterial')
  var i863 = i861[3]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.sharedMaterials = i862
  i860.receiveShadows = !!i861[4]
  i860.shadowCastingMode = i861[5]
  i860.sortingLayerID = i861[6]
  i860.sortingOrder = i861[7]
  i860.lightmapIndex = i861[8]
  i860.lightmapSceneIndex = i861[9]
  i860.lightmapScaleOffset = new pc.Vec4( i861[10], i861[11], i861[12], i861[13] )
  i860.lightProbeUsage = i861[14]
  i860.reflectionProbeUsage = i861[15]
  var i865 = i861[16]
  var i864 = []
  for(var i = 0; i < i865.length; i += 3) {
    i864.push( new pc.Vec3( i865[i + 0], i865[i + 1], i865[i + 2] ) );
  }
  i860.positions = i864
  i860.positionCount = i861[17]
  i860.time = i861[18]
  i860.startWidth = i861[19]
  i860.endWidth = i861[20]
  i860.widthMultiplier = i861[21]
  i860.autodestruct = !!i861[22]
  i860.emitting = !!i861[23]
  i860.numCornerVertices = i861[24]
  i860.numCapVertices = i861[25]
  i860.minVertexDistance = i861[26]
  i860.colorGradient = i861[27] ? new pc.ColorGradient(i861[27][0], i861[27][1], i861[27][2]) : null
  i860.startColor = new pc.Color(i861[28], i861[29], i861[30], i861[31])
  i860.endColor = new pc.Color(i861[32], i861[33], i861[34], i861[35])
  i860.generateLightingData = !!i861[36]
  i860.textureMode = i861[37]
  i860.alignment = i861[38]
  i860.widthCurve = new pc.AnimationCurve( { keys_flow: i861[39] } )
  return i860
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i868 = root || request.c( 'TileSlot' )
  var i869 = data
  i868.ID = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'Tile')
  return i868
}

Deserializers["AnimationScaleLooped"] = function (request, data, root) {
  var i870 = root || request.c( 'AnimationScaleLooped' )
  var i871 = data
  i870.playFromStart = !!i871[0]
  i870.startScale = new pc.Vec3( i871[1], i871[2], i871[3] )
  i870.endScale = new pc.Vec3( i871[4], i871[5], i871[6] )
  i870.speed = i871[7]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i873 = data
  i872.name = i873[0]
  i872.index = i873[1]
  i872.startup = !!i873[2]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i875 = data
  i874.enabled = !!i875[0]
  i874.aspect = i875[1]
  i874.orthographic = !!i875[2]
  i874.orthographicSize = i875[3]
  i874.backgroundColor = new pc.Color(i875[4], i875[5], i875[6], i875[7])
  i874.nearClipPlane = i875[8]
  i874.farClipPlane = i875[9]
  i874.fieldOfView = i875[10]
  i874.depth = i875[11]
  i874.clearFlags = i875[12]
  i874.cullingMask = i875[13]
  i874.rect = i875[14]
  request.r(i875[15], i875[16], 0, i874, 'targetTexture')
  i874.usePhysicalProperties = !!i875[17]
  i874.focalLength = i875[18]
  i874.sensorSize = new pc.Vec2( i875[19], i875[20] )
  i874.lensShift = new pc.Vec2( i875[21], i875[22] )
  i874.gateFit = i875[23]
  return i874
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_FirstSelected')
  i876.m_sendNavigationEvents = !!i877[2]
  i876.m_DragThreshold = i877[3]
  return i876
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i879 = data
  i878.m_HorizontalAxis = i879[0]
  i878.m_VerticalAxis = i879[1]
  i878.m_SubmitButton = i879[2]
  i878.m_CancelButton = i879[3]
  i878.m_InputActionsPerSecond = i879[4]
  i878.m_RepeatDelay = i879[5]
  i878.m_ForceModuleActive = !!i879[6]
  i878.m_SendPointerHoverToParent = !!i879[7]
  return i878
}

Deserializers["Game"] = function (request, data, root) {
  var i880 = root || request.c( 'Game' )
  var i881 = data
  i880._isGameEnded = !!i881[0]
  i880.autoGameOverInSeconds = i881[1]
  request.r(i881[2], i881[3], 0, i880, 'deck')
  request.r(i881[4], i881[5], 0, i880, 'actions')
  request.r(i881[6], i881[7], 0, i880, 'locker')
  request.r(i881[8], i881[9], 0, i880, 'box2DLocker')
  request.r(i881[10], i881[11], 0, i880, 'bag')
  request.r(i881[12], i881[13], 0, i880, 'spawnAnimation')
  request.r(i881[14], i881[15], 0, i880, 'tileMatcher')
  request.r(i881[16], i881[17], 0, i880, 'loseCondition')
  request.r(i881[18], i881[19], 0, i880, 'winCondition')
  request.r(i881[20], i881[21], 0, i880, 'input')
  request.r(i881[22], i881[23], 0, i880, 'endCard')
  request.r(i881[24], i881[25], 0, i880, 'questMatch3')
  i880.useRandom = !!i881[26]
  request.r(i881[27], i881[28], 0, i880, 'spawnRandom')
  i880.tileToSpawn = i881[29]
  i880.tilesInScene = i881[30]
  var i883 = i881[31]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i880.tilesInGame = i882
  return i880
}

Deserializers["TileLockerBox2D"] = function (request, data, root) {
  var i884 = root || request.c( 'TileLockerBox2D' )
  var i885 = data
  i884.enable = !!i885[0]
  return i884
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i886 = root || request.c( 'TileSpawner' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'Game')
  request.r(i887[2], i887[3], 0, i886, 'prefab')
  var i889 = i887[4]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 1, i888, '')
  }
  i886.spawned = i888
  i886.hideAtSpawn = !!i887[5]
  i886.spawnRate = i887[6]
  return i886
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i890 = root || request.c( 'TileRandomSpawner' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'Game')
  i890.spawnRate = i891[2]
  var i893 = i891[3]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 1, i892, '')
  }
  i890.spawned = i892
  return i890
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i894 = root || request.c( 'TileSpawnAnimation' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'Game')
  i894.delayBetweenLines = i895[2]
  i894.delayBetweenTiles = i895[3]
  i894.delayBetweenLayers = i895[4]
  return i894
}

Deserializers["TileActions"] = function (request, data, root) {
  var i896 = root || request.c( 'TileActions' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'Game')
  return i896
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i898 = root || request.c( 'TileMatcher' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'Game')
  request.r(i899[2], i899[3], 0, i898, 'vfx')
  var i901 = i899[4]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 1, i900, '')
  }
  i898.completed = i900
  var i903 = i899[5]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 1, i902, '')
  }
  i898.lastMatch = i902
  return i898
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i906 = root || request.c( 'LoseCondition' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'Game')
  return i906
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i908 = root || request.c( 'WinCondition' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'Game')
  return i908
}

Deserializers["QuestTyrRewards"] = function (request, data, root) {
  var i910 = root || request.c( 'QuestTyrRewards' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'Game')
  i910.cashForMatch3 = i911[2]
  request.r(i911[3], i911[4], 0, i910, 'balanceTxt')
  request.r(i911[5], i911[6], 0, i910, 'floatingText')
  request.r(i911[7], i911[8], 0, i910, 'scaleAnim')
  i910.balance = i911[9]
  request.r(i911[10], i911[11], 0, i910, 'lastText')
  return i910
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i912 = root || request.c( 'InputTouch' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'Game')
  i912.inputCooldown = i913[2]
  var i915 = i913[3]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i915.length; i += 2) {
    i914.add(new pc.Vec2( i915[i + 0], i915[i + 1] ));
  }
  i912.touches = i914
  i912.touchSize = i913[4]
  return i912
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i918 = root || request.c( 'TileBagSorter' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'Game')
  i918.enable = !!i919[2]
  i918.intervalSec = i919[3]
  return i918
}

Deserializers["EndCard"] = function (request, data, root) {
  var i920 = root || request.c( 'EndCard' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'canvas')
  request.r(i921[2], i921[3], 0, i920, 'slideAnimation')
  request.r(i921[4], i921[5], 0, i920, 'Game')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'clip')
  request.r(i923[2], i923[3], 0, i922, 'outputAudioMixerGroup')
  i922.playOnAwake = !!i923[4]
  i922.loop = !!i923[5]
  i922.time = i923[6]
  i922.volume = i923[7]
  i922.pitch = i923[8]
  i922.enabled = !!i923[9]
  return i922
}

Deserializers["Sounds"] = function (request, data, root) {
  var i924 = root || request.c( 'Sounds' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'Game')
  request.r(i925[2], i925[3], 0, i924, 'tileClick')
  request.r(i925[4], i925[5], 0, i924, 'tileMerge')
  request.r(i925[6], i925[7], 0, i924, 'levelWin')
  request.r(i925[8], i925[9], 0, i924, 'leveLose')
  request.r(i925[10], i925[11], 0, i924, 'source')
  return i924
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i926 = root || request.c( 'Tutorial' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'pointer')
  var i929 = i927[2]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialPointerData')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('TutorialPointerData', i929[i + 0]));
  }
  i926.pointers = i928
  i926.delay = i927[3]
  return i926
}

Deserializers["TutorialPointerData"] = function (request, data, root) {
  var i932 = root || request.c( 'TutorialPointerData' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'tutorial')
  request.r(i933[2], i933[3], 0, i932, 'tile')
  return i932
}

Deserializers["TutorialPointer"] = function (request, data, root) {
  var i934 = root || request.c( 'TutorialPointer' )
  var i935 = data
  i934.speed = i935[0]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i937 = data
  i936.enabled = !!i937[0]
  i936.planeDistance = i937[1]
  i936.referencePixelsPerUnit = i937[2]
  i936.isFallbackOverlay = !!i937[3]
  i936.renderMode = i937[4]
  i936.renderOrder = i937[5]
  i936.sortingLayerName = i937[6]
  i936.sortingOrder = i937[7]
  i936.scaleFactor = i937[8]
  request.r(i937[9], i937[10], 0, i936, 'worldCamera')
  i936.overrideSorting = !!i937[11]
  i936.pixelPerfect = !!i937[12]
  i936.targetDisplay = i937[13]
  i936.overridePixelPerfect = !!i937[14]
  return i936
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i939 = data
  i938.m_UiScaleMode = i939[0]
  i938.m_ReferencePixelsPerUnit = i939[1]
  i938.m_ScaleFactor = i939[2]
  i938.m_ReferenceResolution = new pc.Vec2( i939[3], i939[4] )
  i938.m_ScreenMatchMode = i939[5]
  i938.m_MatchWidthOrHeight = i939[6]
  i938.m_PhysicalUnit = i939[7]
  i938.m_FallbackScreenDPI = i939[8]
  i938.m_DefaultSpriteDPI = i939[9]
  i938.m_DynamicPixelsPerUnit = i939[10]
  i938.m_PresetInfoIsWorld = !!i939[11]
  return i938
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i941 = data
  i940.m_IgnoreReversedGraphics = !!i941[0]
  i940.m_BlockingObjects = i941[1]
  i940.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i941[2] )
  return i940
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i942 = root || request.c( 'ResetLocalPosition' )
  var i943 = data
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i945 = data
  i944.cullTransparentMesh = !!i945[0]
  return i944
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.Image' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'm_Sprite')
  i946.m_Type = i947[2]
  i946.m_PreserveAspect = !!i947[3]
  i946.m_FillCenter = !!i947[4]
  i946.m_FillMethod = i947[5]
  i946.m_FillAmount = i947[6]
  i946.m_FillClockwise = !!i947[7]
  i946.m_FillOrigin = i947[8]
  i946.m_UseSpriteMesh = !!i947[9]
  i946.m_PixelsPerUnitMultiplier = i947[10]
  request.r(i947[11], i947[12], 0, i946, 'm_Material')
  i946.m_Maskable = !!i947[13]
  i946.m_Color = new pc.Color(i947[14], i947[15], i947[16], i947[17])
  i946.m_RaycastTarget = !!i947[18]
  i946.m_RaycastPadding = new pc.Vec4( i947[19], i947[20], i947[21], i947[22] )
  return i946
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i949 = data
  i948.m_hasFontAssetChanged = !!i949[0]
  request.r(i949[1], i949[2], 0, i948, 'm_baseMaterial')
  i948.m_maskOffset = new pc.Vec4( i949[3], i949[4], i949[5], i949[6] )
  i948.m_text = i949[7]
  i948.m_isRightToLeft = !!i949[8]
  request.r(i949[9], i949[10], 0, i948, 'm_fontAsset')
  request.r(i949[11], i949[12], 0, i948, 'm_sharedMaterial')
  var i951 = i949[13]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.m_fontSharedMaterials = i950
  request.r(i949[14], i949[15], 0, i948, 'm_fontMaterial')
  var i953 = i949[16]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i948.m_fontMaterials = i952
  i948.m_fontColor32 = UnityEngine.Color32.ConstructColor(i949[17], i949[18], i949[19], i949[20])
  i948.m_fontColor = new pc.Color(i949[21], i949[22], i949[23], i949[24])
  i948.m_enableVertexGradient = !!i949[25]
  i948.m_colorMode = i949[26]
  i948.m_fontColorGradient = request.d('TMPro.VertexGradient', i949[27], i948.m_fontColorGradient)
  request.r(i949[28], i949[29], 0, i948, 'm_fontColorGradientPreset')
  request.r(i949[30], i949[31], 0, i948, 'm_spriteAsset')
  i948.m_tintAllSprites = !!i949[32]
  request.r(i949[33], i949[34], 0, i948, 'm_StyleSheet')
  i948.m_TextStyleHashCode = i949[35]
  i948.m_overrideHtmlColors = !!i949[36]
  i948.m_faceColor = UnityEngine.Color32.ConstructColor(i949[37], i949[38], i949[39], i949[40])
  i948.m_fontSize = i949[41]
  i948.m_fontSizeBase = i949[42]
  i948.m_fontWeight = i949[43]
  i948.m_enableAutoSizing = !!i949[44]
  i948.m_fontSizeMin = i949[45]
  i948.m_fontSizeMax = i949[46]
  i948.m_fontStyle = i949[47]
  i948.m_HorizontalAlignment = i949[48]
  i948.m_VerticalAlignment = i949[49]
  i948.m_textAlignment = i949[50]
  i948.m_characterSpacing = i949[51]
  i948.m_wordSpacing = i949[52]
  i948.m_lineSpacing = i949[53]
  i948.m_lineSpacingMax = i949[54]
  i948.m_paragraphSpacing = i949[55]
  i948.m_charWidthMaxAdj = i949[56]
  i948.m_enableWordWrapping = !!i949[57]
  i948.m_wordWrappingRatios = i949[58]
  i948.m_overflowMode = i949[59]
  request.r(i949[60], i949[61], 0, i948, 'm_linkedTextComponent')
  request.r(i949[62], i949[63], 0, i948, 'parentLinkedComponent')
  i948.m_enableKerning = !!i949[64]
  i948.m_enableExtraPadding = !!i949[65]
  i948.checkPaddingRequired = !!i949[66]
  i948.m_isRichText = !!i949[67]
  i948.m_parseCtrlCharacters = !!i949[68]
  i948.m_isOrthographic = !!i949[69]
  i948.m_isCullingEnabled = !!i949[70]
  i948.m_horizontalMapping = i949[71]
  i948.m_verticalMapping = i949[72]
  i948.m_uvLineOffset = i949[73]
  i948.m_geometrySortingOrder = i949[74]
  i948.m_IsTextObjectScaleStatic = !!i949[75]
  i948.m_VertexBufferAutoSizeReduction = !!i949[76]
  i948.m_useMaxVisibleDescender = !!i949[77]
  i948.m_pageToDisplay = i949[78]
  i948.m_margin = new pc.Vec4( i949[79], i949[80], i949[81], i949[82] )
  i948.m_isUsingLegacyAnimationComponent = !!i949[83]
  i948.m_isVolumetricText = !!i949[84]
  request.r(i949[85], i949[86], 0, i948, 'm_Material')
  i948.m_Maskable = !!i949[87]
  i948.m_Color = new pc.Color(i949[88], i949[89], i949[90], i949[91])
  i948.m_RaycastTarget = !!i949[92]
  i948.m_RaycastPadding = new pc.Vec4( i949[93], i949[94], i949[95], i949[96] )
  return i948
}

Deserializers["SlideAnimationUI"] = function (request, data, root) {
  var i954 = root || request.c( 'SlideAnimationUI' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'rectTransform')
  i954.targetPosition = new pc.Vec2( i955[2], i955[3] )
  i954.slideSpeed = i955[4]
  return i954
}

Deserializers["Sweeling"] = function (request, data, root) {
  var i956 = root || request.c( 'Sweeling' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'center')
  i956.radius = i957[2]
  i956.speed = i957[3]
  i956.angle = i957[4]
  return i956
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.Button' )
  var i959 = data
  i958.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i959[0], i958.m_OnClick)
  i958.m_Navigation = request.d('UnityEngine.UI.Navigation', i959[1], i958.m_Navigation)
  i958.m_Transition = i959[2]
  i958.m_Colors = request.d('UnityEngine.UI.ColorBlock', i959[3], i958.m_Colors)
  i958.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i959[4], i958.m_SpriteState)
  i958.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i959[5], i958.m_AnimationTriggers)
  i958.m_Interactable = !!i959[6]
  request.r(i959[7], i959[8], 0, i958, 'm_TargetGraphic')
  return i958
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i961 = data
  i960.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i961[0], i960.m_PersistentCalls)
  return i960
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i963 = data
  var i965 = i963[0]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('UnityEngine.Events.PersistentCall', i965[i + 0]));
  }
  i962.m_Calls = i964
  return i962
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_Target')
  i968.m_TargetAssemblyTypeName = i969[2]
  i968.m_MethodName = i969[3]
  i968.m_Mode = i969[4]
  i968.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i969[5], i968.m_Arguments)
  i968.m_CallState = i969[6]
  return i968
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'm_ObjectArgument')
  i970.m_ObjectArgumentAssemblyTypeName = i971[2]
  i970.m_IntArgument = i971[3]
  i970.m_FloatArgument = i971[4]
  i970.m_StringArgument = i971[5]
  i970.m_BoolArgument = !!i971[6]
  return i970
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i973 = data
  i972.m_Mode = i973[0]
  i972.m_WrapAround = !!i973[1]
  request.r(i973[2], i973[3], 0, i972, 'm_SelectOnUp')
  request.r(i973[4], i973[5], 0, i972, 'm_SelectOnDown')
  request.r(i973[6], i973[7], 0, i972, 'm_SelectOnLeft')
  request.r(i973[8], i973[9], 0, i972, 'm_SelectOnRight')
  return i972
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i975 = data
  i974.m_NormalColor = new pc.Color(i975[0], i975[1], i975[2], i975[3])
  i974.m_HighlightedColor = new pc.Color(i975[4], i975[5], i975[6], i975[7])
  i974.m_PressedColor = new pc.Color(i975[8], i975[9], i975[10], i975[11])
  i974.m_SelectedColor = new pc.Color(i975[12], i975[13], i975[14], i975[15])
  i974.m_DisabledColor = new pc.Color(i975[16], i975[17], i975[18], i975[19])
  i974.m_ColorMultiplier = i975[20]
  i974.m_FadeDuration = i975[21]
  return i974
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_HighlightedSprite')
  request.r(i977[2], i977[3], 0, i976, 'm_PressedSprite')
  request.r(i977[4], i977[5], 0, i976, 'm_SelectedSprite')
  request.r(i977[6], i977[7], 0, i976, 'm_DisabledSprite')
  return i976
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i979 = data
  i978.m_NormalTrigger = i979[0]
  i978.m_HighlightedTrigger = i979[1]
  i978.m_PressedTrigger = i979[2]
  i978.m_SelectedTrigger = i979[3]
  i978.m_DisabledTrigger = i979[4]
  return i978
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i980 = root || request.c( 'TilesBag' )
  var i981 = data
  var i983 = i981[0]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i980.slots = i982
  return i980
}

Deserializers["Deck"] = function (request, data, root) {
  var i984 = root || request.c( 'Deck' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'Game')
  return i984
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i986 = root || request.c( 'DeckLayer' )
  var i987 = data
  i986.layer = i987[0]
  var i989 = i987[1]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.Tiles = i988
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i993 = data
  i992.ambientIntensity = i993[0]
  i992.reflectionIntensity = i993[1]
  i992.ambientMode = i993[2]
  i992.ambientLight = new pc.Color(i993[3], i993[4], i993[5], i993[6])
  i992.ambientSkyColor = new pc.Color(i993[7], i993[8], i993[9], i993[10])
  i992.ambientGroundColor = new pc.Color(i993[11], i993[12], i993[13], i993[14])
  i992.ambientEquatorColor = new pc.Color(i993[15], i993[16], i993[17], i993[18])
  i992.fogColor = new pc.Color(i993[19], i993[20], i993[21], i993[22])
  i992.fogEndDistance = i993[23]
  i992.fogStartDistance = i993[24]
  i992.fogDensity = i993[25]
  i992.fog = !!i993[26]
  request.r(i993[27], i993[28], 0, i992, 'skybox')
  i992.fogMode = i993[29]
  var i995 = i993[30]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i995[i + 0]) );
  }
  i992.lightmaps = i994
  i992.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i993[31], i992.lightProbes)
  i992.lightmapsMode = i993[32]
  i992.mixedBakeMode = i993[33]
  i992.environmentLightingMode = i993[34]
  i992.ambientProbe = new pc.SphericalHarmonicsL2(i993[35])
  i992.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i993[36])
  i992.useReferenceAmbientProbe = !!i993[37]
  request.r(i993[38], i993[39], 0, i992, 'customReflection')
  request.r(i993[40], i993[41], 0, i992, 'defaultReflection')
  i992.defaultReflectionMode = i993[42]
  i992.defaultReflectionResolution = i993[43]
  i992.sunLightObjectId = i993[44]
  i992.pixelLightCount = i993[45]
  i992.defaultReflectionHDR = !!i993[46]
  i992.hasLightDataAsset = !!i993[47]
  i992.hasManualGenerate = !!i993[48]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'lightmapColor')
  request.r(i999[2], i999[3], 0, i998, 'lightmapDirection')
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1000 = root || new UnityEngine.LightProbes()
  var i1001 = data
  return i1000
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i1006 = root || request.c( 'TileLocker' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'Game')
  i1006.enabled = !!i1007[2]
  i1006.lockDistance = i1007[3]
  return i1006
}

Deserializers["QuestMatch3"] = function (request, data, root) {
  var i1008 = root || request.c( 'QuestMatch3' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'Game')
  var i1011 = i1009[2]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 1, i1010, '')
  }
  i1008.slots = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'sharedMesh')
  return i1014
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i1016 = root || request.c( 'QuestSlot' )
  var i1017 = data
  i1016.InitialScale = new pc.Vec3( i1017[0], i1017[1], i1017[2] )
  i1016.MaximumScale = new pc.Vec3( i1017[3], i1017[4], i1017[5] )
  i1016.EndScale = new pc.Vec3( i1017[6], i1017[7], i1017[8] )
  i1016.animationDuration = i1017[9]
  i1016.maxSizeTrigger = i1017[10]
  request.r(i1017[11], i1017[12], 0, i1016, 'type')
  i1016.amount = i1017[13]
  i1016.locked = !!i1017[14]
  request.r(i1017[15], i1017[16], 0, i1016, 'icon')
  request.r(i1017[17], i1017[18], 0, i1016, 'amountTxt')
  return i1016
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1019 = data
  i1018.m_Spacing = i1019[0]
  i1018.m_ChildForceExpandWidth = !!i1019[1]
  i1018.m_ChildForceExpandHeight = !!i1019[2]
  i1018.m_ChildControlWidth = !!i1019[3]
  i1018.m_ChildControlHeight = !!i1019[4]
  i1018.m_ChildScaleWidth = !!i1019[5]
  i1018.m_ChildScaleHeight = !!i1019[6]
  i1018.m_ReverseArrangement = !!i1019[7]
  i1018.m_Padding = UnityEngine.RectOffset.FromPaddings(i1019[8], i1019[9], i1019[10], i1019[11])
  i1018.m_ChildAlignment = i1019[12]
  return i1018
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1021 = data
  i1020.m_StartCorner = i1021[0]
  i1020.m_StartAxis = i1021[1]
  i1020.m_CellSize = new pc.Vec2( i1021[2], i1021[3] )
  i1020.m_Spacing = new pc.Vec2( i1021[4], i1021[5] )
  i1020.m_Constraint = i1021[6]
  i1020.m_ConstraintCount = i1021[7]
  i1020.m_Padding = UnityEngine.RectOffset.FromPaddings(i1021[8], i1021[9], i1021[10], i1021[11])
  i1020.m_ChildAlignment = i1021[12]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1025[i + 0]));
  }
  i1022.ShaderCompilationErrors = i1024
  i1022.name = i1023[1]
  i1022.guid = i1023[2]
  var i1027 = i1023[3]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1022.shaderDefinedKeywords = i1026
  var i1029 = i1023[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1029[i + 0]) );
  }
  i1022.passes = i1028
  var i1031 = i1023[5]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1031[i + 0]) );
  }
  i1022.usePasses = i1030
  var i1033 = i1023[6]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1033[i + 0]) );
  }
  i1022.defaultParameterValues = i1032
  request.r(i1023[7], i1023[8], 0, i1022, 'unityFallbackShader')
  i1022.readDepth = !!i1023[9]
  i1022.isCreatedByShaderGraph = !!i1023[10]
  i1022.usedBatchUniforms = i1023[11]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1037 = data
  i1036.shaderName = i1037[0]
  i1036.errorMessage = i1037[1]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1042 = root || new pc.UnityShaderPass()
  var i1043 = data
  i1042.id = i1043[0]
  i1042.subShaderIndex = i1043[1]
  i1042.name = i1043[2]
  i1042.passType = i1043[3]
  i1042.grabPassTextureName = i1043[4]
  i1042.usePass = !!i1043[5]
  i1042.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[6], i1042.zTest)
  i1042.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[7], i1042.zWrite)
  i1042.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[8], i1042.culling)
  i1042.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1043[9], i1042.blending)
  i1042.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1043[10], i1042.alphaBlending)
  i1042.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[11], i1042.colorWriteMask)
  i1042.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[12], i1042.offsetUnits)
  i1042.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[13], i1042.offsetFactor)
  i1042.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[14], i1042.stencilRef)
  i1042.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[15], i1042.stencilReadMask)
  i1042.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[16], i1042.stencilWriteMask)
  i1042.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1043[17], i1042.stencilOp)
  i1042.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1043[18], i1042.stencilOpFront)
  i1042.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1043[19], i1042.stencilOpBack)
  var i1045 = i1043[20]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1045[i + 0]) );
  }
  i1042.tags = i1044
  var i1047 = i1043[21]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1042.passDefinedKeywords = i1046
  var i1049 = i1043[22]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1049[i + 0]) );
  }
  i1042.passDefinedKeywordGroups = i1048
  var i1051 = i1043[23]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1051[i + 0]) );
  }
  i1042.variants = i1050
  var i1053 = i1043[24]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1053[i + 0]) );
  }
  i1042.excludedVariants = i1052
  i1042.hasDepthReader = !!i1043[25]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1055 = data
  i1054.val = i1055[0]
  i1054.name = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1057 = data
  i1056.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[0], i1056.src)
  i1056.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[1], i1056.dst)
  i1056.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[2], i1056.op)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1059 = data
  i1058.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[0], i1058.pass)
  i1058.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[1], i1058.fail)
  i1058.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[2], i1058.zFail)
  i1058.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[3], i1058.comp)
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.value = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( i1069[i + 0] );
  }
  i1066.keywords = i1068
  i1066.hasDiscard = !!i1067[1]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1073 = data
  i1072.passId = i1073[0]
  i1072.subShaderIndex = i1073[1]
  var i1075 = i1073[2]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1072.keywords = i1074
  i1072.vertexProgram = i1073[3]
  i1072.fragmentProgram = i1073[4]
  i1072.compiledForWebGL2 = !!i1073[5]
  i1072.readDepth = !!i1073[6]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'shader')
  i1078.pass = i1079[2]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.type = i1083[1]
  i1082.value = new pc.Vec4( i1083[2], i1083[3], i1083[4], i1083[5] )
  i1082.textureValue = i1083[6]
  i1082.shaderPropertyFlag = i1083[7]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1085 = data
  i1084.name = i1085[0]
  request.r(i1085[1], i1085[2], 0, i1084, 'texture')
  i1084.aabb = i1085[3]
  i1084.vertices = i1085[4]
  i1084.triangles = i1085[5]
  i1084.textureRect = UnityEngine.Rect.MinMaxRect(i1085[6], i1085[7], i1085[8], i1085[9])
  i1084.packedRect = UnityEngine.Rect.MinMaxRect(i1085[10], i1085[11], i1085[12], i1085[13])
  i1084.border = new pc.Vec4( i1085[14], i1085[15], i1085[16], i1085[17] )
  i1084.transparency = i1085[18]
  i1084.bounds = i1085[19]
  i1084.pixelsPerUnit = i1085[20]
  i1084.textureWidth = i1085[21]
  i1084.textureHeight = i1085[22]
  i1084.nativeSize = new pc.Vec2( i1085[23], i1085[24] )
  i1084.pivot = new pc.Vec2( i1085[25], i1085[26] )
  i1084.textureRectOffset = new pc.Vec2( i1085[27], i1085[28] )
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1087 = data
  i1086.name = i1087[0]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.bytes64 = i1089[1]
  i1088.data = i1089[2]
  return i1088
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1091 = data
  i1090.hashCode = i1091[0]
  request.r(i1091[1], i1091[2], 0, i1090, 'material')
  i1090.materialHashCode = i1091[3]
  request.r(i1091[4], i1091[5], 0, i1090, 'atlas')
  i1090.normalStyle = i1091[6]
  i1090.normalSpacingOffset = i1091[7]
  i1090.boldStyle = i1091[8]
  i1090.boldSpacing = i1091[9]
  i1090.italicStyle = i1091[10]
  i1090.tabSize = i1091[11]
  i1090.m_Version = i1091[12]
  i1090.m_SourceFontFileGUID = i1091[13]
  request.r(i1091[14], i1091[15], 0, i1090, 'm_SourceFontFile_EditorRef')
  request.r(i1091[16], i1091[17], 0, i1090, 'm_SourceFontFile')
  i1090.m_AtlasPopulationMode = i1091[18]
  i1090.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1091[19], i1090.m_FaceInfo)
  var i1093 = i1091[20]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('UnityEngine.TextCore.Glyph', i1093[i + 0]));
  }
  i1090.m_GlyphTable = i1092
  var i1095 = i1091[21]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('TMPro.TMP_Character', i1095[i + 0]));
  }
  i1090.m_CharacterTable = i1094
  var i1097 = i1091[22]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1090.m_AtlasTextures = i1096
  i1090.m_AtlasTextureIndex = i1091[23]
  i1090.m_IsMultiAtlasTexturesEnabled = !!i1091[24]
  i1090.m_ClearDynamicDataOnBuild = !!i1091[25]
  var i1099 = i1091[26]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('UnityEngine.TextCore.GlyphRect', i1099[i + 0]));
  }
  i1090.m_UsedGlyphRects = i1098
  var i1101 = i1091[27]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('UnityEngine.TextCore.GlyphRect', i1101[i + 0]));
  }
  i1090.m_FreeGlyphRects = i1100
  i1090.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1091[28], i1090.m_fontInfo)
  i1090.m_AtlasWidth = i1091[29]
  i1090.m_AtlasHeight = i1091[30]
  i1090.m_AtlasPadding = i1091[31]
  i1090.m_AtlasRenderMode = i1091[32]
  var i1103 = i1091[33]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('TMPro.TMP_Glyph', i1103[i + 0]));
  }
  i1090.m_glyphInfoList = i1102
  i1090.m_KerningTable = request.d('TMPro.KerningTable', i1091[34], i1090.m_KerningTable)
  i1090.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1091[35], i1090.m_FontFeatureTable)
  var i1105 = i1091[36]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 1, i1104, '')
  }
  i1090.fallbackFontAssets = i1104
  var i1107 = i1091[37]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 1, i1106, '')
  }
  i1090.m_FallbackFontAssetTable = i1106
  i1090.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1091[38], i1090.m_CreationSettings)
  var i1109 = i1091[39]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('TMPro.TMP_FontWeightPair', i1109[i + 0]) );
  }
  i1090.m_FontWeightTable = i1108
  var i1111 = i1091[40]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('TMPro.TMP_FontWeightPair', i1111[i + 0]) );
  }
  i1090.fontWeights = i1110
  return i1090
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1113 = data
  i1112.m_FaceIndex = i1113[0]
  i1112.m_FamilyName = i1113[1]
  i1112.m_StyleName = i1113[2]
  i1112.m_PointSize = i1113[3]
  i1112.m_Scale = i1113[4]
  i1112.m_UnitsPerEM = i1113[5]
  i1112.m_LineHeight = i1113[6]
  i1112.m_AscentLine = i1113[7]
  i1112.m_CapLine = i1113[8]
  i1112.m_MeanLine = i1113[9]
  i1112.m_Baseline = i1113[10]
  i1112.m_DescentLine = i1113[11]
  i1112.m_SuperscriptOffset = i1113[12]
  i1112.m_SuperscriptSize = i1113[13]
  i1112.m_SubscriptOffset = i1113[14]
  i1112.m_SubscriptSize = i1113[15]
  i1112.m_UnderlineOffset = i1113[16]
  i1112.m_UnderlineThickness = i1113[17]
  i1112.m_StrikethroughOffset = i1113[18]
  i1112.m_StrikethroughThickness = i1113[19]
  i1112.m_TabWidth = i1113[20]
  return i1112
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1117 = data
  i1116.m_Index = i1117[0]
  i1116.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1117[1], i1116.m_Metrics)
  i1116.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1117[2], i1116.m_GlyphRect)
  i1116.m_Scale = i1117[3]
  i1116.m_AtlasIndex = i1117[4]
  i1116.m_ClassDefinitionType = i1117[5]
  return i1116
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1119 = data
  i1118.m_Width = i1119[0]
  i1118.m_Height = i1119[1]
  i1118.m_HorizontalBearingX = i1119[2]
  i1118.m_HorizontalBearingY = i1119[3]
  i1118.m_HorizontalAdvance = i1119[4]
  return i1118
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1121 = data
  i1120.m_X = i1121[0]
  i1120.m_Y = i1121[1]
  i1120.m_Width = i1121[2]
  i1120.m_Height = i1121[3]
  return i1120
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.TMP_Character' )
  var i1125 = data
  i1124.m_ElementType = i1125[0]
  i1124.m_Unicode = i1125[1]
  i1124.m_GlyphIndex = i1125[2]
  i1124.m_Scale = i1125[3]
  return i1124
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1131 = data
  i1130.Name = i1131[0]
  i1130.PointSize = i1131[1]
  i1130.Scale = i1131[2]
  i1130.CharacterCount = i1131[3]
  i1130.LineHeight = i1131[4]
  i1130.Baseline = i1131[5]
  i1130.Ascender = i1131[6]
  i1130.CapHeight = i1131[7]
  i1130.Descender = i1131[8]
  i1130.CenterLine = i1131[9]
  i1130.SuperscriptOffset = i1131[10]
  i1130.SubscriptOffset = i1131[11]
  i1130.SubSize = i1131[12]
  i1130.Underline = i1131[13]
  i1130.UnderlineThickness = i1131[14]
  i1130.strikethrough = i1131[15]
  i1130.strikethroughThickness = i1131[16]
  i1130.TabWidth = i1131[17]
  i1130.Padding = i1131[18]
  i1130.AtlasWidth = i1131[19]
  i1130.AtlasHeight = i1131[20]
  return i1130
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1135 = data
  i1134.id = i1135[0]
  i1134.x = i1135[1]
  i1134.y = i1135[2]
  i1134.width = i1135[3]
  i1134.height = i1135[4]
  i1134.xOffset = i1135[5]
  i1134.yOffset = i1135[6]
  i1134.xAdvance = i1135[7]
  i1134.scale = i1135[8]
  return i1134
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.KerningTable' )
  var i1137 = data
  var i1139 = i1137[0]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('TMPro.KerningPair', i1139[i + 0]));
  }
  i1136.kerningPairs = i1138
  return i1136
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.KerningPair' )
  var i1143 = data
  i1142.xOffset = i1143[0]
  i1142.m_FirstGlyph = i1143[1]
  i1142.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1143[2], i1142.m_FirstGlyphAdjustments)
  i1142.m_SecondGlyph = i1143[3]
  i1142.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1143[4], i1142.m_SecondGlyphAdjustments)
  i1142.m_IgnoreSpacingAdjustments = !!i1143[5]
  return i1142
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1145 = data
  var i1147 = i1145[0]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1147[i + 0]));
  }
  i1144.m_GlyphPairAdjustmentRecords = i1146
  return i1144
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1151 = data
  i1150.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1151[0], i1150.m_FirstAdjustmentRecord)
  i1150.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1151[1], i1150.m_SecondAdjustmentRecord)
  i1150.m_FeatureLookupFlags = i1151[2]
  return i1150
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1153 = data
  i1152.m_GlyphIndex = i1153[0]
  i1152.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1153[1], i1152.m_GlyphValueRecord)
  return i1152
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1155 = data
  i1154.m_XPlacement = i1155[0]
  i1154.m_YPlacement = i1155[1]
  i1154.m_XAdvance = i1155[2]
  i1154.m_YAdvance = i1155[3]
  return i1154
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1159 = data
  i1158.sourceFontFileName = i1159[0]
  i1158.sourceFontFileGUID = i1159[1]
  i1158.pointSizeSamplingMode = i1159[2]
  i1158.pointSize = i1159[3]
  i1158.padding = i1159[4]
  i1158.packingMode = i1159[5]
  i1158.atlasWidth = i1159[6]
  i1158.atlasHeight = i1159[7]
  i1158.characterSetSelectionMode = i1159[8]
  i1158.characterSequence = i1159[9]
  i1158.referencedFontAssetGUID = i1159[10]
  i1158.referencedTextAssetGUID = i1159[11]
  i1158.fontStyle = i1159[12]
  i1158.fontStyleModifier = i1159[13]
  i1158.renderMode = i1159[14]
  i1158.includeFontFeatures = !!i1159[15]
  return i1158
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'regularTypeface')
  request.r(i1163[2], i1163[3], 0, i1162, 'italicTypeface')
  return i1162
}

Deserializers["TileSO"] = function (request, data, root) {
  var i1164 = root || request.c( 'TileSO' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'icon')
  return i1164
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1167 = data
  i1166.hashCode = i1167[0]
  request.r(i1167[1], i1167[2], 0, i1166, 'material')
  i1166.materialHashCode = i1167[3]
  request.r(i1167[4], i1167[5], 0, i1166, 'spriteSheet')
  var i1169 = i1167[6]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.TMP_Sprite', i1169[i + 0]));
  }
  i1166.spriteInfoList = i1168
  var i1171 = i1167[7]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 1, i1170, '')
  }
  i1166.fallbackSpriteAssets = i1170
  i1166.m_Version = i1167[8]
  i1166.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1167[9], i1166.m_FaceInfo)
  var i1173 = i1167[10]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('TMPro.TMP_SpriteCharacter', i1173[i + 0]));
  }
  i1166.m_SpriteCharacterTable = i1172
  var i1175 = i1167[11]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.TMP_SpriteGlyph', i1175[i + 0]));
  }
  i1166.m_SpriteGlyphTable = i1174
  return i1166
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.hashCode = i1179[1]
  i1178.unicode = i1179[2]
  i1178.pivot = new pc.Vec2( i1179[3], i1179[4] )
  request.r(i1179[5], i1179[6], 0, i1178, 'sprite')
  i1178.id = i1179[7]
  i1178.x = i1179[8]
  i1178.y = i1179[9]
  i1178.width = i1179[10]
  i1178.height = i1179[11]
  i1178.xOffset = i1179[12]
  i1178.yOffset = i1179[13]
  i1178.xAdvance = i1179[14]
  i1178.scale = i1179[15]
  return i1178
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1185 = data
  i1184.m_Name = i1185[0]
  i1184.m_HashCode = i1185[1]
  i1184.m_ElementType = i1185[2]
  i1184.m_Unicode = i1185[3]
  i1184.m_GlyphIndex = i1185[4]
  i1184.m_Scale = i1185[5]
  return i1184
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'sprite')
  i1188.m_Index = i1189[2]
  i1188.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1189[3], i1188.m_Metrics)
  i1188.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1189[4], i1188.m_GlyphRect)
  i1188.m_Scale = i1189[5]
  i1188.m_AtlasIndex = i1189[6]
  i1188.m_ClassDefinitionType = i1189[7]
  return i1188
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.TMP_Style', i1193[i + 0]));
  }
  i1190.m_StyleList = i1192
  return i1190
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_Style' )
  var i1197 = data
  i1196.m_Name = i1197[0]
  i1196.m_HashCode = i1197[1]
  i1196.m_OpeningDefinition = i1197[2]
  i1196.m_ClosingDefinition = i1197[3]
  i1196.m_OpeningTagArray = i1197[4]
  i1196.m_ClosingTagArray = i1197[5]
  i1196.m_OpeningTagUnicodeArray = i1197[6]
  i1196.m_ClosingTagUnicodeArray = i1197[7]
  return i1196
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_Settings' )
  var i1199 = data
  i1198.m_enableWordWrapping = !!i1199[0]
  i1198.m_enableKerning = !!i1199[1]
  i1198.m_enableExtraPadding = !!i1199[2]
  i1198.m_enableTintAllSprites = !!i1199[3]
  i1198.m_enableParseEscapeCharacters = !!i1199[4]
  i1198.m_EnableRaycastTarget = !!i1199[5]
  i1198.m_GetFontFeaturesAtRuntime = !!i1199[6]
  i1198.m_missingGlyphCharacter = i1199[7]
  i1198.m_warningsDisabled = !!i1199[8]
  request.r(i1199[9], i1199[10], 0, i1198, 'm_defaultFontAsset')
  i1198.m_defaultFontAssetPath = i1199[11]
  i1198.m_defaultFontSize = i1199[12]
  i1198.m_defaultAutoSizeMinRatio = i1199[13]
  i1198.m_defaultAutoSizeMaxRatio = i1199[14]
  i1198.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1199[15], i1199[16] )
  i1198.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1199[17], i1199[18] )
  i1198.m_autoSizeTextContainer = !!i1199[19]
  i1198.m_IsTextObjectScaleStatic = !!i1199[20]
  var i1201 = i1199[21]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1198.m_fallbackFontAssets = i1200
  i1198.m_matchMaterialPreset = !!i1199[22]
  request.r(i1199[23], i1199[24], 0, i1198, 'm_defaultSpriteAsset')
  i1198.m_defaultSpriteAssetPath = i1199[25]
  i1198.m_enableEmojiSupport = !!i1199[26]
  i1198.m_MissingCharacterSpriteUnicode = i1199[27]
  i1198.m_defaultColorGradientPresetsPath = i1199[28]
  request.r(i1199[29], i1199[30], 0, i1198, 'm_defaultStyleSheet')
  i1198.m_StyleSheetsResourcePath = i1199[31]
  request.r(i1199[32], i1199[33], 0, i1198, 'm_leadingCharacters')
  request.r(i1199[34], i1199[35], 0, i1198, 'm_followingCharacters')
  i1198.m_UseModernHangulLineBreakingRules = !!i1199[36]
  return i1198
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i1203 = data
  i1202._svcLunaVersion = i1203[0]
  var i1205 = i1203[1]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d(' .  ', i1205[i + 0]));
  }
  i1202._shaderVariants = i1204
  var i1207 = i1203[2]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d(' .  ', i1207[i + 0]));
  }
  i1202._usedByLunaBuild = i1206
  var i1209 = i1203[3]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d(' .  ', i1209[i + 0]));
  }
  i1202._includedShaderVariants = i1208
  var i1211 = i1203[4]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.add(request.d(' .  ', i1211[i + 0]));
  }
  i1202._excludedShaderVariants = i1210
  i1202.version = System.Int64(i1203[5])
  var i1213 = i1203[6]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i1213[i + 0]));
  }
  i1202._shaderParsedShaders = i1212
  var i1215 = i1203[7]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(i1215[i + 0]);
  }
  i1202._modifiedShaders = i1214
  i1202.invalidShaders = !!i1203[8]
  i1202._cachedShadersPlatform = i1203[9]
  i1202._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i1203[10], i1202._sceneLightData)
  return i1202
}

Deserializers[" .  "] = function (request, data, root) {
  var i1218 = root || request.c( ' .  ' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'shader')
  i1218.passType = i1219[2]
  i1218.passId = i1219[3]
  i1218.subShaderIndex = i1219[4]
  i1218.upToDate = !!i1219[5]
  var i1221 = i1219[6]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( i1221[i + 0] );
  }
  i1218.keywords = i1220
  return i1218
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i1225 = data
  var i1227 = i1225[0]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i1227[i + 0]));
  }
  i1224.ParsedSubShaders = i1226
  request.r(i1225[1], i1225[2], 0, i1224, 'Shader')
  i1224.ShaderPath = i1225[3]
  var i1229 = i1225[4]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( i1229[i + 0] );
  }
  i1224.ShaderDefinedKeywords = i1228
  request.r(i1225[5], i1225[6], 0, i1224, 'fallbackShader')
  var i1231 = i1225[7]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i1231[i + 0]));
  }
  i1224.CompilationErrors = i1230
  i1224.shaderCompilerPlatform = i1225[8]
  return i1224
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i1235 = data
  i1234.Index = i1235[0]
  var i1237 = i1235[1]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i1237[i + 0]));
  }
  i1234.Passes = i1236
  var i1239 = i1235[2]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1239[i + 0]));
  }
  i1234.Tags = i1238
  i1234.UsePass = !!i1235[3]
  return i1234
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i1243 = data
  i1242.ShaderName = i1243[0]
  var i1245 = i1243[1]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i1245[i + 0]));
  }
  i1242.ShaderVariants = i1244
  var i1247 = i1243[2]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( i1247[i + 0] );
  }
  i1242.definedKeywords = i1246
  var i1249 = i1243[3]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i1249[i + 0]));
  }
  i1242.keywordGroups = i1248
  i1242.KeywordsMinimalCardinality = i1243[4]
  i1242.ContainsInvalidVariant = !!i1243[5]
  i1242.ShaderCompilerPlatform = i1243[6]
  i1242.HasDepthReader = !!i1243[7]
  i1242.Id = i1243[8]
  i1242.SubShaderIndex = i1243[9]
  i1242.SerializedObjectId = i1243[10]
  var i1251 = i1243[11]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1251[i + 0]));
  }
  i1242.Tags = i1250
  i1242.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i1243[12], i1242.UsePass)
  i1242.GrabPassTextureName = i1243[13]
  i1242.PassShaderRequirements = i1243[14]
  i1242.PlatformMask = i1243[15]
  return i1242
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i1255 = data
  i1254.NoShaderVariant = !!i1255[0]
  i1254.VertexProgram = i1255[1]
  i1254.FragmentProgram = i1255[2]
  i1254.LOD = i1255[3]
  i1254.readDepth = !!i1255[4]
  i1254.Index = i1255[5]
  i1254.PassId = i1255[6]
  i1254.SubShaderIndex = i1255[7]
  var i1257 = i1255[8]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( i1257[i + 0] );
  }
  i1254.Keywords = i1256
  var i1259 = i1255[9]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1259[i + 0]));
  }
  i1254.Tags = i1258
  return i1254
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i1263 = data
  i1262.Key = i1263[0]
  i1262.Value = i1263[1]
  return i1262
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(i1269[i + 0]);
  }
  i1266.Keywords = i1268
  return i1266
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i1271 = data
  i1270.shader = i1271[0]
  i1270.pass = i1271[1]
  return i1270
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i1275 = data
  i1274.ShaderName = i1275[0]
  var i1277 = i1275[1]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i1277[i + 0]));
  }
  i1274.Details = i1276
  return i1274
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i1281 = data
  i1280.PointLightCount = i1281[0]
  i1280.SpotLightCount = i1281[1]
  i1280.DirectionalLightCount = i1281[2]
  i1280.LightmapOn = !!i1281[3]
  i1280.DirlightmapCombined = !!i1281[4]
  i1280.DirectionalCookieExists = !!i1281[5]
  i1280.PointCookieExists = !!i1281[6]
  i1280.SpotCookieExists = !!i1281[7]
  i1280.AddiitonalLightsKeywordRequired = !!i1281[8]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1285[i + 0]) );
  }
  i1282.files = i1284
  i1282.componentToPrefabIds = i1283[1]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1289 = data
  i1288.path = i1289[0]
  request.r(i1289[1], i1289[2], 0, i1288, 'unityObject')
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1293[i + 0]) );
  }
  i1290.scriptsExecutionOrder = i1292
  var i1295 = i1291[1]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1295[i + 0]) );
  }
  i1290.sortingLayers = i1294
  var i1297 = i1291[2]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1297[i + 0]) );
  }
  i1290.cullingLayers = i1296
  i1290.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1291[3], i1290.timeSettings)
  i1290.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1291[4], i1290.physicsSettings)
  i1290.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1291[5], i1290.physics2DSettings)
  i1290.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1291[6], i1290.qualitySettings)
  i1290.enableRealtimeShadows = !!i1291[7]
  i1290.enableAutoInstancing = !!i1291[8]
  i1290.enableDynamicBatching = !!i1291[9]
  i1290.lightmapEncodingQuality = i1291[10]
  i1290.desiredColorSpace = i1291[11]
  var i1299 = i1291[12]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( i1299[i + 0] );
  }
  i1290.allTags = i1298
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.value = i1303[1]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1307 = data
  i1306.id = i1307[0]
  i1306.name = i1307[1]
  i1306.value = i1307[2]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1311 = data
  i1310.id = i1311[0]
  i1310.name = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1313 = data
  i1312.fixedDeltaTime = i1313[0]
  i1312.maximumDeltaTime = i1313[1]
  i1312.timeScale = i1313[2]
  i1312.maximumParticleTimestep = i1313[3]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1315 = data
  i1314.gravity = new pc.Vec3( i1315[0], i1315[1], i1315[2] )
  i1314.defaultSolverIterations = i1315[3]
  i1314.bounceThreshold = i1315[4]
  i1314.autoSyncTransforms = !!i1315[5]
  i1314.autoSimulation = !!i1315[6]
  var i1317 = i1315[7]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1317[i + 0]) );
  }
  i1314.collisionMatrix = i1316
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1321 = data
  i1320.enabled = !!i1321[0]
  i1320.layerId = i1321[1]
  i1320.otherLayerId = i1321[2]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'material')
  i1322.gravity = new pc.Vec2( i1323[2], i1323[3] )
  i1322.positionIterations = i1323[4]
  i1322.velocityIterations = i1323[5]
  i1322.velocityThreshold = i1323[6]
  i1322.maxLinearCorrection = i1323[7]
  i1322.maxAngularCorrection = i1323[8]
  i1322.maxTranslationSpeed = i1323[9]
  i1322.maxRotationSpeed = i1323[10]
  i1322.baumgarteScale = i1323[11]
  i1322.baumgarteTOIScale = i1323[12]
  i1322.timeToSleep = i1323[13]
  i1322.linearSleepTolerance = i1323[14]
  i1322.angularSleepTolerance = i1323[15]
  i1322.defaultContactOffset = i1323[16]
  i1322.autoSimulation = !!i1323[17]
  i1322.queriesHitTriggers = !!i1323[18]
  i1322.queriesStartInColliders = !!i1323[19]
  i1322.callbacksOnDisable = !!i1323[20]
  i1322.reuseCollisionCallbacks = !!i1323[21]
  i1322.autoSyncTransforms = !!i1323[22]
  var i1325 = i1323[23]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1325[i + 0]) );
  }
  i1322.collisionMatrix = i1324
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1329 = data
  i1328.enabled = !!i1329[0]
  i1328.layerId = i1329[1]
  i1328.otherLayerId = i1329[2]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1333[i + 0]) );
  }
  i1330.qualityLevels = i1332
  var i1335 = i1331[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( i1335[i + 0] );
  }
  i1330.names = i1334
  i1330.shadows = i1331[2]
  i1330.anisotropicFiltering = i1331[3]
  i1330.antiAliasing = i1331[4]
  i1330.lodBias = i1331[5]
  i1330.shadowCascades = i1331[6]
  i1330.shadowDistance = i1331[7]
  i1330.shadowmaskMode = i1331[8]
  i1330.shadowProjection = i1331[9]
  i1330.shadowResolution = i1331[10]
  i1330.softParticles = !!i1331[11]
  i1330.softVegetation = !!i1331[12]
  i1330.activeColorSpace = i1331[13]
  i1330.desiredColorSpace = i1331[14]
  i1330.masterTextureLimit = i1331[15]
  i1330.maxQueuedFrames = i1331[16]
  i1330.particleRaycastBudget = i1331[17]
  i1330.pixelLightCount = i1331[18]
  i1330.realtimeReflectionProbes = !!i1331[19]
  i1330.shadowCascade2Split = i1331[20]
  i1330.shadowCascade4Split = new pc.Vec3( i1331[21], i1331[22], i1331[23] )
  i1330.streamingMipmapsActive = !!i1331[24]
  i1330.vSyncCount = i1331[25]
  i1330.asyncUploadBufferSize = i1331[26]
  i1330.asyncUploadTimeSlice = i1331[27]
  i1330.billboardsFaceCameraPosition = !!i1331[28]
  i1330.shadowNearPlaneOffset = i1331[29]
  i1330.streamingMipmapsMemoryBudget = i1331[30]
  i1330.maximumLODLevel = i1331[31]
  i1330.streamingMipmapsAddAllCameras = !!i1331[32]
  i1330.streamingMipmapsMaxLevelReduction = i1331[33]
  i1330.streamingMipmapsRenderersPerFrame = i1331[34]
  i1330.resolutionScalingFixedDPIFactor = i1331[35]
  i1330.streamingMipmapsMaxFileIORequests = i1331[36]
  i1330.currentQualityLevel = i1331[37]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1341 = data
  i1340.weight = i1341[0]
  i1340.vertices = i1341[1]
  i1340.normals = i1341[2]
  i1340.tangents = i1341[3]
  return i1340
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1343 = data
  i1342.xPlacement = i1343[0]
  i1342.yPlacement = i1343[1]
  i1342.xAdvance = i1343[2]
  i1342.yAdvance = i1343[3]
  return i1342
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i1347 = data
  i1346.SubShaderIndex = i1347[0]
  i1346.PassId = i1347[1]
  var i1349 = i1347[2]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( i1349[i + 0] );
  }
  i1346.ShaderVariantKeywords = i1348
  var i1351 = i1347[3]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( i1351[i + 0] );
  }
  i1346.Messages = i1350
  return i1346
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[79],"80":[23],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[90],"98":[90],"99":[90],"100":[90],"101":[90],"102":[90],"103":[23],"104":[12],"105":[106],"107":[106],"44":[7],"108":[23],"109":[7],"10":[12,7],"42":[7,54],"110":[7],"111":[54,7],"112":[12],"113":[54,7],"114":[7],"115":[116],"117":[7],"118":[7],"52":[44],"55":[54,7],"119":[7],"51":[44],"120":[7],"65":[7],"64":[7],"121":[7],"122":[7],"123":[7],"124":[7],"125":[7],"126":[7],"127":[54,7],"128":[7],"129":[7],"130":[7],"131":[7],"132":[54,7],"133":[7],"134":[25],"135":[25],"26":[25],"136":[25],"137":[23],"138":[23],"139":[116],"140":[15],"141":[142],"143":[116]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","FloatingText","TMPro.TextMeshPro","UnityEngine.EventSystems.UIBehaviour","UnityEngine.MeshRenderer","TMPro.TMP_FontAsset","Tile","UnityEngine.SpriteRenderer","UnityEngine.TrailRenderer","AnimationScale","TileMovement","TileLockAnimation","UnityEngine.Sprite","TileSlot","AnimationScaleLooped","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileActions","TileLockerBox2D","TilesBag","TileSpawnAnimation","TileMatcher","LoseCondition","WinCondition","InputTouch","EndCard","TileRandomSpawner","TileSpawner","UnityEngine.GameObject","QuestTyrRewards","TMPro.TextMeshProUGUI","TileBagSorter","UnityEngine.Canvas","SlideAnimationUI","UnityEngine.AudioSource","UnityEngine.AudioClip","Sounds","Tutorial","TutorialPointer","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResetLocalPosition","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Sweeling","UnityEngine.UI.Button","DeckLayer","TileSO","TileLocker","QuestMatch3","UnityEngine.MeshFilter","QuestSlot","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.GridLayoutGroup","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "4.0";

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

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "b8a2fb3a-e95e-4b88-a181-0db9ed7cfe64";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

