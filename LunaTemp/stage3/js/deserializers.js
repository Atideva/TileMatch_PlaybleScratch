var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2884 = root || request.c( 'UnityEngine.JointSpring' )
  var i2885 = data
  i2884.spring = i2885[0]
  i2884.damper = i2885[1]
  i2884.targetPosition = i2885[2]
  return i2884
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2886 = root || request.c( 'UnityEngine.JointMotor' )
  var i2887 = data
  i2886.m_TargetVelocity = i2887[0]
  i2886.m_Force = i2887[1]
  i2886.m_FreeSpin = i2887[2]
  return i2886
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2888 = root || request.c( 'UnityEngine.JointLimits' )
  var i2889 = data
  i2888.m_Min = i2889[0]
  i2888.m_Max = i2889[1]
  i2888.m_Bounciness = i2889[2]
  i2888.m_BounceMinVelocity = i2889[3]
  i2888.m_ContactDistance = i2889[4]
  i2888.minBounce = i2889[5]
  i2888.maxBounce = i2889[6]
  return i2888
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2890 = root || request.c( 'UnityEngine.JointDrive' )
  var i2891 = data
  i2890.m_PositionSpring = i2891[0]
  i2890.m_PositionDamper = i2891[1]
  i2890.m_MaximumForce = i2891[2]
  return i2890
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2892 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2893 = data
  i2892.m_Spring = i2893[0]
  i2892.m_Damper = i2893[1]
  return i2892
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2894 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2895 = data
  i2894.m_Limit = i2895[0]
  i2894.m_Bounciness = i2895[1]
  i2894.m_ContactDistance = i2895[2]
  return i2894
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2896 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2897 = data
  i2896.m_ExtremumSlip = i2897[0]
  i2896.m_ExtremumValue = i2897[1]
  i2896.m_AsymptoteSlip = i2897[2]
  i2896.m_AsymptoteValue = i2897[3]
  i2896.m_Stiffness = i2897[4]
  return i2896
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2898 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2899 = data
  i2898.m_LowerAngle = i2899[0]
  i2898.m_UpperAngle = i2899[1]
  return i2898
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2900 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2901 = data
  i2900.m_MotorSpeed = i2901[0]
  i2900.m_MaximumMotorTorque = i2901[1]
  return i2900
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2902 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2903 = data
  i2902.m_DampingRatio = i2903[0]
  i2902.m_Frequency = i2903[1]
  i2902.m_Angle = i2903[2]
  return i2902
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2904 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2905 = data
  i2904.m_LowerTranslation = i2905[0]
  i2904.m_UpperTranslation = i2905[1]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2906 = root || new pc.UnityMaterial()
  var i2907 = data
  i2906.name = i2907[0]
  request.r(i2907[1], i2907[2], 0, i2906, 'shader')
  i2906.renderQueue = i2907[3]
  i2906.enableInstancing = !!i2907[4]
  var i2909 = i2907[5]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2909[i + 0]) );
  }
  i2906.floatParameters = i2908
  var i2911 = i2907[6]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2911[i + 0]) );
  }
  i2906.colorParameters = i2910
  var i2913 = i2907[7]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2913[i + 0]) );
  }
  i2906.vectorParameters = i2912
  var i2915 = i2907[8]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2915[i + 0]) );
  }
  i2906.textureParameters = i2914
  var i2917 = i2907[9]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2917[i + 0]) );
  }
  i2906.materialFlags = i2916
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2921 = data
  i2920.name = i2921[0]
  i2920.value = i2921[1]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2925 = data
  i2924.name = i2925[0]
  i2924.value = new pc.Color(i2925[1], i2925[2], i2925[3], i2925[4])
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2929 = data
  i2928.name = i2929[0]
  i2928.value = new pc.Vec4( i2929[1], i2929[2], i2929[3], i2929[4] )
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2933 = data
  i2932.name = i2933[0]
  request.r(i2933[1], i2933[2], 0, i2932, 'value')
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2937 = data
  i2936.name = i2937[0]
  i2936.enabled = !!i2937[1]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2939 = data
  i2938.name = i2939[0]
  i2938.width = i2939[1]
  i2938.height = i2939[2]
  i2938.mipmapCount = i2939[3]
  i2938.anisoLevel = i2939[4]
  i2938.filterMode = i2939[5]
  i2938.hdr = !!i2939[6]
  i2938.format = i2939[7]
  i2938.wrapMode = i2939[8]
  i2938.alphaIsTransparency = !!i2939[9]
  i2938.alphaSource = i2939[10]
  i2938.graphicsFormat = i2939[11]
  i2938.sRGBTexture = !!i2939[12]
  i2938.desiredColorSpace = i2939[13]
  i2938.wrapU = i2939[14]
  i2938.wrapV = i2939[15]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2941 = data
  i2940.position = new pc.Vec3( i2941[0], i2941[1], i2941[2] )
  i2940.scale = new pc.Vec3( i2941[3], i2941[4], i2941[5] )
  i2940.rotation = new pc.Quat(i2941[6], i2941[7], i2941[8], i2941[9])
  return i2940
}

Deserializers["Tile"] = function (request, data, root) {
  var i2942 = root || request.c( 'Tile' )
  var i2943 = data
  request.r(i2943[0], i2943[1], 0, i2942, 'icon')
  request.r(i2943[2], i2943[3], 0, i2942, 'disabledTile')
  var i2945 = i2943[4]
  var i2944 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i2945.length; i += 2) {
  request.r(i2945[i + 0], i2945[i + 1], 1, i2944, '')
  }
  i2942.coverTiles = i2944
  request.r(i2943[5], i2943[6], 0, i2942, 'background')
  i2942.defaultSize = new pc.Vec3( i2943[7], i2943[8], i2943[9] )
  i2942.speed = i2943[10]
  i2942.spawnAnimSize = i2943[11]
  i2942.spawnAnimDuration = i2943[12]
  i2942.moveDuration = i2943[13]
  i2942._isClickable = !!i2943[14]
  i2942.IsInit = !!i2943[15]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2949 = data
  i2948.radius = i2949[0]
  i2948.enabled = !!i2949[1]
  i2948.isTrigger = !!i2949[2]
  i2948.usedByEffector = !!i2949[3]
  i2948.density = i2949[4]
  i2948.offset = new pc.Vec2( i2949[5], i2949[6] )
  request.r(i2949[7], i2949[8], 0, i2948, 'material')
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2951 = data
  i2950.enabled = !!i2951[0]
  request.r(i2951[1], i2951[2], 0, i2950, 'sharedMaterial')
  var i2953 = i2951[3]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 2) {
  request.r(i2953[i + 0], i2953[i + 1], 2, i2952, '')
  }
  i2950.sharedMaterials = i2952
  i2950.receiveShadows = !!i2951[4]
  i2950.shadowCastingMode = i2951[5]
  i2950.sortingLayerID = i2951[6]
  i2950.sortingOrder = i2951[7]
  i2950.lightmapIndex = i2951[8]
  i2950.lightmapSceneIndex = i2951[9]
  i2950.lightmapScaleOffset = new pc.Vec4( i2951[10], i2951[11], i2951[12], i2951[13] )
  i2950.lightProbeUsage = i2951[14]
  i2950.reflectionProbeUsage = i2951[15]
  i2950.color = new pc.Color(i2951[16], i2951[17], i2951[18], i2951[19])
  request.r(i2951[20], i2951[21], 0, i2950, 'sprite')
  i2950.flipX = !!i2951[22]
  i2950.flipY = !!i2951[23]
  i2950.drawMode = i2951[24]
  i2950.size = new pc.Vec2( i2951[25], i2951[26] )
  i2950.tileMode = i2951[27]
  i2950.adaptiveModeThreshold = i2951[28]
  i2950.maskInteraction = i2951[29]
  i2950.spriteSortPoint = i2951[30]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2957 = data
  i2956.name = i2957[0]
  i2956.tagId = i2957[1]
  i2956.enabled = !!i2957[2]
  i2956.isStatic = !!i2957[3]
  i2956.layer = i2957[4]
  return i2956
}

Deserializers["TileSlot"] = function (request, data, root) {
  var i2958 = root || request.c( 'TileSlot' )
  var i2959 = data
  i2958.ID = i2959[0]
  request.r(i2959[1], i2959[2], 0, i2958, 'Tile')
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2961 = data
  i2960.name = i2961[0]
  i2960.index = i2961[1]
  i2960.startup = !!i2961[2]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2963 = data
  i2962.enabled = !!i2963[0]
  i2962.aspect = i2963[1]
  i2962.orthographic = !!i2963[2]
  i2962.orthographicSize = i2963[3]
  i2962.backgroundColor = new pc.Color(i2963[4], i2963[5], i2963[6], i2963[7])
  i2962.nearClipPlane = i2963[8]
  i2962.farClipPlane = i2963[9]
  i2962.fieldOfView = i2963[10]
  i2962.depth = i2963[11]
  i2962.clearFlags = i2963[12]
  i2962.cullingMask = i2963[13]
  i2962.rect = i2963[14]
  request.r(i2963[15], i2963[16], 0, i2962, 'targetTexture')
  i2962.usePhysicalProperties = !!i2963[17]
  i2962.focalLength = i2963[18]
  i2962.sensorSize = new pc.Vec2( i2963[19], i2963[20] )
  i2962.lensShift = new pc.Vec2( i2963[21], i2963[22] )
  i2962.gateFit = i2963[23]
  return i2962
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2964 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2965 = data
  request.r(i2965[0], i2965[1], 0, i2964, 'm_FirstSelected')
  i2964.m_sendNavigationEvents = !!i2965[2]
  i2964.m_DragThreshold = i2965[3]
  return i2964
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2966 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2967 = data
  i2966.m_HorizontalAxis = i2967[0]
  i2966.m_VerticalAxis = i2967[1]
  i2966.m_SubmitButton = i2967[2]
  i2966.m_CancelButton = i2967[3]
  i2966.m_InputActionsPerSecond = i2967[4]
  i2966.m_RepeatDelay = i2967[5]
  i2966.m_ForceModuleActive = !!i2967[6]
  i2966.m_SendPointerHoverToParent = !!i2967[7]
  return i2966
}

Deserializers["Game"] = function (request, data, root) {
  var i2968 = root || request.c( 'Game' )
  var i2969 = data
  request.r(i2969[0], i2969[1], 0, i2968, 'deck')
  request.r(i2969[2], i2969[3], 0, i2968, 'spawnRandom')
  request.r(i2969[4], i2969[5], 0, i2968, 'actions')
  request.r(i2969[6], i2969[7], 0, i2968, 'locker')
  request.r(i2969[8], i2969[9], 0, i2968, 'bag')
  request.r(i2969[10], i2969[11], 0, i2968, 'spawnAnimation')
  request.r(i2969[12], i2969[13], 0, i2968, 'matchCondition')
  request.r(i2969[14], i2969[15], 0, i2968, 'loseCondition')
  request.r(i2969[16], i2969[17], 0, i2968, 'winCondition')
  request.r(i2969[18], i2969[19], 0, i2968, 'input')
  i2968.tileToSpawn = i2969[20]
  i2968.tilesInScene = i2969[21]
  i2968.randomTiles = !!i2969[22]
  var i2971 = i2969[23]
  var i2970 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i2971.length; i += 2) {
  request.r(i2971[i + 0], i2971[i + 1], 1, i2970, '')
  }
  i2968.tiles = i2970
  return i2968
}

Deserializers["TileSpawner"] = function (request, data, root) {
  var i2972 = root || request.c( 'TileSpawner' )
  var i2973 = data
  request.r(i2973[0], i2973[1], 0, i2972, 'prefab')
  var i2975 = i2973[2]
  var i2974 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i2975.length; i += 2) {
  request.r(i2975[i + 0], i2975[i + 1], 1, i2974, '')
  }
  i2972.spawned = i2974
  i2972.hideAtSpawn = !!i2973[3]
  i2972.spawnRate = i2973[4]
  var i2977 = i2973[5]
  var i2976 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.add(request.d('TileData', i2977[i + 0]));
  }
  i2972.level = i2976
  return i2972
}

Deserializers["TileData"] = function (request, data, root) {
  var i2980 = root || request.c( 'TileData' )
  var i2981 = data
  request.r(i2981[0], i2981[1], 0, i2980, 'tile')
  i2980.amount = i2981[2]
  return i2980
}

Deserializers["TileRandomSpawner"] = function (request, data, root) {
  var i2982 = root || request.c( 'TileRandomSpawner' )
  var i2983 = data
  i2982.spawnRate = i2983[0]
  var i2985 = i2983[1]
  var i2984 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i2985.length; i += 2) {
  request.r(i2985[i + 0], i2985[i + 1], 1, i2984, '')
  }
  i2982.spawned = i2984
  var i2987 = i2983[2]
  var i2986 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.add(request.d('TileData', i2987[i + 0]));
  }
  i2982.level = i2986
  return i2982
}

Deserializers["TileSpawnAnimation"] = function (request, data, root) {
  var i2988 = root || request.c( 'TileSpawnAnimation' )
  var i2989 = data
  i2988.delayBetweenLines = i2989[0]
  i2988.delayBetweenTiles = i2989[1]
  i2988.delayBetweenLayers = i2989[2]
  return i2988
}

Deserializers["TileActions"] = function (request, data, root) {
  var i2990 = root || request.c( 'TileActions' )
  var i2991 = data
  return i2990
}

Deserializers["TileLocker"] = function (request, data, root) {
  var i2992 = root || request.c( 'TileLocker' )
  var i2993 = data
  i2992.lockDistance = i2993[0]
  return i2992
}

Deserializers["LoseCondition"] = function (request, data, root) {
  var i2994 = root || request.c( 'LoseCondition' )
  var i2995 = data
  return i2994
}

Deserializers["MatchCondition"] = function (request, data, root) {
  var i2996 = root || request.c( 'MatchCondition' )
  var i2997 = data
  var i2999 = i2997[0]
  var i2998 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i2999.length; i += 2) {
  request.r(i2999[i + 0], i2999[i + 1], 1, i2998, '')
  }
  i2996.completeSlots = i2998
  return i2996
}

Deserializers["WinCondition"] = function (request, data, root) {
  var i3000 = root || request.c( 'WinCondition' )
  var i3001 = data
  var i3003 = i3001[0]
  var i3002 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i3003.length; i += 2) {
  request.r(i3003[i + 0], i3003[i + 1], 1, i3002, '')
  }
  i3000.completeSlots = i3002
  return i3000
}

Deserializers["InputTouch"] = function (request, data, root) {
  var i3004 = root || request.c( 'InputTouch' )
  var i3005 = data
  var i3007 = i3005[0]
  var i3006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i3007.length; i += 2) {
    i3006.add(new pc.Vec2( i3007[i + 0], i3007[i + 1] ));
  }
  i3004.touches = i3006
  i3004.touchSize = i3005[1]
  return i3004
}

Deserializers["TileBagSorter"] = function (request, data, root) {
  var i3010 = root || request.c( 'TileBagSorter' )
  var i3011 = data
  i3010.enable = !!i3011[0]
  i3010.intervalSec = i3011[1]
  return i3010
}

Deserializers["EndCard"] = function (request, data, root) {
  var i3012 = root || request.c( 'EndCard' )
  var i3013 = data
  return i3012
}

Deserializers["TilesBag"] = function (request, data, root) {
  var i3014 = root || request.c( 'TilesBag' )
  var i3015 = data
  var i3017 = i3015[0]
  var i3016 = new (System.Collections.Generic.List$1(Bridge.ns('TileSlot')))
  for(var i = 0; i < i3017.length; i += 2) {
  request.r(i3017[i + 0], i3017[i + 1], 1, i3016, '')
  }
  i3014.slots = i3016
  return i3014
}

Deserializers["Deck"] = function (request, data, root) {
  var i3020 = root || request.c( 'Deck' )
  var i3021 = data
  return i3020
}

Deserializers["DeckLayer"] = function (request, data, root) {
  var i3022 = root || request.c( 'DeckLayer' )
  var i3023 = data
  i3022.layer = i3023[0]
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3025 = data
  i3024.pivot = new pc.Vec2( i3025[0], i3025[1] )
  i3024.anchorMin = new pc.Vec2( i3025[2], i3025[3] )
  i3024.anchorMax = new pc.Vec2( i3025[4], i3025[5] )
  i3024.sizeDelta = new pc.Vec2( i3025[6], i3025[7] )
  i3024.anchoredPosition3D = new pc.Vec3( i3025[8], i3025[9], i3025[10] )
  i3024.rotation = new pc.Quat(i3025[11], i3025[12], i3025[13], i3025[14])
  i3024.scale = new pc.Vec3( i3025[15], i3025[16], i3025[17] )
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3027 = data
  i3026.enabled = !!i3027[0]
  i3026.planeDistance = i3027[1]
  i3026.referencePixelsPerUnit = i3027[2]
  i3026.isFallbackOverlay = !!i3027[3]
  i3026.renderMode = i3027[4]
  i3026.renderOrder = i3027[5]
  i3026.sortingLayerName = i3027[6]
  i3026.sortingOrder = i3027[7]
  i3026.scaleFactor = i3027[8]
  request.r(i3027[9], i3027[10], 0, i3026, 'worldCamera')
  i3026.overrideSorting = !!i3027[11]
  i3026.pixelPerfect = !!i3027[12]
  i3026.targetDisplay = i3027[13]
  i3026.overridePixelPerfect = !!i3027[14]
  return i3026
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3028 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3029 = data
  i3028.m_UiScaleMode = i3029[0]
  i3028.m_ReferencePixelsPerUnit = i3029[1]
  i3028.m_ScaleFactor = i3029[2]
  i3028.m_ReferenceResolution = new pc.Vec2( i3029[3], i3029[4] )
  i3028.m_ScreenMatchMode = i3029[5]
  i3028.m_MatchWidthOrHeight = i3029[6]
  i3028.m_PhysicalUnit = i3029[7]
  i3028.m_FallbackScreenDPI = i3029[8]
  i3028.m_DefaultSpriteDPI = i3029[9]
  i3028.m_DynamicPixelsPerUnit = i3029[10]
  i3028.m_PresetInfoIsWorld = !!i3029[11]
  return i3028
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3030 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3031 = data
  i3030.m_IgnoreReversedGraphics = !!i3031[0]
  i3030.m_BlockingObjects = i3031[1]
  i3030.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3031[2] )
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3033 = data
  i3032.cullTransparentMesh = !!i3033[0]
  return i3032
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3034 = root || request.c( 'UnityEngine.UI.Image' )
  var i3035 = data
  request.r(i3035[0], i3035[1], 0, i3034, 'm_Sprite')
  i3034.m_Type = i3035[2]
  i3034.m_PreserveAspect = !!i3035[3]
  i3034.m_FillCenter = !!i3035[4]
  i3034.m_FillMethod = i3035[5]
  i3034.m_FillAmount = i3035[6]
  i3034.m_FillClockwise = !!i3035[7]
  i3034.m_FillOrigin = i3035[8]
  i3034.m_UseSpriteMesh = !!i3035[9]
  i3034.m_PixelsPerUnitMultiplier = i3035[10]
  request.r(i3035[11], i3035[12], 0, i3034, 'm_Material')
  i3034.m_Maskable = !!i3035[13]
  i3034.m_Color = new pc.Color(i3035[14], i3035[15], i3035[16], i3035[17])
  i3034.m_RaycastTarget = !!i3035[18]
  i3034.m_RaycastPadding = new pc.Vec4( i3035[19], i3035[20], i3035[21], i3035[22] )
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3037 = data
  i3036.ambientIntensity = i3037[0]
  i3036.reflectionIntensity = i3037[1]
  i3036.ambientMode = i3037[2]
  i3036.ambientLight = new pc.Color(i3037[3], i3037[4], i3037[5], i3037[6])
  i3036.ambientSkyColor = new pc.Color(i3037[7], i3037[8], i3037[9], i3037[10])
  i3036.ambientGroundColor = new pc.Color(i3037[11], i3037[12], i3037[13], i3037[14])
  i3036.ambientEquatorColor = new pc.Color(i3037[15], i3037[16], i3037[17], i3037[18])
  i3036.fogColor = new pc.Color(i3037[19], i3037[20], i3037[21], i3037[22])
  i3036.fogEndDistance = i3037[23]
  i3036.fogStartDistance = i3037[24]
  i3036.fogDensity = i3037[25]
  i3036.fog = !!i3037[26]
  request.r(i3037[27], i3037[28], 0, i3036, 'skybox')
  i3036.fogMode = i3037[29]
  var i3039 = i3037[30]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3039[i + 0]) );
  }
  i3036.lightmaps = i3038
  i3036.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3037[31], i3036.lightProbes)
  i3036.lightmapsMode = i3037[32]
  i3036.mixedBakeMode = i3037[33]
  i3036.environmentLightingMode = i3037[34]
  i3036.ambientProbe = new pc.SphericalHarmonicsL2(i3037[35])
  i3036.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3037[36])
  i3036.useReferenceAmbientProbe = !!i3037[37]
  request.r(i3037[38], i3037[39], 0, i3036, 'customReflection')
  request.r(i3037[40], i3037[41], 0, i3036, 'defaultReflection')
  i3036.defaultReflectionMode = i3037[42]
  i3036.defaultReflectionResolution = i3037[43]
  i3036.sunLightObjectId = i3037[44]
  i3036.pixelLightCount = i3037[45]
  i3036.defaultReflectionHDR = !!i3037[46]
  i3036.hasLightDataAsset = !!i3037[47]
  i3036.hasManualGenerate = !!i3037[48]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3043 = data
  request.r(i3043[0], i3043[1], 0, i3042, 'lightmapColor')
  request.r(i3043[2], i3043[3], 0, i3042, 'lightmapDirection')
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3044 = root || new UnityEngine.LightProbes()
  var i3045 = data
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3053 = data
  var i3055 = i3053[0]
  var i3054 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3055[i + 0]));
  }
  i3052.ShaderCompilationErrors = i3054
  i3052.name = i3053[1]
  i3052.guid = i3053[2]
  var i3057 = i3053[3]
  var i3056 = []
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.push( i3057[i + 0] );
  }
  i3052.shaderDefinedKeywords = i3056
  var i3059 = i3053[4]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3059[i + 0]) );
  }
  i3052.passes = i3058
  var i3061 = i3053[5]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3061[i + 0]) );
  }
  i3052.usePasses = i3060
  var i3063 = i3053[6]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3063[i + 0]) );
  }
  i3052.defaultParameterValues = i3062
  request.r(i3053[7], i3053[8], 0, i3052, 'unityFallbackShader')
  i3052.readDepth = !!i3053[9]
  i3052.isCreatedByShaderGraph = !!i3053[10]
  i3052.usedBatchUniforms = i3053[11]
  return i3052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3067 = data
  i3066.shaderName = i3067[0]
  i3066.errorMessage = i3067[1]
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3072 = root || new pc.UnityShaderPass()
  var i3073 = data
  i3072.id = i3073[0]
  i3072.subShaderIndex = i3073[1]
  i3072.name = i3073[2]
  i3072.passType = i3073[3]
  i3072.grabPassTextureName = i3073[4]
  i3072.usePass = !!i3073[5]
  i3072.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[6], i3072.zTest)
  i3072.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[7], i3072.zWrite)
  i3072.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[8], i3072.culling)
  i3072.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3073[9], i3072.blending)
  i3072.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3073[10], i3072.alphaBlending)
  i3072.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[11], i3072.colorWriteMask)
  i3072.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[12], i3072.offsetUnits)
  i3072.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[13], i3072.offsetFactor)
  i3072.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[14], i3072.stencilRef)
  i3072.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[15], i3072.stencilReadMask)
  i3072.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3073[16], i3072.stencilWriteMask)
  i3072.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3073[17], i3072.stencilOp)
  i3072.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3073[18], i3072.stencilOpFront)
  i3072.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3073[19], i3072.stencilOpBack)
  var i3075 = i3073[20]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3075[i + 0]) );
  }
  i3072.tags = i3074
  var i3077 = i3073[21]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.push( i3077[i + 0] );
  }
  i3072.passDefinedKeywords = i3076
  var i3079 = i3073[22]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3079[i + 0]) );
  }
  i3072.passDefinedKeywordGroups = i3078
  var i3081 = i3073[23]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3081[i + 0]) );
  }
  i3072.variants = i3080
  var i3083 = i3073[24]
  var i3082 = []
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3083[i + 0]) );
  }
  i3072.excludedVariants = i3082
  i3072.hasDepthReader = !!i3073[25]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3085 = data
  i3084.val = i3085[0]
  i3084.name = i3085[1]
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3087 = data
  i3086.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3087[0], i3086.src)
  i3086.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3087[1], i3086.dst)
  i3086.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3087[2], i3086.op)
  return i3086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3089 = data
  i3088.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3089[0], i3088.pass)
  i3088.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3089[1], i3088.fail)
  i3088.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3089[2], i3088.zFail)
  i3088.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3089[3], i3088.comp)
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3093 = data
  i3092.name = i3093[0]
  i3092.value = i3093[1]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3097 = data
  var i3099 = i3097[0]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( i3099[i + 0] );
  }
  i3096.keywords = i3098
  i3096.hasDiscard = !!i3097[1]
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3103 = data
  i3102.passId = i3103[0]
  i3102.subShaderIndex = i3103[1]
  var i3105 = i3103[2]
  var i3104 = []
  for(var i = 0; i < i3105.length; i += 1) {
    i3104.push( i3105[i + 0] );
  }
  i3102.keywords = i3104
  i3102.vertexProgram = i3103[3]
  i3102.fragmentProgram = i3103[4]
  i3102.compiledForWebGL2 = !!i3103[5]
  i3102.readDepth = !!i3103[6]
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3109 = data
  request.r(i3109[0], i3109[1], 0, i3108, 'shader')
  i3108.pass = i3109[2]
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3113 = data
  i3112.name = i3113[0]
  i3112.type = i3113[1]
  i3112.value = new pc.Vec4( i3113[2], i3113[3], i3113[4], i3113[5] )
  i3112.textureValue = i3113[6]
  i3112.shaderPropertyFlag = i3113[7]
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3115 = data
  i3114.name = i3115[0]
  request.r(i3115[1], i3115[2], 0, i3114, 'texture')
  i3114.aabb = i3115[3]
  i3114.vertices = i3115[4]
  i3114.triangles = i3115[5]
  i3114.textureRect = UnityEngine.Rect.MinMaxRect(i3115[6], i3115[7], i3115[8], i3115[9])
  i3114.packedRect = UnityEngine.Rect.MinMaxRect(i3115[10], i3115[11], i3115[12], i3115[13])
  i3114.border = new pc.Vec4( i3115[14], i3115[15], i3115[16], i3115[17] )
  i3114.transparency = i3115[18]
  i3114.bounds = i3115[19]
  i3114.pixelsPerUnit = i3115[20]
  i3114.textureWidth = i3115[21]
  i3114.textureHeight = i3115[22]
  i3114.nativeSize = new pc.Vec2( i3115[23], i3115[24] )
  i3114.pivot = new pc.Vec2( i3115[25], i3115[26] )
  i3114.textureRectOffset = new pc.Vec2( i3115[27], i3115[28] )
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3117 = data
  i3116.name = i3117[0]
  i3116.ascent = i3117[1]
  i3116.originalLineHeight = i3117[2]
  i3116.fontSize = i3117[3]
  var i3119 = i3117[4]
  var i3118 = []
  for(var i = 0; i < i3119.length; i += 1) {
    i3118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3119[i + 0]) );
  }
  i3116.characterInfo = i3118
  request.r(i3117[5], i3117[6], 0, i3116, 'texture')
  i3116.originalFontSize = i3117[7]
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3123 = data
  i3122.index = i3123[0]
  i3122.advance = i3123[1]
  i3122.bearing = i3123[2]
  i3122.glyphWidth = i3123[3]
  i3122.glyphHeight = i3123[4]
  i3122.minX = i3123[5]
  i3122.maxX = i3123[6]
  i3122.minY = i3123[7]
  i3122.maxY = i3123[8]
  i3122.uvBottomLeftX = i3123[9]
  i3122.uvBottomLeftY = i3123[10]
  i3122.uvBottomRightX = i3123[11]
  i3122.uvBottomRightY = i3123[12]
  i3122.uvTopLeftX = i3123[13]
  i3122.uvTopLeftY = i3123[14]
  i3122.uvTopRightX = i3123[15]
  i3122.uvTopRightY = i3123[16]
  return i3122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3125 = data
  i3124.name = i3125[0]
  i3124.bytes64 = i3125[1]
  i3124.data = i3125[2]
  return i3124
}

Deserializers["TileSO"] = function (request, data, root) {
  var i3126 = root || request.c( 'TileSO' )
  var i3127 = data
  request.r(i3127[0], i3127[1], 0, i3126, 'icon')
  return i3126
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3128 = root || request.c( 'TMPro.TMP_Settings' )
  var i3129 = data
  i3128.m_enableWordWrapping = !!i3129[0]
  i3128.m_enableKerning = !!i3129[1]
  i3128.m_enableExtraPadding = !!i3129[2]
  i3128.m_enableTintAllSprites = !!i3129[3]
  i3128.m_enableParseEscapeCharacters = !!i3129[4]
  i3128.m_EnableRaycastTarget = !!i3129[5]
  i3128.m_GetFontFeaturesAtRuntime = !!i3129[6]
  i3128.m_missingGlyphCharacter = i3129[7]
  i3128.m_warningsDisabled = !!i3129[8]
  request.r(i3129[9], i3129[10], 0, i3128, 'm_defaultFontAsset')
  i3128.m_defaultFontAssetPath = i3129[11]
  i3128.m_defaultFontSize = i3129[12]
  i3128.m_defaultAutoSizeMinRatio = i3129[13]
  i3128.m_defaultAutoSizeMaxRatio = i3129[14]
  i3128.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3129[15], i3129[16] )
  i3128.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3129[17], i3129[18] )
  i3128.m_autoSizeTextContainer = !!i3129[19]
  i3128.m_IsTextObjectScaleStatic = !!i3129[20]
  var i3131 = i3129[21]
  var i3130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3131.length; i += 2) {
  request.r(i3131[i + 0], i3131[i + 1], 1, i3130, '')
  }
  i3128.m_fallbackFontAssets = i3130
  i3128.m_matchMaterialPreset = !!i3129[22]
  request.r(i3129[23], i3129[24], 0, i3128, 'm_defaultSpriteAsset')
  i3128.m_defaultSpriteAssetPath = i3129[25]
  i3128.m_enableEmojiSupport = !!i3129[26]
  i3128.m_MissingCharacterSpriteUnicode = i3129[27]
  i3128.m_defaultColorGradientPresetsPath = i3129[28]
  request.r(i3129[29], i3129[30], 0, i3128, 'm_defaultStyleSheet')
  i3128.m_StyleSheetsResourcePath = i3129[31]
  request.r(i3129[32], i3129[33], 0, i3128, 'm_leadingCharacters')
  request.r(i3129[34], i3129[35], 0, i3128, 'm_followingCharacters')
  i3128.m_UseModernHangulLineBreakingRules = !!i3129[36]
  return i3128
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3134 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3135 = data
  i3134.hashCode = i3135[0]
  request.r(i3135[1], i3135[2], 0, i3134, 'material')
  i3134.materialHashCode = i3135[3]
  request.r(i3135[4], i3135[5], 0, i3134, 'atlas')
  i3134.normalStyle = i3135[6]
  i3134.normalSpacingOffset = i3135[7]
  i3134.boldStyle = i3135[8]
  i3134.boldSpacing = i3135[9]
  i3134.italicStyle = i3135[10]
  i3134.tabSize = i3135[11]
  i3134.m_Version = i3135[12]
  i3134.m_SourceFontFileGUID = i3135[13]
  request.r(i3135[14], i3135[15], 0, i3134, 'm_SourceFontFile_EditorRef')
  request.r(i3135[16], i3135[17], 0, i3134, 'm_SourceFontFile')
  i3134.m_AtlasPopulationMode = i3135[18]
  i3134.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3135[19], i3134.m_FaceInfo)
  var i3137 = i3135[20]
  var i3136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.add(request.d('UnityEngine.TextCore.Glyph', i3137[i + 0]));
  }
  i3134.m_GlyphTable = i3136
  var i3139 = i3135[21]
  var i3138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.add(request.d('TMPro.TMP_Character', i3139[i + 0]));
  }
  i3134.m_CharacterTable = i3138
  var i3141 = i3135[22]
  var i3140 = []
  for(var i = 0; i < i3141.length; i += 2) {
  request.r(i3141[i + 0], i3141[i + 1], 2, i3140, '')
  }
  i3134.m_AtlasTextures = i3140
  i3134.m_AtlasTextureIndex = i3135[23]
  i3134.m_IsMultiAtlasTexturesEnabled = !!i3135[24]
  i3134.m_ClearDynamicDataOnBuild = !!i3135[25]
  var i3143 = i3135[26]
  var i3142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.add(request.d('UnityEngine.TextCore.GlyphRect', i3143[i + 0]));
  }
  i3134.m_UsedGlyphRects = i3142
  var i3145 = i3135[27]
  var i3144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.add(request.d('UnityEngine.TextCore.GlyphRect', i3145[i + 0]));
  }
  i3134.m_FreeGlyphRects = i3144
  i3134.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3135[28], i3134.m_fontInfo)
  i3134.m_AtlasWidth = i3135[29]
  i3134.m_AtlasHeight = i3135[30]
  i3134.m_AtlasPadding = i3135[31]
  i3134.m_AtlasRenderMode = i3135[32]
  var i3147 = i3135[33]
  var i3146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.add(request.d('TMPro.TMP_Glyph', i3147[i + 0]));
  }
  i3134.m_glyphInfoList = i3146
  i3134.m_KerningTable = request.d('TMPro.KerningTable', i3135[34], i3134.m_KerningTable)
  i3134.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3135[35], i3134.m_FontFeatureTable)
  var i3149 = i3135[36]
  var i3148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3149.length; i += 2) {
  request.r(i3149[i + 0], i3149[i + 1], 1, i3148, '')
  }
  i3134.fallbackFontAssets = i3148
  var i3151 = i3135[37]
  var i3150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3151.length; i += 2) {
  request.r(i3151[i + 0], i3151[i + 1], 1, i3150, '')
  }
  i3134.m_FallbackFontAssetTable = i3150
  i3134.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3135[38], i3134.m_CreationSettings)
  var i3153 = i3135[39]
  var i3152 = []
  for(var i = 0; i < i3153.length; i += 1) {
    i3152.push( request.d('TMPro.TMP_FontWeightPair', i3153[i + 0]) );
  }
  i3134.m_FontWeightTable = i3152
  var i3155 = i3135[40]
  var i3154 = []
  for(var i = 0; i < i3155.length; i += 1) {
    i3154.push( request.d('TMPro.TMP_FontWeightPair', i3155[i + 0]) );
  }
  i3134.fontWeights = i3154
  return i3134
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3156 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3157 = data
  i3156.m_FaceIndex = i3157[0]
  i3156.m_FamilyName = i3157[1]
  i3156.m_StyleName = i3157[2]
  i3156.m_PointSize = i3157[3]
  i3156.m_Scale = i3157[4]
  i3156.m_UnitsPerEM = i3157[5]
  i3156.m_LineHeight = i3157[6]
  i3156.m_AscentLine = i3157[7]
  i3156.m_CapLine = i3157[8]
  i3156.m_MeanLine = i3157[9]
  i3156.m_Baseline = i3157[10]
  i3156.m_DescentLine = i3157[11]
  i3156.m_SuperscriptOffset = i3157[12]
  i3156.m_SuperscriptSize = i3157[13]
  i3156.m_SubscriptOffset = i3157[14]
  i3156.m_SubscriptSize = i3157[15]
  i3156.m_UnderlineOffset = i3157[16]
  i3156.m_UnderlineThickness = i3157[17]
  i3156.m_StrikethroughOffset = i3157[18]
  i3156.m_StrikethroughThickness = i3157[19]
  i3156.m_TabWidth = i3157[20]
  return i3156
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3160 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3161 = data
  i3160.m_Index = i3161[0]
  i3160.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3161[1], i3160.m_Metrics)
  i3160.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3161[2], i3160.m_GlyphRect)
  i3160.m_Scale = i3161[3]
  i3160.m_AtlasIndex = i3161[4]
  i3160.m_ClassDefinitionType = i3161[5]
  return i3160
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3162 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3163 = data
  i3162.m_Width = i3163[0]
  i3162.m_Height = i3163[1]
  i3162.m_HorizontalBearingX = i3163[2]
  i3162.m_HorizontalBearingY = i3163[3]
  i3162.m_HorizontalAdvance = i3163[4]
  return i3162
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3164 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3165 = data
  i3164.m_X = i3165[0]
  i3164.m_Y = i3165[1]
  i3164.m_Width = i3165[2]
  i3164.m_Height = i3165[3]
  return i3164
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3168 = root || request.c( 'TMPro.TMP_Character' )
  var i3169 = data
  i3168.m_ElementType = i3169[0]
  i3168.m_Unicode = i3169[1]
  i3168.m_GlyphIndex = i3169[2]
  i3168.m_Scale = i3169[3]
  return i3168
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3174 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3175 = data
  i3174.Name = i3175[0]
  i3174.PointSize = i3175[1]
  i3174.Scale = i3175[2]
  i3174.CharacterCount = i3175[3]
  i3174.LineHeight = i3175[4]
  i3174.Baseline = i3175[5]
  i3174.Ascender = i3175[6]
  i3174.CapHeight = i3175[7]
  i3174.Descender = i3175[8]
  i3174.CenterLine = i3175[9]
  i3174.SuperscriptOffset = i3175[10]
  i3174.SubscriptOffset = i3175[11]
  i3174.SubSize = i3175[12]
  i3174.Underline = i3175[13]
  i3174.UnderlineThickness = i3175[14]
  i3174.strikethrough = i3175[15]
  i3174.strikethroughThickness = i3175[16]
  i3174.TabWidth = i3175[17]
  i3174.Padding = i3175[18]
  i3174.AtlasWidth = i3175[19]
  i3174.AtlasHeight = i3175[20]
  return i3174
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3178 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3179 = data
  i3178.id = i3179[0]
  i3178.x = i3179[1]
  i3178.y = i3179[2]
  i3178.width = i3179[3]
  i3178.height = i3179[4]
  i3178.xOffset = i3179[5]
  i3178.yOffset = i3179[6]
  i3178.xAdvance = i3179[7]
  i3178.scale = i3179[8]
  return i3178
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3180 = root || request.c( 'TMPro.KerningTable' )
  var i3181 = data
  var i3183 = i3181[0]
  var i3182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3183.length; i += 1) {
    i3182.add(request.d('TMPro.KerningPair', i3183[i + 0]));
  }
  i3180.kerningPairs = i3182
  return i3180
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3186 = root || request.c( 'TMPro.KerningPair' )
  var i3187 = data
  i3186.xOffset = i3187[0]
  i3186.m_FirstGlyph = i3187[1]
  i3186.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3187[2], i3186.m_FirstGlyphAdjustments)
  i3186.m_SecondGlyph = i3187[3]
  i3186.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3187[4], i3186.m_SecondGlyphAdjustments)
  i3186.m_IgnoreSpacingAdjustments = !!i3187[5]
  return i3186
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3188 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3189 = data
  var i3191 = i3189[0]
  var i3190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3191[i + 0]));
  }
  i3188.m_GlyphPairAdjustmentRecords = i3190
  return i3188
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3194 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3195 = data
  i3194.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3195[0], i3194.m_FirstAdjustmentRecord)
  i3194.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3195[1], i3194.m_SecondAdjustmentRecord)
  i3194.m_FeatureLookupFlags = i3195[2]
  return i3194
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3196 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3197 = data
  i3196.m_GlyphIndex = i3197[0]
  i3196.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3197[1], i3196.m_GlyphValueRecord)
  return i3196
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3198 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3199 = data
  i3198.m_XPlacement = i3199[0]
  i3198.m_YPlacement = i3199[1]
  i3198.m_XAdvance = i3199[2]
  i3198.m_YAdvance = i3199[3]
  return i3198
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3200 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3201 = data
  i3200.sourceFontFileName = i3201[0]
  i3200.sourceFontFileGUID = i3201[1]
  i3200.pointSizeSamplingMode = i3201[2]
  i3200.pointSize = i3201[3]
  i3200.padding = i3201[4]
  i3200.packingMode = i3201[5]
  i3200.atlasWidth = i3201[6]
  i3200.atlasHeight = i3201[7]
  i3200.characterSetSelectionMode = i3201[8]
  i3200.characterSequence = i3201[9]
  i3200.referencedFontAssetGUID = i3201[10]
  i3200.referencedTextAssetGUID = i3201[11]
  i3200.fontStyle = i3201[12]
  i3200.fontStyleModifier = i3201[13]
  i3200.renderMode = i3201[14]
  i3200.includeFontFeatures = !!i3201[15]
  return i3200
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3204 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3205 = data
  request.r(i3205[0], i3205[1], 0, i3204, 'regularTypeface')
  request.r(i3205[2], i3205[3], 0, i3204, 'italicTypeface')
  return i3204
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3206 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3207 = data
  i3206.hashCode = i3207[0]
  request.r(i3207[1], i3207[2], 0, i3206, 'material')
  i3206.materialHashCode = i3207[3]
  request.r(i3207[4], i3207[5], 0, i3206, 'spriteSheet')
  var i3209 = i3207[6]
  var i3208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.add(request.d('TMPro.TMP_Sprite', i3209[i + 0]));
  }
  i3206.spriteInfoList = i3208
  var i3211 = i3207[7]
  var i3210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3211.length; i += 2) {
  request.r(i3211[i + 0], i3211[i + 1], 1, i3210, '')
  }
  i3206.fallbackSpriteAssets = i3210
  i3206.m_Version = i3207[8]
  i3206.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3207[9], i3206.m_FaceInfo)
  var i3213 = i3207[10]
  var i3212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3213.length; i += 1) {
    i3212.add(request.d('TMPro.TMP_SpriteCharacter', i3213[i + 0]));
  }
  i3206.m_SpriteCharacterTable = i3212
  var i3215 = i3207[11]
  var i3214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3215.length; i += 1) {
    i3214.add(request.d('TMPro.TMP_SpriteGlyph', i3215[i + 0]));
  }
  i3206.m_SpriteGlyphTable = i3214
  return i3206
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3218 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3219 = data
  i3218.name = i3219[0]
  i3218.hashCode = i3219[1]
  i3218.unicode = i3219[2]
  i3218.pivot = new pc.Vec2( i3219[3], i3219[4] )
  request.r(i3219[5], i3219[6], 0, i3218, 'sprite')
  i3218.id = i3219[7]
  i3218.x = i3219[8]
  i3218.y = i3219[9]
  i3218.width = i3219[10]
  i3218.height = i3219[11]
  i3218.xOffset = i3219[12]
  i3218.yOffset = i3219[13]
  i3218.xAdvance = i3219[14]
  i3218.scale = i3219[15]
  return i3218
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3224 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3225 = data
  i3224.m_Name = i3225[0]
  i3224.m_HashCode = i3225[1]
  i3224.m_ElementType = i3225[2]
  i3224.m_Unicode = i3225[3]
  i3224.m_GlyphIndex = i3225[4]
  i3224.m_Scale = i3225[5]
  return i3224
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3228 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3229 = data
  request.r(i3229[0], i3229[1], 0, i3228, 'sprite')
  i3228.m_Index = i3229[2]
  i3228.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3229[3], i3228.m_Metrics)
  i3228.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3229[4], i3228.m_GlyphRect)
  i3228.m_Scale = i3229[5]
  i3228.m_AtlasIndex = i3229[6]
  i3228.m_ClassDefinitionType = i3229[7]
  return i3228
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3230 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3231 = data
  var i3233 = i3231[0]
  var i3232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3233.length; i += 1) {
    i3232.add(request.d('TMPro.TMP_Style', i3233[i + 0]));
  }
  i3230.m_StyleList = i3232
  return i3230
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3236 = root || request.c( 'TMPro.TMP_Style' )
  var i3237 = data
  i3236.m_Name = i3237[0]
  i3236.m_HashCode = i3237[1]
  i3236.m_OpeningDefinition = i3237[2]
  i3236.m_ClosingDefinition = i3237[3]
  i3236.m_OpeningTagArray = i3237[4]
  i3236.m_ClosingTagArray = i3237[5]
  i3236.m_OpeningTagUnicodeArray = i3237[6]
  i3236.m_ClosingTagUnicodeArray = i3237[7]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3239 = data
  var i3241 = i3239[0]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3241[i + 0]) );
  }
  i3238.files = i3240
  i3238.componentToPrefabIds = i3239[1]
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3245 = data
  i3244.path = i3245[0]
  request.r(i3245[1], i3245[2], 0, i3244, 'unityObject')
  return i3244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3247 = data
  var i3249 = i3247[0]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3249[i + 0]) );
  }
  i3246.scriptsExecutionOrder = i3248
  var i3251 = i3247[1]
  var i3250 = []
  for(var i = 0; i < i3251.length; i += 1) {
    i3250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3251[i + 0]) );
  }
  i3246.sortingLayers = i3250
  var i3253 = i3247[2]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3253[i + 0]) );
  }
  i3246.cullingLayers = i3252
  i3246.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3247[3], i3246.timeSettings)
  i3246.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3247[4], i3246.physicsSettings)
  i3246.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3247[5], i3246.physics2DSettings)
  i3246.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3247[6], i3246.qualitySettings)
  i3246.enableRealtimeShadows = !!i3247[7]
  i3246.enableAutoInstancing = !!i3247[8]
  i3246.enableDynamicBatching = !!i3247[9]
  i3246.lightmapEncodingQuality = i3247[10]
  i3246.desiredColorSpace = i3247[11]
  var i3255 = i3247[12]
  var i3254 = []
  for(var i = 0; i < i3255.length; i += 1) {
    i3254.push( i3255[i + 0] );
  }
  i3246.allTags = i3254
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3259 = data
  i3258.name = i3259[0]
  i3258.value = i3259[1]
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3263 = data
  i3262.id = i3263[0]
  i3262.name = i3263[1]
  i3262.value = i3263[2]
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3267 = data
  i3266.id = i3267[0]
  i3266.name = i3267[1]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3269 = data
  i3268.fixedDeltaTime = i3269[0]
  i3268.maximumDeltaTime = i3269[1]
  i3268.timeScale = i3269[2]
  i3268.maximumParticleTimestep = i3269[3]
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3271 = data
  i3270.gravity = new pc.Vec3( i3271[0], i3271[1], i3271[2] )
  i3270.defaultSolverIterations = i3271[3]
  i3270.bounceThreshold = i3271[4]
  i3270.autoSyncTransforms = !!i3271[5]
  i3270.autoSimulation = !!i3271[6]
  var i3273 = i3271[7]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 1) {
    i3272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3273[i + 0]) );
  }
  i3270.collisionMatrix = i3272
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3277 = data
  i3276.enabled = !!i3277[0]
  i3276.layerId = i3277[1]
  i3276.otherLayerId = i3277[2]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3279 = data
  request.r(i3279[0], i3279[1], 0, i3278, 'material')
  i3278.gravity = new pc.Vec2( i3279[2], i3279[3] )
  i3278.positionIterations = i3279[4]
  i3278.velocityIterations = i3279[5]
  i3278.velocityThreshold = i3279[6]
  i3278.maxLinearCorrection = i3279[7]
  i3278.maxAngularCorrection = i3279[8]
  i3278.maxTranslationSpeed = i3279[9]
  i3278.maxRotationSpeed = i3279[10]
  i3278.baumgarteScale = i3279[11]
  i3278.baumgarteTOIScale = i3279[12]
  i3278.timeToSleep = i3279[13]
  i3278.linearSleepTolerance = i3279[14]
  i3278.angularSleepTolerance = i3279[15]
  i3278.defaultContactOffset = i3279[16]
  i3278.autoSimulation = !!i3279[17]
  i3278.queriesHitTriggers = !!i3279[18]
  i3278.queriesStartInColliders = !!i3279[19]
  i3278.callbacksOnDisable = !!i3279[20]
  i3278.reuseCollisionCallbacks = !!i3279[21]
  i3278.autoSyncTransforms = !!i3279[22]
  var i3281 = i3279[23]
  var i3280 = []
  for(var i = 0; i < i3281.length; i += 1) {
    i3280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3281[i + 0]) );
  }
  i3278.collisionMatrix = i3280
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3285 = data
  i3284.enabled = !!i3285[0]
  i3284.layerId = i3285[1]
  i3284.otherLayerId = i3285[2]
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3287 = data
  var i3289 = i3287[0]
  var i3288 = []
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3289[i + 0]) );
  }
  i3286.qualityLevels = i3288
  var i3291 = i3287[1]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( i3291[i + 0] );
  }
  i3286.names = i3290
  i3286.shadows = i3287[2]
  i3286.anisotropicFiltering = i3287[3]
  i3286.antiAliasing = i3287[4]
  i3286.lodBias = i3287[5]
  i3286.shadowCascades = i3287[6]
  i3286.shadowDistance = i3287[7]
  i3286.shadowmaskMode = i3287[8]
  i3286.shadowProjection = i3287[9]
  i3286.shadowResolution = i3287[10]
  i3286.softParticles = !!i3287[11]
  i3286.softVegetation = !!i3287[12]
  i3286.activeColorSpace = i3287[13]
  i3286.desiredColorSpace = i3287[14]
  i3286.masterTextureLimit = i3287[15]
  i3286.maxQueuedFrames = i3287[16]
  i3286.particleRaycastBudget = i3287[17]
  i3286.pixelLightCount = i3287[18]
  i3286.realtimeReflectionProbes = !!i3287[19]
  i3286.shadowCascade2Split = i3287[20]
  i3286.shadowCascade4Split = new pc.Vec3( i3287[21], i3287[22], i3287[23] )
  i3286.streamingMipmapsActive = !!i3287[24]
  i3286.vSyncCount = i3287[25]
  i3286.asyncUploadBufferSize = i3287[26]
  i3286.asyncUploadTimeSlice = i3287[27]
  i3286.billboardsFaceCameraPosition = !!i3287[28]
  i3286.shadowNearPlaneOffset = i3287[29]
  i3286.streamingMipmapsMemoryBudget = i3287[30]
  i3286.maximumLODLevel = i3287[31]
  i3286.streamingMipmapsAddAllCameras = !!i3287[32]
  i3286.streamingMipmapsMaxLevelReduction = i3287[33]
  i3286.streamingMipmapsRenderersPerFrame = i3287[34]
  i3286.resolutionScalingFixedDPIFactor = i3287[35]
  i3286.streamingMipmapsMaxFileIORequests = i3287[36]
  i3286.currentQualityLevel = i3287[37]
  return i3286
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3294 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3295 = data
  i3294.xPlacement = i3295[0]
  i3294.yPlacement = i3295[1]
  i3294.xAdvance = i3295[2]
  i3294.yAdvance = i3295[3]
  return i3294
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[9],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[9],"76":[77],"78":[79],"80":[79],"31":[30],"81":[9],"82":[30],"83":[77,30],"84":[30,34],"85":[30],"86":[34,30],"87":[77],"88":[34,30],"89":[30],"90":[91],"92":[30],"93":[30],"33":[31],"35":[34,30],"94":[30],"32":[31],"95":[30],"96":[30],"97":[30],"98":[30],"99":[30],"100":[30],"101":[30],"102":[30],"103":[30],"104":[34,30],"105":[30],"106":[30],"107":[30],"108":[30],"109":[34,30],"110":[30],"111":[12],"112":[12],"13":[12],"113":[12],"114":[9],"115":[9],"116":[91],"117":[4],"118":[119],"120":[91]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Tile","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","UnityEngine.Material","UnityEngine.Sprite","TileSlot","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game","Deck","TileRandomSpawner","TileActions","TileLocker","TilesBag","TileSpawnAnimation","MatchCondition","LoseCondition","WinCondition","InputTouch","TileSpawner","TileSO","TileBagSorter","EndCard","DeckLayer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Texture2D","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.44f1";

Deserializers.productName = "Playble_3";

Deserializers.lunaInitializationTime = "10/29/2024 03:59:28";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "Edward";

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

Deserializers.buildID = "997db3ee-73ad-4b79-aa48-9b8c3b48d219";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

