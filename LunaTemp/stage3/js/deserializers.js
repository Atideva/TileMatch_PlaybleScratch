var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4536 = root || request.c( 'UnityEngine.JointSpring' )
  var i4537 = data
  i4536.spring = i4537[0]
  i4536.damper = i4537[1]
  i4536.targetPosition = i4537[2]
  return i4536
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4538 = root || request.c( 'UnityEngine.JointMotor' )
  var i4539 = data
  i4538.m_TargetVelocity = i4539[0]
  i4538.m_Force = i4539[1]
  i4538.m_FreeSpin = i4539[2]
  return i4538
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4540 = root || request.c( 'UnityEngine.JointLimits' )
  var i4541 = data
  i4540.m_Min = i4541[0]
  i4540.m_Max = i4541[1]
  i4540.m_Bounciness = i4541[2]
  i4540.m_BounceMinVelocity = i4541[3]
  i4540.m_ContactDistance = i4541[4]
  i4540.minBounce = i4541[5]
  i4540.maxBounce = i4541[6]
  return i4540
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4542 = root || request.c( 'UnityEngine.JointDrive' )
  var i4543 = data
  i4542.m_PositionSpring = i4543[0]
  i4542.m_PositionDamper = i4543[1]
  i4542.m_MaximumForce = i4543[2]
  return i4542
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4544 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4545 = data
  i4544.m_Spring = i4545[0]
  i4544.m_Damper = i4545[1]
  return i4544
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4546 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4547 = data
  i4546.m_Limit = i4547[0]
  i4546.m_Bounciness = i4547[1]
  i4546.m_ContactDistance = i4547[2]
  return i4546
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4548 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4549 = data
  i4548.m_ExtremumSlip = i4549[0]
  i4548.m_ExtremumValue = i4549[1]
  i4548.m_AsymptoteSlip = i4549[2]
  i4548.m_AsymptoteValue = i4549[3]
  i4548.m_Stiffness = i4549[4]
  return i4548
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4550 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4551 = data
  i4550.m_LowerAngle = i4551[0]
  i4550.m_UpperAngle = i4551[1]
  return i4550
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4552 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4553 = data
  i4552.m_MotorSpeed = i4553[0]
  i4552.m_MaximumMotorTorque = i4553[1]
  return i4552
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4554 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4555 = data
  i4554.m_DampingRatio = i4555[0]
  i4554.m_Frequency = i4555[1]
  i4554.m_Angle = i4555[2]
  return i4554
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4556 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4557 = data
  i4556.m_LowerTranslation = i4557[0]
  i4556.m_UpperTranslation = i4557[1]
  return i4556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4558 = root || new pc.UnityMaterial()
  var i4559 = data
  i4558.name = i4559[0]
  request.r(i4559[1], i4559[2], 0, i4558, 'shader')
  i4558.renderQueue = i4559[3]
  i4558.enableInstancing = !!i4559[4]
  var i4561 = i4559[5]
  var i4560 = []
  for(var i = 0; i < i4561.length; i += 1) {
    i4560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4561[i + 0]) );
  }
  i4558.floatParameters = i4560
  var i4563 = i4559[6]
  var i4562 = []
  for(var i = 0; i < i4563.length; i += 1) {
    i4562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4563[i + 0]) );
  }
  i4558.colorParameters = i4562
  var i4565 = i4559[7]
  var i4564 = []
  for(var i = 0; i < i4565.length; i += 1) {
    i4564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4565[i + 0]) );
  }
  i4558.vectorParameters = i4564
  var i4567 = i4559[8]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 1) {
    i4566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4567[i + 0]) );
  }
  i4558.textureParameters = i4566
  var i4569 = i4559[9]
  var i4568 = []
  for(var i = 0; i < i4569.length; i += 1) {
    i4568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4569[i + 0]) );
  }
  i4558.materialFlags = i4568
  return i4558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4573 = data
  i4572.name = i4573[0]
  i4572.value = i4573[1]
  return i4572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4577 = data
  i4576.name = i4577[0]
  i4576.value = new pc.Color(i4577[1], i4577[2], i4577[3], i4577[4])
  return i4576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4581 = data
  i4580.name = i4581[0]
  i4580.value = new pc.Vec4( i4581[1], i4581[2], i4581[3], i4581[4] )
  return i4580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4585 = data
  i4584.name = i4585[0]
  request.r(i4585[1], i4585[2], 0, i4584, 'value')
  return i4584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4589 = data
  i4588.name = i4589[0]
  i4588.enabled = !!i4589[1]
  return i4588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4591 = data
  i4590.name = i4591[0]
  i4590.width = i4591[1]
  i4590.height = i4591[2]
  i4590.mipmapCount = i4591[3]
  i4590.anisoLevel = i4591[4]
  i4590.filterMode = i4591[5]
  i4590.hdr = !!i4591[6]
  i4590.format = i4591[7]
  i4590.wrapMode = i4591[8]
  i4590.alphaIsTransparency = !!i4591[9]
  i4590.alphaSource = i4591[10]
  i4590.graphicsFormat = i4591[11]
  i4590.sRGBTexture = !!i4591[12]
  i4590.desiredColorSpace = i4591[13]
  i4590.wrapU = i4591[14]
  i4590.wrapV = i4591[15]
  return i4590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4593 = data
  i4592.position = new pc.Vec3( i4593[0], i4593[1], i4593[2] )
  i4592.scale = new pc.Vec3( i4593[3], i4593[4], i4593[5] )
  i4592.rotation = new pc.Quat(i4593[6], i4593[7], i4593[8], i4593[9])
  return i4592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4595 = data
  i4594.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4595[0], i4594.main)
  i4594.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4595[1], i4594.colorBySpeed)
  i4594.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4595[2], i4594.colorOverLifetime)
  i4594.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4595[3], i4594.emission)
  i4594.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4595[4], i4594.rotationBySpeed)
  i4594.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4595[5], i4594.rotationOverLifetime)
  i4594.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4595[6], i4594.shape)
  i4594.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4595[7], i4594.sizeBySpeed)
  i4594.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4595[8], i4594.sizeOverLifetime)
  i4594.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4595[9], i4594.textureSheetAnimation)
  i4594.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4595[10], i4594.velocityOverLifetime)
  i4594.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4595[11], i4594.noise)
  i4594.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4595[12], i4594.inheritVelocity)
  i4594.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4595[13], i4594.forceOverLifetime)
  i4594.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4595[14], i4594.limitVelocityOverLifetime)
  i4594.useAutoRandomSeed = !!i4595[15]
  i4594.randomSeed = i4595[16]
  return i4594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4596 = root || new pc.ParticleSystemMain()
  var i4597 = data
  i4596.duration = i4597[0]
  i4596.loop = !!i4597[1]
  i4596.prewarm = !!i4597[2]
  i4596.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[3], i4596.startDelay)
  i4596.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[4], i4596.startLifetime)
  i4596.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[5], i4596.startSpeed)
  i4596.startSize3D = !!i4597[6]
  i4596.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[7], i4596.startSizeX)
  i4596.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[8], i4596.startSizeY)
  i4596.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[9], i4596.startSizeZ)
  i4596.startRotation3D = !!i4597[10]
  i4596.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[11], i4596.startRotationX)
  i4596.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[12], i4596.startRotationY)
  i4596.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[13], i4596.startRotationZ)
  i4596.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4597[14], i4596.startColor)
  i4596.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4597[15], i4596.gravityModifier)
  i4596.simulationSpace = i4597[16]
  request.r(i4597[17], i4597[18], 0, i4596, 'customSimulationSpace')
  i4596.simulationSpeed = i4597[19]
  i4596.useUnscaledTime = !!i4597[20]
  i4596.scalingMode = i4597[21]
  i4596.playOnAwake = !!i4597[22]
  i4596.maxParticles = i4597[23]
  i4596.emitterVelocityMode = i4597[24]
  i4596.stopAction = i4597[25]
  return i4596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4598 = root || new pc.MinMaxCurve()
  var i4599 = data
  i4598.mode = i4599[0]
  i4598.curveMin = new pc.AnimationCurve( { keys_flow: i4599[1] } )
  i4598.curveMax = new pc.AnimationCurve( { keys_flow: i4599[2] } )
  i4598.curveMultiplier = i4599[3]
  i4598.constantMin = i4599[4]
  i4598.constantMax = i4599[5]
  return i4598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4600 = root || new pc.MinMaxGradient()
  var i4601 = data
  i4600.mode = i4601[0]
  i4600.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4601[1], i4600.gradientMin)
  i4600.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4601[2], i4600.gradientMax)
  i4600.colorMin = new pc.Color(i4601[3], i4601[4], i4601[5], i4601[6])
  i4600.colorMax = new pc.Color(i4601[7], i4601[8], i4601[9], i4601[10])
  return i4600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4603 = data
  i4602.mode = i4603[0]
  var i4605 = i4603[1]
  var i4604 = []
  for(var i = 0; i < i4605.length; i += 1) {
    i4604.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4605[i + 0]) );
  }
  i4602.colorKeys = i4604
  var i4607 = i4603[2]
  var i4606 = []
  for(var i = 0; i < i4607.length; i += 1) {
    i4606.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4607[i + 0]) );
  }
  i4602.alphaKeys = i4606
  return i4602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4608 = root || new pc.ParticleSystemColorBySpeed()
  var i4609 = data
  i4608.enabled = !!i4609[0]
  i4608.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4609[1], i4608.color)
  i4608.range = new pc.Vec2( i4609[2], i4609[3] )
  return i4608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4613 = data
  i4612.color = new pc.Color(i4613[0], i4613[1], i4613[2], i4613[3])
  i4612.time = i4613[4]
  return i4612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4617 = data
  i4616.alpha = i4617[0]
  i4616.time = i4617[1]
  return i4616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4618 = root || new pc.ParticleSystemColorOverLifetime()
  var i4619 = data
  i4618.enabled = !!i4619[0]
  i4618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4619[1], i4618.color)
  return i4618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4620 = root || new pc.ParticleSystemEmitter()
  var i4621 = data
  i4620.enabled = !!i4621[0]
  i4620.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[1], i4620.rateOverTime)
  i4620.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[2], i4620.rateOverDistance)
  var i4623 = i4621[3]
  var i4622 = []
  for(var i = 0; i < i4623.length; i += 1) {
    i4622.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4623[i + 0]) );
  }
  i4620.bursts = i4622
  return i4620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4626 = root || new pc.ParticleSystemBurst()
  var i4627 = data
  i4626.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4627[0], i4626.count)
  i4626.cycleCount = i4627[1]
  i4626.minCount = i4627[2]
  i4626.maxCount = i4627[3]
  i4626.repeatInterval = i4627[4]
  i4626.time = i4627[5]
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4628 = root || new pc.ParticleSystemRotationBySpeed()
  var i4629 = data
  i4628.enabled = !!i4629[0]
  i4628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4629[1], i4628.x)
  i4628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4629[2], i4628.y)
  i4628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4629[3], i4628.z)
  i4628.separateAxes = !!i4629[4]
  i4628.range = new pc.Vec2( i4629[5], i4629[6] )
  return i4628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4630 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4631 = data
  i4630.enabled = !!i4631[0]
  i4630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4631[1], i4630.x)
  i4630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4631[2], i4630.y)
  i4630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4631[3], i4630.z)
  i4630.separateAxes = !!i4631[4]
  return i4630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4632 = root || new pc.ParticleSystemShape()
  var i4633 = data
  i4632.enabled = !!i4633[0]
  i4632.shapeType = i4633[1]
  i4632.randomDirectionAmount = i4633[2]
  i4632.sphericalDirectionAmount = i4633[3]
  i4632.randomPositionAmount = i4633[4]
  i4632.alignToDirection = !!i4633[5]
  i4632.radius = i4633[6]
  i4632.radiusMode = i4633[7]
  i4632.radiusSpread = i4633[8]
  i4632.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4633[9], i4632.radiusSpeed)
  i4632.radiusThickness = i4633[10]
  i4632.angle = i4633[11]
  i4632.length = i4633[12]
  i4632.boxThickness = new pc.Vec3( i4633[13], i4633[14], i4633[15] )
  i4632.meshShapeType = i4633[16]
  request.r(i4633[17], i4633[18], 0, i4632, 'mesh')
  request.r(i4633[19], i4633[20], 0, i4632, 'meshRenderer')
  request.r(i4633[21], i4633[22], 0, i4632, 'skinnedMeshRenderer')
  i4632.useMeshMaterialIndex = !!i4633[23]
  i4632.meshMaterialIndex = i4633[24]
  i4632.useMeshColors = !!i4633[25]
  i4632.normalOffset = i4633[26]
  i4632.arc = i4633[27]
  i4632.arcMode = i4633[28]
  i4632.arcSpread = i4633[29]
  i4632.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4633[30], i4632.arcSpeed)
  i4632.donutRadius = i4633[31]
  i4632.position = new pc.Vec3( i4633[32], i4633[33], i4633[34] )
  i4632.rotation = new pc.Vec3( i4633[35], i4633[36], i4633[37] )
  i4632.scale = new pc.Vec3( i4633[38], i4633[39], i4633[40] )
  return i4632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4634 = root || new pc.ParticleSystemSizeBySpeed()
  var i4635 = data
  i4634.enabled = !!i4635[0]
  i4634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4635[1], i4634.x)
  i4634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4635[2], i4634.y)
  i4634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4635[3], i4634.z)
  i4634.separateAxes = !!i4635[4]
  i4634.range = new pc.Vec2( i4635[5], i4635[6] )
  return i4634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4636 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4637 = data
  i4636.enabled = !!i4637[0]
  i4636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4637[1], i4636.x)
  i4636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4637[2], i4636.y)
  i4636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4637[3], i4636.z)
  i4636.separateAxes = !!i4637[4]
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4638 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4639 = data
  i4638.enabled = !!i4639[0]
  i4638.mode = i4639[1]
  i4638.animation = i4639[2]
  i4638.numTilesX = i4639[3]
  i4638.numTilesY = i4639[4]
  i4638.useRandomRow = !!i4639[5]
  i4638.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4639[6], i4638.frameOverTime)
  i4638.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4639[7], i4638.startFrame)
  i4638.cycleCount = i4639[8]
  i4638.rowIndex = i4639[9]
  i4638.flipU = i4639[10]
  i4638.flipV = i4639[11]
  i4638.spriteCount = i4639[12]
  var i4641 = i4639[13]
  var i4640 = []
  for(var i = 0; i < i4641.length; i += 2) {
  request.r(i4641[i + 0], i4641[i + 1], 2, i4640, '')
  }
  i4638.sprites = i4640
  return i4638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4644 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4645 = data
  i4644.enabled = !!i4645[0]
  i4644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[1], i4644.x)
  i4644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[2], i4644.y)
  i4644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[3], i4644.z)
  i4644.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[4], i4644.radial)
  i4644.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[5], i4644.speedModifier)
  i4644.space = i4645[6]
  i4644.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[7], i4644.orbitalX)
  i4644.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[8], i4644.orbitalY)
  i4644.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[9], i4644.orbitalZ)
  i4644.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[10], i4644.orbitalOffsetX)
  i4644.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[11], i4644.orbitalOffsetY)
  i4644.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[12], i4644.orbitalOffsetZ)
  return i4644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4646 = root || new pc.ParticleSystemNoise()
  var i4647 = data
  i4646.enabled = !!i4647[0]
  i4646.separateAxes = !!i4647[1]
  i4646.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[2], i4646.strengthX)
  i4646.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[3], i4646.strengthY)
  i4646.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[4], i4646.strengthZ)
  i4646.frequency = i4647[5]
  i4646.damping = !!i4647[6]
  i4646.octaveCount = i4647[7]
  i4646.octaveMultiplier = i4647[8]
  i4646.octaveScale = i4647[9]
  i4646.quality = i4647[10]
  i4646.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[11], i4646.scrollSpeed)
  i4646.scrollSpeedMultiplier = i4647[12]
  i4646.remapEnabled = !!i4647[13]
  i4646.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[14], i4646.remapX)
  i4646.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[15], i4646.remapY)
  i4646.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[16], i4646.remapZ)
  i4646.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[17], i4646.positionAmount)
  i4646.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[18], i4646.rotationAmount)
  i4646.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[19], i4646.sizeAmount)
  return i4646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4648 = root || new pc.ParticleSystemInheritVelocity()
  var i4649 = data
  i4648.enabled = !!i4649[0]
  i4648.mode = i4649[1]
  i4648.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[2], i4648.curve)
  return i4648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4650 = root || new pc.ParticleSystemForceOverLifetime()
  var i4651 = data
  i4650.enabled = !!i4651[0]
  i4650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4651[1], i4650.x)
  i4650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4651[2], i4650.y)
  i4650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4651[3], i4650.z)
  i4650.space = i4651[4]
  i4650.randomized = !!i4651[5]
  return i4650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4652 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4653 = data
  i4652.enabled = !!i4653[0]
  i4652.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[1], i4652.limit)
  i4652.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[2], i4652.limitX)
  i4652.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[3], i4652.limitY)
  i4652.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[4], i4652.limitZ)
  i4652.dampen = i4653[5]
  i4652.separateAxes = !!i4653[6]
  i4652.space = i4653[7]
  i4652.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[8], i4652.drag)
  i4652.multiplyDragByParticleSize = !!i4653[9]
  i4652.multiplyDragByParticleVelocity = !!i4653[10]
  return i4652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4655 = data
  i4654.enabled = !!i4655[0]
  request.r(i4655[1], i4655[2], 0, i4654, 'sharedMaterial')
  var i4657 = i4655[3]
  var i4656 = []
  for(var i = 0; i < i4657.length; i += 2) {
  request.r(i4657[i + 0], i4657[i + 1], 2, i4656, '')
  }
  i4654.sharedMaterials = i4656
  i4654.receiveShadows = !!i4655[4]
  i4654.shadowCastingMode = i4655[5]
  i4654.sortingLayerID = i4655[6]
  i4654.sortingOrder = i4655[7]
  i4654.lightmapIndex = i4655[8]
  i4654.lightmapSceneIndex = i4655[9]
  i4654.lightmapScaleOffset = new pc.Vec4( i4655[10], i4655[11], i4655[12], i4655[13] )
  i4654.lightProbeUsage = i4655[14]
  i4654.reflectionProbeUsage = i4655[15]
  request.r(i4655[16], i4655[17], 0, i4654, 'mesh')
  i4654.meshCount = i4655[18]
  i4654.activeVertexStreamsCount = i4655[19]
  i4654.alignment = i4655[20]
  i4654.renderMode = i4655[21]
  i4654.sortMode = i4655[22]
  i4654.lengthScale = i4655[23]
  i4654.velocityScale = i4655[24]
  i4654.cameraVelocityScale = i4655[25]
  i4654.normalDirection = i4655[26]
  i4654.sortingFudge = i4655[27]
  i4654.minParticleSize = i4655[28]
  i4654.maxParticleSize = i4655[29]
  i4654.pivot = new pc.Vec3( i4655[30], i4655[31], i4655[32] )
  request.r(i4655[33], i4655[34], 0, i4654, 'trailMaterial')
  return i4654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4661 = data
  i4660.name = i4661[0]
  i4660.tagId = i4661[1]
  i4660.enabled = !!i4661[2]
  i4660.isStatic = !!i4661[3]
  i4660.layer = i4661[4]
  return i4660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4663 = data
  i4662.name = i4663[0]
  i4662.halfPrecision = !!i4663[1]
  i4662.useUInt32IndexFormat = !!i4663[2]
  i4662.vertexCount = i4663[3]
  i4662.aabb = i4663[4]
  var i4665 = i4663[5]
  var i4664 = []
  for(var i = 0; i < i4665.length; i += 1) {
    i4664.push( !!i4665[i + 0] );
  }
  i4662.streams = i4664
  i4662.vertices = i4663[6]
  var i4667 = i4663[7]
  var i4666 = []
  for(var i = 0; i < i4667.length; i += 1) {
    i4666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4667[i + 0]) );
  }
  i4662.subMeshes = i4666
  var i4669 = i4663[8]
  var i4668 = []
  for(var i = 0; i < i4669.length; i += 16) {
    i4668.push( new pc.Mat4().setData(i4669[i + 0], i4669[i + 1], i4669[i + 2], i4669[i + 3],  i4669[i + 4], i4669[i + 5], i4669[i + 6], i4669[i + 7],  i4669[i + 8], i4669[i + 9], i4669[i + 10], i4669[i + 11],  i4669[i + 12], i4669[i + 13], i4669[i + 14], i4669[i + 15]) );
  }
  i4662.bindposes = i4668
  var i4671 = i4663[9]
  var i4670 = []
  for(var i = 0; i < i4671.length; i += 1) {
    i4670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4671[i + 0]) );
  }
  i4662.blendShapes = i4670
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4677 = data
  i4676.triangles = i4677[0]
  return i4676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4683 = data
  i4682.name = i4683[0]
  var i4685 = i4683[1]
  var i4684 = []
  for(var i = 0; i < i4685.length; i += 1) {
    i4684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4685[i + 0]) );
  }
  i4682.frames = i4684
  return i4682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4687 = data
  i4686.pivot = new pc.Vec2( i4687[0], i4687[1] )
  i4686.anchorMin = new pc.Vec2( i4687[2], i4687[3] )
  i4686.anchorMax = new pc.Vec2( i4687[4], i4687[5] )
  i4686.sizeDelta = new pc.Vec2( i4687[6], i4687[7] )
  i4686.anchoredPosition3D = new pc.Vec3( i4687[8], i4687[9], i4687[10] )
  i4686.rotation = new pc.Quat(i4687[11], i4687[12], i4687[13], i4687[14])
  i4686.scale = new pc.Vec3( i4687[15], i4687[16], i4687[17] )
  return i4686
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i4688 = root || request.c( 'QuestSlot' )
  var i4689 = data
  i4688.InitialScale = new pc.Vec3( i4689[0], i4689[1], i4689[2] )
  i4688.MaximumScale = new pc.Vec3( i4689[3], i4689[4], i4689[5] )
  i4688.EndScale = new pc.Vec3( i4689[6], i4689[7], i4689[8] )
  i4688.animationDuration = i4689[9]
  i4688.maxSizeTrigger = i4689[10]
  request.r(i4689[11], i4689[12], 0, i4688, 'type')
  i4688.amount = i4689[13]
  i4688.locked = !!i4689[14]
  request.r(i4689[15], i4689[16], 0, i4688, 'icon')
  request.r(i4689[17], i4689[18], 0, i4688, 'amountTxt')
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4691 = data
  i4690.cullTransparentMesh = !!i4691[0]
  return i4690
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4692 = root || request.c( 'UnityEngine.UI.Image' )
  var i4693 = data
  request.r(i4693[0], i4693[1], 0, i4692, 'm_Sprite')
  i4692.m_Type = i4693[2]
  i4692.m_PreserveAspect = !!i4693[3]
  i4692.m_FillCenter = !!i4693[4]
  i4692.m_FillMethod = i4693[5]
  i4692.m_FillAmount = i4693[6]
  i4692.m_FillClockwise = !!i4693[7]
  i4692.m_FillOrigin = i4693[8]
  i4692.m_UseSpriteMesh = !!i4693[9]
  i4692.m_PixelsPerUnitMultiplier = i4693[10]
  request.r(i4693[11], i4693[12], 0, i4692, 'm_Material')
  i4692.m_Maskable = !!i4693[13]
  i4692.m_Color = new pc.Color(i4693[14], i4693[15], i4693[16], i4693[17])
  i4692.m_RaycastTarget = !!i4693[18]
  i4692.m_RaycastPadding = new pc.Vec4( i4693[19], i4693[20], i4693[21], i4693[22] )
  return i4692
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4694 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4695 = data
  i4694.m_hasFontAssetChanged = !!i4695[0]
  request.r(i4695[1], i4695[2], 0, i4694, 'm_baseMaterial')
  i4694.m_maskOffset = new pc.Vec4( i4695[3], i4695[4], i4695[5], i4695[6] )
  i4694.m_text = i4695[7]
  i4694.m_isRightToLeft = !!i4695[8]
  request.r(i4695[9], i4695[10], 0, i4694, 'm_fontAsset')
  request.r(i4695[11], i4695[12], 0, i4694, 'm_sharedMaterial')
  var i4697 = i4695[13]
  var i4696 = []
  for(var i = 0; i < i4697.length; i += 2) {
  request.r(i4697[i + 0], i4697[i + 1], 2, i4696, '')
  }
  i4694.m_fontSharedMaterials = i4696
  request.r(i4695[14], i4695[15], 0, i4694, 'm_fontMaterial')
  var i4699 = i4695[16]
  var i4698 = []
  for(var i = 0; i < i4699.length; i += 2) {
  request.r(i4699[i + 0], i4699[i + 1], 2, i4698, '')
  }
  i4694.m_fontMaterials = i4698
  i4694.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4695[17], i4695[18], i4695[19], i4695[20])
  i4694.m_fontColor = new pc.Color(i4695[21], i4695[22], i4695[23], i4695[24])
  i4694.m_enableVertexGradient = !!i4695[25]
  i4694.m_colorMode = i4695[26]
  i4694.m_fontColorGradient = request.d('TMPro.VertexGradient', i4695[27], i4694.m_fontColorGradient)
  request.r(i4695[28], i4695[29], 0, i4694, 'm_fontColorGradientPreset')
  request.r(i4695[30], i4695[31], 0, i4694, 'm_spriteAsset')
  i4694.m_tintAllSprites = !!i4695[32]
  request.r(i4695[33], i4695[34], 0, i4694, 'm_StyleSheet')
  i4694.m_TextStyleHashCode = i4695[35]
  i4694.m_overrideHtmlColors = !!i4695[36]
  i4694.m_faceColor = UnityEngine.Color32.ConstructColor(i4695[37], i4695[38], i4695[39], i4695[40])
  i4694.m_fontSize = i4695[41]
  i4694.m_fontSizeBase = i4695[42]
  i4694.m_fontWeight = i4695[43]
  i4694.m_enableAutoSizing = !!i4695[44]
  i4694.m_fontSizeMin = i4695[45]
  i4694.m_fontSizeMax = i4695[46]
  i4694.m_fontStyle = i4695[47]
  i4694.m_HorizontalAlignment = i4695[48]
  i4694.m_VerticalAlignment = i4695[49]
  i4694.m_textAlignment = i4695[50]
  i4694.m_characterSpacing = i4695[51]
  i4694.m_wordSpacing = i4695[52]
  i4694.m_lineSpacing = i4695[53]
  i4694.m_lineSpacingMax = i4695[54]
  i4694.m_paragraphSpacing = i4695[55]
  i4694.m_charWidthMaxAdj = i4695[56]
  i4694.m_enableWordWrapping = !!i4695[57]
  i4694.m_wordWrappingRatios = i4695[58]
  i4694.m_overflowMode = i4695[59]
  request.r(i4695[60], i4695[61], 0, i4694, 'm_linkedTextComponent')
  request.r(i4695[62], i4695[63], 0, i4694, 'parentLinkedComponent')
  i4694.m_enableKerning = !!i4695[64]
  i4694.m_enableExtraPadding = !!i4695[65]
  i4694.checkPaddingRequired = !!i4695[66]
  i4694.m_isRichText = !!i4695[67]
  i4694.m_parseCtrlCharacters = !!i4695[68]
  i4694.m_isOrthographic = !!i4695[69]
  i4694.m_isCullingEnabled = !!i4695[70]
  i4694.m_horizontalMapping = i4695[71]
  i4694.m_verticalMapping = i4695[72]
  i4694.m_uvLineOffset = i4695[73]
  i4694.m_geometrySortingOrder = i4695[74]
  i4694.m_IsTextObjectScaleStatic = !!i4695[75]
  i4694.m_VertexBufferAutoSizeReduction = !!i4695[76]
  i4694.m_useMaxVisibleDescender = !!i4695[77]
  i4694.m_pageToDisplay = i4695[78]
  i4694.m_margin = new pc.Vec4( i4695[79], i4695[80], i4695[81], i4695[82] )
  i4694.m_isUsingLegacyAnimationComponent = !!i4695[83]
  i4694.m_isVolumetricText = !!i4695[84]
  request.r(i4695[85], i4695[86], 0, i4694, 'm_Material')
  i4694.m_Maskable = !!i4695[87]
  i4694.m_Color = new pc.Color(i4695[88], i4695[89], i4695[90], i4695[91])
  i4694.m_RaycastTarget = !!i4695[92]
  i4694.m_RaycastPadding = new pc.Vec4( i4695[93], i4695[94], i4695[95], i4695[96] )
  return i4694
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4700 = root || request.c( 'TMPro.VertexGradient' )
  var i4701 = data
  i4700.topLeft = new pc.Color(i4701[0], i4701[1], i4701[2], i4701[3])
  i4700.topRight = new pc.Color(i4701[4], i4701[5], i4701[6], i4701[7])
  i4700.bottomLeft = new pc.Color(i4701[8], i4701[9], i4701[10], i4701[11])
  i4700.bottomRight = new pc.Color(i4701[12], i4701[13], i4701[14], i4701[15])
  return i4700
}

Deserializers["Tile"] = function (request, data, root) {
  var i4702 = root || request.c( 'Tile' )
  var i4703 = data
  i4702.layer = i4703[0]
  i4702.line = i4703[1]
  request.r(i4703[2], i4703[3], 0, i4702, 'icon')
  request.r(i4703[4], i4703[5], 0, i4702, 'lockTile')
  request.r(i4703[6], i4703[7], 0, i4702, 'background')
  request.r(i4703[8], i4703[9], 0, i4702, 'trail')
  i4702.defaultSize = new pc.Vec3( i4703[10], i4703[11], i4703[12] )
  i4702.speed = i4703[13]
  i4702.spawnAnimSize = i4703[14]
  i4702.spawnAnimDuration = i4703[15]
  i4702.customColissionBox = !!i4703[16]
  i4702.locked = !!i4703[17]
  i4702.isHidden = !!i4703[18]
  i4702.lockAlpha = i4703[19]
  i4702.fadeDuration = i4703[20]
  i4702.debug = !!i4703[21]
  request.r(i4703[22], i4703[23], 0, i4702, 'type')
  i4702.box = request.d('Box', i4703[24], i4702.box)
  i4702.iconSort = i4703[25]
  i4702.backGroundSort = i4703[26]
  i4702.disabledSort = i4703[27]
  i4702.trailSort = i4703[28]
  var i4705 = i4703[29]
  var i4704 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i4705.length; i += 2) {
  request.r(i4705[i + 0], i4705[i + 1], 1, i4704, '')
  }
  i4702.coverTiles = i4704
  return i4702
}

Deserializers["Box"] = function (request, data, root) {
  var i4706 = root || request.c( 'Box' )
  var i4707 = data
  i4706.Position = new pc.Vec2( i4707[0], i4707[1] )
  i4706.Width = i4707[2]
  i4706.Height = i4707[3]
  return i4706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4711 = data
  i4710.usedByComposite = !!i4711[0]
  i4710.autoTiling = !!i4711[1]
  i4710.size = new pc.Vec2( i4711[2], i4711[3] )
  i4710.edgeRadius = i4711[4]
  i4710.enabled = !!i4711[5]
  i4710.isTrigger = !!i4711[6]
  i4710.usedByEffector = !!i4711[7]
  i4710.density = i4711[8]
  i4710.offset = new pc.Vec2( i4711[9], i4711[10] )
  request.r(i4711[11], i4711[12], 0, i4710, 'material')
  return i4710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i4712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i4713 = data
  i4712.bodyType = i4713[0]
  request.r(i4713[1], i4713[2], 0, i4712, 'material')
  i4712.simulated = !!i4713[3]
  i4712.useAutoMass = !!i4713[4]
  i4712.mass = i4713[5]
  i4712.drag = i4713[6]
  i4712.angularDrag = i4713[7]
  i4712.gravityScale = i4713[8]
  i4712.collisionDetectionMode = i4713[9]
  i4712.sleepMode = i4713[10]
  i4712.constraints = i4713[11]
  return i4712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4715 = data
  i4714.enabled = !!i4715[0]
  request.r(i4715[1], i4715[2], 0, i4714, 'sharedMaterial')
  var i4717 = i4715[3]
  var i4716 = []
  for(var i = 0; i < i4717.length; i += 2) {
  request.r(i4717[i + 0], i4717[i + 1], 2, i4716, '')
  }
  i4714.sharedMaterials = i4716
  i4714.receiveShadows = !!i4715[4]
  i4714.shadowCastingMode = i4715[5]
  i4714.sortingLayerID = i4715[6]
  i4714.sortingOrder = i4715[7]
  i4714.lightmapIndex = i4715[8]
  i4714.lightmapSceneIndex = i4715[9]
  i4714.lightmapScaleOffset = new pc.Vec4( i4715[10], i4715[11], i4715[12], i4715[13] )
  i4714.lightProbeUsage = i4715[14]
  i4714.reflectionProbeUsage = i4715[15]
  i4714.color = new pc.Color(i4715[16], i4715[17], i4715[18], i4715[19])
  request.r(i4715[20], i4715[21], 0, i4714, 'sprite')
  i4714.flipX = !!i4715[22]
  i4714.flipY = !!i4715[23]
  i4714.drawMode = i4715[24]
  i4714.size = new pc.Vec2( i4715[25], i4715[26] )
  i4714.tileMode = i4715[27]
  i4714.adaptiveModeThreshold = i4715[28]
  i4714.maskInteraction = i4715[29]
  i4714.spriteSortPoint = i4715[30]
  return i4714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i4718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i4719 = data
  i4718.enabled = !!i4719[0]
  request.r(i4719[1], i4719[2], 0, i4718, 'sharedMaterial')
  var i4721 = i4719[3]
  var i4720 = []
  for(var i = 0; i < i4721.length; i += 2) {
  request.r(i4721[i + 0], i4721[i + 1], 2, i4720, '')
  }
  i4718.sharedMaterials = i4720
  i4718.receiveShadows = !!i4719[4]
  i4718.shadowCastingMode = i4719[5]
  i4718.sortingLayerID = i4719[6]
  i4718.sortingOrder = i4719[7]
  i4718.lightmapIndex = i4719[8]
  i4718.lightmapSceneIndex = i4719[9]
  i4718.lightmapScaleOffset = new pc.Vec4( i4719[10], i4719[11], i4719[12], i4719[13] )
  i4718.lightProbeUsage = i4719[14]
  i4718.reflectionProbeUsage = i4719[15]
  var i4723 = i4719[16]
  var i4722 = []
  for(var i = 0; i < i4723.length; i += 3) {
    i4722.push( new pc.Vec3( i4723[i + 0], i4723[i + 1], i4723[i + 2] ) );
  }
  i4718.positions = i4722
  i4718.positionCount = i4719[17]
  i4718.time = i4719[18]
  i4718.startWidth = i4719[19]
  i4718.endWidth = i4719[20]
  i4718.widthMultiplier = i4719[21]
  i4718.autodestruct = !!i4719[22]
  i4718.emitting = !!i4719[23]
  i4718.numCornerVertices = i4719[24]
  i4718.numCapVertices = i4719[25]
  i4718.minVertexDistance = i4719[26]
  i4718.colorGradient = i4719[27] ? new pc.ColorGradient(i4719[27][0], i4719[27][1], i4719[27][2]) : null
  i4718.startColor = new pc.Color(i4719[28], i4719[29], i4719[30], i4719[31])
  i4718.endColor = new pc.Color(i4719[32], i4719[33], i4719[34], i4719[35])
  i4718.generateLightingData = !!i4719[36]
  i4718.textureMode = i4719[37]
  i4718.alignment = i4719[38]
  i4718.widthCurve = new pc.AnimationCurve( { keys_flow: i4719[39] } )
  return i4718
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i4726 = root || request.c( 'TileSlot' )
  var i4727 = data
  i4726.ID = i4727[0]
  request.r(i4727[1], i4727[2], 0, i4726, 'Tile')
  return i4726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4729 = data
  i4728.name = i4729[0]
  i4728.index = i4729[1]
  i4728.startup = !!i4729[2]
  return i4728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4731 = data
  i4730.enabled = !!i4731[0]
  i4730.aspect = i4731[1]
  i4730.orthographic = !!i4731[2]
  i4730.orthographicSize = i4731[3]
  i4730.backgroundColor = new pc.Color(i4731[4], i4731[5], i4731[6], i4731[7])
  i4730.nearClipPlane = i4731[8]
  i4730.farClipPlane = i4731[9]
  i4730.fieldOfView = i4731[10]
  i4730.depth = i4731[11]
  i4730.clearFlags = i4731[12]
  i4730.cullingMask = i4731[13]
  i4730.rect = i4731[14]
  request.r(i4731[15], i4731[16], 0, i4730, 'targetTexture')
  i4730.usePhysicalProperties = !!i4731[17]
  i4730.focalLength = i4731[18]
  i4730.sensorSize = new pc.Vec2( i4731[19], i4731[20] )
  i4730.lensShift = new pc.Vec2( i4731[21], i4731[22] )
  i4730.gateFit = i4731[23]
  return i4730
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4732 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4733 = data
  request.r(i4733[0], i4733[1], 0, i4732, 'm_FirstSelected')
  i4732.m_sendNavigationEvents = !!i4733[2]
  i4732.m_DragThreshold = i4733[3]
  return i4732
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4734 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4735 = data
  i4734.m_HorizontalAxis = i4735[0]
  i4734.m_VerticalAxis = i4735[1]
  i4734.m_SubmitButton = i4735[2]
  i4734.m_CancelButton = i4735[3]
  i4734.m_InputActionsPerSecond = i4735[4]
  i4734.m_RepeatDelay = i4735[5]
  i4734.m_ForceModuleActive = !!i4735[6]
  i4734.m_SendPointerHoverToParent = !!i4735[7]
  return i4734
}

Deserializers["Game"] = function (request, data, root) {
  var i4736 = root || request.c( 'Game' )
  var i4737 = data
  i4736.autoGameOverInSeconds = i4737[0]
  request.r(i4737[1], i4737[2], 0, i4736, 'deck')
  request.r(i4737[3], i4737[4], 0, i4736, 'actions')
  request.r(i4737[5], i4737[6], 0, i4736, 'locker')
  request.r(i4737[7], i4737[8], 0, i4736, 'boxLocker')
  request.r(i4737[9], i4737[10], 0, i4736, 'bag')
  request.r(i4737[11], i4737[12], 0, i4736, 'spawnAnimation')
  request.r(i4737[13], i4737[14], 0, i4736, 'tileMatcher')
  request.r(i4737[15], i4737[16], 0, i4736, 'loseCondition')
  request.r(i4737[17], i4737[18], 0, i4736, 'winCondition')
  request.r(i4737[19], i4737[20], 0, i4736, 'input')
  request.r(i4737[21], i4737[22], 0, i4736, 'endCard')
  request.r(i4737[23], i4737[24], 0, i4736, 'quest')
  i4736.useRandom = !!i4737[25]
  request.r(i4737[26], i4737[27], 0, i4736, 'spawnRandom')
  i4736.tileToSpawn = i4737[28]
  i4736.tilesInScene = i4737[29]
  var i4739 = i4737[30]
  var i4738 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i4739.length; i += 2) {
  request.r(i4739[i + 0], i4739[i + 1], 1, i4738, '')
  }
  i4736.tilesInGame = i4738
  return i4736
}

Deserializers["TileLockerBox"] = function (request, data, root) {
  var i4740 = root || request.c( 'TileLockerBox' )
  var i4741 = data
  i4740.enable = !!i4741[0]
  return i4740
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i4742 = root || request.c( 'TileSpawner' )
  var i4743 = data
  request.r(i4743[0], i4743[1], 0, i4742, 'Game')
  request.r(i4743[2], i4743[3], 0, i4742, 'prefab')
  var i4745 = i4743[4]
  var i4744 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i4745.length; i += 2) {
  request.r(i4745[i + 0], i4745[i + 1], 1, i4744, '')
  }
  i4742.spawned = i4744
  i4742.hideAtSpawn = !!i4743[5]
  i4742.spawnRate = i4743[6]
  return i4742
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i4746 = root || request.c( 'TileRandomSpawner' )
  var i4747 = data
  request.r(i4747[0], i4747[1], 0, i4746, 'Game')
  i4746.spawnRate = i4747[2]
  var i4749 = i4747[3]
  var i4748 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i4749.length; i += 2) {
  request.r(i4749[i + 0], i4749[i + 1], 1, i4748, '')
  }
  i4746.spawned = i4748
  return i4746
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i4750 = root || request.c( 'TileSpawnAnimation' )
  var i4751 = data
  request.r(i4751[0], i4751[1], 0, i4750, 'Game')
  i4750.delayBetweenLines = i4751[2]
  i4750.delayBetweenTiles = i4751[3]
  i4750.delayBetweenLayers = i4751[4]
  return i4750
}

Deserializers["TileActions"] = function (request, data, root) {
  var i4752 = root || request.c( 'TileActions' )
  var i4753 = data
  request.r(i4753[0], i4753[1], 0, i4752, 'Game')
  return i4752
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i4754 = root || request.c( 'TileMatcher' )
  var i4755 = data
  request.r(i4755[0], i4755[1], 0, i4754, 'Game')
  request.r(i4755[2], i4755[3], 0, i4754, 'vfx')
  var i4757 = i4755[4]
  var i4756 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i4757.length; i += 2) {
  request.r(i4757[i + 0], i4757[i + 1], 1, i4756, '')
  }
  i4754.completed = i4756
  var i4759 = i4755[5]
  var i4758 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i4759.length; i += 2) {
  request.r(i4759[i + 0], i4759[i + 1], 1, i4758, '')
  }
  i4754.lastMatch = i4758
  return i4754
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i4762 = root || request.c( 'LoseCondition' )
  var i4763 = data
  request.r(i4763[0], i4763[1], 0, i4762, 'Game')
  return i4762
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i4764 = root || request.c( 'WinCondition' )
  var i4765 = data
  request.r(i4765[0], i4765[1], 0, i4764, 'Game')
  return i4764
}

Deserializers["Quest"] = function (request, data, root) {
  var i4766 = root || request.c( 'Quest' )
  var i4767 = data
  request.r(i4767[0], i4767[1], 0, i4766, 'Game')
  var i4769 = i4767[2]
  var i4768 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i4769.length; i += 2) {
  request.r(i4769[i + 0], i4769[i + 1], 1, i4768, '')
  }
  i4766.slots = i4768
  return i4766
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i4772 = root || request.c( 'InputTouch' )
  var i4773 = data
  request.r(i4773[0], i4773[1], 0, i4772, 'Game')
  i4772.inputCooldown = i4773[2]
  var i4775 = i4773[3]
  var i4774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i4775.length; i += 2) {
    i4774.add(new pc.Vec2( i4775[i + 0], i4775[i + 1] ));
  }
  i4772.touches = i4774
  i4772.touchSize = i4773[4]
  return i4772
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i4778 = root || request.c( 'TileBagSorter' )
  var i4779 = data
  request.r(i4779[0], i4779[1], 0, i4778, 'Game')
  i4778.enable = !!i4779[2]
  i4778.intervalSec = i4779[3]
  return i4778
}

Deserializers["EndCard"] = function (request, data, root) {
  var i4780 = root || request.c( 'EndCard' )
  var i4781 = data
  request.r(i4781[0], i4781[1], 0, i4780, 'canvas')
  request.r(i4781[2], i4781[3], 0, i4780, 'Game')
  return i4780
}

Deserializers["Sounds"] = function (request, data, root) {
  var i4782 = root || request.c( 'Sounds' )
  var i4783 = data
  request.r(i4783[0], i4783[1], 0, i4782, 'Game')
  request.r(i4783[2], i4783[3], 0, i4782, 'tileClick')
  request.r(i4783[4], i4783[5], 0, i4782, 'tileMerge')
  request.r(i4783[6], i4783[7], 0, i4782, 'levelWin')
  request.r(i4783[8], i4783[9], 0, i4782, 'leveLose')
  request.r(i4783[10], i4783[11], 0, i4782, 'source')
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4785 = data
  request.r(i4785[0], i4785[1], 0, i4784, 'clip')
  request.r(i4785[2], i4785[3], 0, i4784, 'outputAudioMixerGroup')
  i4784.playOnAwake = !!i4785[4]
  i4784.loop = !!i4785[5]
  i4784.time = i4785[6]
  i4784.volume = i4785[7]
  i4784.pitch = i4785[8]
  i4784.enabled = !!i4785[9]
  return i4784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4787 = data
  i4786.enabled = !!i4787[0]
  i4786.planeDistance = i4787[1]
  i4786.referencePixelsPerUnit = i4787[2]
  i4786.isFallbackOverlay = !!i4787[3]
  i4786.renderMode = i4787[4]
  i4786.renderOrder = i4787[5]
  i4786.sortingLayerName = i4787[6]
  i4786.sortingOrder = i4787[7]
  i4786.scaleFactor = i4787[8]
  request.r(i4787[9], i4787[10], 0, i4786, 'worldCamera')
  i4786.overrideSorting = !!i4787[11]
  i4786.pixelPerfect = !!i4787[12]
  i4786.targetDisplay = i4787[13]
  i4786.overridePixelPerfect = !!i4787[14]
  return i4786
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4788 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4789 = data
  i4788.m_UiScaleMode = i4789[0]
  i4788.m_ReferencePixelsPerUnit = i4789[1]
  i4788.m_ScaleFactor = i4789[2]
  i4788.m_ReferenceResolution = new pc.Vec2( i4789[3], i4789[4] )
  i4788.m_ScreenMatchMode = i4789[5]
  i4788.m_MatchWidthOrHeight = i4789[6]
  i4788.m_PhysicalUnit = i4789[7]
  i4788.m_FallbackScreenDPI = i4789[8]
  i4788.m_DefaultSpriteDPI = i4789[9]
  i4788.m_DynamicPixelsPerUnit = i4789[10]
  i4788.m_PresetInfoIsWorld = !!i4789[11]
  return i4788
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4790 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4791 = data
  i4790.m_IgnoreReversedGraphics = !!i4791[0]
  i4790.m_BlockingObjects = i4791[1]
  i4790.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4791[2] )
  return i4790
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i4792 = root || request.c( 'ResetLocalPosition' )
  var i4793 = data
  return i4792
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i4794 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i4795 = data
  i4794.m_Spacing = i4795[0]
  i4794.m_ChildForceExpandWidth = !!i4795[1]
  i4794.m_ChildForceExpandHeight = !!i4795[2]
  i4794.m_ChildControlWidth = !!i4795[3]
  i4794.m_ChildControlHeight = !!i4795[4]
  i4794.m_ChildScaleWidth = !!i4795[5]
  i4794.m_ChildScaleHeight = !!i4795[6]
  i4794.m_ReverseArrangement = !!i4795[7]
  i4794.m_Padding = UnityEngine.RectOffset.FromPaddings(i4795[8], i4795[9], i4795[10], i4795[11])
  i4794.m_ChildAlignment = i4795[12]
  return i4794
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i4796 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i4797 = data
  i4796.m_StartCorner = i4797[0]
  i4796.m_StartAxis = i4797[1]
  i4796.m_CellSize = new pc.Vec2( i4797[2], i4797[3] )
  i4796.m_Spacing = new pc.Vec2( i4797[4], i4797[5] )
  i4796.m_Constraint = i4797[6]
  i4796.m_ConstraintCount = i4797[7]
  i4796.m_Padding = UnityEngine.RectOffset.FromPaddings(i4797[8], i4797[9], i4797[10], i4797[11])
  i4796.m_ChildAlignment = i4797[12]
  return i4796
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4798 = root || request.c( 'UnityEngine.UI.Button' )
  var i4799 = data
  i4798.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4799[0], i4798.m_OnClick)
  i4798.m_Navigation = request.d('UnityEngine.UI.Navigation', i4799[1], i4798.m_Navigation)
  i4798.m_Transition = i4799[2]
  i4798.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4799[3], i4798.m_Colors)
  i4798.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4799[4], i4798.m_SpriteState)
  i4798.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4799[5], i4798.m_AnimationTriggers)
  i4798.m_Interactable = !!i4799[6]
  request.r(i4799[7], i4799[8], 0, i4798, 'm_TargetGraphic')
  return i4798
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4800 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4801 = data
  i4800.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4801[0], i4800.m_PersistentCalls)
  return i4800
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4802 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4803 = data
  var i4805 = i4803[0]
  var i4804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4805.length; i += 1) {
    i4804.add(request.d('UnityEngine.Events.PersistentCall', i4805[i + 0]));
  }
  i4802.m_Calls = i4804
  return i4802
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4808 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4809 = data
  request.r(i4809[0], i4809[1], 0, i4808, 'm_Target')
  i4808.m_TargetAssemblyTypeName = i4809[2]
  i4808.m_MethodName = i4809[3]
  i4808.m_Mode = i4809[4]
  i4808.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4809[5], i4808.m_Arguments)
  i4808.m_CallState = i4809[6]
  return i4808
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4810 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4811 = data
  request.r(i4811[0], i4811[1], 0, i4810, 'm_ObjectArgument')
  i4810.m_ObjectArgumentAssemblyTypeName = i4811[2]
  i4810.m_IntArgument = i4811[3]
  i4810.m_FloatArgument = i4811[4]
  i4810.m_StringArgument = i4811[5]
  i4810.m_BoolArgument = !!i4811[6]
  return i4810
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4812 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4813 = data
  i4812.m_Mode = i4813[0]
  i4812.m_WrapAround = !!i4813[1]
  request.r(i4813[2], i4813[3], 0, i4812, 'm_SelectOnUp')
  request.r(i4813[4], i4813[5], 0, i4812, 'm_SelectOnDown')
  request.r(i4813[6], i4813[7], 0, i4812, 'm_SelectOnLeft')
  request.r(i4813[8], i4813[9], 0, i4812, 'm_SelectOnRight')
  return i4812
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4814 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4815 = data
  i4814.m_NormalColor = new pc.Color(i4815[0], i4815[1], i4815[2], i4815[3])
  i4814.m_HighlightedColor = new pc.Color(i4815[4], i4815[5], i4815[6], i4815[7])
  i4814.m_PressedColor = new pc.Color(i4815[8], i4815[9], i4815[10], i4815[11])
  i4814.m_SelectedColor = new pc.Color(i4815[12], i4815[13], i4815[14], i4815[15])
  i4814.m_DisabledColor = new pc.Color(i4815[16], i4815[17], i4815[18], i4815[19])
  i4814.m_ColorMultiplier = i4815[20]
  i4814.m_FadeDuration = i4815[21]
  return i4814
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4816 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4817 = data
  request.r(i4817[0], i4817[1], 0, i4816, 'm_HighlightedSprite')
  request.r(i4817[2], i4817[3], 0, i4816, 'm_PressedSprite')
  request.r(i4817[4], i4817[5], 0, i4816, 'm_SelectedSprite')
  request.r(i4817[6], i4817[7], 0, i4816, 'm_DisabledSprite')
  return i4816
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4818 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4819 = data
  i4818.m_NormalTrigger = i4819[0]
  i4818.m_HighlightedTrigger = i4819[1]
  i4818.m_PressedTrigger = i4819[2]
  i4818.m_SelectedTrigger = i4819[3]
  i4818.m_DisabledTrigger = i4819[4]
  return i4818
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i4820 = root || request.c( 'TilesBag' )
  var i4821 = data
  var i4823 = i4821[0]
  var i4822 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i4823.length; i += 2) {
  request.r(i4823[i + 0], i4823[i + 1], 1, i4822, '')
  }
  i4820.slots = i4822
  return i4820
}

Deserializers["Deck"] = function (request, data, root) {
  var i4824 = root || request.c( 'Deck' )
  var i4825 = data
  request.r(i4825[0], i4825[1], 0, i4824, 'Game')
  return i4824
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i4826 = root || request.c( 'DeckLayer' )
  var i4827 = data
  i4826.layer = i4827[0]
  var i4829 = i4827[1]
  var i4828 = []
  for(var i = 0; i < i4829.length; i += 2) {
  request.r(i4829[i + 0], i4829[i + 1], 2, i4828, '')
  }
  i4826.Tiles = i4828
  return i4826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4833 = data
  i4832.ambientIntensity = i4833[0]
  i4832.reflectionIntensity = i4833[1]
  i4832.ambientMode = i4833[2]
  i4832.ambientLight = new pc.Color(i4833[3], i4833[4], i4833[5], i4833[6])
  i4832.ambientSkyColor = new pc.Color(i4833[7], i4833[8], i4833[9], i4833[10])
  i4832.ambientGroundColor = new pc.Color(i4833[11], i4833[12], i4833[13], i4833[14])
  i4832.ambientEquatorColor = new pc.Color(i4833[15], i4833[16], i4833[17], i4833[18])
  i4832.fogColor = new pc.Color(i4833[19], i4833[20], i4833[21], i4833[22])
  i4832.fogEndDistance = i4833[23]
  i4832.fogStartDistance = i4833[24]
  i4832.fogDensity = i4833[25]
  i4832.fog = !!i4833[26]
  request.r(i4833[27], i4833[28], 0, i4832, 'skybox')
  i4832.fogMode = i4833[29]
  var i4835 = i4833[30]
  var i4834 = []
  for(var i = 0; i < i4835.length; i += 1) {
    i4834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4835[i + 0]) );
  }
  i4832.lightmaps = i4834
  i4832.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4833[31], i4832.lightProbes)
  i4832.lightmapsMode = i4833[32]
  i4832.mixedBakeMode = i4833[33]
  i4832.environmentLightingMode = i4833[34]
  i4832.ambientProbe = new pc.SphericalHarmonicsL2(i4833[35])
  i4832.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4833[36])
  i4832.useReferenceAmbientProbe = !!i4833[37]
  request.r(i4833[38], i4833[39], 0, i4832, 'customReflection')
  request.r(i4833[40], i4833[41], 0, i4832, 'defaultReflection')
  i4832.defaultReflectionMode = i4833[42]
  i4832.defaultReflectionResolution = i4833[43]
  i4832.sunLightObjectId = i4833[44]
  i4832.pixelLightCount = i4833[45]
  i4832.defaultReflectionHDR = !!i4833[46]
  i4832.hasLightDataAsset = !!i4833[47]
  i4832.hasManualGenerate = !!i4833[48]
  return i4832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4839 = data
  request.r(i4839[0], i4839[1], 0, i4838, 'lightmapColor')
  request.r(i4839[2], i4839[3], 0, i4838, 'lightmapDirection')
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4840 = root || new UnityEngine.LightProbes()
  var i4841 = data
  return i4840
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i4846 = root || request.c( 'TileLocker' )
  var i4847 = data
  request.r(i4847[0], i4847[1], 0, i4846, 'Game')
  i4846.enabled = !!i4847[2]
  i4846.lockDistance = i4847[3]
  return i4846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4849 = data
  request.r(i4849[0], i4849[1], 0, i4848, 'sharedMesh')
  return i4848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4851 = data
  request.r(i4851[0], i4851[1], 0, i4850, 'additionalVertexStreams')
  i4850.enabled = !!i4851[2]
  request.r(i4851[3], i4851[4], 0, i4850, 'sharedMaterial')
  var i4853 = i4851[5]
  var i4852 = []
  for(var i = 0; i < i4853.length; i += 2) {
  request.r(i4853[i + 0], i4853[i + 1], 2, i4852, '')
  }
  i4850.sharedMaterials = i4852
  i4850.receiveShadows = !!i4851[6]
  i4850.shadowCastingMode = i4851[7]
  i4850.sortingLayerID = i4851[8]
  i4850.sortingOrder = i4851[9]
  i4850.lightmapIndex = i4851[10]
  i4850.lightmapSceneIndex = i4851[11]
  i4850.lightmapScaleOffset = new pc.Vec4( i4851[12], i4851[13], i4851[14], i4851[15] )
  i4850.lightProbeUsage = i4851[16]
  i4850.reflectionProbeUsage = i4851[17]
  return i4850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4855 = data
  var i4857 = i4855[0]
  var i4856 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4857.length; i += 1) {
    i4856.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4857[i + 0]));
  }
  i4854.ShaderCompilationErrors = i4856
  i4854.name = i4855[1]
  i4854.guid = i4855[2]
  var i4859 = i4855[3]
  var i4858 = []
  for(var i = 0; i < i4859.length; i += 1) {
    i4858.push( i4859[i + 0] );
  }
  i4854.shaderDefinedKeywords = i4858
  var i4861 = i4855[4]
  var i4860 = []
  for(var i = 0; i < i4861.length; i += 1) {
    i4860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4861[i + 0]) );
  }
  i4854.passes = i4860
  var i4863 = i4855[5]
  var i4862 = []
  for(var i = 0; i < i4863.length; i += 1) {
    i4862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4863[i + 0]) );
  }
  i4854.usePasses = i4862
  var i4865 = i4855[6]
  var i4864 = []
  for(var i = 0; i < i4865.length; i += 1) {
    i4864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4865[i + 0]) );
  }
  i4854.defaultParameterValues = i4864
  request.r(i4855[7], i4855[8], 0, i4854, 'unityFallbackShader')
  i4854.readDepth = !!i4855[9]
  i4854.isCreatedByShaderGraph = !!i4855[10]
  i4854.usedBatchUniforms = i4855[11]
  return i4854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4869 = data
  i4868.shaderName = i4869[0]
  i4868.errorMessage = i4869[1]
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4874 = root || new pc.UnityShaderPass()
  var i4875 = data
  i4874.id = i4875[0]
  i4874.subShaderIndex = i4875[1]
  i4874.name = i4875[2]
  i4874.passType = i4875[3]
  i4874.grabPassTextureName = i4875[4]
  i4874.usePass = !!i4875[5]
  i4874.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[6], i4874.zTest)
  i4874.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[7], i4874.zWrite)
  i4874.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[8], i4874.culling)
  i4874.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4875[9], i4874.blending)
  i4874.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4875[10], i4874.alphaBlending)
  i4874.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[11], i4874.colorWriteMask)
  i4874.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[12], i4874.offsetUnits)
  i4874.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[13], i4874.offsetFactor)
  i4874.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[14], i4874.stencilRef)
  i4874.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[15], i4874.stencilReadMask)
  i4874.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4875[16], i4874.stencilWriteMask)
  i4874.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4875[17], i4874.stencilOp)
  i4874.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4875[18], i4874.stencilOpFront)
  i4874.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4875[19], i4874.stencilOpBack)
  var i4877 = i4875[20]
  var i4876 = []
  for(var i = 0; i < i4877.length; i += 1) {
    i4876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4877[i + 0]) );
  }
  i4874.tags = i4876
  var i4879 = i4875[21]
  var i4878 = []
  for(var i = 0; i < i4879.length; i += 1) {
    i4878.push( i4879[i + 0] );
  }
  i4874.passDefinedKeywords = i4878
  var i4881 = i4875[22]
  var i4880 = []
  for(var i = 0; i < i4881.length; i += 1) {
    i4880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4881[i + 0]) );
  }
  i4874.passDefinedKeywordGroups = i4880
  var i4883 = i4875[23]
  var i4882 = []
  for(var i = 0; i < i4883.length; i += 1) {
    i4882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4883[i + 0]) );
  }
  i4874.variants = i4882
  var i4885 = i4875[24]
  var i4884 = []
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4885[i + 0]) );
  }
  i4874.excludedVariants = i4884
  i4874.hasDepthReader = !!i4875[25]
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4887 = data
  i4886.val = i4887[0]
  i4886.name = i4887[1]
  return i4886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4889 = data
  i4888.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4889[0], i4888.src)
  i4888.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4889[1], i4888.dst)
  i4888.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4889[2], i4888.op)
  return i4888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4891 = data
  i4890.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4891[0], i4890.pass)
  i4890.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4891[1], i4890.fail)
  i4890.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4891[2], i4890.zFail)
  i4890.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4891[3], i4890.comp)
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4895 = data
  i4894.name = i4895[0]
  i4894.value = i4895[1]
  return i4894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4899 = data
  var i4901 = i4899[0]
  var i4900 = []
  for(var i = 0; i < i4901.length; i += 1) {
    i4900.push( i4901[i + 0] );
  }
  i4898.keywords = i4900
  i4898.hasDiscard = !!i4899[1]
  return i4898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4905 = data
  i4904.passId = i4905[0]
  i4904.subShaderIndex = i4905[1]
  var i4907 = i4905[2]
  var i4906 = []
  for(var i = 0; i < i4907.length; i += 1) {
    i4906.push( i4907[i + 0] );
  }
  i4904.keywords = i4906
  i4904.vertexProgram = i4905[3]
  i4904.fragmentProgram = i4905[4]
  i4904.compiledForWebGL2 = !!i4905[5]
  i4904.readDepth = !!i4905[6]
  return i4904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4911 = data
  request.r(i4911[0], i4911[1], 0, i4910, 'shader')
  i4910.pass = i4911[2]
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4915 = data
  i4914.name = i4915[0]
  i4914.type = i4915[1]
  i4914.value = new pc.Vec4( i4915[2], i4915[3], i4915[4], i4915[5] )
  i4914.textureValue = i4915[6]
  i4914.shaderPropertyFlag = i4915[7]
  return i4914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4917 = data
  i4916.name = i4917[0]
  request.r(i4917[1], i4917[2], 0, i4916, 'texture')
  i4916.aabb = i4917[3]
  i4916.vertices = i4917[4]
  i4916.triangles = i4917[5]
  i4916.textureRect = UnityEngine.Rect.MinMaxRect(i4917[6], i4917[7], i4917[8], i4917[9])
  i4916.packedRect = UnityEngine.Rect.MinMaxRect(i4917[10], i4917[11], i4917[12], i4917[13])
  i4916.border = new pc.Vec4( i4917[14], i4917[15], i4917[16], i4917[17] )
  i4916.transparency = i4917[18]
  i4916.bounds = i4917[19]
  i4916.pixelsPerUnit = i4917[20]
  i4916.textureWidth = i4917[21]
  i4916.textureHeight = i4917[22]
  i4916.nativeSize = new pc.Vec2( i4917[23], i4917[24] )
  i4916.pivot = new pc.Vec2( i4917[25], i4917[26] )
  i4916.textureRectOffset = new pc.Vec2( i4917[27], i4917[28] )
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4919 = data
  i4918.name = i4919[0]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4921 = data
  i4920.name = i4921[0]
  i4920.bytes64 = i4921[1]
  i4920.data = i4921[2]
  return i4920
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4922 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4923 = data
  i4922.hashCode = i4923[0]
  request.r(i4923[1], i4923[2], 0, i4922, 'material')
  i4922.materialHashCode = i4923[3]
  request.r(i4923[4], i4923[5], 0, i4922, 'atlas')
  i4922.normalStyle = i4923[6]
  i4922.normalSpacingOffset = i4923[7]
  i4922.boldStyle = i4923[8]
  i4922.boldSpacing = i4923[9]
  i4922.italicStyle = i4923[10]
  i4922.tabSize = i4923[11]
  i4922.m_Version = i4923[12]
  i4922.m_SourceFontFileGUID = i4923[13]
  request.r(i4923[14], i4923[15], 0, i4922, 'm_SourceFontFile_EditorRef')
  request.r(i4923[16], i4923[17], 0, i4922, 'm_SourceFontFile')
  i4922.m_AtlasPopulationMode = i4923[18]
  i4922.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4923[19], i4922.m_FaceInfo)
  var i4925 = i4923[20]
  var i4924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.add(request.d('UnityEngine.TextCore.Glyph', i4925[i + 0]));
  }
  i4922.m_GlyphTable = i4924
  var i4927 = i4923[21]
  var i4926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4927.length; i += 1) {
    i4926.add(request.d('TMPro.TMP_Character', i4927[i + 0]));
  }
  i4922.m_CharacterTable = i4926
  var i4929 = i4923[22]
  var i4928 = []
  for(var i = 0; i < i4929.length; i += 2) {
  request.r(i4929[i + 0], i4929[i + 1], 2, i4928, '')
  }
  i4922.m_AtlasTextures = i4928
  i4922.m_AtlasTextureIndex = i4923[23]
  i4922.m_IsMultiAtlasTexturesEnabled = !!i4923[24]
  i4922.m_ClearDynamicDataOnBuild = !!i4923[25]
  var i4931 = i4923[26]
  var i4930 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4931.length; i += 1) {
    i4930.add(request.d('UnityEngine.TextCore.GlyphRect', i4931[i + 0]));
  }
  i4922.m_UsedGlyphRects = i4930
  var i4933 = i4923[27]
  var i4932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4933.length; i += 1) {
    i4932.add(request.d('UnityEngine.TextCore.GlyphRect', i4933[i + 0]));
  }
  i4922.m_FreeGlyphRects = i4932
  i4922.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4923[28], i4922.m_fontInfo)
  i4922.m_AtlasWidth = i4923[29]
  i4922.m_AtlasHeight = i4923[30]
  i4922.m_AtlasPadding = i4923[31]
  i4922.m_AtlasRenderMode = i4923[32]
  var i4935 = i4923[33]
  var i4934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4935.length; i += 1) {
    i4934.add(request.d('TMPro.TMP_Glyph', i4935[i + 0]));
  }
  i4922.m_glyphInfoList = i4934
  i4922.m_KerningTable = request.d('TMPro.KerningTable', i4923[34], i4922.m_KerningTable)
  i4922.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4923[35], i4922.m_FontFeatureTable)
  var i4937 = i4923[36]
  var i4936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4937.length; i += 2) {
  request.r(i4937[i + 0], i4937[i + 1], 1, i4936, '')
  }
  i4922.fallbackFontAssets = i4936
  var i4939 = i4923[37]
  var i4938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4939.length; i += 2) {
  request.r(i4939[i + 0], i4939[i + 1], 1, i4938, '')
  }
  i4922.m_FallbackFontAssetTable = i4938
  i4922.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4923[38], i4922.m_CreationSettings)
  var i4941 = i4923[39]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('TMPro.TMP_FontWeightPair', i4941[i + 0]) );
  }
  i4922.m_FontWeightTable = i4940
  var i4943 = i4923[40]
  var i4942 = []
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.push( request.d('TMPro.TMP_FontWeightPair', i4943[i + 0]) );
  }
  i4922.fontWeights = i4942
  return i4922
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4944 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4945 = data
  i4944.m_FaceIndex = i4945[0]
  i4944.m_FamilyName = i4945[1]
  i4944.m_StyleName = i4945[2]
  i4944.m_PointSize = i4945[3]
  i4944.m_Scale = i4945[4]
  i4944.m_UnitsPerEM = i4945[5]
  i4944.m_LineHeight = i4945[6]
  i4944.m_AscentLine = i4945[7]
  i4944.m_CapLine = i4945[8]
  i4944.m_MeanLine = i4945[9]
  i4944.m_Baseline = i4945[10]
  i4944.m_DescentLine = i4945[11]
  i4944.m_SuperscriptOffset = i4945[12]
  i4944.m_SuperscriptSize = i4945[13]
  i4944.m_SubscriptOffset = i4945[14]
  i4944.m_SubscriptSize = i4945[15]
  i4944.m_UnderlineOffset = i4945[16]
  i4944.m_UnderlineThickness = i4945[17]
  i4944.m_StrikethroughOffset = i4945[18]
  i4944.m_StrikethroughThickness = i4945[19]
  i4944.m_TabWidth = i4945[20]
  return i4944
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4948 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4949 = data
  i4948.m_Index = i4949[0]
  i4948.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4949[1], i4948.m_Metrics)
  i4948.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4949[2], i4948.m_GlyphRect)
  i4948.m_Scale = i4949[3]
  i4948.m_AtlasIndex = i4949[4]
  i4948.m_ClassDefinitionType = i4949[5]
  return i4948
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4950 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4951 = data
  i4950.m_Width = i4951[0]
  i4950.m_Height = i4951[1]
  i4950.m_HorizontalBearingX = i4951[2]
  i4950.m_HorizontalBearingY = i4951[3]
  i4950.m_HorizontalAdvance = i4951[4]
  return i4950
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4952 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4953 = data
  i4952.m_X = i4953[0]
  i4952.m_Y = i4953[1]
  i4952.m_Width = i4953[2]
  i4952.m_Height = i4953[3]
  return i4952
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4956 = root || request.c( 'TMPro.TMP_Character' )
  var i4957 = data
  i4956.m_ElementType = i4957[0]
  i4956.m_Unicode = i4957[1]
  i4956.m_GlyphIndex = i4957[2]
  i4956.m_Scale = i4957[3]
  return i4956
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4962 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4963 = data
  i4962.Name = i4963[0]
  i4962.PointSize = i4963[1]
  i4962.Scale = i4963[2]
  i4962.CharacterCount = i4963[3]
  i4962.LineHeight = i4963[4]
  i4962.Baseline = i4963[5]
  i4962.Ascender = i4963[6]
  i4962.CapHeight = i4963[7]
  i4962.Descender = i4963[8]
  i4962.CenterLine = i4963[9]
  i4962.SuperscriptOffset = i4963[10]
  i4962.SubscriptOffset = i4963[11]
  i4962.SubSize = i4963[12]
  i4962.Underline = i4963[13]
  i4962.UnderlineThickness = i4963[14]
  i4962.strikethrough = i4963[15]
  i4962.strikethroughThickness = i4963[16]
  i4962.TabWidth = i4963[17]
  i4962.Padding = i4963[18]
  i4962.AtlasWidth = i4963[19]
  i4962.AtlasHeight = i4963[20]
  return i4962
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4966 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4967 = data
  i4966.id = i4967[0]
  i4966.x = i4967[1]
  i4966.y = i4967[2]
  i4966.width = i4967[3]
  i4966.height = i4967[4]
  i4966.xOffset = i4967[5]
  i4966.yOffset = i4967[6]
  i4966.xAdvance = i4967[7]
  i4966.scale = i4967[8]
  return i4966
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4968 = root || request.c( 'TMPro.KerningTable' )
  var i4969 = data
  var i4971 = i4969[0]
  var i4970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4971.length; i += 1) {
    i4970.add(request.d('TMPro.KerningPair', i4971[i + 0]));
  }
  i4968.kerningPairs = i4970
  return i4968
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4974 = root || request.c( 'TMPro.KerningPair' )
  var i4975 = data
  i4974.xOffset = i4975[0]
  i4974.m_FirstGlyph = i4975[1]
  i4974.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4975[2], i4974.m_FirstGlyphAdjustments)
  i4974.m_SecondGlyph = i4975[3]
  i4974.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4975[4], i4974.m_SecondGlyphAdjustments)
  i4974.m_IgnoreSpacingAdjustments = !!i4975[5]
  return i4974
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4976 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4977 = data
  var i4979 = i4977[0]
  var i4978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4979[i + 0]));
  }
  i4976.m_GlyphPairAdjustmentRecords = i4978
  return i4976
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4982 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4983 = data
  i4982.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4983[0], i4982.m_FirstAdjustmentRecord)
  i4982.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4983[1], i4982.m_SecondAdjustmentRecord)
  i4982.m_FeatureLookupFlags = i4983[2]
  return i4982
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4984 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4985 = data
  i4984.m_GlyphIndex = i4985[0]
  i4984.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4985[1], i4984.m_GlyphValueRecord)
  return i4984
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4986 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4987 = data
  i4986.m_XPlacement = i4987[0]
  i4986.m_YPlacement = i4987[1]
  i4986.m_XAdvance = i4987[2]
  i4986.m_YAdvance = i4987[3]
  return i4986
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4990 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4991 = data
  i4990.sourceFontFileName = i4991[0]
  i4990.sourceFontFileGUID = i4991[1]
  i4990.pointSizeSamplingMode = i4991[2]
  i4990.pointSize = i4991[3]
  i4990.padding = i4991[4]
  i4990.packingMode = i4991[5]
  i4990.atlasWidth = i4991[6]
  i4990.atlasHeight = i4991[7]
  i4990.characterSetSelectionMode = i4991[8]
  i4990.characterSequence = i4991[9]
  i4990.referencedFontAssetGUID = i4991[10]
  i4990.referencedTextAssetGUID = i4991[11]
  i4990.fontStyle = i4991[12]
  i4990.fontStyleModifier = i4991[13]
  i4990.renderMode = i4991[14]
  i4990.includeFontFeatures = !!i4991[15]
  return i4990
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4994 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4995 = data
  request.r(i4995[0], i4995[1], 0, i4994, 'regularTypeface')
  request.r(i4995[2], i4995[3], 0, i4994, 'italicTypeface')
  return i4994
}

Deserializers["TileSO"] = function (request, data, root) {
  var i4996 = root || request.c( 'TileSO' )
  var i4997 = data
  request.r(i4997[0], i4997[1], 0, i4996, 'icon')
  return i4996
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4998 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4999 = data
  i4998.hashCode = i4999[0]
  request.r(i4999[1], i4999[2], 0, i4998, 'material')
  i4998.materialHashCode = i4999[3]
  request.r(i4999[4], i4999[5], 0, i4998, 'spriteSheet')
  var i5001 = i4999[6]
  var i5000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5001.length; i += 1) {
    i5000.add(request.d('TMPro.TMP_Sprite', i5001[i + 0]));
  }
  i4998.spriteInfoList = i5000
  var i5003 = i4999[7]
  var i5002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5003.length; i += 2) {
  request.r(i5003[i + 0], i5003[i + 1], 1, i5002, '')
  }
  i4998.fallbackSpriteAssets = i5002
  i4998.m_Version = i4999[8]
  i4998.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4999[9], i4998.m_FaceInfo)
  var i5005 = i4999[10]
  var i5004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5005.length; i += 1) {
    i5004.add(request.d('TMPro.TMP_SpriteCharacter', i5005[i + 0]));
  }
  i4998.m_SpriteCharacterTable = i5004
  var i5007 = i4999[11]
  var i5006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5007.length; i += 1) {
    i5006.add(request.d('TMPro.TMP_SpriteGlyph', i5007[i + 0]));
  }
  i4998.m_SpriteGlyphTable = i5006
  return i4998
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5010 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5011 = data
  i5010.name = i5011[0]
  i5010.hashCode = i5011[1]
  i5010.unicode = i5011[2]
  i5010.pivot = new pc.Vec2( i5011[3], i5011[4] )
  request.r(i5011[5], i5011[6], 0, i5010, 'sprite')
  i5010.id = i5011[7]
  i5010.x = i5011[8]
  i5010.y = i5011[9]
  i5010.width = i5011[10]
  i5010.height = i5011[11]
  i5010.xOffset = i5011[12]
  i5010.yOffset = i5011[13]
  i5010.xAdvance = i5011[14]
  i5010.scale = i5011[15]
  return i5010
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5016 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5017 = data
  i5016.m_Name = i5017[0]
  i5016.m_HashCode = i5017[1]
  i5016.m_ElementType = i5017[2]
  i5016.m_Unicode = i5017[3]
  i5016.m_GlyphIndex = i5017[4]
  i5016.m_Scale = i5017[5]
  return i5016
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5020 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5021 = data
  request.r(i5021[0], i5021[1], 0, i5020, 'sprite')
  i5020.m_Index = i5021[2]
  i5020.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5021[3], i5020.m_Metrics)
  i5020.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5021[4], i5020.m_GlyphRect)
  i5020.m_Scale = i5021[5]
  i5020.m_AtlasIndex = i5021[6]
  i5020.m_ClassDefinitionType = i5021[7]
  return i5020
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5022 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5023 = data
  var i5025 = i5023[0]
  var i5024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5025.length; i += 1) {
    i5024.add(request.d('TMPro.TMP_Style', i5025[i + 0]));
  }
  i5022.m_StyleList = i5024
  return i5022
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5028 = root || request.c( 'TMPro.TMP_Style' )
  var i5029 = data
  i5028.m_Name = i5029[0]
  i5028.m_HashCode = i5029[1]
  i5028.m_OpeningDefinition = i5029[2]
  i5028.m_ClosingDefinition = i5029[3]
  i5028.m_OpeningTagArray = i5029[4]
  i5028.m_ClosingTagArray = i5029[5]
  i5028.m_OpeningTagUnicodeArray = i5029[6]
  i5028.m_ClosingTagUnicodeArray = i5029[7]
  return i5028
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5030 = root || request.c( 'TMPro.TMP_Settings' )
  var i5031 = data
  i5030.m_enableWordWrapping = !!i5031[0]
  i5030.m_enableKerning = !!i5031[1]
  i5030.m_enableExtraPadding = !!i5031[2]
  i5030.m_enableTintAllSprites = !!i5031[3]
  i5030.m_enableParseEscapeCharacters = !!i5031[4]
  i5030.m_EnableRaycastTarget = !!i5031[5]
  i5030.m_GetFontFeaturesAtRuntime = !!i5031[6]
  i5030.m_missingGlyphCharacter = i5031[7]
  i5030.m_warningsDisabled = !!i5031[8]
  request.r(i5031[9], i5031[10], 0, i5030, 'm_defaultFontAsset')
  i5030.m_defaultFontAssetPath = i5031[11]
  i5030.m_defaultFontSize = i5031[12]
  i5030.m_defaultAutoSizeMinRatio = i5031[13]
  i5030.m_defaultAutoSizeMaxRatio = i5031[14]
  i5030.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5031[15], i5031[16] )
  i5030.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5031[17], i5031[18] )
  i5030.m_autoSizeTextContainer = !!i5031[19]
  i5030.m_IsTextObjectScaleStatic = !!i5031[20]
  var i5033 = i5031[21]
  var i5032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5033.length; i += 2) {
  request.r(i5033[i + 0], i5033[i + 1], 1, i5032, '')
  }
  i5030.m_fallbackFontAssets = i5032
  i5030.m_matchMaterialPreset = !!i5031[22]
  request.r(i5031[23], i5031[24], 0, i5030, 'm_defaultSpriteAsset')
  i5030.m_defaultSpriteAssetPath = i5031[25]
  i5030.m_enableEmojiSupport = !!i5031[26]
  i5030.m_MissingCharacterSpriteUnicode = i5031[27]
  i5030.m_defaultColorGradientPresetsPath = i5031[28]
  request.r(i5031[29], i5031[30], 0, i5030, 'm_defaultStyleSheet')
  i5030.m_StyleSheetsResourcePath = i5031[31]
  request.r(i5031[32], i5031[33], 0, i5030, 'm_leadingCharacters')
  request.r(i5031[34], i5031[35], 0, i5030, 'm_followingCharacters')
  i5030.m_UseModernHangulLineBreakingRules = !!i5031[36]
  return i5030
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i5034 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i5035 = data
  i5034._svcLunaVersion = i5035[0]
  var i5037 = i5035[1]
  var i5036 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i5037.length; i += 1) {
    i5036.add(request.d(' .  ', i5037[i + 0]));
  }
  i5034._shaderVariants = i5036
  var i5039 = i5035[2]
  var i5038 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i5039.length; i += 1) {
    i5038.add(request.d(' .  ', i5039[i + 0]));
  }
  i5034._usedByLunaBuild = i5038
  var i5041 = i5035[3]
  var i5040 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i5041.length; i += 1) {
    i5040.add(request.d(' .  ', i5041[i + 0]));
  }
  i5034._includedShaderVariants = i5040
  var i5043 = i5035[4]
  var i5042 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i5043.length; i += 1) {
    i5042.add(request.d(' .  ', i5043[i + 0]));
  }
  i5034._excludedShaderVariants = i5042
  i5034.version = System.Int64(i5035[5])
  var i5045 = i5035[6]
  var i5044 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i5045.length; i += 1) {
    i5044.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i5045[i + 0]));
  }
  i5034._shaderParsedShaders = i5044
  var i5047 = i5035[7]
  var i5046 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i5047.length; i += 1) {
    i5046.add(i5047[i + 0]);
  }
  i5034._modifiedShaders = i5046
  i5034.invalidShaders = !!i5035[8]
  i5034._cachedShadersPlatform = i5035[9]
  i5034._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i5035[10], i5034._sceneLightData)
  return i5034
}

Deserializers[" .  "] = function (request, data, root) {
  var i5050 = root || request.c( ' .  ' )
  var i5051 = data
  request.r(i5051[0], i5051[1], 0, i5050, 'shader')
  i5050.passType = i5051[2]
  i5050.passId = i5051[3]
  i5050.subShaderIndex = i5051[4]
  i5050.upToDate = !!i5051[5]
  var i5053 = i5051[6]
  var i5052 = []
  for(var i = 0; i < i5053.length; i += 1) {
    i5052.push( i5053[i + 0] );
  }
  i5050.keywords = i5052
  return i5050
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i5056 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i5057 = data
  var i5059 = i5057[0]
  var i5058 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i5059[i + 0]));
  }
  i5056.ParsedSubShaders = i5058
  request.r(i5057[1], i5057[2], 0, i5056, 'Shader')
  i5056.ShaderPath = i5057[3]
  var i5061 = i5057[4]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 1) {
    i5060.push( i5061[i + 0] );
  }
  i5056.ShaderDefinedKeywords = i5060
  request.r(i5057[5], i5057[6], 0, i5056, 'fallbackShader')
  var i5063 = i5057[7]
  var i5062 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i5063.length; i += 1) {
    i5062.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i5063[i + 0]));
  }
  i5056.CompilationErrors = i5062
  i5056.shaderCompilerPlatform = i5057[8]
  return i5056
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i5066 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i5067 = data
  i5066.Index = i5067[0]
  var i5069 = i5067[1]
  var i5068 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i5069.length; i += 1) {
    i5068.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i5069[i + 0]));
  }
  i5066.Passes = i5068
  var i5071 = i5067[2]
  var i5070 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i5071.length; i += 1) {
    i5070.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i5071[i + 0]));
  }
  i5066.Tags = i5070
  i5066.UsePass = !!i5067[3]
  return i5066
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i5074 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i5075 = data
  i5074.ShaderName = i5075[0]
  var i5077 = i5075[1]
  var i5076 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i5077.length; i += 1) {
    i5076.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i5077[i + 0]));
  }
  i5074.ShaderVariants = i5076
  var i5079 = i5075[2]
  var i5078 = []
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.push( i5079[i + 0] );
  }
  i5074.definedKeywords = i5078
  var i5081 = i5075[3]
  var i5080 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i5081.length; i += 1) {
    i5080.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i5081[i + 0]));
  }
  i5074.keywordGroups = i5080
  i5074.KeywordsMinimalCardinality = i5075[4]
  i5074.ContainsInvalidVariant = !!i5075[5]
  i5074.ShaderCompilerPlatform = i5075[6]
  i5074.HasDepthReader = !!i5075[7]
  i5074.Id = i5075[8]
  i5074.SubShaderIndex = i5075[9]
  i5074.SerializedObjectId = i5075[10]
  var i5083 = i5075[11]
  var i5082 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i5083.length; i += 1) {
    i5082.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i5083[i + 0]));
  }
  i5074.Tags = i5082
  i5074.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i5075[12], i5074.UsePass)
  i5074.GrabPassTextureName = i5075[13]
  i5074.PassShaderRequirements = i5075[14]
  i5074.PlatformMask = i5075[15]
  return i5074
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i5086 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i5087 = data
  i5086.NoShaderVariant = !!i5087[0]
  i5086.VertexProgram = i5087[1]
  i5086.FragmentProgram = i5087[2]
  i5086.LOD = i5087[3]
  i5086.readDepth = !!i5087[4]
  i5086.Index = i5087[5]
  i5086.PassId = i5087[6]
  i5086.SubShaderIndex = i5087[7]
  var i5089 = i5087[8]
  var i5088 = []
  for(var i = 0; i < i5089.length; i += 1) {
    i5088.push( i5089[i + 0] );
  }
  i5086.Keywords = i5088
  var i5091 = i5087[9]
  var i5090 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i5091.length; i += 1) {
    i5090.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i5091[i + 0]));
  }
  i5086.Tags = i5090
  return i5086
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i5094 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i5095 = data
  i5094.Key = i5095[0]
  i5094.Value = i5095[1]
  return i5094
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i5098 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i5099 = data
  var i5101 = i5099[0]
  var i5100 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i5101.length; i += 1) {
    i5100.add(i5101[i + 0]);
  }
  i5098.Keywords = i5100
  return i5098
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i5102 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i5103 = data
  i5102.shader = i5103[0]
  i5102.pass = i5103[1]
  return i5102
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i5107 = data
  i5106.ShaderName = i5107[0]
  var i5109 = i5107[1]
  var i5108 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i5109.length; i += 1) {
    i5108.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i5109[i + 0]));
  }
  i5106.Details = i5108
  return i5106
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i5113 = data
  i5112.PointLightCount = i5113[0]
  i5112.SpotLightCount = i5113[1]
  i5112.DirectionalLightCount = i5113[2]
  i5112.LightmapOn = !!i5113[3]
  i5112.DirlightmapCombined = !!i5113[4]
  i5112.DirectionalCookieExists = !!i5113[5]
  i5112.PointCookieExists = !!i5113[6]
  i5112.SpotCookieExists = !!i5113[7]
  i5112.AddiitonalLightsKeywordRequired = !!i5113[8]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5115 = data
  var i5117 = i5115[0]
  var i5116 = []
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5117[i + 0]) );
  }
  i5114.files = i5116
  i5114.componentToPrefabIds = i5115[1]
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5121 = data
  i5120.path = i5121[0]
  request.r(i5121[1], i5121[2], 0, i5120, 'unityObject')
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5123 = data
  var i5125 = i5123[0]
  var i5124 = []
  for(var i = 0; i < i5125.length; i += 1) {
    i5124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5125[i + 0]) );
  }
  i5122.scriptsExecutionOrder = i5124
  var i5127 = i5123[1]
  var i5126 = []
  for(var i = 0; i < i5127.length; i += 1) {
    i5126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5127[i + 0]) );
  }
  i5122.sortingLayers = i5126
  var i5129 = i5123[2]
  var i5128 = []
  for(var i = 0; i < i5129.length; i += 1) {
    i5128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5129[i + 0]) );
  }
  i5122.cullingLayers = i5128
  i5122.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5123[3], i5122.timeSettings)
  i5122.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5123[4], i5122.physicsSettings)
  i5122.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5123[5], i5122.physics2DSettings)
  i5122.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5123[6], i5122.qualitySettings)
  i5122.enableRealtimeShadows = !!i5123[7]
  i5122.enableAutoInstancing = !!i5123[8]
  i5122.enableDynamicBatching = !!i5123[9]
  i5122.lightmapEncodingQuality = i5123[10]
  i5122.desiredColorSpace = i5123[11]
  var i5131 = i5123[12]
  var i5130 = []
  for(var i = 0; i < i5131.length; i += 1) {
    i5130.push( i5131[i + 0] );
  }
  i5122.allTags = i5130
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5135 = data
  i5134.name = i5135[0]
  i5134.value = i5135[1]
  return i5134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5139 = data
  i5138.id = i5139[0]
  i5138.name = i5139[1]
  i5138.value = i5139[2]
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5143 = data
  i5142.id = i5143[0]
  i5142.name = i5143[1]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5145 = data
  i5144.fixedDeltaTime = i5145[0]
  i5144.maximumDeltaTime = i5145[1]
  i5144.timeScale = i5145[2]
  i5144.maximumParticleTimestep = i5145[3]
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5147 = data
  i5146.gravity = new pc.Vec3( i5147[0], i5147[1], i5147[2] )
  i5146.defaultSolverIterations = i5147[3]
  i5146.bounceThreshold = i5147[4]
  i5146.autoSyncTransforms = !!i5147[5]
  i5146.autoSimulation = !!i5147[6]
  var i5149 = i5147[7]
  var i5148 = []
  for(var i = 0; i < i5149.length; i += 1) {
    i5148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5149[i + 0]) );
  }
  i5146.collisionMatrix = i5148
  return i5146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5153 = data
  i5152.enabled = !!i5153[0]
  i5152.layerId = i5153[1]
  i5152.otherLayerId = i5153[2]
  return i5152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5155 = data
  request.r(i5155[0], i5155[1], 0, i5154, 'material')
  i5154.gravity = new pc.Vec2( i5155[2], i5155[3] )
  i5154.positionIterations = i5155[4]
  i5154.velocityIterations = i5155[5]
  i5154.velocityThreshold = i5155[6]
  i5154.maxLinearCorrection = i5155[7]
  i5154.maxAngularCorrection = i5155[8]
  i5154.maxTranslationSpeed = i5155[9]
  i5154.maxRotationSpeed = i5155[10]
  i5154.baumgarteScale = i5155[11]
  i5154.baumgarteTOIScale = i5155[12]
  i5154.timeToSleep = i5155[13]
  i5154.linearSleepTolerance = i5155[14]
  i5154.angularSleepTolerance = i5155[15]
  i5154.defaultContactOffset = i5155[16]
  i5154.autoSimulation = !!i5155[17]
  i5154.queriesHitTriggers = !!i5155[18]
  i5154.queriesStartInColliders = !!i5155[19]
  i5154.callbacksOnDisable = !!i5155[20]
  i5154.reuseCollisionCallbacks = !!i5155[21]
  i5154.autoSyncTransforms = !!i5155[22]
  var i5157 = i5155[23]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5157[i + 0]) );
  }
  i5154.collisionMatrix = i5156
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5161 = data
  i5160.enabled = !!i5161[0]
  i5160.layerId = i5161[1]
  i5160.otherLayerId = i5161[2]
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5163 = data
  var i5165 = i5163[0]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 1) {
    i5164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5165[i + 0]) );
  }
  i5162.qualityLevels = i5164
  var i5167 = i5163[1]
  var i5166 = []
  for(var i = 0; i < i5167.length; i += 1) {
    i5166.push( i5167[i + 0] );
  }
  i5162.names = i5166
  i5162.shadows = i5163[2]
  i5162.anisotropicFiltering = i5163[3]
  i5162.antiAliasing = i5163[4]
  i5162.lodBias = i5163[5]
  i5162.shadowCascades = i5163[6]
  i5162.shadowDistance = i5163[7]
  i5162.shadowmaskMode = i5163[8]
  i5162.shadowProjection = i5163[9]
  i5162.shadowResolution = i5163[10]
  i5162.softParticles = !!i5163[11]
  i5162.softVegetation = !!i5163[12]
  i5162.activeColorSpace = i5163[13]
  i5162.desiredColorSpace = i5163[14]
  i5162.masterTextureLimit = i5163[15]
  i5162.maxQueuedFrames = i5163[16]
  i5162.particleRaycastBudget = i5163[17]
  i5162.pixelLightCount = i5163[18]
  i5162.realtimeReflectionProbes = !!i5163[19]
  i5162.shadowCascade2Split = i5163[20]
  i5162.shadowCascade4Split = new pc.Vec3( i5163[21], i5163[22], i5163[23] )
  i5162.streamingMipmapsActive = !!i5163[24]
  i5162.vSyncCount = i5163[25]
  i5162.asyncUploadBufferSize = i5163[26]
  i5162.asyncUploadTimeSlice = i5163[27]
  i5162.billboardsFaceCameraPosition = !!i5163[28]
  i5162.shadowNearPlaneOffset = i5163[29]
  i5162.streamingMipmapsMemoryBudget = i5163[30]
  i5162.maximumLODLevel = i5163[31]
  i5162.streamingMipmapsAddAllCameras = !!i5163[32]
  i5162.streamingMipmapsMaxLevelReduction = i5163[33]
  i5162.streamingMipmapsRenderersPerFrame = i5163[34]
  i5162.resolutionScalingFixedDPIFactor = i5163[35]
  i5162.streamingMipmapsMaxFileIORequests = i5163[36]
  i5162.currentQualityLevel = i5163[37]
  return i5162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5173 = data
  i5172.weight = i5173[0]
  i5172.vertices = i5173[1]
  i5172.normals = i5173[2]
  i5172.tangents = i5173[3]
  return i5172
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5174 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5175 = data
  i5174.xPlacement = i5175[0]
  i5174.yPlacement = i5175[1]
  i5174.xAdvance = i5175[2]
  i5174.yAdvance = i5175[3]
  return i5174
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i5178 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i5179 = data
  i5178.SubShaderIndex = i5179[0]
  i5178.PassId = i5179[1]
  var i5181 = i5179[2]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( i5181[i + 0] );
  }
  i5178.ShaderVariantKeywords = i5180
  var i5183 = i5179[3]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( i5183[i + 0] );
  }
  i5178.Messages = i5182
  return i5178
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

Deserializers.buildID = "7c1868c9-4665-49fd-9ece-d0e567a899d3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

