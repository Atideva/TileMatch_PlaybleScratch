var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2836 = root || request.c( 'UnityEngine.JointSpring' )
  var i2837 = data
  i2836.spring = i2837[0]
  i2836.damper = i2837[1]
  i2836.targetPosition = i2837[2]
  return i2836
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2838 = root || request.c( 'UnityEngine.JointMotor' )
  var i2839 = data
  i2838.m_TargetVelocity = i2839[0]
  i2838.m_Force = i2839[1]
  i2838.m_FreeSpin = i2839[2]
  return i2838
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2840 = root || request.c( 'UnityEngine.JointLimits' )
  var i2841 = data
  i2840.m_Min = i2841[0]
  i2840.m_Max = i2841[1]
  i2840.m_Bounciness = i2841[2]
  i2840.m_BounceMinVelocity = i2841[3]
  i2840.m_ContactDistance = i2841[4]
  i2840.minBounce = i2841[5]
  i2840.maxBounce = i2841[6]
  return i2840
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2842 = root || request.c( 'UnityEngine.JointDrive' )
  var i2843 = data
  i2842.m_PositionSpring = i2843[0]
  i2842.m_PositionDamper = i2843[1]
  i2842.m_MaximumForce = i2843[2]
  return i2842
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2844 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2845 = data
  i2844.m_Spring = i2845[0]
  i2844.m_Damper = i2845[1]
  return i2844
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2847 = data
  i2846.m_Limit = i2847[0]
  i2846.m_Bounciness = i2847[1]
  i2846.m_ContactDistance = i2847[2]
  return i2846
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2849 = data
  i2848.m_ExtremumSlip = i2849[0]
  i2848.m_ExtremumValue = i2849[1]
  i2848.m_AsymptoteSlip = i2849[2]
  i2848.m_AsymptoteValue = i2849[3]
  i2848.m_Stiffness = i2849[4]
  return i2848
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2850 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2851 = data
  i2850.m_LowerAngle = i2851[0]
  i2850.m_UpperAngle = i2851[1]
  return i2850
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2852 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2853 = data
  i2852.m_MotorSpeed = i2853[0]
  i2852.m_MaximumMotorTorque = i2853[1]
  return i2852
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2854 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2855 = data
  i2854.m_DampingRatio = i2855[0]
  i2854.m_Frequency = i2855[1]
  i2854.m_Angle = i2855[2]
  return i2854
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2856 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2857 = data
  i2856.m_LowerTranslation = i2857[0]
  i2856.m_UpperTranslation = i2857[1]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2858 = root || new pc.UnityMaterial()
  var i2859 = data
  i2858.name = i2859[0]
  request.r(i2859[1], i2859[2], 0, i2858, 'shader')
  i2858.renderQueue = i2859[3]
  i2858.enableInstancing = !!i2859[4]
  var i2861 = i2859[5]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2861[i + 0]) );
  }
  i2858.floatParameters = i2860
  var i2863 = i2859[6]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2863[i + 0]) );
  }
  i2858.colorParameters = i2862
  var i2865 = i2859[7]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2865[i + 0]) );
  }
  i2858.vectorParameters = i2864
  var i2867 = i2859[8]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2867[i + 0]) );
  }
  i2858.textureParameters = i2866
  var i2869 = i2859[9]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2869[i + 0]) );
  }
  i2858.materialFlags = i2868
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2873 = data
  i2872.name = i2873[0]
  i2872.value = i2873[1]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2877 = data
  i2876.name = i2877[0]
  i2876.value = new pc.Color(i2877[1], i2877[2], i2877[3], i2877[4])
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2881 = data
  i2880.name = i2881[0]
  i2880.value = new pc.Vec4( i2881[1], i2881[2], i2881[3], i2881[4] )
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2885 = data
  i2884.name = i2885[0]
  request.r(i2885[1], i2885[2], 0, i2884, 'value')
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2889 = data
  i2888.name = i2889[0]
  i2888.enabled = !!i2889[1]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2891 = data
  i2890.name = i2891[0]
  i2890.width = i2891[1]
  i2890.height = i2891[2]
  i2890.mipmapCount = i2891[3]
  i2890.anisoLevel = i2891[4]
  i2890.filterMode = i2891[5]
  i2890.hdr = !!i2891[6]
  i2890.format = i2891[7]
  i2890.wrapMode = i2891[8]
  i2890.alphaIsTransparency = !!i2891[9]
  i2890.alphaSource = i2891[10]
  i2890.graphicsFormat = i2891[11]
  i2890.sRGBTexture = !!i2891[12]
  i2890.desiredColorSpace = i2891[13]
  i2890.wrapU = i2891[14]
  i2890.wrapV = i2891[15]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2893 = data
  i2892.position = new pc.Vec3( i2893[0], i2893[1], i2893[2] )
  i2892.scale = new pc.Vec3( i2893[3], i2893[4], i2893[5] )
  i2892.rotation = new pc.Quat(i2893[6], i2893[7], i2893[8], i2893[9])
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2895 = data
  i2894.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2895[0], i2894.main)
  i2894.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2895[1], i2894.colorBySpeed)
  i2894.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2895[2], i2894.colorOverLifetime)
  i2894.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2895[3], i2894.emission)
  i2894.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2895[4], i2894.rotationBySpeed)
  i2894.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2895[5], i2894.rotationOverLifetime)
  i2894.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2895[6], i2894.shape)
  i2894.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2895[7], i2894.sizeBySpeed)
  i2894.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2895[8], i2894.sizeOverLifetime)
  i2894.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2895[9], i2894.textureSheetAnimation)
  i2894.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2895[10], i2894.velocityOverLifetime)
  i2894.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2895[11], i2894.noise)
  i2894.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2895[12], i2894.inheritVelocity)
  i2894.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2895[13], i2894.forceOverLifetime)
  i2894.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2895[14], i2894.limitVelocityOverLifetime)
  i2894.useAutoRandomSeed = !!i2895[15]
  i2894.randomSeed = i2895[16]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2896 = root || new pc.ParticleSystemMain()
  var i2897 = data
  i2896.duration = i2897[0]
  i2896.loop = !!i2897[1]
  i2896.prewarm = !!i2897[2]
  i2896.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[3], i2896.startDelay)
  i2896.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[4], i2896.startLifetime)
  i2896.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[5], i2896.startSpeed)
  i2896.startSize3D = !!i2897[6]
  i2896.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[7], i2896.startSizeX)
  i2896.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[8], i2896.startSizeY)
  i2896.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[9], i2896.startSizeZ)
  i2896.startRotation3D = !!i2897[10]
  i2896.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[11], i2896.startRotationX)
  i2896.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[12], i2896.startRotationY)
  i2896.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[13], i2896.startRotationZ)
  i2896.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2897[14], i2896.startColor)
  i2896.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2897[15], i2896.gravityModifier)
  i2896.simulationSpace = i2897[16]
  request.r(i2897[17], i2897[18], 0, i2896, 'customSimulationSpace')
  i2896.simulationSpeed = i2897[19]
  i2896.useUnscaledTime = !!i2897[20]
  i2896.scalingMode = i2897[21]
  i2896.playOnAwake = !!i2897[22]
  i2896.maxParticles = i2897[23]
  i2896.emitterVelocityMode = i2897[24]
  i2896.stopAction = i2897[25]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2898 = root || new pc.MinMaxCurve()
  var i2899 = data
  i2898.mode = i2899[0]
  i2898.curveMin = new pc.AnimationCurve( { keys_flow: i2899[1] } )
  i2898.curveMax = new pc.AnimationCurve( { keys_flow: i2899[2] } )
  i2898.curveMultiplier = i2899[3]
  i2898.constantMin = i2899[4]
  i2898.constantMax = i2899[5]
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2900 = root || new pc.MinMaxGradient()
  var i2901 = data
  i2900.mode = i2901[0]
  i2900.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2901[1], i2900.gradientMin)
  i2900.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2901[2], i2900.gradientMax)
  i2900.colorMin = new pc.Color(i2901[3], i2901[4], i2901[5], i2901[6])
  i2900.colorMax = new pc.Color(i2901[7], i2901[8], i2901[9], i2901[10])
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2903 = data
  i2902.mode = i2903[0]
  var i2905 = i2903[1]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2905[i + 0]) );
  }
  i2902.colorKeys = i2904
  var i2907 = i2903[2]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2907[i + 0]) );
  }
  i2902.alphaKeys = i2906
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2908 = root || new pc.ParticleSystemColorBySpeed()
  var i2909 = data
  i2908.enabled = !!i2909[0]
  i2908.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2909[1], i2908.color)
  i2908.range = new pc.Vec2( i2909[2], i2909[3] )
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2913 = data
  i2912.color = new pc.Color(i2913[0], i2913[1], i2913[2], i2913[3])
  i2912.time = i2913[4]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2917 = data
  i2916.alpha = i2917[0]
  i2916.time = i2917[1]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2918 = root || new pc.ParticleSystemColorOverLifetime()
  var i2919 = data
  i2918.enabled = !!i2919[0]
  i2918.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2919[1], i2918.color)
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2920 = root || new pc.ParticleSystemEmitter()
  var i2921 = data
  i2920.enabled = !!i2921[0]
  i2920.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2921[1], i2920.rateOverTime)
  i2920.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2921[2], i2920.rateOverDistance)
  var i2923 = i2921[3]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2923[i + 0]) );
  }
  i2920.bursts = i2922
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2926 = root || new pc.ParticleSystemBurst()
  var i2927 = data
  i2926.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2927[0], i2926.count)
  i2926.cycleCount = i2927[1]
  i2926.minCount = i2927[2]
  i2926.maxCount = i2927[3]
  i2926.repeatInterval = i2927[4]
  i2926.time = i2927[5]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2928 = root || new pc.ParticleSystemRotationBySpeed()
  var i2929 = data
  i2928.enabled = !!i2929[0]
  i2928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[1], i2928.x)
  i2928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[2], i2928.y)
  i2928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[3], i2928.z)
  i2928.separateAxes = !!i2929[4]
  i2928.range = new pc.Vec2( i2929[5], i2929[6] )
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2930 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2931 = data
  i2930.enabled = !!i2931[0]
  i2930.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[1], i2930.x)
  i2930.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[2], i2930.y)
  i2930.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[3], i2930.z)
  i2930.separateAxes = !!i2931[4]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2932 = root || new pc.ParticleSystemShape()
  var i2933 = data
  i2932.enabled = !!i2933[0]
  i2932.shapeType = i2933[1]
  i2932.randomDirectionAmount = i2933[2]
  i2932.sphericalDirectionAmount = i2933[3]
  i2932.randomPositionAmount = i2933[4]
  i2932.alignToDirection = !!i2933[5]
  i2932.radius = i2933[6]
  i2932.radiusMode = i2933[7]
  i2932.radiusSpread = i2933[8]
  i2932.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2933[9], i2932.radiusSpeed)
  i2932.radiusThickness = i2933[10]
  i2932.angle = i2933[11]
  i2932.length = i2933[12]
  i2932.boxThickness = new pc.Vec3( i2933[13], i2933[14], i2933[15] )
  i2932.meshShapeType = i2933[16]
  request.r(i2933[17], i2933[18], 0, i2932, 'mesh')
  request.r(i2933[19], i2933[20], 0, i2932, 'meshRenderer')
  request.r(i2933[21], i2933[22], 0, i2932, 'skinnedMeshRenderer')
  i2932.useMeshMaterialIndex = !!i2933[23]
  i2932.meshMaterialIndex = i2933[24]
  i2932.useMeshColors = !!i2933[25]
  i2932.normalOffset = i2933[26]
  i2932.arc = i2933[27]
  i2932.arcMode = i2933[28]
  i2932.arcSpread = i2933[29]
  i2932.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2933[30], i2932.arcSpeed)
  i2932.donutRadius = i2933[31]
  i2932.position = new pc.Vec3( i2933[32], i2933[33], i2933[34] )
  i2932.rotation = new pc.Vec3( i2933[35], i2933[36], i2933[37] )
  i2932.scale = new pc.Vec3( i2933[38], i2933[39], i2933[40] )
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2934 = root || new pc.ParticleSystemSizeBySpeed()
  var i2935 = data
  i2934.enabled = !!i2935[0]
  i2934.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2935[1], i2934.x)
  i2934.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2935[2], i2934.y)
  i2934.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2935[3], i2934.z)
  i2934.separateAxes = !!i2935[4]
  i2934.range = new pc.Vec2( i2935[5], i2935[6] )
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2936 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2937 = data
  i2936.enabled = !!i2937[0]
  i2936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[1], i2936.x)
  i2936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[2], i2936.y)
  i2936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[3], i2936.z)
  i2936.separateAxes = !!i2937[4]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2938 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2939 = data
  i2938.enabled = !!i2939[0]
  i2938.mode = i2939[1]
  i2938.animation = i2939[2]
  i2938.numTilesX = i2939[3]
  i2938.numTilesY = i2939[4]
  i2938.useRandomRow = !!i2939[5]
  i2938.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[6], i2938.frameOverTime)
  i2938.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[7], i2938.startFrame)
  i2938.cycleCount = i2939[8]
  i2938.rowIndex = i2939[9]
  i2938.flipU = i2939[10]
  i2938.flipV = i2939[11]
  i2938.spriteCount = i2939[12]
  var i2941 = i2939[13]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 2) {
  request.r(i2941[i + 0], i2941[i + 1], 2, i2940, '')
  }
  i2938.sprites = i2940
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2944 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2945 = data
  i2944.enabled = !!i2945[0]
  i2944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[1], i2944.x)
  i2944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[2], i2944.y)
  i2944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[3], i2944.z)
  i2944.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[4], i2944.radial)
  i2944.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[5], i2944.speedModifier)
  i2944.space = i2945[6]
  i2944.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[7], i2944.orbitalX)
  i2944.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[8], i2944.orbitalY)
  i2944.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[9], i2944.orbitalZ)
  i2944.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[10], i2944.orbitalOffsetX)
  i2944.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[11], i2944.orbitalOffsetY)
  i2944.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[12], i2944.orbitalOffsetZ)
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2946 = root || new pc.ParticleSystemNoise()
  var i2947 = data
  i2946.enabled = !!i2947[0]
  i2946.separateAxes = !!i2947[1]
  i2946.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[2], i2946.strengthX)
  i2946.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[3], i2946.strengthY)
  i2946.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[4], i2946.strengthZ)
  i2946.frequency = i2947[5]
  i2946.damping = !!i2947[6]
  i2946.octaveCount = i2947[7]
  i2946.octaveMultiplier = i2947[8]
  i2946.octaveScale = i2947[9]
  i2946.quality = i2947[10]
  i2946.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[11], i2946.scrollSpeed)
  i2946.scrollSpeedMultiplier = i2947[12]
  i2946.remapEnabled = !!i2947[13]
  i2946.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[14], i2946.remapX)
  i2946.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[15], i2946.remapY)
  i2946.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[16], i2946.remapZ)
  i2946.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[17], i2946.positionAmount)
  i2946.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[18], i2946.rotationAmount)
  i2946.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[19], i2946.sizeAmount)
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2948 = root || new pc.ParticleSystemInheritVelocity()
  var i2949 = data
  i2948.enabled = !!i2949[0]
  i2948.mode = i2949[1]
  i2948.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[2], i2948.curve)
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2950 = root || new pc.ParticleSystemForceOverLifetime()
  var i2951 = data
  i2950.enabled = !!i2951[0]
  i2950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2951[1], i2950.x)
  i2950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2951[2], i2950.y)
  i2950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2951[3], i2950.z)
  i2950.space = i2951[4]
  i2950.randomized = !!i2951[5]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2952 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2953 = data
  i2952.enabled = !!i2953[0]
  i2952.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[1], i2952.limit)
  i2952.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[2], i2952.limitX)
  i2952.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[3], i2952.limitY)
  i2952.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[4], i2952.limitZ)
  i2952.dampen = i2953[5]
  i2952.separateAxes = !!i2953[6]
  i2952.space = i2953[7]
  i2952.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[8], i2952.drag)
  i2952.multiplyDragByParticleSize = !!i2953[9]
  i2952.multiplyDragByParticleVelocity = !!i2953[10]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2955 = data
  i2954.enabled = !!i2955[0]
  request.r(i2955[1], i2955[2], 0, i2954, 'sharedMaterial')
  var i2957 = i2955[3]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 2) {
  request.r(i2957[i + 0], i2957[i + 1], 2, i2956, '')
  }
  i2954.sharedMaterials = i2956
  i2954.receiveShadows = !!i2955[4]
  i2954.shadowCastingMode = i2955[5]
  i2954.sortingLayerID = i2955[6]
  i2954.sortingOrder = i2955[7]
  i2954.lightmapIndex = i2955[8]
  i2954.lightmapSceneIndex = i2955[9]
  i2954.lightmapScaleOffset = new pc.Vec4( i2955[10], i2955[11], i2955[12], i2955[13] )
  i2954.lightProbeUsage = i2955[14]
  i2954.reflectionProbeUsage = i2955[15]
  request.r(i2955[16], i2955[17], 0, i2954, 'mesh')
  i2954.meshCount = i2955[18]
  i2954.activeVertexStreamsCount = i2955[19]
  i2954.alignment = i2955[20]
  i2954.renderMode = i2955[21]
  i2954.sortMode = i2955[22]
  i2954.lengthScale = i2955[23]
  i2954.velocityScale = i2955[24]
  i2954.cameraVelocityScale = i2955[25]
  i2954.normalDirection = i2955[26]
  i2954.sortingFudge = i2955[27]
  i2954.minParticleSize = i2955[28]
  i2954.maxParticleSize = i2955[29]
  i2954.pivot = new pc.Vec3( i2955[30], i2955[31], i2955[32] )
  request.r(i2955[33], i2955[34], 0, i2954, 'trailMaterial')
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2961 = data
  i2960.name = i2961[0]
  i2960.tagId = i2961[1]
  i2960.enabled = !!i2961[2]
  i2960.isStatic = !!i2961[3]
  i2960.layer = i2961[4]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2963 = data
  i2962.name = i2963[0]
  i2962.halfPrecision = !!i2963[1]
  i2962.useUInt32IndexFormat = !!i2963[2]
  i2962.vertexCount = i2963[3]
  i2962.aabb = i2963[4]
  var i2965 = i2963[5]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( !!i2965[i + 0] );
  }
  i2962.streams = i2964
  i2962.vertices = i2963[6]
  var i2967 = i2963[7]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2967[i + 0]) );
  }
  i2962.subMeshes = i2966
  var i2969 = i2963[8]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 16) {
    i2968.push( new pc.Mat4().setData(i2969[i + 0], i2969[i + 1], i2969[i + 2], i2969[i + 3],  i2969[i + 4], i2969[i + 5], i2969[i + 6], i2969[i + 7],  i2969[i + 8], i2969[i + 9], i2969[i + 10], i2969[i + 11],  i2969[i + 12], i2969[i + 13], i2969[i + 14], i2969[i + 15]) );
  }
  i2962.bindposes = i2968
  var i2971 = i2963[9]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2971[i + 0]) );
  }
  i2962.blendShapes = i2970
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2977 = data
  i2976.triangles = i2977[0]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2983 = data
  i2982.name = i2983[0]
  var i2985 = i2983[1]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2985[i + 0]) );
  }
  i2982.frames = i2984
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2987 = data
  i2986.pivot = new pc.Vec2( i2987[0], i2987[1] )
  i2986.anchorMin = new pc.Vec2( i2987[2], i2987[3] )
  i2986.anchorMax = new pc.Vec2( i2987[4], i2987[5] )
  i2986.sizeDelta = new pc.Vec2( i2987[6], i2987[7] )
  i2986.anchoredPosition3D = new pc.Vec3( i2987[8], i2987[9], i2987[10] )
  i2986.rotation = new pc.Quat(i2987[11], i2987[12], i2987[13], i2987[14])
  i2986.scale = new pc.Vec3( i2987[15], i2987[16], i2987[17] )
  return i2986
}

Deserializers["QuestSlot"] = function (request, data, root) {
  var i2988 = root || request.c( 'QuestSlot' )
  var i2989 = data
  i2988.InitialScale = new pc.Vec3( i2989[0], i2989[1], i2989[2] )
  i2988.MaximumScale = new pc.Vec3( i2989[3], i2989[4], i2989[5] )
  i2988.EndScale = new pc.Vec3( i2989[6], i2989[7], i2989[8] )
  i2988.animationDuration = i2989[9]
  i2988.maxSizeTrigger = i2989[10]
  request.r(i2989[11], i2989[12], 0, i2988, 'type')
  i2988.amount = i2989[13]
  i2988.locked = !!i2989[14]
  request.r(i2989[15], i2989[16], 0, i2988, 'icon')
  request.r(i2989[17], i2989[18], 0, i2988, 'amountTxt')
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2991 = data
  i2990.cullTransparentMesh = !!i2991[0]
  return i2990
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2992 = root || request.c( 'UnityEngine.UI.Image' )
  var i2993 = data
  request.r(i2993[0], i2993[1], 0, i2992, 'm_Sprite')
  i2992.m_Type = i2993[2]
  i2992.m_PreserveAspect = !!i2993[3]
  i2992.m_FillCenter = !!i2993[4]
  i2992.m_FillMethod = i2993[5]
  i2992.m_FillAmount = i2993[6]
  i2992.m_FillClockwise = !!i2993[7]
  i2992.m_FillOrigin = i2993[8]
  i2992.m_UseSpriteMesh = !!i2993[9]
  i2992.m_PixelsPerUnitMultiplier = i2993[10]
  request.r(i2993[11], i2993[12], 0, i2992, 'm_Material')
  i2992.m_Maskable = !!i2993[13]
  i2992.m_Color = new pc.Color(i2993[14], i2993[15], i2993[16], i2993[17])
  i2992.m_RaycastTarget = !!i2993[18]
  i2992.m_RaycastPadding = new pc.Vec4( i2993[19], i2993[20], i2993[21], i2993[22] )
  return i2992
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2994 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2995 = data
  i2994.m_hasFontAssetChanged = !!i2995[0]
  request.r(i2995[1], i2995[2], 0, i2994, 'm_baseMaterial')
  i2994.m_maskOffset = new pc.Vec4( i2995[3], i2995[4], i2995[5], i2995[6] )
  i2994.m_text = i2995[7]
  i2994.m_isRightToLeft = !!i2995[8]
  request.r(i2995[9], i2995[10], 0, i2994, 'm_fontAsset')
  request.r(i2995[11], i2995[12], 0, i2994, 'm_sharedMaterial')
  var i2997 = i2995[13]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 2) {
  request.r(i2997[i + 0], i2997[i + 1], 2, i2996, '')
  }
  i2994.m_fontSharedMaterials = i2996
  request.r(i2995[14], i2995[15], 0, i2994, 'm_fontMaterial')
  var i2999 = i2995[16]
  var i2998 = []
  for(var i = 0; i < i2999.length; i += 2) {
  request.r(i2999[i + 0], i2999[i + 1], 2, i2998, '')
  }
  i2994.m_fontMaterials = i2998
  i2994.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2995[17], i2995[18], i2995[19], i2995[20])
  i2994.m_fontColor = new pc.Color(i2995[21], i2995[22], i2995[23], i2995[24])
  i2994.m_enableVertexGradient = !!i2995[25]
  i2994.m_colorMode = i2995[26]
  i2994.m_fontColorGradient = request.d('TMPro.VertexGradient', i2995[27], i2994.m_fontColorGradient)
  request.r(i2995[28], i2995[29], 0, i2994, 'm_fontColorGradientPreset')
  request.r(i2995[30], i2995[31], 0, i2994, 'm_spriteAsset')
  i2994.m_tintAllSprites = !!i2995[32]
  request.r(i2995[33], i2995[34], 0, i2994, 'm_StyleSheet')
  i2994.m_TextStyleHashCode = i2995[35]
  i2994.m_overrideHtmlColors = !!i2995[36]
  i2994.m_faceColor = UnityEngine.Color32.ConstructColor(i2995[37], i2995[38], i2995[39], i2995[40])
  i2994.m_fontSize = i2995[41]
  i2994.m_fontSizeBase = i2995[42]
  i2994.m_fontWeight = i2995[43]
  i2994.m_enableAutoSizing = !!i2995[44]
  i2994.m_fontSizeMin = i2995[45]
  i2994.m_fontSizeMax = i2995[46]
  i2994.m_fontStyle = i2995[47]
  i2994.m_HorizontalAlignment = i2995[48]
  i2994.m_VerticalAlignment = i2995[49]
  i2994.m_textAlignment = i2995[50]
  i2994.m_characterSpacing = i2995[51]
  i2994.m_wordSpacing = i2995[52]
  i2994.m_lineSpacing = i2995[53]
  i2994.m_lineSpacingMax = i2995[54]
  i2994.m_paragraphSpacing = i2995[55]
  i2994.m_charWidthMaxAdj = i2995[56]
  i2994.m_enableWordWrapping = !!i2995[57]
  i2994.m_wordWrappingRatios = i2995[58]
  i2994.m_overflowMode = i2995[59]
  request.r(i2995[60], i2995[61], 0, i2994, 'm_linkedTextComponent')
  request.r(i2995[62], i2995[63], 0, i2994, 'parentLinkedComponent')
  i2994.m_enableKerning = !!i2995[64]
  i2994.m_enableExtraPadding = !!i2995[65]
  i2994.checkPaddingRequired = !!i2995[66]
  i2994.m_isRichText = !!i2995[67]
  i2994.m_parseCtrlCharacters = !!i2995[68]
  i2994.m_isOrthographic = !!i2995[69]
  i2994.m_isCullingEnabled = !!i2995[70]
  i2994.m_horizontalMapping = i2995[71]
  i2994.m_verticalMapping = i2995[72]
  i2994.m_uvLineOffset = i2995[73]
  i2994.m_geometrySortingOrder = i2995[74]
  i2994.m_IsTextObjectScaleStatic = !!i2995[75]
  i2994.m_VertexBufferAutoSizeReduction = !!i2995[76]
  i2994.m_useMaxVisibleDescender = !!i2995[77]
  i2994.m_pageToDisplay = i2995[78]
  i2994.m_margin = new pc.Vec4( i2995[79], i2995[80], i2995[81], i2995[82] )
  i2994.m_isUsingLegacyAnimationComponent = !!i2995[83]
  i2994.m_isVolumetricText = !!i2995[84]
  request.r(i2995[85], i2995[86], 0, i2994, 'm_Material')
  i2994.m_Maskable = !!i2995[87]
  i2994.m_Color = new pc.Color(i2995[88], i2995[89], i2995[90], i2995[91])
  i2994.m_RaycastTarget = !!i2995[92]
  i2994.m_RaycastPadding = new pc.Vec4( i2995[93], i2995[94], i2995[95], i2995[96] )
  return i2994
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3000 = root || request.c( 'TMPro.VertexGradient' )
  var i3001 = data
  i3000.topLeft = new pc.Color(i3001[0], i3001[1], i3001[2], i3001[3])
  i3000.topRight = new pc.Color(i3001[4], i3001[5], i3001[6], i3001[7])
  i3000.bottomLeft = new pc.Color(i3001[8], i3001[9], i3001[10], i3001[11])
  i3000.bottomRight = new pc.Color(i3001[12], i3001[13], i3001[14], i3001[15])
  return i3000
}

Deserializers["Tile"] = function (request, data, root) {
  var i3002 = root || request.c( 'Tile' )
  var i3003 = data
  i3002.layer = i3003[0]
  i3002.line = i3003[1]
  request.r(i3003[2], i3003[3], 0, i3002, 'icon')
  request.r(i3003[4], i3003[5], 0, i3002, 'lockTile')
  request.r(i3003[6], i3003[7], 0, i3002, 'background')
  request.r(i3003[8], i3003[9], 0, i3002, 'trail')
  i3002.defaultSize = new pc.Vec3( i3003[10], i3003[11], i3003[12] )
  i3002.speed = i3003[13]
  i3002.spawnAnimSize = i3003[14]
  i3002.spawnAnimDuration = i3003[15]
  i3002.locked = !!i3003[16]
  i3002.isHidden = !!i3003[17]
  i3002.lockAlpha = i3003[18]
  i3002.fadeDuration = i3003[19]
  i3002.debug = !!i3003[20]
  request.r(i3003[21], i3003[22], 0, i3002, 'type')
  i3002.iconSort = i3003[23]
  i3002.backGroundSort = i3003[24]
  i3002.disabledSort = i3003[25]
  i3002.trailSort = i3003[26]
  var i3005 = i3003[27]
  var i3004 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3005.length; i += 2) {
  request.r(i3005[i + 0], i3005[i + 1], 1, i3004, '')
  }
  i3002.coverTiles = i3004
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3009 = data
  i3008.usedByComposite = !!i3009[0]
  i3008.autoTiling = !!i3009[1]
  i3008.size = new pc.Vec2( i3009[2], i3009[3] )
  i3008.edgeRadius = i3009[4]
  i3008.enabled = !!i3009[5]
  i3008.isTrigger = !!i3009[6]
  i3008.usedByEffector = !!i3009[7]
  i3008.density = i3009[8]
  i3008.offset = new pc.Vec2( i3009[9], i3009[10] )
  request.r(i3009[11], i3009[12], 0, i3008, 'material')
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3011 = data
  i3010.bodyType = i3011[0]
  request.r(i3011[1], i3011[2], 0, i3010, 'material')
  i3010.simulated = !!i3011[3]
  i3010.useAutoMass = !!i3011[4]
  i3010.mass = i3011[5]
  i3010.drag = i3011[6]
  i3010.angularDrag = i3011[7]
  i3010.gravityScale = i3011[8]
  i3010.collisionDetectionMode = i3011[9]
  i3010.sleepMode = i3011[10]
  i3010.constraints = i3011[11]
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3013 = data
  i3012.enabled = !!i3013[0]
  request.r(i3013[1], i3013[2], 0, i3012, 'sharedMaterial')
  var i3015 = i3013[3]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 2) {
  request.r(i3015[i + 0], i3015[i + 1], 2, i3014, '')
  }
  i3012.sharedMaterials = i3014
  i3012.receiveShadows = !!i3013[4]
  i3012.shadowCastingMode = i3013[5]
  i3012.sortingLayerID = i3013[6]
  i3012.sortingOrder = i3013[7]
  i3012.lightmapIndex = i3013[8]
  i3012.lightmapSceneIndex = i3013[9]
  i3012.lightmapScaleOffset = new pc.Vec4( i3013[10], i3013[11], i3013[12], i3013[13] )
  i3012.lightProbeUsage = i3013[14]
  i3012.reflectionProbeUsage = i3013[15]
  i3012.color = new pc.Color(i3013[16], i3013[17], i3013[18], i3013[19])
  request.r(i3013[20], i3013[21], 0, i3012, 'sprite')
  i3012.flipX = !!i3013[22]
  i3012.flipY = !!i3013[23]
  i3012.drawMode = i3013[24]
  i3012.size = new pc.Vec2( i3013[25], i3013[26] )
  i3012.tileMode = i3013[27]
  i3012.adaptiveModeThreshold = i3013[28]
  i3012.maskInteraction = i3013[29]
  i3012.spriteSortPoint = i3013[30]
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3017 = data
  i3016.enabled = !!i3017[0]
  request.r(i3017[1], i3017[2], 0, i3016, 'sharedMaterial')
  var i3019 = i3017[3]
  var i3018 = []
  for(var i = 0; i < i3019.length; i += 2) {
  request.r(i3019[i + 0], i3019[i + 1], 2, i3018, '')
  }
  i3016.sharedMaterials = i3018
  i3016.receiveShadows = !!i3017[4]
  i3016.shadowCastingMode = i3017[5]
  i3016.sortingLayerID = i3017[6]
  i3016.sortingOrder = i3017[7]
  i3016.lightmapIndex = i3017[8]
  i3016.lightmapSceneIndex = i3017[9]
  i3016.lightmapScaleOffset = new pc.Vec4( i3017[10], i3017[11], i3017[12], i3017[13] )
  i3016.lightProbeUsage = i3017[14]
  i3016.reflectionProbeUsage = i3017[15]
  var i3021 = i3017[16]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 3) {
    i3020.push( new pc.Vec3( i3021[i + 0], i3021[i + 1], i3021[i + 2] ) );
  }
  i3016.positions = i3020
  i3016.positionCount = i3017[17]
  i3016.time = i3017[18]
  i3016.startWidth = i3017[19]
  i3016.endWidth = i3017[20]
  i3016.widthMultiplier = i3017[21]
  i3016.autodestruct = !!i3017[22]
  i3016.emitting = !!i3017[23]
  i3016.numCornerVertices = i3017[24]
  i3016.numCapVertices = i3017[25]
  i3016.minVertexDistance = i3017[26]
  i3016.colorGradient = i3017[27] ? new pc.ColorGradient(i3017[27][0], i3017[27][1], i3017[27][2]) : null
  i3016.startColor = new pc.Color(i3017[28], i3017[29], i3017[30], i3017[31])
  i3016.endColor = new pc.Color(i3017[32], i3017[33], i3017[34], i3017[35])
  i3016.generateLightingData = !!i3017[36]
  i3016.textureMode = i3017[37]
  i3016.alignment = i3017[38]
  i3016.widthCurve = new pc.AnimationCurve( { keys_flow: i3017[39] } )
  return i3016
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i3024 = root || request.c( 'TileSlot' )
  var i3025 = data
  i3024.ID = i3025[0]
  request.r(i3025[1], i3025[2], 0, i3024, 'Tile')
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3027 = data
  i3026.name = i3027[0]
  i3026.index = i3027[1]
  i3026.startup = !!i3027[2]
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3029 = data
  i3028.enabled = !!i3029[0]
  i3028.aspect = i3029[1]
  i3028.orthographic = !!i3029[2]
  i3028.orthographicSize = i3029[3]
  i3028.backgroundColor = new pc.Color(i3029[4], i3029[5], i3029[6], i3029[7])
  i3028.nearClipPlane = i3029[8]
  i3028.farClipPlane = i3029[9]
  i3028.fieldOfView = i3029[10]
  i3028.depth = i3029[11]
  i3028.clearFlags = i3029[12]
  i3028.cullingMask = i3029[13]
  i3028.rect = i3029[14]
  request.r(i3029[15], i3029[16], 0, i3028, 'targetTexture')
  i3028.usePhysicalProperties = !!i3029[17]
  i3028.focalLength = i3029[18]
  i3028.sensorSize = new pc.Vec2( i3029[19], i3029[20] )
  i3028.lensShift = new pc.Vec2( i3029[21], i3029[22] )
  i3028.gateFit = i3029[23]
  return i3028
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3030 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3031 = data
  request.r(i3031[0], i3031[1], 0, i3030, 'm_FirstSelected')
  i3030.m_sendNavigationEvents = !!i3031[2]
  i3030.m_DragThreshold = i3031[3]
  return i3030
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3032 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3033 = data
  i3032.m_HorizontalAxis = i3033[0]
  i3032.m_VerticalAxis = i3033[1]
  i3032.m_SubmitButton = i3033[2]
  i3032.m_CancelButton = i3033[3]
  i3032.m_InputActionsPerSecond = i3033[4]
  i3032.m_RepeatDelay = i3033[5]
  i3032.m_ForceModuleActive = !!i3033[6]
  i3032.m_SendPointerHoverToParent = !!i3033[7]
  return i3032
}

Deserializers["Game"] = function (request, data, root) {
  var i3034 = root || request.c( 'Game' )
  var i3035 = data
  i3034.autoGameOverInSeconds = i3035[0]
  request.r(i3035[1], i3035[2], 0, i3034, 'deck')
  request.r(i3035[3], i3035[4], 0, i3034, 'actions')
  request.r(i3035[5], i3035[6], 0, i3034, 'locker')
  request.r(i3035[7], i3035[8], 0, i3034, 'bag')
  request.r(i3035[9], i3035[10], 0, i3034, 'spawnAnimation')
  request.r(i3035[11], i3035[12], 0, i3034, 'tileMatcher')
  request.r(i3035[13], i3035[14], 0, i3034, 'loseCondition')
  request.r(i3035[15], i3035[16], 0, i3034, 'winCondition')
  request.r(i3035[17], i3035[18], 0, i3034, 'input')
  request.r(i3035[19], i3035[20], 0, i3034, 'endCard')
  request.r(i3035[21], i3035[22], 0, i3034, 'quest')
  i3034.useRandom = !!i3035[23]
  request.r(i3035[24], i3035[25], 0, i3034, 'spawnRandom')
  i3034.tileToSpawn = i3035[26]
  i3034.tilesInScene = i3035[27]
  var i3037 = i3035[28]
  var i3036 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3037.length; i += 2) {
  request.r(i3037[i + 0], i3037[i + 1], 1, i3036, '')
  }
  i3034.tilesInGame = i3036
  return i3034
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i3038 = root || request.c( 'TileSpawner' )
  var i3039 = data
  request.r(i3039[0], i3039[1], 0, i3038, 'Game')
  request.r(i3039[2], i3039[3], 0, i3038, 'prefab')
  var i3041 = i3039[4]
  var i3040 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3041.length; i += 2) {
  request.r(i3041[i + 0], i3041[i + 1], 1, i3040, '')
  }
  i3038.spawned = i3040
  i3038.hideAtSpawn = !!i3039[5]
  i3038.spawnRate = i3039[6]
  return i3038
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i3042 = root || request.c( 'TileRandomSpawner' )
  var i3043 = data
  request.r(i3043[0], i3043[1], 0, i3042, 'Game')
  i3042.spawnRate = i3043[2]
  var i3045 = i3043[3]
  var i3044 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3045.length; i += 2) {
  request.r(i3045[i + 0], i3045[i + 1], 1, i3044, '')
  }
  i3042.spawned = i3044
  return i3042
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i3046 = root || request.c( 'TileSpawnAnimation' )
  var i3047 = data
  request.r(i3047[0], i3047[1], 0, i3046, 'Game')
  i3046.delayBetweenLines = i3047[2]
  i3046.delayBetweenTiles = i3047[3]
  i3046.delayBetweenLayers = i3047[4]
  return i3046
}

Deserializers["TileActions"] = function (request, data, root) {
  var i3048 = root || request.c( 'TileActions' )
  var i3049 = data
  request.r(i3049[0], i3049[1], 0, i3048, 'Game')
  return i3048
}

Deserializers["TileMatcher"] = function (request, data, root) {
  var i3050 = root || request.c( 'TileMatcher' )
  var i3051 = data
  request.r(i3051[0], i3051[1], 0, i3050, 'Game')
  request.r(i3051[2], i3051[3], 0, i3050, 'vfx')
  var i3053 = i3051[4]
  var i3052 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3053.length; i += 2) {
  request.r(i3053[i + 0], i3053[i + 1], 1, i3052, '')
  }
  i3050.completed = i3052
  var i3055 = i3051[5]
  var i3054 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i3055.length; i += 2) {
  request.r(i3055[i + 0], i3055[i + 1], 1, i3054, '')
  }
  i3050.lastMatch = i3054
  return i3050
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i3058 = root || request.c( 'LoseCondition' )
  var i3059 = data
  request.r(i3059[0], i3059[1], 0, i3058, 'Game')
  return i3058
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i3060 = root || request.c( 'WinCondition' )
  var i3061 = data
  request.r(i3061[0], i3061[1], 0, i3060, 'Game')
  return i3060
}

Deserializers["Quest"] = function (request, data, root) {
  var i3062 = root || request.c( 'Quest' )
  var i3063 = data
  request.r(i3063[0], i3063[1], 0, i3062, 'Game')
  var i3065 = i3063[2]
  var i3064 = new (System.Collections.Generic.List$1(Bridge.ns('QuestSlot')))
  for(var i = 0; i < i3065.length; i += 2) {
  request.r(i3065[i + 0], i3065[i + 1], 1, i3064, '')
  }
  i3062.slots = i3064
  return i3062
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i3068 = root || request.c( 'InputTouch' )
  var i3069 = data
  request.r(i3069[0], i3069[1], 0, i3068, 'Game')
  i3068.inputCooldown = i3069[2]
  var i3071 = i3069[3]
  var i3070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i3071.length; i += 2) {
    i3070.add(new pc.Vec2( i3071[i + 0], i3071[i + 1] ));
  }
  i3068.touches = i3070
  i3068.touchSize = i3069[4]
  return i3068
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i3074 = root || request.c( 'TileBagSorter' )
  var i3075 = data
  request.r(i3075[0], i3075[1], 0, i3074, 'Game')
  i3074.enable = !!i3075[2]
  i3074.intervalSec = i3075[3]
  return i3074
}

Deserializers["EndCard"] = function (request, data, root) {
  var i3076 = root || request.c( 'EndCard' )
  var i3077 = data
  request.r(i3077[0], i3077[1], 0, i3076, 'canvas')
  request.r(i3077[2], i3077[3], 0, i3076, 'Game')
  return i3076
}

Deserializers["Sounds"] = function (request, data, root) {
  var i3078 = root || request.c( 'Sounds' )
  var i3079 = data
  request.r(i3079[0], i3079[1], 0, i3078, 'Game')
  request.r(i3079[2], i3079[3], 0, i3078, 'tileClick')
  request.r(i3079[4], i3079[5], 0, i3078, 'tileMerge')
  request.r(i3079[6], i3079[7], 0, i3078, 'levelWin')
  request.r(i3079[8], i3079[9], 0, i3078, 'leveLose')
  request.r(i3079[10], i3079[11], 0, i3078, 'source')
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3081 = data
  request.r(i3081[0], i3081[1], 0, i3080, 'clip')
  request.r(i3081[2], i3081[3], 0, i3080, 'outputAudioMixerGroup')
  i3080.playOnAwake = !!i3081[4]
  i3080.loop = !!i3081[5]
  i3080.time = i3081[6]
  i3080.volume = i3081[7]
  i3080.pitch = i3081[8]
  i3080.enabled = !!i3081[9]
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3083 = data
  i3082.enabled = !!i3083[0]
  i3082.planeDistance = i3083[1]
  i3082.referencePixelsPerUnit = i3083[2]
  i3082.isFallbackOverlay = !!i3083[3]
  i3082.renderMode = i3083[4]
  i3082.renderOrder = i3083[5]
  i3082.sortingLayerName = i3083[6]
  i3082.sortingOrder = i3083[7]
  i3082.scaleFactor = i3083[8]
  request.r(i3083[9], i3083[10], 0, i3082, 'worldCamera')
  i3082.overrideSorting = !!i3083[11]
  i3082.pixelPerfect = !!i3083[12]
  i3082.targetDisplay = i3083[13]
  i3082.overridePixelPerfect = !!i3083[14]
  return i3082
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3084 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3085 = data
  i3084.m_UiScaleMode = i3085[0]
  i3084.m_ReferencePixelsPerUnit = i3085[1]
  i3084.m_ScaleFactor = i3085[2]
  i3084.m_ReferenceResolution = new pc.Vec2( i3085[3], i3085[4] )
  i3084.m_ScreenMatchMode = i3085[5]
  i3084.m_MatchWidthOrHeight = i3085[6]
  i3084.m_PhysicalUnit = i3085[7]
  i3084.m_FallbackScreenDPI = i3085[8]
  i3084.m_DefaultSpriteDPI = i3085[9]
  i3084.m_DynamicPixelsPerUnit = i3085[10]
  i3084.m_PresetInfoIsWorld = !!i3085[11]
  return i3084
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3086 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3087 = data
  i3086.m_IgnoreReversedGraphics = !!i3087[0]
  i3086.m_BlockingObjects = i3087[1]
  i3086.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3087[2] )
  return i3086
}

Deserializers["ResetLocalPosition"] = function (request, data, root) {
  var i3088 = root || request.c( 'ResetLocalPosition' )
  var i3089 = data
  return i3088
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3090 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3091 = data
  i3090.m_Spacing = i3091[0]
  i3090.m_ChildForceExpandWidth = !!i3091[1]
  i3090.m_ChildForceExpandHeight = !!i3091[2]
  i3090.m_ChildControlWidth = !!i3091[3]
  i3090.m_ChildControlHeight = !!i3091[4]
  i3090.m_ChildScaleWidth = !!i3091[5]
  i3090.m_ChildScaleHeight = !!i3091[6]
  i3090.m_ReverseArrangement = !!i3091[7]
  i3090.m_Padding = UnityEngine.RectOffset.FromPaddings(i3091[8], i3091[9], i3091[10], i3091[11])
  i3090.m_ChildAlignment = i3091[12]
  return i3090
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i3092 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i3093 = data
  i3092.m_StartCorner = i3093[0]
  i3092.m_StartAxis = i3093[1]
  i3092.m_CellSize = new pc.Vec2( i3093[2], i3093[3] )
  i3092.m_Spacing = new pc.Vec2( i3093[4], i3093[5] )
  i3092.m_Constraint = i3093[6]
  i3092.m_ConstraintCount = i3093[7]
  i3092.m_Padding = UnityEngine.RectOffset.FromPaddings(i3093[8], i3093[9], i3093[10], i3093[11])
  i3092.m_ChildAlignment = i3093[12]
  return i3092
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3094 = root || request.c( 'UnityEngine.UI.Button' )
  var i3095 = data
  i3094.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3095[0], i3094.m_OnClick)
  i3094.m_Navigation = request.d('UnityEngine.UI.Navigation', i3095[1], i3094.m_Navigation)
  i3094.m_Transition = i3095[2]
  i3094.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3095[3], i3094.m_Colors)
  i3094.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3095[4], i3094.m_SpriteState)
  i3094.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3095[5], i3094.m_AnimationTriggers)
  i3094.m_Interactable = !!i3095[6]
  request.r(i3095[7], i3095[8], 0, i3094, 'm_TargetGraphic')
  return i3094
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3096 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3097 = data
  i3096.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3097[0], i3096.m_PersistentCalls)
  return i3096
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3098 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3099 = data
  var i3101 = i3099[0]
  var i3100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.add(request.d('UnityEngine.Events.PersistentCall', i3101[i + 0]));
  }
  i3098.m_Calls = i3100
  return i3098
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3105 = data
  request.r(i3105[0], i3105[1], 0, i3104, 'm_Target')
  i3104.m_TargetAssemblyTypeName = i3105[2]
  i3104.m_MethodName = i3105[3]
  i3104.m_Mode = i3105[4]
  i3104.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3105[5], i3104.m_Arguments)
  i3104.m_CallState = i3105[6]
  return i3104
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3107 = data
  request.r(i3107[0], i3107[1], 0, i3106, 'm_ObjectArgument')
  i3106.m_ObjectArgumentAssemblyTypeName = i3107[2]
  i3106.m_IntArgument = i3107[3]
  i3106.m_FloatArgument = i3107[4]
  i3106.m_StringArgument = i3107[5]
  i3106.m_BoolArgument = !!i3107[6]
  return i3106
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3108 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3109 = data
  i3108.m_Mode = i3109[0]
  i3108.m_WrapAround = !!i3109[1]
  request.r(i3109[2], i3109[3], 0, i3108, 'm_SelectOnUp')
  request.r(i3109[4], i3109[5], 0, i3108, 'm_SelectOnDown')
  request.r(i3109[6], i3109[7], 0, i3108, 'm_SelectOnLeft')
  request.r(i3109[8], i3109[9], 0, i3108, 'm_SelectOnRight')
  return i3108
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3111 = data
  i3110.m_NormalColor = new pc.Color(i3111[0], i3111[1], i3111[2], i3111[3])
  i3110.m_HighlightedColor = new pc.Color(i3111[4], i3111[5], i3111[6], i3111[7])
  i3110.m_PressedColor = new pc.Color(i3111[8], i3111[9], i3111[10], i3111[11])
  i3110.m_SelectedColor = new pc.Color(i3111[12], i3111[13], i3111[14], i3111[15])
  i3110.m_DisabledColor = new pc.Color(i3111[16], i3111[17], i3111[18], i3111[19])
  i3110.m_ColorMultiplier = i3111[20]
  i3110.m_FadeDuration = i3111[21]
  return i3110
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3113 = data
  request.r(i3113[0], i3113[1], 0, i3112, 'm_HighlightedSprite')
  request.r(i3113[2], i3113[3], 0, i3112, 'm_PressedSprite')
  request.r(i3113[4], i3113[5], 0, i3112, 'm_SelectedSprite')
  request.r(i3113[6], i3113[7], 0, i3112, 'm_DisabledSprite')
  return i3112
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3115 = data
  i3114.m_NormalTrigger = i3115[0]
  i3114.m_HighlightedTrigger = i3115[1]
  i3114.m_PressedTrigger = i3115[2]
  i3114.m_SelectedTrigger = i3115[3]
  i3114.m_DisabledTrigger = i3115[4]
  return i3114
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i3116 = root || request.c( 'TilesBag' )
  var i3117 = data
  var i3119 = i3117[0]
  var i3118 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i3119.length; i += 2) {
  request.r(i3119[i + 0], i3119[i + 1], 1, i3118, '')
  }
  i3116.slots = i3118
  return i3116
}

Deserializers["Deck"] = function (request, data, root) {
  var i3120 = root || request.c( 'Deck' )
  var i3121 = data
  request.r(i3121[0], i3121[1], 0, i3120, 'Game')
  return i3120
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i3122 = root || request.c( 'DeckLayer' )
  var i3123 = data
  i3122.layer = i3123[0]
  var i3125 = i3123[1]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 2) {
  request.r(i3125[i + 0], i3125[i + 1], 2, i3124, '')
  }
  i3122.Tiles = i3124
  return i3122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3129 = data
  i3128.ambientIntensity = i3129[0]
  i3128.reflectionIntensity = i3129[1]
  i3128.ambientMode = i3129[2]
  i3128.ambientLight = new pc.Color(i3129[3], i3129[4], i3129[5], i3129[6])
  i3128.ambientSkyColor = new pc.Color(i3129[7], i3129[8], i3129[9], i3129[10])
  i3128.ambientGroundColor = new pc.Color(i3129[11], i3129[12], i3129[13], i3129[14])
  i3128.ambientEquatorColor = new pc.Color(i3129[15], i3129[16], i3129[17], i3129[18])
  i3128.fogColor = new pc.Color(i3129[19], i3129[20], i3129[21], i3129[22])
  i3128.fogEndDistance = i3129[23]
  i3128.fogStartDistance = i3129[24]
  i3128.fogDensity = i3129[25]
  i3128.fog = !!i3129[26]
  request.r(i3129[27], i3129[28], 0, i3128, 'skybox')
  i3128.fogMode = i3129[29]
  var i3131 = i3129[30]
  var i3130 = []
  for(var i = 0; i < i3131.length; i += 1) {
    i3130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3131[i + 0]) );
  }
  i3128.lightmaps = i3130
  i3128.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3129[31], i3128.lightProbes)
  i3128.lightmapsMode = i3129[32]
  i3128.mixedBakeMode = i3129[33]
  i3128.environmentLightingMode = i3129[34]
  i3128.ambientProbe = new pc.SphericalHarmonicsL2(i3129[35])
  i3128.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3129[36])
  i3128.useReferenceAmbientProbe = !!i3129[37]
  request.r(i3129[38], i3129[39], 0, i3128, 'customReflection')
  request.r(i3129[40], i3129[41], 0, i3128, 'defaultReflection')
  i3128.defaultReflectionMode = i3129[42]
  i3128.defaultReflectionResolution = i3129[43]
  i3128.sunLightObjectId = i3129[44]
  i3128.pixelLightCount = i3129[45]
  i3128.defaultReflectionHDR = !!i3129[46]
  i3128.hasLightDataAsset = !!i3129[47]
  i3128.hasManualGenerate = !!i3129[48]
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3135 = data
  request.r(i3135[0], i3135[1], 0, i3134, 'lightmapColor')
  request.r(i3135[2], i3135[3], 0, i3134, 'lightmapDirection')
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3136 = root || new UnityEngine.LightProbes()
  var i3137 = data
  return i3136
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i3142 = root || request.c( 'TileLocker' )
  var i3143 = data
  request.r(i3143[0], i3143[1], 0, i3142, 'Game')
  i3142.enabled = !!i3143[2]
  i3142.lockDistance = i3143[3]
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3145 = data
  request.r(i3145[0], i3145[1], 0, i3144, 'sharedMesh')
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3147 = data
  request.r(i3147[0], i3147[1], 0, i3146, 'additionalVertexStreams')
  i3146.enabled = !!i3147[2]
  request.r(i3147[3], i3147[4], 0, i3146, 'sharedMaterial')
  var i3149 = i3147[5]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 2) {
  request.r(i3149[i + 0], i3149[i + 1], 2, i3148, '')
  }
  i3146.sharedMaterials = i3148
  i3146.receiveShadows = !!i3147[6]
  i3146.shadowCastingMode = i3147[7]
  i3146.sortingLayerID = i3147[8]
  i3146.sortingOrder = i3147[9]
  i3146.lightmapIndex = i3147[10]
  i3146.lightmapSceneIndex = i3147[11]
  i3146.lightmapScaleOffset = new pc.Vec4( i3147[12], i3147[13], i3147[14], i3147[15] )
  i3146.lightProbeUsage = i3147[16]
  i3146.reflectionProbeUsage = i3147[17]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3151 = data
  var i3153 = i3151[0]
  var i3152 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3153.length; i += 1) {
    i3152.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3153[i + 0]));
  }
  i3150.ShaderCompilationErrors = i3152
  i3150.name = i3151[1]
  i3150.guid = i3151[2]
  var i3155 = i3151[3]
  var i3154 = []
  for(var i = 0; i < i3155.length; i += 1) {
    i3154.push( i3155[i + 0] );
  }
  i3150.shaderDefinedKeywords = i3154
  var i3157 = i3151[4]
  var i3156 = []
  for(var i = 0; i < i3157.length; i += 1) {
    i3156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3157[i + 0]) );
  }
  i3150.passes = i3156
  var i3159 = i3151[5]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3159[i + 0]) );
  }
  i3150.usePasses = i3158
  var i3161 = i3151[6]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3161[i + 0]) );
  }
  i3150.defaultParameterValues = i3160
  request.r(i3151[7], i3151[8], 0, i3150, 'unityFallbackShader')
  i3150.readDepth = !!i3151[9]
  i3150.isCreatedByShaderGraph = !!i3151[10]
  i3150.usedBatchUniforms = i3151[11]
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3165 = data
  i3164.shaderName = i3165[0]
  i3164.errorMessage = i3165[1]
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3170 = root || new pc.UnityShaderPass()
  var i3171 = data
  i3170.id = i3171[0]
  i3170.subShaderIndex = i3171[1]
  i3170.name = i3171[2]
  i3170.passType = i3171[3]
  i3170.grabPassTextureName = i3171[4]
  i3170.usePass = !!i3171[5]
  i3170.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[6], i3170.zTest)
  i3170.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[7], i3170.zWrite)
  i3170.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[8], i3170.culling)
  i3170.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3171[9], i3170.blending)
  i3170.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3171[10], i3170.alphaBlending)
  i3170.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[11], i3170.colorWriteMask)
  i3170.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[12], i3170.offsetUnits)
  i3170.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[13], i3170.offsetFactor)
  i3170.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[14], i3170.stencilRef)
  i3170.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[15], i3170.stencilReadMask)
  i3170.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[16], i3170.stencilWriteMask)
  i3170.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3171[17], i3170.stencilOp)
  i3170.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3171[18], i3170.stencilOpFront)
  i3170.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3171[19], i3170.stencilOpBack)
  var i3173 = i3171[20]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3173[i + 0]) );
  }
  i3170.tags = i3172
  var i3175 = i3171[21]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 1) {
    i3174.push( i3175[i + 0] );
  }
  i3170.passDefinedKeywords = i3174
  var i3177 = i3171[22]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3177[i + 0]) );
  }
  i3170.passDefinedKeywordGroups = i3176
  var i3179 = i3171[23]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3179[i + 0]) );
  }
  i3170.variants = i3178
  var i3181 = i3171[24]
  var i3180 = []
  for(var i = 0; i < i3181.length; i += 1) {
    i3180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3181[i + 0]) );
  }
  i3170.excludedVariants = i3180
  i3170.hasDepthReader = !!i3171[25]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3183 = data
  i3182.val = i3183[0]
  i3182.name = i3183[1]
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3185 = data
  i3184.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3185[0], i3184.src)
  i3184.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3185[1], i3184.dst)
  i3184.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3185[2], i3184.op)
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3187 = data
  i3186.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[0], i3186.pass)
  i3186.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[1], i3186.fail)
  i3186.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[2], i3186.zFail)
  i3186.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[3], i3186.comp)
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3191 = data
  i3190.name = i3191[0]
  i3190.value = i3191[1]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3195 = data
  var i3197 = i3195[0]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.push( i3197[i + 0] );
  }
  i3194.keywords = i3196
  i3194.hasDiscard = !!i3195[1]
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3201 = data
  i3200.passId = i3201[0]
  i3200.subShaderIndex = i3201[1]
  var i3203 = i3201[2]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( i3203[i + 0] );
  }
  i3200.keywords = i3202
  i3200.vertexProgram = i3201[3]
  i3200.fragmentProgram = i3201[4]
  i3200.compiledForWebGL2 = !!i3201[5]
  i3200.readDepth = !!i3201[6]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3207 = data
  request.r(i3207[0], i3207[1], 0, i3206, 'shader')
  i3206.pass = i3207[2]
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3211 = data
  i3210.name = i3211[0]
  i3210.type = i3211[1]
  i3210.value = new pc.Vec4( i3211[2], i3211[3], i3211[4], i3211[5] )
  i3210.textureValue = i3211[6]
  i3210.shaderPropertyFlag = i3211[7]
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3213 = data
  i3212.name = i3213[0]
  request.r(i3213[1], i3213[2], 0, i3212, 'texture')
  i3212.aabb = i3213[3]
  i3212.vertices = i3213[4]
  i3212.triangles = i3213[5]
  i3212.textureRect = UnityEngine.Rect.MinMaxRect(i3213[6], i3213[7], i3213[8], i3213[9])
  i3212.packedRect = UnityEngine.Rect.MinMaxRect(i3213[10], i3213[11], i3213[12], i3213[13])
  i3212.border = new pc.Vec4( i3213[14], i3213[15], i3213[16], i3213[17] )
  i3212.transparency = i3213[18]
  i3212.bounds = i3213[19]
  i3212.pixelsPerUnit = i3213[20]
  i3212.textureWidth = i3213[21]
  i3212.textureHeight = i3213[22]
  i3212.nativeSize = new pc.Vec2( i3213[23], i3213[24] )
  i3212.pivot = new pc.Vec2( i3213[25], i3213[26] )
  i3212.textureRectOffset = new pc.Vec2( i3213[27], i3213[28] )
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3215 = data
  i3214.name = i3215[0]
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3217 = data
  i3216.name = i3217[0]
  i3216.bytes64 = i3217[1]
  i3216.data = i3217[2]
  return i3216
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3218 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3219 = data
  i3218.hashCode = i3219[0]
  request.r(i3219[1], i3219[2], 0, i3218, 'material')
  i3218.materialHashCode = i3219[3]
  request.r(i3219[4], i3219[5], 0, i3218, 'atlas')
  i3218.normalStyle = i3219[6]
  i3218.normalSpacingOffset = i3219[7]
  i3218.boldStyle = i3219[8]
  i3218.boldSpacing = i3219[9]
  i3218.italicStyle = i3219[10]
  i3218.tabSize = i3219[11]
  i3218.m_Version = i3219[12]
  i3218.m_SourceFontFileGUID = i3219[13]
  request.r(i3219[14], i3219[15], 0, i3218, 'm_SourceFontFile_EditorRef')
  request.r(i3219[16], i3219[17], 0, i3218, 'm_SourceFontFile')
  i3218.m_AtlasPopulationMode = i3219[18]
  i3218.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3219[19], i3218.m_FaceInfo)
  var i3221 = i3219[20]
  var i3220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.add(request.d('UnityEngine.TextCore.Glyph', i3221[i + 0]));
  }
  i3218.m_GlyphTable = i3220
  var i3223 = i3219[21]
  var i3222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.add(request.d('TMPro.TMP_Character', i3223[i + 0]));
  }
  i3218.m_CharacterTable = i3222
  var i3225 = i3219[22]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 2) {
  request.r(i3225[i + 0], i3225[i + 1], 2, i3224, '')
  }
  i3218.m_AtlasTextures = i3224
  i3218.m_AtlasTextureIndex = i3219[23]
  i3218.m_IsMultiAtlasTexturesEnabled = !!i3219[24]
  i3218.m_ClearDynamicDataOnBuild = !!i3219[25]
  var i3227 = i3219[26]
  var i3226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.add(request.d('UnityEngine.TextCore.GlyphRect', i3227[i + 0]));
  }
  i3218.m_UsedGlyphRects = i3226
  var i3229 = i3219[27]
  var i3228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.add(request.d('UnityEngine.TextCore.GlyphRect', i3229[i + 0]));
  }
  i3218.m_FreeGlyphRects = i3228
  i3218.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3219[28], i3218.m_fontInfo)
  i3218.m_AtlasWidth = i3219[29]
  i3218.m_AtlasHeight = i3219[30]
  i3218.m_AtlasPadding = i3219[31]
  i3218.m_AtlasRenderMode = i3219[32]
  var i3231 = i3219[33]
  var i3230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3231.length; i += 1) {
    i3230.add(request.d('TMPro.TMP_Glyph', i3231[i + 0]));
  }
  i3218.m_glyphInfoList = i3230
  i3218.m_KerningTable = request.d('TMPro.KerningTable', i3219[34], i3218.m_KerningTable)
  i3218.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3219[35], i3218.m_FontFeatureTable)
  var i3233 = i3219[36]
  var i3232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3233.length; i += 2) {
  request.r(i3233[i + 0], i3233[i + 1], 1, i3232, '')
  }
  i3218.fallbackFontAssets = i3232
  var i3235 = i3219[37]
  var i3234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3235.length; i += 2) {
  request.r(i3235[i + 0], i3235[i + 1], 1, i3234, '')
  }
  i3218.m_FallbackFontAssetTable = i3234
  i3218.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3219[38], i3218.m_CreationSettings)
  var i3237 = i3219[39]
  var i3236 = []
  for(var i = 0; i < i3237.length; i += 1) {
    i3236.push( request.d('TMPro.TMP_FontWeightPair', i3237[i + 0]) );
  }
  i3218.m_FontWeightTable = i3236
  var i3239 = i3219[40]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( request.d('TMPro.TMP_FontWeightPair', i3239[i + 0]) );
  }
  i3218.fontWeights = i3238
  return i3218
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3241 = data
  i3240.m_FaceIndex = i3241[0]
  i3240.m_FamilyName = i3241[1]
  i3240.m_StyleName = i3241[2]
  i3240.m_PointSize = i3241[3]
  i3240.m_Scale = i3241[4]
  i3240.m_UnitsPerEM = i3241[5]
  i3240.m_LineHeight = i3241[6]
  i3240.m_AscentLine = i3241[7]
  i3240.m_CapLine = i3241[8]
  i3240.m_MeanLine = i3241[9]
  i3240.m_Baseline = i3241[10]
  i3240.m_DescentLine = i3241[11]
  i3240.m_SuperscriptOffset = i3241[12]
  i3240.m_SuperscriptSize = i3241[13]
  i3240.m_SubscriptOffset = i3241[14]
  i3240.m_SubscriptSize = i3241[15]
  i3240.m_UnderlineOffset = i3241[16]
  i3240.m_UnderlineThickness = i3241[17]
  i3240.m_StrikethroughOffset = i3241[18]
  i3240.m_StrikethroughThickness = i3241[19]
  i3240.m_TabWidth = i3241[20]
  return i3240
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3245 = data
  i3244.m_Index = i3245[0]
  i3244.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3245[1], i3244.m_Metrics)
  i3244.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3245[2], i3244.m_GlyphRect)
  i3244.m_Scale = i3245[3]
  i3244.m_AtlasIndex = i3245[4]
  i3244.m_ClassDefinitionType = i3245[5]
  return i3244
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3247 = data
  i3246.m_Width = i3247[0]
  i3246.m_Height = i3247[1]
  i3246.m_HorizontalBearingX = i3247[2]
  i3246.m_HorizontalBearingY = i3247[3]
  i3246.m_HorizontalAdvance = i3247[4]
  return i3246
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3248 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3249 = data
  i3248.m_X = i3249[0]
  i3248.m_Y = i3249[1]
  i3248.m_Width = i3249[2]
  i3248.m_Height = i3249[3]
  return i3248
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3252 = root || request.c( 'TMPro.TMP_Character' )
  var i3253 = data
  i3252.m_ElementType = i3253[0]
  i3252.m_Unicode = i3253[1]
  i3252.m_GlyphIndex = i3253[2]
  i3252.m_Scale = i3253[3]
  return i3252
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3258 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3259 = data
  i3258.Name = i3259[0]
  i3258.PointSize = i3259[1]
  i3258.Scale = i3259[2]
  i3258.CharacterCount = i3259[3]
  i3258.LineHeight = i3259[4]
  i3258.Baseline = i3259[5]
  i3258.Ascender = i3259[6]
  i3258.CapHeight = i3259[7]
  i3258.Descender = i3259[8]
  i3258.CenterLine = i3259[9]
  i3258.SuperscriptOffset = i3259[10]
  i3258.SubscriptOffset = i3259[11]
  i3258.SubSize = i3259[12]
  i3258.Underline = i3259[13]
  i3258.UnderlineThickness = i3259[14]
  i3258.strikethrough = i3259[15]
  i3258.strikethroughThickness = i3259[16]
  i3258.TabWidth = i3259[17]
  i3258.Padding = i3259[18]
  i3258.AtlasWidth = i3259[19]
  i3258.AtlasHeight = i3259[20]
  return i3258
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3262 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3263 = data
  i3262.id = i3263[0]
  i3262.x = i3263[1]
  i3262.y = i3263[2]
  i3262.width = i3263[3]
  i3262.height = i3263[4]
  i3262.xOffset = i3263[5]
  i3262.yOffset = i3263[6]
  i3262.xAdvance = i3263[7]
  i3262.scale = i3263[8]
  return i3262
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3264 = root || request.c( 'TMPro.KerningTable' )
  var i3265 = data
  var i3267 = i3265[0]
  var i3266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.add(request.d('TMPro.KerningPair', i3267[i + 0]));
  }
  i3264.kerningPairs = i3266
  return i3264
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3270 = root || request.c( 'TMPro.KerningPair' )
  var i3271 = data
  i3270.xOffset = i3271[0]
  i3270.m_FirstGlyph = i3271[1]
  i3270.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3271[2], i3270.m_FirstGlyphAdjustments)
  i3270.m_SecondGlyph = i3271[3]
  i3270.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3271[4], i3270.m_SecondGlyphAdjustments)
  i3270.m_IgnoreSpacingAdjustments = !!i3271[5]
  return i3270
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3272 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3273 = data
  var i3275 = i3273[0]
  var i3274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3275[i + 0]));
  }
  i3272.m_GlyphPairAdjustmentRecords = i3274
  return i3272
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3278 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3279 = data
  i3278.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3279[0], i3278.m_FirstAdjustmentRecord)
  i3278.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3279[1], i3278.m_SecondAdjustmentRecord)
  i3278.m_FeatureLookupFlags = i3279[2]
  return i3278
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3280 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3281 = data
  i3280.m_GlyphIndex = i3281[0]
  i3280.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3281[1], i3280.m_GlyphValueRecord)
  return i3280
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3282 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3283 = data
  i3282.m_XPlacement = i3283[0]
  i3282.m_YPlacement = i3283[1]
  i3282.m_XAdvance = i3283[2]
  i3282.m_YAdvance = i3283[3]
  return i3282
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3286 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3287 = data
  i3286.sourceFontFileName = i3287[0]
  i3286.sourceFontFileGUID = i3287[1]
  i3286.pointSizeSamplingMode = i3287[2]
  i3286.pointSize = i3287[3]
  i3286.padding = i3287[4]
  i3286.packingMode = i3287[5]
  i3286.atlasWidth = i3287[6]
  i3286.atlasHeight = i3287[7]
  i3286.characterSetSelectionMode = i3287[8]
  i3286.characterSequence = i3287[9]
  i3286.referencedFontAssetGUID = i3287[10]
  i3286.referencedTextAssetGUID = i3287[11]
  i3286.fontStyle = i3287[12]
  i3286.fontStyleModifier = i3287[13]
  i3286.renderMode = i3287[14]
  i3286.includeFontFeatures = !!i3287[15]
  return i3286
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3290 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3291 = data
  request.r(i3291[0], i3291[1], 0, i3290, 'regularTypeface')
  request.r(i3291[2], i3291[3], 0, i3290, 'italicTypeface')
  return i3290
}

Deserializers["TileSO"] = function (request, data, root) {
  var i3292 = root || request.c( 'TileSO' )
  var i3293 = data
  request.r(i3293[0], i3293[1], 0, i3292, 'icon')
  return i3292
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3294 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3295 = data
  i3294.hashCode = i3295[0]
  request.r(i3295[1], i3295[2], 0, i3294, 'material')
  i3294.materialHashCode = i3295[3]
  request.r(i3295[4], i3295[5], 0, i3294, 'spriteSheet')
  var i3297 = i3295[6]
  var i3296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3297.length; i += 1) {
    i3296.add(request.d('TMPro.TMP_Sprite', i3297[i + 0]));
  }
  i3294.spriteInfoList = i3296
  var i3299 = i3295[7]
  var i3298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3299.length; i += 2) {
  request.r(i3299[i + 0], i3299[i + 1], 1, i3298, '')
  }
  i3294.fallbackSpriteAssets = i3298
  i3294.m_Version = i3295[8]
  i3294.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3295[9], i3294.m_FaceInfo)
  var i3301 = i3295[10]
  var i3300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.add(request.d('TMPro.TMP_SpriteCharacter', i3301[i + 0]));
  }
  i3294.m_SpriteCharacterTable = i3300
  var i3303 = i3295[11]
  var i3302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.add(request.d('TMPro.TMP_SpriteGlyph', i3303[i + 0]));
  }
  i3294.m_SpriteGlyphTable = i3302
  return i3294
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3306 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3307 = data
  i3306.name = i3307[0]
  i3306.hashCode = i3307[1]
  i3306.unicode = i3307[2]
  i3306.pivot = new pc.Vec2( i3307[3], i3307[4] )
  request.r(i3307[5], i3307[6], 0, i3306, 'sprite')
  i3306.id = i3307[7]
  i3306.x = i3307[8]
  i3306.y = i3307[9]
  i3306.width = i3307[10]
  i3306.height = i3307[11]
  i3306.xOffset = i3307[12]
  i3306.yOffset = i3307[13]
  i3306.xAdvance = i3307[14]
  i3306.scale = i3307[15]
  return i3306
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3312 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3313 = data
  i3312.m_Name = i3313[0]
  i3312.m_HashCode = i3313[1]
  i3312.m_ElementType = i3313[2]
  i3312.m_Unicode = i3313[3]
  i3312.m_GlyphIndex = i3313[4]
  i3312.m_Scale = i3313[5]
  return i3312
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3316 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3317 = data
  request.r(i3317[0], i3317[1], 0, i3316, 'sprite')
  i3316.m_Index = i3317[2]
  i3316.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3317[3], i3316.m_Metrics)
  i3316.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3317[4], i3316.m_GlyphRect)
  i3316.m_Scale = i3317[5]
  i3316.m_AtlasIndex = i3317[6]
  i3316.m_ClassDefinitionType = i3317[7]
  return i3316
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3318 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3319 = data
  var i3321 = i3319[0]
  var i3320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.add(request.d('TMPro.TMP_Style', i3321[i + 0]));
  }
  i3318.m_StyleList = i3320
  return i3318
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3324 = root || request.c( 'TMPro.TMP_Style' )
  var i3325 = data
  i3324.m_Name = i3325[0]
  i3324.m_HashCode = i3325[1]
  i3324.m_OpeningDefinition = i3325[2]
  i3324.m_ClosingDefinition = i3325[3]
  i3324.m_OpeningTagArray = i3325[4]
  i3324.m_ClosingTagArray = i3325[5]
  i3324.m_OpeningTagUnicodeArray = i3325[6]
  i3324.m_ClosingTagUnicodeArray = i3325[7]
  return i3324
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3326 = root || request.c( 'TMPro.TMP_Settings' )
  var i3327 = data
  i3326.m_enableWordWrapping = !!i3327[0]
  i3326.m_enableKerning = !!i3327[1]
  i3326.m_enableExtraPadding = !!i3327[2]
  i3326.m_enableTintAllSprites = !!i3327[3]
  i3326.m_enableParseEscapeCharacters = !!i3327[4]
  i3326.m_EnableRaycastTarget = !!i3327[5]
  i3326.m_GetFontFeaturesAtRuntime = !!i3327[6]
  i3326.m_missingGlyphCharacter = i3327[7]
  i3326.m_warningsDisabled = !!i3327[8]
  request.r(i3327[9], i3327[10], 0, i3326, 'm_defaultFontAsset')
  i3326.m_defaultFontAssetPath = i3327[11]
  i3326.m_defaultFontSize = i3327[12]
  i3326.m_defaultAutoSizeMinRatio = i3327[13]
  i3326.m_defaultAutoSizeMaxRatio = i3327[14]
  i3326.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3327[15], i3327[16] )
  i3326.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3327[17], i3327[18] )
  i3326.m_autoSizeTextContainer = !!i3327[19]
  i3326.m_IsTextObjectScaleStatic = !!i3327[20]
  var i3329 = i3327[21]
  var i3328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3329.length; i += 2) {
  request.r(i3329[i + 0], i3329[i + 1], 1, i3328, '')
  }
  i3326.m_fallbackFontAssets = i3328
  i3326.m_matchMaterialPreset = !!i3327[22]
  request.r(i3327[23], i3327[24], 0, i3326, 'm_defaultSpriteAsset')
  i3326.m_defaultSpriteAssetPath = i3327[25]
  i3326.m_enableEmojiSupport = !!i3327[26]
  i3326.m_MissingCharacterSpriteUnicode = i3327[27]
  i3326.m_defaultColorGradientPresetsPath = i3327[28]
  request.r(i3327[29], i3327[30], 0, i3326, 'm_defaultStyleSheet')
  i3326.m_StyleSheetsResourcePath = i3327[31]
  request.r(i3327[32], i3327[33], 0, i3326, 'm_leadingCharacters')
  request.r(i3327[34], i3327[35], 0, i3326, 'm_followingCharacters')
  i3326.m_UseModernHangulLineBreakingRules = !!i3327[36]
  return i3326
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i3331 = data
  i3330._svcLunaVersion = i3331[0]
  var i3333 = i3331[1]
  var i3332 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.add(request.d(' .  ', i3333[i + 0]));
  }
  i3330._shaderVariants = i3332
  var i3335 = i3331[2]
  var i3334 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i3335.length; i += 1) {
    i3334.add(request.d(' .  ', i3335[i + 0]));
  }
  i3330._usedByLunaBuild = i3334
  var i3337 = i3331[3]
  var i3336 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.add(request.d(' .  ', i3337[i + 0]));
  }
  i3330._includedShaderVariants = i3336
  var i3339 = i3331[4]
  var i3338 = new (System.Collections.Generic.List$1(Bridge.ns(' .  ')))
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.add(request.d(' .  ', i3339[i + 0]));
  }
  i3330._excludedShaderVariants = i3338
  i3330.version = System.Int64(i3331[5])
  var i3341 = i3331[6]
  var i3340 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i3341[i + 0]));
  }
  i3330._shaderParsedShaders = i3340
  var i3343 = i3331[7]
  var i3342 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3343.length; i += 1) {
    i3342.add(i3343[i + 0]);
  }
  i3330._modifiedShaders = i3342
  i3330.invalidShaders = !!i3331[8]
  i3330._cachedShadersPlatform = i3331[9]
  i3330._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i3331[10], i3330._sceneLightData)
  return i3330
}

Deserializers[" .  "] = function (request, data, root) {
  var i3346 = root || request.c( ' .  ' )
  var i3347 = data
  request.r(i3347[0], i3347[1], 0, i3346, 'shader')
  i3346.passType = i3347[2]
  i3346.passId = i3347[3]
  i3346.subShaderIndex = i3347[4]
  i3346.upToDate = !!i3347[5]
  var i3349 = i3347[6]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 1) {
    i3348.push( i3349[i + 0] );
  }
  i3346.keywords = i3348
  return i3346
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i3352 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i3353 = data
  var i3355 = i3353[0]
  var i3354 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i3355[i + 0]));
  }
  i3352.ParsedSubShaders = i3354
  request.r(i3353[1], i3353[2], 0, i3352, 'Shader')
  i3352.ShaderPath = i3353[3]
  var i3357 = i3353[4]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 1) {
    i3356.push( i3357[i + 0] );
  }
  i3352.ShaderDefinedKeywords = i3356
  request.r(i3353[5], i3353[6], 0, i3352, 'fallbackShader')
  var i3359 = i3353[7]
  var i3358 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i3359.length; i += 1) {
    i3358.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i3359[i + 0]));
  }
  i3352.CompilationErrors = i3358
  i3352.shaderCompilerPlatform = i3353[8]
  return i3352
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i3362 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i3363 = data
  i3362.Index = i3363[0]
  var i3365 = i3363[1]
  var i3364 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i3365.length; i += 1) {
    i3364.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i3365[i + 0]));
  }
  i3362.Passes = i3364
  var i3367 = i3363[2]
  var i3366 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i3367[i + 0]));
  }
  i3362.Tags = i3366
  i3362.UsePass = !!i3363[3]
  return i3362
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i3370 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i3371 = data
  i3370.ShaderName = i3371[0]
  var i3373 = i3371[1]
  var i3372 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i3373[i + 0]));
  }
  i3370.ShaderVariants = i3372
  var i3375 = i3371[2]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( i3375[i + 0] );
  }
  i3370.definedKeywords = i3374
  var i3377 = i3371[3]
  var i3376 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i3377[i + 0]));
  }
  i3370.keywordGroups = i3376
  i3370.KeywordsMinimalCardinality = i3371[4]
  i3370.ContainsInvalidVariant = !!i3371[5]
  i3370.ShaderCompilerPlatform = i3371[6]
  i3370.HasDepthReader = !!i3371[7]
  i3370.Id = i3371[8]
  i3370.SubShaderIndex = i3371[9]
  i3370.SerializedObjectId = i3371[10]
  var i3379 = i3371[11]
  var i3378 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i3379[i + 0]));
  }
  i3370.Tags = i3378
  i3370.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i3371[12], i3370.UsePass)
  i3370.GrabPassTextureName = i3371[13]
  i3370.PassShaderRequirements = i3371[14]
  i3370.PlatformMask = i3371[15]
  return i3370
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i3383 = data
  i3382.NoShaderVariant = !!i3383[0]
  i3382.VertexProgram = i3383[1]
  i3382.FragmentProgram = i3383[2]
  i3382.LOD = i3383[3]
  i3382.readDepth = !!i3383[4]
  i3382.Index = i3383[5]
  i3382.PassId = i3383[6]
  i3382.SubShaderIndex = i3383[7]
  var i3385 = i3383[8]
  var i3384 = []
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.push( i3385[i + 0] );
  }
  i3382.Keywords = i3384
  var i3387 = i3383[9]
  var i3386 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i3387.length; i += 1) {
    i3386.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i3387[i + 0]));
  }
  i3382.Tags = i3386
  return i3382
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i3391 = data
  i3390.Key = i3391[0]
  i3390.Value = i3391[1]
  return i3390
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i3395 = data
  var i3397 = i3395[0]
  var i3396 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.add(i3397[i + 0]);
  }
  i3394.Keywords = i3396
  return i3394
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i3399 = data
  i3398.shader = i3399[0]
  i3398.pass = i3399[1]
  return i3398
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i3403 = data
  i3402.ShaderName = i3403[0]
  var i3405 = i3403[1]
  var i3404 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i3405.length; i += 1) {
    i3404.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i3405[i + 0]));
  }
  i3402.Details = i3404
  return i3402
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i3408 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i3409 = data
  i3408.PointLightCount = i3409[0]
  i3408.SpotLightCount = i3409[1]
  i3408.DirectionalLightCount = i3409[2]
  i3408.LightmapOn = !!i3409[3]
  i3408.DirlightmapCombined = !!i3409[4]
  i3408.DirectionalCookieExists = !!i3409[5]
  i3408.PointCookieExists = !!i3409[6]
  i3408.SpotCookieExists = !!i3409[7]
  i3408.AddiitonalLightsKeywordRequired = !!i3409[8]
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3411 = data
  var i3413 = i3411[0]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3413[i + 0]) );
  }
  i3410.files = i3412
  i3410.componentToPrefabIds = i3411[1]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3417 = data
  i3416.path = i3417[0]
  request.r(i3417[1], i3417[2], 0, i3416, 'unityObject')
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3419 = data
  var i3421 = i3419[0]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3421[i + 0]) );
  }
  i3418.scriptsExecutionOrder = i3420
  var i3423 = i3419[1]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3423[i + 0]) );
  }
  i3418.sortingLayers = i3422
  var i3425 = i3419[2]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 1) {
    i3424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3425[i + 0]) );
  }
  i3418.cullingLayers = i3424
  i3418.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3419[3], i3418.timeSettings)
  i3418.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3419[4], i3418.physicsSettings)
  i3418.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3419[5], i3418.physics2DSettings)
  i3418.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3419[6], i3418.qualitySettings)
  i3418.enableRealtimeShadows = !!i3419[7]
  i3418.enableAutoInstancing = !!i3419[8]
  i3418.enableDynamicBatching = !!i3419[9]
  i3418.lightmapEncodingQuality = i3419[10]
  i3418.desiredColorSpace = i3419[11]
  var i3427 = i3419[12]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.push( i3427[i + 0] );
  }
  i3418.allTags = i3426
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3431 = data
  i3430.name = i3431[0]
  i3430.value = i3431[1]
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3435 = data
  i3434.id = i3435[0]
  i3434.name = i3435[1]
  i3434.value = i3435[2]
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3439 = data
  i3438.id = i3439[0]
  i3438.name = i3439[1]
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3441 = data
  i3440.fixedDeltaTime = i3441[0]
  i3440.maximumDeltaTime = i3441[1]
  i3440.timeScale = i3441[2]
  i3440.maximumParticleTimestep = i3441[3]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3443 = data
  i3442.gravity = new pc.Vec3( i3443[0], i3443[1], i3443[2] )
  i3442.defaultSolverIterations = i3443[3]
  i3442.bounceThreshold = i3443[4]
  i3442.autoSyncTransforms = !!i3443[5]
  i3442.autoSimulation = !!i3443[6]
  var i3445 = i3443[7]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 1) {
    i3444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3445[i + 0]) );
  }
  i3442.collisionMatrix = i3444
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3449 = data
  i3448.enabled = !!i3449[0]
  i3448.layerId = i3449[1]
  i3448.otherLayerId = i3449[2]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3451 = data
  request.r(i3451[0], i3451[1], 0, i3450, 'material')
  i3450.gravity = new pc.Vec2( i3451[2], i3451[3] )
  i3450.positionIterations = i3451[4]
  i3450.velocityIterations = i3451[5]
  i3450.velocityThreshold = i3451[6]
  i3450.maxLinearCorrection = i3451[7]
  i3450.maxAngularCorrection = i3451[8]
  i3450.maxTranslationSpeed = i3451[9]
  i3450.maxRotationSpeed = i3451[10]
  i3450.baumgarteScale = i3451[11]
  i3450.baumgarteTOIScale = i3451[12]
  i3450.timeToSleep = i3451[13]
  i3450.linearSleepTolerance = i3451[14]
  i3450.angularSleepTolerance = i3451[15]
  i3450.defaultContactOffset = i3451[16]
  i3450.autoSimulation = !!i3451[17]
  i3450.queriesHitTriggers = !!i3451[18]
  i3450.queriesStartInColliders = !!i3451[19]
  i3450.callbacksOnDisable = !!i3451[20]
  i3450.reuseCollisionCallbacks = !!i3451[21]
  i3450.autoSyncTransforms = !!i3451[22]
  var i3453 = i3451[23]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3453[i + 0]) );
  }
  i3450.collisionMatrix = i3452
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3457 = data
  i3456.enabled = !!i3457[0]
  i3456.layerId = i3457[1]
  i3456.otherLayerId = i3457[2]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3459 = data
  var i3461 = i3459[0]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3461[i + 0]) );
  }
  i3458.qualityLevels = i3460
  var i3463 = i3459[1]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( i3463[i + 0] );
  }
  i3458.names = i3462
  i3458.shadows = i3459[2]
  i3458.anisotropicFiltering = i3459[3]
  i3458.antiAliasing = i3459[4]
  i3458.lodBias = i3459[5]
  i3458.shadowCascades = i3459[6]
  i3458.shadowDistance = i3459[7]
  i3458.shadowmaskMode = i3459[8]
  i3458.shadowProjection = i3459[9]
  i3458.shadowResolution = i3459[10]
  i3458.softParticles = !!i3459[11]
  i3458.softVegetation = !!i3459[12]
  i3458.activeColorSpace = i3459[13]
  i3458.desiredColorSpace = i3459[14]
  i3458.masterTextureLimit = i3459[15]
  i3458.maxQueuedFrames = i3459[16]
  i3458.particleRaycastBudget = i3459[17]
  i3458.pixelLightCount = i3459[18]
  i3458.realtimeReflectionProbes = !!i3459[19]
  i3458.shadowCascade2Split = i3459[20]
  i3458.shadowCascade4Split = new pc.Vec3( i3459[21], i3459[22], i3459[23] )
  i3458.streamingMipmapsActive = !!i3459[24]
  i3458.vSyncCount = i3459[25]
  i3458.asyncUploadBufferSize = i3459[26]
  i3458.asyncUploadTimeSlice = i3459[27]
  i3458.billboardsFaceCameraPosition = !!i3459[28]
  i3458.shadowNearPlaneOffset = i3459[29]
  i3458.streamingMipmapsMemoryBudget = i3459[30]
  i3458.maximumLODLevel = i3459[31]
  i3458.streamingMipmapsAddAllCameras = !!i3459[32]
  i3458.streamingMipmapsMaxLevelReduction = i3459[33]
  i3458.streamingMipmapsRenderersPerFrame = i3459[34]
  i3458.resolutionScalingFixedDPIFactor = i3459[35]
  i3458.streamingMipmapsMaxFileIORequests = i3459[36]
  i3458.currentQualityLevel = i3459[37]
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3469 = data
  i3468.weight = i3469[0]
  i3468.vertices = i3469[1]
  i3468.normals = i3469[2]
  i3468.tangents = i3469[3]
  return i3468
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3470 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3471 = data
  i3470.xPlacement = i3471[0]
  i3470.yPlacement = i3471[1]
  i3470.xAdvance = i3471[2]
  i3470.yAdvance = i3471[3]
  return i3470
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i3475 = data
  i3474.SubShaderIndex = i3475[0]
  i3474.PassId = i3475[1]
  var i3477 = i3475[2]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( i3477[i + 0] );
  }
  i3474.ShaderVariantKeywords = i3476
  var i3479 = i3475[3]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( i3479[i + 0] );
  }
  i3474.Messages = i3478
  return i3474
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[23],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[21],"80":[21],"81":[21],"82":[21],"83":[21],"84":[21],"85":[21],"86":[21],"87":[21],"88":[21],"89":[21],"90":[21],"91":[21],"92":[23],"93":[55],"94":[95],"96":[95],"42":[7],"97":[23],"98":[7],"99":[55,7],"12":[7,13],"100":[7],"101":[13,7],"102":[55],"103":[13,7],"104":[7],"105":[106],"107":[7],"108":[7],"47":[42],"11":[13,7],"109":[7],"46":[42],"110":[7],"50":[7],"49":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"117":[13,7],"118":[7],"119":[7],"120":[7],"121":[7],"122":[13,7],"123":[7],"124":[25],"125":[25],"26":[25],"126":[25],"127":[23],"128":[23],"129":[106],"130":[18],"131":[132],"133":[106]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","QuestSlot","TileSO","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","Tile","UnityEngine.SpriteRenderer","UnityEngine.TrailRenderer","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","TileSlot","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileActions","TilesBag","TileSpawnAnimation","TileMatcher","LoseCondition","WinCondition","InputTouch","EndCard","Quest","TileRandomSpawner","TileSpawner","UnityEngine.GameObject","TileBagSorter","UnityEngine.Canvas","Sounds","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResetLocalPosition","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Button","DeckLayer","TileLocker","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

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

Deserializers.buildID = "7bee37d0-a19a-400b-a8f7-bb34c8267c20";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

