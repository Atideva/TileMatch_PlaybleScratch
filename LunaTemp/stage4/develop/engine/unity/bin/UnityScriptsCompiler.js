if ( TRACE ) { TRACE( JSON.parse( '["BagSlot#Busy#get","BagSlot#IsEmpty#get","BagSlot#IsFree#get","BagSlot#Data#get","BagSlot#Position#get","BagSlot#Booked#get","BagSlot#Awake","BagSlot#Book","BagSlot#StopBooking","BagSlot#Empty","BagSlot#Put","GameComponent#Init","DeckLayer#AnyFreeSlot#get","DeckLayer#Init","DeckLayer#InitSlots","DeckLayer#FindSlots","DeckLayer#GetFreeSlot","Game#Tiles#get","Game#LevelData#get","Game#Bag#get","Game#MatchCondition#get","Game#Input#get","Game#init","Game#Start","Game#InitComponents","Game#Spawn","Game#Spawned","Game#OnValidate","Tile#Position#get","Tile#init","Tile#SetContacts","Tile#SetSlot","Tile#Enable","Tile#Disable","Tile#ResetPosition","Tile#OnMouseDown","Tile#Set","TileData#CanSpawn#get","TileData#Decrease","TilesBag#BusySlots#get","TilesBag#HaveEmptySlot#get","TilesBag#EmptySlot#get","TilesBag#NoSpace#get","TilesBag#init","TilesBag#Awake","TilesBag#Put","TilesBag#Remove","TileSlot#IsClickable#get","TileSlot#IsFree#get","TileSlot#Data#get","TileSlot#Position#get","TileSlot#init","TileSlot#MoveTo","TileSlot#Init","TileSlot#Update","TileSlot#Put","TileSlot#SpawnAnimation","TileSlot#PutInBag","TileSlot#Empty","TileSlot#Hide","TileSlot#Show","Deck#Slots#get","Deck#FirstLayer#get","Deck#SecondLayer#get","Deck#OnInit","Deck#FindPlatforms","Deck#InitPlatforms","EndCard#OnInit","InputTouch#init","InputTouch#OnInit","InputTouch#Update","LoseCondition#init","LoseCondition#OnInit","LoseCondition#OnBagChange","LoseCondition#Update","LoseCondition#Check","LoseCondition#Lose","MatchCondition#Completed#get","MatchCondition#init","MatchCondition#OnInit","MatchCondition#Check","MatchCondition#SameAmount","MatchCondition#Match","TileActions#OnInit","TileActions#OnTouchScreen","TileActions#Touched","TileActions#Click","TileActions#Observe","TileActions#PutBag","TileBagSorter#NeedsSorting#get","TileBagSorter#init","TileBagSorter#OnInit","TileBagSorter#Sort","TileBagSorter#Sorting","TileBagSorter#SortingSlot","TileLocker#OnInit","TileLocker#Refresh","TileSpawnAnimation#init","TileSpawnAnimation#SpawnAnimation","TileSpawnAnimation#Play","TileSpawnAnimation#OnInit","TileSpawner#Level#get","TileSpawner#init","TileSpawner#OnInit","TileSpawner#Spawn","TileSpawner#RunSpawn","TileSpawner#GetRandom$1","TileSpawner#GetRandom","WinCondition#Completed#get","WinCondition#init","WinCondition#OnInit","WinCondition#Check"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BagSlot start.*/
    Bridge.define("BagSlot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ID: 0,
            TileSlot: null,
            bookedSlot: null
        },
        props: {
            Busy: {
                get: function () {
if ( TRACE ) { TRACE( "BagSlot#Busy#get", this ); }

                    return this.Data != null;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "BagSlot#IsEmpty#get", this ); }

                    return !this.Busy;
                }
            },
            IsFree: {
                get: function () {
if ( TRACE ) { TRACE( "BagSlot#IsFree#get", this ); }

                    return !this.Busy && !this.Booked;
                }
            },
            Data: {
                get: function () {
if ( TRACE ) { TRACE( "BagSlot#Data#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.TileSlot) ? this.TileSlot.Data : null;
                }
            },
            Position: {
                get: function () {
if ( TRACE ) { TRACE( "BagSlot#Position#get", this ); }

                    return UnityEngine.Vector2.FromVector3(this.transform.position.$clone());
                }
            },
            Booked: {
                get: function () {
if ( TRACE ) { TRACE( "BagSlot#Booked#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.bookedSlot);
                }
            }
        },
        methods: {
            /*BagSlot.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BagSlot#Awake", this ); }

                this.Empty();
            },
            /*BagSlot.Awake end.*/

            /*BagSlot.Book start.*/
            Book: function (slot) {
if ( TRACE ) { TRACE( "BagSlot#Book", this ); }

                this.bookedSlot = slot;
            },
            /*BagSlot.Book end.*/

            /*BagSlot.StopBooking start.*/
            StopBooking: function () {
if ( TRACE ) { TRACE( "BagSlot#StopBooking", this ); }

                this.bookedSlot = null;
            },
            /*BagSlot.StopBooking end.*/

            /*BagSlot.Empty start.*/
            Empty: function () {
if ( TRACE ) { TRACE( "BagSlot#Empty", this ); }

                this.TileSlot = null;
            },
            /*BagSlot.Empty end.*/

            /*BagSlot.Put start.*/
            Put: function (slot) {
if ( TRACE ) { TRACE( "BagSlot#Put", this ); }

                this.TileSlot = slot;
                this.StopBooking();
            },
            /*BagSlot.Put end.*/


        }
    });
    /*BagSlot end.*/

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
            id: 0,
            _deck: null,
            Slots: null
        },
        props: {
            AnyFreeSlot: {
                get: function () {
if ( TRACE ) { TRACE( "DeckLayer#AnyFreeSlot#get", this ); }

                    return System.Linq.Enumerable.from(this.Slots, TileSlot).any(function (s) {
                            return s.IsFree;
                        });
                }
            }
        },
        methods: {
            /*DeckLayer.Init start.*/
            Init: function (deck) {
if ( TRACE ) { TRACE( "DeckLayer#Init", this ); }

                this._deck = deck;
                this.FindSlots();
                this.InitSlots();
            },
            /*DeckLayer.Init end.*/

            /*DeckLayer.InitSlots start.*/
            InitSlots: function () {
if ( TRACE ) { TRACE( "DeckLayer#InitSlots", this ); }

                var $t;
                var slots = this.Slots;
                $t = Bridge.getEnumerator(slots);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        slot.Init(this.id);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*DeckLayer.InitSlots end.*/

            /*DeckLayer.FindSlots start.*/
            FindSlots: function () {
if ( TRACE ) { TRACE( "DeckLayer#FindSlots", this ); }

                this.Slots = this.GetComponentsInChildren(TileSlot);
            },
            /*DeckLayer.FindSlots end.*/

            /*DeckLayer.GetFreeSlot start.*/
            GetFreeSlot: function () {
if ( TRACE ) { TRACE( "DeckLayer#GetFreeSlot", this ); }

                return System.Linq.Enumerable.from(this.Slots, TileSlot).firstOrDefault(Bridge.fn.bind(this, function (s) {
                        return s.IsFree;
                    }), null);
            },
            /*DeckLayer.GetFreeSlot end.*/


        }
    });
    /*DeckLayer end.*/

    /*Game start.*/
    Bridge.define("Game", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            deck: null,
            spawner: null,
            actions: null,
            locker: null,
            bag: null,
            spawnAnimation: null,
            matchCondition: null,
            loseCondition: null,
            winCondition: null,
            input: null,
            totalTiles: 0,
            totalBricks: 0,
            randomTiles: false,
            tiles: null
        },
        props: {
            Tiles: {
                get: function () {
if ( TRACE ) { TRACE( "Game#Tiles#get", this ); }

                    return this.tiles;
                }
            },
            LevelData: {
                get: function () {
if ( TRACE ) { TRACE( "Game#LevelData#get", this ); }

                    return this.spawner.Level;
                }
            },
            Bag: {
                get: function () {
if ( TRACE ) { TRACE( "Game#Bag#get", this ); }

                    return this.bag;
                }
            },
            MatchCondition: {
                get: function () {
if ( TRACE ) { TRACE( "Game#MatchCondition#get", this ); }

                    return this.matchCondition;
                }
            },
            Input: {
                get: function () {
if ( TRACE ) { TRACE( "Game#Input#get", this ); }

                    return this.input;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Game#init", this ); }

                this.tiles = new (System.Collections.Generic.List$1(Tile)).ctor();
            }
        },
        methods: {
            /*Game.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Game#Start", this ); }

                this.InitComponents();
                this.Invoke("Spawn", 0.1);
            },
            /*Game.Start end.*/

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

                var $t;
                this.spawner.Spawn(($t = TileData, System.Linq.Enumerable.from(this.LevelData, $t).toList($t)), this.deck.Layers);
                this.spawner.addOnSpawnFinish(Bridge.fn.cacheBind(this, this.Spawned));
            },
            /*Game.Spawn end.*/

            /*Game.Spawned start.*/
            Spawned: function (tiles) {
if ( TRACE ) { TRACE( "Game#Spawned", this ); }

                this.tiles = tiles;
                this.spawnAnimation.SpawnAnimation(this.deck.FirstLayer, this.deck.SecondLayer);
                this.actions.Observe(this.deck.Slots);
                this.locker.Refresh(tiles, this.deck.Layers);
            },
            /*Game.Spawned end.*/

            /*Game.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "Game#OnValidate", this ); }

                this.InitComponents();
                this.totalTiles = System.Linq.Enumerable.from(this.spawner.Level, TileData).sum(function (t) {
                        return t.amount;
                    });
                this.totalBricks = System.Linq.Enumerable.from(this.deck.Layers, DeckLayer).sum(function (p) {
                        return p.Slots.length;
                    });
            },
            /*Game.OnValidate end.*/


        }
    });
    /*Game end.*/

    /*Tile start.*/
    Bridge.define("Tile", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            icon: null,
            disabledTile: null,
            coverTiles: null,
            Data: null,
            Slot: null,
            Layer: 0,
            IsClickable: false
        },
        events: {
            OnClick: null
        },
        props: {
            Position: {
                get: function () {
if ( TRACE ) { TRACE( "Tile#Position#get", this ); }

                    return UnityEngine.Vector2.FromVector3(this.transform.position.$clone());
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Tile#init", this ); }

                this.coverTiles = new (System.Collections.Generic.List$1(Tile)).ctor();
                Bridge.event(this, "OnClick", function () { });
            }
        },
        methods: {
            /*Tile.SetContacts start.*/
            SetContacts: function (cover) {
if ( TRACE ) { TRACE( "Tile#SetContacts", this ); }

                if (cover != null) {
                    this.coverTiles.clear();
                    this.coverTiles = cover;
                    if (cover.Count > 0) {
                        this.Disable();
                    }
                }
            },
            /*Tile.SetContacts end.*/

            /*Tile.SetSlot start.*/
            SetSlot: function (slot) {
if ( TRACE ) { TRACE( "Tile#SetSlot", this ); }

                this.Slot = slot;
                this.transform.SetParent(this.Slot.transform);
                this.Invoke("ResetPosition", 0.1);
                this.ResetPosition();
            },
            /*Tile.SetSlot end.*/

            /*Tile.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Tile#Enable", this ); }

                this.IsClickable = true;
                this.disabledTile.gameObject.SetActive(false);
            },
            /*Tile.Enable end.*/

            /*Tile.Disable start.*/
            Disable: function () {
if ( TRACE ) { TRACE( "Tile#Disable", this ); }

                this.IsClickable = false;
                this.disabledTile.gameObject.SetActive(true);
            },
            /*Tile.Disable end.*/

            /*Tile.ResetPosition start.*/
            ResetPosition: function () {
if ( TRACE ) { TRACE( "Tile#ResetPosition", this ); }

                this.transform.localPosition = pc.Vec3.ZERO.clone();
            },
            /*Tile.ResetPosition end.*/

            /*Tile.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "Tile#OnMouseDown", this ); }

                if (this.IsClickable) {
                    this.OnClick(this);
                }
            },
            /*Tile.OnMouseDown end.*/

            /*Tile.Set start.*/
            Set: function (data, layer) {
if ( TRACE ) { TRACE( "Tile#Set", this ); }

                this.Data = data;
                this.Layer = layer;
                this.icon.sprite = data.icon;
                this.Enable();
            },
            /*Tile.Set end.*/


        }
    });
    /*Tile end.*/

    /*TileData start.*/
    Bridge.define("TileData", {
        fields: {
            type: 0,
            icon: null,
            amount: 0
        },
        props: {
            CanSpawn: {
                get: function () {
if ( TRACE ) { TRACE( "TileData#CanSpawn#get", this ); }

                    return this.amount > 0;
                }
            }
        },
        methods: {
            /*TileData.Decrease start.*/
            Decrease: function () {
if ( TRACE ) { TRACE( "TileData#Decrease", this ); }

                this.amount = (this.amount - 1) | 0;
            },
            /*TileData.Decrease end.*/


        }
    });
    /*TileData end.*/

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

                    return System.Linq.Enumerable.from(this.slots, BagSlot).where(function (b) {
                            return b.Busy;
                        }).toList(BagSlot);
                }
            },
            HaveEmptySlot: {
                get: function () {
if ( TRACE ) { TRACE( "TilesBag#HaveEmptySlot#get", this ); }

                    return System.Linq.Enumerable.from(this.slots, BagSlot).any(function (s) {
                            return s.IsFree;
                        });
                }
            },
            EmptySlot: {
                get: function () {
if ( TRACE ) { TRACE( "TilesBag#EmptySlot#get", this ); }

                    return System.Linq.Enumerable.from(this.slots, BagSlot).firstOrDefault(Bridge.fn.bind(this, function (s) {
                            return s.IsFree;
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

                this.slots = new (System.Collections.Generic.List$1(BagSlot)).ctor();
                Bridge.event(this, "OnPut", function () { });
                Bridge.event(this, "OnRemove", function () { });
            }
        },
        methods: {
            /*TilesBag.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TilesBag#Awake", this ); }

                for (var i = 0; i < this.slots.Count; i = (i + 1) | 0) {
                    this.slots.getItem(i).ID = i;
                }
            },
            /*TilesBag.Awake end.*/

            /*TilesBag.Put start.*/
            Put: function (tileSlot, bagSlot) {
if ( TRACE ) { TRACE( "TilesBag#Put", this ); }

                tileSlot.PutInBag();
                bagSlot.Put(tileSlot);
                this.OnPut();
            },
            /*TilesBag.Put end.*/

            /*TilesBag.Remove start.*/
            Remove: function (slot) {
if ( TRACE ) { TRACE( "TilesBag#Remove", this ); }

                var find = System.Linq.Enumerable.from(this.slots, BagSlot).firstOrDefault(Bridge.fn.bind(this, function (s) {
                        return UnityEngine.MonoBehaviour.op_Equality(s.TileSlot, slot);
                    }), null);
                if (UnityEngine.Object.op_Implicit(find)) {
                    find.Empty();
                    this.OnRemove();
                }
            },
            /*TilesBag.Remove end.*/


        }
    });
    /*TilesBag end.*/

    /*TileSlot start.*/
    Bridge.define("TileSlot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            background: null,
            defaultSize: null,
            speed: 0,
            spawnAnimSize: 0,
            spawnAnimDuration: 0,
            moveDuration: 0,
            _isSpawnAnimation: false,
            _spawnTimer: 0,
            _targetPosition: null,
            _timer: 0,
            _isMoving: false,
            _targetSlot: null,
            Layer: 0,
            Tile: null,
            InBag: false
        },
        events: {
            OnMoveFinish: null
        },
        props: {
            IsClickable: {
                get: function () {
if ( TRACE ) { TRACE( "TileSlot#IsClickable#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.Tile) && this.Tile.IsClickable && !this._isMoving;
                }
            },
            IsFree: {
                get: function () {
if ( TRACE ) { TRACE( "TileSlot#IsFree#get", this ); }

                    return !UnityEngine.Object.op_Implicit(this.Tile);
                }
            },
            Data: {
                get: function () {
if ( TRACE ) { TRACE( "TileSlot#Data#get", this ); }

                    return this.Tile.Data;
                }
            },
            Position: {
                get: function () {
if ( TRACE ) { TRACE( "TileSlot#Position#get", this ); }

                    return UnityEngine.Vector2.FromVector3(this.transform.position.$clone());
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TileSlot#init", this ); }

                this.defaultSize = new UnityEngine.Vector3();
                this._targetPosition = new UnityEngine.Vector3();
                this.defaultSize = new pc.Vec3( 1, 1, 1 );
                this.spawnAnimSize = 1.5;
                this.spawnAnimDuration = 0.3;
                this.moveDuration = 0.5;
                this._spawnTimer = 0.0;
                Bridge.event(this, "OnMoveFinish", function () { });
            }
        },
        methods: {
            /*TileSlot.MoveTo start.*/
            MoveTo: function (slot) {
if ( TRACE ) { TRACE( "TileSlot#MoveTo", this ); }

                this.Tile.icon.sortingOrder = 1000;
                this.background.sortingOrder = 1000;
                this._targetSlot = slot;
                this._targetPosition = UnityEngine.Vector3.FromVector2(slot.Position.$clone());
                var distance = this.Position.$clone().sub( UnityEngine.Vector2.FromVector3(this._targetPosition) ).length();
                this._isMoving = true;
            },
            /*TileSlot.MoveTo end.*/

            /*TileSlot.Init start.*/
            Init: function (id) {
if ( TRACE ) { TRACE( "TileSlot#Init", this ); }

                this.Layer = id;
                this.background.sortingOrder = this.Layer;
                if (UnityEngine.Application.isPlaying) {
                }
            },
            /*TileSlot.Init end.*/

            /*TileSlot.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TileSlot#Update", this ); }

                if (this._isMoving) {
                    this.transform.position = pc.Vec3.moveTowards( UnityEngine.Vector3.FromVector2(this.Position), this._targetPosition, this.speed * UnityEngine.Time.deltaTime );
                    if (pc.Vec3.distance( this.transform.position, this._targetPosition ) < 0.01) {
                        this.transform.position = this._targetPosition.$clone();
                        this._isMoving = false;
                        this.Tile.icon.sortingOrder = 0;
                        this.background.sortingOrder = 0;
                        this.OnMoveFinish(this, this._targetSlot);
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
            /*TileSlot.Update end.*/

            /*TileSlot.Put start.*/
            Put: function (put) {
if ( TRACE ) { TRACE( "TileSlot#Put", this ); }

                this.Tile = put;
                this.Tile.icon.sortingOrder = (this.Layer + 1) | 0;
                this.Tile.disabledTile.sortingOrder = (this.Layer + 2) | 0;
                this.Tile.SetSlot(this);
            },
            /*TileSlot.Put end.*/

            /*TileSlot.SpawnAnimation start.*/
            SpawnAnimation: function () {
if ( TRACE ) { TRACE( "TileSlot#SpawnAnimation", this ); }

                this.transform.localScale = pc.Vec3.ZERO.clone();
                this._isSpawnAnimation = true;
                this.Show();
            },
            /*TileSlot.SpawnAnimation end.*/

            /*TileSlot.PutInBag start.*/
            PutInBag: function () {
if ( TRACE ) { TRACE( "TileSlot#PutInBag", this ); }

                this.InBag = true;
            },
            /*TileSlot.PutInBag end.*/

            /*TileSlot.Empty start.*/
            Empty: function () {
if ( TRACE ) { TRACE( "TileSlot#Empty", this ); }

                this.Tile = null;
            },
            /*TileSlot.Empty end.*/

            /*TileSlot.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "TileSlot#Hide", this ); }

                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
            },
            /*TileSlot.Hide end.*/

            /*TileSlot.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "TileSlot#Show", this ); }

                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
            },
            /*TileSlot.Show end.*/


        }
    });
    /*TileSlot end.*/

    /*Deck start.*/
    Bridge.define("Deck", {
        inherits: [GameComponent],
        fields: {
            Layers: null
        },
        props: {
            Slots: {
                get: function () {
if ( TRACE ) { TRACE( "Deck#Slots#get", this ); }

                    return System.Linq.Enumerable.from(this.Layers, DeckLayer).selectMany(function (layer) {
                            return layer.Slots;
                        }).toList(TileSlot);
                }
            },
            FirstLayer: {
                get: function () {
if ( TRACE ) { TRACE( "Deck#FirstLayer#get", this ); }

                    var $t, $t1;
                    return ($t1 = TileSlot, System.Linq.Enumerable.from(($t = this.Layers)[0].Slots, $t1).toList($t1));
                }
            },
            SecondLayer: {
                get: function () {
if ( TRACE ) { TRACE( "Deck#SecondLayer#get", this ); }

                    var $t, $t1;
                    return ($t1 = TileSlot, System.Linq.Enumerable.from(($t = this.Layers)[1].Slots, $t1).toList($t1));
                }
            }
        },
        methods: {
            /*Deck.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "Deck#OnInit", this ); }

                this.FindPlatforms();
                this.InitPlatforms();
            },
            /*Deck.OnInit end.*/

            /*Deck.FindPlatforms start.*/
            FindPlatforms: function () {
if ( TRACE ) { TRACE( "Deck#FindPlatforms", this ); }

                this.Layers = this.GetComponentsInChildren(DeckLayer);
            },
            /*Deck.FindPlatforms end.*/

            /*Deck.InitPlatforms start.*/
            InitPlatforms: function () {
if ( TRACE ) { TRACE( "Deck#InitPlatforms", this ); }

                var $t;
                var layers = this.Layers;
                $t = Bridge.getEnumerator(layers);
                try {
                    while ($t.moveNext()) {
                        var layer = $t.Current;
                        layer.Init(this);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Deck.InitPlatforms end.*/


        }
    });
    /*Deck end.*/

    /*EndCard start.*/
    Bridge.define("EndCard", {
        inherits: [GameComponent],
        methods: {
            /*EndCard.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "EndCard#OnInit", this ); }
 },
            /*EndCard.OnInit end.*/


        }
    });
    /*EndCard end.*/

    /*InputTouch start.*/
    Bridge.define("InputTouch", {
        inherits: [GameComponent],
        fields: {
            touches: null,
            touchSize: 0
        },
        events: {
            OnTouchScreen: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "InputTouch#init", this ); }

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

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
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

    /*MatchCondition start.*/
    Bridge.define("MatchCondition", {
        inherits: [GameComponent],
        fields: {
            completeSlots: null
        },
        events: {
            OnMatch: null
        },
        props: {
            Completed: {
                get: function () {
if ( TRACE ) { TRACE( "MatchCondition#Completed#get", this ); }

                    return this.completeSlots.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MatchCondition#init", this ); }

                this.completeSlots = new (System.Collections.Generic.List$1(TileSlot)).ctor();
                Bridge.event(this, "OnMatch", function () { });
            }
        },
        methods: {
            /*MatchCondition.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "MatchCondition#OnInit", this ); }

                this.Game.Bag.addOnPut(Bridge.fn.cacheBind(this, this.Check));
            },
            /*MatchCondition.OnInit end.*/

            /*MatchCondition.Check start.*/
            Check: function () {
if ( TRACE ) { TRACE( "MatchCondition#Check", this ); }

                var $t;
                var bag = this.Game.Bag;
                $t = Bridge.getEnumerator(bag.BusySlots);
                try {
                    while ($t.moveNext()) {
                        var slot = { v : $t.Current };
                        var same = this.SameAmount(slot.v.Data.type);
                        if (same < 3) {
                            continue;
                        }
                        var match = System.Linq.Enumerable.from(bag.BusySlots, BagSlot).where((function ($me, slot) {
                                return function (s) {
                                    return s.Data.type === slot.v.Data.type;
                                };
                            })(this, slot)).toList(BagSlot);
                        this.Match(match);
                        break;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*MatchCondition.Check end.*/

            /*MatchCondition.SameAmount start.*/
            SameAmount: function (type) {
if ( TRACE ) { TRACE( "MatchCondition#SameAmount", this ); }

                return System.Linq.Enumerable.from(this.Game.Bag.BusySlots, BagSlot).count(function (check) {
                        return check.Data.type === type;
                    });
            },
            /*MatchCondition.SameAmount end.*/

            /*MatchCondition.Match start.*/
            Match: function (bagSlots) {
if ( TRACE ) { TRACE( "MatchCondition#Match", this ); }

                var $t;
                $t = Bridge.getEnumerator(bagSlots);
                try {
                    while ($t.moveNext()) {
                        var bagSlot = $t.Current;
                        var slot = bagSlot.TileSlot;
                        slot.Hide();
                        this.completeSlots.add(slot);
                        this.Game.Bag.Remove(slot);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.OnMatch(bagSlots);
            },
            /*MatchCondition.Match end.*/


        }
    });
    /*MatchCondition end.*/

    /*TileActions start.*/
    Bridge.define("TileActions", {
        inherits: [GameComponent],
        fields: {
            _slots: null,
            _cam: null
        },
        methods: {
            /*TileActions.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileActions#OnInit", this ); }

                this._cam = UnityEngine.Camera.main;
                this.Game.Input.addOnTouchScreen(Bridge.fn.cacheBind(this, this.OnTouchScreen));
            },
            /*TileActions.OnInit end.*/

            /*TileActions.OnTouchScreen start.*/
            OnTouchScreen: function (touchPos, touchSize) {
if ( TRACE ) { TRACE( "TileActions#OnTouchScreen", this ); }

                var $t;
                var pos = this._cam.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(touchPos));
                var clickable = System.Linq.Enumerable.from(this._slots, TileSlot).where(function (s) {
                        return s.IsClickable;
                    });
                $t = Bridge.getEnumerator(clickable, TileSlot);
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
            Touched: function (slot) {
if ( TRACE ) { TRACE( "TileActions#Touched", this ); }

                this.Click(slot);
            },
            /*TileActions.Touched end.*/

            /*TileActions.Click start.*/
            Click: function (slot) {
if ( TRACE ) { TRACE( "TileActions#Click", this ); }

                UnityEngine.Debug.Log$1((slot.Tile.icon.sprite.name || "") + " clicked");
                if (!slot.InBag && !this.Game.Bag.NoSpace) {
                    var emptySlot = this.Game.Bag.EmptySlot;
                    emptySlot.Book(slot);
                    slot.MoveTo(emptySlot);
                    slot.addOnMoveFinish(Bridge.fn.cacheBind(this, this.PutBag));
                }
            },
            /*TileActions.Click end.*/

            /*TileActions.Observe start.*/
            Observe: function (tiles) {
if ( TRACE ) { TRACE( "TileActions#Observe", this ); }

                this._slots = tiles;
            },
            /*TileActions.Observe end.*/

            /*TileActions.PutBag start.*/
            PutBag: function (moving, bagSlot) {
if ( TRACE ) { TRACE( "TileActions#PutBag", this ); }

                UnityEngine.Debug.Log$1("Move finished");
                moving.removeOnMoveFinish(Bridge.fn.cacheBind(this, this.PutBag));
                this.Game.Bag.Put(moving, bagSlot);
            },
            /*TileActions.PutBag end.*/


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

                    return System.Linq.Enumerable.from(this.Game.Bag.BusySlots, BagSlot).where(function (slot) {
                            return slot.ID !== 0;
                        }).any(Bridge.fn.bind(this, function (slot) {
                        return this.Game.Bag.slots.getItem(((slot.ID - 1) | 0)).IsEmpty;
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
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._isSorting = true;
                                    $step = 1;
                                    continue;
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
                                    this.SortingSlot();
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

                return System.Linq.Enumerable.from(this.Game.Bag.BusySlots, BagSlot).where(function (slot) {
                        return slot.ID !== 0;
                    }).firstOrDefault(Bridge.fn.bind(this, function (slot) {
                        return this.Game.Bag.slots.getItem(((slot.ID - 1) | 0)).IsEmpty;
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
                    var current = { v : layer.id };
                    var onTop = { v : layers[((i + 1) | 0)].id };
                    $t = Bridge.getEnumerator(System.Linq.Enumerable.from(tiles, Tile).where((function ($me, current) {
                            return function (t) {
                                return t.Layer === current.v;
                            };
                        })(this, current)).toList(Tile));
                    try {
                        while ($t.moveNext()) {
                            var tile = { v : $t.Current };
                            var topTiles = System.Linq.Enumerable.from(tiles, Tile).where((function ($me, onTop) {
                                    return function (t) {
                                        return t.Layer === onTop.v;
                                    };
                                })(this, onTop)).toList(Tile);
                            var coverTiles = System.Linq.Enumerable.from(topTiles, Tile).where((function ($me, tile) {
                                    return Bridge.fn.bind($me, function (t) {
                                        return tile.v.Position.$clone().sub( t.Position ).length() <= this.lockDistance;
                                    });
                                })(this, tile)).toList(Tile);
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
                    groupedTiles,
                    $t,
                    group2,
                    $t1,
                    slot2,
                    groupedTiles2,
                    $t2,
                    group3,
                    $t3,
                    slot,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    groupedTiles = (System.Linq.Enumerable.from(slots, TileSlot).groupBy(function (tile) {
                                                return tile.Layer;
                                            }).select(function (group) {
                                            return group.toList(TileSlot);
                                        })).toList(System.Collections.Generic.List$1(TileSlot));
                                        $t = Bridge.getEnumerator(groupedTiles);
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ($t.moveNext()) {
                                            group2 = $t.Current;
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 8;
                                    continue;
                                }
                                case 2: {
                                    $t1 = Bridge.getEnumerator(group2);
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ($t1.moveNext()) {
                                            slot2 = $t1.Current;
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 6;
                                    continue;
                                }
                                case 4: {
                                    slot2.SpawnAnimation();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenTiles);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 3;
                                    continue;
                                }
                                case 6: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenLines);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 1;
                                    continue;
                                }
                                case 8: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenLayers);
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    groupedTiles2 = (System.Linq.Enumerable.from(slots2, TileSlot).groupBy(function (tile) {
                                                return tile.Layer;
                                            }).select(function (group) {
                                            return group.toList(TileSlot);
                                        })).toList(System.Collections.Generic.List$1(TileSlot));
                                        $t2 = Bridge.getEnumerator(groupedTiles2);
                                        $step = 10;
                                        continue;
                                }
                                case 10: {
                                    if ($t2.moveNext()) {
                                            group3 = $t2.Current;
                                            $step = 11;
                                            continue;
                                        }
                                    $step = 17;
                                    continue;
                                }
                                case 11: {
                                    $t3 = Bridge.getEnumerator(group3);
                                        $step = 12;
                                        continue;
                                }
                                case 12: {
                                    if ($t3.moveNext()) {
                                            slot = $t3.Current;
                                            $step = 13;
                                            continue;
                                        }
                                    $step = 15;
                                    continue;
                                }
                                case 13: {
                                    slot.SpawnAnimation();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenTiles);
                                        $step = 14;
                                        return true;
                                }
                                case 14: {
                                    $step = 12;
                                    continue;
                                }
                                case 15: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenLines);
                                        $step = 16;
                                        return true;
                                }
                                case 16: {
                                    $step = 10;
                                    continue;
                                }
                                case 17: {

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
            level: null,
            prefab: null,
            spawned: null,
            spawnData: null,
            hideAtSpawn: false,
            spawnRate: 0
        },
        events: {
            OnSpawnFinish: null
        },
        props: {
            Level: {
                get: function () {
if ( TRACE ) { TRACE( "TileSpawner#Level#get", this ); }

                    return this.level;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TileSpawner#init", this ); }

                this.level = new (System.Collections.Generic.List$1(TileData)).ctor();
                this.spawned = new (System.Collections.Generic.List$1(Tile)).ctor();
                this.spawnData = new (System.Collections.Generic.List$1(TileData)).ctor();
                this.hideAtSpawn = true;
                Bridge.event(this, "OnSpawnFinish", function () { });
            }
        },
        methods: {
            /*TileSpawner.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "TileSpawner#OnInit", this ); }

                for (var i = 0; i < this.level.Count; i = (i + 1) | 0) {
                    this.level.getItem(i).type = i;
                }
            },
            /*TileSpawner.OnInit end.*/

            /*TileSpawner.Spawn start.*/
            Spawn: function (tiles, layers) {
if ( TRACE ) { TRACE( "TileSpawner#Spawn", this ); }

                var tilez = System.Linq.Enumerable.from(tiles, TileData).sum(function (t) {
                        return t.amount;
                    });
                var slots = System.Linq.Enumerable.from(layers, DeckLayer).sum(function (p) {
                        return p.Slots.length;
                    });
                if (tilez !== slots) {
                    UnityEngine.Debug.LogError$2("Tiles amount should be equals bricks amount on scene");
                    UnityEngine.Debug.LogError$2("Tiles: " + tilez + ", Slots" + slots);
                } else {
                    this.StartCoroutine$1(this.RunSpawn(tiles, layers));
                }
            },
            /*TileSpawner.Spawn end.*/

            /*TileSpawner.RunSpawn start.*/
            RunSpawn: function (tileData, layers) {
if ( TRACE ) { TRACE( "TileSpawner#RunSpawn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    total,
                    i,
                    layer,
                    emptySlot,
                    data,
                    tile,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.spawnData = tileData;
                                        this.spawned.clear();
                                        total = System.Linq.Enumerable.from(tileData, TileData).sum(function (t) {
                                                return t.amount;
                                            });
                                        i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < total ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    layer = this.GetRandom(layers);
                                        emptySlot = layer.GetFreeSlot();
                                        if (UnityEngine.MonoBehaviour.op_Equality(emptySlot, null)) {
                                            UnityEngine.Debug.LogWarning$1("Why theres no empty slots?");
                                            $step = 4;
                                            continue;
                                        }
                                        data = this.GetRandom$1(tileData);
                                        data.Decrease();
                                        tile = UnityEngine.Object.Instantiate(Tile, this.prefab);
                                        tile.Set(data, layer.id);
                                        emptySlot.Put(tile);
                                        if (this.hideAtSpawn) {
                                            emptySlot.Hide();
                                        }
                                        this.spawned.add(tile);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0 / this.spawnRate);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    this.OnSpawnFinish(this.spawned);

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
            /*TileSpawner.RunSpawn end.*/

            /*TileSpawner.GetRandom$1 start.*/
            GetRandom$1: function (data) {
if ( TRACE ) { TRACE( "TileSpawner#GetRandom$1", this ); }

                var onlyFree = System.Linq.Enumerable.from(data, TileData).where(function (p) {
                        return p.CanSpawn;
                    });
                var r = UnityEngine.Random.Range(0, System.Linq.Enumerable.from(onlyFree, TileData).count());
                return data.getItem(r);
            },
            /*TileSpawner.GetRandom$1 end.*/

            /*TileSpawner.GetRandom start.*/
            GetRandom: function (layers) {
if ( TRACE ) { TRACE( "TileSpawner#GetRandom", this ); }

                var onlyFree = System.Linq.Enumerable.from(layers, DeckLayer).where(function (p) {
                        return p.AnyFreeSlot;
                    });
                var r = UnityEngine.Random.Range(0, System.Linq.Enumerable.from(onlyFree, DeckLayer).count());
                return layers[r];
            },
            /*TileSpawner.GetRandom end.*/


        },
        overloads: {
            "GetRandom(List<TileData>)": "GetRandom$1"
        }
    });
    /*TileSpawner end.*/

    /*WinCondition start.*/
    Bridge.define("WinCondition", {
        inherits: [GameComponent],
        fields: {
            completeSlots: null
        },
        events: {
            OnWin: null
        },
        props: {
            Completed: {
                get: function () {
if ( TRACE ) { TRACE( "WinCondition#Completed#get", this ); }

                    return this.completeSlots.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "WinCondition#init", this ); }

                this.completeSlots = new (System.Collections.Generic.List$1(TileSlot)).ctor();
                Bridge.event(this, "OnWin", function () { });
            }
        },
        methods: {
            /*WinCondition.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "WinCondition#OnInit", this ); }

                this.Game.MatchCondition.addOnMatch(Bridge.fn.cacheBind(this, this.Check));
            },
            /*WinCondition.OnInit end.*/

            /*WinCondition.Check start.*/
            Check: function (bagSlots) {
if ( TRACE ) { TRACE( "WinCondition#Check", this ); }

                if (this.Game.MatchCondition.Completed >= System.Array.getCount(this.Game.Tiles, Tile)) {
                    this.OnWin();
                }
            },
            /*WinCondition.Check end.*/


        }
    });
    /*WinCondition end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic","System.Collections"];

    /*BagSlot start.*/
    $m("BagSlot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Book","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"Book","rt":$n[0].Void,"p":[TileSlot]},{"a":2,"n":"Empty","t":8,"sn":"Empty","rt":$n[0].Void},{"a":2,"n":"Put","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"Put","rt":$n[0].Void,"p":[TileSlot]},{"a":2,"n":"StopBooking","t":8,"sn":"StopBooking","rt":$n[0].Void},{"a":1,"n":"Booked","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_Booked","t":8,"rt":$n[0].Boolean,"fg":"Booked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Booked"},{"a":2,"n":"Busy","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Busy","t":8,"rt":$n[0].Boolean,"fg":"Busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Busy"},{"a":2,"n":"Data","t":16,"rt":TileData,"g":{"a":2,"n":"get_Data","t":8,"rt":TileData,"fg":"Data"},"fn":"Data"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"IsFree","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsFree","t":8,"rt":$n[0].Boolean,"fg":"IsFree","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsFree"},{"a":2,"n":"Position","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[1].Vector2,"fg":"Position"},"fn":"Position"},{"a":2,"n":"ID","t":4,"rt":$n[0].Int32,"sn":"ID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TileSlot","t":4,"rt":TileSlot,"sn":"TileSlot"},{"a":2,"n":"bookedSlot","t":4,"rt":TileSlot,"sn":"bookedSlot"}]}; }, $n);
    /*BagSlot end.*/

    /*Deck start.*/
    $m("Deck", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindPlatforms","t":8,"sn":"FindPlatforms","rt":$n[0].Void},{"a":1,"n":"InitPlatforms","t":8,"sn":"InitPlatforms","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"FirstLayer","t":16,"rt":$n[2].List$1(TileSlot),"g":{"a":2,"n":"get_FirstLayer","t":8,"rt":$n[2].List$1(TileSlot),"fg":"FirstLayer"},"fn":"FirstLayer"},{"a":2,"n":"Layers","t":16,"rt":System.Array.type(DeckLayer),"g":{"a":2,"n":"get_Layers","t":8,"rt":System.Array.type(DeckLayer),"fg":"Layers"},"s":{"a":1,"n":"set_Layers","t":8,"p":[System.Array.type(DeckLayer)],"rt":$n[0].Void,"fs":"Layers"},"fn":"Layers"},{"a":2,"n":"SecondLayer","t":16,"rt":$n[2].List$1(TileSlot),"g":{"a":2,"n":"get_SecondLayer","t":8,"rt":$n[2].List$1(TileSlot),"fg":"SecondLayer"},"fn":"SecondLayer"},{"a":2,"n":"Slots","t":16,"rt":$n[2].List$1(TileSlot),"g":{"a":2,"n":"get_Slots","t":8,"rt":$n[2].List$1(TileSlot),"fg":"Slots"},"fn":"Slots"},{"a":1,"backing":true,"n":"<Layers>k__BackingField","t":4,"rt":System.Array.type(DeckLayer),"sn":"Layers"}]}; }, $n);
    /*Deck end.*/

    /*DeckBuilder start.*/
    $m("DeckBuilder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*DeckBuilder end.*/

    /*DeckLayer start.*/
    $m("DeckLayer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindSlots","t":8,"sn":"FindSlots","rt":$n[0].Void},{"a":2,"n":"GetFreeSlot","t":8,"sn":"GetFreeSlot","rt":TileSlot},{"a":2,"n":"Init","t":8,"pi":[{"n":"deck","pt":Deck,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[Deck]},{"a":1,"n":"InitSlots","t":8,"sn":"InitSlots","rt":$n[0].Void},{"a":2,"n":"AnyFreeSlot","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_AnyFreeSlot","t":8,"rt":$n[0].Boolean,"fg":"AnyFreeSlot","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"AnyFreeSlot"},{"a":2,"n":"Slots","t":16,"rt":System.Array.type(TileSlot),"g":{"a":2,"n":"get_Slots","t":8,"rt":System.Array.type(TileSlot),"fg":"Slots"},"s":{"a":1,"n":"set_Slots","t":8,"p":[System.Array.type(TileSlot)],"rt":$n[0].Void,"fs":"Slots"},"fn":"Slots"},{"a":1,"n":"_deck","t":4,"rt":Deck,"sn":"_deck"},{"a":2,"n":"id","t":4,"rt":$n[0].Int32,"sn":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Slots>k__BackingField","t":4,"rt":System.Array.type(TileSlot),"sn":"Slots"}]}; }, $n);
    /*DeckLayer end.*/

    /*EndCard start.*/
    $m("EndCard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void}]}; }, $n);
    /*EndCard end.*/

    /*Game start.*/
    $m("Game", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"InitComponents","t":8,"sn":"InitComponents","rt":$n[0].Void},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"Spawn","t":8,"sn":"Spawn","rt":$n[0].Void},{"a":1,"n":"Spawned","t":8,"pi":[{"n":"tiles","pt":$n[2].List$1(Tile),"ps":0}],"sn":"Spawned","rt":$n[0].Void,"p":[$n[2].List$1(Tile)]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Bag","t":16,"rt":TilesBag,"g":{"a":2,"n":"get_Bag","t":8,"rt":TilesBag,"fg":"Bag"},"fn":"Bag"},{"a":2,"n":"Input","t":16,"rt":InputTouch,"g":{"a":2,"n":"get_Input","t":8,"rt":InputTouch,"fg":"Input"},"fn":"Input"},{"a":2,"n":"LevelData","t":16,"rt":$n[2].IReadOnlyList$1(TileData),"g":{"a":2,"n":"get_LevelData","t":8,"rt":$n[2].IReadOnlyList$1(TileData),"fg":"LevelData"},"fn":"LevelData"},{"a":2,"n":"MatchCondition","t":16,"rt":MatchCondition,"g":{"a":2,"n":"get_MatchCondition","t":8,"rt":MatchCondition,"fg":"MatchCondition"},"fn":"MatchCondition"},{"a":2,"n":"Tiles","t":16,"rt":$n[2].IReadOnlyList$1(Tile),"g":{"a":2,"n":"get_Tiles","t":8,"rt":$n[2].IReadOnlyList$1(Tile),"fg":"Tiles"},"fn":"Tiles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"actions","t":4,"rt":TileActions,"sn":"actions"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bag","t":4,"rt":TilesBag,"sn":"bag"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deck","t":4,"rt":Deck,"sn":"deck"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"input","t":4,"rt":InputTouch,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"locker","t":4,"rt":TileLocker,"sn":"locker"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loseCondition","t":4,"rt":LoseCondition,"sn":"loseCondition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"matchCondition","t":4,"rt":MatchCondition,"sn":"matchCondition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"randomTiles","t":4,"rt":$n[0].Boolean,"sn":"randomTiles","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnAnimation","t":4,"rt":TileSpawnAnimation,"sn":"spawnAnimation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawner","t":4,"rt":TileSpawner,"sn":"spawner"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tiles","t":4,"rt":$n[2].List$1(Tile),"sn":"tiles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"totalBricks","t":4,"rt":$n[0].Int32,"sn":"totalBricks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SpaceAttribute.$ctor1(20.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"totalTiles","t":4,"rt":$n[0].Int32,"sn":"totalTiles","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winCondition","t":4,"rt":WinCondition,"sn":"winCondition"}]}; }, $n);
    /*Game end.*/

    /*GameComponent start.*/
    $m("GameComponent", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"pi":[{"n":"game","pt":Game,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[Game]},{"ab":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":3,"n":"Game","t":4,"rt":Game,"sn":"Game"}]}; }, $n);
    /*GameComponent end.*/

    /*InputTouch start.*/
    $m("InputTouch", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"touchSize","t":4,"rt":$n[0].Single,"sn":"touchSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"touches","t":4,"rt":$n[2].List$1(UnityEngine.Vector2),"sn":"touches"},{"a":2,"n":"OnTouchScreen","t":2,"ad":{"a":2,"n":"add_OnTouchScreen","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTouchScreen","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTouchScreen","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTouchScreen","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*InputTouch end.*/

    /*LoseCondition start.*/
    $m("LoseCondition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Check","t":8,"sn":"Check","rt":$n[0].Void},{"a":1,"n":"Lose","t":8,"sn":"Lose","rt":$n[0].Void},{"a":1,"n":"OnBagChange","t":8,"sn":"OnBagChange","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_checkDelay","t":4,"rt":$n[0].Single,"sn":"_checkDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnLose","t":2,"ad":{"a":2,"n":"add_OnLose","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnLose","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnLose","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnLose","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*LoseCondition end.*/

    /*MatchCondition start.*/
    $m("MatchCondition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Check","t":8,"sn":"Check","rt":$n[0].Void},{"a":1,"n":"Match","t":8,"pi":[{"n":"bagSlots","pt":$n[2].List$1(BagSlot),"ps":0}],"sn":"Match","rt":$n[0].Void,"p":[$n[2].List$1(BagSlot)]},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"SameAmount","t":8,"pi":[{"n":"type","pt":$n[0].Int32,"ps":0}],"sn":"SameAmount","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Completed","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Completed","t":8,"rt":$n[0].Int32,"fg":"Completed","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Completed"},{"a":2,"n":"completeSlots","t":4,"rt":$n[2].List$1(TileSlot),"sn":"completeSlots"},{"a":2,"n":"OnMatch","t":2,"ad":{"a":2,"n":"add_OnMatch","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnMatch","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnMatch","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnMatch","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*MatchCondition end.*/

    /*Tile start.*/
    $m("Tile", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Disable","t":8,"sn":"Disable","rt":$n[0].Void},{"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"ResetPosition","t":8,"sn":"ResetPosition","rt":$n[0].Void},{"a":2,"n":"Set","t":8,"pi":[{"n":"data","pt":TileData,"ps":0},{"n":"layer","pt":$n[0].Int32,"ps":1}],"sn":"Set","rt":$n[0].Void,"p":[TileData,$n[0].Int32]},{"a":2,"n":"SetContacts","t":8,"pi":[{"n":"cover","pt":$n[2].List$1(Tile),"ps":0}],"sn":"SetContacts","rt":$n[0].Void,"p":[$n[2].List$1(Tile)]},{"a":2,"n":"SetSlot","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"SetSlot","rt":$n[0].Void,"p":[TileSlot]},{"a":2,"n":"Data","t":16,"rt":TileData,"g":{"a":2,"n":"get_Data","t":8,"rt":TileData,"fg":"Data"},"s":{"a":1,"n":"set_Data","t":8,"p":[TileData],"rt":$n[0].Void,"fs":"Data"},"fn":"Data"},{"a":2,"n":"IsClickable","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsClickable","t":8,"rt":$n[0].Boolean,"fg":"IsClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsClickable","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsClickable"},"fn":"IsClickable"},{"a":2,"n":"Layer","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Layer","t":8,"rt":$n[0].Int32,"fg":"Layer","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Layer","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Layer"},"fn":"Layer"},{"a":2,"n":"Position","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[1].Vector2,"fg":"Position"},"fn":"Position"},{"a":2,"n":"Slot","t":16,"rt":TileSlot,"g":{"a":2,"n":"get_Slot","t":8,"rt":TileSlot,"fg":"Slot"},"s":{"a":1,"n":"set_Slot","t":8,"p":[TileSlot],"rt":$n[0].Void,"fs":"Slot"},"fn":"Slot"},{"a":2,"n":"coverTiles","t":4,"rt":$n[2].List$1(Tile),"sn":"coverTiles"},{"a":2,"n":"disabledTile","t":4,"rt":$n[1].SpriteRenderer,"sn":"disabledTile"},{"a":2,"n":"icon","t":4,"rt":$n[1].SpriteRenderer,"sn":"icon"},{"a":2,"n":"OnClick","t":2,"ad":{"a":2,"n":"add_OnClick","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnClick","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnClick","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnClick","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Data>k__BackingField","t":4,"rt":TileData,"sn":"Data"},{"a":1,"backing":true,"n":"<IsClickable>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Layer>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Layer","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Slot>k__BackingField","t":4,"rt":TileSlot,"sn":"Slot"}]}; }, $n);
    /*Tile end.*/

    /*TileActions start.*/
    $m("TileActions", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Click","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"Click","rt":$n[0].Void,"p":[TileSlot]},{"a":2,"n":"Observe","t":8,"pi":[{"n":"tiles","pt":$n[2].List$1(TileSlot),"ps":0}],"sn":"Observe","rt":$n[0].Void,"p":[$n[2].List$1(TileSlot)]},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"OnTouchScreen","t":8,"pi":[{"n":"touchPos","pt":$n[1].Vector2,"ps":0},{"n":"touchSize","pt":$n[0].Single,"ps":1}],"sn":"OnTouchScreen","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single]},{"a":1,"n":"PutBag","t":8,"pi":[{"n":"moving","pt":TileSlot,"ps":0},{"n":"bagSlot","pt":BagSlot,"ps":1}],"sn":"PutBag","rt":$n[0].Void,"p":[TileSlot,BagSlot]},{"a":1,"n":"Touched","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"Touched","rt":$n[0].Void,"p":[TileSlot]},{"a":2,"n":"_cam","t":4,"rt":$n[1].Camera,"sn":"_cam"},{"a":1,"n":"_slots","t":4,"rt":$n[2].List$1(TileSlot),"sn":"_slots"}]}; }, $n);
    /*TileActions end.*/

    /*TileBagSorter start.*/
    $m("TileBagSorter", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Sort","t":8,"sn":"Sort","rt":$n[0].Void},{"a":1,"n":"Sorting","t":8,"sn":"Sorting","rt":$n[3].IEnumerator},{"a":1,"n":"SortingSlot","t":8,"sn":"SortingSlot","rt":BagSlot},{"a":1,"n":"NeedsSorting","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_NeedsSorting","t":8,"rt":$n[0].Boolean,"fg":"NeedsSorting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"NeedsSorting"},{"a":1,"n":"_isSorting","t":4,"rt":$n[0].Boolean,"sn":"_isSorting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"enable","t":4,"rt":$n[0].Boolean,"sn":"enable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"intervalSec","t":4,"rt":$n[0].Single,"sn":"intervalSec","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TileBagSorter end.*/

    /*TileData start.*/
    $m("TileData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Decrease","t":8,"sn":"Decrease","rt":$n[0].Void},{"a":2,"n":"CanSpawn","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_CanSpawn","t":8,"rt":$n[0].Boolean,"fg":"CanSpawn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CanSpawn"},{"a":2,"n":"amount","t":4,"rt":$n[0].Int32,"sn":"amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"icon","t":4,"rt":$n[1].Sprite,"sn":"icon"},{"a":2,"n":"type","t":4,"rt":$n[0].Int32,"sn":"type","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*TileData end.*/

    /*TileLocker start.*/
    $m("TileLocker", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"Refresh","t":8,"pi":[{"n":"tiles","pt":$n[2].List$1(Tile),"ps":0},{"n":"layers","pt":System.Array.type(DeckLayer),"ps":1}],"sn":"Refresh","rt":$n[0].Void,"p":[$n[2].List$1(Tile),System.Array.type(DeckLayer)]},{"a":2,"n":"lockDistance","t":4,"rt":$n[0].Single,"sn":"lockDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TileLocker end.*/

    /*TilesBag start.*/
    $m("TilesBag", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Put","t":8,"pi":[{"n":"tileSlot","pt":TileSlot,"ps":0},{"n":"bagSlot","pt":BagSlot,"ps":1}],"sn":"Put","rt":$n[0].Void,"p":[TileSlot,BagSlot]},{"a":2,"n":"Remove","t":8,"pi":[{"n":"slot","pt":TileSlot,"ps":0}],"sn":"Remove","rt":$n[0].Void,"p":[TileSlot]},{"a":2,"n":"BusySlots","t":16,"rt":$n[2].List$1(BagSlot),"g":{"a":2,"n":"get_BusySlots","t":8,"rt":$n[2].List$1(BagSlot),"fg":"BusySlots"},"fn":"BusySlots"},{"a":2,"n":"EmptySlot","t":16,"rt":BagSlot,"g":{"a":2,"n":"get_EmptySlot","t":8,"rt":BagSlot,"fg":"EmptySlot"},"fn":"EmptySlot"},{"a":2,"n":"HaveEmptySlot","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HaveEmptySlot","t":8,"rt":$n[0].Boolean,"fg":"HaveEmptySlot","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HaveEmptySlot"},{"a":2,"n":"NoSpace","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_NoSpace","t":8,"rt":$n[0].Boolean,"fg":"NoSpace","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"NoSpace"},{"a":2,"n":"slots","t":4,"rt":$n[2].List$1(BagSlot),"sn":"slots"},{"a":2,"n":"OnPut","t":2,"ad":{"a":2,"n":"add_OnPut","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnPut","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnPut","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnPut","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnRemove","t":2,"ad":{"a":2,"n":"add_OnRemove","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnRemove","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnRemove","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnRemove","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TilesBag end.*/

    /*TileSlot start.*/
    $m("TileSlot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Empty","t":8,"sn":"Empty","rt":$n[0].Void},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"MoveTo","t":8,"pi":[{"n":"slot","pt":BagSlot,"ps":0}],"sn":"MoveTo","rt":$n[0].Void,"p":[BagSlot]},{"a":2,"n":"Put","t":8,"pi":[{"n":"put","pt":Tile,"ps":0}],"sn":"Put","rt":$n[0].Void,"p":[Tile]},{"a":2,"n":"PutInBag","t":8,"sn":"PutInBag","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":2,"n":"SpawnAnimation","t":8,"sn":"SpawnAnimation","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Data","t":16,"rt":TileData,"g":{"a":2,"n":"get_Data","t":8,"rt":TileData,"fg":"Data"},"fn":"Data"},{"a":2,"n":"InBag","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_InBag","t":8,"rt":$n[0].Boolean,"fg":"InBag","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_InBag","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"InBag"},"fn":"InBag"},{"a":2,"n":"IsClickable","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsClickable","t":8,"rt":$n[0].Boolean,"fg":"IsClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsClickable"},{"a":2,"n":"IsFree","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsFree","t":8,"rt":$n[0].Boolean,"fg":"IsFree","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsFree"},{"a":2,"n":"Layer","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Layer","t":8,"rt":$n[0].Int32,"fg":"Layer","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Layer","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Layer"},"fn":"Layer"},{"a":2,"n":"Position","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[1].Vector2,"fg":"Position"},"fn":"Position"},{"a":2,"n":"Tile","t":16,"rt":Tile,"g":{"a":2,"n":"get_Tile","t":8,"rt":Tile,"fg":"Tile"},"s":{"a":1,"n":"set_Tile","t":8,"p":[Tile],"rt":$n[0].Void,"fs":"Tile"},"fn":"Tile"},{"a":1,"n":"_isMoving","t":4,"rt":$n[0].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isSpawnAnimation","t":4,"rt":$n[0].Boolean,"sn":"_isSpawnAnimation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_spawnTimer","t":4,"rt":$n[0].Single,"sn":"_spawnTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_targetPosition","t":4,"rt":$n[1].Vector3,"sn":"_targetPosition"},{"a":1,"n":"_targetSlot","t":4,"rt":BagSlot,"sn":"_targetSlot"},{"a":1,"n":"_timer","t":4,"rt":$n[0].Single,"sn":"_timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"background","t":4,"rt":$n[1].SpriteRenderer,"sn":"background"},{"a":2,"n":"defaultSize","t":4,"rt":$n[1].Vector3,"sn":"defaultSize"},{"a":2,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spawnAnimDuration","t":4,"rt":$n[0].Single,"sn":"spawnAnimDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spawnAnimSize","t":4,"rt":$n[0].Single,"sn":"spawnAnimSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnMoveFinish","t":2,"ad":{"a":2,"n":"add_OnMoveFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnMoveFinish","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnMoveFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnMoveFinish","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<InBag>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"InBag","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Layer>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Layer","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Tile>k__BackingField","t":4,"rt":Tile,"sn":"Tile"}]}; }, $n);
    /*TileSlot end.*/

    /*TileSpawnAnimation start.*/
    $m("TileSpawnAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Play","t":8,"pi":[{"n":"slots","pt":$n[2].List$1(TileSlot),"ps":0},{"n":"slots2","pt":$n[2].List$1(TileSlot),"ps":1}],"sn":"Play","rt":$n[3].IEnumerator,"p":[$n[2].List$1(TileSlot),$n[2].List$1(TileSlot)]},{"a":2,"n":"SpawnAnimation","t":8,"pi":[{"n":"slots","pt":$n[2].List$1(TileSlot),"ps":0},{"n":"slots2","pt":$n[2].List$1(TileSlot),"ps":1}],"sn":"SpawnAnimation","rt":$n[0].Void,"p":[$n[2].List$1(TileSlot),$n[2].List$1(TileSlot)]},{"a":2,"n":"delayBetweenLayers","t":4,"rt":$n[0].Single,"sn":"delayBetweenLayers","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"delayBetweenLines","t":4,"rt":$n[0].Single,"sn":"delayBetweenLines","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"delayBetweenTiles","t":4,"rt":$n[0].Single,"sn":"delayBetweenTiles","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TileSpawnAnimation end.*/

    /*TileSpawner start.*/
    $m("TileSpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetRandom","t":8,"pi":[{"n":"layers","pt":System.Array.type(DeckLayer),"ps":0}],"sn":"GetRandom","rt":DeckLayer,"p":[System.Array.type(DeckLayer)]},{"a":1,"n":"GetRandom","t":8,"pi":[{"n":"data","pt":$n[2].List$1(TileData),"ps":0}],"sn":"GetRandom$1","rt":TileData,"p":[$n[2].List$1(TileData)]},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"RunSpawn","t":8,"pi":[{"n":"tileData","pt":$n[2].List$1(TileData),"ps":0},{"n":"layers","pt":System.Array.type(DeckLayer),"ps":1}],"sn":"RunSpawn","rt":$n[3].IEnumerator,"p":[$n[2].List$1(TileData),System.Array.type(DeckLayer)]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"tiles","pt":$n[2].List$1(TileData),"ps":0},{"n":"layers","pt":System.Array.type(DeckLayer),"ps":1}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[2].List$1(TileData),System.Array.type(DeckLayer)]},{"a":2,"n":"Level","t":16,"rt":$n[2].List$1(TileData),"g":{"a":2,"n":"get_Level","t":8,"rt":$n[2].List$1(TileData),"fg":"Level"},"fn":"Level"},{"a":2,"n":"hideAtSpawn","t":4,"rt":$n[0].Boolean,"sn":"hideAtSpawn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("levelData"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"level","t":4,"rt":$n[2].List$1(TileData),"sn":"level"},{"a":2,"n":"prefab","t":4,"rt":Tile,"sn":"prefab"},{"a":2,"n":"spawnData","t":4,"rt":$n[2].List$1(TileData),"sn":"spawnData"},{"a":2,"n":"spawnRate","t":4,"rt":$n[0].Single,"sn":"spawnRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spawned","t":4,"rt":$n[2].List$1(Tile),"sn":"spawned"},{"a":2,"n":"OnSpawnFinish","t":2,"ad":{"a":2,"n":"add_OnSpawnFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnSpawnFinish","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnSpawnFinish","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnSpawnFinish","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*TileSpawner end.*/

    /*WinCondition start.*/
    $m("WinCondition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Check","t":8,"pi":[{"n":"bagSlots","pt":$n[2].List$1(BagSlot),"ps":0}],"sn":"Check","rt":$n[0].Void,"p":[$n[2].List$1(BagSlot)]},{"ov":true,"a":3,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":1,"n":"Completed","t":16,"rt":$n[0].Int32,"g":{"a":1,"n":"get_Completed","t":8,"rt":$n[0].Int32,"fg":"Completed","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Completed"},{"a":2,"n":"completeSlots","t":4,"rt":$n[2].List$1(TileSlot),"sn":"completeSlots"},{"a":2,"n":"OnWin","t":2,"ad":{"a":2,"n":"add_OnWin","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnWin","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnWin","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnWin","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*WinCondition end.*/

    }});
