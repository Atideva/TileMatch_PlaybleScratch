var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5994 = root || request.c( 'UnityEngine.JointSpring' )
  var i5995 = data
  i5994.spring = i5995[0]
  i5994.damper = i5995[1]
  i5994.targetPosition = i5995[2]
  return i5994
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5996 = root || request.c( 'UnityEngine.JointMotor' )
  var i5997 = data
  i5996.m_TargetVelocity = i5997[0]
  i5996.m_Force = i5997[1]
  i5996.m_FreeSpin = i5997[2]
  return i5996
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5998 = root || request.c( 'UnityEngine.JointLimits' )
  var i5999 = data
  i5998.m_Min = i5999[0]
  i5998.m_Max = i5999[1]
  i5998.m_Bounciness = i5999[2]
  i5998.m_BounceMinVelocity = i5999[3]
  i5998.m_ContactDistance = i5999[4]
  i5998.minBounce = i5999[5]
  i5998.maxBounce = i5999[6]
  return i5998
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6000 = root || request.c( 'UnityEngine.JointDrive' )
  var i6001 = data
  i6000.m_PositionSpring = i6001[0]
  i6000.m_PositionDamper = i6001[1]
  i6000.m_MaximumForce = i6001[2]
  return i6000
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6002 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6003 = data
  i6002.m_Spring = i6003[0]
  i6002.m_Damper = i6003[1]
  return i6002
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6004 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6005 = data
  i6004.m_Limit = i6005[0]
  i6004.m_Bounciness = i6005[1]
  i6004.m_ContactDistance = i6005[2]
  return i6004
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6006 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6007 = data
  i6006.m_ExtremumSlip = i6007[0]
  i6006.m_ExtremumValue = i6007[1]
  i6006.m_AsymptoteSlip = i6007[2]
  i6006.m_AsymptoteValue = i6007[3]
  i6006.m_Stiffness = i6007[4]
  return i6006
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6008 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6009 = data
  i6008.m_LowerAngle = i6009[0]
  i6008.m_UpperAngle = i6009[1]
  return i6008
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6010 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6011 = data
  i6010.m_MotorSpeed = i6011[0]
  i6010.m_MaximumMotorTorque = i6011[1]
  return i6010
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6012 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6013 = data
  i6012.m_DampingRatio = i6013[0]
  i6012.m_Frequency = i6013[1]
  i6012.m_Angle = i6013[2]
  return i6012
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6014 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6015 = data
  i6014.m_LowerTranslation = i6015[0]
  i6014.m_UpperTranslation = i6015[1]
  return i6014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6016 = root || new pc.UnityMaterial()
  var i6017 = data
  i6016.name = i6017[0]
  request.r(i6017[1], i6017[2], 0, i6016, 'shader')
  i6016.renderQueue = i6017[3]
  i6016.enableInstancing = !!i6017[4]
  var i6019 = i6017[5]
  var i6018 = []
  for(var i = 0; i < i6019.length; i += 1) {
    i6018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6019[i + 0]) );
  }
  i6016.floatParameters = i6018
  var i6021 = i6017[6]
  var i6020 = []
  for(var i = 0; i < i6021.length; i += 1) {
    i6020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6021[i + 0]) );
  }
  i6016.colorParameters = i6020
  var i6023 = i6017[7]
  var i6022 = []
  for(var i = 0; i < i6023.length; i += 1) {
    i6022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6023[i + 0]) );
  }
  i6016.vectorParameters = i6022
  var i6025 = i6017[8]
  var i6024 = []
  for(var i = 0; i < i6025.length; i += 1) {
    i6024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6025[i + 0]) );
  }
  i6016.textureParameters = i6024
  var i6027 = i6017[9]
  var i6026 = []
  for(var i = 0; i < i6027.length; i += 1) {
    i6026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6027[i + 0]) );
  }
  i6016.materialFlags = i6026
  return i6016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6031 = data
  i6030.name = i6031[0]
  i6030.value = i6031[1]
  return i6030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6035 = data
  i6034.name = i6035[0]
  i6034.value = new pc.Color(i6035[1], i6035[2], i6035[3], i6035[4])
  return i6034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6039 = data
  i6038.name = i6039[0]
  i6038.value = new pc.Vec4( i6039[1], i6039[2], i6039[3], i6039[4] )
  return i6038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6043 = data
  i6042.name = i6043[0]
  request.r(i6043[1], i6043[2], 0, i6042, 'value')
  return i6042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6047 = data
  i6046.name = i6047[0]
  i6046.enabled = !!i6047[1]
  return i6046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6049 = data
  i6048.position = new pc.Vec3( i6049[0], i6049[1], i6049[2] )
  i6048.scale = new pc.Vec3( i6049[3], i6049[4], i6049[5] )
  i6048.rotation = new pc.Quat(i6049[6], i6049[7], i6049[8], i6049[9])
  return i6048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6051 = data
  i6050.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6051[0], i6050.main)
  i6050.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6051[1], i6050.colorBySpeed)
  i6050.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6051[2], i6050.colorOverLifetime)
  i6050.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6051[3], i6050.emission)
  i6050.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6051[4], i6050.rotationBySpeed)
  i6050.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6051[5], i6050.rotationOverLifetime)
  i6050.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6051[6], i6050.shape)
  i6050.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6051[7], i6050.sizeBySpeed)
  i6050.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6051[8], i6050.sizeOverLifetime)
  i6050.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6051[9], i6050.textureSheetAnimation)
  i6050.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6051[10], i6050.velocityOverLifetime)
  i6050.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6051[11], i6050.noise)
  i6050.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6051[12], i6050.inheritVelocity)
  i6050.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6051[13], i6050.forceOverLifetime)
  i6050.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6051[14], i6050.limitVelocityOverLifetime)
  i6050.useAutoRandomSeed = !!i6051[15]
  i6050.randomSeed = i6051[16]
  return i6050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6052 = root || new pc.ParticleSystemMain()
  var i6053 = data
  i6052.duration = i6053[0]
  i6052.loop = !!i6053[1]
  i6052.prewarm = !!i6053[2]
  i6052.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[3], i6052.startDelay)
  i6052.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[4], i6052.startLifetime)
  i6052.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[5], i6052.startSpeed)
  i6052.startSize3D = !!i6053[6]
  i6052.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[7], i6052.startSizeX)
  i6052.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[8], i6052.startSizeY)
  i6052.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[9], i6052.startSizeZ)
  i6052.startRotation3D = !!i6053[10]
  i6052.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[11], i6052.startRotationX)
  i6052.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[12], i6052.startRotationY)
  i6052.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[13], i6052.startRotationZ)
  i6052.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6053[14], i6052.startColor)
  i6052.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[15], i6052.gravityModifier)
  i6052.simulationSpace = i6053[16]
  request.r(i6053[17], i6053[18], 0, i6052, 'customSimulationSpace')
  i6052.simulationSpeed = i6053[19]
  i6052.useUnscaledTime = !!i6053[20]
  i6052.scalingMode = i6053[21]
  i6052.playOnAwake = !!i6053[22]
  i6052.maxParticles = i6053[23]
  i6052.emitterVelocityMode = i6053[24]
  i6052.stopAction = i6053[25]
  return i6052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6054 = root || new pc.MinMaxCurve()
  var i6055 = data
  i6054.mode = i6055[0]
  i6054.curveMin = new pc.AnimationCurve( { keys_flow: i6055[1] } )
  i6054.curveMax = new pc.AnimationCurve( { keys_flow: i6055[2] } )
  i6054.curveMultiplier = i6055[3]
  i6054.constantMin = i6055[4]
  i6054.constantMax = i6055[5]
  return i6054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6056 = root || new pc.MinMaxGradient()
  var i6057 = data
  i6056.mode = i6057[0]
  i6056.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6057[1], i6056.gradientMin)
  i6056.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6057[2], i6056.gradientMax)
  i6056.colorMin = new pc.Color(i6057[3], i6057[4], i6057[5], i6057[6])
  i6056.colorMax = new pc.Color(i6057[7], i6057[8], i6057[9], i6057[10])
  return i6056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6059 = data
  i6058.mode = i6059[0]
  var i6061 = i6059[1]
  var i6060 = []
  for(var i = 0; i < i6061.length; i += 1) {
    i6060.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6061[i + 0]) );
  }
  i6058.colorKeys = i6060
  var i6063 = i6059[2]
  var i6062 = []
  for(var i = 0; i < i6063.length; i += 1) {
    i6062.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6063[i + 0]) );
  }
  i6058.alphaKeys = i6062
  return i6058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6064 = root || new pc.ParticleSystemColorBySpeed()
  var i6065 = data
  i6064.enabled = !!i6065[0]
  i6064.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6065[1], i6064.color)
  i6064.range = new pc.Vec2( i6065[2], i6065[3] )
  return i6064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6069 = data
  i6068.color = new pc.Color(i6069[0], i6069[1], i6069[2], i6069[3])
  i6068.time = i6069[4]
  return i6068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6073 = data
  i6072.alpha = i6073[0]
  i6072.time = i6073[1]
  return i6072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6074 = root || new pc.ParticleSystemColorOverLifetime()
  var i6075 = data
  i6074.enabled = !!i6075[0]
  i6074.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6075[1], i6074.color)
  return i6074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6076 = root || new pc.ParticleSystemEmitter()
  var i6077 = data
  i6076.enabled = !!i6077[0]
  i6076.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[1], i6076.rateOverTime)
  i6076.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[2], i6076.rateOverDistance)
  var i6079 = i6077[3]
  var i6078 = []
  for(var i = 0; i < i6079.length; i += 1) {
    i6078.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6079[i + 0]) );
  }
  i6076.bursts = i6078
  return i6076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6082 = root || new pc.ParticleSystemBurst()
  var i6083 = data
  i6082.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[0], i6082.count)
  i6082.cycleCount = i6083[1]
  i6082.minCount = i6083[2]
  i6082.maxCount = i6083[3]
  i6082.repeatInterval = i6083[4]
  i6082.time = i6083[5]
  return i6082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6084 = root || new pc.ParticleSystemRotationBySpeed()
  var i6085 = data
  i6084.enabled = !!i6085[0]
  i6084.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6085[1], i6084.x)
  i6084.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6085[2], i6084.y)
  i6084.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6085[3], i6084.z)
  i6084.separateAxes = !!i6085[4]
  i6084.range = new pc.Vec2( i6085[5], i6085[6] )
  return i6084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6086 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6087 = data
  i6086.enabled = !!i6087[0]
  i6086.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6087[1], i6086.x)
  i6086.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6087[2], i6086.y)
  i6086.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6087[3], i6086.z)
  i6086.separateAxes = !!i6087[4]
  return i6086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6088 = root || new pc.ParticleSystemShape()
  var i6089 = data
  i6088.enabled = !!i6089[0]
  i6088.shapeType = i6089[1]
  i6088.randomDirectionAmount = i6089[2]
  i6088.sphericalDirectionAmount = i6089[3]
  i6088.randomPositionAmount = i6089[4]
  i6088.alignToDirection = !!i6089[5]
  i6088.radius = i6089[6]
  i6088.radiusMode = i6089[7]
  i6088.radiusSpread = i6089[8]
  i6088.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6089[9], i6088.radiusSpeed)
  i6088.radiusThickness = i6089[10]
  i6088.angle = i6089[11]
  i6088.length = i6089[12]
  i6088.boxThickness = new pc.Vec3( i6089[13], i6089[14], i6089[15] )
  i6088.meshShapeType = i6089[16]
  request.r(i6089[17], i6089[18], 0, i6088, 'mesh')
  request.r(i6089[19], i6089[20], 0, i6088, 'meshRenderer')
  request.r(i6089[21], i6089[22], 0, i6088, 'skinnedMeshRenderer')
  i6088.useMeshMaterialIndex = !!i6089[23]
  i6088.meshMaterialIndex = i6089[24]
  i6088.useMeshColors = !!i6089[25]
  i6088.normalOffset = i6089[26]
  i6088.arc = i6089[27]
  i6088.arcMode = i6089[28]
  i6088.arcSpread = i6089[29]
  i6088.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6089[30], i6088.arcSpeed)
  i6088.donutRadius = i6089[31]
  i6088.position = new pc.Vec3( i6089[32], i6089[33], i6089[34] )
  i6088.rotation = new pc.Vec3( i6089[35], i6089[36], i6089[37] )
  i6088.scale = new pc.Vec3( i6089[38], i6089[39], i6089[40] )
  return i6088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6090 = root || new pc.ParticleSystemSizeBySpeed()
  var i6091 = data
  i6090.enabled = !!i6091[0]
  i6090.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6091[1], i6090.x)
  i6090.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6091[2], i6090.y)
  i6090.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6091[3], i6090.z)
  i6090.separateAxes = !!i6091[4]
  i6090.range = new pc.Vec2( i6091[5], i6091[6] )
  return i6090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6092 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6093 = data
  i6092.enabled = !!i6093[0]
  i6092.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6093[1], i6092.x)
  i6092.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6093[2], i6092.y)
  i6092.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6093[3], i6092.z)
  i6092.separateAxes = !!i6093[4]
  return i6092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6094 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6095 = data
  i6094.enabled = !!i6095[0]
  i6094.mode = i6095[1]
  i6094.animation = i6095[2]
  i6094.numTilesX = i6095[3]
  i6094.numTilesY = i6095[4]
  i6094.useRandomRow = !!i6095[5]
  i6094.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6095[6], i6094.frameOverTime)
  i6094.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6095[7], i6094.startFrame)
  i6094.cycleCount = i6095[8]
  i6094.rowIndex = i6095[9]
  i6094.flipU = i6095[10]
  i6094.flipV = i6095[11]
  i6094.spriteCount = i6095[12]
  var i6097 = i6095[13]
  var i6096 = []
  for(var i = 0; i < i6097.length; i += 2) {
  request.r(i6097[i + 0], i6097[i + 1], 2, i6096, '')
  }
  i6094.sprites = i6096
  return i6094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6100 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6101 = data
  i6100.enabled = !!i6101[0]
  i6100.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[1], i6100.x)
  i6100.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[2], i6100.y)
  i6100.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[3], i6100.z)
  i6100.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[4], i6100.radial)
  i6100.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[5], i6100.speedModifier)
  i6100.space = i6101[6]
  i6100.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[7], i6100.orbitalX)
  i6100.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[8], i6100.orbitalY)
  i6100.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[9], i6100.orbitalZ)
  i6100.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[10], i6100.orbitalOffsetX)
  i6100.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[11], i6100.orbitalOffsetY)
  i6100.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6101[12], i6100.orbitalOffsetZ)
  return i6100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6102 = root || new pc.ParticleSystemNoise()
  var i6103 = data
  i6102.enabled = !!i6103[0]
  i6102.separateAxes = !!i6103[1]
  i6102.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[2], i6102.strengthX)
  i6102.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[3], i6102.strengthY)
  i6102.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[4], i6102.strengthZ)
  i6102.frequency = i6103[5]
  i6102.damping = !!i6103[6]
  i6102.octaveCount = i6103[7]
  i6102.octaveMultiplier = i6103[8]
  i6102.octaveScale = i6103[9]
  i6102.quality = i6103[10]
  i6102.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[11], i6102.scrollSpeed)
  i6102.scrollSpeedMultiplier = i6103[12]
  i6102.remapEnabled = !!i6103[13]
  i6102.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[14], i6102.remapX)
  i6102.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[15], i6102.remapY)
  i6102.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[16], i6102.remapZ)
  i6102.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[17], i6102.positionAmount)
  i6102.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[18], i6102.rotationAmount)
  i6102.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6103[19], i6102.sizeAmount)
  return i6102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6104 = root || new pc.ParticleSystemInheritVelocity()
  var i6105 = data
  i6104.enabled = !!i6105[0]
  i6104.mode = i6105[1]
  i6104.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6105[2], i6104.curve)
  return i6104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6106 = root || new pc.ParticleSystemForceOverLifetime()
  var i6107 = data
  i6106.enabled = !!i6107[0]
  i6106.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6107[1], i6106.x)
  i6106.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6107[2], i6106.y)
  i6106.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6107[3], i6106.z)
  i6106.space = i6107[4]
  i6106.randomized = !!i6107[5]
  return i6106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6108 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6109 = data
  i6108.enabled = !!i6109[0]
  i6108.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6109[1], i6108.limit)
  i6108.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6109[2], i6108.limitX)
  i6108.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6109[3], i6108.limitY)
  i6108.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6109[4], i6108.limitZ)
  i6108.dampen = i6109[5]
  i6108.separateAxes = !!i6109[6]
  i6108.space = i6109[7]
  i6108.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6109[8], i6108.drag)
  i6108.multiplyDragByParticleSize = !!i6109[9]
  i6108.multiplyDragByParticleVelocity = !!i6109[10]
  return i6108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6111 = data
  i6110.enabled = !!i6111[0]
  request.r(i6111[1], i6111[2], 0, i6110, 'sharedMaterial')
  var i6113 = i6111[3]
  var i6112 = []
  for(var i = 0; i < i6113.length; i += 2) {
  request.r(i6113[i + 0], i6113[i + 1], 2, i6112, '')
  }
  i6110.sharedMaterials = i6112
  i6110.receiveShadows = !!i6111[4]
  i6110.shadowCastingMode = i6111[5]
  i6110.sortingLayerID = i6111[6]
  i6110.sortingOrder = i6111[7]
  i6110.lightmapIndex = i6111[8]
  i6110.lightmapSceneIndex = i6111[9]
  i6110.lightmapScaleOffset = new pc.Vec4( i6111[10], i6111[11], i6111[12], i6111[13] )
  i6110.lightProbeUsage = i6111[14]
  i6110.reflectionProbeUsage = i6111[15]
  request.r(i6111[16], i6111[17], 0, i6110, 'mesh')
  i6110.meshCount = i6111[18]
  i6110.activeVertexStreamsCount = i6111[19]
  i6110.alignment = i6111[20]
  i6110.renderMode = i6111[21]
  i6110.sortMode = i6111[22]
  i6110.lengthScale = i6111[23]
  i6110.velocityScale = i6111[24]
  i6110.cameraVelocityScale = i6111[25]
  i6110.normalDirection = i6111[26]
  i6110.sortingFudge = i6111[27]
  i6110.minParticleSize = i6111[28]
  i6110.maxParticleSize = i6111[29]
  i6110.pivot = new pc.Vec3( i6111[30], i6111[31], i6111[32] )
  request.r(i6111[33], i6111[34], 0, i6110, 'trailMaterial')
  return i6110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6117 = data
  i6116.name = i6117[0]
  i6116.tagId = i6117[1]
  i6116.enabled = !!i6117[2]
  i6116.isStatic = !!i6117[3]
  i6116.layer = i6117[4]
  return i6116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6119 = data
  i6118.name = i6119[0]
  i6118.width = i6119[1]
  i6118.height = i6119[2]
  i6118.mipmapCount = i6119[3]
  i6118.anisoLevel = i6119[4]
  i6118.filterMode = i6119[5]
  i6118.hdr = !!i6119[6]
  i6118.format = i6119[7]
  i6118.wrapMode = i6119[8]
  i6118.alphaIsTransparency = !!i6119[9]
  i6118.alphaSource = i6119[10]
  i6118.graphicsFormat = i6119[11]
  i6118.sRGBTexture = !!i6119[12]
  i6118.desiredColorSpace = i6119[13]
  i6118.wrapU = i6119[14]
  i6118.wrapV = i6119[15]
  return i6118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6121 = data
  i6120.name = i6121[0]
  i6120.halfPrecision = !!i6121[1]
  i6120.useUInt32IndexFormat = !!i6121[2]
  i6120.vertexCount = i6121[3]
  i6120.aabb = i6121[4]
  var i6123 = i6121[5]
  var i6122 = []
  for(var i = 0; i < i6123.length; i += 1) {
    i6122.push( !!i6123[i + 0] );
  }
  i6120.streams = i6122
  i6120.vertices = i6121[6]
  var i6125 = i6121[7]
  var i6124 = []
  for(var i = 0; i < i6125.length; i += 1) {
    i6124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6125[i + 0]) );
  }
  i6120.subMeshes = i6124
  var i6127 = i6121[8]
  var i6126 = []
  for(var i = 0; i < i6127.length; i += 16) {
    i6126.push( new pc.Mat4().setData(i6127[i + 0], i6127[i + 1], i6127[i + 2], i6127[i + 3],  i6127[i + 4], i6127[i + 5], i6127[i + 6], i6127[i + 7],  i6127[i + 8], i6127[i + 9], i6127[i + 10], i6127[i + 11],  i6127[i + 12], i6127[i + 13], i6127[i + 14], i6127[i + 15]) );
  }
  i6120.bindposes = i6126
  var i6129 = i6121[9]
  var i6128 = []
  for(var i = 0; i < i6129.length; i += 1) {
    i6128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6129[i + 0]) );
  }
  i6120.blendShapes = i6128
  return i6120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6135 = data
  i6134.triangles = i6135[0]
  return i6134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6141 = data
  i6140.name = i6141[0]
  var i6143 = i6141[1]
  var i6142 = []
  for(var i = 0; i < i6143.length; i += 1) {
    i6142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6143[i + 0]) );
  }
  i6140.frames = i6142
  return i6140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6145 = data
  i6144.pivot = new pc.Vec2( i6145[0], i6145[1] )
  i6144.anchorMin = new pc.Vec2( i6145[2], i6145[3] )
  i6144.anchorMax = new pc.Vec2( i6145[4], i6145[5] )
  i6144.sizeDelta = new pc.Vec2( i6145[6], i6145[7] )
  i6144.anchoredPosition3D = new pc.Vec3( i6145[8], i6145[9], i6145[10] )
  i6144.rotation = new pc.Quat(i6145[11], i6145[12], i6145[13], i6145[14])
  i6144.scale = new pc.Vec3( i6145[15], i6145[16], i6145[17] )
  return i6144
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i6146 = root || request.c( 'QuestSlot' )
  var i6147 = data
  i6146.InitialScale = new pc.Vec3( i6147[0], i6147[1], i6147[2] )
  i6146.MaximumScale = new pc.Vec3( i6147[3], i6147[4], i6147[5] )
  i6146.EndScale = new pc.Vec3( i6147[6], i6147[7], i6147[8] )
  i6146.animationDuration = i6147[9]
  i6146.maxSizeTrigger = i6147[10]
  request.r(i6147[11], i6147[12], 0, i6146, 'type')
  i6146.amount = i6147[13]
  i6146.locked = !!i6147[14]
  request.r(i6147[15], i6147[16], 0, i6146, 'icon')
  request.r(i6147[17], i6147[18], 0, i6146, 'amountTxt')
  return i6146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6149 = data
  i6148.cullTransparentMesh = !!i6149[0]
  return i6148
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6150 = root || request.c( 'UnityEngine.UI.Image' )
  var i6151 = data
  request.r(i6151[0], i6151[1], 0, i6150, 'm_Sprite')
  i6150.m_Type = i6151[2]
  i6150.m_PreserveAspect = !!i6151[3]
  i6150.m_FillCenter = !!i6151[4]
  i6150.m_FillMethod = i6151[5]
  i6150.m_FillAmount = i6151[6]
  i6150.m_FillClockwise = !!i6151[7]
  i6150.m_FillOrigin = i6151[8]
  i6150.m_UseSpriteMesh = !!i6151[9]
  i6150.m_PixelsPerUnitMultiplier = i6151[10]
  request.r(i6151[11], i6151[12], 0, i6150, 'm_Material')
  i6150.m_Maskable = !!i6151[13]
  i6150.m_Color = new pc.Color(i6151[14], i6151[15], i6151[16], i6151[17])
  i6150.m_RaycastTarget = !!i6151[18]
  i6150.m_RaycastPadding = new pc.Vec4( i6151[19], i6151[20], i6151[21], i6151[22] )
  return i6150
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6152 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6153 = data
  i6152.m_hasFontAssetChanged = !!i6153[0]
  request.r(i6153[1], i6153[2], 0, i6152, 'm_baseMaterial')
  i6152.m_maskOffset = new pc.Vec4( i6153[3], i6153[4], i6153[5], i6153[6] )
  i6152.m_text = i6153[7]
  i6152.m_isRightToLeft = !!i6153[8]
  request.r(i6153[9], i6153[10], 0, i6152, 'm_fontAsset')
  request.r(i6153[11], i6153[12], 0, i6152, 'm_sharedMaterial')
  var i6155 = i6153[13]
  var i6154 = []
  for(var i = 0; i < i6155.length; i += 2) {
  request.r(i6155[i + 0], i6155[i + 1], 2, i6154, '')
  }
  i6152.m_fontSharedMaterials = i6154
  request.r(i6153[14], i6153[15], 0, i6152, 'm_fontMaterial')
  var i6157 = i6153[16]
  var i6156 = []
  for(var i = 0; i < i6157.length; i += 2) {
  request.r(i6157[i + 0], i6157[i + 1], 2, i6156, '')
  }
  i6152.m_fontMaterials = i6156
  i6152.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6153[17], i6153[18], i6153[19], i6153[20])
  i6152.m_fontColor = new pc.Color(i6153[21], i6153[22], i6153[23], i6153[24])
  i6152.m_enableVertexGradient = !!i6153[25]
  i6152.m_colorMode = i6153[26]
  i6152.m_fontColorGradient = request.d('TMPro.VertexGradient', i6153[27], i6152.m_fontColorGradient)
  request.r(i6153[28], i6153[29], 0, i6152, 'm_fontColorGradientPreset')
  request.r(i6153[30], i6153[31], 0, i6152, 'm_spriteAsset')
  i6152.m_tintAllSprites = !!i6153[32]
  request.r(i6153[33], i6153[34], 0, i6152, 'm_StyleSheet')
  i6152.m_TextStyleHashCode = i6153[35]
  i6152.m_overrideHtmlColors = !!i6153[36]
  i6152.m_faceColor = UnityEngine.Color32.ConstructColor(i6153[37], i6153[38], i6153[39], i6153[40])
  i6152.m_fontSize = i6153[41]
  i6152.m_fontSizeBase = i6153[42]
  i6152.m_fontWeight = i6153[43]
  i6152.m_enableAutoSizing = !!i6153[44]
  i6152.m_fontSizeMin = i6153[45]
  i6152.m_fontSizeMax = i6153[46]
  i6152.m_fontStyle = i6153[47]
  i6152.m_HorizontalAlignment = i6153[48]
  i6152.m_VerticalAlignment = i6153[49]
  i6152.m_textAlignment = i6153[50]
  i6152.m_characterSpacing = i6153[51]
  i6152.m_wordSpacing = i6153[52]
  i6152.m_lineSpacing = i6153[53]
  i6152.m_lineSpacingMax = i6153[54]
  i6152.m_paragraphSpacing = i6153[55]
  i6152.m_charWidthMaxAdj = i6153[56]
  i6152.m_enableWordWrapping = !!i6153[57]
  i6152.m_wordWrappingRatios = i6153[58]
  i6152.m_overflowMode = i6153[59]
  request.r(i6153[60], i6153[61], 0, i6152, 'm_linkedTextComponent')
  request.r(i6153[62], i6153[63], 0, i6152, 'parentLinkedComponent')
  i6152.m_enableKerning = !!i6153[64]
  i6152.m_enableExtraPadding = !!i6153[65]
  i6152.checkPaddingRequired = !!i6153[66]
  i6152.m_isRichText = !!i6153[67]
  i6152.m_parseCtrlCharacters = !!i6153[68]
  i6152.m_isOrthographic = !!i6153[69]
  i6152.m_isCullingEnabled = !!i6153[70]
  i6152.m_horizontalMapping = i6153[71]
  i6152.m_verticalMapping = i6153[72]
  i6152.m_uvLineOffset = i6153[73]
  i6152.m_geometrySortingOrder = i6153[74]
  i6152.m_IsTextObjectScaleStatic = !!i6153[75]
  i6152.m_VertexBufferAutoSizeReduction = !!i6153[76]
  i6152.m_useMaxVisibleDescender = !!i6153[77]
  i6152.m_pageToDisplay = i6153[78]
  i6152.m_margin = new pc.Vec4( i6153[79], i6153[80], i6153[81], i6153[82] )
  i6152.m_isUsingLegacyAnimationComponent = !!i6153[83]
  i6152.m_isVolumetricText = !!i6153[84]
  request.r(i6153[85], i6153[86], 0, i6152, 'm_Material')
  i6152.m_Maskable = !!i6153[87]
  i6152.m_Color = new pc.Color(i6153[88], i6153[89], i6153[90], i6153[91])
  i6152.m_RaycastTarget = !!i6153[92]
  i6152.m_RaycastPadding = new pc.Vec4( i6153[93], i6153[94], i6153[95], i6153[96] )
  return i6152
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6158 = root || request.c( 'TMPro.VertexGradient' )
  var i6159 = data
  i6158.topLeft = new pc.Color(i6159[0], i6159[1], i6159[2], i6159[3])
  i6158.topRight = new pc.Color(i6159[4], i6159[5], i6159[6], i6159[7])
  i6158.bottomLeft = new pc.Color(i6159[8], i6159[9], i6159[10], i6159[11])
  i6158.bottomRight = new pc.Color(i6159[12], i6159[13], i6159[14], i6159[15])
  return i6158
}

Deserializers["Tile"] = function (request, data, root) {
  var i6160 = root || request.c( 'Tile' )
  var i6161 = data
  i6160.layer = i6161[0]
  i6160.line = i6161[1]
  request.r(i6161[2], i6161[3], 0, i6160, 'icon')
  request.r(i6161[4], i6161[5], 0, i6160, 'lockTile')
  request.r(i6161[6], i6161[7], 0, i6160, 'background')
  request.r(i6161[8], i6161[9], 0, i6160, 'trail')
  i6160.locked = !!i6161[10]
  i6160.isHidden = !!i6161[11]
  i6160.debug = !!i6161[12]
  request.r(i6161[13], i6161[14], 0, i6160, 'spawnAnim')
  request.r(i6161[15], i6161[16], 0, i6160, 'type')
  i6160.box = request.d('Box', i6161[17], i6160.box)
  request.r(i6161[18], i6161[19], 0, i6160, 'movement')
  request.r(i6161[20], i6161[21], 0, i6160, 'lockAnim')
  i6160.iconSort = i6161[22]
  i6160.backGroundSort = i6161[23]
  i6160.disabledSort = i6161[24]
  i6160.trailSort = i6161[25]
  var i6163 = i6161[26]
  var i6162 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i6163.length; i += 2) {
  request.r(i6163[i + 0], i6163[i + 1], 1, i6162, '')
  }
  i6160.coverTiles = i6162
  return i6160
}

Deserializers["Box"] = function (request, data, root) {
  var i6164 = root || request.c( 'Box' )
  var i6165 = data
  i6164.Position = new pc.Vec2( i6165[0], i6165[1] )
  i6164.Width = i6165[2]
  i6164.Height = i6165[3]
  return i6164
}

Deserializers["TileMovement"] = function (request, data, root) {
  var i6168 = root || request.c( 'TileMovement' )
  var i6169 = data
  i6168.speed = i6169[0]
  i6168._isMoving = !!i6169[1]
  return i6168
}

Deserializers["AnimationScale"] = function (request, data, root) {
  var i6170 = root || request.c( 'AnimationScale' )
  var i6171 = data
  i6170.startSize = i6171[0]
  i6170.maxSize = i6171[1]
  i6170.endSize = i6171[2]
  i6170.duration = i6171[3]
  return i6170
}

Deserializers["TileLockAnimation"] = function (request, data, root) {
  var i6172 = root || request.c( 'TileLockAnimation' )
  var i6173 = data
  i6172.lockAlpha = i6173[0]
  i6172.fadeDuration = i6173[1]
  return i6172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6175 = data
  i6174.enabled = !!i6175[0]
  request.r(i6175[1], i6175[2], 0, i6174, 'sharedMaterial')
  var i6177 = i6175[3]
  var i6176 = []
  for(var i = 0; i < i6177.length; i += 2) {
  request.r(i6177[i + 0], i6177[i + 1], 2, i6176, '')
  }
  i6174.sharedMaterials = i6176
  i6174.receiveShadows = !!i6175[4]
  i6174.shadowCastingMode = i6175[5]
  i6174.sortingLayerID = i6175[6]
  i6174.sortingOrder = i6175[7]
  i6174.lightmapIndex = i6175[8]
  i6174.lightmapSceneIndex = i6175[9]
  i6174.lightmapScaleOffset = new pc.Vec4( i6175[10], i6175[11], i6175[12], i6175[13] )
  i6174.lightProbeUsage = i6175[14]
  i6174.reflectionProbeUsage = i6175[15]
  i6174.color = new pc.Color(i6175[16], i6175[17], i6175[18], i6175[19])
  request.r(i6175[20], i6175[21], 0, i6174, 'sprite')
  i6174.flipX = !!i6175[22]
  i6174.flipY = !!i6175[23]
  i6174.drawMode = i6175[24]
  i6174.size = new pc.Vec2( i6175[25], i6175[26] )
  i6174.tileMode = i6175[27]
  i6174.adaptiveModeThreshold = i6175[28]
  i6174.maskInteraction = i6175[29]
  i6174.spriteSortPoint = i6175[30]
  return i6174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i6178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i6179 = data
  i6178.enabled = !!i6179[0]
  request.r(i6179[1], i6179[2], 0, i6178, 'sharedMaterial')
  var i6181 = i6179[3]
  var i6180 = []
  for(var i = 0; i < i6181.length; i += 2) {
  request.r(i6181[i + 0], i6181[i + 1], 2, i6180, '')
  }
  i6178.sharedMaterials = i6180
  i6178.receiveShadows = !!i6179[4]
  i6178.shadowCastingMode = i6179[5]
  i6178.sortingLayerID = i6179[6]
  i6178.sortingOrder = i6179[7]
  i6178.lightmapIndex = i6179[8]
  i6178.lightmapSceneIndex = i6179[9]
  i6178.lightmapScaleOffset = new pc.Vec4( i6179[10], i6179[11], i6179[12], i6179[13] )
  i6178.lightProbeUsage = i6179[14]
  i6178.reflectionProbeUsage = i6179[15]
  var i6183 = i6179[16]
  var i6182 = []
  for(var i = 0; i < i6183.length; i += 3) {
    i6182.push( new pc.Vec3( i6183[i + 0], i6183[i + 1], i6183[i + 2] ) );
  }
  i6178.positions = i6182
  i6178.positionCount = i6179[17]
  i6178.time = i6179[18]
  i6178.startWidth = i6179[19]
  i6178.endWidth = i6179[20]
  i6178.widthMultiplier = i6179[21]
  i6178.autodestruct = !!i6179[22]
  i6178.emitting = !!i6179[23]
  i6178.numCornerVertices = i6179[24]
  i6178.numCapVertices = i6179[25]
  i6178.minVertexDistance = i6179[26]
  i6178.colorGradient = i6179[27] ? new pc.ColorGradient(i6179[27][0], i6179[27][1], i6179[27][2]) : null
  i6178.startColor = new pc.Color(i6179[28], i6179[29], i6179[30], i6179[31])
  i6178.endColor = new pc.Color(i6179[32], i6179[33], i6179[34], i6179[35])
  i6178.generateLightingData = !!i6179[36]
  i6178.textureMode = i6179[37]
  i6178.alignment = i6179[38]
  i6178.widthCurve = new pc.AnimationCurve( { keys_flow: i6179[39] } )
  return i6178
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i6186 = root || request.c( 'TileSlot' )
  var i6187 = data
  i6186.ID = i6187[0]
  request.r(i6187[1], i6187[2], 0, i6186, 'Tile')
  return i6186
}

Deserializers["AnimationScaleLooped"] = function (request, data, root) {
  var i6188 = root || request.c( 'AnimationScaleLooped' )
  var i6189 = data
  i6188.playFromStart = !!i6189[0]
  i6188.startScale = new pc.Vec3( i6189[1], i6189[2], i6189[3] )
  i6188.endScale = new pc.Vec3( i6189[4], i6189[5], i6189[6] )
  i6188.speed = i6189[7]
  return i6188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6191 = data
  i6190.name = i6191[0]
  i6190.index = i6191[1]
  i6190.startup = !!i6191[2]
  return i6190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6193 = data
  i6192.enabled = !!i6193[0]
  i6192.aspect = i6193[1]
  i6192.orthographic = !!i6193[2]
  i6192.orthographicSize = i6193[3]
  i6192.backgroundColor = new pc.Color(i6193[4], i6193[5], i6193[6], i6193[7])
  i6192.nearClipPlane = i6193[8]
  i6192.farClipPlane = i6193[9]
  i6192.fieldOfView = i6193[10]
  i6192.depth = i6193[11]
  i6192.clearFlags = i6193[12]
  i6192.cullingMask = i6193[13]
  i6192.rect = i6193[14]
  request.r(i6193[15], i6193[16], 0, i6192, 'targetTexture')
  i6192.usePhysicalProperties = !!i6193[17]
  i6192.focalLength = i6193[18]
  i6192.sensorSize = new pc.Vec2( i6193[19], i6193[20] )
  i6192.lensShift = new pc.Vec2( i6193[21], i6193[22] )
  i6192.gateFit = i6193[23]
  return i6192
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6194 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6195 = data
  request.r(i6195[0], i6195[1], 0, i6194, 'm_FirstSelected')
  i6194.m_sendNavigationEvents = !!i6195[2]
  i6194.m_DragThreshold = i6195[3]
  return i6194
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6196 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6197 = data
  i6196.m_HorizontalAxis = i6197[0]
  i6196.m_VerticalAxis = i6197[1]
  i6196.m_SubmitButton = i6197[2]
  i6196.m_CancelButton = i6197[3]
  i6196.m_InputActionsPerSecond = i6197[4]
  i6196.m_RepeatDelay = i6197[5]
  i6196.m_ForceModuleActive = !!i6197[6]
  i6196.m_SendPointerHoverToParent = !!i6197[7]
  return i6196
}

Deserializers["Game"] = function (request, data, root) {
  var i6198 = root || request.c( 'Game' )
  var i6199 = data
  i6198._isGameEnded = !!i6199[0]
  i6198.autoGameOverInSeconds = i6199[1]
  request.r(i6199[2], i6199[3], 0, i6198, 'deck')
  request.r(i6199[4], i6199[5], 0, i6198, 'actions')
  request.r(i6199[6], i6199[7], 0, i6198, 'locker')
  request.r(i6199[8], i6199[9], 0, i6198, 'box2DLocker')
  request.r(i6199[10], i6199[11], 0, i6198, 'bag')
  request.r(i6199[12], i6199[13], 0, i6198, 'spawnAnimation')
  request.r(i6199[14], i6199[15], 0, i6198, 'tileMatcher')
  request.r(i6199[16], i6199[17], 0, i6198, 'loseCondition')
  request.r(i6199[18], i6199[19], 0, i6198, 'winCondition')
  request.r(i6199[20], i6199[21], 0, i6198, 'input')
  request.r(i6199[22], i6199[23], 0, i6198, 'endCard')
  request.r(i6199[24], i6199[25], 0, i6198, 'quest')
  i6198.useRandom = !!i6199[26]
  request.r(i6199[27], i6199[28], 0, i6198, 'spawnRandom')
  i6198.tileToSpawn = i6199[29]
  i6198.tilesInScene = i6199[30]
  var i6201 = i6199[31]
  var i6200 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i6201.length; i += 2) {
  request.r(i6201[i + 0], i6201[i + 1], 1, i6200, '')
  }
  i6198.tilesInGame = i6200
  return i6198
}

Deserializers["TileLockerBox2D"] = function (request, data, root) {
  var i6202 = root || request.c( 'TileLockerBox2D' )
  var i6203 = data
  i6202.enable = !!i6203[0]
  return i6202
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i6204 = root || request.c( 'TileSpawner' )
  var i6205 = data
  request.r(i6205[0], i6205[1], 0, i6204, 'Game')
  request.r(i6205[2], i6205[3], 0, i6204, 'prefab')
  var i6207 = i6205[4]
  var i6206 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i6207.length; i += 2) {
  request.r(i6207[i + 0], i6207[i + 1], 1, i6206, '')
  }
  i6204.spawned = i6206
  i6204.hideAtSpawn = !!i6205[5]
  i6204.spawnRate = i6205[6]
  return i6204
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i6208 = root || request.c( 'TileRandomSpawner' )
  var i6209 = data
  request.r(i6209[0], i6209[1], 0, i6208, 'Game')
  i6208.spawnRate = i6209[2]
  var i6211 = i6209[3]
  var i6210 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i6211.length; i += 2) {
  request.r(i6211[i + 0], i6211[i + 1], 1, i6210, '')
  }
  i6208.spawned = i6210
  return i6208
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i6212 = root || request.c( 'TileSpawnAnimation' )
  var i6213 = data
  request.r(i6213[0], i6213[1], 0, i6212, 'Game')
  i6212.delayBetweenLines = i6213[2]
  i6212.delayBetweenTiles = i6213[3]
  i6212.delayBetweenLayers = i6213[4]
  return i6212
}

Deserializers["TileActions"] = function (request, data, root) {
  var i6214 = root || request.c( 'TileActions' )
  var i6215 = data
  request.r(i6215[0], i6215[1], 0, i6214, 'Game')
  return i6214
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i6216 = root || request.c( 'TileMatcher' )
  var i6217 = data
  request.r(i6217[0], i6217[1], 0, i6216, 'Game')
  request.r(i6217[2], i6217[3], 0, i6216, 'vfx')
  var i6219 = i6217[4]
  var i6218 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i6219.length; i += 2) {
  request.r(i6219[i + 0], i6219[i + 1], 1, i6218, '')
  }
  i6216.completed = i6218
  var i6221 = i6217[5]
  var i6220 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i6221.length; i += 2) {
  request.r(i6221[i + 0], i6221[i + 1], 1, i6220, '')
  }
  i6216.lastMatch = i6220
  return i6216
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i6224 = root || request.c( 'LoseCondition' )
  var i6225 = data
  request.r(i6225[0], i6225[1], 0, i6224, 'Game')
  return i6224
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i6226 = root || request.c( 'WinCondition' )
  var i6227 = data
  request.r(i6227[0], i6227[1], 0, i6226, 'Game')
  return i6226
}

Deserializers["Quest"] = function (request, data, root) {
  var i6228 = root || request.c( 'Quest' )
  var i6229 = data
  request.r(i6229[0], i6229[1], 0, i6228, 'Game')
  var i6231 = i6229[2]
  var i6230 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i6231.length; i += 2) {
  request.r(i6231[i + 0], i6231[i + 1], 1, i6230, '')
  }
  i6228.slots = i6230
  return i6228
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i6234 = root || request.c( 'InputTouch' )
  var i6235 = data
  request.r(i6235[0], i6235[1], 0, i6234, 'Game')
  i6234.inputCooldown = i6235[2]
  var i6237 = i6235[3]
  var i6236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i6237.length; i += 2) {
    i6236.add(new pc.Vec2( i6237[i + 0], i6237[i + 1] ));
  }
  i6234.touches = i6236
  i6234.touchSize = i6235[4]
  return i6234
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i6240 = root || request.c( 'TileBagSorter' )
  var i6241 = data
  request.r(i6241[0], i6241[1], 0, i6240, 'Game')
  i6240.enable = !!i6241[2]
  i6240.intervalSec = i6241[3]
  return i6240
}

Deserializers["EndCard"] = function (request, data, root) {
  var i6242 = root || request.c( 'EndCard' )
  var i6243 = data
  request.r(i6243[0], i6243[1], 0, i6242, 'canvas')
  request.r(i6243[2], i6243[3], 0, i6242, 'slideAnimation')
  request.r(i6243[4], i6243[5], 0, i6242, 'Game')
  return i6242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6245 = data
  request.r(i6245[0], i6245[1], 0, i6244, 'clip')
  request.r(i6245[2], i6245[3], 0, i6244, 'outputAudioMixerGroup')
  i6244.playOnAwake = !!i6245[4]
  i6244.loop = !!i6245[5]
  i6244.time = i6245[6]
  i6244.volume = i6245[7]
  i6244.pitch = i6245[8]
  i6244.enabled = !!i6245[9]
  return i6244
}

Deserializers["Sounds"] = function (request, data, root) {
  var i6246 = root || request.c( 'Sounds' )
  var i6247 = data
  request.r(i6247[0], i6247[1], 0, i6246, 'Game')
  request.r(i6247[2], i6247[3], 0, i6246, 'tileClick')
  request.r(i6247[4], i6247[5], 0, i6246, 'tileMerge')
  request.r(i6247[6], i6247[7], 0, i6246, 'levelWin')
  request.r(i6247[8], i6247[9], 0, i6246, 'leveLose')
  request.r(i6247[10], i6247[11], 0, i6246, 'source')
  return i6246
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i6248 = root || request.c( 'Tutorial' )
  var i6249 = data
  request.r(i6249[0], i6249[1], 0, i6248, 'pointer')
  var i6251 = i6249[2]
  var i6250 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialPointerData')))
  for(var i = 0; i < i6251.length; i += 1) {
    i6250.add(request.d('TutorialPointerData', i6251[i + 0]));
  }
  i6248.pointers = i6250
  i6248.delay = i6249[3]
  return i6248
}

Deserializers["TutorialPointerData"] = function (request, data, root) {
  var i6254 = root || request.c( 'TutorialPointerData' )
  var i6255 = data
  request.r(i6255[0], i6255[1], 0, i6254, 'tutorial')
  request.r(i6255[2], i6255[3], 0, i6254, 'tile')
  return i6254
}

Deserializers["TutorialPointer"] = function (request, data, root) {
  var i6256 = root || request.c( 'TutorialPointer' )
  var i6257 = data
  i6256.speed = i6257[0]
  return i6256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6259 = data
  i6258.enabled = !!i6259[0]
  i6258.planeDistance = i6259[1]
  i6258.referencePixelsPerUnit = i6259[2]
  i6258.isFallbackOverlay = !!i6259[3]
  i6258.renderMode = i6259[4]
  i6258.renderOrder = i6259[5]
  i6258.sortingLayerName = i6259[6]
  i6258.sortingOrder = i6259[7]
  i6258.scaleFactor = i6259[8]
  request.r(i6259[9], i6259[10], 0, i6258, 'worldCamera')
  i6258.overrideSorting = !!i6259[11]
  i6258.pixelPerfect = !!i6259[12]
  i6258.targetDisplay = i6259[13]
  i6258.overridePixelPerfect = !!i6259[14]
  return i6258
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6260 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6261 = data
  i6260.m_UiScaleMode = i6261[0]
  i6260.m_ReferencePixelsPerUnit = i6261[1]
  i6260.m_ScaleFactor = i6261[2]
  i6260.m_ReferenceResolution = new pc.Vec2( i6261[3], i6261[4] )
  i6260.m_ScreenMatchMode = i6261[5]
  i6260.m_MatchWidthOrHeight = i6261[6]
  i6260.m_PhysicalUnit = i6261[7]
  i6260.m_FallbackScreenDPI = i6261[8]
  i6260.m_DefaultSpriteDPI = i6261[9]
  i6260.m_DynamicPixelsPerUnit = i6261[10]
  i6260.m_PresetInfoIsWorld = !!i6261[11]
  return i6260
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6262 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6263 = data
  i6262.m_IgnoreReversedGraphics = !!i6263[0]
  i6262.m_BlockingObjects = i6263[1]
  i6262.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6263[2] )
  return i6262
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i6264 = root || request.c( 'ResetLocalPosition' )
  var i6265 = data
  return i6264
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i6266 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i6267 = data
  i6266.m_Spacing = i6267[0]
  i6266.m_ChildForceExpandWidth = !!i6267[1]
  i6266.m_ChildForceExpandHeight = !!i6267[2]
  i6266.m_ChildControlWidth = !!i6267[3]
  i6266.m_ChildControlHeight = !!i6267[4]
  i6266.m_ChildScaleWidth = !!i6267[5]
  i6266.m_ChildScaleHeight = !!i6267[6]
  i6266.m_ReverseArrangement = !!i6267[7]
  i6266.m_Padding = UnityEngine.RectOffset.FromPaddings(i6267[8], i6267[9], i6267[10], i6267[11])
  i6266.m_ChildAlignment = i6267[12]
  return i6266
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i6268 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i6269 = data
  i6268.m_StartCorner = i6269[0]
  i6268.m_StartAxis = i6269[1]
  i6268.m_CellSize = new pc.Vec2( i6269[2], i6269[3] )
  i6268.m_Spacing = new pc.Vec2( i6269[4], i6269[5] )
  i6268.m_Constraint = i6269[6]
  i6268.m_ConstraintCount = i6269[7]
  i6268.m_Padding = UnityEngine.RectOffset.FromPaddings(i6269[8], i6269[9], i6269[10], i6269[11])
  i6268.m_ChildAlignment = i6269[12]
  return i6268
}

Deserializers["SlideAnimationUI"] = function (request, data, root) {
  var i6270 = root || request.c( 'SlideAnimationUI' )
  var i6271 = data
  request.r(i6271[0], i6271[1], 0, i6270, 'rectTransform')
  i6270.targetPosition = new pc.Vec2( i6271[2], i6271[3] )
  i6270.slideSpeed = i6271[4]
  return i6270
}

Deserializers["Sweeling"] = function (request, data, root) {
  var i6272 = root || request.c( 'Sweeling' )
  var i6273 = data
  request.r(i6273[0], i6273[1], 0, i6272, 'center')
  i6272.radius = i6273[2]
  i6272.speed = i6273[3]
  i6272.angle = i6273[4]
  return i6272
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6274 = root || request.c( 'UnityEngine.UI.Button' )
  var i6275 = data
  i6274.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6275[0], i6274.m_OnClick)
  i6274.m_Navigation = request.d('UnityEngine.UI.Navigation', i6275[1], i6274.m_Navigation)
  i6274.m_Transition = i6275[2]
  i6274.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6275[3], i6274.m_Colors)
  i6274.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6275[4], i6274.m_SpriteState)
  i6274.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6275[5], i6274.m_AnimationTriggers)
  i6274.m_Interactable = !!i6275[6]
  request.r(i6275[7], i6275[8], 0, i6274, 'm_TargetGraphic')
  return i6274
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6276 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6277 = data
  i6276.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6277[0], i6276.m_PersistentCalls)
  return i6276
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6278 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6279 = data
  var i6281 = i6279[0]
  var i6280 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6281.length; i += 1) {
    i6280.add(request.d('UnityEngine.Events.PersistentCall', i6281[i + 0]));
  }
  i6278.m_Calls = i6280
  return i6278
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6284 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6285 = data
  request.r(i6285[0], i6285[1], 0, i6284, 'm_Target')
  i6284.m_TargetAssemblyTypeName = i6285[2]
  i6284.m_MethodName = i6285[3]
  i6284.m_Mode = i6285[4]
  i6284.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6285[5], i6284.m_Arguments)
  i6284.m_CallState = i6285[6]
  return i6284
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6286 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6287 = data
  request.r(i6287[0], i6287[1], 0, i6286, 'm_ObjectArgument')
  i6286.m_ObjectArgumentAssemblyTypeName = i6287[2]
  i6286.m_IntArgument = i6287[3]
  i6286.m_FloatArgument = i6287[4]
  i6286.m_StringArgument = i6287[5]
  i6286.m_BoolArgument = !!i6287[6]
  return i6286
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6288 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6289 = data
  i6288.m_Mode = i6289[0]
  i6288.m_WrapAround = !!i6289[1]
  request.r(i6289[2], i6289[3], 0, i6288, 'm_SelectOnUp')
  request.r(i6289[4], i6289[5], 0, i6288, 'm_SelectOnDown')
  request.r(i6289[6], i6289[7], 0, i6288, 'm_SelectOnLeft')
  request.r(i6289[8], i6289[9], 0, i6288, 'm_SelectOnRight')
  return i6288
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6290 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6291 = data
  i6290.m_NormalColor = new pc.Color(i6291[0], i6291[1], i6291[2], i6291[3])
  i6290.m_HighlightedColor = new pc.Color(i6291[4], i6291[5], i6291[6], i6291[7])
  i6290.m_PressedColor = new pc.Color(i6291[8], i6291[9], i6291[10], i6291[11])
  i6290.m_SelectedColor = new pc.Color(i6291[12], i6291[13], i6291[14], i6291[15])
  i6290.m_DisabledColor = new pc.Color(i6291[16], i6291[17], i6291[18], i6291[19])
  i6290.m_ColorMultiplier = i6291[20]
  i6290.m_FadeDuration = i6291[21]
  return i6290
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6292 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6293 = data
  request.r(i6293[0], i6293[1], 0, i6292, 'm_HighlightedSprite')
  request.r(i6293[2], i6293[3], 0, i6292, 'm_PressedSprite')
  request.r(i6293[4], i6293[5], 0, i6292, 'm_SelectedSprite')
  request.r(i6293[6], i6293[7], 0, i6292, 'm_DisabledSprite')
  return i6292
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6294 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6295 = data
  i6294.m_NormalTrigger = i6295[0]
  i6294.m_HighlightedTrigger = i6295[1]
  i6294.m_PressedTrigger = i6295[2]
  i6294.m_SelectedTrigger = i6295[3]
  i6294.m_DisabledTrigger = i6295[4]
  return i6294
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i6296 = root || request.c( 'TilesBag' )
  var i6297 = data
  var i6299 = i6297[0]
  var i6298 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i6299.length; i += 2) {
  request.r(i6299[i + 0], i6299[i + 1], 1, i6298, '')
  }
  i6296.slots = i6298
  return i6296
}

Deserializers["Deck"] = function (request, data, root) {
  var i6300 = root || request.c( 'Deck' )
  var i6301 = data
  request.r(i6301[0], i6301[1], 0, i6300, 'Game')
  return i6300
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i6302 = root || request.c( 'DeckLayer' )
  var i6303 = data
  i6302.layer = i6303[0]
  var i6305 = i6303[1]
  var i6304 = []
  for(var i = 0; i < i6305.length; i += 2) {
  request.r(i6305[i + 0], i6305[i + 1], 2, i6304, '')
  }
  i6302.Tiles = i6304
  return i6302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6309 = data
  i6308.ambientIntensity = i6309[0]
  i6308.reflectionIntensity = i6309[1]
  i6308.ambientMode = i6309[2]
  i6308.ambientLight = new pc.Color(i6309[3], i6309[4], i6309[5], i6309[6])
  i6308.ambientSkyColor = new pc.Color(i6309[7], i6309[8], i6309[9], i6309[10])
  i6308.ambientGroundColor = new pc.Color(i6309[11], i6309[12], i6309[13], i6309[14])
  i6308.ambientEquatorColor = new pc.Color(i6309[15], i6309[16], i6309[17], i6309[18])
  i6308.fogColor = new pc.Color(i6309[19], i6309[20], i6309[21], i6309[22])
  i6308.fogEndDistance = i6309[23]
  i6308.fogStartDistance = i6309[24]
  i6308.fogDensity = i6309[25]
  i6308.fog = !!i6309[26]
  request.r(i6309[27], i6309[28], 0, i6308, 'skybox')
  i6308.fogMode = i6309[29]
  var i6311 = i6309[30]
  var i6310 = []
  for(var i = 0; i < i6311.length; i += 1) {
    i6310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6311[i + 0]) );
  }
  i6308.lightmaps = i6310
  i6308.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6309[31], i6308.lightProbes)
  i6308.lightmapsMode = i6309[32]
  i6308.mixedBakeMode = i6309[33]
  i6308.environmentLightingMode = i6309[34]
  i6308.ambientProbe = new pc.SphericalHarmonicsL2(i6309[35])
  i6308.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6309[36])
  i6308.useReferenceAmbientProbe = !!i6309[37]
  request.r(i6309[38], i6309[39], 0, i6308, 'customReflection')
  request.r(i6309[40], i6309[41], 0, i6308, 'defaultReflection')
  i6308.defaultReflectionMode = i6309[42]
  i6308.defaultReflectionResolution = i6309[43]
  i6308.sunLightObjectId = i6309[44]
  i6308.pixelLightCount = i6309[45]
  i6308.defaultReflectionHDR = !!i6309[46]
  i6308.hasLightDataAsset = !!i6309[47]
  i6308.hasManualGenerate = !!i6309[48]
  return i6308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6315 = data
  request.r(i6315[0], i6315[1], 0, i6314, 'lightmapColor')
  request.r(i6315[2], i6315[3], 0, i6314, 'lightmapDirection')
  return i6314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6316 = root || new UnityEngine.LightProbes()
  var i6317 = data
  return i6316
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i6322 = root || request.c( 'TileLocker' )
  var i6323 = data
  request.r(i6323[0], i6323[1], 0, i6322, 'Game')
  i6322.enabled = !!i6323[2]
  i6322.lockDistance = i6323[3]
  return i6322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6325 = data
  request.r(i6325[0], i6325[1], 0, i6324, 'sharedMesh')
  return i6324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6327 = data
  request.r(i6327[0], i6327[1], 0, i6326, 'additionalVertexStreams')
  i6326.enabled = !!i6327[2]
  request.r(i6327[3], i6327[4], 0, i6326, 'sharedMaterial')
  var i6329 = i6327[5]
  var i6328 = []
  for(var i = 0; i < i6329.length; i += 2) {
  request.r(i6329[i + 0], i6329[i + 1], 2, i6328, '')
  }
  i6326.sharedMaterials = i6328
  i6326.receiveShadows = !!i6327[6]
  i6326.shadowCastingMode = i6327[7]
  i6326.sortingLayerID = i6327[8]
  i6326.sortingOrder = i6327[9]
  i6326.lightmapIndex = i6327[10]
  i6326.lightmapSceneIndex = i6327[11]
  i6326.lightmapScaleOffset = new pc.Vec4( i6327[12], i6327[13], i6327[14], i6327[15] )
  i6326.lightProbeUsage = i6327[16]
  i6326.reflectionProbeUsage = i6327[17]
  return i6326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6331 = data
  var i6333 = i6331[0]
  var i6332 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6333.length; i += 1) {
    i6332.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6333[i + 0]));
  }
  i6330.ShaderCompilationErrors = i6332
  i6330.name = i6331[1]
  i6330.guid = i6331[2]
  var i6335 = i6331[3]
  var i6334 = []
  for(var i = 0; i < i6335.length; i += 1) {
    i6334.push( i6335[i + 0] );
  }
  i6330.shaderDefinedKeywords = i6334
  var i6337 = i6331[4]
  var i6336 = []
  for(var i = 0; i < i6337.length; i += 1) {
    i6336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6337[i + 0]) );
  }
  i6330.passes = i6336
  var i6339 = i6331[5]
  var i6338 = []
  for(var i = 0; i < i6339.length; i += 1) {
    i6338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6339[i + 0]) );
  }
  i6330.usePasses = i6338
  var i6341 = i6331[6]
  var i6340 = []
  for(var i = 0; i < i6341.length; i += 1) {
    i6340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6341[i + 0]) );
  }
  i6330.defaultParameterValues = i6340
  request.r(i6331[7], i6331[8], 0, i6330, 'unityFallbackShader')
  i6330.readDepth = !!i6331[9]
  i6330.isCreatedByShaderGraph = !!i6331[10]
  i6330.usedBatchUniforms = i6331[11]
  return i6330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6345 = data
  i6344.shaderName = i6345[0]
  i6344.errorMessage = i6345[1]
  return i6344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6350 = root || new pc.UnityShaderPass()
  var i6351 = data
  i6350.id = i6351[0]
  i6350.subShaderIndex = i6351[1]
  i6350.name = i6351[2]
  i6350.passType = i6351[3]
  i6350.grabPassTextureName = i6351[4]
  i6350.usePass = !!i6351[5]
  i6350.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[6], i6350.zTest)
  i6350.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[7], i6350.zWrite)
  i6350.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[8], i6350.culling)
  i6350.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6351[9], i6350.blending)
  i6350.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6351[10], i6350.alphaBlending)
  i6350.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[11], i6350.colorWriteMask)
  i6350.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[12], i6350.offsetUnits)
  i6350.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[13], i6350.offsetFactor)
  i6350.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[14], i6350.stencilRef)
  i6350.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[15], i6350.stencilReadMask)
  i6350.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6351[16], i6350.stencilWriteMask)
  i6350.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6351[17], i6350.stencilOp)
  i6350.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6351[18], i6350.stencilOpFront)
  i6350.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6351[19], i6350.stencilOpBack)
  var i6353 = i6351[20]
  var i6352 = []
  for(var i = 0; i < i6353.length; i += 1) {
    i6352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6353[i + 0]) );
  }
  i6350.tags = i6352
  var i6355 = i6351[21]
  var i6354 = []
  for(var i = 0; i < i6355.length; i += 1) {
    i6354.push( i6355[i + 0] );
  }
  i6350.passDefinedKeywords = i6354
  var i6357 = i6351[22]
  var i6356 = []
  for(var i = 0; i < i6357.length; i += 1) {
    i6356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6357[i + 0]) );
  }
  i6350.passDefinedKeywordGroups = i6356
  var i6359 = i6351[23]
  var i6358 = []
  for(var i = 0; i < i6359.length; i += 1) {
    i6358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6359[i + 0]) );
  }
  i6350.variants = i6358
  var i6361 = i6351[24]
  var i6360 = []
  for(var i = 0; i < i6361.length; i += 1) {
    i6360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6361[i + 0]) );
  }
  i6350.excludedVariants = i6360
  i6350.hasDepthReader = !!i6351[25]
  return i6350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6363 = data
  i6362.val = i6363[0]
  i6362.name = i6363[1]
  return i6362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6365 = data
  i6364.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6365[0], i6364.src)
  i6364.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6365[1], i6364.dst)
  i6364.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6365[2], i6364.op)
  return i6364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6367 = data
  i6366.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6367[0], i6366.pass)
  i6366.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6367[1], i6366.fail)
  i6366.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6367[2], i6366.zFail)
  i6366.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6367[3], i6366.comp)
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6371 = data
  i6370.name = i6371[0]
  i6370.value = i6371[1]
  return i6370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6375 = data
  var i6377 = i6375[0]
  var i6376 = []
  for(var i = 0; i < i6377.length; i += 1) {
    i6376.push( i6377[i + 0] );
  }
  i6374.keywords = i6376
  i6374.hasDiscard = !!i6375[1]
  return i6374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6381 = data
  i6380.passId = i6381[0]
  i6380.subShaderIndex = i6381[1]
  var i6383 = i6381[2]
  var i6382 = []
  for(var i = 0; i < i6383.length; i += 1) {
    i6382.push( i6383[i + 0] );
  }
  i6380.keywords = i6382
  i6380.vertexProgram = i6381[3]
  i6380.fragmentProgram = i6381[4]
  i6380.compiledForWebGL2 = !!i6381[5]
  i6380.readDepth = !!i6381[6]
  return i6380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6387 = data
  request.r(i6387[0], i6387[1], 0, i6386, 'shader')
  i6386.pass = i6387[2]
  return i6386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6391 = data
  i6390.name = i6391[0]
  i6390.type = i6391[1]
  i6390.value = new pc.Vec4( i6391[2], i6391[3], i6391[4], i6391[5] )
  i6390.textureValue = i6391[6]
  i6390.shaderPropertyFlag = i6391[7]
  return i6390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6393 = data
  i6392.name = i6393[0]
  request.r(i6393[1], i6393[2], 0, i6392, 'texture')
  i6392.aabb = i6393[3]
  i6392.vertices = i6393[4]
  i6392.triangles = i6393[5]
  i6392.textureRect = UnityEngine.Rect.MinMaxRect(i6393[6], i6393[7], i6393[8], i6393[9])
  i6392.packedRect = UnityEngine.Rect.MinMaxRect(i6393[10], i6393[11], i6393[12], i6393[13])
  i6392.border = new pc.Vec4( i6393[14], i6393[15], i6393[16], i6393[17] )
  i6392.transparency = i6393[18]
  i6392.bounds = i6393[19]
  i6392.pixelsPerUnit = i6393[20]
  i6392.textureWidth = i6393[21]
  i6392.textureHeight = i6393[22]
  i6392.nativeSize = new pc.Vec2( i6393[23], i6393[24] )
  i6392.pivot = new pc.Vec2( i6393[25], i6393[26] )
  i6392.textureRectOffset = new pc.Vec2( i6393[27], i6393[28] )
  return i6392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6395 = data
  i6394.name = i6395[0]
  return i6394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6397 = data
  i6396.name = i6397[0]
  i6396.bytes64 = i6397[1]
  i6396.data = i6397[2]
  return i6396
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6398 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6399 = data
  i6398.hashCode = i6399[0]
  request.r(i6399[1], i6399[2], 0, i6398, 'material')
  i6398.materialHashCode = i6399[3]
  request.r(i6399[4], i6399[5], 0, i6398, 'atlas')
  i6398.normalStyle = i6399[6]
  i6398.normalSpacingOffset = i6399[7]
  i6398.boldStyle = i6399[8]
  i6398.boldSpacing = i6399[9]
  i6398.italicStyle = i6399[10]
  i6398.tabSize = i6399[11]
  i6398.m_Version = i6399[12]
  i6398.m_SourceFontFileGUID = i6399[13]
  request.r(i6399[14], i6399[15], 0, i6398, 'm_SourceFontFile_EditorRef')
  request.r(i6399[16], i6399[17], 0, i6398, 'm_SourceFontFile')
  i6398.m_AtlasPopulationMode = i6399[18]
  i6398.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6399[19], i6398.m_FaceInfo)
  var i6401 = i6399[20]
  var i6400 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6401.length; i += 1) {
    i6400.add(request.d('UnityEngine.TextCore.Glyph', i6401[i + 0]));
  }
  i6398.m_GlyphTable = i6400
  var i6403 = i6399[21]
  var i6402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6403.length; i += 1) {
    i6402.add(request.d('TMPro.TMP_Character', i6403[i + 0]));
  }
  i6398.m_CharacterTable = i6402
  var i6405 = i6399[22]
  var i6404 = []
  for(var i = 0; i < i6405.length; i += 2) {
  request.r(i6405[i + 0], i6405[i + 1], 2, i6404, '')
  }
  i6398.m_AtlasTextures = i6404
  i6398.m_AtlasTextureIndex = i6399[23]
  i6398.m_IsMultiAtlasTexturesEnabled = !!i6399[24]
  i6398.m_ClearDynamicDataOnBuild = !!i6399[25]
  var i6407 = i6399[26]
  var i6406 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6407.length; i += 1) {
    i6406.add(request.d('UnityEngine.TextCore.GlyphRect', i6407[i + 0]));
  }
  i6398.m_UsedGlyphRects = i6406
  var i6409 = i6399[27]
  var i6408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6409.length; i += 1) {
    i6408.add(request.d('UnityEngine.TextCore.GlyphRect', i6409[i + 0]));
  }
  i6398.m_FreeGlyphRects = i6408
  i6398.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6399[28], i6398.m_fontInfo)
  i6398.m_AtlasWidth = i6399[29]
  i6398.m_AtlasHeight = i6399[30]
  i6398.m_AtlasPadding = i6399[31]
  i6398.m_AtlasRenderMode = i6399[32]
  var i6411 = i6399[33]
  var i6410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6411.length; i += 1) {
    i6410.add(request.d('TMPro.TMP_Glyph', i6411[i + 0]));
  }
  i6398.m_glyphInfoList = i6410
  i6398.m_KerningTable = request.d('TMPro.KerningTable', i6399[34], i6398.m_KerningTable)
  i6398.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6399[35], i6398.m_FontFeatureTable)
  var i6413 = i6399[36]
  var i6412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6413.length; i += 2) {
  request.r(i6413[i + 0], i6413[i + 1], 1, i6412, '')
  }
  i6398.fallbackFontAssets = i6412
  var i6415 = i6399[37]
  var i6414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6415.length; i += 2) {
  request.r(i6415[i + 0], i6415[i + 1], 1, i6414, '')
  }
  i6398.m_FallbackFontAssetTable = i6414
  i6398.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6399[38], i6398.m_CreationSettings)
  var i6417 = i6399[39]
  var i6416 = []
  for(var i = 0; i < i6417.length; i += 1) {
    i6416.push( request.d('TMPro.TMP_FontWeightPair', i6417[i + 0]) );
  }
  i6398.m_FontWeightTable = i6416
  var i6419 = i6399[40]
  var i6418 = []
  for(var i = 0; i < i6419.length; i += 1) {
    i6418.push( request.d('TMPro.TMP_FontWeightPair', i6419[i + 0]) );
  }
  i6398.fontWeights = i6418
  return i6398
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6420 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6421 = data
  i6420.m_FaceIndex = i6421[0]
  i6420.m_FamilyName = i6421[1]
  i6420.m_StyleName = i6421[2]
  i6420.m_PointSize = i6421[3]
  i6420.m_Scale = i6421[4]
  i6420.m_UnitsPerEM = i6421[5]
  i6420.m_LineHeight = i6421[6]
  i6420.m_AscentLine = i6421[7]
  i6420.m_CapLine = i6421[8]
  i6420.m_MeanLine = i6421[9]
  i6420.m_Baseline = i6421[10]
  i6420.m_DescentLine = i6421[11]
  i6420.m_SuperscriptOffset = i6421[12]
  i6420.m_SuperscriptSize = i6421[13]
  i6420.m_SubscriptOffset = i6421[14]
  i6420.m_SubscriptSize = i6421[15]
  i6420.m_UnderlineOffset = i6421[16]
  i6420.m_UnderlineThickness = i6421[17]
  i6420.m_StrikethroughOffset = i6421[18]
  i6420.m_StrikethroughThickness = i6421[19]
  i6420.m_TabWidth = i6421[20]
  return i6420
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6424 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6425 = data
  i6424.m_Index = i6425[0]
  i6424.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6425[1], i6424.m_Metrics)
  i6424.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6425[2], i6424.m_GlyphRect)
  i6424.m_Scale = i6425[3]
  i6424.m_AtlasIndex = i6425[4]
  i6424.m_ClassDefinitionType = i6425[5]
  return i6424
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6426 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6427 = data
  i6426.m_Width = i6427[0]
  i6426.m_Height = i6427[1]
  i6426.m_HorizontalBearingX = i6427[2]
  i6426.m_HorizontalBearingY = i6427[3]
  i6426.m_HorizontalAdvance = i6427[4]
  return i6426
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6428 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6429 = data
  i6428.m_X = i6429[0]
  i6428.m_Y = i6429[1]
  i6428.m_Width = i6429[2]
  i6428.m_Height = i6429[3]
  return i6428
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6432 = root || request.c( 'TMPro.TMP_Character' )
  var i6433 = data
  i6432.m_ElementType = i6433[0]
  i6432.m_Unicode = i6433[1]
  i6432.m_GlyphIndex = i6433[2]
  i6432.m_Scale = i6433[3]
  return i6432
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6438 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6439 = data
  i6438.Name = i6439[0]
  i6438.PointSize = i6439[1]
  i6438.Scale = i6439[2]
  i6438.CharacterCount = i6439[3]
  i6438.LineHeight = i6439[4]
  i6438.Baseline = i6439[5]
  i6438.Ascender = i6439[6]
  i6438.CapHeight = i6439[7]
  i6438.Descender = i6439[8]
  i6438.CenterLine = i6439[9]
  i6438.SuperscriptOffset = i6439[10]
  i6438.SubscriptOffset = i6439[11]
  i6438.SubSize = i6439[12]
  i6438.Underline = i6439[13]
  i6438.UnderlineThickness = i6439[14]
  i6438.strikethrough = i6439[15]
  i6438.strikethroughThickness = i6439[16]
  i6438.TabWidth = i6439[17]
  i6438.Padding = i6439[18]
  i6438.AtlasWidth = i6439[19]
  i6438.AtlasHeight = i6439[20]
  return i6438
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6442 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6443 = data
  i6442.id = i6443[0]
  i6442.x = i6443[1]
  i6442.y = i6443[2]
  i6442.width = i6443[3]
  i6442.height = i6443[4]
  i6442.xOffset = i6443[5]
  i6442.yOffset = i6443[6]
  i6442.xAdvance = i6443[7]
  i6442.scale = i6443[8]
  return i6442
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6444 = root || request.c( 'TMPro.KerningTable' )
  var i6445 = data
  var i6447 = i6445[0]
  var i6446 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6447.length; i += 1) {
    i6446.add(request.d('TMPro.KerningPair', i6447[i + 0]));
  }
  i6444.kerningPairs = i6446
  return i6444
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6450 = root || request.c( 'TMPro.KerningPair' )
  var i6451 = data
  i6450.xOffset = i6451[0]
  i6450.m_FirstGlyph = i6451[1]
  i6450.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6451[2], i6450.m_FirstGlyphAdjustments)
  i6450.m_SecondGlyph = i6451[3]
  i6450.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6451[4], i6450.m_SecondGlyphAdjustments)
  i6450.m_IgnoreSpacingAdjustments = !!i6451[5]
  return i6450
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6452 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6453 = data
  var i6455 = i6453[0]
  var i6454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6455.length; i += 1) {
    i6454.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6455[i + 0]));
  }
  i6452.m_GlyphPairAdjustmentRecords = i6454
  return i6452
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6458 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6459 = data
  i6458.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6459[0], i6458.m_FirstAdjustmentRecord)
  i6458.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6459[1], i6458.m_SecondAdjustmentRecord)
  i6458.m_FeatureLookupFlags = i6459[2]
  return i6458
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6460 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i6461 = data
  i6460.m_GlyphIndex = i6461[0]
  i6460.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i6461[1], i6460.m_GlyphValueRecord)
  return i6460
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i6462 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i6463 = data
  i6462.m_XPlacement = i6463[0]
  i6462.m_YPlacement = i6463[1]
  i6462.m_XAdvance = i6463[2]
  i6462.m_YAdvance = i6463[3]
  return i6462
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6466 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6467 = data
  i6466.sourceFontFileName = i6467[0]
  i6466.sourceFontFileGUID = i6467[1]
  i6466.pointSizeSamplingMode = i6467[2]
  i6466.pointSize = i6467[3]
  i6466.padding = i6467[4]
  i6466.packingMode = i6467[5]
  i6466.atlasWidth = i6467[6]
  i6466.atlasHeight = i6467[7]
  i6466.characterSetSelectionMode = i6467[8]
  i6466.characterSequence = i6467[9]
  i6466.referencedFontAssetGUID = i6467[10]
  i6466.referencedTextAssetGUID = i6467[11]
  i6466.fontStyle = i6467[12]
  i6466.fontStyleModifier = i6467[13]
  i6466.renderMode = i6467[14]
  i6466.includeFontFeatures = !!i6467[15]
  return i6466
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6470 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6471 = data
  request.r(i6471[0], i6471[1], 0, i6470, 'regularTypeface')
  request.r(i6471[2], i6471[3], 0, i6470, 'italicTypeface')
  return i6470
}

Deserializers["TileSO"] = function (request, data, root) {
  var i6472 = root || request.c( 'TileSO' )
  var i6473 = data
  request.r(i6473[0], i6473[1], 0, i6472, 'icon')
  return i6472
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6474 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6475 = data
  i6474.hashCode = i6475[0]
  request.r(i6475[1], i6475[2], 0, i6474, 'material')
  i6474.materialHashCode = i6475[3]
  request.r(i6475[4], i6475[5], 0, i6474, 'spriteSheet')
  var i6477 = i6475[6]
  var i6476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6477.length; i += 1) {
    i6476.add(request.d('TMPro.TMP_Sprite', i6477[i + 0]));
  }
  i6474.spriteInfoList = i6476
  var i6479 = i6475[7]
  var i6478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6479.length; i += 2) {
  request.r(i6479[i + 0], i6479[i + 1], 1, i6478, '')
  }
  i6474.fallbackSpriteAssets = i6478
  i6474.m_Version = i6475[8]
  i6474.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6475[9], i6474.m_FaceInfo)
  var i6481 = i6475[10]
  var i6480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6481.length; i += 1) {
    i6480.add(request.d('TMPro.TMP_SpriteCharacter', i6481[i + 0]));
  }
  i6474.m_SpriteCharacterTable = i6480
  var i6483 = i6475[11]
  var i6482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6483.length; i += 1) {
    i6482.add(request.d('TMPro.TMP_SpriteGlyph', i6483[i + 0]));
  }
  i6474.m_SpriteGlyphTable = i6482
  return i6474
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6486 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6487 = data
  i6486.name = i6487[0]
  i6486.hashCode = i6487[1]
  i6486.unicode = i6487[2]
  i6486.pivot = new pc.Vec2( i6487[3], i6487[4] )
  request.r(i6487[5], i6487[6], 0, i6486, 'sprite')
  i6486.id = i6487[7]
  i6486.x = i6487[8]
  i6486.y = i6487[9]
  i6486.width = i6487[10]
  i6486.height = i6487[11]
  i6486.xOffset = i6487[12]
  i6486.yOffset = i6487[13]
  i6486.xAdvance = i6487[14]
  i6486.scale = i6487[15]
  return i6486
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6492 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6493 = data
  i6492.m_Name = i6493[0]
  i6492.m_HashCode = i6493[1]
  i6492.m_ElementType = i6493[2]
  i6492.m_Unicode = i6493[3]
  i6492.m_GlyphIndex = i6493[4]
  i6492.m_Scale = i6493[5]
  return i6492
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6496 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6497 = data
  request.r(i6497[0], i6497[1], 0, i6496, 'sprite')
  i6496.m_Index = i6497[2]
  i6496.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6497[3], i6496.m_Metrics)
  i6496.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6497[4], i6496.m_GlyphRect)
  i6496.m_Scale = i6497[5]
  i6496.m_AtlasIndex = i6497[6]
  i6496.m_ClassDefinitionType = i6497[7]
  return i6496
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6498 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6499 = data
  var i6501 = i6499[0]
  var i6500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6501.length; i += 1) {
    i6500.add(request.d('TMPro.TMP_Style', i6501[i + 0]));
  }
  i6498.m_StyleList = i6500
  return i6498
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6504 = root || request.c( 'TMPro.TMP_Style' )
  var i6505 = data
  i6504.m_Name = i6505[0]
  i6504.m_HashCode = i6505[1]
  i6504.m_OpeningDefinition = i6505[2]
  i6504.m_ClosingDefinition = i6505[3]
  i6504.m_OpeningTagArray = i6505[4]
  i6504.m_ClosingTagArray = i6505[5]
  i6504.m_OpeningTagUnicodeArray = i6505[6]
  i6504.m_ClosingTagUnicodeArray = i6505[7]
  return i6504
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6506 = root || request.c( 'TMPro.TMP_Settings' )
  var i6507 = data
  i6506.m_enableWordWrapping = !!i6507[0]
  i6506.m_enableKerning = !!i6507[1]
  i6506.m_enableExtraPadding = !!i6507[2]
  i6506.m_enableTintAllSprites = !!i6507[3]
  i6506.m_enableParseEscapeCharacters = !!i6507[4]
  i6506.m_EnableRaycastTarget = !!i6507[5]
  i6506.m_GetFontFeaturesAtRuntime = !!i6507[6]
  i6506.m_missingGlyphCharacter = i6507[7]
  i6506.m_warningsDisabled = !!i6507[8]
  request.r(i6507[9], i6507[10], 0, i6506, 'm_defaultFontAsset')
  i6506.m_defaultFontAssetPath = i6507[11]
  i6506.m_defaultFontSize = i6507[12]
  i6506.m_defaultAutoSizeMinRatio = i6507[13]
  i6506.m_defaultAutoSizeMaxRatio = i6507[14]
  i6506.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6507[15], i6507[16] )
  i6506.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6507[17], i6507[18] )
  i6506.m_autoSizeTextContainer = !!i6507[19]
  i6506.m_IsTextObjectScaleStatic = !!i6507[20]
  var i6509 = i6507[21]
  var i6508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6509.length; i += 2) {
  request.r(i6509[i + 0], i6509[i + 1], 1, i6508, '')
  }
  i6506.m_fallbackFontAssets = i6508
  i6506.m_matchMaterialPreset = !!i6507[22]
  request.r(i6507[23], i6507[24], 0, i6506, 'm_defaultSpriteAsset')
  i6506.m_defaultSpriteAssetPath = i6507[25]
  i6506.m_enableEmojiSupport = !!i6507[26]
  i6506.m_MissingCharacterSpriteUnicode = i6507[27]
  i6506.m_defaultColorGradientPresetsPath = i6507[28]
  request.r(i6507[29], i6507[30], 0, i6506, 'm_defaultStyleSheet')
  i6506.m_StyleSheetsResourcePath = i6507[31]
  request.r(i6507[32], i6507[33], 0, i6506, 'm_leadingCharacters')
  request.r(i6507[34], i6507[35], 0, i6506, 'm_followingCharacters')
  i6506.m_UseModernHangulLineBreakingRules = !!i6507[36]
  return i6506
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i6510 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i6511 = data
  i6510._svcLunaVersion = i6511[0]
  var i6513 = i6511[1]
  var i6512 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i6513.length; i += 1) {
    i6512.add(request.d(' .  ', i6513[i + 0]));
  }
  i6510._shaderVariants = i6512
  var i6515 = i6511[2]
  var i6514 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i6515.length; i += 1) {
    i6514.add(request.d(' .  ', i6515[i + 0]));
  }
  i6510._usedByLunaBuild = i6514
  var i6517 = i6511[3]
  var i6516 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i6517.length; i += 1) {
    i6516.add(request.d(' .  ', i6517[i + 0]));
  }
  i6510._includedShaderVariants = i6516
  var i6519 = i6511[4]
  var i6518 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i6519.length; i += 1) {
    i6518.add(request.d(' .  ', i6519[i + 0]));
  }
  i6510._excludedShaderVariants = i6518
  i6510.version = System.Int64(i6511[5])
  var i6521 = i6511[6]
  var i6520 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i6521.length; i += 1) {
    i6520.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i6521[i + 0]));
  }
  i6510._shaderParsedShaders = i6520
  var i6523 = i6511[7]
  var i6522 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i6523.length; i += 1) {
    i6522.add(i6523[i + 0]);
  }
  i6510._modifiedShaders = i6522
  i6510.invalidShaders = !!i6511[8]
  i6510._cachedShadersPlatform = i6511[9]
  i6510._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i6511[10], i6510._sceneLightData)
  return i6510
}

Deserializers[" .  "] = function (request, data, root) {
  var i6526 = root || request.c( ' .  ' )
  var i6527 = data
  request.r(i6527[0], i6527[1], 0, i6526, 'shader')
  i6526.passType = i6527[2]
  i6526.passId = i6527[3]
  i6526.subShaderIndex = i6527[4]
  i6526.upToDate = !!i6527[5]
  var i6529 = i6527[6]
  var i6528 = []
  for(var i = 0; i < i6529.length; i += 1) {
    i6528.push( i6529[i + 0] );
  }
  i6526.keywords = i6528
  return i6526
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i6532 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i6533 = data
  var i6535 = i6533[0]
  var i6534 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i6535.length; i += 1) {
    i6534.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i6535[i + 0]));
  }
  i6532.ParsedSubShaders = i6534
  request.r(i6533[1], i6533[2], 0, i6532, 'Shader')
  i6532.ShaderPath = i6533[3]
  var i6537 = i6533[4]
  var i6536 = []
  for(var i = 0; i < i6537.length; i += 1) {
    i6536.push( i6537[i + 0] );
  }
  i6532.ShaderDefinedKeywords = i6536
  request.r(i6533[5], i6533[6], 0, i6532, 'fallbackShader')
  var i6539 = i6533[7]
  var i6538 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i6539.length; i += 1) {
    i6538.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i6539[i + 0]));
  }
  i6532.CompilationErrors = i6538
  i6532.shaderCompilerPlatform = i6533[8]
  return i6532
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i6543 = data
  i6542.Index = i6543[0]
  var i6545 = i6543[1]
  var i6544 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i6545.length; i += 1) {
    i6544.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i6545[i + 0]));
  }
  i6542.Passes = i6544
  var i6547 = i6543[2]
  var i6546 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i6547.length; i += 1) {
    i6546.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i6547[i + 0]));
  }
  i6542.Tags = i6546
  i6542.UsePass = !!i6543[3]
  return i6542
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i6550 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i6551 = data
  i6550.ShaderName = i6551[0]
  var i6553 = i6551[1]
  var i6552 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i6553.length; i += 1) {
    i6552.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i6553[i + 0]));
  }
  i6550.ShaderVariants = i6552
  var i6555 = i6551[2]
  var i6554 = []
  for(var i = 0; i < i6555.length; i += 1) {
    i6554.push( i6555[i + 0] );
  }
  i6550.definedKeywords = i6554
  var i6557 = i6551[3]
  var i6556 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i6557.length; i += 1) {
    i6556.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i6557[i + 0]));
  }
  i6550.keywordGroups = i6556
  i6550.KeywordsMinimalCardinality = i6551[4]
  i6550.ContainsInvalidVariant = !!i6551[5]
  i6550.ShaderCompilerPlatform = i6551[6]
  i6550.HasDepthReader = !!i6551[7]
  i6550.Id = i6551[8]
  i6550.SubShaderIndex = i6551[9]
  i6550.SerializedObjectId = i6551[10]
  var i6559 = i6551[11]
  var i6558 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i6559.length; i += 1) {
    i6558.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i6559[i + 0]));
  }
  i6550.Tags = i6558
  i6550.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i6551[12], i6550.UsePass)
  i6550.GrabPassTextureName = i6551[13]
  i6550.PassShaderRequirements = i6551[14]
  i6550.PlatformMask = i6551[15]
  return i6550
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i6562 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i6563 = data
  i6562.NoShaderVariant = !!i6563[0]
  i6562.VertexProgram = i6563[1]
  i6562.FragmentProgram = i6563[2]
  i6562.LOD = i6563[3]
  i6562.readDepth = !!i6563[4]
  i6562.Index = i6563[5]
  i6562.PassId = i6563[6]
  i6562.SubShaderIndex = i6563[7]
  var i6565 = i6563[8]
  var i6564 = []
  for(var i = 0; i < i6565.length; i += 1) {
    i6564.push( i6565[i + 0] );
  }
  i6562.Keywords = i6564
  var i6567 = i6563[9]
  var i6566 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i6567.length; i += 1) {
    i6566.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i6567[i + 0]));
  }
  i6562.Tags = i6566
  return i6562
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i6570 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i6571 = data
  i6570.Key = i6571[0]
  i6570.Value = i6571[1]
  return i6570
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i6574 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i6575 = data
  var i6577 = i6575[0]
  var i6576 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i6577.length; i += 1) {
    i6576.add(i6577[i + 0]);
  }
  i6574.Keywords = i6576
  return i6574
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i6578 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i6579 = data
  i6578.shader = i6579[0]
  i6578.pass = i6579[1]
  return i6578
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i6582 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i6583 = data
  i6582.ShaderName = i6583[0]
  var i6585 = i6583[1]
  var i6584 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i6585.length; i += 1) {
    i6584.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i6585[i + 0]));
  }
  i6582.Details = i6584
  return i6582
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i6588 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i6589 = data
  i6588.PointLightCount = i6589[0]
  i6588.SpotLightCount = i6589[1]
  i6588.DirectionalLightCount = i6589[2]
  i6588.LightmapOn = !!i6589[3]
  i6588.DirlightmapCombined = !!i6589[4]
  i6588.DirectionalCookieExists = !!i6589[5]
  i6588.PointCookieExists = !!i6589[6]
  i6588.SpotCookieExists = !!i6589[7]
  i6588.AddiitonalLightsKeywordRequired = !!i6589[8]
  return i6588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6591 = data
  var i6593 = i6591[0]
  var i6592 = []
  for(var i = 0; i < i6593.length; i += 1) {
    i6592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6593[i + 0]) );
  }
  i6590.files = i6592
  i6590.componentToPrefabIds = i6591[1]
  return i6590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6597 = data
  i6596.path = i6597[0]
  request.r(i6597[1], i6597[2], 0, i6596, 'unityObject')
  return i6596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6599 = data
  var i6601 = i6599[0]
  var i6600 = []
  for(var i = 0; i < i6601.length; i += 1) {
    i6600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6601[i + 0]) );
  }
  i6598.scriptsExecutionOrder = i6600
  var i6603 = i6599[1]
  var i6602 = []
  for(var i = 0; i < i6603.length; i += 1) {
    i6602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6603[i + 0]) );
  }
  i6598.sortingLayers = i6602
  var i6605 = i6599[2]
  var i6604 = []
  for(var i = 0; i < i6605.length; i += 1) {
    i6604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6605[i + 0]) );
  }
  i6598.cullingLayers = i6604
  i6598.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6599[3], i6598.timeSettings)
  i6598.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6599[4], i6598.physicsSettings)
  i6598.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6599[5], i6598.physics2DSettings)
  i6598.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6599[6], i6598.qualitySettings)
  i6598.enableRealtimeShadows = !!i6599[7]
  i6598.enableAutoInstancing = !!i6599[8]
  i6598.enableDynamicBatching = !!i6599[9]
  i6598.lightmapEncodingQuality = i6599[10]
  i6598.desiredColorSpace = i6599[11]
  var i6607 = i6599[12]
  var i6606 = []
  for(var i = 0; i < i6607.length; i += 1) {
    i6606.push( i6607[i + 0] );
  }
  i6598.allTags = i6606
  return i6598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6611 = data
  i6610.name = i6611[0]
  i6610.value = i6611[1]
  return i6610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6615 = data
  i6614.id = i6615[0]
  i6614.name = i6615[1]
  i6614.value = i6615[2]
  return i6614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6619 = data
  i6618.id = i6619[0]
  i6618.name = i6619[1]
  return i6618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6621 = data
  i6620.fixedDeltaTime = i6621[0]
  i6620.maximumDeltaTime = i6621[1]
  i6620.timeScale = i6621[2]
  i6620.maximumParticleTimestep = i6621[3]
  return i6620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6623 = data
  i6622.gravity = new pc.Vec3( i6623[0], i6623[1], i6623[2] )
  i6622.defaultSolverIterations = i6623[3]
  i6622.bounceThreshold = i6623[4]
  i6622.autoSyncTransforms = !!i6623[5]
  i6622.autoSimulation = !!i6623[6]
  var i6625 = i6623[7]
  var i6624 = []
  for(var i = 0; i < i6625.length; i += 1) {
    i6624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6625[i + 0]) );
  }
  i6622.collisionMatrix = i6624
  return i6622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6629 = data
  i6628.enabled = !!i6629[0]
  i6628.layerId = i6629[1]
  i6628.otherLayerId = i6629[2]
  return i6628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6631 = data
  request.r(i6631[0], i6631[1], 0, i6630, 'material')
  i6630.gravity = new pc.Vec2( i6631[2], i6631[3] )
  i6630.positionIterations = i6631[4]
  i6630.velocityIterations = i6631[5]
  i6630.velocityThreshold = i6631[6]
  i6630.maxLinearCorrection = i6631[7]
  i6630.maxAngularCorrection = i6631[8]
  i6630.maxTranslationSpeed = i6631[9]
  i6630.maxRotationSpeed = i6631[10]
  i6630.baumgarteScale = i6631[11]
  i6630.baumgarteTOIScale = i6631[12]
  i6630.timeToSleep = i6631[13]
  i6630.linearSleepTolerance = i6631[14]
  i6630.angularSleepTolerance = i6631[15]
  i6630.defaultContactOffset = i6631[16]
  i6630.autoSimulation = !!i6631[17]
  i6630.queriesHitTriggers = !!i6631[18]
  i6630.queriesStartInColliders = !!i6631[19]
  i6630.callbacksOnDisable = !!i6631[20]
  i6630.reuseCollisionCallbacks = !!i6631[21]
  i6630.autoSyncTransforms = !!i6631[22]
  var i6633 = i6631[23]
  var i6632 = []
  for(var i = 0; i < i6633.length; i += 1) {
    i6632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6633[i + 0]) );
  }
  i6630.collisionMatrix = i6632
  return i6630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6637 = data
  i6636.enabled = !!i6637[0]
  i6636.layerId = i6637[1]
  i6636.otherLayerId = i6637[2]
  return i6636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6639 = data
  var i6641 = i6639[0]
  var i6640 = []
  for(var i = 0; i < i6641.length; i += 1) {
    i6640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6641[i + 0]) );
  }
  i6638.qualityLevels = i6640
  var i6643 = i6639[1]
  var i6642 = []
  for(var i = 0; i < i6643.length; i += 1) {
    i6642.push( i6643[i + 0] );
  }
  i6638.names = i6642
  i6638.shadows = i6639[2]
  i6638.anisotropicFiltering = i6639[3]
  i6638.antiAliasing = i6639[4]
  i6638.lodBias = i6639[5]
  i6638.shadowCascades = i6639[6]
  i6638.shadowDistance = i6639[7]
  i6638.shadowmaskMode = i6639[8]
  i6638.shadowProjection = i6639[9]
  i6638.shadowResolution = i6639[10]
  i6638.softParticles = !!i6639[11]
  i6638.softVegetation = !!i6639[12]
  i6638.activeColorSpace = i6639[13]
  i6638.desiredColorSpace = i6639[14]
  i6638.masterTextureLimit = i6639[15]
  i6638.maxQueuedFrames = i6639[16]
  i6638.particleRaycastBudget = i6639[17]
  i6638.pixelLightCount = i6639[18]
  i6638.realtimeReflectionProbes = !!i6639[19]
  i6638.shadowCascade2Split = i6639[20]
  i6638.shadowCascade4Split = new pc.Vec3( i6639[21], i6639[22], i6639[23] )
  i6638.streamingMipmapsActive = !!i6639[24]
  i6638.vSyncCount = i6639[25]
  i6638.asyncUploadBufferSize = i6639[26]
  i6638.asyncUploadTimeSlice = i6639[27]
  i6638.billboardsFaceCameraPosition = !!i6639[28]
  i6638.shadowNearPlaneOffset = i6639[29]
  i6638.streamingMipmapsMemoryBudget = i6639[30]
  i6638.maximumLODLevel = i6639[31]
  i6638.streamingMipmapsAddAllCameras = !!i6639[32]
  i6638.streamingMipmapsMaxLevelReduction = i6639[33]
  i6638.streamingMipmapsRenderersPerFrame = i6639[34]
  i6638.resolutionScalingFixedDPIFactor = i6639[35]
  i6638.streamingMipmapsMaxFileIORequests = i6639[36]
  i6638.currentQualityLevel = i6639[37]
  return i6638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6649 = data
  i6648.weight = i6649[0]
  i6648.vertices = i6649[1]
  i6648.normals = i6649[2]
  i6648.tangents = i6649[3]
  return i6648
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6650 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6651 = data
  i6650.xPlacement = i6651[0]
  i6650.yPlacement = i6651[1]
  i6650.xAdvance = i6651[2]
  i6650.yAdvance = i6651[3]
  return i6650
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i6654 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i6655 = data
  i6654.SubShaderIndex = i6655[0]
  i6654.PassId = i6655[1]
  var i6657 = i6655[2]
  var i6656 = []
  for(var i = 0; i < i6657.length; i += 1) {
    i6656.push( i6657[i + 0] );
  }
  i6654.ShaderVariantKeywords = i6656
  var i6659 = i6655[3]
  var i6658 = []
  for(var i = 0; i < i6659.length; i += 1) {
    i6658.push( i6659[i + 0] );
  }
  i6654.Messages = i6658
  return i6654
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[76],"77":[25],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[87],"95":[87],"96":[87],"97":[87],"98":[87],"99":[87],"100":[25],"101":[62],"102":[103],"104":[103],"45":[7],"105":[25],"106":[7],"107":[62,7],"12":[7,13],"108":[7],"109":[13,7],"110":[62],"111":[13,7],"112":[7],"113":[114],"115":[7],"116":[7],"53":[45],"11":[13,7],"117":[7],"52":[45],"118":[7],"56":[7],"55":[7],"119":[7],"120":[7],"121":[7],"122":[7],"123":[7],"124":[7],"125":[13,7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[13,7],"131":[7],"132":[27],"133":[27],"28":[27],"134":[27],"135":[25],"136":[25],"137":[114],"138":[18],"139":[140],"141":[114]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","QuestSlot","TileSO","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","Tile","UnityEngine.SpriteRenderer","UnityEngine.TrailRenderer","AnimationScale","TileMovement","TileLockAnimation","TileSlot","AnimationScaleLooped","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileActions","TileLockerBox2D","TilesBag","TileSpawnAnimation","TileMatcher","LoseCondition","WinCondition","InputTouch","EndCard","Quest","TileRandomSpawner","TileSpawner","UnityEngine.GameObject","TileBagSorter","UnityEngine.Canvas","SlideAnimationUI","UnityEngine.AudioSource","UnityEngine.AudioClip","Sounds","Tutorial","TutorialPointer","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResetLocalPosition","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.GridLayoutGroup","Sweeling","UnityEngine.UI.Button","DeckLayer","TileLocker","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "3.2";

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

Deserializers.buildID = "2c0f4a3b-93a3-4210-a82e-b07c505118e1";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

