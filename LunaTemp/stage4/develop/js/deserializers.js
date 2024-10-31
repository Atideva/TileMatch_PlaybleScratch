var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.JointSpring' )
  var i1675 = data
  i1674.spring = i1675[0]
  i1674.damper = i1675[1]
  i1674.targetPosition = i1675[2]
  return i1674
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.JointMotor' )
  var i1677 = data
  i1676.m_TargetVelocity = i1677[0]
  i1676.m_Force = i1677[1]
  i1676.m_FreeSpin = i1677[2]
  return i1676
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.JointLimits' )
  var i1679 = data
  i1678.m_Min = i1679[0]
  i1678.m_Max = i1679[1]
  i1678.m_Bounciness = i1679[2]
  i1678.m_BounceMinVelocity = i1679[3]
  i1678.m_ContactDistance = i1679[4]
  i1678.minBounce = i1679[5]
  i1678.maxBounce = i1679[6]
  return i1678
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.JointDrive' )
  var i1681 = data
  i1680.m_PositionSpring = i1681[0]
  i1680.m_PositionDamper = i1681[1]
  i1680.m_MaximumForce = i1681[2]
  return i1680
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1683 = data
  i1682.m_Spring = i1683[0]
  i1682.m_Damper = i1683[1]
  return i1682
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1685 = data
  i1684.m_Limit = i1685[0]
  i1684.m_Bounciness = i1685[1]
  i1684.m_ContactDistance = i1685[2]
  return i1684
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1687 = data
  i1686.m_ExtremumSlip = i1687[0]
  i1686.m_ExtremumValue = i1687[1]
  i1686.m_AsymptoteSlip = i1687[2]
  i1686.m_AsymptoteValue = i1687[3]
  i1686.m_Stiffness = i1687[4]
  return i1686
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1689 = data
  i1688.m_LowerAngle = i1689[0]
  i1688.m_UpperAngle = i1689[1]
  return i1688
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1691 = data
  i1690.m_MotorSpeed = i1691[0]
  i1690.m_MaximumMotorTorque = i1691[1]
  return i1690
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1693 = data
  i1692.m_DampingRatio = i1693[0]
  i1692.m_Frequency = i1693[1]
  i1692.m_Angle = i1693[2]
  return i1692
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1695 = data
  i1694.m_LowerTranslation = i1695[0]
  i1694.m_UpperTranslation = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1697 = data
  i1696.position = new pc.Vec3( i1697[0], i1697[1], i1697[2] )
  i1696.scale = new pc.Vec3( i1697[3], i1697[4], i1697[5] )
  i1696.rotation = new pc.Quat(i1697[6], i1697[7], i1697[8], i1697[9])
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1699 = data
  i1698.enabled = !!i1699[0]
  i1698.aspect = i1699[1]
  i1698.orthographic = !!i1699[2]
  i1698.orthographicSize = i1699[3]
  i1698.backgroundColor = new pc.Color(i1699[4], i1699[5], i1699[6], i1699[7])
  i1698.nearClipPlane = i1699[8]
  i1698.farClipPlane = i1699[9]
  i1698.fieldOfView = i1699[10]
  i1698.depth = i1699[11]
  i1698.clearFlags = i1699[12]
  i1698.cullingMask = i1699[13]
  i1698.rect = i1699[14]
  request.r(i1699[15], i1699[16], 0, i1698, 'targetTexture')
  i1698.usePhysicalProperties = !!i1699[17]
  i1698.focalLength = i1699[18]
  i1698.sensorSize = new pc.Vec2( i1699[19], i1699[20] )
  i1698.lensShift = new pc.Vec2( i1699[21], i1699[22] )
  i1698.gateFit = i1699[23]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1701 = data
  i1700.name = i1701[0]
  i1700.tagId = i1701[1]
  i1700.enabled = !!i1701[2]
  i1700.isStatic = !!i1701[3]
  i1700.layer = i1701[4]
  return i1700
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1703 = data
  request.r(i1703[0], i1703[1], 0, i1702, 'm_FirstSelected')
  i1702.m_sendNavigationEvents = !!i1703[2]
  i1702.m_DragThreshold = i1703[3]
  return i1702
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1705 = data
  i1704.m_HorizontalAxis = i1705[0]
  i1704.m_VerticalAxis = i1705[1]
  i1704.m_SubmitButton = i1705[2]
  i1704.m_CancelButton = i1705[3]
  i1704.m_InputActionsPerSecond = i1705[4]
  i1704.m_RepeatDelay = i1705[5]
  i1704.m_ForceModuleActive = !!i1705[6]
  i1704.m_SendPointerHoverToParent = !!i1705[7]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1707 = data
  i1706.enabled = !!i1707[0]
  request.r(i1707[1], i1707[2], 0, i1706, 'sharedMaterial')
  var i1709 = i1707[3]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 2) {
  request.r(i1709[i + 0], i1709[i + 1], 2, i1708, '')
  }
  i1706.sharedMaterials = i1708
  i1706.receiveShadows = !!i1707[4]
  i1706.shadowCastingMode = i1707[5]
  i1706.sortingLayerID = i1707[6]
  i1706.sortingOrder = i1707[7]
  i1706.lightmapIndex = i1707[8]
  i1706.lightmapSceneIndex = i1707[9]
  i1706.lightmapScaleOffset = new pc.Vec4( i1707[10], i1707[11], i1707[12], i1707[13] )
  i1706.lightProbeUsage = i1707[14]
  i1706.reflectionProbeUsage = i1707[15]
  i1706.color = new pc.Color(i1707[16], i1707[17], i1707[18], i1707[19])
  request.r(i1707[20], i1707[21], 0, i1706, 'sprite')
  i1706.flipX = !!i1707[22]
  i1706.flipY = !!i1707[23]
  i1706.drawMode = i1707[24]
  i1706.size = new pc.Vec2( i1707[25], i1707[26] )
  i1706.tileMode = i1707[27]
  i1706.adaptiveModeThreshold = i1707[28]
  i1706.maskInteraction = i1707[29]
  i1706.spriteSortPoint = i1707[30]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1712 = root || new pc.UnityMaterial()
  var i1713 = data
  i1712.name = i1713[0]
  request.r(i1713[1], i1713[2], 0, i1712, 'shader')
  i1712.renderQueue = i1713[3]
  i1712.enableInstancing = !!i1713[4]
  var i1715 = i1713[5]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1715[i + 0]) );
  }
  i1712.floatParameters = i1714
  var i1717 = i1713[6]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1717[i + 0]) );
  }
  i1712.colorParameters = i1716
  var i1719 = i1713[7]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1719[i + 0]) );
  }
  i1712.vectorParameters = i1718
  var i1721 = i1713[8]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1721[i + 0]) );
  }
  i1712.textureParameters = i1720
  var i1723 = i1713[9]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1723[i + 0]) );
  }
  i1712.materialFlags = i1722
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1727 = data
  i1726.name = i1727[0]
  i1726.value = i1727[1]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1731 = data
  i1730.name = i1731[0]
  i1730.value = new pc.Color(i1731[1], i1731[2], i1731[3], i1731[4])
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1735 = data
  i1734.name = i1735[0]
  i1734.value = new pc.Vec4( i1735[1], i1735[2], i1735[3], i1735[4] )
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1739 = data
  i1738.name = i1739[0]
  request.r(i1739[1], i1739[2], 0, i1738, 'value')
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1743 = data
  i1742.name = i1743[0]
  i1742.enabled = !!i1743[1]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1745 = data
  i1744.name = i1745[0]
  i1744.width = i1745[1]
  i1744.height = i1745[2]
  i1744.mipmapCount = i1745[3]
  i1744.anisoLevel = i1745[4]
  i1744.filterMode = i1745[5]
  i1744.hdr = !!i1745[6]
  i1744.format = i1745[7]
  i1744.wrapMode = i1745[8]
  i1744.alphaIsTransparency = !!i1745[9]
  i1744.alphaSource = i1745[10]
  i1744.graphicsFormat = i1745[11]
  i1744.sRGBTexture = !!i1745[12]
  i1744.desiredColorSpace = i1745[13]
  i1744.wrapU = i1745[14]
  i1744.wrapV = i1745[15]
  return i1744
}

Deserializers["Game"] = function (request, data, root) {
  var i1746 = root || request.c( 'Game' )
  var i1747 = data
  i1746.autoGameOverInSeconds = i1747[0]
  request.r(i1747[1], i1747[2], 0, i1746, 'deck')
  request.r(i1747[3], i1747[4], 0, i1746, 'actions')
  request.r(i1747[5], i1747[6], 0, i1746, 'locker')
  request.r(i1747[7], i1747[8], 0, i1746, 'bag')
  request.r(i1747[9], i1747[10], 0, i1746, 'spawnAnimation')
  request.r(i1747[11], i1747[12], 0, i1746, 'tileMatcher')
  request.r(i1747[13], i1747[14], 0, i1746, 'loseCondition')
  request.r(i1747[15], i1747[16], 0, i1746, 'winCondition')
  request.r(i1747[17], i1747[18], 0, i1746, 'input')
  request.r(i1747[19], i1747[20], 0, i1746, 'endCard')
  request.r(i1747[21], i1747[22], 0, i1746, 'quest')
  i1746.useRandom = !!i1747[23]
  request.r(i1747[24], i1747[25], 0, i1746, 'spawnRandom')
  i1746.tileToSpawn = i1747[26]
  i1746.tilesInScene = i1747[27]
  var i1749 = i1747[28]
  var i1748 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1749.length; i += 2) {
  request.r(i1749[i + 0], i1749[i + 1], 1, i1748, '')
  }
  i1746.tilesInGame = i1748
  return i1746
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i1752 = root || request.c( 'TileSpawner' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'Game')
  request.r(i1753[2], i1753[3], 0, i1752, 'prefab')
  var i1755 = i1753[4]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1755.length; i += 2) {
  request.r(i1755[i + 0], i1755[i + 1], 1, i1754, '')
  }
  i1752.spawned = i1754
  i1752.hideAtSpawn = !!i1753[5]
  i1752.spawnRate = i1753[6]
  return i1752
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i1756 = root || request.c( 'TileRandomSpawner' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, 'Game')
  i1756.spawnRate = i1757[2]
  var i1759 = i1757[3]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 1, i1758, '')
  }
  i1756.spawned = i1758
  return i1756
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i1760 = root || request.c( 'TileSpawnAnimation' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'Game')
  i1760.delayBetweenLines = i1761[2]
  i1760.delayBetweenTiles = i1761[3]
  i1760.delayBetweenLayers = i1761[4]
  return i1760
}

Deserializers["TileActions"] = function (request, data, root) {
  var i1762 = root || request.c( 'TileActions' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'Game')
  return i1762
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i1764 = root || request.c( 'TileLocker' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'Game')
  i1764.enabled = !!i1765[2]
  i1764.lockDistance = i1765[3]
  return i1764
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i1766 = root || request.c( 'TileMatcher' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, 'Game')
  request.r(i1767[2], i1767[3], 0, i1766, 'vfx')
  var i1769 = i1767[4]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1769.length; i += 2) {
  request.r(i1769[i + 0], i1769[i + 1], 1, i1768, '')
  }
  i1766.completed = i1768
  var i1771 = i1767[5]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i1771.length; i += 2) {
  request.r(i1771[i + 0], i1771[i + 1], 1, i1770, '')
  }
  i1766.lastMatch = i1770
  return i1766
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i1774 = root || request.c( 'LoseCondition' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'Game')
  return i1774
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i1776 = root || request.c( 'WinCondition' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'Game')
  return i1776
}

Deserializers["Quest"] = function (request, data, root) {
  var i1778 = root || request.c( 'Quest' )
  var i1779 = data
  request.r(i1779[0], i1779[1], 0, i1778, 'Game')
  var i1781 = i1779[2]
  var i1780 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i1781.length; i += 2) {
  request.r(i1781[i + 0], i1781[i + 1], 1, i1780, '')
  }
  i1778.slots = i1780
  return i1778
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i1784 = root || request.c( 'InputTouch' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'Game')
  i1784.inputCooldown = i1785[2]
  var i1787 = i1785[3]
  var i1786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1787.length; i += 2) {
    i1786.add(new pc.Vec2( i1787[i + 0], i1787[i + 1] ));
  }
  i1784.touches = i1786
  i1784.touchSize = i1785[4]
  return i1784
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i1790 = root || request.c( 'TileBagSorter' )
  var i1791 = data
  request.r(i1791[0], i1791[1], 0, i1790, 'Game')
  i1790.enable = !!i1791[2]
  i1790.intervalSec = i1791[3]
  return i1790
}

Deserializers["EndCard"] = function (request, data, root) {
  var i1792 = root || request.c( 'EndCard' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'canvas')
  request.r(i1793[2], i1793[3], 0, i1792, 'Game')
  return i1792
}

Deserializers["Sounds"] = function (request, data, root) {
  var i1794 = root || request.c( 'Sounds' )
  var i1795 = data
  request.r(i1795[0], i1795[1], 0, i1794, 'Game')
  request.r(i1795[2], i1795[3], 0, i1794, 'tileClick')
  request.r(i1795[4], i1795[5], 0, i1794, 'tileMerge')
  request.r(i1795[6], i1795[7], 0, i1794, 'levelWin')
  request.r(i1795[8], i1795[9], 0, i1794, 'leveLose')
  request.r(i1795[10], i1795[11], 0, i1794, 'source')
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'clip')
  request.r(i1797[2], i1797[3], 0, i1796, 'outputAudioMixerGroup')
  i1796.playOnAwake = !!i1797[4]
  i1796.loop = !!i1797[5]
  i1796.time = i1797[6]
  i1796.volume = i1797[7]
  i1796.pitch = i1797[8]
  i1796.enabled = !!i1797[9]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1799 = data
  i1798.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1799[0], i1798.main)
  i1798.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1799[1], i1798.colorBySpeed)
  i1798.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1799[2], i1798.colorOverLifetime)
  i1798.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1799[3], i1798.emission)
  i1798.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1799[4], i1798.rotationBySpeed)
  i1798.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1799[5], i1798.rotationOverLifetime)
  i1798.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1799[6], i1798.shape)
  i1798.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1799[7], i1798.sizeBySpeed)
  i1798.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1799[8], i1798.sizeOverLifetime)
  i1798.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1799[9], i1798.textureSheetAnimation)
  i1798.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1799[10], i1798.velocityOverLifetime)
  i1798.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1799[11], i1798.noise)
  i1798.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1799[12], i1798.inheritVelocity)
  i1798.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1799[13], i1798.forceOverLifetime)
  i1798.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1799[14], i1798.limitVelocityOverLifetime)
  i1798.useAutoRandomSeed = !!i1799[15]
  i1798.randomSeed = i1799[16]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemMain()
  var i1801 = data
  i1800.duration = i1801[0]
  i1800.loop = !!i1801[1]
  i1800.prewarm = !!i1801[2]
  i1800.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[3], i1800.startDelay)
  i1800.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[4], i1800.startLifetime)
  i1800.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[5], i1800.startSpeed)
  i1800.startSize3D = !!i1801[6]
  i1800.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[7], i1800.startSizeX)
  i1800.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[8], i1800.startSizeY)
  i1800.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[9], i1800.startSizeZ)
  i1800.startRotation3D = !!i1801[10]
  i1800.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[11], i1800.startRotationX)
  i1800.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[12], i1800.startRotationY)
  i1800.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[13], i1800.startRotationZ)
  i1800.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1801[14], i1800.startColor)
  i1800.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[15], i1800.gravityModifier)
  i1800.simulationSpace = i1801[16]
  request.r(i1801[17], i1801[18], 0, i1800, 'customSimulationSpace')
  i1800.simulationSpeed = i1801[19]
  i1800.useUnscaledTime = !!i1801[20]
  i1800.scalingMode = i1801[21]
  i1800.playOnAwake = !!i1801[22]
  i1800.maxParticles = i1801[23]
  i1800.emitterVelocityMode = i1801[24]
  i1800.stopAction = i1801[25]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1802 = root || new pc.MinMaxCurve()
  var i1803 = data
  i1802.mode = i1803[0]
  i1802.curveMin = new pc.AnimationCurve( { keys_flow: i1803[1] } )
  i1802.curveMax = new pc.AnimationCurve( { keys_flow: i1803[2] } )
  i1802.curveMultiplier = i1803[3]
  i1802.constantMin = i1803[4]
  i1802.constantMax = i1803[5]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1804 = root || new pc.MinMaxGradient()
  var i1805 = data
  i1804.mode = i1805[0]
  i1804.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1805[1], i1804.gradientMin)
  i1804.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1805[2], i1804.gradientMax)
  i1804.colorMin = new pc.Color(i1805[3], i1805[4], i1805[5], i1805[6])
  i1804.colorMax = new pc.Color(i1805[7], i1805[8], i1805[9], i1805[10])
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1807 = data
  i1806.mode = i1807[0]
  var i1809 = i1807[1]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1809[i + 0]) );
  }
  i1806.colorKeys = i1808
  var i1811 = i1807[2]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1811[i + 0]) );
  }
  i1806.alphaKeys = i1810
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1812 = root || new pc.ParticleSystemColorBySpeed()
  var i1813 = data
  i1812.enabled = !!i1813[0]
  i1812.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1813[1], i1812.color)
  i1812.range = new pc.Vec2( i1813[2], i1813[3] )
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1817 = data
  i1816.color = new pc.Color(i1817[0], i1817[1], i1817[2], i1817[3])
  i1816.time = i1817[4]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1821 = data
  i1820.alpha = i1821[0]
  i1820.time = i1821[1]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1822 = root || new pc.ParticleSystemColorOverLifetime()
  var i1823 = data
  i1822.enabled = !!i1823[0]
  i1822.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1823[1], i1822.color)
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1824 = root || new pc.ParticleSystemEmitter()
  var i1825 = data
  i1824.enabled = !!i1825[0]
  i1824.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[1], i1824.rateOverTime)
  i1824.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[2], i1824.rateOverDistance)
  var i1827 = i1825[3]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1827[i + 0]) );
  }
  i1824.bursts = i1826
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1830 = root || new pc.ParticleSystemBurst()
  var i1831 = data
  i1830.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1831[0], i1830.count)
  i1830.cycleCount = i1831[1]
  i1830.minCount = i1831[2]
  i1830.maxCount = i1831[3]
  i1830.repeatInterval = i1831[4]
  i1830.time = i1831[5]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1832 = root || new pc.ParticleSystemRotationBySpeed()
  var i1833 = data
  i1832.enabled = !!i1833[0]
  i1832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[1], i1832.x)
  i1832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[2], i1832.y)
  i1832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[3], i1832.z)
  i1832.separateAxes = !!i1833[4]
  i1832.range = new pc.Vec2( i1833[5], i1833[6] )
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1834 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1835 = data
  i1834.enabled = !!i1835[0]
  i1834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[1], i1834.x)
  i1834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[2], i1834.y)
  i1834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[3], i1834.z)
  i1834.separateAxes = !!i1835[4]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1836 = root || new pc.ParticleSystemShape()
  var i1837 = data
  i1836.enabled = !!i1837[0]
  i1836.shapeType = i1837[1]
  i1836.randomDirectionAmount = i1837[2]
  i1836.sphericalDirectionAmount = i1837[3]
  i1836.randomPositionAmount = i1837[4]
  i1836.alignToDirection = !!i1837[5]
  i1836.radius = i1837[6]
  i1836.radiusMode = i1837[7]
  i1836.radiusSpread = i1837[8]
  i1836.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[9], i1836.radiusSpeed)
  i1836.radiusThickness = i1837[10]
  i1836.angle = i1837[11]
  i1836.length = i1837[12]
  i1836.boxThickness = new pc.Vec3( i1837[13], i1837[14], i1837[15] )
  i1836.meshShapeType = i1837[16]
  request.r(i1837[17], i1837[18], 0, i1836, 'mesh')
  request.r(i1837[19], i1837[20], 0, i1836, 'meshRenderer')
  request.r(i1837[21], i1837[22], 0, i1836, 'skinnedMeshRenderer')
  i1836.useMeshMaterialIndex = !!i1837[23]
  i1836.meshMaterialIndex = i1837[24]
  i1836.useMeshColors = !!i1837[25]
  i1836.normalOffset = i1837[26]
  i1836.arc = i1837[27]
  i1836.arcMode = i1837[28]
  i1836.arcSpread = i1837[29]
  i1836.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[30], i1836.arcSpeed)
  i1836.donutRadius = i1837[31]
  i1836.position = new pc.Vec3( i1837[32], i1837[33], i1837[34] )
  i1836.rotation = new pc.Vec3( i1837[35], i1837[36], i1837[37] )
  i1836.scale = new pc.Vec3( i1837[38], i1837[39], i1837[40] )
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1838 = root || new pc.ParticleSystemSizeBySpeed()
  var i1839 = data
  i1838.enabled = !!i1839[0]
  i1838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[1], i1838.x)
  i1838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[2], i1838.y)
  i1838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[3], i1838.z)
  i1838.separateAxes = !!i1839[4]
  i1838.range = new pc.Vec2( i1839[5], i1839[6] )
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1840 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1841 = data
  i1840.enabled = !!i1841[0]
  i1840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1841[1], i1840.x)
  i1840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1841[2], i1840.y)
  i1840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1841[3], i1840.z)
  i1840.separateAxes = !!i1841[4]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1842 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1843 = data
  i1842.enabled = !!i1843[0]
  i1842.mode = i1843[1]
  i1842.animation = i1843[2]
  i1842.numTilesX = i1843[3]
  i1842.numTilesY = i1843[4]
  i1842.useRandomRow = !!i1843[5]
  i1842.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[6], i1842.frameOverTime)
  i1842.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[7], i1842.startFrame)
  i1842.cycleCount = i1843[8]
  i1842.rowIndex = i1843[9]
  i1842.flipU = i1843[10]
  i1842.flipV = i1843[11]
  i1842.spriteCount = i1843[12]
  var i1845 = i1843[13]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 2) {
  request.r(i1845[i + 0], i1845[i + 1], 2, i1844, '')
  }
  i1842.sprites = i1844
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1848 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1849 = data
  i1848.enabled = !!i1849[0]
  i1848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[1], i1848.x)
  i1848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[2], i1848.y)
  i1848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[3], i1848.z)
  i1848.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[4], i1848.radial)
  i1848.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[5], i1848.speedModifier)
  i1848.space = i1849[6]
  i1848.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[7], i1848.orbitalX)
  i1848.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[8], i1848.orbitalY)
  i1848.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[9], i1848.orbitalZ)
  i1848.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[10], i1848.orbitalOffsetX)
  i1848.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[11], i1848.orbitalOffsetY)
  i1848.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[12], i1848.orbitalOffsetZ)
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1850 = root || new pc.ParticleSystemNoise()
  var i1851 = data
  i1850.enabled = !!i1851[0]
  i1850.separateAxes = !!i1851[1]
  i1850.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[2], i1850.strengthX)
  i1850.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[3], i1850.strengthY)
  i1850.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[4], i1850.strengthZ)
  i1850.frequency = i1851[5]
  i1850.damping = !!i1851[6]
  i1850.octaveCount = i1851[7]
  i1850.octaveMultiplier = i1851[8]
  i1850.octaveScale = i1851[9]
  i1850.quality = i1851[10]
  i1850.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[11], i1850.scrollSpeed)
  i1850.scrollSpeedMultiplier = i1851[12]
  i1850.remapEnabled = !!i1851[13]
  i1850.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[14], i1850.remapX)
  i1850.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[15], i1850.remapY)
  i1850.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[16], i1850.remapZ)
  i1850.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[17], i1850.positionAmount)
  i1850.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[18], i1850.rotationAmount)
  i1850.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[19], i1850.sizeAmount)
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1852 = root || new pc.ParticleSystemInheritVelocity()
  var i1853 = data
  i1852.enabled = !!i1853[0]
  i1852.mode = i1853[1]
  i1852.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[2], i1852.curve)
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1854 = root || new pc.ParticleSystemForceOverLifetime()
  var i1855 = data
  i1854.enabled = !!i1855[0]
  i1854.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1855[1], i1854.x)
  i1854.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1855[2], i1854.y)
  i1854.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1855[3], i1854.z)
  i1854.space = i1855[4]
  i1854.randomized = !!i1855[5]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1856 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1857 = data
  i1856.enabled = !!i1857[0]
  i1856.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[1], i1856.limit)
  i1856.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[2], i1856.limitX)
  i1856.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[3], i1856.limitY)
  i1856.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[4], i1856.limitZ)
  i1856.dampen = i1857[5]
  i1856.separateAxes = !!i1857[6]
  i1856.space = i1857[7]
  i1856.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[8], i1856.drag)
  i1856.multiplyDragByParticleSize = !!i1857[9]
  i1856.multiplyDragByParticleVelocity = !!i1857[10]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1859 = data
  i1858.enabled = !!i1859[0]
  request.r(i1859[1], i1859[2], 0, i1858, 'sharedMaterial')
  var i1861 = i1859[3]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 2, i1860, '')
  }
  i1858.sharedMaterials = i1860
  i1858.receiveShadows = !!i1859[4]
  i1858.shadowCastingMode = i1859[5]
  i1858.sortingLayerID = i1859[6]
  i1858.sortingOrder = i1859[7]
  i1858.lightmapIndex = i1859[8]
  i1858.lightmapSceneIndex = i1859[9]
  i1858.lightmapScaleOffset = new pc.Vec4( i1859[10], i1859[11], i1859[12], i1859[13] )
  i1858.lightProbeUsage = i1859[14]
  i1858.reflectionProbeUsage = i1859[15]
  request.r(i1859[16], i1859[17], 0, i1858, 'mesh')
  i1858.meshCount = i1859[18]
  i1858.activeVertexStreamsCount = i1859[19]
  i1858.alignment = i1859[20]
  i1858.renderMode = i1859[21]
  i1858.sortMode = i1859[22]
  i1858.lengthScale = i1859[23]
  i1858.velocityScale = i1859[24]
  i1858.cameraVelocityScale = i1859[25]
  i1858.normalDirection = i1859[26]
  i1858.sortingFudge = i1859[27]
  i1858.minParticleSize = i1859[28]
  i1858.maxParticleSize = i1859[29]
  i1858.pivot = new pc.Vec3( i1859[30], i1859[31], i1859[32] )
  request.r(i1859[33], i1859[34], 0, i1858, 'trailMaterial')
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.halfPrecision = !!i1863[1]
  i1862.useUInt32IndexFormat = !!i1863[2]
  i1862.vertexCount = i1863[3]
  i1862.aabb = i1863[4]
  var i1865 = i1863[5]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( !!i1865[i + 0] );
  }
  i1862.streams = i1864
  i1862.vertices = i1863[6]
  var i1867 = i1863[7]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1867[i + 0]) );
  }
  i1862.subMeshes = i1866
  var i1869 = i1863[8]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 16) {
    i1868.push( new pc.Mat4().setData(i1869[i + 0], i1869[i + 1], i1869[i + 2], i1869[i + 3],  i1869[i + 4], i1869[i + 5], i1869[i + 6], i1869[i + 7],  i1869[i + 8], i1869[i + 9], i1869[i + 10], i1869[i + 11],  i1869[i + 12], i1869[i + 13], i1869[i + 14], i1869[i + 15]) );
  }
  i1862.bindposes = i1868
  var i1871 = i1863[9]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1871[i + 0]) );
  }
  i1862.blendShapes = i1870
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1877 = data
  i1876.triangles = i1877[0]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1883 = data
  i1882.name = i1883[0]
  var i1885 = i1883[1]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1885[i + 0]) );
  }
  i1882.frames = i1884
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1887 = data
  i1886.pivot = new pc.Vec2( i1887[0], i1887[1] )
  i1886.anchorMin = new pc.Vec2( i1887[2], i1887[3] )
  i1886.anchorMax = new pc.Vec2( i1887[4], i1887[5] )
  i1886.sizeDelta = new pc.Vec2( i1887[6], i1887[7] )
  i1886.anchoredPosition3D = new pc.Vec3( i1887[8], i1887[9], i1887[10] )
  i1886.rotation = new pc.Quat(i1887[11], i1887[12], i1887[13], i1887[14])
  i1886.scale = new pc.Vec3( i1887[15], i1887[16], i1887[17] )
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1889 = data
  i1888.enabled = !!i1889[0]
  i1888.planeDistance = i1889[1]
  i1888.referencePixelsPerUnit = i1889[2]
  i1888.isFallbackOverlay = !!i1889[3]
  i1888.renderMode = i1889[4]
  i1888.renderOrder = i1889[5]
  i1888.sortingLayerName = i1889[6]
  i1888.sortingOrder = i1889[7]
  i1888.scaleFactor = i1889[8]
  request.r(i1889[9], i1889[10], 0, i1888, 'worldCamera')
  i1888.overrideSorting = !!i1889[11]
  i1888.pixelPerfect = !!i1889[12]
  i1888.targetDisplay = i1889[13]
  i1888.overridePixelPerfect = !!i1889[14]
  return i1888
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1891 = data
  i1890.m_UiScaleMode = i1891[0]
  i1890.m_ReferencePixelsPerUnit = i1891[1]
  i1890.m_ScaleFactor = i1891[2]
  i1890.m_ReferenceResolution = new pc.Vec2( i1891[3], i1891[4] )
  i1890.m_ScreenMatchMode = i1891[5]
  i1890.m_MatchWidthOrHeight = i1891[6]
  i1890.m_PhysicalUnit = i1891[7]
  i1890.m_FallbackScreenDPI = i1891[8]
  i1890.m_DefaultSpriteDPI = i1891[9]
  i1890.m_DynamicPixelsPerUnit = i1891[10]
  i1890.m_PresetInfoIsWorld = !!i1891[11]
  return i1890
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1893 = data
  i1892.m_IgnoreReversedGraphics = !!i1893[0]
  i1892.m_BlockingObjects = i1893[1]
  i1892.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1893[2] )
  return i1892
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i1894 = root || request.c( 'ResetLocalPosition' )
  var i1895 = data
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1897 = data
  i1896.cullTransparentMesh = !!i1897[0]
  return i1896
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.UI.Image' )
  var i1899 = data
  request.r(i1899[0], i1899[1], 0, i1898, 'm_Sprite')
  i1898.m_Type = i1899[2]
  i1898.m_PreserveAspect = !!i1899[3]
  i1898.m_FillCenter = !!i1899[4]
  i1898.m_FillMethod = i1899[5]
  i1898.m_FillAmount = i1899[6]
  i1898.m_FillClockwise = !!i1899[7]
  i1898.m_FillOrigin = i1899[8]
  i1898.m_UseSpriteMesh = !!i1899[9]
  i1898.m_PixelsPerUnitMultiplier = i1899[10]
  request.r(i1899[11], i1899[12], 0, i1898, 'm_Material')
  i1898.m_Maskable = !!i1899[13]
  i1898.m_Color = new pc.Color(i1899[14], i1899[15], i1899[16], i1899[17])
  i1898.m_RaycastTarget = !!i1899[18]
  i1898.m_RaycastPadding = new pc.Vec4( i1899[19], i1899[20], i1899[21], i1899[22] )
  return i1898
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1901 = data
  i1900.m_Spacing = i1901[0]
  i1900.m_ChildForceExpandWidth = !!i1901[1]
  i1900.m_ChildForceExpandHeight = !!i1901[2]
  i1900.m_ChildControlWidth = !!i1901[3]
  i1900.m_ChildControlHeight = !!i1901[4]
  i1900.m_ChildScaleWidth = !!i1901[5]
  i1900.m_ChildScaleHeight = !!i1901[6]
  i1900.m_ReverseArrangement = !!i1901[7]
  i1900.m_Padding = UnityEngine.RectOffset.FromPaddings(i1901[8], i1901[9], i1901[10], i1901[11])
  i1900.m_ChildAlignment = i1901[12]
  return i1900
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1902 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1903 = data
  i1902.m_hasFontAssetChanged = !!i1903[0]
  request.r(i1903[1], i1903[2], 0, i1902, 'm_baseMaterial')
  i1902.m_maskOffset = new pc.Vec4( i1903[3], i1903[4], i1903[5], i1903[6] )
  i1902.m_text = i1903[7]
  i1902.m_isRightToLeft = !!i1903[8]
  request.r(i1903[9], i1903[10], 0, i1902, 'm_fontAsset')
  request.r(i1903[11], i1903[12], 0, i1902, 'm_sharedMaterial')
  var i1905 = i1903[13]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 2) {
  request.r(i1905[i + 0], i1905[i + 1], 2, i1904, '')
  }
  i1902.m_fontSharedMaterials = i1904
  request.r(i1903[14], i1903[15], 0, i1902, 'm_fontMaterial')
  var i1907 = i1903[16]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 2) {
  request.r(i1907[i + 0], i1907[i + 1], 2, i1906, '')
  }
  i1902.m_fontMaterials = i1906
  i1902.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1903[17], i1903[18], i1903[19], i1903[20])
  i1902.m_fontColor = new pc.Color(i1903[21], i1903[22], i1903[23], i1903[24])
  i1902.m_enableVertexGradient = !!i1903[25]
  i1902.m_colorMode = i1903[26]
  i1902.m_fontColorGradient = request.d('TMPro.VertexGradient', i1903[27], i1902.m_fontColorGradient)
  request.r(i1903[28], i1903[29], 0, i1902, 'm_fontColorGradientPreset')
  request.r(i1903[30], i1903[31], 0, i1902, 'm_spriteAsset')
  i1902.m_tintAllSprites = !!i1903[32]
  request.r(i1903[33], i1903[34], 0, i1902, 'm_StyleSheet')
  i1902.m_TextStyleHashCode = i1903[35]
  i1902.m_overrideHtmlColors = !!i1903[36]
  i1902.m_faceColor = UnityEngine.Color32.ConstructColor(i1903[37], i1903[38], i1903[39], i1903[40])
  i1902.m_fontSize = i1903[41]
  i1902.m_fontSizeBase = i1903[42]
  i1902.m_fontWeight = i1903[43]
  i1902.m_enableAutoSizing = !!i1903[44]
  i1902.m_fontSizeMin = i1903[45]
  i1902.m_fontSizeMax = i1903[46]
  i1902.m_fontStyle = i1903[47]
  i1902.m_HorizontalAlignment = i1903[48]
  i1902.m_VerticalAlignment = i1903[49]
  i1902.m_textAlignment = i1903[50]
  i1902.m_characterSpacing = i1903[51]
  i1902.m_wordSpacing = i1903[52]
  i1902.m_lineSpacing = i1903[53]
  i1902.m_lineSpacingMax = i1903[54]
  i1902.m_paragraphSpacing = i1903[55]
  i1902.m_charWidthMaxAdj = i1903[56]
  i1902.m_enableWordWrapping = !!i1903[57]
  i1902.m_wordWrappingRatios = i1903[58]
  i1902.m_overflowMode = i1903[59]
  request.r(i1903[60], i1903[61], 0, i1902, 'm_linkedTextComponent')
  request.r(i1903[62], i1903[63], 0, i1902, 'parentLinkedComponent')
  i1902.m_enableKerning = !!i1903[64]
  i1902.m_enableExtraPadding = !!i1903[65]
  i1902.checkPaddingRequired = !!i1903[66]
  i1902.m_isRichText = !!i1903[67]
  i1902.m_parseCtrlCharacters = !!i1903[68]
  i1902.m_isOrthographic = !!i1903[69]
  i1902.m_isCullingEnabled = !!i1903[70]
  i1902.m_horizontalMapping = i1903[71]
  i1902.m_verticalMapping = i1903[72]
  i1902.m_uvLineOffset = i1903[73]
  i1902.m_geometrySortingOrder = i1903[74]
  i1902.m_IsTextObjectScaleStatic = !!i1903[75]
  i1902.m_VertexBufferAutoSizeReduction = !!i1903[76]
  i1902.m_useMaxVisibleDescender = !!i1903[77]
  i1902.m_pageToDisplay = i1903[78]
  i1902.m_margin = new pc.Vec4( i1903[79], i1903[80], i1903[81], i1903[82] )
  i1902.m_isUsingLegacyAnimationComponent = !!i1903[83]
  i1902.m_isVolumetricText = !!i1903[84]
  request.r(i1903[85], i1903[86], 0, i1902, 'm_Material')
  i1902.m_Maskable = !!i1903[87]
  i1902.m_Color = new pc.Color(i1903[88], i1903[89], i1903[90], i1903[91])
  i1902.m_RaycastTarget = !!i1903[92]
  i1902.m_RaycastPadding = new pc.Vec4( i1903[93], i1903[94], i1903[95], i1903[96] )
  return i1902
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1908 = root || request.c( 'TMPro.VertexGradient' )
  var i1909 = data
  i1908.topLeft = new pc.Color(i1909[0], i1909[1], i1909[2], i1909[3])
  i1908.topRight = new pc.Color(i1909[4], i1909[5], i1909[6], i1909[7])
  i1908.bottomLeft = new pc.Color(i1909[8], i1909[9], i1909[10], i1909[11])
  i1908.bottomRight = new pc.Color(i1909[12], i1909[13], i1909[14], i1909[15])
  return i1908
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1911 = data
  i1910.m_StartCorner = i1911[0]
  i1910.m_StartAxis = i1911[1]
  i1910.m_CellSize = new pc.Vec2( i1911[2], i1911[3] )
  i1910.m_Spacing = new pc.Vec2( i1911[4], i1911[5] )
  i1910.m_Constraint = i1911[6]
  i1910.m_ConstraintCount = i1911[7]
  i1910.m_Padding = UnityEngine.RectOffset.FromPaddings(i1911[8], i1911[9], i1911[10], i1911[11])
  i1910.m_ChildAlignment = i1911[12]
  return i1910
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i1912 = root || request.c( 'QuestSlot' )
  var i1913 = data
  i1912.InitialScale = new pc.Vec3( i1913[0], i1913[1], i1913[2] )
  i1912.MaximumScale = new pc.Vec3( i1913[3], i1913[4], i1913[5] )
  i1912.EndScale = new pc.Vec3( i1913[6], i1913[7], i1913[8] )
  i1912.animationDuration = i1913[9]
  i1912.maxSizeTrigger = i1913[10]
  request.r(i1913[11], i1913[12], 0, i1912, 'type')
  i1912.amount = i1913[13]
  i1912.locked = !!i1913[14]
  request.r(i1913[15], i1913[16], 0, i1912, 'icon')
  request.r(i1913[17], i1913[18], 0, i1912, 'amountTxt')
  return i1912
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1914 = root || request.c( 'UnityEngine.UI.Button' )
  var i1915 = data
  i1914.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1915[0], i1914.m_OnClick)
  i1914.m_Navigation = request.d('UnityEngine.UI.Navigation', i1915[1], i1914.m_Navigation)
  i1914.m_Transition = i1915[2]
  i1914.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1915[3], i1914.m_Colors)
  i1914.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1915[4], i1914.m_SpriteState)
  i1914.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1915[5], i1914.m_AnimationTriggers)
  i1914.m_Interactable = !!i1915[6]
  request.r(i1915[7], i1915[8], 0, i1914, 'm_TargetGraphic')
  return i1914
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1917 = data
  i1916.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1917[0], i1916.m_PersistentCalls)
  return i1916
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1919 = data
  var i1921 = i1919[0]
  var i1920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.add(request.d('UnityEngine.Events.PersistentCall', i1921[i + 0]));
  }
  i1918.m_Calls = i1920
  return i1918
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1925 = data
  request.r(i1925[0], i1925[1], 0, i1924, 'm_Target')
  i1924.m_TargetAssemblyTypeName = i1925[2]
  i1924.m_MethodName = i1925[3]
  i1924.m_Mode = i1925[4]
  i1924.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1925[5], i1924.m_Arguments)
  i1924.m_CallState = i1925[6]
  return i1924
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'm_ObjectArgument')
  i1926.m_ObjectArgumentAssemblyTypeName = i1927[2]
  i1926.m_IntArgument = i1927[3]
  i1926.m_FloatArgument = i1927[4]
  i1926.m_StringArgument = i1927[5]
  i1926.m_BoolArgument = !!i1927[6]
  return i1926
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1929 = data
  i1928.m_Mode = i1929[0]
  i1928.m_WrapAround = !!i1929[1]
  request.r(i1929[2], i1929[3], 0, i1928, 'm_SelectOnUp')
  request.r(i1929[4], i1929[5], 0, i1928, 'm_SelectOnDown')
  request.r(i1929[6], i1929[7], 0, i1928, 'm_SelectOnLeft')
  request.r(i1929[8], i1929[9], 0, i1928, 'm_SelectOnRight')
  return i1928
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1930 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1931 = data
  i1930.m_NormalColor = new pc.Color(i1931[0], i1931[1], i1931[2], i1931[3])
  i1930.m_HighlightedColor = new pc.Color(i1931[4], i1931[5], i1931[6], i1931[7])
  i1930.m_PressedColor = new pc.Color(i1931[8], i1931[9], i1931[10], i1931[11])
  i1930.m_SelectedColor = new pc.Color(i1931[12], i1931[13], i1931[14], i1931[15])
  i1930.m_DisabledColor = new pc.Color(i1931[16], i1931[17], i1931[18], i1931[19])
  i1930.m_ColorMultiplier = i1931[20]
  i1930.m_FadeDuration = i1931[21]
  return i1930
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'm_HighlightedSprite')
  request.r(i1933[2], i1933[3], 0, i1932, 'm_PressedSprite')
  request.r(i1933[4], i1933[5], 0, i1932, 'm_SelectedSprite')
  request.r(i1933[6], i1933[7], 0, i1932, 'm_DisabledSprite')
  return i1932
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1934 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1935 = data
  i1934.m_NormalTrigger = i1935[0]
  i1934.m_HighlightedTrigger = i1935[1]
  i1934.m_PressedTrigger = i1935[2]
  i1934.m_SelectedTrigger = i1935[3]
  i1934.m_DisabledTrigger = i1935[4]
  return i1934
}

Deserializers["Tile"] = function (request, data, root) {
  var i1936 = root || request.c( 'Tile' )
  var i1937 = data
  i1936.layer = i1937[0]
  i1936.line = i1937[1]
  request.r(i1937[2], i1937[3], 0, i1936, 'icon')
  request.r(i1937[4], i1937[5], 0, i1936, 'lockTile')
  request.r(i1937[6], i1937[7], 0, i1936, 'background')
  request.r(i1937[8], i1937[9], 0, i1936, 'trail')
  i1936.defaultSize = new pc.Vec3( i1937[10], i1937[11], i1937[12] )
  i1936.speed = i1937[13]
  i1936.spawnAnimSize = i1937[14]
  i1936.spawnAnimDuration = i1937[15]
  i1936.locked = !!i1937[16]
  i1936.isHidden = !!i1937[17]
  i1936.lockAlpha = i1937[18]
  i1936.fadeDuration = i1937[19]
  i1936.debug = !!i1937[20]
  request.r(i1937[21], i1937[22], 0, i1936, 'type')
  i1936.iconSort = i1937[23]
  i1936.backGroundSort = i1937[24]
  i1936.disabledSort = i1937[25]
  i1936.trailSort = i1937[26]
  var i1939 = i1937[27]
  var i1938 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1939.length; i += 2) {
  request.r(i1939[i + 0], i1939[i + 1], 1, i1938, '')
  }
  i1936.coverTiles = i1938
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1941 = data
  i1940.usedByComposite = !!i1941[0]
  i1940.autoTiling = !!i1941[1]
  i1940.size = new pc.Vec2( i1941[2], i1941[3] )
  i1940.edgeRadius = i1941[4]
  i1940.enabled = !!i1941[5]
  i1940.isTrigger = !!i1941[6]
  i1940.usedByEffector = !!i1941[7]
  i1940.density = i1941[8]
  i1940.offset = new pc.Vec2( i1941[9], i1941[10] )
  request.r(i1941[11], i1941[12], 0, i1940, 'material')
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1943 = data
  i1942.bodyType = i1943[0]
  request.r(i1943[1], i1943[2], 0, i1942, 'material')
  i1942.simulated = !!i1943[3]
  i1942.useAutoMass = !!i1943[4]
  i1942.mass = i1943[5]
  i1942.drag = i1943[6]
  i1942.angularDrag = i1943[7]
  i1942.gravityScale = i1943[8]
  i1942.collisionDetectionMode = i1943[9]
  i1942.sleepMode = i1943[10]
  i1942.constraints = i1943[11]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1945 = data
  i1944.enabled = !!i1945[0]
  request.r(i1945[1], i1945[2], 0, i1944, 'sharedMaterial')
  var i1947 = i1945[3]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 2) {
  request.r(i1947[i + 0], i1947[i + 1], 2, i1946, '')
  }
  i1944.sharedMaterials = i1946
  i1944.receiveShadows = !!i1945[4]
  i1944.shadowCastingMode = i1945[5]
  i1944.sortingLayerID = i1945[6]
  i1944.sortingOrder = i1945[7]
  i1944.lightmapIndex = i1945[8]
  i1944.lightmapSceneIndex = i1945[9]
  i1944.lightmapScaleOffset = new pc.Vec4( i1945[10], i1945[11], i1945[12], i1945[13] )
  i1944.lightProbeUsage = i1945[14]
  i1944.reflectionProbeUsage = i1945[15]
  var i1949 = i1945[16]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 3) {
    i1948.push( new pc.Vec3( i1949[i + 0], i1949[i + 1], i1949[i + 2] ) );
  }
  i1944.positions = i1948
  i1944.positionCount = i1945[17]
  i1944.time = i1945[18]
  i1944.startWidth = i1945[19]
  i1944.endWidth = i1945[20]
  i1944.widthMultiplier = i1945[21]
  i1944.autodestruct = !!i1945[22]
  i1944.emitting = !!i1945[23]
  i1944.numCornerVertices = i1945[24]
  i1944.numCapVertices = i1945[25]
  i1944.minVertexDistance = i1945[26]
  i1944.colorGradient = i1945[27] ? new pc.ColorGradient(i1945[27][0], i1945[27][1], i1945[27][2]) : null
  i1944.startColor = new pc.Color(i1945[28], i1945[29], i1945[30], i1945[31])
  i1944.endColor = new pc.Color(i1945[32], i1945[33], i1945[34], i1945[35])
  i1944.generateLightingData = !!i1945[36]
  i1944.textureMode = i1945[37]
  i1944.alignment = i1945[38]
  i1944.widthCurve = new pc.AnimationCurve( { keys_flow: i1945[39] } )
  return i1944
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i1952 = root || request.c( 'TilesBag' )
  var i1953 = data
  var i1955 = i1953[0]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 1, i1954, '')
  }
  i1952.slots = i1954
  return i1952
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i1956 = root || request.c( 'TileSlot' )
  var i1957 = data
  i1956.ID = i1957[0]
  request.r(i1957[1], i1957[2], 0, i1956, 'Tile')
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1959 = data
  i1958.name = i1959[0]
  i1958.index = i1959[1]
  i1958.startup = !!i1959[2]
  return i1958
}

Deserializers["Deck"] = function (request, data, root) {
  var i1960 = root || request.c( 'Deck' )
  var i1961 = data
  request.r(i1961[0], i1961[1], 0, i1960, 'Game')
  return i1960
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i1962 = root || request.c( 'DeckLayer' )
  var i1963 = data
  i1962.layer = i1963[0]
  var i1965 = i1963[1]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 2) {
  request.r(i1965[i + 0], i1965[i + 1], 2, i1964, '')
  }
  i1962.Tiles = i1964
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1969 = data
  i1968.ambientIntensity = i1969[0]
  i1968.reflectionIntensity = i1969[1]
  i1968.ambientMode = i1969[2]
  i1968.ambientLight = new pc.Color(i1969[3], i1969[4], i1969[5], i1969[6])
  i1968.ambientSkyColor = new pc.Color(i1969[7], i1969[8], i1969[9], i1969[10])
  i1968.ambientGroundColor = new pc.Color(i1969[11], i1969[12], i1969[13], i1969[14])
  i1968.ambientEquatorColor = new pc.Color(i1969[15], i1969[16], i1969[17], i1969[18])
  i1968.fogColor = new pc.Color(i1969[19], i1969[20], i1969[21], i1969[22])
  i1968.fogEndDistance = i1969[23]
  i1968.fogStartDistance = i1969[24]
  i1968.fogDensity = i1969[25]
  i1968.fog = !!i1969[26]
  request.r(i1969[27], i1969[28], 0, i1968, 'skybox')
  i1968.fogMode = i1969[29]
  var i1971 = i1969[30]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1971[i + 0]) );
  }
  i1968.lightmaps = i1970
  i1968.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1969[31], i1968.lightProbes)
  i1968.lightmapsMode = i1969[32]
  i1968.mixedBakeMode = i1969[33]
  i1968.environmentLightingMode = i1969[34]
  i1968.ambientProbe = new pc.SphericalHarmonicsL2(i1969[35])
  i1968.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1969[36])
  i1968.useReferenceAmbientProbe = !!i1969[37]
  request.r(i1969[38], i1969[39], 0, i1968, 'customReflection')
  request.r(i1969[40], i1969[41], 0, i1968, 'defaultReflection')
  i1968.defaultReflectionMode = i1969[42]
  i1968.defaultReflectionResolution = i1969[43]
  i1968.sunLightObjectId = i1969[44]
  i1968.pixelLightCount = i1969[45]
  i1968.defaultReflectionHDR = !!i1969[46]
  i1968.hasLightDataAsset = !!i1969[47]
  i1968.hasManualGenerate = !!i1969[48]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, 'lightmapColor')
  request.r(i1975[2], i1975[3], 0, i1974, 'lightmapDirection')
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1976 = root || new UnityEngine.LightProbes()
  var i1977 = data
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1983 = data
  var i1985 = i1983[0]
  var i1984 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1985[i + 0]));
  }
  i1982.ShaderCompilationErrors = i1984
  i1982.name = i1983[1]
  i1982.guid = i1983[2]
  var i1987 = i1983[3]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( i1987[i + 0] );
  }
  i1982.shaderDefinedKeywords = i1986
  var i1989 = i1983[4]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1989[i + 0]) );
  }
  i1982.passes = i1988
  var i1991 = i1983[5]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1991[i + 0]) );
  }
  i1982.usePasses = i1990
  var i1993 = i1983[6]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1993[i + 0]) );
  }
  i1982.defaultParameterValues = i1992
  request.r(i1983[7], i1983[8], 0, i1982, 'unityFallbackShader')
  i1982.readDepth = !!i1983[9]
  i1982.isCreatedByShaderGraph = !!i1983[10]
  i1982.usedBatchUniforms = i1983[11]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1997 = data
  i1996.shaderName = i1997[0]
  i1996.errorMessage = i1997[1]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2002 = root || new pc.UnityShaderPass()
  var i2003 = data
  i2002.id = i2003[0]
  i2002.subShaderIndex = i2003[1]
  i2002.name = i2003[2]
  i2002.passType = i2003[3]
  i2002.grabPassTextureName = i2003[4]
  i2002.usePass = !!i2003[5]
  i2002.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[6], i2002.zTest)
  i2002.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[7], i2002.zWrite)
  i2002.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[8], i2002.culling)
  i2002.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2003[9], i2002.blending)
  i2002.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2003[10], i2002.alphaBlending)
  i2002.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[11], i2002.colorWriteMask)
  i2002.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[12], i2002.offsetUnits)
  i2002.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[13], i2002.offsetFactor)
  i2002.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[14], i2002.stencilRef)
  i2002.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[15], i2002.stencilReadMask)
  i2002.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[16], i2002.stencilWriteMask)
  i2002.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2003[17], i2002.stencilOp)
  i2002.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2003[18], i2002.stencilOpFront)
  i2002.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2003[19], i2002.stencilOpBack)
  var i2005 = i2003[20]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2005[i + 0]) );
  }
  i2002.tags = i2004
  var i2007 = i2003[21]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( i2007[i + 0] );
  }
  i2002.passDefinedKeywords = i2006
  var i2009 = i2003[22]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2009[i + 0]) );
  }
  i2002.passDefinedKeywordGroups = i2008
  var i2011 = i2003[23]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2011[i + 0]) );
  }
  i2002.variants = i2010
  var i2013 = i2003[24]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2013[i + 0]) );
  }
  i2002.excludedVariants = i2012
  i2002.hasDepthReader = !!i2003[25]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2015 = data
  i2014.val = i2015[0]
  i2014.name = i2015[1]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2017 = data
  i2016.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2017[0], i2016.src)
  i2016.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2017[1], i2016.dst)
  i2016.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2017[2], i2016.op)
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2019 = data
  i2018.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[0], i2018.pass)
  i2018.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[1], i2018.fail)
  i2018.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[2], i2018.zFail)
  i2018.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[3], i2018.comp)
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2023 = data
  i2022.name = i2023[0]
  i2022.value = i2023[1]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2027 = data
  var i2029 = i2027[0]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( i2029[i + 0] );
  }
  i2026.keywords = i2028
  i2026.hasDiscard = !!i2027[1]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2033 = data
  i2032.passId = i2033[0]
  i2032.subShaderIndex = i2033[1]
  var i2035 = i2033[2]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( i2035[i + 0] );
  }
  i2032.keywords = i2034
  i2032.vertexProgram = i2033[3]
  i2032.fragmentProgram = i2033[4]
  i2032.compiledForWebGL2 = !!i2033[5]
  i2032.readDepth = !!i2033[6]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'shader')
  i2038.pass = i2039[2]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2043 = data
  i2042.name = i2043[0]
  i2042.type = i2043[1]
  i2042.value = new pc.Vec4( i2043[2], i2043[3], i2043[4], i2043[5] )
  i2042.textureValue = i2043[6]
  i2042.shaderPropertyFlag = i2043[7]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2045 = data
  i2044.name = i2045[0]
  request.r(i2045[1], i2045[2], 0, i2044, 'texture')
  i2044.aabb = i2045[3]
  i2044.vertices = i2045[4]
  i2044.triangles = i2045[5]
  i2044.textureRect = UnityEngine.Rect.MinMaxRect(i2045[6], i2045[7], i2045[8], i2045[9])
  i2044.packedRect = UnityEngine.Rect.MinMaxRect(i2045[10], i2045[11], i2045[12], i2045[13])
  i2044.border = new pc.Vec4( i2045[14], i2045[15], i2045[16], i2045[17] )
  i2044.transparency = i2045[18]
  i2044.bounds = i2045[19]
  i2044.pixelsPerUnit = i2045[20]
  i2044.textureWidth = i2045[21]
  i2044.textureHeight = i2045[22]
  i2044.nativeSize = new pc.Vec2( i2045[23], i2045[24] )
  i2044.pivot = new pc.Vec2( i2045[25], i2045[26] )
  i2044.textureRectOffset = new pc.Vec2( i2045[27], i2045[28] )
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2047 = data
  i2046.name = i2047[0]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2049 = data
  i2048.name = i2049[0]
  i2048.ascent = i2049[1]
  i2048.originalLineHeight = i2049[2]
  i2048.fontSize = i2049[3]
  var i2051 = i2049[4]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2051[i + 0]) );
  }
  i2048.characterInfo = i2050
  request.r(i2049[5], i2049[6], 0, i2048, 'texture')
  i2048.originalFontSize = i2049[7]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2055 = data
  i2054.index = i2055[0]
  i2054.advance = i2055[1]
  i2054.bearing = i2055[2]
  i2054.glyphWidth = i2055[3]
  i2054.glyphHeight = i2055[4]
  i2054.minX = i2055[5]
  i2054.maxX = i2055[6]
  i2054.minY = i2055[7]
  i2054.maxY = i2055[8]
  i2054.uvBottomLeftX = i2055[9]
  i2054.uvBottomLeftY = i2055[10]
  i2054.uvBottomRightX = i2055[11]
  i2054.uvBottomRightY = i2055[12]
  i2054.uvTopLeftX = i2055[13]
  i2054.uvTopLeftY = i2055[14]
  i2054.uvTopRightX = i2055[15]
  i2054.uvTopRightY = i2055[16]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2057 = data
  i2056.name = i2057[0]
  i2056.bytes64 = i2057[1]
  i2056.data = i2057[2]
  return i2056
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2058 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2059 = data
  i2058.hashCode = i2059[0]
  request.r(i2059[1], i2059[2], 0, i2058, 'material')
  i2058.materialHashCode = i2059[3]
  request.r(i2059[4], i2059[5], 0, i2058, 'atlas')
  i2058.normalStyle = i2059[6]
  i2058.normalSpacingOffset = i2059[7]
  i2058.boldStyle = i2059[8]
  i2058.boldSpacing = i2059[9]
  i2058.italicStyle = i2059[10]
  i2058.tabSize = i2059[11]
  i2058.m_Version = i2059[12]
  i2058.m_SourceFontFileGUID = i2059[13]
  request.r(i2059[14], i2059[15], 0, i2058, 'm_SourceFontFile_EditorRef')
  request.r(i2059[16], i2059[17], 0, i2058, 'm_SourceFontFile')
  i2058.m_AtlasPopulationMode = i2059[18]
  i2058.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2059[19], i2058.m_FaceInfo)
  var i2061 = i2059[20]
  var i2060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.add(request.d('UnityEngine.TextCore.Glyph', i2061[i + 0]));
  }
  i2058.m_GlyphTable = i2060
  var i2063 = i2059[21]
  var i2062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.add(request.d('TMPro.TMP_Character', i2063[i + 0]));
  }
  i2058.m_CharacterTable = i2062
  var i2065 = i2059[22]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 2) {
  request.r(i2065[i + 0], i2065[i + 1], 2, i2064, '')
  }
  i2058.m_AtlasTextures = i2064
  i2058.m_AtlasTextureIndex = i2059[23]
  i2058.m_IsMultiAtlasTexturesEnabled = !!i2059[24]
  i2058.m_ClearDynamicDataOnBuild = !!i2059[25]
  var i2067 = i2059[26]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(request.d('UnityEngine.TextCore.GlyphRect', i2067[i + 0]));
  }
  i2058.m_UsedGlyphRects = i2066
  var i2069 = i2059[27]
  var i2068 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.add(request.d('UnityEngine.TextCore.GlyphRect', i2069[i + 0]));
  }
  i2058.m_FreeGlyphRects = i2068
  i2058.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2059[28], i2058.m_fontInfo)
  i2058.m_AtlasWidth = i2059[29]
  i2058.m_AtlasHeight = i2059[30]
  i2058.m_AtlasPadding = i2059[31]
  i2058.m_AtlasRenderMode = i2059[32]
  var i2071 = i2059[33]
  var i2070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.add(request.d('TMPro.TMP_Glyph', i2071[i + 0]));
  }
  i2058.m_glyphInfoList = i2070
  i2058.m_KerningTable = request.d('TMPro.KerningTable', i2059[34], i2058.m_KerningTable)
  i2058.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2059[35], i2058.m_FontFeatureTable)
  var i2073 = i2059[36]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 1, i2072, '')
  }
  i2058.fallbackFontAssets = i2072
  var i2075 = i2059[37]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 1, i2074, '')
  }
  i2058.m_FallbackFontAssetTable = i2074
  i2058.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2059[38], i2058.m_CreationSettings)
  var i2077 = i2059[39]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('TMPro.TMP_FontWeightPair', i2077[i + 0]) );
  }
  i2058.m_FontWeightTable = i2076
  var i2079 = i2059[40]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('TMPro.TMP_FontWeightPair', i2079[i + 0]) );
  }
  i2058.fontWeights = i2078
  return i2058
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2081 = data
  i2080.m_FaceIndex = i2081[0]
  i2080.m_FamilyName = i2081[1]
  i2080.m_StyleName = i2081[2]
  i2080.m_PointSize = i2081[3]
  i2080.m_Scale = i2081[4]
  i2080.m_UnitsPerEM = i2081[5]
  i2080.m_LineHeight = i2081[6]
  i2080.m_AscentLine = i2081[7]
  i2080.m_CapLine = i2081[8]
  i2080.m_MeanLine = i2081[9]
  i2080.m_Baseline = i2081[10]
  i2080.m_DescentLine = i2081[11]
  i2080.m_SuperscriptOffset = i2081[12]
  i2080.m_SuperscriptSize = i2081[13]
  i2080.m_SubscriptOffset = i2081[14]
  i2080.m_SubscriptSize = i2081[15]
  i2080.m_UnderlineOffset = i2081[16]
  i2080.m_UnderlineThickness = i2081[17]
  i2080.m_StrikethroughOffset = i2081[18]
  i2080.m_StrikethroughThickness = i2081[19]
  i2080.m_TabWidth = i2081[20]
  return i2080
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2085 = data
  i2084.m_Index = i2085[0]
  i2084.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2085[1], i2084.m_Metrics)
  i2084.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2085[2], i2084.m_GlyphRect)
  i2084.m_Scale = i2085[3]
  i2084.m_AtlasIndex = i2085[4]
  i2084.m_ClassDefinitionType = i2085[5]
  return i2084
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2087 = data
  i2086.m_Width = i2087[0]
  i2086.m_Height = i2087[1]
  i2086.m_HorizontalBearingX = i2087[2]
  i2086.m_HorizontalBearingY = i2087[3]
  i2086.m_HorizontalAdvance = i2087[4]
  return i2086
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2089 = data
  i2088.m_X = i2089[0]
  i2088.m_Y = i2089[1]
  i2088.m_Width = i2089[2]
  i2088.m_Height = i2089[3]
  return i2088
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2092 = root || request.c( 'TMPro.TMP_Character' )
  var i2093 = data
  i2092.m_ElementType = i2093[0]
  i2092.m_Unicode = i2093[1]
  i2092.m_GlyphIndex = i2093[2]
  i2092.m_Scale = i2093[3]
  return i2092
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2098 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2099 = data
  i2098.Name = i2099[0]
  i2098.PointSize = i2099[1]
  i2098.Scale = i2099[2]
  i2098.CharacterCount = i2099[3]
  i2098.LineHeight = i2099[4]
  i2098.Baseline = i2099[5]
  i2098.Ascender = i2099[6]
  i2098.CapHeight = i2099[7]
  i2098.Descender = i2099[8]
  i2098.CenterLine = i2099[9]
  i2098.SuperscriptOffset = i2099[10]
  i2098.SubscriptOffset = i2099[11]
  i2098.SubSize = i2099[12]
  i2098.Underline = i2099[13]
  i2098.UnderlineThickness = i2099[14]
  i2098.strikethrough = i2099[15]
  i2098.strikethroughThickness = i2099[16]
  i2098.TabWidth = i2099[17]
  i2098.Padding = i2099[18]
  i2098.AtlasWidth = i2099[19]
  i2098.AtlasHeight = i2099[20]
  return i2098
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2102 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2103 = data
  i2102.id = i2103[0]
  i2102.x = i2103[1]
  i2102.y = i2103[2]
  i2102.width = i2103[3]
  i2102.height = i2103[4]
  i2102.xOffset = i2103[5]
  i2102.yOffset = i2103[6]
  i2102.xAdvance = i2103[7]
  i2102.scale = i2103[8]
  return i2102
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2104 = root || request.c( 'TMPro.KerningTable' )
  var i2105 = data
  var i2107 = i2105[0]
  var i2106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.add(request.d('TMPro.KerningPair', i2107[i + 0]));
  }
  i2104.kerningPairs = i2106
  return i2104
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2110 = root || request.c( 'TMPro.KerningPair' )
  var i2111 = data
  i2110.xOffset = i2111[0]
  i2110.m_FirstGlyph = i2111[1]
  i2110.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2111[2], i2110.m_FirstGlyphAdjustments)
  i2110.m_SecondGlyph = i2111[3]
  i2110.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2111[4], i2110.m_SecondGlyphAdjustments)
  i2110.m_IgnoreSpacingAdjustments = !!i2111[5]
  return i2110
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2112 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2113 = data
  var i2115 = i2113[0]
  var i2114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2115[i + 0]));
  }
  i2112.m_GlyphPairAdjustmentRecords = i2114
  return i2112
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2118 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2119 = data
  i2118.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2119[0], i2118.m_FirstAdjustmentRecord)
  i2118.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2119[1], i2118.m_SecondAdjustmentRecord)
  i2118.m_FeatureLookupFlags = i2119[2]
  return i2118
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2120 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2121 = data
  i2120.m_GlyphIndex = i2121[0]
  i2120.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2121[1], i2120.m_GlyphValueRecord)
  return i2120
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2122 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2123 = data
  i2122.m_XPlacement = i2123[0]
  i2122.m_YPlacement = i2123[1]
  i2122.m_XAdvance = i2123[2]
  i2122.m_YAdvance = i2123[3]
  return i2122
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2126 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2127 = data
  i2126.sourceFontFileName = i2127[0]
  i2126.sourceFontFileGUID = i2127[1]
  i2126.pointSizeSamplingMode = i2127[2]
  i2126.pointSize = i2127[3]
  i2126.padding = i2127[4]
  i2126.packingMode = i2127[5]
  i2126.atlasWidth = i2127[6]
  i2126.atlasHeight = i2127[7]
  i2126.characterSetSelectionMode = i2127[8]
  i2126.characterSequence = i2127[9]
  i2126.referencedFontAssetGUID = i2127[10]
  i2126.referencedTextAssetGUID = i2127[11]
  i2126.fontStyle = i2127[12]
  i2126.fontStyleModifier = i2127[13]
  i2126.renderMode = i2127[14]
  i2126.includeFontFeatures = !!i2127[15]
  return i2126
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2130 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'regularTypeface')
  request.r(i2131[2], i2131[3], 0, i2130, 'italicTypeface')
  return i2130
}

Deserializers["TileSO"] = function (request, data, root) {
  var i2132 = root || request.c( 'TileSO' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'icon')
  return i2132
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2134 = root || request.c( 'TMPro.TMP_Settings' )
  var i2135 = data
  i2134.m_enableWordWrapping = !!i2135[0]
  i2134.m_enableKerning = !!i2135[1]
  i2134.m_enableExtraPadding = !!i2135[2]
  i2134.m_enableTintAllSprites = !!i2135[3]
  i2134.m_enableParseEscapeCharacters = !!i2135[4]
  i2134.m_EnableRaycastTarget = !!i2135[5]
  i2134.m_GetFontFeaturesAtRuntime = !!i2135[6]
  i2134.m_missingGlyphCharacter = i2135[7]
  i2134.m_warningsDisabled = !!i2135[8]
  request.r(i2135[9], i2135[10], 0, i2134, 'm_defaultFontAsset')
  i2134.m_defaultFontAssetPath = i2135[11]
  i2134.m_defaultFontSize = i2135[12]
  i2134.m_defaultAutoSizeMinRatio = i2135[13]
  i2134.m_defaultAutoSizeMaxRatio = i2135[14]
  i2134.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2135[15], i2135[16] )
  i2134.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2135[17], i2135[18] )
  i2134.m_autoSizeTextContainer = !!i2135[19]
  i2134.m_IsTextObjectScaleStatic = !!i2135[20]
  var i2137 = i2135[21]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 1, i2136, '')
  }
  i2134.m_fallbackFontAssets = i2136
  i2134.m_matchMaterialPreset = !!i2135[22]
  request.r(i2135[23], i2135[24], 0, i2134, 'm_defaultSpriteAsset')
  i2134.m_defaultSpriteAssetPath = i2135[25]
  i2134.m_enableEmojiSupport = !!i2135[26]
  i2134.m_MissingCharacterSpriteUnicode = i2135[27]
  i2134.m_defaultColorGradientPresetsPath = i2135[28]
  request.r(i2135[29], i2135[30], 0, i2134, 'm_defaultStyleSheet')
  i2134.m_StyleSheetsResourcePath = i2135[31]
  request.r(i2135[32], i2135[33], 0, i2134, 'm_leadingCharacters')
  request.r(i2135[34], i2135[35], 0, i2134, 'm_followingCharacters')
  i2134.m_UseModernHangulLineBreakingRules = !!i2135[36]
  return i2134
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2138 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2139 = data
  i2138.hashCode = i2139[0]
  request.r(i2139[1], i2139[2], 0, i2138, 'material')
  i2138.materialHashCode = i2139[3]
  request.r(i2139[4], i2139[5], 0, i2138, 'spriteSheet')
  var i2141 = i2139[6]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.add(request.d('TMPro.TMP_Sprite', i2141[i + 0]));
  }
  i2138.spriteInfoList = i2140
  var i2143 = i2139[7]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 1, i2142, '')
  }
  i2138.fallbackSpriteAssets = i2142
  i2138.m_Version = i2139[8]
  i2138.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2139[9], i2138.m_FaceInfo)
  var i2145 = i2139[10]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.add(request.d('TMPro.TMP_SpriteCharacter', i2145[i + 0]));
  }
  i2138.m_SpriteCharacterTable = i2144
  var i2147 = i2139[11]
  var i2146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.add(request.d('TMPro.TMP_SpriteGlyph', i2147[i + 0]));
  }
  i2138.m_SpriteGlyphTable = i2146
  return i2138
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2150 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.hashCode = i2151[1]
  i2150.unicode = i2151[2]
  i2150.pivot = new pc.Vec2( i2151[3], i2151[4] )
  request.r(i2151[5], i2151[6], 0, i2150, 'sprite')
  i2150.id = i2151[7]
  i2150.x = i2151[8]
  i2150.y = i2151[9]
  i2150.width = i2151[10]
  i2150.height = i2151[11]
  i2150.xOffset = i2151[12]
  i2150.yOffset = i2151[13]
  i2150.xAdvance = i2151[14]
  i2150.scale = i2151[15]
  return i2150
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2156 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2157 = data
  i2156.m_Name = i2157[0]
  i2156.m_HashCode = i2157[1]
  i2156.m_ElementType = i2157[2]
  i2156.m_Unicode = i2157[3]
  i2156.m_GlyphIndex = i2157[4]
  i2156.m_Scale = i2157[5]
  return i2156
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2160 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2161 = data
  request.r(i2161[0], i2161[1], 0, i2160, 'sprite')
  i2160.m_Index = i2161[2]
  i2160.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2161[3], i2160.m_Metrics)
  i2160.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2161[4], i2160.m_GlyphRect)
  i2160.m_Scale = i2161[5]
  i2160.m_AtlasIndex = i2161[6]
  i2160.m_ClassDefinitionType = i2161[7]
  return i2160
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2162 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2163 = data
  var i2165 = i2163[0]
  var i2164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.add(request.d('TMPro.TMP_Style', i2165[i + 0]));
  }
  i2162.m_StyleList = i2164
  return i2162
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2168 = root || request.c( 'TMPro.TMP_Style' )
  var i2169 = data
  i2168.m_Name = i2169[0]
  i2168.m_HashCode = i2169[1]
  i2168.m_OpeningDefinition = i2169[2]
  i2168.m_ClosingDefinition = i2169[3]
  i2168.m_OpeningTagArray = i2169[4]
  i2168.m_ClosingTagArray = i2169[5]
  i2168.m_OpeningTagUnicodeArray = i2169[6]
  i2168.m_ClosingTagUnicodeArray = i2169[7]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2171 = data
  var i2173 = i2171[0]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2173[i + 0]) );
  }
  i2170.files = i2172
  i2170.componentToPrefabIds = i2171[1]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2177 = data
  i2176.path = i2177[0]
  request.r(i2177[1], i2177[2], 0, i2176, 'unityObject')
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2179 = data
  var i2181 = i2179[0]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2181[i + 0]) );
  }
  i2178.scriptsExecutionOrder = i2180
  var i2183 = i2179[1]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2183[i + 0]) );
  }
  i2178.sortingLayers = i2182
  var i2185 = i2179[2]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2185[i + 0]) );
  }
  i2178.cullingLayers = i2184
  i2178.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2179[3], i2178.timeSettings)
  i2178.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2179[4], i2178.physicsSettings)
  i2178.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2179[5], i2178.physics2DSettings)
  i2178.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2179[6], i2178.qualitySettings)
  i2178.enableRealtimeShadows = !!i2179[7]
  i2178.enableAutoInstancing = !!i2179[8]
  i2178.enableDynamicBatching = !!i2179[9]
  i2178.lightmapEncodingQuality = i2179[10]
  i2178.desiredColorSpace = i2179[11]
  var i2187 = i2179[12]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( i2187[i + 0] );
  }
  i2178.allTags = i2186
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2191 = data
  i2190.name = i2191[0]
  i2190.value = i2191[1]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2195 = data
  i2194.id = i2195[0]
  i2194.name = i2195[1]
  i2194.value = i2195[2]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2199 = data
  i2198.id = i2199[0]
  i2198.name = i2199[1]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2201 = data
  i2200.fixedDeltaTime = i2201[0]
  i2200.maximumDeltaTime = i2201[1]
  i2200.timeScale = i2201[2]
  i2200.maximumParticleTimestep = i2201[3]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2203 = data
  i2202.gravity = new pc.Vec3( i2203[0], i2203[1], i2203[2] )
  i2202.defaultSolverIterations = i2203[3]
  i2202.bounceThreshold = i2203[4]
  i2202.autoSyncTransforms = !!i2203[5]
  i2202.autoSimulation = !!i2203[6]
  var i2205 = i2203[7]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2205[i + 0]) );
  }
  i2202.collisionMatrix = i2204
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.layerId = i2209[1]
  i2208.otherLayerId = i2209[2]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'material')
  i2210.gravity = new pc.Vec2( i2211[2], i2211[3] )
  i2210.positionIterations = i2211[4]
  i2210.velocityIterations = i2211[5]
  i2210.velocityThreshold = i2211[6]
  i2210.maxLinearCorrection = i2211[7]
  i2210.maxAngularCorrection = i2211[8]
  i2210.maxTranslationSpeed = i2211[9]
  i2210.maxRotationSpeed = i2211[10]
  i2210.baumgarteScale = i2211[11]
  i2210.baumgarteTOIScale = i2211[12]
  i2210.timeToSleep = i2211[13]
  i2210.linearSleepTolerance = i2211[14]
  i2210.angularSleepTolerance = i2211[15]
  i2210.defaultContactOffset = i2211[16]
  i2210.autoSimulation = !!i2211[17]
  i2210.queriesHitTriggers = !!i2211[18]
  i2210.queriesStartInColliders = !!i2211[19]
  i2210.callbacksOnDisable = !!i2211[20]
  i2210.reuseCollisionCallbacks = !!i2211[21]
  i2210.autoSyncTransforms = !!i2211[22]
  var i2213 = i2211[23]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2213[i + 0]) );
  }
  i2210.collisionMatrix = i2212
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2217 = data
  i2216.enabled = !!i2217[0]
  i2216.layerId = i2217[1]
  i2216.otherLayerId = i2217[2]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2219 = data
  var i2221 = i2219[0]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2221[i + 0]) );
  }
  i2218.qualityLevels = i2220
  var i2223 = i2219[1]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( i2223[i + 0] );
  }
  i2218.names = i2222
  i2218.shadows = i2219[2]
  i2218.anisotropicFiltering = i2219[3]
  i2218.antiAliasing = i2219[4]
  i2218.lodBias = i2219[5]
  i2218.shadowCascades = i2219[6]
  i2218.shadowDistance = i2219[7]
  i2218.shadowmaskMode = i2219[8]
  i2218.shadowProjection = i2219[9]
  i2218.shadowResolution = i2219[10]
  i2218.softParticles = !!i2219[11]
  i2218.softVegetation = !!i2219[12]
  i2218.activeColorSpace = i2219[13]
  i2218.desiredColorSpace = i2219[14]
  i2218.masterTextureLimit = i2219[15]
  i2218.maxQueuedFrames = i2219[16]
  i2218.particleRaycastBudget = i2219[17]
  i2218.pixelLightCount = i2219[18]
  i2218.realtimeReflectionProbes = !!i2219[19]
  i2218.shadowCascade2Split = i2219[20]
  i2218.shadowCascade4Split = new pc.Vec3( i2219[21], i2219[22], i2219[23] )
  i2218.streamingMipmapsActive = !!i2219[24]
  i2218.vSyncCount = i2219[25]
  i2218.asyncUploadBufferSize = i2219[26]
  i2218.asyncUploadTimeSlice = i2219[27]
  i2218.billboardsFaceCameraPosition = !!i2219[28]
  i2218.shadowNearPlaneOffset = i2219[29]
  i2218.streamingMipmapsMemoryBudget = i2219[30]
  i2218.maximumLODLevel = i2219[31]
  i2218.streamingMipmapsAddAllCameras = !!i2219[32]
  i2218.streamingMipmapsMaxLevelReduction = i2219[33]
  i2218.streamingMipmapsRenderersPerFrame = i2219[34]
  i2218.resolutionScalingFixedDPIFactor = i2219[35]
  i2218.streamingMipmapsMaxFileIORequests = i2219[36]
  i2218.currentQualityLevel = i2219[37]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2229 = data
  i2228.weight = i2229[0]
  i2228.vertices = i2229[1]
  i2228.normals = i2229[2]
  i2228.tangents = i2229[3]
  return i2228
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2230 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2231 = data
  i2230.xPlacement = i2231[0]
  i2230.yPlacement = i2231[1]
  i2230.xAdvance = i2231[2]
  i2230.yAdvance = i2231[3]
  return i2230
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[1],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[51],"78":[51],"79":[51],"80":[51],"81":[51],"82":[51],"83":[51],"84":[51],"85":[51],"86":[51],"87":[51],"88":[51],"89":[51],"90":[1],"91":[92],"93":[94],"95":[94],"35":[36],"96":[1],"97":[36],"98":[92,36],"43":[36,40],"99":[36],"100":[40,36],"101":[92],"102":[40,36],"103":[36],"104":[105],"106":[36],"107":[36],"38":[35],"41":[40,36],"108":[36],"37":[35],"109":[36],"45":[36],"42":[36],"110":[36],"111":[36],"112":[36],"113":[36],"114":[36],"115":[36],"116":[40,36],"117":[36],"118":[36],"119":[36],"120":[36],"121":[40,36],"122":[36],"123":[4],"124":[4],"5":[4],"125":[4],"126":[1],"127":[1],"128":[105],"129":[6],"130":[131],"132":[105]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.MonoBehaviour","Game","TileActions","TileLocker","TileSpawnAnimation","TileMatcher","LoseCondition","WinCondition","InputTouch","EndCard","Quest","TileRandomSpawner","TileSpawner","UnityEngine.GameObject","TileBagSorter","Sounds","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Texture2D","Deck","TilesBag","QuestSlot","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResetLocalPosition","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.HorizontalLayoutGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.GridLayoutGroup","TileSO","UnityEngine.UI.Button","Tile","UnityEngine.TrailRenderer","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","TileSlot","DeckLayer","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "2.2";

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

Deserializers.buildID = "4d58ed08-8c2f-4c22-b994-dcd5a300fbc7";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

