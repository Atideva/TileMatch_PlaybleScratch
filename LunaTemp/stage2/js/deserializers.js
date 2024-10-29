var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.JointSpring' )
  var i1645 = data
  i1644.spring = i1645[0]
  i1644.damper = i1645[1]
  i1644.targetPosition = i1645[2]
  return i1644
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.JointMotor' )
  var i1647 = data
  i1646.m_TargetVelocity = i1647[0]
  i1646.m_Force = i1647[1]
  i1646.m_FreeSpin = i1647[2]
  return i1646
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.JointLimits' )
  var i1649 = data
  i1648.m_Min = i1649[0]
  i1648.m_Max = i1649[1]
  i1648.m_Bounciness = i1649[2]
  i1648.m_BounceMinVelocity = i1649[3]
  i1648.m_ContactDistance = i1649[4]
  i1648.minBounce = i1649[5]
  i1648.maxBounce = i1649[6]
  return i1648
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.JointDrive' )
  var i1651 = data
  i1650.m_PositionSpring = i1651[0]
  i1650.m_PositionDamper = i1651[1]
  i1650.m_MaximumForce = i1651[2]
  return i1650
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1653 = data
  i1652.m_Spring = i1653[0]
  i1652.m_Damper = i1653[1]
  return i1652
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1655 = data
  i1654.m_Limit = i1655[0]
  i1654.m_Bounciness = i1655[1]
  i1654.m_ContactDistance = i1655[2]
  return i1654
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1657 = data
  i1656.m_ExtremumSlip = i1657[0]
  i1656.m_ExtremumValue = i1657[1]
  i1656.m_AsymptoteSlip = i1657[2]
  i1656.m_AsymptoteValue = i1657[3]
  i1656.m_Stiffness = i1657[4]
  return i1656
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1659 = data
  i1658.m_LowerAngle = i1659[0]
  i1658.m_UpperAngle = i1659[1]
  return i1658
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1661 = data
  i1660.m_MotorSpeed = i1661[0]
  i1660.m_MaximumMotorTorque = i1661[1]
  return i1660
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1663 = data
  i1662.m_DampingRatio = i1663[0]
  i1662.m_Frequency = i1663[1]
  i1662.m_Angle = i1663[2]
  return i1662
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1665 = data
  i1664.m_LowerTranslation = i1665[0]
  i1664.m_UpperTranslation = i1665[1]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1666 = root || new pc.UnityMaterial()
  var i1667 = data
  i1666.name = i1667[0]
  request.r(i1667[1], i1667[2], 0, i1666, 'shader')
  i1666.renderQueue = i1667[3]
  i1666.enableInstancing = !!i1667[4]
  var i1669 = i1667[5]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1669[i + 0]) );
  }
  i1666.floatParameters = i1668
  var i1671 = i1667[6]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1671[i + 0]) );
  }
  i1666.colorParameters = i1670
  var i1673 = i1667[7]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1673[i + 0]) );
  }
  i1666.vectorParameters = i1672
  var i1675 = i1667[8]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1675[i + 0]) );
  }
  i1666.textureParameters = i1674
  var i1677 = i1667[9]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1677[i + 0]) );
  }
  i1666.materialFlags = i1676
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.value = i1681[1]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1685 = data
  i1684.name = i1685[0]
  i1684.value = new pc.Color(i1685[1], i1685[2], i1685[3], i1685[4])
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1689 = data
  i1688.name = i1689[0]
  i1688.value = new pc.Vec4( i1689[1], i1689[2], i1689[3], i1689[4] )
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1693 = data
  i1692.name = i1693[0]
  request.r(i1693[1], i1693[2], 0, i1692, 'value')
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1697 = data
  i1696.name = i1697[0]
  i1696.enabled = !!i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1699 = data
  i1698.name = i1699[0]
  i1698.width = i1699[1]
  i1698.height = i1699[2]
  i1698.mipmapCount = i1699[3]
  i1698.anisoLevel = i1699[4]
  i1698.filterMode = i1699[5]
  i1698.hdr = !!i1699[6]
  i1698.format = i1699[7]
  i1698.wrapMode = i1699[8]
  i1698.alphaIsTransparency = !!i1699[9]
  i1698.alphaSource = i1699[10]
  i1698.graphicsFormat = i1699[11]
  i1698.sRGBTexture = !!i1699[12]
  i1698.desiredColorSpace = i1699[13]
  i1698.wrapU = i1699[14]
  i1698.wrapV = i1699[15]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1701 = data
  i1700.position = new pc.Vec3( i1701[0], i1701[1], i1701[2] )
  i1700.scale = new pc.Vec3( i1701[3], i1701[4], i1701[5] )
  i1700.rotation = new pc.Quat(i1701[6], i1701[7], i1701[8], i1701[9])
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1703 = data
  i1702.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1703[0], i1702.main)
  i1702.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1703[1], i1702.colorBySpeed)
  i1702.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1703[2], i1702.colorOverLifetime)
  i1702.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1703[3], i1702.emission)
  i1702.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1703[4], i1702.rotationBySpeed)
  i1702.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1703[5], i1702.rotationOverLifetime)
  i1702.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1703[6], i1702.shape)
  i1702.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1703[7], i1702.sizeBySpeed)
  i1702.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1703[8], i1702.sizeOverLifetime)
  i1702.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1703[9], i1702.textureSheetAnimation)
  i1702.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1703[10], i1702.velocityOverLifetime)
  i1702.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1703[11], i1702.noise)
  i1702.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1703[12], i1702.inheritVelocity)
  i1702.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1703[13], i1702.forceOverLifetime)
  i1702.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1703[14], i1702.limitVelocityOverLifetime)
  i1702.useAutoRandomSeed = !!i1703[15]
  i1702.randomSeed = i1703[16]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1704 = root || new pc.ParticleSystemMain()
  var i1705 = data
  i1704.duration = i1705[0]
  i1704.loop = !!i1705[1]
  i1704.prewarm = !!i1705[2]
  i1704.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[3], i1704.startDelay)
  i1704.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[4], i1704.startLifetime)
  i1704.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[5], i1704.startSpeed)
  i1704.startSize3D = !!i1705[6]
  i1704.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[7], i1704.startSizeX)
  i1704.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[8], i1704.startSizeY)
  i1704.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[9], i1704.startSizeZ)
  i1704.startRotation3D = !!i1705[10]
  i1704.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[11], i1704.startRotationX)
  i1704.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[12], i1704.startRotationY)
  i1704.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[13], i1704.startRotationZ)
  i1704.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1705[14], i1704.startColor)
  i1704.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[15], i1704.gravityModifier)
  i1704.simulationSpace = i1705[16]
  request.r(i1705[17], i1705[18], 0, i1704, 'customSimulationSpace')
  i1704.simulationSpeed = i1705[19]
  i1704.useUnscaledTime = !!i1705[20]
  i1704.scalingMode = i1705[21]
  i1704.playOnAwake = !!i1705[22]
  i1704.maxParticles = i1705[23]
  i1704.emitterVelocityMode = i1705[24]
  i1704.stopAction = i1705[25]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1706 = root || new pc.MinMaxCurve()
  var i1707 = data
  i1706.mode = i1707[0]
  i1706.curveMin = new pc.AnimationCurve( { keys_flow: i1707[1] } )
  i1706.curveMax = new pc.AnimationCurve( { keys_flow: i1707[2] } )
  i1706.curveMultiplier = i1707[3]
  i1706.constantMin = i1707[4]
  i1706.constantMax = i1707[5]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1708 = root || new pc.MinMaxGradient()
  var i1709 = data
  i1708.mode = i1709[0]
  i1708.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1709[1], i1708.gradientMin)
  i1708.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1709[2], i1708.gradientMax)
  i1708.colorMin = new pc.Color(i1709[3], i1709[4], i1709[5], i1709[6])
  i1708.colorMax = new pc.Color(i1709[7], i1709[8], i1709[9], i1709[10])
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1711 = data
  i1710.mode = i1711[0]
  var i1713 = i1711[1]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1713[i + 0]) );
  }
  i1710.colorKeys = i1712
  var i1715 = i1711[2]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1715[i + 0]) );
  }
  i1710.alphaKeys = i1714
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1716 = root || new pc.ParticleSystemColorBySpeed()
  var i1717 = data
  i1716.enabled = !!i1717[0]
  i1716.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1717[1], i1716.color)
  i1716.range = new pc.Vec2( i1717[2], i1717[3] )
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1721 = data
  i1720.color = new pc.Color(i1721[0], i1721[1], i1721[2], i1721[3])
  i1720.time = i1721[4]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1725 = data
  i1724.alpha = i1725[0]
  i1724.time = i1725[1]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1726 = root || new pc.ParticleSystemColorOverLifetime()
  var i1727 = data
  i1726.enabled = !!i1727[0]
  i1726.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1727[1], i1726.color)
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1728 = root || new pc.ParticleSystemEmitter()
  var i1729 = data
  i1728.enabled = !!i1729[0]
  i1728.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[1], i1728.rateOverTime)
  i1728.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[2], i1728.rateOverDistance)
  var i1731 = i1729[3]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1731[i + 0]) );
  }
  i1728.bursts = i1730
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1734 = root || new pc.ParticleSystemBurst()
  var i1735 = data
  i1734.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[0], i1734.count)
  i1734.cycleCount = i1735[1]
  i1734.minCount = i1735[2]
  i1734.maxCount = i1735[3]
  i1734.repeatInterval = i1735[4]
  i1734.time = i1735[5]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1736 = root || new pc.ParticleSystemRotationBySpeed()
  var i1737 = data
  i1736.enabled = !!i1737[0]
  i1736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[1], i1736.x)
  i1736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[2], i1736.y)
  i1736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[3], i1736.z)
  i1736.separateAxes = !!i1737[4]
  i1736.range = new pc.Vec2( i1737[5], i1737[6] )
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1738 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1739 = data
  i1738.enabled = !!i1739[0]
  i1738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[1], i1738.x)
  i1738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[2], i1738.y)
  i1738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[3], i1738.z)
  i1738.separateAxes = !!i1739[4]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1740 = root || new pc.ParticleSystemShape()
  var i1741 = data
  i1740.enabled = !!i1741[0]
  i1740.shapeType = i1741[1]
  i1740.randomDirectionAmount = i1741[2]
  i1740.sphericalDirectionAmount = i1741[3]
  i1740.randomPositionAmount = i1741[4]
  i1740.alignToDirection = !!i1741[5]
  i1740.radius = i1741[6]
  i1740.radiusMode = i1741[7]
  i1740.radiusSpread = i1741[8]
  i1740.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[9], i1740.radiusSpeed)
  i1740.radiusThickness = i1741[10]
  i1740.angle = i1741[11]
  i1740.length = i1741[12]
  i1740.boxThickness = new pc.Vec3( i1741[13], i1741[14], i1741[15] )
  i1740.meshShapeType = i1741[16]
  request.r(i1741[17], i1741[18], 0, i1740, 'mesh')
  request.r(i1741[19], i1741[20], 0, i1740, 'meshRenderer')
  request.r(i1741[21], i1741[22], 0, i1740, 'skinnedMeshRenderer')
  i1740.useMeshMaterialIndex = !!i1741[23]
  i1740.meshMaterialIndex = i1741[24]
  i1740.useMeshColors = !!i1741[25]
  i1740.normalOffset = i1741[26]
  i1740.arc = i1741[27]
  i1740.arcMode = i1741[28]
  i1740.arcSpread = i1741[29]
  i1740.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[30], i1740.arcSpeed)
  i1740.donutRadius = i1741[31]
  i1740.position = new pc.Vec3( i1741[32], i1741[33], i1741[34] )
  i1740.rotation = new pc.Vec3( i1741[35], i1741[36], i1741[37] )
  i1740.scale = new pc.Vec3( i1741[38], i1741[39], i1741[40] )
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1742 = root || new pc.ParticleSystemSizeBySpeed()
  var i1743 = data
  i1742.enabled = !!i1743[0]
  i1742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[1], i1742.x)
  i1742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[2], i1742.y)
  i1742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[3], i1742.z)
  i1742.separateAxes = !!i1743[4]
  i1742.range = new pc.Vec2( i1743[5], i1743[6] )
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1744 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1745 = data
  i1744.enabled = !!i1745[0]
  i1744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[1], i1744.x)
  i1744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[2], i1744.y)
  i1744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[3], i1744.z)
  i1744.separateAxes = !!i1745[4]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1746 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1747 = data
  i1746.enabled = !!i1747[0]
  i1746.mode = i1747[1]
  i1746.animation = i1747[2]
  i1746.numTilesX = i1747[3]
  i1746.numTilesY = i1747[4]
  i1746.useRandomRow = !!i1747[5]
  i1746.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[6], i1746.frameOverTime)
  i1746.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[7], i1746.startFrame)
  i1746.cycleCount = i1747[8]
  i1746.rowIndex = i1747[9]
  i1746.flipU = i1747[10]
  i1746.flipV = i1747[11]
  i1746.spriteCount = i1747[12]
  var i1749 = i1747[13]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 2) {
  request.r(i1749[i + 0], i1749[i + 1], 2, i1748, '')
  }
  i1746.sprites = i1748
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1752 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1753 = data
  i1752.enabled = !!i1753[0]
  i1752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[1], i1752.x)
  i1752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[2], i1752.y)
  i1752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[3], i1752.z)
  i1752.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[4], i1752.radial)
  i1752.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[5], i1752.speedModifier)
  i1752.space = i1753[6]
  i1752.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[7], i1752.orbitalX)
  i1752.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[8], i1752.orbitalY)
  i1752.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[9], i1752.orbitalZ)
  i1752.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[10], i1752.orbitalOffsetX)
  i1752.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[11], i1752.orbitalOffsetY)
  i1752.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[12], i1752.orbitalOffsetZ)
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1754 = root || new pc.ParticleSystemNoise()
  var i1755 = data
  i1754.enabled = !!i1755[0]
  i1754.separateAxes = !!i1755[1]
  i1754.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[2], i1754.strengthX)
  i1754.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[3], i1754.strengthY)
  i1754.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[4], i1754.strengthZ)
  i1754.frequency = i1755[5]
  i1754.damping = !!i1755[6]
  i1754.octaveCount = i1755[7]
  i1754.octaveMultiplier = i1755[8]
  i1754.octaveScale = i1755[9]
  i1754.quality = i1755[10]
  i1754.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[11], i1754.scrollSpeed)
  i1754.scrollSpeedMultiplier = i1755[12]
  i1754.remapEnabled = !!i1755[13]
  i1754.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[14], i1754.remapX)
  i1754.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[15], i1754.remapY)
  i1754.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[16], i1754.remapZ)
  i1754.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[17], i1754.positionAmount)
  i1754.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[18], i1754.rotationAmount)
  i1754.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[19], i1754.sizeAmount)
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1756 = root || new pc.ParticleSystemInheritVelocity()
  var i1757 = data
  i1756.enabled = !!i1757[0]
  i1756.mode = i1757[1]
  i1756.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[2], i1756.curve)
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1758 = root || new pc.ParticleSystemForceOverLifetime()
  var i1759 = data
  i1758.enabled = !!i1759[0]
  i1758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[1], i1758.x)
  i1758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[2], i1758.y)
  i1758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[3], i1758.z)
  i1758.space = i1759[4]
  i1758.randomized = !!i1759[5]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1760 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1761 = data
  i1760.enabled = !!i1761[0]
  i1760.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[1], i1760.limit)
  i1760.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[2], i1760.limitX)
  i1760.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[3], i1760.limitY)
  i1760.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[4], i1760.limitZ)
  i1760.dampen = i1761[5]
  i1760.separateAxes = !!i1761[6]
  i1760.space = i1761[7]
  i1760.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[8], i1760.drag)
  i1760.multiplyDragByParticleSize = !!i1761[9]
  i1760.multiplyDragByParticleVelocity = !!i1761[10]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1763 = data
  i1762.enabled = !!i1763[0]
  request.r(i1763[1], i1763[2], 0, i1762, 'sharedMaterial')
  var i1765 = i1763[3]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 2) {
  request.r(i1765[i + 0], i1765[i + 1], 2, i1764, '')
  }
  i1762.sharedMaterials = i1764
  i1762.receiveShadows = !!i1763[4]
  i1762.shadowCastingMode = i1763[5]
  i1762.sortingLayerID = i1763[6]
  i1762.sortingOrder = i1763[7]
  i1762.lightmapIndex = i1763[8]
  i1762.lightmapSceneIndex = i1763[9]
  i1762.lightmapScaleOffset = new pc.Vec4( i1763[10], i1763[11], i1763[12], i1763[13] )
  i1762.lightProbeUsage = i1763[14]
  i1762.reflectionProbeUsage = i1763[15]
  request.r(i1763[16], i1763[17], 0, i1762, 'mesh')
  i1762.meshCount = i1763[18]
  i1762.activeVertexStreamsCount = i1763[19]
  i1762.alignment = i1763[20]
  i1762.renderMode = i1763[21]
  i1762.sortMode = i1763[22]
  i1762.lengthScale = i1763[23]
  i1762.velocityScale = i1763[24]
  i1762.cameraVelocityScale = i1763[25]
  i1762.normalDirection = i1763[26]
  i1762.sortingFudge = i1763[27]
  i1762.minParticleSize = i1763[28]
  i1762.maxParticleSize = i1763[29]
  i1762.pivot = new pc.Vec3( i1763[30], i1763[31], i1763[32] )
  request.r(i1763[33], i1763[34], 0, i1762, 'trailMaterial')
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1769 = data
  i1768.name = i1769[0]
  i1768.tagId = i1769[1]
  i1768.enabled = !!i1769[2]
  i1768.isStatic = !!i1769[3]
  i1768.layer = i1769[4]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1771 = data
  i1770.name = i1771[0]
  i1770.halfPrecision = !!i1771[1]
  i1770.useUInt32IndexFormat = !!i1771[2]
  i1770.vertexCount = i1771[3]
  i1770.aabb = i1771[4]
  var i1773 = i1771[5]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( !!i1773[i + 0] );
  }
  i1770.streams = i1772
  i1770.vertices = i1771[6]
  var i1775 = i1771[7]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1775[i + 0]) );
  }
  i1770.subMeshes = i1774
  var i1777 = i1771[8]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 16) {
    i1776.push( new pc.Mat4().setData(i1777[i + 0], i1777[i + 1], i1777[i + 2], i1777[i + 3],  i1777[i + 4], i1777[i + 5], i1777[i + 6], i1777[i + 7],  i1777[i + 8], i1777[i + 9], i1777[i + 10], i1777[i + 11],  i1777[i + 12], i1777[i + 13], i1777[i + 14], i1777[i + 15]) );
  }
  i1770.bindposes = i1776
  var i1779 = i1771[9]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1779[i + 0]) );
  }
  i1770.blendShapes = i1778
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1785 = data
  i1784.triangles = i1785[0]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1791 = data
  i1790.name = i1791[0]
  var i1793 = i1791[1]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1793[i + 0]) );
  }
  i1790.frames = i1792
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1795 = data
  i1794.pivot = new pc.Vec2( i1795[0], i1795[1] )
  i1794.anchorMin = new pc.Vec2( i1795[2], i1795[3] )
  i1794.anchorMax = new pc.Vec2( i1795[4], i1795[5] )
  i1794.sizeDelta = new pc.Vec2( i1795[6], i1795[7] )
  i1794.anchoredPosition3D = new pc.Vec3( i1795[8], i1795[9], i1795[10] )
  i1794.rotation = new pc.Quat(i1795[11], i1795[12], i1795[13], i1795[14])
  i1794.scale = new pc.Vec3( i1795[15], i1795[16], i1795[17] )
  return i1794
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i1796 = root || request.c( 'QuestSlot' )
  var i1797 = data
  i1796.InitialScale = new pc.Vec3( i1797[0], i1797[1], i1797[2] )
  i1796.MaximumScale = new pc.Vec3( i1797[3], i1797[4], i1797[5] )
  i1796.EndScale = new pc.Vec3( i1797[6], i1797[7], i1797[8] )
  i1796.animationDuration = i1797[9]
  i1796.maxSizeTrigger = i1797[10]
  request.r(i1797[11], i1797[12], 0, i1796, 'type')
  i1796.amount = i1797[13]
  i1796.locked = !!i1797[14]
  request.r(i1797[15], i1797[16], 0, i1796, 'icon')
  request.r(i1797[17], i1797[18], 0, i1796, 'amountTxt')
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1799 = data
  i1798.cullTransparentMesh = !!i1799[0]
  return i1798
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.UI.Image' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'm_Sprite')
  i1800.m_Type = i1801[2]
  i1800.m_PreserveAspect = !!i1801[3]
  i1800.m_FillCenter = !!i1801[4]
  i1800.m_FillMethod = i1801[5]
  i1800.m_FillAmount = i1801[6]
  i1800.m_FillClockwise = !!i1801[7]
  i1800.m_FillOrigin = i1801[8]
  i1800.m_UseSpriteMesh = !!i1801[9]
  i1800.m_PixelsPerUnitMultiplier = i1801[10]
  request.r(i1801[11], i1801[12], 0, i1800, 'm_Material')
  i1800.m_Maskable = !!i1801[13]
  i1800.m_Color = new pc.Color(i1801[14], i1801[15], i1801[16], i1801[17])
  i1800.m_RaycastTarget = !!i1801[18]
  i1800.m_RaycastPadding = new pc.Vec4( i1801[19], i1801[20], i1801[21], i1801[22] )
  return i1800
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1802 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1803 = data
  i1802.m_hasFontAssetChanged = !!i1803[0]
  request.r(i1803[1], i1803[2], 0, i1802, 'm_baseMaterial')
  i1802.m_maskOffset = new pc.Vec4( i1803[3], i1803[4], i1803[5], i1803[6] )
  i1802.m_text = i1803[7]
  i1802.m_isRightToLeft = !!i1803[8]
  request.r(i1803[9], i1803[10], 0, i1802, 'm_fontAsset')
  request.r(i1803[11], i1803[12], 0, i1802, 'm_sharedMaterial')
  var i1805 = i1803[13]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 2) {
  request.r(i1805[i + 0], i1805[i + 1], 2, i1804, '')
  }
  i1802.m_fontSharedMaterials = i1804
  request.r(i1803[14], i1803[15], 0, i1802, 'm_fontMaterial')
  var i1807 = i1803[16]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 2) {
  request.r(i1807[i + 0], i1807[i + 1], 2, i1806, '')
  }
  i1802.m_fontMaterials = i1806
  i1802.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1803[17], i1803[18], i1803[19], i1803[20])
  i1802.m_fontColor = new pc.Color(i1803[21], i1803[22], i1803[23], i1803[24])
  i1802.m_enableVertexGradient = !!i1803[25]
  i1802.m_colorMode = i1803[26]
  i1802.m_fontColorGradient = request.d('TMPro.VertexGradient', i1803[27], i1802.m_fontColorGradient)
  request.r(i1803[28], i1803[29], 0, i1802, 'm_fontColorGradientPreset')
  request.r(i1803[30], i1803[31], 0, i1802, 'm_spriteAsset')
  i1802.m_tintAllSprites = !!i1803[32]
  request.r(i1803[33], i1803[34], 0, i1802, 'm_StyleSheet')
  i1802.m_TextStyleHashCode = i1803[35]
  i1802.m_overrideHtmlColors = !!i1803[36]
  i1802.m_faceColor = UnityEngine.Color32.ConstructColor(i1803[37], i1803[38], i1803[39], i1803[40])
  i1802.m_fontSize = i1803[41]
  i1802.m_fontSizeBase = i1803[42]
  i1802.m_fontWeight = i1803[43]
  i1802.m_enableAutoSizing = !!i1803[44]
  i1802.m_fontSizeMin = i1803[45]
  i1802.m_fontSizeMax = i1803[46]
  i1802.m_fontStyle = i1803[47]
  i1802.m_HorizontalAlignment = i1803[48]
  i1802.m_VerticalAlignment = i1803[49]
  i1802.m_textAlignment = i1803[50]
  i1802.m_characterSpacing = i1803[51]
  i1802.m_wordSpacing = i1803[52]
  i1802.m_lineSpacing = i1803[53]
  i1802.m_lineSpacingMax = i1803[54]
  i1802.m_paragraphSpacing = i1803[55]
  i1802.m_charWidthMaxAdj = i1803[56]
  i1802.m_enableWordWrapping = !!i1803[57]
  i1802.m_wordWrappingRatios = i1803[58]
  i1802.m_overflowMode = i1803[59]
  request.r(i1803[60], i1803[61], 0, i1802, 'm_linkedTextComponent')
  request.r(i1803[62], i1803[63], 0, i1802, 'parentLinkedComponent')
  i1802.m_enableKerning = !!i1803[64]
  i1802.m_enableExtraPadding = !!i1803[65]
  i1802.checkPaddingRequired = !!i1803[66]
  i1802.m_isRichText = !!i1803[67]
  i1802.m_parseCtrlCharacters = !!i1803[68]
  i1802.m_isOrthographic = !!i1803[69]
  i1802.m_isCullingEnabled = !!i1803[70]
  i1802.m_horizontalMapping = i1803[71]
  i1802.m_verticalMapping = i1803[72]
  i1802.m_uvLineOffset = i1803[73]
  i1802.m_geometrySortingOrder = i1803[74]
  i1802.m_IsTextObjectScaleStatic = !!i1803[75]
  i1802.m_VertexBufferAutoSizeReduction = !!i1803[76]
  i1802.m_useMaxVisibleDescender = !!i1803[77]
  i1802.m_pageToDisplay = i1803[78]
  i1802.m_margin = new pc.Vec4( i1803[79], i1803[80], i1803[81], i1803[82] )
  i1802.m_isUsingLegacyAnimationComponent = !!i1803[83]
  i1802.m_isVolumetricText = !!i1803[84]
  request.r(i1803[85], i1803[86], 0, i1802, 'm_Material')
  i1802.m_Maskable = !!i1803[87]
  i1802.m_Color = new pc.Color(i1803[88], i1803[89], i1803[90], i1803[91])
  i1802.m_RaycastTarget = !!i1803[92]
  i1802.m_RaycastPadding = new pc.Vec4( i1803[93], i1803[94], i1803[95], i1803[96] )
  return i1802
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1808 = root || request.c( 'TMPro.VertexGradient' )
  var i1809 = data
  i1808.topLeft = new pc.Color(i1809[0], i1809[1], i1809[2], i1809[3])
  i1808.topRight = new pc.Color(i1809[4], i1809[5], i1809[6], i1809[7])
  i1808.bottomLeft = new pc.Color(i1809[8], i1809[9], i1809[10], i1809[11])
  i1808.bottomRight = new pc.Color(i1809[12], i1809[13], i1809[14], i1809[15])
  return i1808
}

Deserializers["Tile"] = function (request, data, root) {
  var i1810 = root || request.c( 'Tile' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'Type')
  request.r(i1811[2], i1811[3], 0, i1810, 'lastType')
  request.r(i1811[4], i1811[5], 0, i1810, 'icon')
  request.r(i1811[6], i1811[7], 0, i1810, 'disabledTile')
  request.r(i1811[8], i1811[9], 0, i1810, 'background')
  request.r(i1811[10], i1811[11], 0, i1810, 'trail')
  i1810.defaultSize = new pc.Vec3( i1811[12], i1811[13], i1811[14] )
  i1810.speed = i1811[15]
  i1810.spawnAnimSize = i1811[16]
  i1810.spawnAnimDuration = i1811[17]
  var i1813 = i1811[18]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 1, i1812, '')
  }
  i1810.coverTiles = i1812
  i1810._isClickable = !!i1811[19]
  i1810.IsInit = !!i1811[20]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1817 = data
  i1816.enabled = !!i1817[0]
  request.r(i1817[1], i1817[2], 0, i1816, 'sharedMaterial')
  var i1819 = i1817[3]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 2) {
  request.r(i1819[i + 0], i1819[i + 1], 2, i1818, '')
  }
  i1816.sharedMaterials = i1818
  i1816.receiveShadows = !!i1817[4]
  i1816.shadowCastingMode = i1817[5]
  i1816.sortingLayerID = i1817[6]
  i1816.sortingOrder = i1817[7]
  i1816.lightmapIndex = i1817[8]
  i1816.lightmapSceneIndex = i1817[9]
  i1816.lightmapScaleOffset = new pc.Vec4( i1817[10], i1817[11], i1817[12], i1817[13] )
  i1816.lightProbeUsage = i1817[14]
  i1816.reflectionProbeUsage = i1817[15]
  i1816.color = new pc.Color(i1817[16], i1817[17], i1817[18], i1817[19])
  request.r(i1817[20], i1817[21], 0, i1816, 'sprite')
  i1816.flipX = !!i1817[22]
  i1816.flipY = !!i1817[23]
  i1816.drawMode = i1817[24]
  i1816.size = new pc.Vec2( i1817[25], i1817[26] )
  i1816.tileMode = i1817[27]
  i1816.adaptiveModeThreshold = i1817[28]
  i1816.maskInteraction = i1817[29]
  i1816.spriteSortPoint = i1817[30]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1821 = data
  i1820.enabled = !!i1821[0]
  request.r(i1821[1], i1821[2], 0, i1820, 'sharedMaterial')
  var i1823 = i1821[3]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 2) {
  request.r(i1823[i + 0], i1823[i + 1], 2, i1822, '')
  }
  i1820.sharedMaterials = i1822
  i1820.receiveShadows = !!i1821[4]
  i1820.shadowCastingMode = i1821[5]
  i1820.sortingLayerID = i1821[6]
  i1820.sortingOrder = i1821[7]
  i1820.lightmapIndex = i1821[8]
  i1820.lightmapSceneIndex = i1821[9]
  i1820.lightmapScaleOffset = new pc.Vec4( i1821[10], i1821[11], i1821[12], i1821[13] )
  i1820.lightProbeUsage = i1821[14]
  i1820.reflectionProbeUsage = i1821[15]
  var i1825 = i1821[16]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 3) {
    i1824.push( new pc.Vec3( i1825[i + 0], i1825[i + 1], i1825[i + 2] ) );
  }
  i1820.positions = i1824
  i1820.positionCount = i1821[17]
  i1820.time = i1821[18]
  i1820.startWidth = i1821[19]
  i1820.endWidth = i1821[20]
  i1820.widthMultiplier = i1821[21]
  i1820.autodestruct = !!i1821[22]
  i1820.emitting = !!i1821[23]
  i1820.numCornerVertices = i1821[24]
  i1820.numCapVertices = i1821[25]
  i1820.minVertexDistance = i1821[26]
  i1820.colorGradient = i1821[27] ? new pc.ColorGradient(i1821[27][0], i1821[27][1], i1821[27][2]) : null
  i1820.startColor = new pc.Color(i1821[28], i1821[29], i1821[30], i1821[31])
  i1820.endColor = new pc.Color(i1821[32], i1821[33], i1821[34], i1821[35])
  i1820.generateLightingData = !!i1821[36]
  i1820.textureMode = i1821[37]
  i1820.alignment = i1821[38]
  i1820.widthCurve = new pc.AnimationCurve( { keys_flow: i1821[39] } )
  return i1820
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i1828 = root || request.c( 'TileSlot' )
  var i1829 = data
  i1828.ID = i1829[0]
  request.r(i1829[1], i1829[2], 0, i1828, 'Tile')
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.index = i1831[1]
  i1830.startup = !!i1831[2]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1833 = data
  i1832.enabled = !!i1833[0]
  i1832.aspect = i1833[1]
  i1832.orthographic = !!i1833[2]
  i1832.orthographicSize = i1833[3]
  i1832.backgroundColor = new pc.Color(i1833[4], i1833[5], i1833[6], i1833[7])
  i1832.nearClipPlane = i1833[8]
  i1832.farClipPlane = i1833[9]
  i1832.fieldOfView = i1833[10]
  i1832.depth = i1833[11]
  i1832.clearFlags = i1833[12]
  i1832.cullingMask = i1833[13]
  i1832.rect = i1833[14]
  request.r(i1833[15], i1833[16], 0, i1832, 'targetTexture')
  i1832.usePhysicalProperties = !!i1833[17]
  i1832.focalLength = i1833[18]
  i1832.sensorSize = new pc.Vec2( i1833[19], i1833[20] )
  i1832.lensShift = new pc.Vec2( i1833[21], i1833[22] )
  i1832.gateFit = i1833[23]
  return i1832
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1835 = data
  request.r(i1835[0], i1835[1], 0, i1834, 'm_FirstSelected')
  i1834.m_sendNavigationEvents = !!i1835[2]
  i1834.m_DragThreshold = i1835[3]
  return i1834
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1837 = data
  i1836.m_HorizontalAxis = i1837[0]
  i1836.m_VerticalAxis = i1837[1]
  i1836.m_SubmitButton = i1837[2]
  i1836.m_CancelButton = i1837[3]
  i1836.m_InputActionsPerSecond = i1837[4]
  i1836.m_RepeatDelay = i1837[5]
  i1836.m_ForceModuleActive = !!i1837[6]
  i1836.m_SendPointerHoverToParent = !!i1837[7]
  return i1836
}

Deserializers["Game"] = function (request, data, root) {
  var i1838 = root || request.c( 'Game' )
  var i1839 = data
  i1838.autoGameOverInSeconds = i1839[0]
  request.r(i1839[1], i1839[2], 0, i1838, 'deck')
  request.r(i1839[3], i1839[4], 0, i1838, 'actions')
  request.r(i1839[5], i1839[6], 0, i1838, 'locker')
  request.r(i1839[7], i1839[8], 0, i1838, 'bag')
  request.r(i1839[9], i1839[10], 0, i1838, 'spawnAnimation')
  request.r(i1839[11], i1839[12], 0, i1838, 'tileMatcher')
  request.r(i1839[13], i1839[14], 0, i1838, 'loseCondition')
  request.r(i1839[15], i1839[16], 0, i1838, 'winCondition')
  request.r(i1839[17], i1839[18], 0, i1838, 'input')
  request.r(i1839[19], i1839[20], 0, i1838, 'endCard')
  request.r(i1839[21], i1839[22], 0, i1838, 'quest')
  i1838.useRandom = !!i1839[23]
  request.r(i1839[24], i1839[25], 0, i1838, 'spawnRandom')
  i1838.tileToSpawn = i1839[26]
  i1838.tilesInScene = i1839[27]
  var i1841 = i1839[28]
  var i1840 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 1, i1840, '')
  }
  i1838.tilesInGame = i1840
  return i1838
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i1842 = root || request.c( 'TileSpawner' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'prefab')
  var i1845 = i1843[2]
  var i1844 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1845.length; i += 2) {
  request.r(i1845[i + 0], i1845[i + 1], 1, i1844, '')
  }
  i1842.spawned = i1844
  i1842.hideAtSpawn = !!i1843[3]
  i1842.spawnRate = i1843[4]
  return i1842
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i1846 = root || request.c( 'TileRandomSpawner' )
  var i1847 = data
  i1846.spawnRate = i1847[0]
  var i1849 = i1847[1]
  var i1848 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 1, i1848, '')
  }
  i1846.spawned = i1848
  return i1846
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i1850 = root || request.c( 'TileSpawnAnimation' )
  var i1851 = data
  i1850.delayBetweenLines = i1851[0]
  i1850.delayBetweenTiles = i1851[1]
  i1850.delayBetweenLayers = i1851[2]
  return i1850
}

Deserializers["TileActions"] = function (request, data, root) {
  var i1852 = root || request.c( 'TileActions' )
  var i1853 = data
  return i1852
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i1854 = root || request.c( 'TileLocker' )
  var i1855 = data
  i1854.lockDistance = i1855[0]
  return i1854
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i1856 = root || request.c( 'TileMatcher' )
  var i1857 = data
  request.r(i1857[0], i1857[1], 0, i1856, 'vfx')
  var i1859 = i1857[2]
  var i1858 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1859.length; i += 2) {
  request.r(i1859[i + 0], i1859[i + 1], 1, i1858, '')
  }
  i1856.completed = i1858
  var i1861 = i1857[3]
  var i1860 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 1, i1860, '')
  }
  i1856.lastMatch = i1860
  return i1856
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i1864 = root || request.c( 'LoseCondition' )
  var i1865 = data
  return i1864
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i1866 = root || request.c( 'WinCondition' )
  var i1867 = data
  return i1866
}

Deserializers["Quest"] = function (request, data, root) {
  var i1868 = root || request.c( 'Quest' )
  var i1869 = data
  var i1871 = i1869[0]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 1, i1870, '')
  }
  i1868.slots = i1870
  return i1868
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i1874 = root || request.c( 'InputTouch' )
  var i1875 = data
  i1874.inputCooldown = i1875[0]
  var i1877 = i1875[1]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1877.length; i += 2) {
    i1876.add(new pc.Vec2( i1877[i + 0], i1877[i + 1] ));
  }
  i1874.touches = i1876
  i1874.touchSize = i1875[2]
  return i1874
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i1880 = root || request.c( 'TileBagSorter' )
  var i1881 = data
  i1880.enable = !!i1881[0]
  i1880.intervalSec = i1881[1]
  return i1880
}

Deserializers["EndCard"] = function (request, data, root) {
  var i1882 = root || request.c( 'EndCard' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'canvas')
  return i1882
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i1884 = root || request.c( 'TilesBag' )
  var i1885 = data
  var i1887 = i1885[0]
  var i1886 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 1, i1886, '')
  }
  i1884.slots = i1886
  return i1884
}

Deserializers["Deck"] = function (request, data, root) {
  var i1888 = root || request.c( 'Deck' )
  var i1889 = data
  return i1888
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i1890 = root || request.c( 'DeckLayer' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 2) {
  request.r(i1893[i + 0], i1893[i + 1], 2, i1892, '')
  }
  i1890.Tiles = i1892
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1897 = data
  i1896.enabled = !!i1897[0]
  i1896.planeDistance = i1897[1]
  i1896.referencePixelsPerUnit = i1897[2]
  i1896.isFallbackOverlay = !!i1897[3]
  i1896.renderMode = i1897[4]
  i1896.renderOrder = i1897[5]
  i1896.sortingLayerName = i1897[6]
  i1896.sortingOrder = i1897[7]
  i1896.scaleFactor = i1897[8]
  request.r(i1897[9], i1897[10], 0, i1896, 'worldCamera')
  i1896.overrideSorting = !!i1897[11]
  i1896.pixelPerfect = !!i1897[12]
  i1896.targetDisplay = i1897[13]
  i1896.overridePixelPerfect = !!i1897[14]
  return i1896
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1899 = data
  i1898.m_UiScaleMode = i1899[0]
  i1898.m_ReferencePixelsPerUnit = i1899[1]
  i1898.m_ScaleFactor = i1899[2]
  i1898.m_ReferenceResolution = new pc.Vec2( i1899[3], i1899[4] )
  i1898.m_ScreenMatchMode = i1899[5]
  i1898.m_MatchWidthOrHeight = i1899[6]
  i1898.m_PhysicalUnit = i1899[7]
  i1898.m_FallbackScreenDPI = i1899[8]
  i1898.m_DefaultSpriteDPI = i1899[9]
  i1898.m_DynamicPixelsPerUnit = i1899[10]
  i1898.m_PresetInfoIsWorld = !!i1899[11]
  return i1898
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1901 = data
  i1900.m_IgnoreReversedGraphics = !!i1901[0]
  i1900.m_BlockingObjects = i1901[1]
  i1900.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1901[2] )
  return i1900
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i1902 = root || request.c( 'ResetLocalPosition' )
  var i1903 = data
  return i1902
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1905 = data
  i1904.m_Spacing = i1905[0]
  i1904.m_ChildForceExpandWidth = !!i1905[1]
  i1904.m_ChildForceExpandHeight = !!i1905[2]
  i1904.m_ChildControlWidth = !!i1905[3]
  i1904.m_ChildControlHeight = !!i1905[4]
  i1904.m_ChildScaleWidth = !!i1905[5]
  i1904.m_ChildScaleHeight = !!i1905[6]
  i1904.m_ReverseArrangement = !!i1905[7]
  i1904.m_Padding = UnityEngine.RectOffset.FromPaddings(i1905[8], i1905[9], i1905[10], i1905[11])
  i1904.m_ChildAlignment = i1905[12]
  return i1904
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1907 = data
  i1906.m_StartCorner = i1907[0]
  i1906.m_StartAxis = i1907[1]
  i1906.m_CellSize = new pc.Vec2( i1907[2], i1907[3] )
  i1906.m_Spacing = new pc.Vec2( i1907[4], i1907[5] )
  i1906.m_Constraint = i1907[6]
  i1906.m_ConstraintCount = i1907[7]
  i1906.m_Padding = UnityEngine.RectOffset.FromPaddings(i1907[8], i1907[9], i1907[10], i1907[11])
  i1906.m_ChildAlignment = i1907[12]
  return i1906
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.UI.Button' )
  var i1909 = data
  i1908.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1909[0], i1908.m_OnClick)
  i1908.m_Navigation = request.d('UnityEngine.UI.Navigation', i1909[1], i1908.m_Navigation)
  i1908.m_Transition = i1909[2]
  i1908.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1909[3], i1908.m_Colors)
  i1908.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1909[4], i1908.m_SpriteState)
  i1908.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1909[5], i1908.m_AnimationTriggers)
  i1908.m_Interactable = !!i1909[6]
  request.r(i1909[7], i1909[8], 0, i1908, 'm_TargetGraphic')
  return i1908
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1911 = data
  i1910.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1911[0], i1910.m_PersistentCalls)
  return i1910
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1913 = data
  var i1915 = i1913[0]
  var i1914 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.add(request.d('UnityEngine.Events.PersistentCall', i1915[i + 0]));
  }
  i1912.m_Calls = i1914
  return i1912
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1919 = data
  request.r(i1919[0], i1919[1], 0, i1918, 'm_Target')
  i1918.m_TargetAssemblyTypeName = i1919[2]
  i1918.m_MethodName = i1919[3]
  i1918.m_Mode = i1919[4]
  i1918.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1919[5], i1918.m_Arguments)
  i1918.m_CallState = i1919[6]
  return i1918
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1921 = data
  request.r(i1921[0], i1921[1], 0, i1920, 'm_ObjectArgument')
  i1920.m_ObjectArgumentAssemblyTypeName = i1921[2]
  i1920.m_IntArgument = i1921[3]
  i1920.m_FloatArgument = i1921[4]
  i1920.m_StringArgument = i1921[5]
  i1920.m_BoolArgument = !!i1921[6]
  return i1920
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1923 = data
  i1922.m_Mode = i1923[0]
  i1922.m_WrapAround = !!i1923[1]
  request.r(i1923[2], i1923[3], 0, i1922, 'm_SelectOnUp')
  request.r(i1923[4], i1923[5], 0, i1922, 'm_SelectOnDown')
  request.r(i1923[6], i1923[7], 0, i1922, 'm_SelectOnLeft')
  request.r(i1923[8], i1923[9], 0, i1922, 'm_SelectOnRight')
  return i1922
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1925 = data
  i1924.m_NormalColor = new pc.Color(i1925[0], i1925[1], i1925[2], i1925[3])
  i1924.m_HighlightedColor = new pc.Color(i1925[4], i1925[5], i1925[6], i1925[7])
  i1924.m_PressedColor = new pc.Color(i1925[8], i1925[9], i1925[10], i1925[11])
  i1924.m_SelectedColor = new pc.Color(i1925[12], i1925[13], i1925[14], i1925[15])
  i1924.m_DisabledColor = new pc.Color(i1925[16], i1925[17], i1925[18], i1925[19])
  i1924.m_ColorMultiplier = i1925[20]
  i1924.m_FadeDuration = i1925[21]
  return i1924
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'm_HighlightedSprite')
  request.r(i1927[2], i1927[3], 0, i1926, 'm_PressedSprite')
  request.r(i1927[4], i1927[5], 0, i1926, 'm_SelectedSprite')
  request.r(i1927[6], i1927[7], 0, i1926, 'm_DisabledSprite')
  return i1926
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1929 = data
  i1928.m_NormalTrigger = i1929[0]
  i1928.m_HighlightedTrigger = i1929[1]
  i1928.m_PressedTrigger = i1929[2]
  i1928.m_SelectedTrigger = i1929[3]
  i1928.m_DisabledTrigger = i1929[4]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1931 = data
  i1930.ambientIntensity = i1931[0]
  i1930.reflectionIntensity = i1931[1]
  i1930.ambientMode = i1931[2]
  i1930.ambientLight = new pc.Color(i1931[3], i1931[4], i1931[5], i1931[6])
  i1930.ambientSkyColor = new pc.Color(i1931[7], i1931[8], i1931[9], i1931[10])
  i1930.ambientGroundColor = new pc.Color(i1931[11], i1931[12], i1931[13], i1931[14])
  i1930.ambientEquatorColor = new pc.Color(i1931[15], i1931[16], i1931[17], i1931[18])
  i1930.fogColor = new pc.Color(i1931[19], i1931[20], i1931[21], i1931[22])
  i1930.fogEndDistance = i1931[23]
  i1930.fogStartDistance = i1931[24]
  i1930.fogDensity = i1931[25]
  i1930.fog = !!i1931[26]
  request.r(i1931[27], i1931[28], 0, i1930, 'skybox')
  i1930.fogMode = i1931[29]
  var i1933 = i1931[30]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1933[i + 0]) );
  }
  i1930.lightmaps = i1932
  i1930.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1931[31], i1930.lightProbes)
  i1930.lightmapsMode = i1931[32]
  i1930.mixedBakeMode = i1931[33]
  i1930.environmentLightingMode = i1931[34]
  i1930.ambientProbe = new pc.SphericalHarmonicsL2(i1931[35])
  i1930.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1931[36])
  i1930.useReferenceAmbientProbe = !!i1931[37]
  request.r(i1931[38], i1931[39], 0, i1930, 'customReflection')
  request.r(i1931[40], i1931[41], 0, i1930, 'defaultReflection')
  i1930.defaultReflectionMode = i1931[42]
  i1930.defaultReflectionResolution = i1931[43]
  i1930.sunLightObjectId = i1931[44]
  i1930.pixelLightCount = i1931[45]
  i1930.defaultReflectionHDR = !!i1931[46]
  i1930.hasLightDataAsset = !!i1931[47]
  i1930.hasManualGenerate = !!i1931[48]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'lightmapColor')
  request.r(i1937[2], i1937[3], 0, i1936, 'lightmapDirection')
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1938 = root || new UnityEngine.LightProbes()
  var i1939 = data
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1945 = data
  var i1947 = i1945[0]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1947[i + 0]));
  }
  i1944.ShaderCompilationErrors = i1946
  i1944.name = i1945[1]
  i1944.guid = i1945[2]
  var i1949 = i1945[3]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( i1949[i + 0] );
  }
  i1944.shaderDefinedKeywords = i1948
  var i1951 = i1945[4]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1951[i + 0]) );
  }
  i1944.passes = i1950
  var i1953 = i1945[5]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1953[i + 0]) );
  }
  i1944.usePasses = i1952
  var i1955 = i1945[6]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1955[i + 0]) );
  }
  i1944.defaultParameterValues = i1954
  request.r(i1945[7], i1945[8], 0, i1944, 'unityFallbackShader')
  i1944.readDepth = !!i1945[9]
  i1944.isCreatedByShaderGraph = !!i1945[10]
  i1944.usedBatchUniforms = i1945[11]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1959 = data
  i1958.shaderName = i1959[0]
  i1958.errorMessage = i1959[1]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1964 = root || new pc.UnityShaderPass()
  var i1965 = data
  i1964.id = i1965[0]
  i1964.subShaderIndex = i1965[1]
  i1964.name = i1965[2]
  i1964.passType = i1965[3]
  i1964.grabPassTextureName = i1965[4]
  i1964.usePass = !!i1965[5]
  i1964.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[6], i1964.zTest)
  i1964.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[7], i1964.zWrite)
  i1964.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[8], i1964.culling)
  i1964.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1965[9], i1964.blending)
  i1964.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1965[10], i1964.alphaBlending)
  i1964.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[11], i1964.colorWriteMask)
  i1964.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[12], i1964.offsetUnits)
  i1964.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[13], i1964.offsetFactor)
  i1964.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[14], i1964.stencilRef)
  i1964.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[15], i1964.stencilReadMask)
  i1964.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1965[16], i1964.stencilWriteMask)
  i1964.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1965[17], i1964.stencilOp)
  i1964.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1965[18], i1964.stencilOpFront)
  i1964.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1965[19], i1964.stencilOpBack)
  var i1967 = i1965[20]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1967[i + 0]) );
  }
  i1964.tags = i1966
  var i1969 = i1965[21]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( i1969[i + 0] );
  }
  i1964.passDefinedKeywords = i1968
  var i1971 = i1965[22]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1971[i + 0]) );
  }
  i1964.passDefinedKeywordGroups = i1970
  var i1973 = i1965[23]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1973[i + 0]) );
  }
  i1964.variants = i1972
  var i1975 = i1965[24]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1975[i + 0]) );
  }
  i1964.excludedVariants = i1974
  i1964.hasDepthReader = !!i1965[25]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1977 = data
  i1976.val = i1977[0]
  i1976.name = i1977[1]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1979 = data
  i1978.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1979[0], i1978.src)
  i1978.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1979[1], i1978.dst)
  i1978.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1979[2], i1978.op)
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1981 = data
  i1980.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[0], i1980.pass)
  i1980.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[1], i1980.fail)
  i1980.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[2], i1980.zFail)
  i1980.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[3], i1980.comp)
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1985 = data
  i1984.name = i1985[0]
  i1984.value = i1985[1]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1989 = data
  var i1991 = i1989[0]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( i1991[i + 0] );
  }
  i1988.keywords = i1990
  i1988.hasDiscard = !!i1989[1]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1995 = data
  i1994.passId = i1995[0]
  i1994.subShaderIndex = i1995[1]
  var i1997 = i1995[2]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( i1997[i + 0] );
  }
  i1994.keywords = i1996
  i1994.vertexProgram = i1995[3]
  i1994.fragmentProgram = i1995[4]
  i1994.compiledForWebGL2 = !!i1995[5]
  i1994.readDepth = !!i1995[6]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2001 = data
  request.r(i2001[0], i2001[1], 0, i2000, 'shader')
  i2000.pass = i2001[2]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2005 = data
  i2004.name = i2005[0]
  i2004.type = i2005[1]
  i2004.value = new pc.Vec4( i2005[2], i2005[3], i2005[4], i2005[5] )
  i2004.textureValue = i2005[6]
  i2004.shaderPropertyFlag = i2005[7]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2007 = data
  i2006.name = i2007[0]
  request.r(i2007[1], i2007[2], 0, i2006, 'texture')
  i2006.aabb = i2007[3]
  i2006.vertices = i2007[4]
  i2006.triangles = i2007[5]
  i2006.textureRect = UnityEngine.Rect.MinMaxRect(i2007[6], i2007[7], i2007[8], i2007[9])
  i2006.packedRect = UnityEngine.Rect.MinMaxRect(i2007[10], i2007[11], i2007[12], i2007[13])
  i2006.border = new pc.Vec4( i2007[14], i2007[15], i2007[16], i2007[17] )
  i2006.transparency = i2007[18]
  i2006.bounds = i2007[19]
  i2006.pixelsPerUnit = i2007[20]
  i2006.textureWidth = i2007[21]
  i2006.textureHeight = i2007[22]
  i2006.nativeSize = new pc.Vec2( i2007[23], i2007[24] )
  i2006.pivot = new pc.Vec2( i2007[25], i2007[26] )
  i2006.textureRectOffset = new pc.Vec2( i2007[27], i2007[28] )
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2009 = data
  i2008.name = i2009[0]
  i2008.ascent = i2009[1]
  i2008.originalLineHeight = i2009[2]
  i2008.fontSize = i2009[3]
  var i2011 = i2009[4]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2011[i + 0]) );
  }
  i2008.characterInfo = i2010
  request.r(i2009[5], i2009[6], 0, i2008, 'texture')
  i2008.originalFontSize = i2009[7]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2015 = data
  i2014.index = i2015[0]
  i2014.advance = i2015[1]
  i2014.bearing = i2015[2]
  i2014.glyphWidth = i2015[3]
  i2014.glyphHeight = i2015[4]
  i2014.minX = i2015[5]
  i2014.maxX = i2015[6]
  i2014.minY = i2015[7]
  i2014.maxY = i2015[8]
  i2014.uvBottomLeftX = i2015[9]
  i2014.uvBottomLeftY = i2015[10]
  i2014.uvBottomRightX = i2015[11]
  i2014.uvBottomRightY = i2015[12]
  i2014.uvTopLeftX = i2015[13]
  i2014.uvTopLeftY = i2015[14]
  i2014.uvTopRightX = i2015[15]
  i2014.uvTopRightY = i2015[16]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2017 = data
  i2016.name = i2017[0]
  i2016.bytes64 = i2017[1]
  i2016.data = i2017[2]
  return i2016
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2018 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2019 = data
  i2018.hashCode = i2019[0]
  request.r(i2019[1], i2019[2], 0, i2018, 'material')
  i2018.materialHashCode = i2019[3]
  request.r(i2019[4], i2019[5], 0, i2018, 'atlas')
  i2018.normalStyle = i2019[6]
  i2018.normalSpacingOffset = i2019[7]
  i2018.boldStyle = i2019[8]
  i2018.boldSpacing = i2019[9]
  i2018.italicStyle = i2019[10]
  i2018.tabSize = i2019[11]
  i2018.m_Version = i2019[12]
  i2018.m_SourceFontFileGUID = i2019[13]
  request.r(i2019[14], i2019[15], 0, i2018, 'm_SourceFontFile_EditorRef')
  request.r(i2019[16], i2019[17], 0, i2018, 'm_SourceFontFile')
  i2018.m_AtlasPopulationMode = i2019[18]
  i2018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2019[19], i2018.m_FaceInfo)
  var i2021 = i2019[20]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.add(request.d('UnityEngine.TextCore.Glyph', i2021[i + 0]));
  }
  i2018.m_GlyphTable = i2020
  var i2023 = i2019[21]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.add(request.d('TMPro.TMP_Character', i2023[i + 0]));
  }
  i2018.m_CharacterTable = i2022
  var i2025 = i2019[22]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 2) {
  request.r(i2025[i + 0], i2025[i + 1], 2, i2024, '')
  }
  i2018.m_AtlasTextures = i2024
  i2018.m_AtlasTextureIndex = i2019[23]
  i2018.m_IsMultiAtlasTexturesEnabled = !!i2019[24]
  i2018.m_ClearDynamicDataOnBuild = !!i2019[25]
  var i2027 = i2019[26]
  var i2026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.add(request.d('UnityEngine.TextCore.GlyphRect', i2027[i + 0]));
  }
  i2018.m_UsedGlyphRects = i2026
  var i2029 = i2019[27]
  var i2028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.add(request.d('UnityEngine.TextCore.GlyphRect', i2029[i + 0]));
  }
  i2018.m_FreeGlyphRects = i2028
  i2018.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2019[28], i2018.m_fontInfo)
  i2018.m_AtlasWidth = i2019[29]
  i2018.m_AtlasHeight = i2019[30]
  i2018.m_AtlasPadding = i2019[31]
  i2018.m_AtlasRenderMode = i2019[32]
  var i2031 = i2019[33]
  var i2030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.add(request.d('TMPro.TMP_Glyph', i2031[i + 0]));
  }
  i2018.m_glyphInfoList = i2030
  i2018.m_KerningTable = request.d('TMPro.KerningTable', i2019[34], i2018.m_KerningTable)
  i2018.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2019[35], i2018.m_FontFeatureTable)
  var i2033 = i2019[36]
  var i2032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 1, i2032, '')
  }
  i2018.fallbackFontAssets = i2032
  var i2035 = i2019[37]
  var i2034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 1, i2034, '')
  }
  i2018.m_FallbackFontAssetTable = i2034
  i2018.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2019[38], i2018.m_CreationSettings)
  var i2037 = i2019[39]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('TMPro.TMP_FontWeightPair', i2037[i + 0]) );
  }
  i2018.m_FontWeightTable = i2036
  var i2039 = i2019[40]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('TMPro.TMP_FontWeightPair', i2039[i + 0]) );
  }
  i2018.fontWeights = i2038
  return i2018
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2041 = data
  i2040.m_FaceIndex = i2041[0]
  i2040.m_FamilyName = i2041[1]
  i2040.m_StyleName = i2041[2]
  i2040.m_PointSize = i2041[3]
  i2040.m_Scale = i2041[4]
  i2040.m_UnitsPerEM = i2041[5]
  i2040.m_LineHeight = i2041[6]
  i2040.m_AscentLine = i2041[7]
  i2040.m_CapLine = i2041[8]
  i2040.m_MeanLine = i2041[9]
  i2040.m_Baseline = i2041[10]
  i2040.m_DescentLine = i2041[11]
  i2040.m_SuperscriptOffset = i2041[12]
  i2040.m_SuperscriptSize = i2041[13]
  i2040.m_SubscriptOffset = i2041[14]
  i2040.m_SubscriptSize = i2041[15]
  i2040.m_UnderlineOffset = i2041[16]
  i2040.m_UnderlineThickness = i2041[17]
  i2040.m_StrikethroughOffset = i2041[18]
  i2040.m_StrikethroughThickness = i2041[19]
  i2040.m_TabWidth = i2041[20]
  return i2040
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2045 = data
  i2044.m_Index = i2045[0]
  i2044.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2045[1], i2044.m_Metrics)
  i2044.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2045[2], i2044.m_GlyphRect)
  i2044.m_Scale = i2045[3]
  i2044.m_AtlasIndex = i2045[4]
  i2044.m_ClassDefinitionType = i2045[5]
  return i2044
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2047 = data
  i2046.m_Width = i2047[0]
  i2046.m_Height = i2047[1]
  i2046.m_HorizontalBearingX = i2047[2]
  i2046.m_HorizontalBearingY = i2047[3]
  i2046.m_HorizontalAdvance = i2047[4]
  return i2046
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2049 = data
  i2048.m_X = i2049[0]
  i2048.m_Y = i2049[1]
  i2048.m_Width = i2049[2]
  i2048.m_Height = i2049[3]
  return i2048
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2052 = root || request.c( 'TMPro.TMP_Character' )
  var i2053 = data
  i2052.m_ElementType = i2053[0]
  i2052.m_Unicode = i2053[1]
  i2052.m_GlyphIndex = i2053[2]
  i2052.m_Scale = i2053[3]
  return i2052
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2058 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2059 = data
  i2058.Name = i2059[0]
  i2058.PointSize = i2059[1]
  i2058.Scale = i2059[2]
  i2058.CharacterCount = i2059[3]
  i2058.LineHeight = i2059[4]
  i2058.Baseline = i2059[5]
  i2058.Ascender = i2059[6]
  i2058.CapHeight = i2059[7]
  i2058.Descender = i2059[8]
  i2058.CenterLine = i2059[9]
  i2058.SuperscriptOffset = i2059[10]
  i2058.SubscriptOffset = i2059[11]
  i2058.SubSize = i2059[12]
  i2058.Underline = i2059[13]
  i2058.UnderlineThickness = i2059[14]
  i2058.strikethrough = i2059[15]
  i2058.strikethroughThickness = i2059[16]
  i2058.TabWidth = i2059[17]
  i2058.Padding = i2059[18]
  i2058.AtlasWidth = i2059[19]
  i2058.AtlasHeight = i2059[20]
  return i2058
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2062 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2063 = data
  i2062.id = i2063[0]
  i2062.x = i2063[1]
  i2062.y = i2063[2]
  i2062.width = i2063[3]
  i2062.height = i2063[4]
  i2062.xOffset = i2063[5]
  i2062.yOffset = i2063[6]
  i2062.xAdvance = i2063[7]
  i2062.scale = i2063[8]
  return i2062
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2064 = root || request.c( 'TMPro.KerningTable' )
  var i2065 = data
  var i2067 = i2065[0]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(request.d('TMPro.KerningPair', i2067[i + 0]));
  }
  i2064.kerningPairs = i2066
  return i2064
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2070 = root || request.c( 'TMPro.KerningPair' )
  var i2071 = data
  i2070.xOffset = i2071[0]
  i2070.m_FirstGlyph = i2071[1]
  i2070.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2071[2], i2070.m_FirstGlyphAdjustments)
  i2070.m_SecondGlyph = i2071[3]
  i2070.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2071[4], i2070.m_SecondGlyphAdjustments)
  i2070.m_IgnoreSpacingAdjustments = !!i2071[5]
  return i2070
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2072 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2073 = data
  var i2075 = i2073[0]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2075[i + 0]));
  }
  i2072.m_GlyphPairAdjustmentRecords = i2074
  return i2072
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2078 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2079 = data
  i2078.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2079[0], i2078.m_FirstAdjustmentRecord)
  i2078.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2079[1], i2078.m_SecondAdjustmentRecord)
  i2078.m_FeatureLookupFlags = i2079[2]
  return i2078
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2080 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2081 = data
  i2080.m_GlyphIndex = i2081[0]
  i2080.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2081[1], i2080.m_GlyphValueRecord)
  return i2080
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2082 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2083 = data
  i2082.m_XPlacement = i2083[0]
  i2082.m_YPlacement = i2083[1]
  i2082.m_XAdvance = i2083[2]
  i2082.m_YAdvance = i2083[3]
  return i2082
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2086 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2087 = data
  i2086.sourceFontFileName = i2087[0]
  i2086.sourceFontFileGUID = i2087[1]
  i2086.pointSizeSamplingMode = i2087[2]
  i2086.pointSize = i2087[3]
  i2086.padding = i2087[4]
  i2086.packingMode = i2087[5]
  i2086.atlasWidth = i2087[6]
  i2086.atlasHeight = i2087[7]
  i2086.characterSetSelectionMode = i2087[8]
  i2086.characterSequence = i2087[9]
  i2086.referencedFontAssetGUID = i2087[10]
  i2086.referencedTextAssetGUID = i2087[11]
  i2086.fontStyle = i2087[12]
  i2086.fontStyleModifier = i2087[13]
  i2086.renderMode = i2087[14]
  i2086.includeFontFeatures = !!i2087[15]
  return i2086
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2090 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2091 = data
  request.r(i2091[0], i2091[1], 0, i2090, 'regularTypeface')
  request.r(i2091[2], i2091[3], 0, i2090, 'italicTypeface')
  return i2090
}

Deserializers["TileSO"] = function (request, data, root) {
  var i2092 = root || request.c( 'TileSO' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'icon')
  return i2092
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2094 = root || request.c( 'TMPro.TMP_Settings' )
  var i2095 = data
  i2094.m_enableWordWrapping = !!i2095[0]
  i2094.m_enableKerning = !!i2095[1]
  i2094.m_enableExtraPadding = !!i2095[2]
  i2094.m_enableTintAllSprites = !!i2095[3]
  i2094.m_enableParseEscapeCharacters = !!i2095[4]
  i2094.m_EnableRaycastTarget = !!i2095[5]
  i2094.m_GetFontFeaturesAtRuntime = !!i2095[6]
  i2094.m_missingGlyphCharacter = i2095[7]
  i2094.m_warningsDisabled = !!i2095[8]
  request.r(i2095[9], i2095[10], 0, i2094, 'm_defaultFontAsset')
  i2094.m_defaultFontAssetPath = i2095[11]
  i2094.m_defaultFontSize = i2095[12]
  i2094.m_defaultAutoSizeMinRatio = i2095[13]
  i2094.m_defaultAutoSizeMaxRatio = i2095[14]
  i2094.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2095[15], i2095[16] )
  i2094.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2095[17], i2095[18] )
  i2094.m_autoSizeTextContainer = !!i2095[19]
  i2094.m_IsTextObjectScaleStatic = !!i2095[20]
  var i2097 = i2095[21]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 1, i2096, '')
  }
  i2094.m_fallbackFontAssets = i2096
  i2094.m_matchMaterialPreset = !!i2095[22]
  request.r(i2095[23], i2095[24], 0, i2094, 'm_defaultSpriteAsset')
  i2094.m_defaultSpriteAssetPath = i2095[25]
  i2094.m_enableEmojiSupport = !!i2095[26]
  i2094.m_MissingCharacterSpriteUnicode = i2095[27]
  i2094.m_defaultColorGradientPresetsPath = i2095[28]
  request.r(i2095[29], i2095[30], 0, i2094, 'm_defaultStyleSheet')
  i2094.m_StyleSheetsResourcePath = i2095[31]
  request.r(i2095[32], i2095[33], 0, i2094, 'm_leadingCharacters')
  request.r(i2095[34], i2095[35], 0, i2094, 'm_followingCharacters')
  i2094.m_UseModernHangulLineBreakingRules = !!i2095[36]
  return i2094
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2098 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2099 = data
  i2098.hashCode = i2099[0]
  request.r(i2099[1], i2099[2], 0, i2098, 'material')
  i2098.materialHashCode = i2099[3]
  request.r(i2099[4], i2099[5], 0, i2098, 'spriteSheet')
  var i2101 = i2099[6]
  var i2100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.add(request.d('TMPro.TMP_Sprite', i2101[i + 0]));
  }
  i2098.spriteInfoList = i2100
  var i2103 = i2099[7]
  var i2102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 1, i2102, '')
  }
  i2098.fallbackSpriteAssets = i2102
  i2098.m_Version = i2099[8]
  i2098.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2099[9], i2098.m_FaceInfo)
  var i2105 = i2099[10]
  var i2104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.add(request.d('TMPro.TMP_SpriteCharacter', i2105[i + 0]));
  }
  i2098.m_SpriteCharacterTable = i2104
  var i2107 = i2099[11]
  var i2106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.add(request.d('TMPro.TMP_SpriteGlyph', i2107[i + 0]));
  }
  i2098.m_SpriteGlyphTable = i2106
  return i2098
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2110 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.hashCode = i2111[1]
  i2110.unicode = i2111[2]
  i2110.pivot = new pc.Vec2( i2111[3], i2111[4] )
  request.r(i2111[5], i2111[6], 0, i2110, 'sprite')
  i2110.id = i2111[7]
  i2110.x = i2111[8]
  i2110.y = i2111[9]
  i2110.width = i2111[10]
  i2110.height = i2111[11]
  i2110.xOffset = i2111[12]
  i2110.yOffset = i2111[13]
  i2110.xAdvance = i2111[14]
  i2110.scale = i2111[15]
  return i2110
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2116 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2117 = data
  i2116.m_Name = i2117[0]
  i2116.m_HashCode = i2117[1]
  i2116.m_ElementType = i2117[2]
  i2116.m_Unicode = i2117[3]
  i2116.m_GlyphIndex = i2117[4]
  i2116.m_Scale = i2117[5]
  return i2116
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2120 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'sprite')
  i2120.m_Index = i2121[2]
  i2120.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2121[3], i2120.m_Metrics)
  i2120.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2121[4], i2120.m_GlyphRect)
  i2120.m_Scale = i2121[5]
  i2120.m_AtlasIndex = i2121[6]
  i2120.m_ClassDefinitionType = i2121[7]
  return i2120
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2122 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2123 = data
  var i2125 = i2123[0]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(request.d('TMPro.TMP_Style', i2125[i + 0]));
  }
  i2122.m_StyleList = i2124
  return i2122
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2128 = root || request.c( 'TMPro.TMP_Style' )
  var i2129 = data
  i2128.m_Name = i2129[0]
  i2128.m_HashCode = i2129[1]
  i2128.m_OpeningDefinition = i2129[2]
  i2128.m_ClosingDefinition = i2129[3]
  i2128.m_OpeningTagArray = i2129[4]
  i2128.m_ClosingTagArray = i2129[5]
  i2128.m_OpeningTagUnicodeArray = i2129[6]
  i2128.m_ClosingTagUnicodeArray = i2129[7]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2131 = data
  var i2133 = i2131[0]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2133[i + 0]) );
  }
  i2130.files = i2132
  i2130.componentToPrefabIds = i2131[1]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2137 = data
  i2136.path = i2137[0]
  request.r(i2137[1], i2137[2], 0, i2136, 'unityObject')
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2139 = data
  var i2141 = i2139[0]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2141[i + 0]) );
  }
  i2138.scriptsExecutionOrder = i2140
  var i2143 = i2139[1]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2143[i + 0]) );
  }
  i2138.sortingLayers = i2142
  var i2145 = i2139[2]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2145[i + 0]) );
  }
  i2138.cullingLayers = i2144
  i2138.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2139[3], i2138.timeSettings)
  i2138.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2139[4], i2138.physicsSettings)
  i2138.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2139[5], i2138.physics2DSettings)
  i2138.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2139[6], i2138.qualitySettings)
  i2138.enableRealtimeShadows = !!i2139[7]
  i2138.enableAutoInstancing = !!i2139[8]
  i2138.enableDynamicBatching = !!i2139[9]
  i2138.lightmapEncodingQuality = i2139[10]
  i2138.desiredColorSpace = i2139[11]
  var i2147 = i2139[12]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( i2147[i + 0] );
  }
  i2138.allTags = i2146
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.value = i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2155 = data
  i2154.id = i2155[0]
  i2154.name = i2155[1]
  i2154.value = i2155[2]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2159 = data
  i2158.id = i2159[0]
  i2158.name = i2159[1]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2161 = data
  i2160.fixedDeltaTime = i2161[0]
  i2160.maximumDeltaTime = i2161[1]
  i2160.timeScale = i2161[2]
  i2160.maximumParticleTimestep = i2161[3]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2163 = data
  i2162.gravity = new pc.Vec3( i2163[0], i2163[1], i2163[2] )
  i2162.defaultSolverIterations = i2163[3]
  i2162.bounceThreshold = i2163[4]
  i2162.autoSyncTransforms = !!i2163[5]
  i2162.autoSimulation = !!i2163[6]
  var i2165 = i2163[7]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2165[i + 0]) );
  }
  i2162.collisionMatrix = i2164
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2169 = data
  i2168.enabled = !!i2169[0]
  i2168.layerId = i2169[1]
  i2168.otherLayerId = i2169[2]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'material')
  i2170.gravity = new pc.Vec2( i2171[2], i2171[3] )
  i2170.positionIterations = i2171[4]
  i2170.velocityIterations = i2171[5]
  i2170.velocityThreshold = i2171[6]
  i2170.maxLinearCorrection = i2171[7]
  i2170.maxAngularCorrection = i2171[8]
  i2170.maxTranslationSpeed = i2171[9]
  i2170.maxRotationSpeed = i2171[10]
  i2170.baumgarteScale = i2171[11]
  i2170.baumgarteTOIScale = i2171[12]
  i2170.timeToSleep = i2171[13]
  i2170.linearSleepTolerance = i2171[14]
  i2170.angularSleepTolerance = i2171[15]
  i2170.defaultContactOffset = i2171[16]
  i2170.autoSimulation = !!i2171[17]
  i2170.queriesHitTriggers = !!i2171[18]
  i2170.queriesStartInColliders = !!i2171[19]
  i2170.callbacksOnDisable = !!i2171[20]
  i2170.reuseCollisionCallbacks = !!i2171[21]
  i2170.autoSyncTransforms = !!i2171[22]
  var i2173 = i2171[23]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2173[i + 0]) );
  }
  i2170.collisionMatrix = i2172
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2177 = data
  i2176.enabled = !!i2177[0]
  i2176.layerId = i2177[1]
  i2176.otherLayerId = i2177[2]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2179 = data
  var i2181 = i2179[0]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2181[i + 0]) );
  }
  i2178.qualityLevels = i2180
  var i2183 = i2179[1]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( i2183[i + 0] );
  }
  i2178.names = i2182
  i2178.shadows = i2179[2]
  i2178.anisotropicFiltering = i2179[3]
  i2178.antiAliasing = i2179[4]
  i2178.lodBias = i2179[5]
  i2178.shadowCascades = i2179[6]
  i2178.shadowDistance = i2179[7]
  i2178.shadowmaskMode = i2179[8]
  i2178.shadowProjection = i2179[9]
  i2178.shadowResolution = i2179[10]
  i2178.softParticles = !!i2179[11]
  i2178.softVegetation = !!i2179[12]
  i2178.activeColorSpace = i2179[13]
  i2178.desiredColorSpace = i2179[14]
  i2178.masterTextureLimit = i2179[15]
  i2178.maxQueuedFrames = i2179[16]
  i2178.particleRaycastBudget = i2179[17]
  i2178.pixelLightCount = i2179[18]
  i2178.realtimeReflectionProbes = !!i2179[19]
  i2178.shadowCascade2Split = i2179[20]
  i2178.shadowCascade4Split = new pc.Vec3( i2179[21], i2179[22], i2179[23] )
  i2178.streamingMipmapsActive = !!i2179[24]
  i2178.vSyncCount = i2179[25]
  i2178.asyncUploadBufferSize = i2179[26]
  i2178.asyncUploadTimeSlice = i2179[27]
  i2178.billboardsFaceCameraPosition = !!i2179[28]
  i2178.shadowNearPlaneOffset = i2179[29]
  i2178.streamingMipmapsMemoryBudget = i2179[30]
  i2178.maximumLODLevel = i2179[31]
  i2178.streamingMipmapsAddAllCameras = !!i2179[32]
  i2178.streamingMipmapsMaxLevelReduction = i2179[33]
  i2178.streamingMipmapsRenderersPerFrame = i2179[34]
  i2178.resolutionScalingFixedDPIFactor = i2179[35]
  i2178.streamingMipmapsMaxFileIORequests = i2179[36]
  i2178.currentQualityLevel = i2179[37]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2189 = data
  i2188.weight = i2189[0]
  i2188.vertices = i2189[1]
  i2188.normals = i2189[2]
  i2188.tangents = i2189[3]
  return i2188
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2190 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2191 = data
  i2190.xPlacement = i2191[0]
  i2190.yPlacement = i2191[1]
  i2190.xAdvance = i2191[2]
  i2190.yAdvance = i2191[3]
  return i2190
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[21],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[21],"87":[88],"89":[90],"91":[90],"41":[7],"92":[21],"93":[7],"94":[88,7],"12":[7,13],"95":[7],"96":[13,7],"97":[88],"98":[13,7],"99":[7],"100":[101],"102":[7],"103":[7],"44":[41],"11":[13,7],"104":[7],"43":[41],"105":[7],"47":[7],"46":[7],"106":[7],"107":[7],"108":[7],"109":[7],"110":[7],"111":[7],"112":[13,7],"113":[7],"114":[7],"115":[7],"116":[7],"117":[13,7],"118":[7],"119":[23],"120":[23],"24":[23],"121":[23],"122":[21],"123":[21],"124":[101],"125":[18],"126":[127],"128":[101]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","QuestSlot","TileSO","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","Tile","UnityEngine.SpriteRenderer","UnityEngine.TrailRenderer","TileSlot","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileActions","TileLocker","TilesBag","TileSpawnAnimation","TileMatcher","LoseCondition","WinCondition","InputTouch","EndCard","Quest","TileRandomSpawner","TileSpawner","UnityEngine.GameObject","TileBagSorter","UnityEngine.Canvas","DeckLayer","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResetLocalPosition","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Button","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "0.4";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

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

Deserializers.buildID = "51accb86-8927-4526-82c9-242cfd12dd9b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

