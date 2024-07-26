"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[877],{77843:function(d,e,a){a.r(e),a.d(e,{demos:function(){return I}});var t=a(75271),n=a(79755),I={}},54048:function(d,e,a){a.r(e),a.d(e,{demos:function(){return I}});var t=a(75271),n=a(13508),I={}},39140:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});var t=a(79755);const n=[{value:`
type SortableMethod = 'closest' | 'save' | 'toArray' | 'destroy' | 'option'

/**
 * useDraggable \u8FD4\u56DE\u503C
 */
export interface UseDraggableReturn extends Pick<Sortable, SortableMethod> {
  /**
   * \u542F\u52A8\u62D6\u62FD
   * @param {HTMLElement} target - \u6307\u5B9A\u62D6\u62FD\u7684\u5143\u7D20
   * @default - \u7EC4\u4EF6\u6839\u5143\u7D20\uFF0C\u53C2\u8003 [\u6307\u5B9A\u76EE\u6807\u5BB9\u5668](/demo/target-container/)\uFF0C\u9ED8\u8BA4\u4E3A\u7EC4\u4EF6\u6839\u5143\u7D20
   */
  start: (target?: HTMLElement) => void
  /**
   * \u6682\u505C\u62D6\u62FD
   */
  pause: () => void
  /**
   * \u6062\u590D\u62D6\u62FD
   */
  resume: () => void
}

export interface UseDraggableOptions<T> extends Options {
  clone?: (element: T) => T
  immediate?: boolean
  customUpdate?: (event: DraggableEvent) => void
}

interface DraggableEvent<T = any> extends DraggableEvent {
  data: T
  clonedData: T
}
`,paraId:0,tocIndex:0},{value:"Options",paraId:1,tocIndex:1},{value:" \u7EE7\u627F\u81EA ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:" \u6240\u6709\u7684\u914D\u7F6E\u9879\uFF0C\u5177\u4F53\u8BF7\u67E5\u770B ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:" \u5B98\u65B9\u6587\u6863",paraId:1,tocIndex:1},{value:`type Easing =
  | 'steps(int, start | end)'
  | 'cubic-bezier(n, n, n, n)'
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'step-start'
  | 'step-end'
  | 'initial'
  | 'inherit'

type PullResult = ReadonlyArray<string> | boolean | 'clone'
type PutResult = ReadonlyArray<string> | boolean

interface GroupOptions {
  /**
   * \u7EC4\u540D
   */
  name: string
  /**
   * \u4ECE\u5217\u8868\u4E2D\u79FB\u52A8\u7684\u80FD\u529B\u3002\u514B\u9686\u2014\u2014\u590D\u5236\u9879\u76EE\uFF0C\u800C\u4E0D\u662F\u79FB\u52A8\u3002
   */
  pull?: PullResult | ((to: Sortable, from: Sortable, dragEl: HTMLElement, event: SortableEvent) => PullResult) | undefined;
  /**
   * \u662F\u5426\u53EF\u4EE5\u4ECE\u5176\u4ED6\u5217\u8868\u4E2D\u6DFB\u52A0\u5143\u7D20\uFF0C\u6216\u8005\u53EF\u4EE5\u4ECE\u4E2D\u83B7\u53D6\u5143\u7D20\u7684\u7EC4\u540D\u6570\u7EC4\u3002
   */
  put?: PutResult | ((to: Sortable, from: Sortable, dragEl: HTMLElement, event: SortableEvent) => PutResult) | undefined;
  /**
   * \u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u5217\u8868\u540E\uFF0C\u5C06\u514B\u9686\u7684\u5143\u7D20\u6062\u590D\u5230\u521D\u59CB\u4F4D\u7F6E\u3002
   */
  revertClone?: boolean | undefined
}

type Group = string | GroupOptions | undefined

type ScrollFn =
  | ((
      this: Sortable,
      offsetX: number,
      offsetY: number,
      originalEvent: Event,
      touchEvt: TouchEvent,
      hoverTargetEl: HTMLElement
    ) => 'continue' | void)
  | undefined
`,paraId:2,tocIndex:1},{value:"\u53C2\u6570",paraId:3,tocIndex:1},{value:"\u8BF4\u660E",paraId:3,tocIndex:1},{value:"\u7C7B\u578B",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:1},{value:"animation",paraId:3,tocIndex:1},{value:"\u62D6\u52A8\u65F6\u663E\u793A\u52A8\u753B",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"0",paraId:3,tocIndex:1},{value:"chosenClass",paraId:3,tocIndex:1},{value:"\u88AB\u9009\u4E2D\u9879\u7684 css \u7C7B\u540D",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"'sortable-chosen'",paraId:3,tocIndex:1},{value:"delay",paraId:3,tocIndex:1},{value:"\u9009\u4E2D\u62D6\u62FD\u5EF6\u65F6",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"0",paraId:3,tocIndex:1},{value:"delayOnTouchOnly",paraId:3,tocIndex:1},{value:"touch",paraId:3,tocIndex:1},{value:" \u4E8B\u4EF6\u5EF6\u8FDF",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"0",paraId:3,tocIndex:1},{value:"direction",paraId:3,tocIndex:1},{value:"\u62D6\u62FD\u65B9\u5411\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u5224\u65AD\u3002\u53EF\u9009\u503C\u6709",paraId:3,tocIndex:1},{value:"horizontal",paraId:3,tocIndex:1},{value:" \u548C ",paraId:3,tocIndex:1},{value:"vertical",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"disabled",paraId:3,tocIndex:1},{value:"\u662F\u5426\u7981\u6B62\u62D6\u62FD",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:"false",paraId:3,tocIndex:1},{value:"dragClass",paraId:3,tocIndex:1},{value:"\u62D6\u62FD\u9879\u7C7B\u540D",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"'sortable-drag'",paraId:3,tocIndex:1},{value:"draggable",paraId:3,tocIndex:1},{value:"\u6307\u5B9A\u5143\u7D20\u5185\u7684\u54EA\u4E9B\u9879\u76EE\u5E94\u8BE5\u662F\u53EF\u62D6\u52A8\u7684",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"emptyInsertThreshold",paraId:3,tocIndex:1},{value:"\u62D6\u52A8\u65F6\u9F20\u6807\u5FC5\u987B\u4E0E\u7A7A\u53EF\u6392\u5E8F\u9879\u7684\u8DDD\u79BB\uFF08\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF09,\u4EE5\u4FBF\u5C06\u62D6\u52A8\u5143\u7D20\u63D2\u5165\u5230\u8BE5\u53EF\u6392\u5E8F\u9879\u4E2D, \u8BBE\u7F6E\u4E3A",paraId:3,tocIndex:1},{value:"0",paraId:3,tocIndex:1},{value:"\u7981\u7528\u6B64\u529F\u80FD\u3002",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"5",paraId:3,tocIndex:1},{value:"easing",paraId:3,tocIndex:1},{value:"\u7B80\u5316\u52A8\u753B\u3002",paraId:3,tocIndex:1},{value:"Easing",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"fallbackClass",paraId:3,tocIndex:1},{value:"\u5F53\u4F7F\u7528 forceFallback \u7684\u65F6\u5019\uFF0C\u88AB\u590D\u5236\u7684 dom \u7684 css \u7C7B\u540D",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"sortable-fallback",paraId:3,tocIndex:1},{value:"fallbackOnBody",paraId:3,tocIndex:1},{value:"\u5C06 cloned DOM \u5143\u7D20\u6302\u5230 body \u5143\u7D20\u4E0A\u3002",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:"false",paraId:3,tocIndex:1},{value:"fallbackTolerance",paraId:3,tocIndex:1},{value:"\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\u6307\u5B9A\u9F20\u6807\u5728\u88AB\u89C6\u4E3A\u62D6\u52A8\u4E4B\u524D\u5E94\u8BE5\u79FB\u52A8\u591A\u8FDC\u3002",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"0",paraId:3,tocIndex:1},{value:"filter",paraId:3,tocIndex:1},{value:"\u4E0D\u9700\u8981\u8FDB\u884C\u62D6\u52A8\u7684\u5143\u7D20",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"forceFallback",paraId:3,tocIndex:1},{value:"\u5FFD\u7565 HTML5 \u62D6\u62FD\u884C\u4E3A\uFF0C\u5F3A\u5236\u56DE\u9000",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:"false",paraId:3,tocIndex:1},{value:"ghostClass",paraId:3,tocIndex:1},{value:"drop placeholder \u7684 css \u7C7B\u540D",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"'sortable-ghost'",paraId:3,tocIndex:1},{value:"group",paraId:3,tocIndex:1},{value:"\u8981\u5C06\u5143\u7D20\u4ECE\u4E00\u4E2A\u5217\u8868\u62D6\u5230\u53E6\u4E00\u4E2A\u5217\u8868\u4E2D\uFF0C\u4E24\u4E2A\u5217\u8868\u5FC5\u987B\u5177\u6709\u76F8\u540C\u7684",paraId:3,tocIndex:1},{value:"group",paraId:3,tocIndex:1},{value:" \u503C\u3002\u60A8\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u5217\u8868\u662F\u5426\u53EF\u4EE5\u88AB\u79FB\u51FA\u3001\u6216\u8005\u514B\u9686\u4EE5\u53CA\u63A5\u6536\u5176\u4ED6\u5217\u8868\u5143\u7D20\u3002\u8BE6\u60C5\u67E5\u9605\u4E0A\u65B9 TS \u7C7B\u578B\u5B9A\u4E49",paraId:3,tocIndex:1},{value:"Group",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"handle",paraId:3,tocIndex:1},{value:"\u8BBE\u7F6E\u53EF\u62D6\u62FD\u53E5\u67C4\u7684 css \u7C7B\u540D\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u5BF9\u76EE\u6807\u5143\u7D20\u7684\u5B50\u5217\u8868\u64CD\u4F5C\u8FDB\u884C\u62D6\u62FD",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"invertSwap",paraId:3,tocIndex:1},{value:"\u5982\u679C\u8BBE\u7F6E\u4E3A true\uFF0C\u5C06\u59CB\u7EC8\u4F7F\u7528\u53CD\u5411\u4EA4\u6362\u533A",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:"false",paraId:3,tocIndex:1},{value:"invertedSwapThreshold",paraId:3,tocIndex:1},{value:"\u53CD\u5411\u4EA4\u6362\u9608\u503C\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5C06\u8BBE\u7F6E\u4E3A",paraId:3,tocIndex:1},{value:"swapThreshold",paraId:3,tocIndex:1},{value:" \u503C",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"preventOnFilter",paraId:3,tocIndex:1},{value:"\u89E6\u53D1 filter \u65F6\u8C03\u7528 event.preventDefault()",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:"true",paraId:3,tocIndex:1},{value:"removeCloneOnHide",paraId:3,tocIndex:1},{value:"\u5220\u9664\u4E0D\u663E\u793A\u7684\u514B\u9686\u5143\u7D20\uFF0C\u800C\u4E0D\u662F\u4EC5\u4EC5\u9690\u85CF\u5B83",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:"true",paraId:3,tocIndex:1},{value:"sort",paraId:3,tocIndex:1},{value:"\u5B9A\u4E49\u5217\u8868\u5355\u5143\u662F\u5426\u53EF\u4EE5\u5728\u5217\u8868\u5BB9\u5668\u5185\u8FDB\u884C\u62D6\u62FD\u6392\u5E8F",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:"true",paraId:3,tocIndex:1},{value:"swapThreshold",paraId:3,tocIndex:1},{value:"\u4EA4\u6362\u533A\u7684\u9608\u503C",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"1",paraId:3,tocIndex:1},{value:"touchStartThreshold",paraId:3,tocIndex:1},{value:"\u5728\u53D6\u6D88\u5EF6\u8FDF\u62D6\u52A8\u4E8B\u4EF6\u4E4B\u524D\u70B9\u5E94\u8BE5\u79FB\u52A8\u591A\u5C11\u50CF\u7D20",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"1",paraId:3,tocIndex:1},{value:"setData",paraId:3,tocIndex:1},{value:"\u4F20\u9012\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A",paraId:3,tocIndex:1},{value:"DataTransfer",paraId:3,tocIndex:1},{value:"\u7C7B\u578B\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A",paraId:3,tocIndex:1},{value:"HTMLElement",paraId:3,tocIndex:1},{value:" \u7C7B\u578B",paraId:3,tocIndex:1},{value:"Function",paraId:3,tocIndex:1},{value:"scroll",paraId:3,tocIndex:1},{value:"\u662F\u5426\u542F\u7528\u6EDA\u52A8",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:" or ",paraId:3,tocIndex:1},{value:"HTMLElement",paraId:3,tocIndex:1},{value:"true",paraId:3,tocIndex:1},{value:"scrollFn",paraId:3,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u6EDA\u52A8",paraId:3,tocIndex:1},{value:"ScrollFn",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"scrollSensitivity",paraId:3,tocIndex:1},{value:"\u9F20\u6807\u5FC5\u987B\u79BB\u8FB9\u7F18\u591A\u8FD1\u624D\u80FD\u5F00\u59CB\u6EDA\u52A8\uFF0C\u5355\u4F4D px",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"scrollSpeed",paraId:3,tocIndex:1},{value:"\u6EDA\u52A8\u901F\u5EA6(ms/px)",paraId:3,tocIndex:1},{value:"number",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"bubbleScroll",paraId:3,tocIndex:1},{value:"\u5C06\u81EA\u52A8\u6EDA\u52A8\u5E94\u7528\u4E8E\u6240\u6709\u7236\u5143\u7D20\uFF0C\u4EE5\u4FBF\u66F4\u8F7B\u677E\u5730\u79FB\u52A8",paraId:3,tocIndex:1},{value:"Boolean",paraId:3,tocIndex:1},{value:"true",paraId:3,tocIndex:1},{value:"onChoose",paraId:3,tocIndex:1},{value:"\u5143\u7D20\u88AB\u9009\u4E2D",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onUnchoose",paraId:3,tocIndex:1},{value:"\u5143\u7D20\u53D6\u6D88\u9009\u4E2D",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onStart",paraId:3,tocIndex:1},{value:"\u5143\u7D20\u5F00\u59CB\u62D6\u62FD",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onEnd",paraId:3,tocIndex:1},{value:"\u5143\u7D20\u53D6\u6D88\u62D6\u62FD",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onAdd",paraId:3,tocIndex:1},{value:"\u5143\u7D20\u4ECE\u4E00\u4E2A\u5217\u8868\u62D6\u62FD\u5230\u53E6\u4E00\u4E2A\u5217\u8868",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onUpdate",paraId:3,tocIndex:1},{value:"\u5143\u7D20\u987A\u5E8F\u66F4\u65B0\u65F6\u89E6\u53D1",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onSort",paraId:3,tocIndex:1},{value:"\u5217\u8868\u7684\u4EFB\u4F55\u66F4\u6539\u90FD\u4F1A\u89E6\u53D1",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onRemove",paraId:3,tocIndex:1},{value:"\u5143\u7D20\u4ECE\u5217\u8868\u4E2D\u79FB\u9664\u8FDB\u5165\u53E6\u4E00\u4E2A\u5217\u8868",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onFilter",paraId:3,tocIndex:1},{value:"\u8BD5\u56FE\u62D6\u62FD\u4E00\u4E2A filtered \u7684\u5143\u7D20",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onMove",paraId:3,tocIndex:1},{value:"\u62D6\u62FD\u79FB\u52A8\u7684\u65F6\u5019\u89E6\u53D1",paraId:3,tocIndex:1},{value:"((event: MoveEvent,originalEvent: Event) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onClone",paraId:3,tocIndex:1},{value:"\u514B\u9686\u4E00\u4E2A\u5143\u7D20\u65F6\u89E6\u53D1",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"onChange",paraId:3,tocIndex:1},{value:"\u62D6\u62FD\u5143\u7D20\u6539\u53D8\u4F4D\u7F6E\u65F6\u89E6\u53D1",paraId:3,tocIndex:1},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u7EC4\u4EF6\u7684 props \u5305\u542B ",paraId:4,tocIndex:3},{value:"Sortablejs",paraId:4,tocIndex:3},{value:" \u7684\u6240\u6709 options\uFF0C\u90FD\u53EF\u4EE5\u4F20\u9012\u7ED9\u7EC4\u4EF6\uFF0C\u5177\u4F53\u8BF7\u67E5\u770B ",paraId:4,tocIndex:3},{value:"Options",paraId:5,tocIndex:3},{value:"\u53C2\u6570",paraId:6,tocIndex:3},{value:"\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u5FC5\u4F20",paraId:6,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:3},{value:"list",paraId:6,tocIndex:3},{value:"\u4F20\u9012\u5217\u8868\u6570\u636E",paraId:6,tocIndex:3},{value:"\u662F",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"setList",paraId:6,tocIndex:3},{value:"\u6570\u636E\u4FEE\u6539\u65F6\u89E6\u53D1",paraId:6,tocIndex:3},{value:"\u662F",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"tag",paraId:6,tocIndex:3},{value:"\u7EC4\u4EF6\u6E32\u67D3\u7684\u6839\u5143\u7D20\u6807\u7B7E\u540D",paraId:6,tocIndex:3},{value:"\u5426",paraId:6,tocIndex:3},{value:"div",paraId:6,tocIndex:3},{value:"target",paraId:6,tocIndex:3},{value:"\u6307\u5B9A\u76EE\u6807\u5BB9\u5668\uFF0C\u672A\u4F20\u9012\u65F6\u4EE5\u7EC4\u4EF6\u4E3A\u6839\u5143\u7D20\uFF0C\u8BE6\u89C1 ",paraId:6,tocIndex:3},{value:"\u6307\u5B9A\u76EE\u6807\u5BB9\u5668",paraId:7,tocIndex:3},{value:"\u5426",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3}]},457:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});var t=a(13508);const n=[{value:"\u62D6\u62FD\u6392\u5E8F\u6A21\u5757\uFF0C\u652F\u6301 react >=16.8",paraId:0,tocIndex:0},{value:"\u7531\u4E8E ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:" \u7684 ",paraId:1,tocIndex:1},{value:"react",paraId:1,tocIndex:1},{value:" \u7EC4\u4EF6\u4E00\u76F4\u6CA1\u6709\u66F4\u65B0\uFF0C\u5DF2\u7ECF\u8DDF ",paraId:1,tocIndex:1},{value:"react",paraId:1,tocIndex:1},{value:" \u4E25\u91CD\u8131\u8282\uFF0C\u6240\u4EE5\u8BDE\u751F\u4E86\u8FD9\u4E2A\u9879\u76EE\uFF0C\u8FD9\u4E2A\u7EC4\u4EF6\u662F\u57FA\u4E8E ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:" \u7684\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u66F4\u591A\u5173\u4E8E ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:" \u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u67E5\u770B",paraId:1,tocIndex:1},{value:"Sortablejs \u5B98\u7F51",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u6211\u4EEC\u5BF9\u6B64\u5C01\u88C5\u4E86\u591A\u79CD\u7528\u6CD5\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6307\u4EE4\u7684\u65B9\u5F0F\uFF0C\u603B\u6709\u4E00\u6B3E\u9002\u5408\u60A8\u3002",paraId:2,tocIndex:1},{value:"\u5728 ",paraId:3,tocIndex:2},{value:"Sortablejs",paraId:3,tocIndex:2},{value:" \u5B98\u65B9\u4EE5\u5F80\u7684 ",paraId:3,tocIndex:2},{value:"React",paraId:3,tocIndex:2},{value:" \u7EC4\u4EF6\u4E2D\uFF0C\u90FD\u662F\u901A\u8FC7\u4F7F\u7528\u7EC4\u4EF6\u4F5C\u4E3A\u5217\u8868\u7684\u76F4\u63A5\u5B50\u5143\u7D20\u6765\u5B9E\u73B0\u62D6\u62FD\u5217\u8868\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528\u4E00\u4E9B\u7EC4\u4EF6\u5E93\u65F6\uFF0C\u5982\u679C\u7EC4\u4EF6\u5E93\u4E2D\u6CA1\u6709\u63D0\u4F9B\u5217\u8868\u6839\u5143\u7D20\u7684\u63D2\u69FD\uFF0C\u6211\u4EEC\u5F88\u96BE\u5B9E\u73B0\u62D6\u62FD\u5217\u8868\uFF0Creact-draggable-plus \u5B8C\u7F8E\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u4EFB\u4F55\u5143\u7D20\u4E0A\u4F7F\u7528\u62D6\u62FD\u5217\u8868\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6307\u5B9A\u5143\u7D20\u7684\u9009\u62E9\u5668\uFF0C\u6765\u83B7\u53D6\u5230\u5217\u8868\u6839\u5143\u7D20\uFF0C\u7136\u540E\u5C06\u5217\u8868\u6839\u5143\u7D20\u4F5C\u4E3A ",paraId:3,tocIndex:2},{value:"Sortablejs",paraId:3,tocIndex:2},{value:" \u7684 ",paraId:3,tocIndex:2},{value:"container",paraId:3,tocIndex:2},{value:"\uFF0C\u8BE6\u60C5\u53C2\u8003",paraId:3,tocIndex:2},{value:"\u6307\u5B9A\u76EE\u6807\u5BB9\u5668",paraId:4,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:`import React, { useRef, useState } from "react"
import { ReactDraggablePlush } from 'react-draggable-plus'
const Demo = () => {
  const el = useRef<any>(null)
  const [list, setList] = useState([{
    name: 'Joao',
    id: 1
  },
  {
    name: 'Jean',
    id: 2
  },
  {
    name: 'Johanna',
    id: 3
  },
  {
    name: 'Juan',
    id: 4
  }])
  return <>
    <ReactDraggablePlush
      ref={el}
      list={list}
      setList={setList}
      animation={150}
      ghostClass="ghost"
      className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded"
    >
      {
        list.map(item => {
          return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
        })
      }
    </ReactDraggablePlush>
  </>
}
export default Demo
`,paraId:5,tocIndex:5},{value:`import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
const Function = () => {
  const el = useRef<any>(null)
  const [list, setList] = useState([{
    name: 'Joao',
    id: 1
  },
  {
    name: 'Jean',
    id: 2
  },
  {
    name: 'Johanna',
    id: 3
  },
  {
    name: 'Juan',
    id: 4
  }])
  const { start } = useDraggable(el, list, setList, {
    animation: 150,
    ghostClass: 'ghost',
    onStart() {
      console.log('start')
    },
    onUpdate() {
      console.log('update')
    }
  })
  return <div className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded" ref={el}>
    {
      list.map(item => {
        return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
      })
    }
  </div>
}
export default Function
`,paraId:6,tocIndex:6}]}}]);
