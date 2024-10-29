if ( TRACE ) { TRACE( JSON.parse( '["GameComponent#Init","DeckLayer#Init","DeckLayer#InitTiles","Game#TilesInGame#get","Game#Bag#get","Game#TileMatcher#get","Game#Input#get","Game#Actions#get","Game#init","Game#Start","Game#QuestWin","Game#OnTileMoved","Game#Win","Game#OpenURL","Game#Lose","Game#InitComponents","Game#Spawn","Game#StartGame","Game#ShowDeck","Game#RefreshTiles","Game#OnValidate","QuestSlot#Type#get","QuestSlot#Locked#get","QuestSlot#Complete#get","QuestSlot#init","QuestSlot#Start","QuestSlot#Unlock","QuestSlot#Update","QuestSlot#PlayAnimation","QuestSlot#Animate","QuestSlot#RefreshIcon","ResetLocalPosition#Awake","Tile#IsClickable#get","Tile#Position#get","Tile#IsMoving#get","Tile#Y#get","Tile#Arrive#get","Tile#init","Tile#Awake","Tile#RefreshEditor","Tile#SetContacts","Tile#MoveTo","Tile#SetLayer","Tile#Refresh","Tile#Refresh$1","Tile#StopMove","Tile#Update","Tile#Set","Tile#SpawnAnimation","Tile#PutInBag","Tile#Hide","Tile#Show","Tile#Enable","Tile#Disable","TilesBag#BusySlots#get","TilesBag#HaveEmptySlot#get","TilesBag#EmptySlot#get","TilesBag#NoSpace#get","TilesBag#init","TilesBag#LeftFrom","TilesBag#Awake","TilesBag#Put","TilesBag#Move","TilesBag#Empty","TileSlot#Busy#get","TileSlot#IsEmpty#get","TileSlot#Type#get","TileSlot#Position#get","TileSlot#Empty","TileSlot#Put","TileSO#Icon#get","Deck#Tiles#get","Deck#FirstLayer#get","Deck#SecondLayer#get","Deck#OnInit","Deck#FindLayers","Deck#InitLayers","EndCard#OnInit","EndCard#Show","EndCard#Hide","InputTouch#init","InputTouch#OnInit","InputTouch#Update","LoseCondition#init","LoseCondition#OnInit","LoseCondition#OnBagChange","LoseCondition#Update","LoseCondition#Check","LoseCondition#Lose","Quest#init","Quest#OnInit","Quest#OnMatch","TileActions#init","TileActions#OnInit","TileActions#Disable","TileActions#OnTouchScreen","TileActions#Touched","TileActions#Click","TileActions#Observe","TileActions#MoveFinished","TileBagSorter#NeedsSorting#get","TileBagSorter#init","TileBagSorter#OnInit","TileBagSorter#Sort","TileBagSorter#Sorting","TileBagSorter#SortingSlot","TileLocker#OnInit","TileLocker#Refresh","TileMatcher#Completed#get","TileMatcher#init","TileMatcher#OnInit","TileMatcher#Check","TileMatcher#SameAmount","TileMatcher#Match","TileRandomSpawner#init","TileRandomSpawner#OnInit","TileRandomSpawner#Spawn","TileRandomSpawner#GetRandomEmpty","TileSpawnAnimation#init","TileSpawnAnimation#SpawnAnimation","TileSpawnAnimation#Play","TileSpawnAnimation#OnInit","TileSpawner#init","TileSpawner#OnInit","WinCondition#init","WinCondition#OnInit","WinCondition#Check"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*GameComponent start.*/
    Bridge.define("GameComponent", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Game: null
        },
        methods: {
            /*GameComponent.Init start.*/
            Init: function (game) {
if ( TRACE ) { TRACE( "GameComponent#Init", this ); }

                this.Game = game;
                this.OnInit();
            },
            /*GameComponent.Init end.*/


        }
    });
    /*GameComponent end.*/

    /*DeckBuilder start.*/
    Bridge.define("DeckBuilder", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*DeckBuilder end.*/

    /*DeckLayer start.*/
    Bridge.define("DeckLayer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _deck: null,
            Tiles: null,
            Layer: 0
        },
        methods: {
            /*DeckLayer.Init start.*/
            Init: function (deck, layer) {
if ( TRACE ) { TRACE( "DeckLayer#Init", this ); }

                var pos = this.transform.position.$clone();
                this.transform.position = new pc.Vec3( pos.x, pos.y, layer );
                this._deck = deck;
                this.InitTiles(layer);
            },
            /*DeckLayer.Init end.*/

            /*DeckLayer.InitTiles start.*/
            InitTiles: function (layer) {
if ( TRACE ) { TRACE( "DeckLayer#InitTiles", this ); }

                var $t;
                this.Layer = layer;
                var groupedByYPosition = (System.Linq.Enumerable.from(this.Tiles, Tile).groupBy(function (tile) {
                        return tile.Y;
                    }).select(function (group) {
                    return group.toList(Tile);
                })).toList(System.Collections.Generic.List$1(Tile));
                for (var i = 0; i < groupedByYPosition.Count; i = (i + 1) | 0) {
                    var lineId = Bridge.Int.mul(i, 10);
                    var group2 = groupedByYPosition.getItem(i);
                    $t = Bridge.getEnumerator(group2);
                    try {
                        while ($t.moveNext()) {
                            var tile2 = $t.Current;
                            tile2.SetLayer(this.Layer, lineId);
                            tile2.Hide();
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*DeckLayer.InitTiles end.*/


        }
    });
    /*DeckLayer end.*/

    /*Game start.*/
    Bridge.define("Game", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            autoGameOverInSeconds: 0,
            deck: null,
            actions: null,
            locker: null,
            bag: null,
            spawnAnimation: null,
            tileMatcher: null,
            loseCondition: null,
            winCondition: null,
            input: null,
            endCard: null,
            quest: null,
            useRandom: false,
            spawnRandom: null,
            tileToSpawn: 0,
            tilesInScene: 0,
            tilesInGame: null,
            _isGameEnded: false
        },
        props: {
            TilesInGame: {
                get: function () {
if ( TRACE ) { TRACE( "Game#TilesInGame#get", this ); }

                    return this.tilesInGame;
                }
            },
            Bag: {
                get: function () {
if ( TRACE ) { TRACE( "Game#Bag#get", this ); }

                    return this.bag;
                }
            },
            TileMatcher: {
                get: function () {
if ( TRACE ) { TRACE( "Game#TileMatcher#get", this ); }

                    return this.tileMatcher;
                }
            },
            Input: {
                get: function () {
if ( TRACE ) { TRACE( "Game#Input#get", this ); }

                    return this.input;
                }
            },
            Actions: {
                get: function () {
if ( TRACE ) { TRACE( "Game#Actions#get", this ); }

                    return this.actions;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Game#init", this ); }

                this.autoGameOverInSeconds = 30.0;
                this.tilesInGame = new (System.Collections.Generic.List$1(Tile)).ctor();
            }
        },
        methods: {
            /*Game.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Game#Start", this ); }

                this.InitComponents();
                this.Invoke("Win", this.autoGameOverInSeconds);
                this.Invoke(this.useRandom ? "Spawn" : "StartGame", 0.01);
                this.quest.addOnWin(Bridge.fn.cacheBind(this, this.QuestWin));
                this.winCondition.addOnWin(Bridge.fn.cacheBind(this, this.Win));
                this.loseCondition.addOnLose(Bridge.fn.cacheBind(this, this.Lose));
                this.actions.addOnMoveStart(Bridge.fn.cacheBind(this, this.OnTileMoved));
            },
            /*Game.Start end.*/

            /*Game.QuestWin start.*/
            QuestWin: function () {
if ( TRACE ) { TRACE( "Game#QuestWin", this ); }

                if (!this._isGameEnded) {
                    this._isGameEnded = true;
                    this.Invoke("Win", 1.0);
                }
            },
            /*Game.QuestWin end.*/

            /*Game.OnTileMoved start.*/
            OnTileMoved: function (obj) {
if ( TRACE ) { TRACE( "Game#OnTileMoved", this ); }

                this.RefreshTiles();
            },
            /*Game.OnTileMoved end.*/

            /*Game.Win start.*/
            Win: function () {
if ( TRACE ) { TRACE( "Game#Win", this ); }

                if (!this._isGameEnded) {
                    this._isGameEnded = true;
                    this.endCard.Show();
                    this.actions.Disable();
                    Luna.Unity.LifeCycle.GameEnded();
                    Luna.Unity.Analytics.LogEvent$1("Game win", 0);
                    UnityEngine.Debug.Log$1("Game win!");
                }
            },
            /*Game.Win end.*/

            /*Game.OpenURL start.*/
            OpenURL: function () {
if ( TRACE ) { TRACE( "Game#OpenURL", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*Game.OpenURL end.*/

            /*Game.Lose start.*/
            Lose: function () {
if ( TRACE ) { TRACE( "Game#Lose", this ); }

                if (!this._isGameEnded) {
                    this._isGameEnded = true;
                    this.endCard.Show();
                    this.actions.Disable();
                    Luna.Unity.LifeCycle.GameEnded();
                    Luna.Unity.Analytics.LogEvent$1("Game lose", 0);
                    UnityEngine.Debug.Log$1("Game lose!");
                }
            },
            /*Game.Lose end.*/

            /*Game.InitComponents start.*/
            InitComponents: function () {
if ( TRACE ) { TRACE( "Game#InitComponents", this ); }

                var $t;
                var find = UnityEngine.Object.FindObjectsOfType(GameComponent);
                var array = find;
                $t = Bridge.getEnumerator(array);
                try {
                    while ($t.moveNext()) {
                        var component = $t.Current;
                        component.Init(this);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Game.InitComponents end.*/

            /*Game.Spawn start.*/
            Spawn: function () {
if ( TRACE ) { TRACE( "Game#Spawn", this ); }

                this.spawnRandom.Spawn(this.deck.Tiles);
                this.spawnRandom.addOnSpawnFinish(Bridge.fn.cacheBind(this, this.ShowDeck));
            },
            /*Game.Spawn end.*/

            /*Game.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "Game#StartGame", this ); }

                this.ShowDeck(this.deck.Tiles);
            },
            /*Game.StartGame end.*/

            /*Game.ShowDeck start.*/
            ShowDeck: function (spawned) {
if ( TRACE ) { TRACE( "Game#ShowDeck", this ); }

                this.tilesInGame = spawned;
                this.spawnAnimation.SpawnAnimation(this.deck.FirstLayer, this.deck.SecondLayer);
                this.actions.Observe(this.deck.Tiles);
                this.RefreshTiles();
            },
            /*Game.ShowDeck end.*/

            /*Game.RefreshTiles start.*/
            RefreshTiles: function () {
if ( TRACE ) { TRACE( "Game#RefreshTiles", this ); }

                this.locker.Refresh(this.tilesInGame, this.deck.Layers);
            },
            /*Game.RefreshTiles end.*/

            /*Game.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "Game#OnValidate", this ); }

                if (!UnityEngine.Application.isPlaying) {
                    this.InitComponents();
                    this.tilesInScene = System.Linq.Enumerable.from(this.deck.Layers, DeckLayer).sum(function (p) {
                            return p.Tiles.length;
                        });
                }
            },
            /*Game.OnValidate end.*/


        }
    });
    /*Game end.*/

    /*QuestSlot start.*/
    Bridge.define("QuestSlot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            type: null,
            amount: 0,
            locked: false,
            icon: null,
            amountTxt: null,
            InitialScale: null,
            MaximumScale: null,
            EndScale: null,
            animationDuration: 0,
            maxSizeTrigger: 0,
            elapsedTime: 0,
            isAnimating: false,
            isShrinking: false
        },
        props: {
            Type: {
                get: function () {
if ( TRACE ) { TRACE( "QuestSlot#Type#get", this ); }

                    return this.type;
                }
            },
            Locked: {
                get: function () {
if ( TRACE ) { TRACE( "QuestSlot#Locked#get", this ); }

                    return this.locked;
                }
            },
            Complete: {
                get: function () {
if ( TRACE ) { TRACE( "QuestSlot#Complete#get", this ); }

                    return !this.locked;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "QuestSlot#init", this ); }

                this.InitialScale = new UnityEngine.Vector3();
                this.MaximumScale = new UnityEngine.Vector3();
                this.EndScale = new UnityEngine.Vector3();
                this.InitialScale = new pc.Vec3( 1, 1, 1 );
                this.MaximumScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 1.5 );
                this.EndScale = new pc.Vec3( 1, 1, 1 );
                this.animationDuration = 1.0;
                this.maxSizeTrigger = 0.7;
            }
        },
        methods: {
            /*QuestSlot.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "QuestSlot#Start", this ); }

                this.RefreshIcon();
            },
            /*QuestSlot.Start end.*/

            /*QuestSlot.Unlock start.*/
            Unlock: function () {
if ( TRACE ) { TRACE( "QuestSlot#Unlock", this ); }

                this.locked = false;
                this.PlayAnimation();
                this.RefreshIcon();
            },
            /*QuestSlot.Unlock end.*/

            /*QuestSlot.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "QuestSlot#Update", this ); }

                if (!UnityEngine.Application.isPlaying) {
                    this.RefreshIcon();
                    if (this.isAnimating) {
                        this.Animate();
                    }
                }
            },
            /*QuestSlot.Update end.*/

            /*QuestSlot.PlayAnimation start.*/
            PlayAnimation: function () {
if ( TRACE ) { TRACE( "QuestSlot#PlayAnimation", this ); }

                this.elapsedTime = 0.0;
                this.isAnimating = true;
                this.isShrinking = false;
                this.transform.localScale = this.InitialScale.$clone();
            },
            /*QuestSlot.PlayAnimation end.*/

            /*QuestSlot.Animate start.*/
            Animate: function () {
if ( TRACE ) { TRACE( "QuestSlot#Animate", this ); }

                this.elapsedTime += UnityEngine.Time.deltaTime;
                var maxSizeTime = this.animationDuration * this.maxSizeTrigger;
                if (!this.isShrinking) {
                    if (this.elapsedTime <= maxSizeTime) {
                        this.transform.localScale = new pc.Vec3().lerp( this.InitialScale, this.MaximumScale, this.elapsedTime / maxSizeTime );
                        if (!(this.elapsedTime < maxSizeTime)) {
                            this.isShrinking = true;
                            this.elapsedTime = 0.0;
                        }
                    }
                } else if (this.elapsedTime <= this.animationDuration * (1.0 - this.maxSizeTrigger)) {
                    this.transform.localScale = new pc.Vec3().lerp( this.MaximumScale, this.EndScale, this.elapsedTime / (this.animationDuration * (1.0 - this.maxSizeTrigger)) );
                    if (this.elapsedTime >= this.animationDuration * (1.0 - this.maxSizeTrigger)) {
                        this.isAnimating = false;
                    }
                }
            },
            /*QuestSlot.Animate end.*/

            /*QuestSlot.RefreshIcon start.*/
            RefreshIcon: function () {
if ( TRACE ) { TRACE( "QuestSlot#RefreshIcon", this ); }

                this.icon.sprite = this.type.Icon;
                this.icon.color = (this.locked ? new pc.Color( 0, 0, 0, 1 ) : new pc.Color( 1, 1, 1, 1 ));
                this.amountTxt.text = (this.type.name || "") + " " + this.amount;
            },
            /*QuestSlot.RefreshIcon end.*/


        }
    });
    /*QuestSlot end.*/

    /*ResetLocalPosition start.*/
    Bridge.define("ResetLocalPosition", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*ResetLocalPosition.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ResetLocalPosition#Awake", this ); }

                this.transform.position = pc.Vec3.ZERO.clone();
            },
            /*ResetLocalPosition.Awake end.*/


        }
    });
    /*ResetLocalPosition end.*/

    /*Tile start.*/
    Bridge.define("Tile", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Type: null,
            lastType: null,
            icon: null,
            disabledTile: null,
            background: null,
            trail: null,
            defaultSize: null,
            speed: 0,
            spawnAnimSize: 0,
            spawnAnimDuration: 0,
            coverTiles: null,
            _isSpawnAnimation: false,
            _spawnTimer: 0,
            _targetPosition: null,
            _timer: 0,
            _isMoving: false,
            _targetSlot: null,
            _isClickable: false,
            iconSort: 0,
            backGroundSort: 0,
            disabledSort: 0,
            trailSort: 0,
            IsInit: false,
            _line: 0,
            Layer: 0,
            InBag: false
        },
        events: {
            OnMoveFinish: null
        },
        props: {
            IsClickable: {
                get: function () {
if ( TRACE ) { TRACE( "Tile#IsClickable#get", this ); }

                    return this._isClickable && !this._isMoving && !this.InBag;
                }
            },
            Position: {
                get: function () {
if ( TRACE ) { TRACE( "Tile#Position#get", this ); }

                    return UnityEngine.Vector2.FromVector3(this.transform.position.$clone());
                }
            },
            IsMoving: {
                get: function () {
if ( TRACE ) { TRACE( "Tile#IsMoving#get", this ); }

                    return this._isMoving;
                }
            },
            Y: {
                get: function () {
if ( TRACE ) { TRACE( "Tile#Y#get", this ); }

                    return this.transform.position.y;
                }
            },
            Arrive: {
                get: function () {
if ( TRACE ) { TRACE( "Tile#Arrive#get", this ); }

                    return UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(this._targetPosition) ).length() < 0.01;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Tile#init", this ); }

                this.defaultSize = new UnityEngine.Vector3();
                this._targetPosition = new UnityEngine.Vector3();
                this.defaultSize = new pc.Vec3( 1, 1, 1 );
                this.spawnAnimSize = 1.5;
                this.spawnAnimDuration = 0.3;
                this.coverTiles = new (System.Collections.Generic.List$1(Tile)).ctor();
                this._spawnTimer = 0.0;
                Bridge.event(this, "OnMoveFinish", function () { });
            }
        },
        methods: {
            /*Tile.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Tile#Awake", this ); }

                this.IsInit = false;
            },
            /*Tile.Awake end.*/

            /*Tile.RefreshEditor start.*/
            RefreshEditor: function () {
if ( TRACE ) { TRACE( "Tile#RefreshEditor", this ); }

                if (!UnityEngine.Application.isPlaying && !(Bridge.referenceEquals(this.lastType, this.Type))) {
                    this.lastType = this.Type;
                    this.Refresh$1(this.Type);
                }
            },
            /*Tile.RefreshEditor end.*/

            /*Tile.SetContacts start.*/
            SetContacts: function (cover) {
if ( TRACE ) { TRACE( "Tile#SetContacts", this ); }

                if (cover != null) {
                    this.coverTiles.clear();
                    this.coverTiles = cover;
                    if (cover.Count > 0) {
                        this.Disable();
                    } else {
                        this.Enable();
                    }
                }
            },
            /*Tile.SetContacts end.*/

            /*Tile.MoveTo start.*/
            MoveTo: function (slot) {
if ( TRACE ) { TRACE( "Tile#MoveTo", this ); }

                this.trail.sortingOrder = 1000;
                this.background.sortingOrder = 1001;
                this.icon.sortingOrder = 1002;
                this._targetSlot = slot;
                this._targetPosition = UnityEngine.Vector3.FromVector2(slot.Position.$clone());
                this._isMoving = true;
            },
            /*Tile.MoveTo end.*/

            /*Tile.SetLayer start.*/
            SetLayer: function (layer, lineID) {
if ( TRACE ) { TRACE( "Tile#SetLayer", this ); }

                this._line = lineID;
                this.Layer = layer;
                this.trailSort = (this.Layer + this._line) | 0;
                this.backGroundSort = (((this.Layer + this._line) | 0) + 1) | 0;
                this.iconSort = (((this.Layer + this._line) | 0) + 2) | 0;
                this.disabledSort = (((this.Layer + this._line) | 0) + 3) | 0;
                this.Refresh();
            },
            /*Tile.SetLayer end.*/

            /*Tile.Refresh start.*/
            Refresh: function () {
if ( TRACE ) { TRACE( "Tile#Refresh", this ); }

                this.trail.sortingOrder = this.trailSort;
                this.background.sortingOrder = this.backGroundSort;
                this.icon.sortingOrder = this.iconSort;
                this.disabledTile.sortingOrder = this.disabledSort;
            },
            /*Tile.Refresh end.*/

            /*Tile.Refresh$1 start.*/
            Refresh$1: function (so) {
if ( TRACE ) { TRACE( "Tile#Refresh$1", this ); }

                var soName = (UnityEngine.Object.op_Implicit(so) ? so.name : "");
                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.name = "Tile - " + (soName || "");
                this.icon.sprite = (UnityEngine.Object.op_Implicit(so) ? so.Icon : null);
            },
            /*Tile.Refresh$1 end.*/

            /*Tile.StopMove start.*/
            StopMove: function () {
if ( TRACE ) { TRACE( "Tile#StopMove", this ); }

                this.transform.position = this._targetPosition.$clone();
                this._isMoving = false;
                this.Refresh();
                this.OnMoveFinish(this, this._targetSlot);
            },
            /*Tile.StopMove end.*/

            /*Tile.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Tile#Update", this ); }

                this.RefreshEditor();
                if (this._isMoving) {
                    this.transform.position = pc.Vec3.moveTowards( UnityEngine.Vector3.FromVector2(this.Position), this._targetPosition, this.speed * UnityEngine.Time.deltaTime );
                    if (this.Arrive) {
                        this.StopMove();
                    }
                }
                if (this._isSpawnAnimation) {
                    this._spawnTimer += UnityEngine.Time.deltaTime;
                    var progress = this._spawnTimer / this.spawnAnimDuration;
                    if (progress <= 0.5) {
                        var scale2 = pc.math.lerp(0.0, this.spawnAnimSize, progress * 2.0);
                        this.transform.localScale = this.defaultSize.$clone().clone().scale( scale2 );
                    } else if (progress <= 1.0) {
                        var scale = pc.math.lerp(this.spawnAnimSize, 1.0, (progress - 0.5) * 2.0);
                        this.transform.localScale = this.defaultSize.$clone().clone().scale( scale );
                    } else {
                        this.transform.localScale = this.defaultSize.$clone();
                        this._isSpawnAnimation = false;
                    }
                }
            },
            /*Tile.Update end.*/

            /*Tile.Set start.*/
            Set: function (so) {
if ( TRACE ) { TRACE( "Tile#Set", this ); }

                this.Refresh$1(so);
                this.Enable();
                this.IsInit = true;
            },
            /*Tile.Set end.*/

            /*Tile.SpawnAnimation start.*/
            SpawnAnimation: function () {
if ( TRACE ) { TRACE( "Tile#SpawnAnimation", this ); }

                this.transform.localScale = pc.Vec3.ZERO.clone();
                this._isSpawnAnimation = true;
                this.Show();
            },
            /*Tile.SpawnAnimation end.*/

            /*Tile.PutInBag start.*/
            PutInBag: function () {
if ( TRACE ) { TRACE( "Tile#PutInBag", this ); }

                this.InBag = true;
            },
            /*Tile.PutInBag end.*/

            /*Tile.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "Tile#Hide", this ); }

                if (UnityEngine.Application.isPlaying) {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                }
            },
            /*Tile.Hide end.*/

            /*Tile.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "Tile#Show", this ); }

                if (UnityEngine.Application.isPlaying) {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
                }
            },
            /*Tile.Show end.*/

            /*Tile.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Tile#Enable", this ); }

                this._isClickable = true;
                this.disabledTile.gameObject.SetActive(false);
            },
            /*Tile.Enable end.*/

            /*Tile.Disable start.*/
            Disable: function () {
if ( TRACE ) { TRACE( "Tile#Disable", this ); }

                this._isClickable = false;
                this.disabledTile.gameObject.SetActive(true);
            },
            /*Tile.Disable end.*/


        },
        overloads: {
            "Refresh(TileSO)": "Refresh$1"
        }
    });
    /*Tile end.*/

    /*TilesBag start.*/
    Bridge.define("TilesBag", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            slots: null
        },
        events: {
            OnPut: null,
            OnRemove: null
        },
        props: {
            BusySlots: {
                get: function () {
if ( TRACE ) { TRACE( "TilesBag#BusySlots#get", this ); }

                    return System.Linq.Enumerable.from(this.slots, TileSlot).where(function (b) {
                            return b.Busy;
                        }).toList(TileSlot);
                }
            },
            HaveEmptySlot: {
                get: function () {
if ( TRACE ) { TRACE( "TilesBag#HaveEmptySlot#get", this ); }

                    return System.Linq.Enumerable.from(this.slots, TileSlot).any(function (s) {
                            return s.IsEmpty;
                        });
                }
            },
            EmptySlot: {
                get: function () {
if ( TRACE ) { TRACE( "TilesBag#EmptySlot#get", this ); }

                    return System.Linq.Enumerable.from(this.slots, TileSlot).firstOrDefault(Bridge.fn.bind(this, function (s) {
                            return s.IsEmpty;
                        }), null);
                }
            },
            NoSpace: {
                get: function () {
if ( TRACE ) { TRACE( "TilesBag#NoSpace#get", this ); }

                    return !this.HaveEmptySlot;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TilesBag#init", this ); }

                this.slots = new (System.Collections.Generic.List$1(TileSlot)).ctor();
                Bridge.event(this, "OnPut", function () { });
                Bridge.event(this, "OnRemove", function () { });
            }
        },
        methods: {
            /*TilesBag.LeftFrom start.*/
            LeftFrom: function (slot) {
if ( TRACE ) { TRACE( "TilesBag#LeftFrom", this ); }

                return (slot.ID <= 0) ? null : this.slots.getItem(((slot.ID - 1) | 0));
            },
            /*TilesBag.LeftFrom end.*/

            /*TilesBag.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TilesBag#Awake", this ); }

                for (var i = 0; i < this.slots.Count; i = (i + 1) | 0) {
                    this.slots.getItem(i).ID = i;
                }
            },
            /*TilesBag.Awake end.*/

            /*TilesBag.Put start.*/
            Put: function (tile, tileSlot) {
if ( TRACE ) { TRACE( "TilesBag#Put", this ); }

                tile.PutInBag();
                tileSlot.Put(tile);
                this.OnPut();
            },
            /*TilesBag.Put end.*/

            /*TilesBag.Move start.*/
            Move: function (from, to) {
if ( TRACE ) { TRACE( "TilesBag#Move", this ); }

                var tile = from.Tile;
                from.Empty();
                to.Put(tile);
            },
            /*TilesBag.Move end.*/

            /*TilesBag.Empty start.*/
            Empty: function (slot) {
if ( TRACE ) { TRACE( "TilesBag#Empty", this ); }

                slot.Empty();
                this.OnRemove();
            },
            /*TilesBag.Empty end.*/


        }
    });
    /*TilesBag end.*/

    /*TileSlot start.*/
    Bridge.define("TileSlot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ID: 0,
            Tile: null
        },
        props: {
            Busy: {
                get: function () {
if ( TRACE ) { TRACE( "TileSlot#Busy#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.Tile);
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "TileSlot#IsEmpty#get", this ); }

                    return !this.Busy;
                }
            },
            Type: {
                get: function () {
if ( TRACE ) { TRACE( "TileSlot#Type#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.Tile) ? this.Tile.Type : null;
                }
            },
            Position: {
                get: function () {
if ( TRACE ) { TRACE( "TileSlot#Position#get", this ); }

                    return UnityEngine.Vector2.FromVector3(this.transform.position.$clone());
                }
            }
        },
        methods: {
            /*TileSlot.Empty start.*/
            Empty: function () {
if ( TRACE ) { TRACE( "TileSlot#Empty", this ); }

                this.Tile = null;
            },
            /*TileSlot.Empty end.*/

            /*TileSlot.Put start.*/
            Put: function (tile) {
if ( TRACE ) { TRACE( "TileSlot#Put", this ); }

                this.Tile = tile;
                this.Tile.MoveTo(this);
            },
            /*TileSlot.Put end.*/


        }
    });
    /*TileSlot end.*/

    /*TileSO start.*/
    Bridge.define("TileSO", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            icon: null
        },
        props: {
            Icon: {
                get: function () {
if ( TRACE ) { TRACE( "TileSO#Icon#get", this ); }

                    return this.icon;
                }
            }
        }
    });
    /*TileSO end.*/

    /*Deck start.*/
    Bridge.define("Deck", {
        inherits: [GameComponent],
        fields: {
            Layers: null
        },
        props: {
            Tiles: {
                get: function () {
if ( TRACE ) { TRACE( "Deck#Tiles#get", this ); }

                    return System.Linq.Enumerable.from(this.Layers, DeckLayer).selectMany(function (layer) {
                            return layer.Tiles;
                        }).toList(Tile);
                }
            },
            FirstLayer: {
                get: function () {
if ( TRACE ) { TRACE( "Deck#FirstLayer#get", this ); }

                    var $t, $t1;
                    return ($t1 = Tile, System.Linq.Enumerable.from(($t = this.Layers)[0].Tiles, $t1).toList($t1));
                }
            },
            SecondLayer: {
                get: function () {
if ( TRACE ) { TRACE( "Deck#SecondLayer#get", this ); }

                    var $t, $t1;
                    return ($t1 = Tile, System.Linq.Enumerable.from(($t = this.Layers)[1].Tiles, $t1).toList($t1));
                }
            }
        },
        methods: {
            /*Deck.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "Deck#OnInit", this ); }

                this.FindLayers();
                this.InitLayers();
            },
            /*Deck.OnInit end.*/

            /*Deck.FindLayers start.*/
            FindLayers: function () {
if ( TRACE ) { TRACE( "Deck#FindLayers", this ); }

                this.Layers = this.GetComponentsInChildren(DeckLayer);
            },
            /*Deck.FindLayers end.*/

            /*Deck.InitLayers start.*/
            InitLayers: function () {
if ( TRACE ) { TRACE( "Deck#InitLayers", this ); }

                var $t;
                for (var i = 0; i < this.Layers.length; i = (i + 1) | 0) {
                    var layer = ($t = this.Layers)[i];
                    var layerID = Bridge.Int.mul((((i + 1) | 0)), 100);
                    layer.Init(this, layerID);
                }
            },
            /*Deck.InitLayers end.*/


        }
    });
    /*Deck end.*/

    /*EndCard start.*/
    Bridge.define("EndCard", {
        inherits: [GameComponent],
        fields: {
            canvas: null
        },
        methods: {
            /*EndCard.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "EndCard#OnInit", this ); }

                if (UnityEngine.Application.isPlaying) {
                    this.Hide();
                }
            },
            /*EndCard.OnInit end.*/

            /*EndCard.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "EndCard#Show", this ); }

                this.canvas.gameObject.SetActive(true);
            },
            /*EndCard.Show end.*/

            /*EndCard.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "EndCard#Hide", this ); }

                this.canvas.gameObject.SetActive(false);
            },
            /*EndCard.Hide end.*/


        }
    });
    /*EndCard end.*/

    /*InputTouch start.*/
    Bridge.define("InputTouch", {
        inherits: [GameComponent],
        fields: {
            inputCooldown: 0,
            touches: null,
            touchSize: 0,
            _cooldown: 0
        },
        events: {
            OnTouchScreen: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "InputTouch#init", this ); }

                this.inputCooldown = 0.1;
                this.touches = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();
                this.touchSize = 0.3;
                Bridge.event(this, "OnTouchScreen", function () { });
            }
        },
        methods: {
            /*InputTouch.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "InputTouch#OnInit", this ); }
 },
            /*InputTouch.OnInit end.*/

            /*InputTouch.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "InputTouch#Update", this ); }

                if (this._cooldown > 0.0) {
                    this._cooldown -= UnityEngine.Time.deltaTime;
                } else if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this._cooldown = this.inputCooldown;
                    this.touches.add(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone()));
                    this.OnTouchScreen(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone()), this.touchSize);
                }
            },
            /*InputTouch.Update end.*/


        }
    });
    /*InputTouch end.*/

    /*LoseCondition start.*/
    Bridge.define("LoseCondition", {
        inherits: [GameComponent],
        fields: {
            _checkDelay: 0
        },
        events: {
            OnLose: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LoseCondition#init", this ); }

                Bridge.event(this, "OnLose", function () { });
            }
        },
        methods: {
            /*LoseCondition.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "LoseCondition#OnInit", this ); }

                this.Game.Bag.addOnPut(Bridge.fn.cacheBind(this, this.OnBagChange));
            },
            /*LoseCondition.OnInit end.*/

            /*LoseCondition.OnBagChange start.*/
            OnBagChange: function () {
if ( TRACE ) { TRACE( "LoseCondition#OnBagChange", this ); }

                this._checkDelay += 1.0;
            },
            /*LoseCondition.OnBagChange end.*/

            /*LoseCondition.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LoseCondition#Update", this ); }

                if (!(this._checkDelay <= 0.0)) {
                    this._checkDelay -= UnityEngine.Time.deltaTime;
                    if (this._checkDelay <= 0.0) {
                        this.Check();
                    }
                }
            },
            /*LoseCondition.Update end.*/

            /*LoseCondition.Check start.*/
            Check: function () {
if ( TRACE ) { TRACE( "LoseCondition#Check", this ); }

                if (!this.Game.Bag.HaveEmptySlot) {
                    this.Lose();
                }
            },
            /*LoseCondition.Check end.*/

            /*LoseCondition.Lose start.*/
            Lose: function () {
if ( TRACE ) { TRACE( "LoseCondition#Lose", this ); }

                this.OnLose();
            },
            /*LoseCondition.Lose end.*/


        }
    });
    /*LoseCondition end.*/

    /*Quest start.*/
    Bridge.define("Quest", {
        inherits: [GameComponent],
        fields: {
            slots: null
        },
        events: {
            OnWin: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Quest#init", this ); }

                this.slots = new (System.Collections.Generic.List$1(QuestSlot)).ctor();
                Bridge.event(this, "OnWin", function () { });
            }
        },
        methods: {
            /*Quest.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "Quest#OnInit", this ); }

                this.Game.TileMatcher.addOnMatch(Bridge.fn.cacheBind(this, this.OnMatch));
            },
            /*Quest.OnInit end.*/

            /*Quest.OnMatch start.*/
            OnMatch: function (bagSlots, type) {
if ( TRACE ) { TRACE( "Quest#OnMatch", this ); }

                var $t;
                if (bagSlots.Count <= 0) {
                    UnityEngine.Debug.Log$1("WTF");
                    return;
                }
                var find = (System.Linq.Enumerable.from(this.slots, QuestSlot).where(function (s) {
                        return Bridge.referenceEquals(s.Type, type);
                    }).where(function (s) {
                    return s.Locked;
                })).toList(QuestSlot);
                $t = Bridge.getEnumerator(find);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        slot.Unlock();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (System.Linq.Enumerable.from(this.slots, QuestSlot).all(function (s) {
                        return s.Complete;
                    })) {
                    this.OnWin();
                }
            },
            /*Quest.OnMatch end.*/


        }
    });
    /*Quest end.*/

    /*TileActions start.*/
    Bridge.define("TileActions", {
        inherits: [GameComponent],
        fields: {
            _slots: null,
            _cam: null,
            isDisable: false,
            clicks: 0
        },
        events: {
            OnMoveStart: null,
            OnMoveFinish: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TileActions#init", this ); }

                Bridge.event(this, "OnMoveStart", function () { });
                Bridge.event(this, "OnMoveFinish", function () { });
            }
        },
        methods: {
            /*TileActions.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileActions#OnInit", this ); }

                this._cam = UnityEngine.Camera.main;
                if (UnityEngine.Application.isPlaying) {
                    this.Game.Input.addOnTouchScreen(Bridge.fn.cacheBind(this, this.OnTouchScreen));
                }
            },
            /*TileActions.OnInit end.*/

            /*TileActions.Disable start.*/
            Disable: function () {
if ( TRACE ) { TRACE( "TileActions#Disable", this ); }

                this.isDisable = true;
            },
            /*TileActions.Disable end.*/

            /*TileActions.OnTouchScreen start.*/
            OnTouchScreen: function (touchPos, touchSize) {
if ( TRACE ) { TRACE( "TileActions#OnTouchScreen", this ); }

                var $t;
                var pos = this._cam.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(touchPos));
                var clickable = System.Linq.Enumerable.from(this._slots, Tile).where(function (s) {
                        return s.IsClickable;
                    });
                $t = Bridge.getEnumerator(clickable, Tile);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        var dist = UnityEngine.Vector2.FromVector3(pos.$clone()).sub( slot.Position ).length();
                        if (dist > touchSize) {
                            continue;
                        }
                        this.Touched(slot);
                        break;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TileActions.OnTouchScreen end.*/

            /*TileActions.Touched start.*/
            Touched: function (tile) {
if ( TRACE ) { TRACE( "TileActions#Touched", this ); }

                if (!this.isDisable) {
                    this.Click(tile);
                }
            },
            /*TileActions.Touched end.*/

            /*TileActions.Click start.*/
            Click: function (tile) {
if ( TRACE ) { TRACE( "TileActions#Click", this ); }

                this.clicks = (this.clicks + 1) | 0;
                Luna.Unity.Analytics.LogEvent$1("Tile clicked", this.clicks);
                if (!this.Game.Bag.NoSpace) {
                    var empty = this.Game.Bag.EmptySlot;
                    this.Game.Bag.Put(tile, empty);
                    this.OnMoveStart(tile);
                    tile.addOnMoveFinish(Bridge.fn.cacheBind(this, this.MoveFinished));
                }
            },
            /*TileActions.Click end.*/

            /*TileActions.Observe start.*/
            Observe: function (tiles) {
if ( TRACE ) { TRACE( "TileActions#Observe", this ); }

                this._slots = tiles;
            },
            /*TileActions.Observe end.*/

            /*TileActions.MoveFinished start.*/
            MoveFinished: function (moving, tileSlot) {
if ( TRACE ) { TRACE( "TileActions#MoveFinished", this ); }

                UnityEngine.Debug.Log$1("Move finished: " + (moving.Type.name || ""), moving.gameObject);
                moving.removeOnMoveFinish(Bridge.fn.cacheBind(this, this.MoveFinished));
                this.OnMoveFinish();
            },
            /*TileActions.MoveFinished end.*/


        }
    });
    /*TileActions end.*/

    /*TileBagSorter start.*/
    Bridge.define("TileBagSorter", {
        inherits: [GameComponent],
        fields: {
            enable: false,
            intervalSec: 0,
            _isSorting: false
        },
        props: {
            NeedsSorting: {
                get: function () {
if ( TRACE ) { TRACE( "TileBagSorter#NeedsSorting#get", this ); }

                    return System.Linq.Enumerable.from(this.Game.Bag.BusySlots, TileSlot).where(function (slot) {
                            return slot.ID !== 0;
                        }).any(Bridge.fn.bind(this, function (slot) {
                        return this.Game.Bag.LeftFrom(slot).IsEmpty;
                    }));
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TileBagSorter#init", this ); }

                this.intervalSec = 0.05;
            }
        },
        methods: {
            /*TileBagSorter.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileBagSorter#OnInit", this ); }

                if (this.enable) {
                    this.Game.Bag.addOnRemove(Bridge.fn.cacheBind(this, this.Sort));
                }
            },
            /*TileBagSorter.OnInit end.*/

            /*TileBagSorter.Sort start.*/
            Sort: function () {
if ( TRACE ) { TRACE( "TileBagSorter#Sort", this ); }

                if (!this._isSorting) {
                    this.StartCoroutine$1(this.Sorting());
                }
            },
            /*TileBagSorter.Sort end.*/

            /*TileBagSorter.Sorting start.*/
            Sorting: function () {
if ( TRACE ) { TRACE( "TileBagSorter#Sorting", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    busy,
                    empty,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._isSorting = true;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.intervalSec);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if ( this.NeedsSorting ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    busy = this.SortingSlot();
                                        empty = this.Game.Bag.EmptySlot;
                                        this.Game.Bag.Move(busy, empty);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.intervalSec);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._isSorting = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TileBagSorter.Sorting end.*/

            /*TileBagSorter.SortingSlot start.*/
            SortingSlot: function () {
if ( TRACE ) { TRACE( "TileBagSorter#SortingSlot", this ); }

                return System.Linq.Enumerable.from(this.Game.Bag.BusySlots, TileSlot).where(function (slot) {
                        return slot.ID !== 0;
                    }).firstOrDefault(Bridge.fn.bind(this, function (slot) {
                        return this.Game.Bag.LeftFrom(slot).IsEmpty;
                    }), null);
            },
            /*TileBagSorter.SortingSlot end.*/


        }
    });
    /*TileBagSorter end.*/

    /*TileLocker start.*/
    Bridge.define("TileLocker", {
        inherits: [GameComponent],
        fields: {
            lockDistance: 0
        },
        methods: {
            /*TileLocker.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileLocker#OnInit", this ); }
 },
            /*TileLocker.OnInit end.*/

            /*TileLocker.Refresh start.*/
            Refresh: function (tiles, layers) {
if ( TRACE ) { TRACE( "TileLocker#Refresh", this ); }

                var $t;
                for (var i = 0; i < ((layers.length - 1) | 0); i = (i + 1) | 0) {
                    var layer = layers[i];
                    var current = { v : layer.Layer };
                    var onTop = { v : layers[((i + 1) | 0)].Layer };
                    $t = Bridge.getEnumerator(System.Linq.Enumerable.from(tiles, Tile).where((function ($me, current) {
                            return function (t) {
                                return t.Layer === current.v;
                            };
                        })(this, current)).toList(Tile));
                    try {
                        while ($t.moveNext()) {
                            var tile = { v : $t.Current };
                            var coverTiles = (System.Linq.Enumerable.from(tiles, Tile).where((function ($me, onTop) {
                                    return function (t) {
                                        return t.Layer === onTop.v;
                                    };
                                })(this, onTop)).where(function (t) {
                                return !t.IsMoving;
                            }).where(function (t) {
                                return !t.InBag;
                            }).where((function ($me, tile) {
                                return Bridge.fn.bind($me, function (t) {
                                    return tile.v.Position.$clone().sub( t.Position ).length() <= this.lockDistance;
                                });
                            })(this, tile))).toList(Tile);
                            tile.v.SetContacts(coverTiles);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*TileLocker.Refresh end.*/


        }
    });
    /*TileLocker end.*/

    /*TileMatcher start.*/
    Bridge.define("TileMatcher", {
        inherits: [GameComponent],
        fields: {
            vfx: null,
            completed: null,
            matches: 0,
            lastMatch: null
        },
        events: {
            OnMatch: null
        },
        props: {
            Completed: {
                get: function () {
if ( TRACE ) { TRACE( "TileMatcher#Completed#get", this ); }

                    return this.completed.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TileMatcher#init", this ); }

                this.completed = new (System.Collections.Generic.List$1(Tile)).ctor();
                Bridge.event(this, "OnMatch", function () { });
            }
        },
        methods: {
            /*TileMatcher.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileMatcher#OnInit", this ); }

                this.Game.Actions.addOnMoveFinish(Bridge.fn.cacheBind(this, this.Check));
            },
            /*TileMatcher.OnInit end.*/

            /*TileMatcher.Check start.*/
            Check: function () {
if ( TRACE ) { TRACE( "TileMatcher#Check", this ); }

                var $t;
                var bag = this.Game.Bag;
                $t = Bridge.getEnumerator(bag.BusySlots);
                try {
                    while ($t.moveNext()) {
                        var slot = { v : $t.Current };
                        var same = this.SameAmount(slot.v.Type);
                        if (same < 3) {
                            continue;
                        }
                        var match = System.Linq.Enumerable.from(bag.BusySlots, TileSlot).where((function ($me, slot) {
                                return function (s) {
                                    return Bridge.referenceEquals(s.Type, slot.v.Type);
                                };
                            })(this, slot)).toList(TileSlot);
                        this.Match(match);
                        break;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TileMatcher.Check end.*/

            /*TileMatcher.SameAmount start.*/
            SameAmount: function (type) {
if ( TRACE ) { TRACE( "TileMatcher#SameAmount", this ); }

                return System.Linq.Enumerable.from(this.Game.Bag.BusySlots, TileSlot).count(function (check) {
                        return Bridge.referenceEquals(check.Type, type);
                    });
            },
            /*TileMatcher.SameAmount end.*/

            /*TileMatcher.Match start.*/
            Match: function (bagSlots) {
if ( TRACE ) { TRACE( "TileMatcher#Match", this ); }

                var $t;
                this.lastMatch = bagSlots;
                this.matches = (this.matches + 1) | 0;
                Luna.Unity.Analytics.LogEvent$1("3 tiles matched: ", this.matches);
                UnityEngine.Debug.Log$1(System.String.concat("Matched: ", bagSlots.getItem(0).Type));
                this.OnMatch(bagSlots, bagSlots.getItem(0).Type);
                $t = Bridge.getEnumerator(bagSlots);
                try {
                    while ($t.moveNext()) {
                        var bagSlot = $t.Current;
                        var tile = bagSlot.Tile;
                        tile.Hide();
                        this.completed.add(tile);
                        this.Game.Bag.Empty(bagSlot);
                        UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.vfx, UnityEngine.Vector3.FromVector2(tile.Position), pc.Quat.IDENTITY.clone());
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TileMatcher.Match end.*/


        }
    });
    /*TileMatcher end.*/

    /*TileRandomSpawner start.*/
    Bridge.define("TileRandomSpawner", {
        inherits: [GameComponent],
        fields: {
            spawnRate: 0,
            spawned: null
        },
        events: {
            OnSpawnFinish: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TileRandomSpawner#init", this ); }

                this.spawned = new (System.Collections.Generic.List$1(Tile)).ctor();
                Bridge.event(this, "OnSpawnFinish", function () { });
            }
        },
        methods: {
            /*TileRandomSpawner.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileRandomSpawner#OnInit", this ); }
 },
            /*TileRandomSpawner.OnInit end.*/

            /*TileRandomSpawner.Spawn start.*/
            Spawn: function (tiles) {
if ( TRACE ) { TRACE( "TileRandomSpawner#Spawn", this ); }
 },
            /*TileRandomSpawner.Spawn end.*/

            /*TileRandomSpawner.GetRandomEmpty start.*/
            GetRandomEmpty: function (tiles) {
if ( TRACE ) { TRACE( "TileRandomSpawner#GetRandomEmpty", this ); }

                var empty = System.Linq.Enumerable.from(tiles, Tile).where(function (t) {
                        return !t.IsInit;
                    }).toList(Tile);
                return empty.getItem(UnityEngine.Random.Range(0, empty.Count));
            },
            /*TileRandomSpawner.GetRandomEmpty end.*/


        }
    });
    /*TileRandomSpawner end.*/

    /*TileSpawnAnimation start.*/
    Bridge.define("TileSpawnAnimation", {
        inherits: [GameComponent],
        fields: {
            delayBetweenLines: 0,
            delayBetweenTiles: 0,
            delayBetweenLayers: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TileSpawnAnimation#init", this ); }

                this.delayBetweenLines = 0.1;
                this.delayBetweenTiles = 0.05;
                this.delayBetweenLayers = 0.1;
            }
        },
        methods: {
            /*TileSpawnAnimation.SpawnAnimation start.*/
            SpawnAnimation: function (slots, slots2) {
if ( TRACE ) { TRACE( "TileSpawnAnimation#SpawnAnimation", this ); }

                this.StartCoroutine$1(this.Play(slots, slots2));
            },
            /*TileSpawnAnimation.SpawnAnimation end.*/

            /*TileSpawnAnimation.Play start.*/
            Play: function (slots, slots2) {
if ( TRACE ) { TRACE( "TileSpawnAnimation#Play", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    slot2,
                    groupedTiles2,
                    $t1,
                    group2,
                    $t2,
                    slot,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $t = Bridge.getEnumerator(slots);
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ($t.moveNext()) {
                                            slot2 = $t.Current;
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 4;
                                    continue;
                                }
                                case 2: {
                                    slot2.SpawnAnimation();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenTiles);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 1;
                                    continue;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenLines);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenLayers);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    groupedTiles2 = (System.Linq.Enumerable.from(slots2, Tile).groupBy(function (tile) {
                                                return tile.Layer;
                                            }).select(function (group) {
                                            return group.toList(Tile);
                                        })).toList(System.Collections.Generic.List$1(Tile));
                                        $t1 = Bridge.getEnumerator(groupedTiles2);
                                        $step = 7;
                                        continue;
                                }
                                case 7: {
                                    if ($t1.moveNext()) {
                                            group2 = $t1.Current;
                                            $step = 8;
                                            continue;
                                        }
                                    $step = 14;
                                    continue;
                                }
                                case 8: {
                                    $t2 = Bridge.getEnumerator(group2);
                                        $step = 9;
                                        continue;
                                }
                                case 9: {
                                    if ($t2.moveNext()) {
                                            slot = $t2.Current;
                                            $step = 10;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 10: {
                                    slot.SpawnAnimation();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenTiles);
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    $step = 9;
                                    continue;
                                }
                                case 12: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenLines);
                                        $step = 13;
                                        return true;
                                }
                                case 13: {
                                    $step = 7;
                                    continue;
                                }
                                case 14: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TileSpawnAnimation.Play end.*/

            /*TileSpawnAnimation.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileSpawnAnimation#OnInit", this ); }
 },
            /*TileSpawnAnimation.OnInit end.*/


        }
    });
    /*TileSpawnAnimation end.*/

    /*TileSpawner start.*/
    Bridge.define("TileSpawner", {
        inherits: [GameComponent],
        fields: {
            prefab: null,
            spawned: null,
            hideAtSpawn: false,
            spawnRate: 0
        },
        events: {
            OnSpawnFinish: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TileSpawner#init", this ); }

                this.spawned = new (System.Collections.Generic.List$1(Tile)).ctor();
                this.hideAtSpawn = true;
                Bridge.event(this, "OnSpawnFinish", function () { });
            }
        },
        methods: {
            /*TileSpawner.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileSpawner#OnInit", this ); }
 },
            /*TileSpawner.OnInit end.*/


        }
    });
    /*TileSpawner end.*/

    /*WinCondition start.*/
    Bridge.define("WinCondition", {
        inherits: [GameComponent],
        events: {
            OnWin: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "WinCondition#init", this ); }

                Bridge.event(this, "OnWin", function () { });
            }
        },
        methods: {
            /*WinCondition.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "WinCondition#OnInit", this ); }

                this.Game.TileMatcher.addOnMatch(Bridge.fn.cacheBind(this, this.Check));
            },
            /*WinCondition.OnInit end.*/

            /*WinCondition.Check start.*/
            Check: function (bagSlots, type) {
if ( TRACE ) { TRACE( "WinCondition#Check", this ); }

                if (bagSlots.Count <= 0) {
                    UnityEngine.Debug.Log$1("WTF");
                    return;
                }
                if (UnityEngine.Object.op_Implicit(bagSlots.getItem(0).Type)) {
                    UnityEngine.Debug.Log$1("Check: " + (bagSlots.getItem(0).Type.name || ""));
                } else {
                    UnityEngine.Debug.LogWarning$1("Why bug is empty on match?", bagSlots.getItem(0).gameObject);
                }
                if (this.Game.TileMatcher.Completed >= System.Array.getCount(this.Game.TilesInGame, Tile)) {
                    this.OnWin();
                }
            },
            /*WinCondition.Check end.*/


        }
    });
    /*WinCondition end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections.Generic","UnityEngine","TMPro","UnityEngine.UI","System.Collections"];

    /*Deck start.*/
    $m("Deck", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindLayers","t":8,"sn":"FindLayers","rt":$n[0].Void},{"a":1,"n":"InitLayers","t":8,"sn":"InitLayers","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"FirstLayer","t":16,"rt":$n[1].List$1(Tile),"g":{"a":2,"n":"get_FirstLayer","t":8,"rt":$n[1].List$1(Tile),"fg":"FirstLayer"},"fn":"FirstLayer"},{"a":2,"n":"Layers","t":16,"rt":System.Array.type(DeckLayer),"g":{"a":2,"n":"get_Layers","t":8,"rt":System.Array.type(DeckLayer),"fg":"Layers"},"s":{"a":1,"n":"set_Layers","t":8,"p":[System.Array.type(DeckLayer)],"rt":$n[0].Void,"fs":"Layers"},"fn":"Layers"},{"a":2,"n":"SecondLayer","t":16,"rt":$n[1].List$1(Tile),"g":{"a":2,"n":"get_SecondLayer","t":8,"rt":$n[1].List$1(Tile),"fg":"SecondLayer"},"fn":"SecondLayer"},{"a":2,"n":"Tiles","t":16,"rt":$n[1].List$1(Tile),"g":{"a":2,"n":"get_Tiles","t":8,"rt":$n[1].List$1(Tile),"fg":"Tiles"},"fn":"Tiles"},{"a":1,"backing":true,"n":"<Layers>k__BackingField","t":4,"rt":System.Array.type(DeckLayer),"sn":"Layers"}]}; }, $n);
    /*Deck end.*/

    /*DeckBuilder start.*/
    $m("DeckBuilder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*DeckBuilder end.*/

    /*DeckLayer start.*/
    $m("DeckLayer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"pi":[{"n":"deck","pt":Deck,"ps":0},{"n":"layer","pt":$n[0].Int32,"ps":1}],"sn":"Init","rt":$n[0].Void,"p":[Deck,$n[0].Int32]},{"a":1,"n":"InitTiles","t":8,"pi":[{"n":"layer","pt":$n[0].Int32,"ps":0}],"sn":"InitTiles","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Layer","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Layer","t":8,"rt":$n[0].Int32,"fg":"Layer","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Layer","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Layer"},"fn":"Layer"},{"a":2,"n":"Tiles","t":4,"rt":System.Array.type(Tile),"sn":"Tiles"},{"a":1,"n":"_deck","t":4,"rt":Deck,"sn":"_deck"},{"a":1,"backing":true,"n":"<Layer>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Layer","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DeckLayer end.*/

    /*EndCard start.*/
    $m("EndCard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":2,"n":"canvas","t":4,"rt":$n[2].Canvas,"sn":"canvas"}]}; }, $n);
    /*EndCard end.*/

    /*Game start.*/
    $m("Game", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"InitComponents","t":8,"sn":"InitComponents","rt":$n[0].Void},{"a":1,"n":"Lose","t":8,"sn":"Lose","rt":$n[0].Void},{"a":1,"n":"OnTileMoved","t":8,"pi":[{"n":"obj","pt":Tile,"ps":0}],"sn":"OnTileMoved","rt":$n[0].Void,"p":[Tile]},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":2,"n":"OpenURL","t":8,"sn":"OpenURL","rt":$n[0].Void},{"a":1,"n":"QuestWin","t":8,"sn":"QuestWin","rt":$n[0].Void},{"a":1,"n":"RefreshTiles","t":8,"sn":"RefreshTiles","rt":$n[0].Void},{"a":1,"n":"ShowDeck","t":8,"pi":[{"n":"spawned","pt":$n[1].List$1(Tile),"ps":0}],"sn":"ShowDeck","rt":$n[0].Void,"p":[$n[1].List$1(Tile)]},{"a":1,"n":"Spawn","t":8,"sn":"Spawn","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":1,"n":"Win","t":8,"sn":"Win","rt":$n[0].Void},{"a":2,"n":"Actions","t":16,"rt":TileActions,"g":{"a":2,"n":"get_Actions","t":8,"rt":TileActions,"fg":"Actions"},"fn":"Actions"},{"a":2,"n":"Bag","t":16,"rt":TilesBag,"g":{"a":2,"n":"get_Bag","t":8,"rt":TilesBag,"fg":"Bag"},"fn":"Bag"},{"a":2,"n":"Input","t":16,"rt":InputTouch,"g":{"a":2,"n":"get_Input","t":8,"rt":InputTouch,"fg":"Input"},"fn":"Input"},{"a":2,"n":"TileMatcher","t":16,"rt":TileMatcher,"g":{"a":2,"n":"get_TileMatcher","t":8,"rt":TileMatcher,"fg":"TileMatcher"},"fn":"TileMatcher"},{"a":2,"n":"TilesInGame","t":16,"rt":$n[1].IReadOnlyList$1(Tile),"g":{"a":2,"n":"get_TilesInGame","t":8,"rt":$n[1].IReadOnlyList$1(Tile),"fg":"TilesInGame"},"fn":"TilesInGame"},{"a":1,"n":"_isGameEnded","t":4,"rt":$n[0].Boolean,"sn":"_isGameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"actions","t":4,"rt":TileActions,"sn":"actions"},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoGameOverInSeconds","t":4,"rt":$n[0].Single,"sn":"autoGameOverInSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bag","t":4,"rt":TilesBag,"sn":"bag"},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deck","t":4,"rt":Deck,"sn":"deck"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endCard","t":4,"rt":EndCard,"sn":"endCard"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"input","t":4,"rt":InputTouch,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"locker","t":4,"rt":TileLocker,"sn":"locker"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loseCondition","t":4,"rt":LoseCondition,"sn":"loseCondition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"quest","t":4,"rt":Quest,"sn":"quest"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnAnimation","t":4,"rt":TileSpawnAnimation,"sn":"spawnAnimation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnRandom","t":4,"rt":TileRandomSpawner,"sn":"spawnRandom"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileMatcher","t":4,"rt":TileMatcher,"sn":"tileMatcher"},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileToSpawn","t":4,"rt":$n[0].Int32,"sn":"tileToSpawn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tilesInGame","t":4,"rt":$n[1].List$1(Tile),"sn":"tilesInGame"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tilesInScene","t":4,"rt":$n[0].Int32,"sn":"tilesInScene","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useRandom","t":4,"rt":$n[0].Boolean,"sn":"useRandom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winCondition","t":4,"rt":WinCondition,"sn":"winCondition"}]}; }, $n);
    /*Game end.*/

    /*GameComponent start.*/
    $m("GameComponent", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"pi":[{"n":"game","pt":Game,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[Game]},{"ab":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":3,"n":"Game","t":4,"rt":Game,"sn":"Game"}]}; }, $n);
    /*GameComponent end.*/

    /*InputTouch start.*/
    $m("InputTouch", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_cooldown","t":4,"rt":$n[0].Single,"sn":"_cooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"inputCooldown","t":4,"rt":$n[0].Single,"sn":"inputCooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"touchSize","t":4,"rt":$n[0].Single,"sn":"touchSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"touches","t":4,"rt":$n[1].List$1(UnityEngine.Vector2),"sn":"touches"},{"a":2,"n":"OnTouchScreen","t":2,"ad":{"a":2,"n":"add_OnTouchScreen","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTouchScreen","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTouchScreen","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTouchScreen","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*InputTouch end.*/

    /*LoseCondition start.*/
    $m("LoseCondition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Check","t":8,"sn":"Check","rt":$n[0].Void},{"a":1,"n":"Lose","t":8,"sn":"Lose","rt":$n[0].Void},{"a":1,"n":"OnBagChange","t":8,"sn":"OnBagChange","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_checkDelay","t":4,"rt":$n[0].Single,"sn":"_checkDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnLose","t":2,"ad":{"a":2,"n":"add_OnLose","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnLose","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnLose","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnLose","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*LoseCondition end.*/

    /*Quest start.*/
    $m("Quest", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"OnMatch","t":8,"pi":[{"n":"bagSlots","pt":$n[1].List$1(TileSlot),"ps":0},{"n":"type","pt":TileSO,"ps":1}],"sn":"OnMatch","rt":$n[0].Void,"p":[$n[1].List$1(TileSlot),TileSO]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slots","t":4,"rt":$n[1].List$1(QuestSlot),"sn":"slots"},{"a":2,"n":"OnWin","t":2,"ad":{"a":2,"n":"add_OnWin","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnWin","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnWin","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnWin","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Quest end.*/

    /*QuestSlot start.*/
    $m("QuestSlot", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteAlwaysAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Animate","t":8,"sn":"Animate","rt":$n[0].Void},{"a":2,"n":"PlayAnimation","t":8,"sn":"PlayAnimation","rt":$n[0].Void},{"a":1,"n":"RefreshIcon","t":8,"sn":"RefreshIcon","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Unlock","t":8,"sn":"Unlock","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Complete","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Complete","t":8,"rt":$n[0].Boolean,"fg":"Complete","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Complete"},{"a":2,"n":"Locked","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Locked","t":8,"rt":$n[0].Boolean,"fg":"Locked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Locked"},{"a":2,"n":"Type","t":16,"rt":TileSO,"g":{"a":2,"n":"get_Type","t":8,"rt":TileSO,"fg":"Type"},"fn":"Type"},{"a":2,"n":"EndScale","t":4,"rt":$n[2].Vector3,"sn":"EndScale"},{"a":2,"n":"InitialScale","t":4,"rt":$n[2].Vector3,"sn":"InitialScale"},{"a":2,"n":"MaximumScale","t":4,"rt":$n[2].Vector3,"sn":"MaximumScale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"amount","t":4,"rt":$n[0].Int32,"sn":"amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"amountTxt","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"amountTxt"},{"a":2,"n":"animationDuration","t":4,"rt":$n[0].Single,"sn":"animationDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"elapsedTime","t":4,"rt":$n[0].Single,"sn":"elapsedTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"icon","t":4,"rt":$n[4].Image,"sn":"icon"},{"a":1,"n":"isAnimating","t":4,"rt":$n[0].Boolean,"sn":"isAnimating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isShrinking","t":4,"rt":$n[0].Boolean,"sn":"isShrinking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"locked","t":4,"rt":$n[0].Boolean,"sn":"locked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"maxSizeTrigger","t":4,"rt":$n[0].Single,"sn":"maxSizeTrigger","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("goal"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"type","t":4,"rt":TileSO,"sn":"type"}]}; }, $n);
    /*QuestSlot end.*/

    /*ResetLocalPosition start.*/
    $m("ResetLocalPosition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void}]}; }, $n);
    /*ResetLocalPosition end.*/

    /*Tile start.*/
    $m("Tile", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteAlwaysAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Disable","t":8,"sn":"Disable","rt":$n[0].Void},{"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":2,"n":"MoveTo","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"MoveTo","rt":$n[0].Void,"p":[TileSlot]},{"a":2,"n":"PutInBag","t":8,"sn":"PutInBag","rt":$n[0].Void},{"a":1,"n":"Refresh","t":8,"sn":"Refresh","rt":$n[0].Void},{"a":1,"n":"Refresh","t":8,"pi":[{"n":"so","pt":TileSO,"ps":0}],"sn":"Refresh$1","rt":$n[0].Void,"p":[TileSO]},{"a":1,"n":"RefreshEditor","t":8,"sn":"RefreshEditor","rt":$n[0].Void},{"a":2,"n":"Set","t":8,"pi":[{"n":"so","pt":TileSO,"ps":0}],"sn":"Set","rt":$n[0].Void,"p":[TileSO]},{"a":2,"n":"SetContacts","t":8,"pi":[{"n":"cover","pt":$n[1].List$1(Tile),"ps":0}],"sn":"SetContacts","rt":$n[0].Void,"p":[$n[1].List$1(Tile)]},{"a":2,"n":"SetLayer","t":8,"pi":[{"n":"layer","pt":$n[0].Int32,"ps":0},{"n":"lineID","pt":$n[0].Int32,"ps":1}],"sn":"SetLayer","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":2,"n":"SpawnAnimation","t":8,"sn":"SpawnAnimation","rt":$n[0].Void},{"a":1,"n":"StopMove","t":8,"sn":"StopMove","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"Arrive","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_Arrive","t":8,"rt":$n[0].Boolean,"fg":"Arrive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Arrive"},{"a":2,"n":"InBag","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_InBag","t":8,"rt":$n[0].Boolean,"fg":"InBag","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_InBag","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"InBag"},"fn":"InBag"},{"a":2,"n":"IsClickable","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsClickable","t":8,"rt":$n[0].Boolean,"fg":"IsClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsClickable"},{"a":2,"n":"IsMoving","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsMoving","t":8,"rt":$n[0].Boolean,"fg":"IsMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsMoving"},{"a":2,"n":"Layer","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Layer","t":8,"rt":$n[0].Int32,"fg":"Layer","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Layer","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Layer"},"fn":"Layer"},{"a":2,"n":"Position","t":16,"rt":$n[2].Vector2,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[2].Vector2,"fg":"Position"},"fn":"Position"},{"a":2,"n":"Y","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Y","t":8,"rt":$n[0].Single,"fg":"Y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Y"},{"a":2,"n":"IsInit","t":4,"rt":$n[0].Boolean,"sn":"IsInit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0)],"a":2,"n":"Type","t":4,"rt":TileSO,"sn":"Type"},{"a":2,"n":"_isClickable","t":4,"rt":$n[0].Boolean,"sn":"_isClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isMoving","t":4,"rt":$n[0].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isSpawnAnimation","t":4,"rt":$n[0].Boolean,"sn":"_isSpawnAnimation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_line","t":4,"rt":$n[0].Int32,"sn":"_line","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_spawnTimer","t":4,"rt":$n[0].Single,"sn":"_spawnTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_targetPosition","t":4,"rt":$n[2].Vector3,"sn":"_targetPosition"},{"a":1,"n":"_targetSlot","t":4,"rt":TileSlot,"sn":"_targetSlot"},{"a":1,"n":"_timer","t":4,"rt":$n[0].Single,"sn":"_timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"backGroundSort","t":4,"rt":$n[0].Int32,"sn":"backGroundSort","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"background","t":4,"rt":$n[2].SpriteRenderer,"sn":"background"},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0)],"a":2,"n":"coverTiles","t":4,"rt":$n[1].List$1(Tile),"sn":"coverTiles"},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0)],"a":2,"n":"defaultSize","t":4,"rt":$n[2].Vector3,"sn":"defaultSize"},{"a":1,"n":"disabledSort","t":4,"rt":$n[0].Int32,"sn":"disabledSort","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"disabledTile","t":4,"rt":$n[2].SpriteRenderer,"sn":"disabledTile"},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0)],"a":2,"n":"icon","t":4,"rt":$n[2].SpriteRenderer,"sn":"icon"},{"a":1,"n":"iconSort","t":4,"rt":$n[0].Int32,"sn":"iconSort","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"lastType","t":4,"rt":TileSO,"sn":"lastType"},{"a":2,"n":"spawnAnimDuration","t":4,"rt":$n[0].Single,"sn":"spawnAnimDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spawnAnimSize","t":4,"rt":$n[0].Single,"sn":"spawnAnimSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"trail","t":4,"rt":$n[2].TrailRenderer,"sn":"trail"},{"a":1,"n":"trailSort","t":4,"rt":$n[0].Int32,"sn":"trailSort","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"OnMoveFinish","t":2,"ad":{"a":2,"n":"add_OnMoveFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnMoveFinish","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnMoveFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnMoveFinish","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<InBag>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"InBag","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Layer>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Layer","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Tile end.*/

    /*TileActions start.*/
    $m("TileActions", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Click","t":8,"pi":[{"n":"tile","pt":Tile,"ps":0}],"sn":"Click","rt":$n[0].Void,"p":[Tile]},{"a":2,"n":"Disable","t":8,"sn":"Disable","rt":$n[0].Void},{"a":1,"n":"MoveFinished","t":8,"pi":[{"n":"moving","pt":Tile,"ps":0},{"n":"tileSlot","pt":TileSlot,"ps":1}],"sn":"MoveFinished","rt":$n[0].Void,"p":[Tile,TileSlot]},{"a":2,"n":"Observe","t":8,"pi":[{"n":"tiles","pt":$n[1].List$1(Tile),"ps":0}],"sn":"Observe","rt":$n[0].Void,"p":[$n[1].List$1(Tile)]},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"OnTouchScreen","t":8,"pi":[{"n":"touchPos","pt":$n[2].Vector2,"ps":0},{"n":"touchSize","pt":$n[0].Single,"ps":1}],"sn":"OnTouchScreen","rt":$n[0].Void,"p":[$n[2].Vector2,$n[0].Single]},{"a":1,"n":"Touched","t":8,"pi":[{"n":"tile","pt":Tile,"ps":0}],"sn":"Touched","rt":$n[0].Void,"p":[Tile]},{"a":1,"n":"_cam","t":4,"rt":$n[2].Camera,"sn":"_cam"},{"a":1,"n":"_slots","t":4,"rt":$n[1].List$1(Tile),"sn":"_slots"},{"a":1,"n":"clicks","t":4,"rt":$n[0].Int32,"sn":"clicks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isDisable","t":4,"rt":$n[0].Boolean,"sn":"isDisable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnMoveFinish","t":2,"ad":{"a":2,"n":"add_OnMoveFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnMoveFinish","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnMoveFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnMoveFinish","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnMoveStart","t":2,"ad":{"a":2,"n":"add_OnMoveStart","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnMoveStart","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnMoveStart","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnMoveStart","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TileActions end.*/

    /*TileBagSorter start.*/
    $m("TileBagSorter", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Sort","t":8,"sn":"Sort","rt":$n[0].Void},{"a":1,"n":"Sorting","t":8,"sn":"Sorting","rt":$n[5].IEnumerator},{"a":1,"n":"SortingSlot","t":8,"sn":"SortingSlot","rt":TileSlot},{"a":1,"n":"NeedsSorting","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_NeedsSorting","t":8,"rt":$n[0].Boolean,"fg":"NeedsSorting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"NeedsSorting"},{"a":1,"n":"_isSorting","t":4,"rt":$n[0].Boolean,"sn":"_isSorting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"enable","t":4,"rt":$n[0].Boolean,"sn":"enable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"intervalSec","t":4,"rt":$n[0].Single,"sn":"intervalSec","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TileBagSorter end.*/

    /*TileLocker start.*/
    $m("TileLocker", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"Refresh","t":8,"pi":[{"n":"tiles","pt":$n[1].List$1(Tile),"ps":0},{"n":"layers","pt":System.Array.type(DeckLayer),"ps":1}],"sn":"Refresh","rt":$n[0].Void,"p":[$n[1].List$1(Tile),System.Array.type(DeckLayer)]},{"a":2,"n":"lockDistance","t":4,"rt":$n[0].Single,"sn":"lockDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TileLocker end.*/

    /*TileMatcher start.*/
    $m("TileMatcher", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Check","t":8,"sn":"Check","rt":$n[0].Void},{"a":1,"n":"Match","t":8,"pi":[{"n":"bagSlots","pt":$n[1].List$1(TileSlot),"ps":0}],"sn":"Match","rt":$n[0].Void,"p":[$n[1].List$1(TileSlot)]},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"SameAmount","t":8,"pi":[{"n":"type","pt":TileSO,"ps":0}],"sn":"SameAmount","rt":$n[0].Int32,"p":[TileSO],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Completed","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Completed","t":8,"rt":$n[0].Int32,"fg":"Completed","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Completed"},{"a":2,"n":"completed","t":4,"rt":$n[1].List$1(Tile),"sn":"completed"},{"a":2,"n":"lastMatch","t":4,"rt":$n[1].List$1(TileSlot),"sn":"lastMatch"},{"a":1,"n":"matches","t":4,"rt":$n[0].Int32,"sn":"matches","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"vfx","t":4,"rt":$n[2].GameObject,"sn":"vfx"},{"a":2,"n":"OnMatch","t":2,"ad":{"a":2,"n":"add_OnMatch","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnMatch","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnMatch","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnMatch","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TileMatcher end.*/

    /*TileRandomSpawner start.*/
    $m("TileRandomSpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetRandomEmpty","t":8,"pi":[{"n":"tiles","pt":$n[1].List$1(Tile),"ps":0}],"sn":"GetRandomEmpty","rt":Tile,"p":[$n[1].List$1(Tile)]},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"tiles","pt":$n[1].List$1(Tile),"ps":0}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[1].List$1(Tile)]},{"a":2,"n":"spawnRate","t":4,"rt":$n[0].Single,"sn":"spawnRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spawned","t":4,"rt":$n[1].List$1(Tile),"sn":"spawned"},{"a":2,"n":"OnSpawnFinish","t":2,"ad":{"a":2,"n":"add_OnSpawnFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnSpawnFinish","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnSpawnFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnSpawnFinish","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TileRandomSpawner end.*/

    /*TilesBag start.*/
    $m("TilesBag", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Empty","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"Empty","rt":$n[0].Void,"p":[TileSlot]},{"a":2,"n":"LeftFrom","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"LeftFrom","rt":TileSlot,"p":[TileSlot]},{"a":2,"n":"Move","t":8,"pi":[{"n":"from","pt":TileSlot,"ps":0},{"n":"to","pt":TileSlot,"ps":1}],"sn":"Move","rt":$n[0].Void,"p":[TileSlot,TileSlot]},{"a":2,"n":"Put","t":8,"pi":[{"n":"tile","pt":Tile,"ps":0},{"n":"tileSlot","pt":TileSlot,"ps":1}],"sn":"Put","rt":$n[0].Void,"p":[Tile,TileSlot]},{"a":2,"n":"BusySlots","t":16,"rt":$n[1].List$1(TileSlot),"g":{"a":2,"n":"get_BusySlots","t":8,"rt":$n[1].List$1(TileSlot),"fg":"BusySlots"},"fn":"BusySlots"},{"a":2,"n":"EmptySlot","t":16,"rt":TileSlot,"g":{"a":2,"n":"get_EmptySlot","t":8,"rt":TileSlot,"fg":"EmptySlot"},"fn":"EmptySlot"},{"a":2,"n":"HaveEmptySlot","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HaveEmptySlot","t":8,"rt":$n[0].Boolean,"fg":"HaveEmptySlot","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HaveEmptySlot"},{"a":2,"n":"NoSpace","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_NoSpace","t":8,"rt":$n[0].Boolean,"fg":"NoSpace","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"NoSpace"},{"a":2,"n":"slots","t":4,"rt":$n[1].List$1(TileSlot),"sn":"slots"},{"a":2,"n":"OnPut","t":2,"ad":{"a":2,"n":"add_OnPut","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnPut","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnPut","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnPut","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnRemove","t":2,"ad":{"a":2,"n":"add_OnRemove","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnRemove","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnRemove","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnRemove","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TilesBag end.*/

    /*TileSlot start.*/
    $m("TileSlot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Empty","t":8,"sn":"Empty","rt":$n[0].Void},{"a":2,"n":"Put","t":8,"pi":[{"n":"tile","pt":Tile,"ps":0}],"sn":"Put","rt":$n[0].Void,"p":[Tile]},{"a":2,"n":"Busy","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Busy","t":8,"rt":$n[0].Boolean,"fg":"Busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Busy"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"Position","t":16,"rt":$n[2].Vector2,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[2].Vector2,"fg":"Position"},"fn":"Position"},{"a":2,"n":"Type","t":16,"rt":TileSO,"g":{"a":2,"n":"get_Type","t":8,"rt":TileSO,"fg":"Type"},"fn":"Type"},{"a":2,"n":"ID","t":4,"rt":$n[0].Int32,"sn":"ID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Tile","t":4,"rt":Tile,"sn":"Tile"}]}; }, $n);
    /*TileSlot end.*/

    /*TileSO start.*/
    $m("TileSO", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "Tile", menuName: "SO/Tile"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Icon","t":16,"rt":$n[2].Sprite,"g":{"a":2,"n":"get_Icon","t":8,"rt":$n[2].Sprite,"fg":"Icon"},"fn":"Icon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"icon","t":4,"rt":$n[2].Sprite,"sn":"icon"}]}; }, $n);
    /*TileSO end.*/

    /*TileSpawnAnimation start.*/
    $m("TileSpawnAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Play","t":8,"pi":[{"n":"slots","pt":$n[1].List$1(Tile),"ps":0},{"n":"slots2","pt":$n[1].List$1(Tile),"ps":1}],"sn":"Play","rt":$n[5].IEnumerator,"p":[$n[1].List$1(Tile),$n[1].List$1(Tile)]},{"a":2,"n":"SpawnAnimation","t":8,"pi":[{"n":"slots","pt":$n[1].List$1(Tile),"ps":0},{"n":"slots2","pt":$n[1].List$1(Tile),"ps":1}],"sn":"SpawnAnimation","rt":$n[0].Void,"p":[$n[1].List$1(Tile),$n[1].List$1(Tile)]},{"a":2,"n":"delayBetweenLayers","t":4,"rt":$n[0].Single,"sn":"delayBetweenLayers","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"delayBetweenLines","t":4,"rt":$n[0].Single,"sn":"delayBetweenLines","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"delayBetweenTiles","t":4,"rt":$n[0].Single,"sn":"delayBetweenTiles","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TileSpawnAnimation end.*/

    /*TileSpawner start.*/
    $m("TileSpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"hideAtSpawn","t":4,"rt":$n[0].Boolean,"sn":"hideAtSpawn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"prefab","t":4,"rt":Tile,"sn":"prefab"},{"a":2,"n":"spawnRate","t":4,"rt":$n[0].Single,"sn":"spawnRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spawned","t":4,"rt":$n[1].List$1(Tile),"sn":"spawned"},{"a":2,"n":"OnSpawnFinish","t":2,"ad":{"a":2,"n":"add_OnSpawnFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnSpawnFinish","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnSpawnFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnSpawnFinish","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TileSpawner end.*/

    /*WinCondition start.*/
    $m("WinCondition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Check","t":8,"pi":[{"n":"bagSlots","pt":$n[1].List$1(TileSlot),"ps":0},{"n":"type","pt":TileSO,"ps":1}],"sn":"Check","rt":$n[0].Void,"p":[$n[1].List$1(TileSlot),TileSO]},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"OnWin","t":2,"ad":{"a":2,"n":"add_OnWin","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnWin","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnWin","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnWin","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*WinCondition end.*/

    }});
