var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.JointSpring' )
  var i3241 = data
  i3240.spring = i3241[0]
  i3240.damper = i3241[1]
  i3240.targetPosition = i3241[2]
  return i3240
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3242 = root || request.c( 'UnityEngine.JointMotor' )
  var i3243 = data
  i3242.m_TargetVelocity = i3243[0]
  i3242.m_Force = i3243[1]
  i3242.m_FreeSpin = i3243[2]
  return i3242
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.JointLimits' )
  var i3245 = data
  i3244.m_Min = i3245[0]
  i3244.m_Max = i3245[1]
  i3244.m_Bounciness = i3245[2]
  i3244.m_BounceMinVelocity = i3245[3]
  i3244.m_ContactDistance = i3245[4]
  i3244.minBounce = i3245[5]
  i3244.maxBounce = i3245[6]
  return i3244
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.JointDrive' )
  var i3247 = data
  i3246.m_PositionSpring = i3247[0]
  i3246.m_PositionDamper = i3247[1]
  i3246.m_MaximumForce = i3247[2]
  return i3246
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3248 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3249 = data
  i3248.m_Spring = i3249[0]
  i3248.m_Damper = i3249[1]
  return i3248
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3251 = data
  i3250.m_Limit = i3251[0]
  i3250.m_Bounciness = i3251[1]
  i3250.m_ContactDistance = i3251[2]
  return i3250
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3252 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3253 = data
  i3252.m_ExtremumSlip = i3253[0]
  i3252.m_ExtremumValue = i3253[1]
  i3252.m_AsymptoteSlip = i3253[2]
  i3252.m_AsymptoteValue = i3253[3]
  i3252.m_Stiffness = i3253[4]
  return i3252
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3255 = data
  i3254.m_LowerAngle = i3255[0]
  i3254.m_UpperAngle = i3255[1]
  return i3254
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3256 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3257 = data
  i3256.m_MotorSpeed = i3257[0]
  i3256.m_MaximumMotorTorque = i3257[1]
  return i3256
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3258 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3259 = data
  i3258.m_DampingRatio = i3259[0]
  i3258.m_Frequency = i3259[1]
  i3258.m_Angle = i3259[2]
  return i3258
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3260 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3261 = data
  i3260.m_LowerTranslation = i3261[0]
  i3260.m_UpperTranslation = i3261[1]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3262 = root || new pc.UnityMaterial()
  var i3263 = data
  i3262.name = i3263[0]
  request.r(i3263[1], i3263[2], 0, i3262, 'shader')
  i3262.renderQueue = i3263[3]
  i3262.enableInstancing = !!i3263[4]
  var i3265 = i3263[5]
  var i3264 = []
  for(var i = 0; i < i3265.length; i += 1) {
    i3264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3265[i + 0]) );
  }
  i3262.floatParameters = i3264
  var i3267 = i3263[6]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3267[i + 0]) );
  }
  i3262.colorParameters = i3266
  var i3269 = i3263[7]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3269[i + 0]) );
  }
  i3262.vectorParameters = i3268
  var i3271 = i3263[8]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3271[i + 0]) );
  }
  i3262.textureParameters = i3270
  var i3273 = i3263[9]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 1) {
    i3272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3273[i + 0]) );
  }
  i3262.materialFlags = i3272
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.value = i3277[1]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3281 = data
  i3280.name = i3281[0]
  i3280.value = new pc.Color(i3281[1], i3281[2], i3281[3], i3281[4])
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3285 = data
  i3284.name = i3285[0]
  i3284.value = new pc.Vec4( i3285[1], i3285[2], i3285[3], i3285[4] )
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3289 = data
  i3288.name = i3289[0]
  request.r(i3289[1], i3289[2], 0, i3288, 'value')
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3293 = data
  i3292.name = i3293[0]
  i3292.enabled = !!i3293[1]
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3295 = data
  i3294.name = i3295[0]
  i3294.width = i3295[1]
  i3294.height = i3295[2]
  i3294.mipmapCount = i3295[3]
  i3294.anisoLevel = i3295[4]
  i3294.filterMode = i3295[5]
  i3294.hdr = !!i3295[6]
  i3294.format = i3295[7]
  i3294.wrapMode = i3295[8]
  i3294.alphaIsTransparency = !!i3295[9]
  i3294.alphaSource = i3295[10]
  i3294.graphicsFormat = i3295[11]
  i3294.sRGBTexture = !!i3295[12]
  i3294.desiredColorSpace = i3295[13]
  i3294.wrapU = i3295[14]
  i3294.wrapV = i3295[15]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3297 = data
  i3296.position = new pc.Vec3( i3297[0], i3297[1], i3297[2] )
  i3296.scale = new pc.Vec3( i3297[3], i3297[4], i3297[5] )
  i3296.rotation = new pc.Quat(i3297[6], i3297[7], i3297[8], i3297[9])
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3299 = data
  i3298.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3299[0], i3298.main)
  i3298.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3299[1], i3298.colorBySpeed)
  i3298.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3299[2], i3298.colorOverLifetime)
  i3298.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3299[3], i3298.emission)
  i3298.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3299[4], i3298.rotationBySpeed)
  i3298.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3299[5], i3298.rotationOverLifetime)
  i3298.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3299[6], i3298.shape)
  i3298.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3299[7], i3298.sizeBySpeed)
  i3298.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3299[8], i3298.sizeOverLifetime)
  i3298.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3299[9], i3298.textureSheetAnimation)
  i3298.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3299[10], i3298.velocityOverLifetime)
  i3298.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3299[11], i3298.noise)
  i3298.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3299[12], i3298.inheritVelocity)
  i3298.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3299[13], i3298.forceOverLifetime)
  i3298.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3299[14], i3298.limitVelocityOverLifetime)
  i3298.useAutoRandomSeed = !!i3299[15]
  i3298.randomSeed = i3299[16]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3300 = root || new pc.ParticleSystemMain()
  var i3301 = data
  i3300.duration = i3301[0]
  i3300.loop = !!i3301[1]
  i3300.prewarm = !!i3301[2]
  i3300.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[3], i3300.startDelay)
  i3300.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[4], i3300.startLifetime)
  i3300.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[5], i3300.startSpeed)
  i3300.startSize3D = !!i3301[6]
  i3300.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[7], i3300.startSizeX)
  i3300.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[8], i3300.startSizeY)
  i3300.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[9], i3300.startSizeZ)
  i3300.startRotation3D = !!i3301[10]
  i3300.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[11], i3300.startRotationX)
  i3300.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[12], i3300.startRotationY)
  i3300.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[13], i3300.startRotationZ)
  i3300.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3301[14], i3300.startColor)
  i3300.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[15], i3300.gravityModifier)
  i3300.simulationSpace = i3301[16]
  request.r(i3301[17], i3301[18], 0, i3300, 'customSimulationSpace')
  i3300.simulationSpeed = i3301[19]
  i3300.useUnscaledTime = !!i3301[20]
  i3300.scalingMode = i3301[21]
  i3300.playOnAwake = !!i3301[22]
  i3300.maxParticles = i3301[23]
  i3300.emitterVelocityMode = i3301[24]
  i3300.stopAction = i3301[25]
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3302 = root || new pc.MinMaxCurve()
  var i3303 = data
  i3302.mode = i3303[0]
  i3302.curveMin = new pc.AnimationCurve( { keys_flow: i3303[1] } )
  i3302.curveMax = new pc.AnimationCurve( { keys_flow: i3303[2] } )
  i3302.curveMultiplier = i3303[3]
  i3302.constantMin = i3303[4]
  i3302.constantMax = i3303[5]
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3304 = root || new pc.MinMaxGradient()
  var i3305 = data
  i3304.mode = i3305[0]
  i3304.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3305[1], i3304.gradientMin)
  i3304.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3305[2], i3304.gradientMax)
  i3304.colorMin = new pc.Color(i3305[3], i3305[4], i3305[5], i3305[6])
  i3304.colorMax = new pc.Color(i3305[7], i3305[8], i3305[9], i3305[10])
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3307 = data
  i3306.mode = i3307[0]
  var i3309 = i3307[1]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 1) {
    i3308.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3309[i + 0]) );
  }
  i3306.colorKeys = i3308
  var i3311 = i3307[2]
  var i3310 = []
  for(var i = 0; i < i3311.length; i += 1) {
    i3310.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3311[i + 0]) );
  }
  i3306.alphaKeys = i3310
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3312 = root || new pc.ParticleSystemColorBySpeed()
  var i3313 = data
  i3312.enabled = !!i3313[0]
  i3312.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3313[1], i3312.color)
  i3312.range = new pc.Vec2( i3313[2], i3313[3] )
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3317 = data
  i3316.color = new pc.Color(i3317[0], i3317[1], i3317[2], i3317[3])
  i3316.time = i3317[4]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3321 = data
  i3320.alpha = i3321[0]
  i3320.time = i3321[1]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3322 = root || new pc.ParticleSystemColorOverLifetime()
  var i3323 = data
  i3322.enabled = !!i3323[0]
  i3322.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3323[1], i3322.color)
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3324 = root || new pc.ParticleSystemEmitter()
  var i3325 = data
  i3324.enabled = !!i3325[0]
  i3324.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[1], i3324.rateOverTime)
  i3324.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[2], i3324.rateOverDistance)
  var i3327 = i3325[3]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3327[i + 0]) );
  }
  i3324.bursts = i3326
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3330 = root || new pc.ParticleSystemBurst()
  var i3331 = data
  i3330.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[0], i3330.count)
  i3330.cycleCount = i3331[1]
  i3330.minCount = i3331[2]
  i3330.maxCount = i3331[3]
  i3330.repeatInterval = i3331[4]
  i3330.time = i3331[5]
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3332 = root || new pc.ParticleSystemRotationBySpeed()
  var i3333 = data
  i3332.enabled = !!i3333[0]
  i3332.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3333[1], i3332.x)
  i3332.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3333[2], i3332.y)
  i3332.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3333[3], i3332.z)
  i3332.separateAxes = !!i3333[4]
  i3332.range = new pc.Vec2( i3333[5], i3333[6] )
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3334 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3335 = data
  i3334.enabled = !!i3335[0]
  i3334.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3335[1], i3334.x)
  i3334.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3335[2], i3334.y)
  i3334.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3335[3], i3334.z)
  i3334.separateAxes = !!i3335[4]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3336 = root || new pc.ParticleSystemShape()
  var i3337 = data
  i3336.enabled = !!i3337[0]
  i3336.shapeType = i3337[1]
  i3336.randomDirectionAmount = i3337[2]
  i3336.sphericalDirectionAmount = i3337[3]
  i3336.randomPositionAmount = i3337[4]
  i3336.alignToDirection = !!i3337[5]
  i3336.radius = i3337[6]
  i3336.radiusMode = i3337[7]
  i3336.radiusSpread = i3337[8]
  i3336.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3337[9], i3336.radiusSpeed)
  i3336.radiusThickness = i3337[10]
  i3336.angle = i3337[11]
  i3336.length = i3337[12]
  i3336.boxThickness = new pc.Vec3( i3337[13], i3337[14], i3337[15] )
  i3336.meshShapeType = i3337[16]
  request.r(i3337[17], i3337[18], 0, i3336, 'mesh')
  request.r(i3337[19], i3337[20], 0, i3336, 'meshRenderer')
  request.r(i3337[21], i3337[22], 0, i3336, 'skinnedMeshRenderer')
  i3336.useMeshMaterialIndex = !!i3337[23]
  i3336.meshMaterialIndex = i3337[24]
  i3336.useMeshColors = !!i3337[25]
  i3336.normalOffset = i3337[26]
  i3336.arc = i3337[27]
  i3336.arcMode = i3337[28]
  i3336.arcSpread = i3337[29]
  i3336.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3337[30], i3336.arcSpeed)
  i3336.donutRadius = i3337[31]
  i3336.position = new pc.Vec3( i3337[32], i3337[33], i3337[34] )
  i3336.rotation = new pc.Vec3( i3337[35], i3337[36], i3337[37] )
  i3336.scale = new pc.Vec3( i3337[38], i3337[39], i3337[40] )
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3338 = root || new pc.ParticleSystemSizeBySpeed()
  var i3339 = data
  i3338.enabled = !!i3339[0]
  i3338.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3339[1], i3338.x)
  i3338.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3339[2], i3338.y)
  i3338.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3339[3], i3338.z)
  i3338.separateAxes = !!i3339[4]
  i3338.range = new pc.Vec2( i3339[5], i3339[6] )
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3340 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3341 = data
  i3340.enabled = !!i3341[0]
  i3340.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3341[1], i3340.x)
  i3340.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3341[2], i3340.y)
  i3340.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3341[3], i3340.z)
  i3340.separateAxes = !!i3341[4]
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3342 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3343 = data
  i3342.enabled = !!i3343[0]
  i3342.mode = i3343[1]
  i3342.animation = i3343[2]
  i3342.numTilesX = i3343[3]
  i3342.numTilesY = i3343[4]
  i3342.useRandomRow = !!i3343[5]
  i3342.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[6], i3342.frameOverTime)
  i3342.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[7], i3342.startFrame)
  i3342.cycleCount = i3343[8]
  i3342.rowIndex = i3343[9]
  i3342.flipU = i3343[10]
  i3342.flipV = i3343[11]
  i3342.spriteCount = i3343[12]
  var i3345 = i3343[13]
  var i3344 = []
  for(var i = 0; i < i3345.length; i += 2) {
  request.r(i3345[i + 0], i3345[i + 1], 2, i3344, '')
  }
  i3342.sprites = i3344
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3348 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3349 = data
  i3348.enabled = !!i3349[0]
  i3348.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[1], i3348.x)
  i3348.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[2], i3348.y)
  i3348.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[3], i3348.z)
  i3348.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[4], i3348.radial)
  i3348.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[5], i3348.speedModifier)
  i3348.space = i3349[6]
  i3348.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[7], i3348.orbitalX)
  i3348.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[8], i3348.orbitalY)
  i3348.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[9], i3348.orbitalZ)
  i3348.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[10], i3348.orbitalOffsetX)
  i3348.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[11], i3348.orbitalOffsetY)
  i3348.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[12], i3348.orbitalOffsetZ)
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3350 = root || new pc.ParticleSystemNoise()
  var i3351 = data
  i3350.enabled = !!i3351[0]
  i3350.separateAxes = !!i3351[1]
  i3350.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[2], i3350.strengthX)
  i3350.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[3], i3350.strengthY)
  i3350.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[4], i3350.strengthZ)
  i3350.frequency = i3351[5]
  i3350.damping = !!i3351[6]
  i3350.octaveCount = i3351[7]
  i3350.octaveMultiplier = i3351[8]
  i3350.octaveScale = i3351[9]
  i3350.quality = i3351[10]
  i3350.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[11], i3350.scrollSpeed)
  i3350.scrollSpeedMultiplier = i3351[12]
  i3350.remapEnabled = !!i3351[13]
  i3350.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[14], i3350.remapX)
  i3350.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[15], i3350.remapY)
  i3350.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[16], i3350.remapZ)
  i3350.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[17], i3350.positionAmount)
  i3350.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[18], i3350.rotationAmount)
  i3350.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[19], i3350.sizeAmount)
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3352 = root || new pc.ParticleSystemInheritVelocity()
  var i3353 = data
  i3352.enabled = !!i3353[0]
  i3352.mode = i3353[1]
  i3352.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[2], i3352.curve)
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3354 = root || new pc.ParticleSystemForceOverLifetime()
  var i3355 = data
  i3354.enabled = !!i3355[0]
  i3354.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[1], i3354.x)
  i3354.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[2], i3354.y)
  i3354.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[3], i3354.z)
  i3354.space = i3355[4]
  i3354.randomized = !!i3355[5]
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3356 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3357 = data
  i3356.enabled = !!i3357[0]
  i3356.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[1], i3356.limit)
  i3356.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[2], i3356.limitX)
  i3356.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[3], i3356.limitY)
  i3356.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[4], i3356.limitZ)
  i3356.dampen = i3357[5]
  i3356.separateAxes = !!i3357[6]
  i3356.space = i3357[7]
  i3356.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[8], i3356.drag)
  i3356.multiplyDragByParticleSize = !!i3357[9]
  i3356.multiplyDragByParticleVelocity = !!i3357[10]
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3359 = data
  i3358.enabled = !!i3359[0]
  request.r(i3359[1], i3359[2], 0, i3358, 'sharedMaterial')
  var i3361 = i3359[3]
  var i3360 = []
  for(var i = 0; i < i3361.length; i += 2) {
  request.r(i3361[i + 0], i3361[i + 1], 2, i3360, '')
  }
  i3358.sharedMaterials = i3360
  i3358.receiveShadows = !!i3359[4]
  i3358.shadowCastingMode = i3359[5]
  i3358.sortingLayerID = i3359[6]
  i3358.sortingOrder = i3359[7]
  i3358.lightmapIndex = i3359[8]
  i3358.lightmapSceneIndex = i3359[9]
  i3358.lightmapScaleOffset = new pc.Vec4( i3359[10], i3359[11], i3359[12], i3359[13] )
  i3358.lightProbeUsage = i3359[14]
  i3358.reflectionProbeUsage = i3359[15]
  request.r(i3359[16], i3359[17], 0, i3358, 'mesh')
  i3358.meshCount = i3359[18]
  i3358.activeVertexStreamsCount = i3359[19]
  i3358.alignment = i3359[20]
  i3358.renderMode = i3359[21]
  i3358.sortMode = i3359[22]
  i3358.lengthScale = i3359[23]
  i3358.velocityScale = i3359[24]
  i3358.cameraVelocityScale = i3359[25]
  i3358.normalDirection = i3359[26]
  i3358.sortingFudge = i3359[27]
  i3358.minParticleSize = i3359[28]
  i3358.maxParticleSize = i3359[29]
  i3358.pivot = new pc.Vec3( i3359[30], i3359[31], i3359[32] )
  request.r(i3359[33], i3359[34], 0, i3358, 'trailMaterial')
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3365 = data
  i3364.name = i3365[0]
  i3364.tagId = i3365[1]
  i3364.enabled = !!i3365[2]
  i3364.isStatic = !!i3365[3]
  i3364.layer = i3365[4]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3367 = data
  i3366.name = i3367[0]
  i3366.halfPrecision = !!i3367[1]
  i3366.useUInt32IndexFormat = !!i3367[2]
  i3366.vertexCount = i3367[3]
  i3366.aabb = i3367[4]
  var i3369 = i3367[5]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( !!i3369[i + 0] );
  }
  i3366.streams = i3368
  i3366.vertices = i3367[6]
  var i3371 = i3367[7]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3371[i + 0]) );
  }
  i3366.subMeshes = i3370
  var i3373 = i3367[8]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 16) {
    i3372.push( new pc.Mat4().setData(i3373[i + 0], i3373[i + 1], i3373[i + 2], i3373[i + 3],  i3373[i + 4], i3373[i + 5], i3373[i + 6], i3373[i + 7],  i3373[i + 8], i3373[i + 9], i3373[i + 10], i3373[i + 11],  i3373[i + 12], i3373[i + 13], i3373[i + 14], i3373[i + 15]) );
  }
  i3366.bindposes = i3372
  var i3375 = i3367[9]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3375[i + 0]) );
  }
  i3366.blendShapes = i3374
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3381 = data
  i3380.triangles = i3381[0]
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3387 = data
  i3386.name = i3387[0]
  var i3389 = i3387[1]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3389[i + 0]) );
  }
  i3386.frames = i3388
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3391 = data
  i3390.pivot = new pc.Vec2( i3391[0], i3391[1] )
  i3390.anchorMin = new pc.Vec2( i3391[2], i3391[3] )
  i3390.anchorMax = new pc.Vec2( i3391[4], i3391[5] )
  i3390.sizeDelta = new pc.Vec2( i3391[6], i3391[7] )
  i3390.anchoredPosition3D = new pc.Vec3( i3391[8], i3391[9], i3391[10] )
  i3390.rotation = new pc.Quat(i3391[11], i3391[12], i3391[13], i3391[14])
  i3390.scale = new pc.Vec3( i3391[15], i3391[16], i3391[17] )
  return i3390
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i3392 = root || request.c( 'QuestSlot' )
  var i3393 = data
  i3392.InitialScale = new pc.Vec3( i3393[0], i3393[1], i3393[2] )
  i3392.MaximumScale = new pc.Vec3( i3393[3], i3393[4], i3393[5] )
  i3392.EndScale = new pc.Vec3( i3393[6], i3393[7], i3393[8] )
  i3392.animationDuration = i3393[9]
  i3392.maxSizeTrigger = i3393[10]
  request.r(i3393[11], i3393[12], 0, i3392, 'type')
  i3392.amount = i3393[13]
  i3392.locked = !!i3393[14]
  request.r(i3393[15], i3393[16], 0, i3392, 'icon')
  request.r(i3393[17], i3393[18], 0, i3392, 'amountTxt')
  return i3392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3395 = data
  i3394.cullTransparentMesh = !!i3395[0]
  return i3394
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.UI.Image' )
  var i3397 = data
  request.r(i3397[0], i3397[1], 0, i3396, 'm_Sprite')
  i3396.m_Type = i3397[2]
  i3396.m_PreserveAspect = !!i3397[3]
  i3396.m_FillCenter = !!i3397[4]
  i3396.m_FillMethod = i3397[5]
  i3396.m_FillAmount = i3397[6]
  i3396.m_FillClockwise = !!i3397[7]
  i3396.m_FillOrigin = i3397[8]
  i3396.m_UseSpriteMesh = !!i3397[9]
  i3396.m_PixelsPerUnitMultiplier = i3397[10]
  request.r(i3397[11], i3397[12], 0, i3396, 'm_Material')
  i3396.m_Maskable = !!i3397[13]
  i3396.m_Color = new pc.Color(i3397[14], i3397[15], i3397[16], i3397[17])
  i3396.m_RaycastTarget = !!i3397[18]
  i3396.m_RaycastPadding = new pc.Vec4( i3397[19], i3397[20], i3397[21], i3397[22] )
  return i3396
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3398 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3399 = data
  i3398.m_hasFontAssetChanged = !!i3399[0]
  request.r(i3399[1], i3399[2], 0, i3398, 'm_baseMaterial')
  i3398.m_maskOffset = new pc.Vec4( i3399[3], i3399[4], i3399[5], i3399[6] )
  i3398.m_text = i3399[7]
  i3398.m_isRightToLeft = !!i3399[8]
  request.r(i3399[9], i3399[10], 0, i3398, 'm_fontAsset')
  request.r(i3399[11], i3399[12], 0, i3398, 'm_sharedMaterial')
  var i3401 = i3399[13]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 2) {
  request.r(i3401[i + 0], i3401[i + 1], 2, i3400, '')
  }
  i3398.m_fontSharedMaterials = i3400
  request.r(i3399[14], i3399[15], 0, i3398, 'm_fontMaterial')
  var i3403 = i3399[16]
  var i3402 = []
  for(var i = 0; i < i3403.length; i += 2) {
  request.r(i3403[i + 0], i3403[i + 1], 2, i3402, '')
  }
  i3398.m_fontMaterials = i3402
  i3398.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3399[17], i3399[18], i3399[19], i3399[20])
  i3398.m_fontColor = new pc.Color(i3399[21], i3399[22], i3399[23], i3399[24])
  i3398.m_enableVertexGradient = !!i3399[25]
  i3398.m_colorMode = i3399[26]
  i3398.m_fontColorGradient = request.d('TMPro.VertexGradient', i3399[27], i3398.m_fontColorGradient)
  request.r(i3399[28], i3399[29], 0, i3398, 'm_fontColorGradientPreset')
  request.r(i3399[30], i3399[31], 0, i3398, 'm_spriteAsset')
  i3398.m_tintAllSprites = !!i3399[32]
  request.r(i3399[33], i3399[34], 0, i3398, 'm_StyleSheet')
  i3398.m_TextStyleHashCode = i3399[35]
  i3398.m_overrideHtmlColors = !!i3399[36]
  i3398.m_faceColor = UnityEngine.Color32.ConstructColor(i3399[37], i3399[38], i3399[39], i3399[40])
  i3398.m_fontSize = i3399[41]
  i3398.m_fontSizeBase = i3399[42]
  i3398.m_fontWeight = i3399[43]
  i3398.m_enableAutoSizing = !!i3399[44]
  i3398.m_fontSizeMin = i3399[45]
  i3398.m_fontSizeMax = i3399[46]
  i3398.m_fontStyle = i3399[47]
  i3398.m_HorizontalAlignment = i3399[48]
  i3398.m_VerticalAlignment = i3399[49]
  i3398.m_textAlignment = i3399[50]
  i3398.m_characterSpacing = i3399[51]
  i3398.m_wordSpacing = i3399[52]
  i3398.m_lineSpacing = i3399[53]
  i3398.m_lineSpacingMax = i3399[54]
  i3398.m_paragraphSpacing = i3399[55]
  i3398.m_charWidthMaxAdj = i3399[56]
  i3398.m_enableWordWrapping = !!i3399[57]
  i3398.m_wordWrappingRatios = i3399[58]
  i3398.m_overflowMode = i3399[59]
  request.r(i3399[60], i3399[61], 0, i3398, 'm_linkedTextComponent')
  request.r(i3399[62], i3399[63], 0, i3398, 'parentLinkedComponent')
  i3398.m_enableKerning = !!i3399[64]
  i3398.m_enableExtraPadding = !!i3399[65]
  i3398.checkPaddingRequired = !!i3399[66]
  i3398.m_isRichText = !!i3399[67]
  i3398.m_parseCtrlCharacters = !!i3399[68]
  i3398.m_isOrthographic = !!i3399[69]
  i3398.m_isCullingEnabled = !!i3399[70]
  i3398.m_horizontalMapping = i3399[71]
  i3398.m_verticalMapping = i3399[72]
  i3398.m_uvLineOffset = i3399[73]
  i3398.m_geometrySortingOrder = i3399[74]
  i3398.m_IsTextObjectScaleStatic = !!i3399[75]
  i3398.m_VertexBufferAutoSizeReduction = !!i3399[76]
  i3398.m_useMaxVisibleDescender = !!i3399[77]
  i3398.m_pageToDisplay = i3399[78]
  i3398.m_margin = new pc.Vec4( i3399[79], i3399[80], i3399[81], i3399[82] )
  i3398.m_isUsingLegacyAnimationComponent = !!i3399[83]
  i3398.m_isVolumetricText = !!i3399[84]
  request.r(i3399[85], i3399[86], 0, i3398, 'm_Material')
  i3398.m_Maskable = !!i3399[87]
  i3398.m_Color = new pc.Color(i3399[88], i3399[89], i3399[90], i3399[91])
  i3398.m_RaycastTarget = !!i3399[92]
  i3398.m_RaycastPadding = new pc.Vec4( i3399[93], i3399[94], i3399[95], i3399[96] )
  return i3398
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3404 = root || request.c( 'TMPro.VertexGradient' )
  var i3405 = data
  i3404.topLeft = new pc.Color(i3405[0], i3405[1], i3405[2], i3405[3])
  i3404.topRight = new pc.Color(i3405[4], i3405[5], i3405[6], i3405[7])
  i3404.bottomLeft = new pc.Color(i3405[8], i3405[9], i3405[10], i3405[11])
  i3404.bottomRight = new pc.Color(i3405[12], i3405[13], i3405[14], i3405[15])
  return i3404
}

Deserializers["Tile"] = function (request, data, root) {
  var i3406 = root || request.c( 'Tile' )
  var i3407 = data
  i3406.layer = i3407[0]
  i3406.line = i3407[1]
  request.r(i3407[2], i3407[3], 0, i3406, 'icon')
  request.r(i3407[4], i3407[5], 0, i3406, 'lockTile')
  request.r(i3407[6], i3407[7], 0, i3406, 'background')
  request.r(i3407[8], i3407[9], 0, i3406, 'trail')
  i3406.defaultSize = new pc.Vec3( i3407[10], i3407[11], i3407[12] )
  i3406.speed = i3407[13]
  i3406.spawnAnimSize = i3407[14]
  i3406.spawnAnimDuration = i3407[15]
  i3406.customColissionBox = !!i3407[16]
  i3406.locked = !!i3407[17]
  i3406.isHidden = !!i3407[18]
  i3406.lockAlpha = i3407[19]
  i3406.fadeDuration = i3407[20]
  i3406.debug = !!i3407[21]
  request.r(i3407[22], i3407[23], 0, i3406, 'type')
  i3406.box = request.d('Box', i3407[24], i3406.box)
  i3406.iconSort = i3407[25]
  i3406.backGroundSort = i3407[26]
  i3406.disabledSort = i3407[27]
  i3406.trailSort = i3407[28]
  var i3409 = i3407[29]
  var i3408 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3409.length; i += 2) {
  request.r(i3409[i + 0], i3409[i + 1], 1, i3408, '')
  }
  i3406.coverTiles = i3408
  return i3406
}

Deserializers["Box"] = function (request, data, root) {
  var i3410 = root || request.c( 'Box' )
  var i3411 = data
  i3410.Position = new pc.Vec2( i3411[0], i3411[1] )
  i3410.Width = i3411[2]
  i3410.Height = i3411[3]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3415 = data
  i3414.usedByComposite = !!i3415[0]
  i3414.autoTiling = !!i3415[1]
  i3414.size = new pc.Vec2( i3415[2], i3415[3] )
  i3414.edgeRadius = i3415[4]
  i3414.enabled = !!i3415[5]
  i3414.isTrigger = !!i3415[6]
  i3414.usedByEffector = !!i3415[7]
  i3414.density = i3415[8]
  i3414.offset = new pc.Vec2( i3415[9], i3415[10] )
  request.r(i3415[11], i3415[12], 0, i3414, 'material')
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3417 = data
  i3416.bodyType = i3417[0]
  request.r(i3417[1], i3417[2], 0, i3416, 'material')
  i3416.simulated = !!i3417[3]
  i3416.useAutoMass = !!i3417[4]
  i3416.mass = i3417[5]
  i3416.drag = i3417[6]
  i3416.angularDrag = i3417[7]
  i3416.gravityScale = i3417[8]
  i3416.collisionDetectionMode = i3417[9]
  i3416.sleepMode = i3417[10]
  i3416.constraints = i3417[11]
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3419 = data
  i3418.enabled = !!i3419[0]
  request.r(i3419[1], i3419[2], 0, i3418, 'sharedMaterial')
  var i3421 = i3419[3]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 2) {
  request.r(i3421[i + 0], i3421[i + 1], 2, i3420, '')
  }
  i3418.sharedMaterials = i3420
  i3418.receiveShadows = !!i3419[4]
  i3418.shadowCastingMode = i3419[5]
  i3418.sortingLayerID = i3419[6]
  i3418.sortingOrder = i3419[7]
  i3418.lightmapIndex = i3419[8]
  i3418.lightmapSceneIndex = i3419[9]
  i3418.lightmapScaleOffset = new pc.Vec4( i3419[10], i3419[11], i3419[12], i3419[13] )
  i3418.lightProbeUsage = i3419[14]
  i3418.reflectionProbeUsage = i3419[15]
  i3418.color = new pc.Color(i3419[16], i3419[17], i3419[18], i3419[19])
  request.r(i3419[20], i3419[21], 0, i3418, 'sprite')
  i3418.flipX = !!i3419[22]
  i3418.flipY = !!i3419[23]
  i3418.drawMode = i3419[24]
  i3418.size = new pc.Vec2( i3419[25], i3419[26] )
  i3418.tileMode = i3419[27]
  i3418.adaptiveModeThreshold = i3419[28]
  i3418.maskInteraction = i3419[29]
  i3418.spriteSortPoint = i3419[30]
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3423 = data
  i3422.enabled = !!i3423[0]
  request.r(i3423[1], i3423[2], 0, i3422, 'sharedMaterial')
  var i3425 = i3423[3]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 2) {
  request.r(i3425[i + 0], i3425[i + 1], 2, i3424, '')
  }
  i3422.sharedMaterials = i3424
  i3422.receiveShadows = !!i3423[4]
  i3422.shadowCastingMode = i3423[5]
  i3422.sortingLayerID = i3423[6]
  i3422.sortingOrder = i3423[7]
  i3422.lightmapIndex = i3423[8]
  i3422.lightmapSceneIndex = i3423[9]
  i3422.lightmapScaleOffset = new pc.Vec4( i3423[10], i3423[11], i3423[12], i3423[13] )
  i3422.lightProbeUsage = i3423[14]
  i3422.reflectionProbeUsage = i3423[15]
  var i3427 = i3423[16]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 3) {
    i3426.push( new pc.Vec3( i3427[i + 0], i3427[i + 1], i3427[i + 2] ) );
  }
  i3422.positions = i3426
  i3422.positionCount = i3423[17]
  i3422.time = i3423[18]
  i3422.startWidth = i3423[19]
  i3422.endWidth = i3423[20]
  i3422.widthMultiplier = i3423[21]
  i3422.autodestruct = !!i3423[22]
  i3422.emitting = !!i3423[23]
  i3422.numCornerVertices = i3423[24]
  i3422.numCapVertices = i3423[25]
  i3422.minVertexDistance = i3423[26]
  i3422.colorGradient = i3423[27] ? new pc.ColorGradient(i3423[27][0], i3423[27][1], i3423[27][2]) : null
  i3422.startColor = new pc.Color(i3423[28], i3423[29], i3423[30], i3423[31])
  i3422.endColor = new pc.Color(i3423[32], i3423[33], i3423[34], i3423[35])
  i3422.generateLightingData = !!i3423[36]
  i3422.textureMode = i3423[37]
  i3422.alignment = i3423[38]
  i3422.widthCurve = new pc.AnimationCurve( { keys_flow: i3423[39] } )
  return i3422
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i3430 = root || request.c( 'TileSlot' )
  var i3431 = data
  i3430.ID = i3431[0]
  request.r(i3431[1], i3431[2], 0, i3430, 'Tile')
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3433 = data
  i3432.name = i3433[0]
  i3432.index = i3433[1]
  i3432.startup = !!i3433[2]
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3435 = data
  i3434.enabled = !!i3435[0]
  i3434.aspect = i3435[1]
  i3434.orthographic = !!i3435[2]
  i3434.orthographicSize = i3435[3]
  i3434.backgroundColor = new pc.Color(i3435[4], i3435[5], i3435[6], i3435[7])
  i3434.nearClipPlane = i3435[8]
  i3434.farClipPlane = i3435[9]
  i3434.fieldOfView = i3435[10]
  i3434.depth = i3435[11]
  i3434.clearFlags = i3435[12]
  i3434.cullingMask = i3435[13]
  i3434.rect = i3435[14]
  request.r(i3435[15], i3435[16], 0, i3434, 'targetTexture')
  i3434.usePhysicalProperties = !!i3435[17]
  i3434.focalLength = i3435[18]
  i3434.sensorSize = new pc.Vec2( i3435[19], i3435[20] )
  i3434.lensShift = new pc.Vec2( i3435[21], i3435[22] )
  i3434.gateFit = i3435[23]
  return i3434
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3436 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3437 = data
  request.r(i3437[0], i3437[1], 0, i3436, 'm_FirstSelected')
  i3436.m_sendNavigationEvents = !!i3437[2]
  i3436.m_DragThreshold = i3437[3]
  return i3436
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3438 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3439 = data
  i3438.m_HorizontalAxis = i3439[0]
  i3438.m_VerticalAxis = i3439[1]
  i3438.m_SubmitButton = i3439[2]
  i3438.m_CancelButton = i3439[3]
  i3438.m_InputActionsPerSecond = i3439[4]
  i3438.m_RepeatDelay = i3439[5]
  i3438.m_ForceModuleActive = !!i3439[6]
  i3438.m_SendPointerHoverToParent = !!i3439[7]
  return i3438
}

Deserializers["Game"] = function (request, data, root) {
  var i3440 = root || request.c( 'Game' )
  var i3441 = data
  i3440.autoGameOverInSeconds = i3441[0]
  request.r(i3441[1], i3441[2], 0, i3440, 'deck')
  request.r(i3441[3], i3441[4], 0, i3440, 'actions')
  request.r(i3441[5], i3441[6], 0, i3440, 'locker')
  request.r(i3441[7], i3441[8], 0, i3440, 'boxLocker')
  request.r(i3441[9], i3441[10], 0, i3440, 'bag')
  request.r(i3441[11], i3441[12], 0, i3440, 'spawnAnimation')
  request.r(i3441[13], i3441[14], 0, i3440, 'tileMatcher')
  request.r(i3441[15], i3441[16], 0, i3440, 'loseCondition')
  request.r(i3441[17], i3441[18], 0, i3440, 'winCondition')
  request.r(i3441[19], i3441[20], 0, i3440, 'input')
  request.r(i3441[21], i3441[22], 0, i3440, 'endCard')
  request.r(i3441[23], i3441[24], 0, i3440, 'quest')
  i3440.useRandom = !!i3441[25]
  request.r(i3441[26], i3441[27], 0, i3440, 'spawnRandom')
  i3440.tileToSpawn = i3441[28]
  i3440.tilesInScene = i3441[29]
  var i3443 = i3441[30]
  var i3442 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3443.length; i += 2) {
  request.r(i3443[i + 0], i3443[i + 1], 1, i3442, '')
  }
  i3440.tilesInGame = i3442
  return i3440
}

Deserializers["TileLockerBox"] = function (request, data, root) {
  var i3444 = root || request.c( 'TileLockerBox' )
  var i3445 = data
  i3444.enable = !!i3445[0]
  return i3444
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i3446 = root || request.c( 'TileSpawner' )
  var i3447 = data
  request.r(i3447[0], i3447[1], 0, i3446, 'Game')
  request.r(i3447[2], i3447[3], 0, i3446, 'prefab')
  var i3449 = i3447[4]
  var i3448 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3449.length; i += 2) {
  request.r(i3449[i + 0], i3449[i + 1], 1, i3448, '')
  }
  i3446.spawned = i3448
  i3446.hideAtSpawn = !!i3447[5]
  i3446.spawnRate = i3447[6]
  return i3446
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i3450 = root || request.c( 'TileRandomSpawner' )
  var i3451 = data
  request.r(i3451[0], i3451[1], 0, i3450, 'Game')
  i3450.spawnRate = i3451[2]
  var i3453 = i3451[3]
  var i3452 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 1, i3452, '')
  }
  i3450.spawned = i3452
  return i3450
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i3454 = root || request.c( 'TileSpawnAnimation' )
  var i3455 = data
  request.r(i3455[0], i3455[1], 0, i3454, 'Game')
  i3454.delayBetweenLines = i3455[2]
  i3454.delayBetweenTiles = i3455[3]
  i3454.delayBetweenLayers = i3455[4]
  return i3454
}

Deserializers["TileActions"] = function (request, data, root) {
  var i3456 = root || request.c( 'TileActions' )
  var i3457 = data
  request.r(i3457[0], i3457[1], 0, i3456, 'Game')
  return i3456
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i3458 = root || request.c( 'TileMatcher' )
  var i3459 = data
  request.r(i3459[0], i3459[1], 0, i3458, 'Game')
  request.r(i3459[2], i3459[3], 0, i3458, 'vfx')
  var i3461 = i3459[4]
  var i3460 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3461.length; i += 2) {
  request.r(i3461[i + 0], i3461[i + 1], 1, i3460, '')
  }
  i3458.completed = i3460
  var i3463 = i3459[5]
  var i3462 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i3463.length; i += 2) {
  request.r(i3463[i + 0], i3463[i + 1], 1, i3462, '')
  }
  i3458.lastMatch = i3462
  return i3458
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i3466 = root || request.c( 'LoseCondition' )
  var i3467 = data
  request.r(i3467[0], i3467[1], 0, i3466, 'Game')
  return i3466
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i3468 = root || request.c( 'WinCondition' )
  var i3469 = data
  request.r(i3469[0], i3469[1], 0, i3468, 'Game')
  return i3468
}

Deserializers["Quest"] = function (request, data, root) {
  var i3470 = root || request.c( 'Quest' )
  var i3471 = data
  request.r(i3471[0], i3471[1], 0, i3470, 'Game')
  var i3473 = i3471[2]
  var i3472 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i3473.length; i += 2) {
  request.r(i3473[i + 0], i3473[i + 1], 1, i3472, '')
  }
  i3470.slots = i3472
  return i3470
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i3476 = root || request.c( 'InputTouch' )
  var i3477 = data
  request.r(i3477[0], i3477[1], 0, i3476, 'Game')
  i3476.inputCooldown = i3477[2]
  var i3479 = i3477[3]
  var i3478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i3479.length; i += 2) {
    i3478.add(new pc.Vec2( i3479[i + 0], i3479[i + 1] ));
  }
  i3476.touches = i3478
  i3476.touchSize = i3477[4]
  return i3476
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i3482 = root || request.c( 'TileBagSorter' )
  var i3483 = data
  request.r(i3483[0], i3483[1], 0, i3482, 'Game')
  i3482.enable = !!i3483[2]
  i3482.intervalSec = i3483[3]
  return i3482
}

Deserializers["EndCard"] = function (request, data, root) {
  var i3484 = root || request.c( 'EndCard' )
  var i3485 = data
  request.r(i3485[0], i3485[1], 0, i3484, 'canvas')
  request.r(i3485[2], i3485[3], 0, i3484, 'Game')
  return i3484
}

Deserializers["Sounds"] = function (request, data, root) {
  var i3486 = root || request.c( 'Sounds' )
  var i3487 = data
  request.r(i3487[0], i3487[1], 0, i3486, 'Game')
  request.r(i3487[2], i3487[3], 0, i3486, 'tileClick')
  request.r(i3487[4], i3487[5], 0, i3486, 'tileMerge')
  request.r(i3487[6], i3487[7], 0, i3486, 'levelWin')
  request.r(i3487[8], i3487[9], 0, i3486, 'leveLose')
  request.r(i3487[10], i3487[11], 0, i3486, 'source')
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3489 = data
  request.r(i3489[0], i3489[1], 0, i3488, 'clip')
  request.r(i3489[2], i3489[3], 0, i3488, 'outputAudioMixerGroup')
  i3488.playOnAwake = !!i3489[4]
  i3488.loop = !!i3489[5]
  i3488.time = i3489[6]
  i3488.volume = i3489[7]
  i3488.pitch = i3489[8]
  i3488.enabled = !!i3489[9]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3491 = data
  i3490.enabled = !!i3491[0]
  i3490.planeDistance = i3491[1]
  i3490.referencePixelsPerUnit = i3491[2]
  i3490.isFallbackOverlay = !!i3491[3]
  i3490.renderMode = i3491[4]
  i3490.renderOrder = i3491[5]
  i3490.sortingLayerName = i3491[6]
  i3490.sortingOrder = i3491[7]
  i3490.scaleFactor = i3491[8]
  request.r(i3491[9], i3491[10], 0, i3490, 'worldCamera')
  i3490.overrideSorting = !!i3491[11]
  i3490.pixelPerfect = !!i3491[12]
  i3490.targetDisplay = i3491[13]
  i3490.overridePixelPerfect = !!i3491[14]
  return i3490
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3492 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3493 = data
  i3492.m_UiScaleMode = i3493[0]
  i3492.m_ReferencePixelsPerUnit = i3493[1]
  i3492.m_ScaleFactor = i3493[2]
  i3492.m_ReferenceResolution = new pc.Vec2( i3493[3], i3493[4] )
  i3492.m_ScreenMatchMode = i3493[5]
  i3492.m_MatchWidthOrHeight = i3493[6]
  i3492.m_PhysicalUnit = i3493[7]
  i3492.m_FallbackScreenDPI = i3493[8]
  i3492.m_DefaultSpriteDPI = i3493[9]
  i3492.m_DynamicPixelsPerUnit = i3493[10]
  i3492.m_PresetInfoIsWorld = !!i3493[11]
  return i3492
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3494 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3495 = data
  i3494.m_IgnoreReversedGraphics = !!i3495[0]
  i3494.m_BlockingObjects = i3495[1]
  i3494.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3495[2] )
  return i3494
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i3496 = root || request.c( 'ResetLocalPosition' )
  var i3497 = data
  return i3496
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3498 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3499 = data
  i3498.m_Spacing = i3499[0]
  i3498.m_ChildForceExpandWidth = !!i3499[1]
  i3498.m_ChildForceExpandHeight = !!i3499[2]
  i3498.m_ChildControlWidth = !!i3499[3]
  i3498.m_ChildControlHeight = !!i3499[4]
  i3498.m_ChildScaleWidth = !!i3499[5]
  i3498.m_ChildScaleHeight = !!i3499[6]
  i3498.m_ReverseArrangement = !!i3499[7]
  i3498.m_Padding = UnityEngine.RectOffset.FromPaddings(i3499[8], i3499[9], i3499[10], i3499[11])
  i3498.m_ChildAlignment = i3499[12]
  return i3498
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i3500 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i3501 = data
  i3500.m_StartCorner = i3501[0]
  i3500.m_StartAxis = i3501[1]
  i3500.m_CellSize = new pc.Vec2( i3501[2], i3501[3] )
  i3500.m_Spacing = new pc.Vec2( i3501[4], i3501[5] )
  i3500.m_Constraint = i3501[6]
  i3500.m_ConstraintCount = i3501[7]
  i3500.m_Padding = UnityEngine.RectOffset.FromPaddings(i3501[8], i3501[9], i3501[10], i3501[11])
  i3500.m_ChildAlignment = i3501[12]
  return i3500
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3502 = root || request.c( 'UnityEngine.UI.Button' )
  var i3503 = data
  i3502.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3503[0], i3502.m_OnClick)
  i3502.m_Navigation = request.d('UnityEngine.UI.Navigation', i3503[1], i3502.m_Navigation)
  i3502.m_Transition = i3503[2]
  i3502.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3503[3], i3502.m_Colors)
  i3502.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3503[4], i3502.m_SpriteState)
  i3502.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3503[5], i3502.m_AnimationTriggers)
  i3502.m_Interactable = !!i3503[6]
  request.r(i3503[7], i3503[8], 0, i3502, 'm_TargetGraphic')
  return i3502
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3504 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3505 = data
  i3504.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3505[0], i3504.m_PersistentCalls)
  return i3504
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3506 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3507 = data
  var i3509 = i3507[0]
  var i3508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.add(request.d('UnityEngine.Events.PersistentCall', i3509[i + 0]));
  }
  i3506.m_Calls = i3508
  return i3506
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3512 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3513 = data
  request.r(i3513[0], i3513[1], 0, i3512, 'm_Target')
  i3512.m_TargetAssemblyTypeName = i3513[2]
  i3512.m_MethodName = i3513[3]
  i3512.m_Mode = i3513[4]
  i3512.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3513[5], i3512.m_Arguments)
  i3512.m_CallState = i3513[6]
  return i3512
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3515 = data
  request.r(i3515[0], i3515[1], 0, i3514, 'm_ObjectArgument')
  i3514.m_ObjectArgumentAssemblyTypeName = i3515[2]
  i3514.m_IntArgument = i3515[3]
  i3514.m_FloatArgument = i3515[4]
  i3514.m_StringArgument = i3515[5]
  i3514.m_BoolArgument = !!i3515[6]
  return i3514
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3517 = data
  i3516.m_Mode = i3517[0]
  i3516.m_WrapAround = !!i3517[1]
  request.r(i3517[2], i3517[3], 0, i3516, 'm_SelectOnUp')
  request.r(i3517[4], i3517[5], 0, i3516, 'm_SelectOnDown')
  request.r(i3517[6], i3517[7], 0, i3516, 'm_SelectOnLeft')
  request.r(i3517[8], i3517[9], 0, i3516, 'm_SelectOnRight')
  return i3516
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3519 = data
  i3518.m_NormalColor = new pc.Color(i3519[0], i3519[1], i3519[2], i3519[3])
  i3518.m_HighlightedColor = new pc.Color(i3519[4], i3519[5], i3519[6], i3519[7])
  i3518.m_PressedColor = new pc.Color(i3519[8], i3519[9], i3519[10], i3519[11])
  i3518.m_SelectedColor = new pc.Color(i3519[12], i3519[13], i3519[14], i3519[15])
  i3518.m_DisabledColor = new pc.Color(i3519[16], i3519[17], i3519[18], i3519[19])
  i3518.m_ColorMultiplier = i3519[20]
  i3518.m_FadeDuration = i3519[21]
  return i3518
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3520 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3521 = data
  request.r(i3521[0], i3521[1], 0, i3520, 'm_HighlightedSprite')
  request.r(i3521[2], i3521[3], 0, i3520, 'm_PressedSprite')
  request.r(i3521[4], i3521[5], 0, i3520, 'm_SelectedSprite')
  request.r(i3521[6], i3521[7], 0, i3520, 'm_DisabledSprite')
  return i3520
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3522 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3523 = data
  i3522.m_NormalTrigger = i3523[0]
  i3522.m_HighlightedTrigger = i3523[1]
  i3522.m_PressedTrigger = i3523[2]
  i3522.m_SelectedTrigger = i3523[3]
  i3522.m_DisabledTrigger = i3523[4]
  return i3522
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i3524 = root || request.c( 'TilesBag' )
  var i3525 = data
  var i3527 = i3525[0]
  var i3526 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i3527.length; i += 2) {
  request.r(i3527[i + 0], i3527[i + 1], 1, i3526, '')
  }
  i3524.slots = i3526
  return i3524
}

Deserializers["Deck"] = function (request, data, root) {
  var i3528 = root || request.c( 'Deck' )
  var i3529 = data
  request.r(i3529[0], i3529[1], 0, i3528, 'Game')
  return i3528
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i3530 = root || request.c( 'DeckLayer' )
  var i3531 = data
  i3530.layer = i3531[0]
  var i3533 = i3531[1]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 2) {
  request.r(i3533[i + 0], i3533[i + 1], 2, i3532, '')
  }
  i3530.Tiles = i3532
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3537 = data
  i3536.ambientIntensity = i3537[0]
  i3536.reflectionIntensity = i3537[1]
  i3536.ambientMode = i3537[2]
  i3536.ambientLight = new pc.Color(i3537[3], i3537[4], i3537[5], i3537[6])
  i3536.ambientSkyColor = new pc.Color(i3537[7], i3537[8], i3537[9], i3537[10])
  i3536.ambientGroundColor = new pc.Color(i3537[11], i3537[12], i3537[13], i3537[14])
  i3536.ambientEquatorColor = new pc.Color(i3537[15], i3537[16], i3537[17], i3537[18])
  i3536.fogColor = new pc.Color(i3537[19], i3537[20], i3537[21], i3537[22])
  i3536.fogEndDistance = i3537[23]
  i3536.fogStartDistance = i3537[24]
  i3536.fogDensity = i3537[25]
  i3536.fog = !!i3537[26]
  request.r(i3537[27], i3537[28], 0, i3536, 'skybox')
  i3536.fogMode = i3537[29]
  var i3539 = i3537[30]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3539[i + 0]) );
  }
  i3536.lightmaps = i3538
  i3536.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3537[31], i3536.lightProbes)
  i3536.lightmapsMode = i3537[32]
  i3536.mixedBakeMode = i3537[33]
  i3536.environmentLightingMode = i3537[34]
  i3536.ambientProbe = new pc.SphericalHarmonicsL2(i3537[35])
  i3536.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3537[36])
  i3536.useReferenceAmbientProbe = !!i3537[37]
  request.r(i3537[38], i3537[39], 0, i3536, 'customReflection')
  request.r(i3537[40], i3537[41], 0, i3536, 'defaultReflection')
  i3536.defaultReflectionMode = i3537[42]
  i3536.defaultReflectionResolution = i3537[43]
  i3536.sunLightObjectId = i3537[44]
  i3536.pixelLightCount = i3537[45]
  i3536.defaultReflectionHDR = !!i3537[46]
  i3536.hasLightDataAsset = !!i3537[47]
  i3536.hasManualGenerate = !!i3537[48]
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3543 = data
  request.r(i3543[0], i3543[1], 0, i3542, 'lightmapColor')
  request.r(i3543[2], i3543[3], 0, i3542, 'lightmapDirection')
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3544 = root || new UnityEngine.LightProbes()
  var i3545 = data
  return i3544
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i3550 = root || request.c( 'TileLocker' )
  var i3551 = data
  request.r(i3551[0], i3551[1], 0, i3550, 'Game')
  i3550.enabled = !!i3551[2]
  i3550.lockDistance = i3551[3]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3553 = data
  request.r(i3553[0], i3553[1], 0, i3552, 'sharedMesh')
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3555 = data
  request.r(i3555[0], i3555[1], 0, i3554, 'additionalVertexStreams')
  i3554.enabled = !!i3555[2]
  request.r(i3555[3], i3555[4], 0, i3554, 'sharedMaterial')
  var i3557 = i3555[5]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 2) {
  request.r(i3557[i + 0], i3557[i + 1], 2, i3556, '')
  }
  i3554.sharedMaterials = i3556
  i3554.receiveShadows = !!i3555[6]
  i3554.shadowCastingMode = i3555[7]
  i3554.sortingLayerID = i3555[8]
  i3554.sortingOrder = i3555[9]
  i3554.lightmapIndex = i3555[10]
  i3554.lightmapSceneIndex = i3555[11]
  i3554.lightmapScaleOffset = new pc.Vec4( i3555[12], i3555[13], i3555[14], i3555[15] )
  i3554.lightProbeUsage = i3555[16]
  i3554.reflectionProbeUsage = i3555[17]
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3559 = data
  var i3561 = i3559[0]
  var i3560 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3561.length; i += 1) {
    i3560.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3561[i + 0]));
  }
  i3558.ShaderCompilationErrors = i3560
  i3558.name = i3559[1]
  i3558.guid = i3559[2]
  var i3563 = i3559[3]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.push( i3563[i + 0] );
  }
  i3558.shaderDefinedKeywords = i3562
  var i3565 = i3559[4]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3565[i + 0]) );
  }
  i3558.passes = i3564
  var i3567 = i3559[5]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3567[i + 0]) );
  }
  i3558.usePasses = i3566
  var i3569 = i3559[6]
  var i3568 = []
  for(var i = 0; i < i3569.length; i += 1) {
    i3568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3569[i + 0]) );
  }
  i3558.defaultParameterValues = i3568
  request.r(i3559[7], i3559[8], 0, i3558, 'unityFallbackShader')
  i3558.readDepth = !!i3559[9]
  i3558.isCreatedByShaderGraph = !!i3559[10]
  i3558.usedBatchUniforms = i3559[11]
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3573 = data
  i3572.shaderName = i3573[0]
  i3572.errorMessage = i3573[1]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3578 = root || new pc.UnityShaderPass()
  var i3579 = data
  i3578.id = i3579[0]
  i3578.subShaderIndex = i3579[1]
  i3578.name = i3579[2]
  i3578.passType = i3579[3]
  i3578.grabPassTextureName = i3579[4]
  i3578.usePass = !!i3579[5]
  i3578.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[6], i3578.zTest)
  i3578.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[7], i3578.zWrite)
  i3578.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[8], i3578.culling)
  i3578.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3579[9], i3578.blending)
  i3578.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3579[10], i3578.alphaBlending)
  i3578.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[11], i3578.colorWriteMask)
  i3578.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[12], i3578.offsetUnits)
  i3578.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[13], i3578.offsetFactor)
  i3578.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[14], i3578.stencilRef)
  i3578.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[15], i3578.stencilReadMask)
  i3578.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[16], i3578.stencilWriteMask)
  i3578.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3579[17], i3578.stencilOp)
  i3578.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3579[18], i3578.stencilOpFront)
  i3578.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3579[19], i3578.stencilOpBack)
  var i3581 = i3579[20]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3581[i + 0]) );
  }
  i3578.tags = i3580
  var i3583 = i3579[21]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( i3583[i + 0] );
  }
  i3578.passDefinedKeywords = i3582
  var i3585 = i3579[22]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 1) {
    i3584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3585[i + 0]) );
  }
  i3578.passDefinedKeywordGroups = i3584
  var i3587 = i3579[23]
  var i3586 = []
  for(var i = 0; i < i3587.length; i += 1) {
    i3586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3587[i + 0]) );
  }
  i3578.variants = i3586
  var i3589 = i3579[24]
  var i3588 = []
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3589[i + 0]) );
  }
  i3578.excludedVariants = i3588
  i3578.hasDepthReader = !!i3579[25]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3591 = data
  i3590.val = i3591[0]
  i3590.name = i3591[1]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3593 = data
  i3592.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3593[0], i3592.src)
  i3592.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3593[1], i3592.dst)
  i3592.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3593[2], i3592.op)
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3595 = data
  i3594.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3595[0], i3594.pass)
  i3594.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3595[1], i3594.fail)
  i3594.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3595[2], i3594.zFail)
  i3594.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3595[3], i3594.comp)
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3599 = data
  i3598.name = i3599[0]
  i3598.value = i3599[1]
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3603 = data
  var i3605 = i3603[0]
  var i3604 = []
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.push( i3605[i + 0] );
  }
  i3602.keywords = i3604
  i3602.hasDiscard = !!i3603[1]
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3609 = data
  i3608.passId = i3609[0]
  i3608.subShaderIndex = i3609[1]
  var i3611 = i3609[2]
  var i3610 = []
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.push( i3611[i + 0] );
  }
  i3608.keywords = i3610
  i3608.vertexProgram = i3609[3]
  i3608.fragmentProgram = i3609[4]
  i3608.compiledForWebGL2 = !!i3609[5]
  i3608.readDepth = !!i3609[6]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3615 = data
  request.r(i3615[0], i3615[1], 0, i3614, 'shader')
  i3614.pass = i3615[2]
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3619 = data
  i3618.name = i3619[0]
  i3618.type = i3619[1]
  i3618.value = new pc.Vec4( i3619[2], i3619[3], i3619[4], i3619[5] )
  i3618.textureValue = i3619[6]
  i3618.shaderPropertyFlag = i3619[7]
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3621 = data
  i3620.name = i3621[0]
  request.r(i3621[1], i3621[2], 0, i3620, 'texture')
  i3620.aabb = i3621[3]
  i3620.vertices = i3621[4]
  i3620.triangles = i3621[5]
  i3620.textureRect = UnityEngine.Rect.MinMaxRect(i3621[6], i3621[7], i3621[8], i3621[9])
  i3620.packedRect = UnityEngine.Rect.MinMaxRect(i3621[10], i3621[11], i3621[12], i3621[13])
  i3620.border = new pc.Vec4( i3621[14], i3621[15], i3621[16], i3621[17] )
  i3620.transparency = i3621[18]
  i3620.bounds = i3621[19]
  i3620.pixelsPerUnit = i3621[20]
  i3620.textureWidth = i3621[21]
  i3620.textureHeight = i3621[22]
  i3620.nativeSize = new pc.Vec2( i3621[23], i3621[24] )
  i3620.pivot = new pc.Vec2( i3621[25], i3621[26] )
  i3620.textureRectOffset = new pc.Vec2( i3621[27], i3621[28] )
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3623 = data
  i3622.name = i3623[0]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3625 = data
  i3624.name = i3625[0]
  i3624.bytes64 = i3625[1]
  i3624.data = i3625[2]
  return i3624
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3626 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3627 = data
  i3626.hashCode = i3627[0]
  request.r(i3627[1], i3627[2], 0, i3626, 'material')
  i3626.materialHashCode = i3627[3]
  request.r(i3627[4], i3627[5], 0, i3626, 'atlas')
  i3626.normalStyle = i3627[6]
  i3626.normalSpacingOffset = i3627[7]
  i3626.boldStyle = i3627[8]
  i3626.boldSpacing = i3627[9]
  i3626.italicStyle = i3627[10]
  i3626.tabSize = i3627[11]
  i3626.m_Version = i3627[12]
  i3626.m_SourceFontFileGUID = i3627[13]
  request.r(i3627[14], i3627[15], 0, i3626, 'm_SourceFontFile_EditorRef')
  request.r(i3627[16], i3627[17], 0, i3626, 'm_SourceFontFile')
  i3626.m_AtlasPopulationMode = i3627[18]
  i3626.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3627[19], i3626.m_FaceInfo)
  var i3629 = i3627[20]
  var i3628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.add(request.d('UnityEngine.TextCore.Glyph', i3629[i + 0]));
  }
  i3626.m_GlyphTable = i3628
  var i3631 = i3627[21]
  var i3630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.add(request.d('TMPro.TMP_Character', i3631[i + 0]));
  }
  i3626.m_CharacterTable = i3630
  var i3633 = i3627[22]
  var i3632 = []
  for(var i = 0; i < i3633.length; i += 2) {
  request.r(i3633[i + 0], i3633[i + 1], 2, i3632, '')
  }
  i3626.m_AtlasTextures = i3632
  i3626.m_AtlasTextureIndex = i3627[23]
  i3626.m_IsMultiAtlasTexturesEnabled = !!i3627[24]
  i3626.m_ClearDynamicDataOnBuild = !!i3627[25]
  var i3635 = i3627[26]
  var i3634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.add(request.d('UnityEngine.TextCore.GlyphRect', i3635[i + 0]));
  }
  i3626.m_UsedGlyphRects = i3634
  var i3637 = i3627[27]
  var i3636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.add(request.d('UnityEngine.TextCore.GlyphRect', i3637[i + 0]));
  }
  i3626.m_FreeGlyphRects = i3636
  i3626.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3627[28], i3626.m_fontInfo)
  i3626.m_AtlasWidth = i3627[29]
  i3626.m_AtlasHeight = i3627[30]
  i3626.m_AtlasPadding = i3627[31]
  i3626.m_AtlasRenderMode = i3627[32]
  var i3639 = i3627[33]
  var i3638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.add(request.d('TMPro.TMP_Glyph', i3639[i + 0]));
  }
  i3626.m_glyphInfoList = i3638
  i3626.m_KerningTable = request.d('TMPro.KerningTable', i3627[34], i3626.m_KerningTable)
  i3626.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3627[35], i3626.m_FontFeatureTable)
  var i3641 = i3627[36]
  var i3640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3641.length; i += 2) {
  request.r(i3641[i + 0], i3641[i + 1], 1, i3640, '')
  }
  i3626.fallbackFontAssets = i3640
  var i3643 = i3627[37]
  var i3642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3643.length; i += 2) {
  request.r(i3643[i + 0], i3643[i + 1], 1, i3642, '')
  }
  i3626.m_FallbackFontAssetTable = i3642
  i3626.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3627[38], i3626.m_CreationSettings)
  var i3645 = i3627[39]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( request.d('TMPro.TMP_FontWeightPair', i3645[i + 0]) );
  }
  i3626.m_FontWeightTable = i3644
  var i3647 = i3627[40]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( request.d('TMPro.TMP_FontWeightPair', i3647[i + 0]) );
  }
  i3626.fontWeights = i3646
  return i3626
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3649 = data
  i3648.m_FaceIndex = i3649[0]
  i3648.m_FamilyName = i3649[1]
  i3648.m_StyleName = i3649[2]
  i3648.m_PointSize = i3649[3]
  i3648.m_Scale = i3649[4]
  i3648.m_UnitsPerEM = i3649[5]
  i3648.m_LineHeight = i3649[6]
  i3648.m_AscentLine = i3649[7]
  i3648.m_CapLine = i3649[8]
  i3648.m_MeanLine = i3649[9]
  i3648.m_Baseline = i3649[10]
  i3648.m_DescentLine = i3649[11]
  i3648.m_SuperscriptOffset = i3649[12]
  i3648.m_SuperscriptSize = i3649[13]
  i3648.m_SubscriptOffset = i3649[14]
  i3648.m_SubscriptSize = i3649[15]
  i3648.m_UnderlineOffset = i3649[16]
  i3648.m_UnderlineThickness = i3649[17]
  i3648.m_StrikethroughOffset = i3649[18]
  i3648.m_StrikethroughThickness = i3649[19]
  i3648.m_TabWidth = i3649[20]
  return i3648
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3652 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3653 = data
  i3652.m_Index = i3653[0]
  i3652.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3653[1], i3652.m_Metrics)
  i3652.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3653[2], i3652.m_GlyphRect)
  i3652.m_Scale = i3653[3]
  i3652.m_AtlasIndex = i3653[4]
  i3652.m_ClassDefinitionType = i3653[5]
  return i3652
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3655 = data
  i3654.m_Width = i3655[0]
  i3654.m_Height = i3655[1]
  i3654.m_HorizontalBearingX = i3655[2]
  i3654.m_HorizontalBearingY = i3655[3]
  i3654.m_HorizontalAdvance = i3655[4]
  return i3654
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3657 = data
  i3656.m_X = i3657[0]
  i3656.m_Y = i3657[1]
  i3656.m_Width = i3657[2]
  i3656.m_Height = i3657[3]
  return i3656
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3660 = root || request.c( 'TMPro.TMP_Character' )
  var i3661 = data
  i3660.m_ElementType = i3661[0]
  i3660.m_Unicode = i3661[1]
  i3660.m_GlyphIndex = i3661[2]
  i3660.m_Scale = i3661[3]
  return i3660
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3666 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3667 = data
  i3666.Name = i3667[0]
  i3666.PointSize = i3667[1]
  i3666.Scale = i3667[2]
  i3666.CharacterCount = i3667[3]
  i3666.LineHeight = i3667[4]
  i3666.Baseline = i3667[5]
  i3666.Ascender = i3667[6]
  i3666.CapHeight = i3667[7]
  i3666.Descender = i3667[8]
  i3666.CenterLine = i3667[9]
  i3666.SuperscriptOffset = i3667[10]
  i3666.SubscriptOffset = i3667[11]
  i3666.SubSize = i3667[12]
  i3666.Underline = i3667[13]
  i3666.UnderlineThickness = i3667[14]
  i3666.strikethrough = i3667[15]
  i3666.strikethroughThickness = i3667[16]
  i3666.TabWidth = i3667[17]
  i3666.Padding = i3667[18]
  i3666.AtlasWidth = i3667[19]
  i3666.AtlasHeight = i3667[20]
  return i3666
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3670 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3671 = data
  i3670.id = i3671[0]
  i3670.x = i3671[1]
  i3670.y = i3671[2]
  i3670.width = i3671[3]
  i3670.height = i3671[4]
  i3670.xOffset = i3671[5]
  i3670.yOffset = i3671[6]
  i3670.xAdvance = i3671[7]
  i3670.scale = i3671[8]
  return i3670
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3672 = root || request.c( 'TMPro.KerningTable' )
  var i3673 = data
  var i3675 = i3673[0]
  var i3674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.add(request.d('TMPro.KerningPair', i3675[i + 0]));
  }
  i3672.kerningPairs = i3674
  return i3672
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3678 = root || request.c( 'TMPro.KerningPair' )
  var i3679 = data
  i3678.xOffset = i3679[0]
  i3678.m_FirstGlyph = i3679[1]
  i3678.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3679[2], i3678.m_FirstGlyphAdjustments)
  i3678.m_SecondGlyph = i3679[3]
  i3678.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3679[4], i3678.m_SecondGlyphAdjustments)
  i3678.m_IgnoreSpacingAdjustments = !!i3679[5]
  return i3678
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3680 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3681 = data
  var i3683 = i3681[0]
  var i3682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3683.length; i += 1) {
    i3682.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3683[i + 0]));
  }
  i3680.m_GlyphPairAdjustmentRecords = i3682
  return i3680
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3686 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3687 = data
  i3686.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3687[0], i3686.m_FirstAdjustmentRecord)
  i3686.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3687[1], i3686.m_SecondAdjustmentRecord)
  i3686.m_FeatureLookupFlags = i3687[2]
  return i3686
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3688 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3689 = data
  i3688.m_GlyphIndex = i3689[0]
  i3688.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3689[1], i3688.m_GlyphValueRecord)
  return i3688
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3690 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3691 = data
  i3690.m_XPlacement = i3691[0]
  i3690.m_YPlacement = i3691[1]
  i3690.m_XAdvance = i3691[2]
  i3690.m_YAdvance = i3691[3]
  return i3690
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3694 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3695 = data
  i3694.sourceFontFileName = i3695[0]
  i3694.sourceFontFileGUID = i3695[1]
  i3694.pointSizeSamplingMode = i3695[2]
  i3694.pointSize = i3695[3]
  i3694.padding = i3695[4]
  i3694.packingMode = i3695[5]
  i3694.atlasWidth = i3695[6]
  i3694.atlasHeight = i3695[7]
  i3694.characterSetSelectionMode = i3695[8]
  i3694.characterSequence = i3695[9]
  i3694.referencedFontAssetGUID = i3695[10]
  i3694.referencedTextAssetGUID = i3695[11]
  i3694.fontStyle = i3695[12]
  i3694.fontStyleModifier = i3695[13]
  i3694.renderMode = i3695[14]
  i3694.includeFontFeatures = !!i3695[15]
  return i3694
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3698 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3699 = data
  request.r(i3699[0], i3699[1], 0, i3698, 'regularTypeface')
  request.r(i3699[2], i3699[3], 0, i3698, 'italicTypeface')
  return i3698
}

Deserializers["TileSO"] = function (request, data, root) {
  var i3700 = root || request.c( 'TileSO' )
  var i3701 = data
  request.r(i3701[0], i3701[1], 0, i3700, 'icon')
  return i3700
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3702 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3703 = data
  i3702.hashCode = i3703[0]
  request.r(i3703[1], i3703[2], 0, i3702, 'material')
  i3702.materialHashCode = i3703[3]
  request.r(i3703[4], i3703[5], 0, i3702, 'spriteSheet')
  var i3705 = i3703[6]
  var i3704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.add(request.d('TMPro.TMP_Sprite', i3705[i + 0]));
  }
  i3702.spriteInfoList = i3704
  var i3707 = i3703[7]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3707.length; i += 2) {
  request.r(i3707[i + 0], i3707[i + 1], 1, i3706, '')
  }
  i3702.fallbackSpriteAssets = i3706
  i3702.m_Version = i3703[8]
  i3702.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3703[9], i3702.m_FaceInfo)
  var i3709 = i3703[10]
  var i3708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.add(request.d('TMPro.TMP_SpriteCharacter', i3709[i + 0]));
  }
  i3702.m_SpriteCharacterTable = i3708
  var i3711 = i3703[11]
  var i3710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.add(request.d('TMPro.TMP_SpriteGlyph', i3711[i + 0]));
  }
  i3702.m_SpriteGlyphTable = i3710
  return i3702
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3714 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3715 = data
  i3714.name = i3715[0]
  i3714.hashCode = i3715[1]
  i3714.unicode = i3715[2]
  i3714.pivot = new pc.Vec2( i3715[3], i3715[4] )
  request.r(i3715[5], i3715[6], 0, i3714, 'sprite')
  i3714.id = i3715[7]
  i3714.x = i3715[8]
  i3714.y = i3715[9]
  i3714.width = i3715[10]
  i3714.height = i3715[11]
  i3714.xOffset = i3715[12]
  i3714.yOffset = i3715[13]
  i3714.xAdvance = i3715[14]
  i3714.scale = i3715[15]
  return i3714
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3720 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3721 = data
  i3720.m_Name = i3721[0]
  i3720.m_HashCode = i3721[1]
  i3720.m_ElementType = i3721[2]
  i3720.m_Unicode = i3721[3]
  i3720.m_GlyphIndex = i3721[4]
  i3720.m_Scale = i3721[5]
  return i3720
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3724 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3725 = data
  request.r(i3725[0], i3725[1], 0, i3724, 'sprite')
  i3724.m_Index = i3725[2]
  i3724.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3725[3], i3724.m_Metrics)
  i3724.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3725[4], i3724.m_GlyphRect)
  i3724.m_Scale = i3725[5]
  i3724.m_AtlasIndex = i3725[6]
  i3724.m_ClassDefinitionType = i3725[7]
  return i3724
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3726 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3727 = data
  var i3729 = i3727[0]
  var i3728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.add(request.d('TMPro.TMP_Style', i3729[i + 0]));
  }
  i3726.m_StyleList = i3728
  return i3726
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3732 = root || request.c( 'TMPro.TMP_Style' )
  var i3733 = data
  i3732.m_Name = i3733[0]
  i3732.m_HashCode = i3733[1]
  i3732.m_OpeningDefinition = i3733[2]
  i3732.m_ClosingDefinition = i3733[3]
  i3732.m_OpeningTagArray = i3733[4]
  i3732.m_ClosingTagArray = i3733[5]
  i3732.m_OpeningTagUnicodeArray = i3733[6]
  i3732.m_ClosingTagUnicodeArray = i3733[7]
  return i3732
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3734 = root || request.c( 'TMPro.TMP_Settings' )
  var i3735 = data
  i3734.m_enableWordWrapping = !!i3735[0]
  i3734.m_enableKerning = !!i3735[1]
  i3734.m_enableExtraPadding = !!i3735[2]
  i3734.m_enableTintAllSprites = !!i3735[3]
  i3734.m_enableParseEscapeCharacters = !!i3735[4]
  i3734.m_EnableRaycastTarget = !!i3735[5]
  i3734.m_GetFontFeaturesAtRuntime = !!i3735[6]
  i3734.m_missingGlyphCharacter = i3735[7]
  i3734.m_warningsDisabled = !!i3735[8]
  request.r(i3735[9], i3735[10], 0, i3734, 'm_defaultFontAsset')
  i3734.m_defaultFontAssetPath = i3735[11]
  i3734.m_defaultFontSize = i3735[12]
  i3734.m_defaultAutoSizeMinRatio = i3735[13]
  i3734.m_defaultAutoSizeMaxRatio = i3735[14]
  i3734.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3735[15], i3735[16] )
  i3734.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3735[17], i3735[18] )
  i3734.m_autoSizeTextContainer = !!i3735[19]
  i3734.m_IsTextObjectScaleStatic = !!i3735[20]
  var i3737 = i3735[21]
  var i3736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3737.length; i += 2) {
  request.r(i3737[i + 0], i3737[i + 1], 1, i3736, '')
  }
  i3734.m_fallbackFontAssets = i3736
  i3734.m_matchMaterialPreset = !!i3735[22]
  request.r(i3735[23], i3735[24], 0, i3734, 'm_defaultSpriteAsset')
  i3734.m_defaultSpriteAssetPath = i3735[25]
  i3734.m_enableEmojiSupport = !!i3735[26]
  i3734.m_MissingCharacterSpriteUnicode = i3735[27]
  i3734.m_defaultColorGradientPresetsPath = i3735[28]
  request.r(i3735[29], i3735[30], 0, i3734, 'm_defaultStyleSheet')
  i3734.m_StyleSheetsResourcePath = i3735[31]
  request.r(i3735[32], i3735[33], 0, i3734, 'm_leadingCharacters')
  request.r(i3735[34], i3735[35], 0, i3734, 'm_followingCharacters')
  i3734.m_UseModernHangulLineBreakingRules = !!i3735[36]
  return i3734
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i3739 = data
  i3738._svcLunaVersion = i3739[0]
  var i3741 = i3739[1]
  var i3740 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.add(request.d(' .  ', i3741[i + 0]));
  }
  i3738._shaderVariants = i3740
  var i3743 = i3739[2]
  var i3742 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.add(request.d(' .  ', i3743[i + 0]));
  }
  i3738._usedByLunaBuild = i3742
  var i3745 = i3739[3]
  var i3744 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.add(request.d(' .  ', i3745[i + 0]));
  }
  i3738._includedShaderVariants = i3744
  var i3747 = i3739[4]
  var i3746 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.add(request.d(' .  ', i3747[i + 0]));
  }
  i3738._excludedShaderVariants = i3746
  i3738.version = System.Int64(i3739[5])
  var i3749 = i3739[6]
  var i3748 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i3749[i + 0]));
  }
  i3738._shaderParsedShaders = i3748
  var i3751 = i3739[7]
  var i3750 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.add(i3751[i + 0]);
  }
  i3738._modifiedShaders = i3750
  i3738.invalidShaders = !!i3739[8]
  i3738._cachedShadersPlatform = i3739[9]
  i3738._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i3739[10], i3738._sceneLightData)
  return i3738
}

Deserializers[" .  "] = function (request, data, root) {
  var i3754 = root || request.c( ' .  ' )
  var i3755 = data
  request.r(i3755[0], i3755[1], 0, i3754, 'shader')
  i3754.passType = i3755[2]
  i3754.passId = i3755[3]
  i3754.subShaderIndex = i3755[4]
  i3754.upToDate = !!i3755[5]
  var i3757 = i3755[6]
  var i3756 = []
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.push( i3757[i + 0] );
  }
  i3754.keywords = i3756
  return i3754
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i3761 = data
  var i3763 = i3761[0]
  var i3762 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i3763[i + 0]));
  }
  i3760.ParsedSubShaders = i3762
  request.r(i3761[1], i3761[2], 0, i3760, 'Shader')
  i3760.ShaderPath = i3761[3]
  var i3765 = i3761[4]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( i3765[i + 0] );
  }
  i3760.ShaderDefinedKeywords = i3764
  request.r(i3761[5], i3761[6], 0, i3760, 'fallbackShader')
  var i3767 = i3761[7]
  var i3766 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i3767[i + 0]));
  }
  i3760.CompilationErrors = i3766
  i3760.shaderCompilerPlatform = i3761[8]
  return i3760
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i3771 = data
  i3770.Index = i3771[0]
  var i3773 = i3771[1]
  var i3772 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i3773.length; i += 1) {
    i3772.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i3773[i + 0]));
  }
  i3770.Passes = i3772
  var i3775 = i3771[2]
  var i3774 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i3775[i + 0]));
  }
  i3770.Tags = i3774
  i3770.UsePass = !!i3771[3]
  return i3770
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i3779 = data
  i3778.ShaderName = i3779[0]
  var i3781 = i3779[1]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i3781[i + 0]));
  }
  i3778.ShaderVariants = i3780
  var i3783 = i3779[2]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( i3783[i + 0] );
  }
  i3778.definedKeywords = i3782
  var i3785 = i3779[3]
  var i3784 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i3785[i + 0]));
  }
  i3778.keywordGroups = i3784
  i3778.KeywordsMinimalCardinality = i3779[4]
  i3778.ContainsInvalidVariant = !!i3779[5]
  i3778.ShaderCompilerPlatform = i3779[6]
  i3778.HasDepthReader = !!i3779[7]
  i3778.Id = i3779[8]
  i3778.SubShaderIndex = i3779[9]
  i3778.SerializedObjectId = i3779[10]
  var i3787 = i3779[11]
  var i3786 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i3787[i + 0]));
  }
  i3778.Tags = i3786
  i3778.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i3779[12], i3778.UsePass)
  i3778.GrabPassTextureName = i3779[13]
  i3778.PassShaderRequirements = i3779[14]
  i3778.PlatformMask = i3779[15]
  return i3778
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i3791 = data
  i3790.NoShaderVariant = !!i3791[0]
  i3790.VertexProgram = i3791[1]
  i3790.FragmentProgram = i3791[2]
  i3790.LOD = i3791[3]
  i3790.readDepth = !!i3791[4]
  i3790.Index = i3791[5]
  i3790.PassId = i3791[6]
  i3790.SubShaderIndex = i3791[7]
  var i3793 = i3791[8]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.push( i3793[i + 0] );
  }
  i3790.Keywords = i3792
  var i3795 = i3791[9]
  var i3794 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i3795[i + 0]));
  }
  i3790.Tags = i3794
  return i3790
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i3799 = data
  i3798.Key = i3799[0]
  i3798.Value = i3799[1]
  return i3798
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i3803 = data
  var i3805 = i3803[0]
  var i3804 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.add(i3805[i + 0]);
  }
  i3802.Keywords = i3804
  return i3802
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i3807 = data
  i3806.shader = i3807[0]
  i3806.pass = i3807[1]
  return i3806
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i3811 = data
  i3810.ShaderName = i3811[0]
  var i3813 = i3811[1]
  var i3812 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i3813[i + 0]));
  }
  i3810.Details = i3812
  return i3810
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i3817 = data
  i3816.PointLightCount = i3817[0]
  i3816.SpotLightCount = i3817[1]
  i3816.DirectionalLightCount = i3817[2]
  i3816.LightmapOn = !!i3817[3]
  i3816.DirlightmapCombined = !!i3817[4]
  i3816.DirectionalCookieExists = !!i3817[5]
  i3816.PointCookieExists = !!i3817[6]
  i3816.SpotCookieExists = !!i3817[7]
  i3816.AddiitonalLightsKeywordRequired = !!i3817[8]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3819 = data
  var i3821 = i3819[0]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3821[i + 0]) );
  }
  i3818.files = i3820
  i3818.componentToPrefabIds = i3819[1]
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3825 = data
  i3824.path = i3825[0]
  request.r(i3825[1], i3825[2], 0, i3824, 'unityObject')
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3827 = data
  var i3829 = i3827[0]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3829[i + 0]) );
  }
  i3826.scriptsExecutionOrder = i3828
  var i3831 = i3827[1]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3831[i + 0]) );
  }
  i3826.sortingLayers = i3830
  var i3833 = i3827[2]
  var i3832 = []
  for(var i = 0; i < i3833.length; i += 1) {
    i3832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3833[i + 0]) );
  }
  i3826.cullingLayers = i3832
  i3826.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3827[3], i3826.timeSettings)
  i3826.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3827[4], i3826.physicsSettings)
  i3826.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3827[5], i3826.physics2DSettings)
  i3826.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3827[6], i3826.qualitySettings)
  i3826.enableRealtimeShadows = !!i3827[7]
  i3826.enableAutoInstancing = !!i3827[8]
  i3826.enableDynamicBatching = !!i3827[9]
  i3826.lightmapEncodingQuality = i3827[10]
  i3826.desiredColorSpace = i3827[11]
  var i3835 = i3827[12]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.push( i3835[i + 0] );
  }
  i3826.allTags = i3834
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3839 = data
  i3838.name = i3839[0]
  i3838.value = i3839[1]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3843 = data
  i3842.id = i3843[0]
  i3842.name = i3843[1]
  i3842.value = i3843[2]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3847 = data
  i3846.id = i3847[0]
  i3846.name = i3847[1]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3849 = data
  i3848.fixedDeltaTime = i3849[0]
  i3848.maximumDeltaTime = i3849[1]
  i3848.timeScale = i3849[2]
  i3848.maximumParticleTimestep = i3849[3]
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3851 = data
  i3850.gravity = new pc.Vec3( i3851[0], i3851[1], i3851[2] )
  i3850.defaultSolverIterations = i3851[3]
  i3850.bounceThreshold = i3851[4]
  i3850.autoSyncTransforms = !!i3851[5]
  i3850.autoSimulation = !!i3851[6]
  var i3853 = i3851[7]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3853[i + 0]) );
  }
  i3850.collisionMatrix = i3852
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3857 = data
  i3856.enabled = !!i3857[0]
  i3856.layerId = i3857[1]
  i3856.otherLayerId = i3857[2]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3859 = data
  request.r(i3859[0], i3859[1], 0, i3858, 'material')
  i3858.gravity = new pc.Vec2( i3859[2], i3859[3] )
  i3858.positionIterations = i3859[4]
  i3858.velocityIterations = i3859[5]
  i3858.velocityThreshold = i3859[6]
  i3858.maxLinearCorrection = i3859[7]
  i3858.maxAngularCorrection = i3859[8]
  i3858.maxTranslationSpeed = i3859[9]
  i3858.maxRotationSpeed = i3859[10]
  i3858.baumgarteScale = i3859[11]
  i3858.baumgarteTOIScale = i3859[12]
  i3858.timeToSleep = i3859[13]
  i3858.linearSleepTolerance = i3859[14]
  i3858.angularSleepTolerance = i3859[15]
  i3858.defaultContactOffset = i3859[16]
  i3858.autoSimulation = !!i3859[17]
  i3858.queriesHitTriggers = !!i3859[18]
  i3858.queriesStartInColliders = !!i3859[19]
  i3858.callbacksOnDisable = !!i3859[20]
  i3858.reuseCollisionCallbacks = !!i3859[21]
  i3858.autoSyncTransforms = !!i3859[22]
  var i3861 = i3859[23]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3861[i + 0]) );
  }
  i3858.collisionMatrix = i3860
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3865 = data
  i3864.enabled = !!i3865[0]
  i3864.layerId = i3865[1]
  i3864.otherLayerId = i3865[2]
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3867 = data
  var i3869 = i3867[0]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3869[i + 0]) );
  }
  i3866.qualityLevels = i3868
  var i3871 = i3867[1]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( i3871[i + 0] );
  }
  i3866.names = i3870
  i3866.shadows = i3867[2]
  i3866.anisotropicFiltering = i3867[3]
  i3866.antiAliasing = i3867[4]
  i3866.lodBias = i3867[5]
  i3866.shadowCascades = i3867[6]
  i3866.shadowDistance = i3867[7]
  i3866.shadowmaskMode = i3867[8]
  i3866.shadowProjection = i3867[9]
  i3866.shadowResolution = i3867[10]
  i3866.softParticles = !!i3867[11]
  i3866.softVegetation = !!i3867[12]
  i3866.activeColorSpace = i3867[13]
  i3866.desiredColorSpace = i3867[14]
  i3866.masterTextureLimit = i3867[15]
  i3866.maxQueuedFrames = i3867[16]
  i3866.particleRaycastBudget = i3867[17]
  i3866.pixelLightCount = i3867[18]
  i3866.realtimeReflectionProbes = !!i3867[19]
  i3866.shadowCascade2Split = i3867[20]
  i3866.shadowCascade4Split = new pc.Vec3( i3867[21], i3867[22], i3867[23] )
  i3866.streamingMipmapsActive = !!i3867[24]
  i3866.vSyncCount = i3867[25]
  i3866.asyncUploadBufferSize = i3867[26]
  i3866.asyncUploadTimeSlice = i3867[27]
  i3866.billboardsFaceCameraPosition = !!i3867[28]
  i3866.shadowNearPlaneOffset = i3867[29]
  i3866.streamingMipmapsMemoryBudget = i3867[30]
  i3866.maximumLODLevel = i3867[31]
  i3866.streamingMipmapsAddAllCameras = !!i3867[32]
  i3866.streamingMipmapsMaxLevelReduction = i3867[33]
  i3866.streamingMipmapsRenderersPerFrame = i3867[34]
  i3866.resolutionScalingFixedDPIFactor = i3867[35]
  i3866.streamingMipmapsMaxFileIORequests = i3867[36]
  i3866.currentQualityLevel = i3867[37]
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3877 = data
  i3876.weight = i3877[0]
  i3876.vertices = i3877[1]
  i3876.normals = i3877[2]
  i3876.tangents = i3877[3]
  return i3876
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3878 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3879 = data
  i3878.xPlacement = i3879[0]
  i3878.yPlacement = i3879[1]
  i3878.xAdvance = i3879[2]
  i3878.yAdvance = i3879[3]
  return i3878
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i3883 = data
  i3882.SubShaderIndex = i3883[0]
  i3882.PassId = i3883[1]
  var i3885 = i3883[2]
  var i3884 = []
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.push( i3885[i + 0] );
  }
  i3882.ShaderVariantKeywords = i3884
  var i3887 = i3883[3]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.push( i3887[i + 0] );
  }
  i3882.Messages = i3886
  return i3882
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[23],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[21],"81":[21],"82":[21],"83":[21],"84":[21],"85":[21],"86":[21],"87":[21],"88":[21],"89":[21],"90":[21],"91":[21],"92":[21],"93":[23],"94":[56],"95":[96],"97":[96],"43":[7],"98":[23],"99":[7],"100":[56,7],"12":[7,13],"101":[7],"102":[13,7],"103":[56],"104":[13,7],"105":[7],"106":[107],"108":[7],"109":[7],"48":[43],"11":[13,7],"110":[7],"47":[43],"111":[7],"51":[7],"50":[7],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[13,7],"119":[7],"120":[7],"121":[7],"122":[7],"123":[13,7],"124":[7],"125":[25],"126":[25],"26":[25],"127":[25],"128":[23],"129":[23],"130":[107],"131":[18],"132":[133],"134":[107]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","QuestSlot","TileSO","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","Tile","UnityEngine.SpriteRenderer","UnityEngine.TrailRenderer","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","TileSlot","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileActions","TileLockerBox","TilesBag","TileSpawnAnimation","TileMatcher","LoseCondition","WinCondition","InputTouch","EndCard","Quest","TileRandomSpawner","TileSpawner","UnityEngine.GameObject","TileBagSorter","UnityEngine.Canvas","Sounds","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResetLocalPosition","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Button","DeckLayer","TileLocker","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "3.0";

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

Deserializers.buildID = "5e982a37-d210-4299-a37a-7799b8c7587b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

