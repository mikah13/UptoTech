"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@floating-ui+utils@0.1.6";
exports.ids = ["vendor-chunks/@floating-ui+utils@0.1.6"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alignments: () => (/* binding */ alignments),\n/* harmony export */   clamp: () => (/* binding */ clamp),\n/* harmony export */   createCoords: () => (/* binding */ createCoords),\n/* harmony export */   evaluate: () => (/* binding */ evaluate),\n/* harmony export */   expandPaddingObject: () => (/* binding */ expandPaddingObject),\n/* harmony export */   floor: () => (/* binding */ floor),\n/* harmony export */   getAlignment: () => (/* binding */ getAlignment),\n/* harmony export */   getAlignmentAxis: () => (/* binding */ getAlignmentAxis),\n/* harmony export */   getAlignmentSides: () => (/* binding */ getAlignmentSides),\n/* harmony export */   getAxisLength: () => (/* binding */ getAxisLength),\n/* harmony export */   getExpandedPlacements: () => (/* binding */ getExpandedPlacements),\n/* harmony export */   getOppositeAlignmentPlacement: () => (/* binding */ getOppositeAlignmentPlacement),\n/* harmony export */   getOppositeAxis: () => (/* binding */ getOppositeAxis),\n/* harmony export */   getOppositeAxisPlacements: () => (/* binding */ getOppositeAxisPlacements),\n/* harmony export */   getOppositePlacement: () => (/* binding */ getOppositePlacement),\n/* harmony export */   getPaddingObject: () => (/* binding */ getPaddingObject),\n/* harmony export */   getSide: () => (/* binding */ getSide),\n/* harmony export */   getSideAxis: () => (/* binding */ getSideAxis),\n/* harmony export */   max: () => (/* binding */ max),\n/* harmony export */   min: () => (/* binding */ min),\n/* harmony export */   placements: () => (/* binding */ placements),\n/* harmony export */   rectToClientRect: () => (/* binding */ rectToClientRect),\n/* harmony export */   round: () => (/* binding */ round),\n/* harmony export */   sides: () => (/* binding */ sides)\n/* harmony export */ });\nconst sides = [\n    \"top\",\n    \"right\",\n    \"bottom\",\n    \"left\"\n];\nconst alignments = [\n    \"start\",\n    \"end\"\n];\nconst placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + \"-\" + alignments[0], side + \"-\" + alignments[1]), []);\nconst min = Math.min;\nconst max = Math.max;\nconst round = Math.round;\nconst floor = Math.floor;\nconst createCoords = (v)=>({\n        x: v,\n        y: v\n    });\nconst oppositeSideMap = {\n    left: \"right\",\n    right: \"left\",\n    bottom: \"top\",\n    top: \"bottom\"\n};\nconst oppositeAlignmentMap = {\n    start: \"end\",\n    end: \"start\"\n};\nfunction clamp(start, value, end) {\n    return max(start, min(value, end));\n}\nfunction evaluate(value, param) {\n    return typeof value === \"function\" ? value(param) : value;\n}\nfunction getSide(placement) {\n    return placement.split(\"-\")[0];\n}\nfunction getAlignment(placement) {\n    return placement.split(\"-\")[1];\n}\nfunction getOppositeAxis(axis) {\n    return axis === \"x\" ? \"y\" : \"x\";\n}\nfunction getAxisLength(axis) {\n    return axis === \"y\" ? \"height\" : \"width\";\n}\nfunction getSideAxis(placement) {\n    return [\n        \"top\",\n        \"bottom\"\n    ].includes(getSide(placement)) ? \"y\" : \"x\";\n}\nfunction getAlignmentAxis(placement) {\n    return getOppositeAxis(getSideAxis(placement));\n}\nfunction getAlignmentSides(placement, rects, rtl) {\n    if (rtl === void 0) {\n        rtl = false;\n    }\n    const alignment = getAlignment(placement);\n    const alignmentAxis = getAlignmentAxis(placement);\n    const length = getAxisLength(alignmentAxis);\n    let mainAlignmentSide = alignmentAxis === \"x\" ? alignment === (rtl ? \"end\" : \"start\") ? \"right\" : \"left\" : alignment === \"start\" ? \"bottom\" : \"top\";\n    if (rects.reference[length] > rects.floating[length]) {\n        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);\n    }\n    return [\n        mainAlignmentSide,\n        getOppositePlacement(mainAlignmentSide)\n    ];\n}\nfunction getExpandedPlacements(placement) {\n    const oppositePlacement = getOppositePlacement(placement);\n    return [\n        getOppositeAlignmentPlacement(placement),\n        oppositePlacement,\n        getOppositeAlignmentPlacement(oppositePlacement)\n    ];\n}\nfunction getOppositeAlignmentPlacement(placement) {\n    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);\n}\nfunction getSideList(side, isStart, rtl) {\n    const lr = [\n        \"left\",\n        \"right\"\n    ];\n    const rl = [\n        \"right\",\n        \"left\"\n    ];\n    const tb = [\n        \"top\",\n        \"bottom\"\n    ];\n    const bt = [\n        \"bottom\",\n        \"top\"\n    ];\n    switch(side){\n        case \"top\":\n        case \"bottom\":\n            if (rtl) return isStart ? rl : lr;\n            return isStart ? lr : rl;\n        case \"left\":\n        case \"right\":\n            return isStart ? tb : bt;\n        default:\n            return [];\n    }\n}\nfunction getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {\n    const alignment = getAlignment(placement);\n    let list = getSideList(getSide(placement), direction === \"start\", rtl);\n    if (alignment) {\n        list = list.map((side)=>side + \"-\" + alignment);\n        if (flipAlignment) {\n            list = list.concat(list.map(getOppositeAlignmentPlacement));\n        }\n    }\n    return list;\n}\nfunction getOppositePlacement(placement) {\n    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);\n}\nfunction expandPaddingObject(padding) {\n    return {\n        top: 0,\n        right: 0,\n        bottom: 0,\n        left: 0,\n        ...padding\n    };\n}\nfunction getPaddingObject(padding) {\n    return typeof padding !== \"number\" ? expandPaddingObject(padding) : {\n        top: padding,\n        right: padding,\n        bottom: padding,\n        left: padding\n    };\n}\nfunction rectToClientRect(rect) {\n    return {\n        ...rect,\n        top: rect.y,\n        left: rect.x,\n        right: rect.x + rect.width,\n        bottom: rect.y + rect.height\n    };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3V0aWxzQDAuMS42L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsUUFBUTtJQUFDO0lBQU87SUFBUztJQUFVO0NBQU87QUFDaEQsTUFBTUMsYUFBYTtJQUFDO0lBQVM7Q0FBTTtBQUNuQyxNQUFNQyxhQUFhLFdBQVcsR0FBRUYsTUFBTUcsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNELElBQUlFLE1BQU0sQ0FBQ0QsTUFBTUEsT0FBTyxNQUFNSixVQUFVLENBQUMsRUFBRSxFQUFFSSxPQUFPLE1BQU1KLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtBQUN4SSxNQUFNTSxNQUFNQyxLQUFLRCxHQUFHO0FBQ3BCLE1BQU1FLE1BQU1ELEtBQUtDLEdBQUc7QUFDcEIsTUFBTUMsUUFBUUYsS0FBS0UsS0FBSztBQUN4QixNQUFNQyxRQUFRSCxLQUFLRyxLQUFLO0FBQ3hCLE1BQU1DLGVBQWVDLENBQUFBLElBQU07UUFDekJDLEdBQUdEO1FBQ0hFLEdBQUdGO0lBQ0w7QUFDQSxNQUFNRyxrQkFBa0I7SUFDdEJDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLEtBQUs7QUFDUDtBQUNBLE1BQU1DLHVCQUF1QjtJQUMzQkMsT0FBTztJQUNQQyxLQUFLO0FBQ1A7QUFDQSxTQUFTQyxNQUFNRixLQUFLLEVBQUVHLEtBQUssRUFBRUYsR0FBRztJQUM5QixPQUFPZCxJQUFJYSxPQUFPZixJQUFJa0IsT0FBT0Y7QUFDL0I7QUFDQSxTQUFTRyxTQUFTRCxLQUFLLEVBQUVFLEtBQUs7SUFDNUIsT0FBTyxPQUFPRixVQUFVLGFBQWFBLE1BQU1FLFNBQVNGO0FBQ3REO0FBQ0EsU0FBU0csUUFBUUMsU0FBUztJQUN4QixPQUFPQSxVQUFVQyxLQUFLLENB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O0FBQ0Y7QUFDQSxTQUFTQyxpQkFBaUJELE9BQU87SUFDL0IsT0FBTyxPQUFPQSxZQUFZLFdBQVdELG9CQUFvQkMsV0FBVztRQUNsRTVDLEtBQUs0QztRQUNMOUMsT0FBTzhDO1FBQ1A3QyxRQUFRNkM7UUFDUi9DLE1BQU0rQztJQUNSO0FBQ0Y7QUFDQSxTQUFTRSxpQkFBaUJDLElBQUk7SUFDNUIsT0FBTztRQUNMLEdBQUdBLElBQUk7UUFDUC9DLEtBQUsrQyxLQUFLcEQsQ0FBQztRQUNYRSxNQUFNa0QsS0FBS3JELENBQUM7UUFDWkksT0FBT2lELEtBQUtyRCxDQUFDLEdBQUdxRCxLQUFLQyxLQUFLO1FBQzFCakQsUUFBUWdELEtBQUtwRCxDQUFDLEdBQUdvRCxLQUFLRSxNQUFNO0lBQzlCO0FBQ0Y7QUFFeVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLWJsb2cvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3V0aWxzQDAuMS42L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanM/MDdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaWRlcyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5jb25zdCBhbGlnbm1lbnRzID0gWydzdGFydCcsICdlbmQnXTtcbmNvbnN0IHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovc2lkZXMucmVkdWNlKChhY2MsIHNpZGUpID0+IGFjYy5jb25jYXQoc2lkZSwgc2lkZSArIFwiLVwiICsgYWxpZ25tZW50c1swXSwgc2lkZSArIFwiLVwiICsgYWxpZ25tZW50c1sxXSksIFtdKTtcbmNvbnN0IG1pbiA9IE1hdGgubWluO1xuY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCByb3VuZCA9IE1hdGgucm91bmQ7XG5jb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG5jb25zdCBjcmVhdGVDb29yZHMgPSB2ID0+ICh7XG4gIHg6IHYsXG4gIHk6IHZcbn0pO1xuY29uc3Qgb3Bwb3NpdGVTaWRlTWFwID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuY29uc3Qgb3Bwb3NpdGVBbGlnbm1lbnRNYXAgPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZnVuY3Rpb24gY2xhbXAoc3RhcnQsIHZhbHVlLCBlbmQpIHtcbiAgcmV0dXJuIG1heChzdGFydCwgbWluKHZhbHVlLCBlbmQpKTtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlKHZhbHVlLCBwYXJhbSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUocGFyYW0pIDogdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRTaWRlKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59XG5mdW5jdGlvbiBnZXRBeGlzTGVuZ3RoKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbn1cbmZ1bmN0aW9uIGdldFNpZGVBeGlzKHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5jbHVkZXMoZ2V0U2lkZShwbGFjZW1lbnQpKSA/ICd5JyA6ICd4Jztcbn1cbmZ1bmN0aW9uIGdldEFsaWdubWVudEF4aXMocGxhY2VtZW50KSB7XG4gIHJldHVybiBnZXRPcHBvc2l0ZUF4aXMoZ2V0U2lkZUF4aXMocGxhY2VtZW50KSk7XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnRTaWRlcyhwbGFjZW1lbnQsIHJlY3RzLCBydGwpIHtcbiAgaWYgKHJ0bCA9PT0gdm9pZCAwKSB7XG4gICAgcnRsID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IGFsaWdubWVudEF4aXMgPSBnZXRBbGlnbm1lbnRBeGlzKHBsYWNlbWVudCk7XG4gIGNvbnN0IGxlbmd0aCA9IGdldEF4aXNMZW5ndGgoYWxpZ25tZW50QXhpcyk7XG4gIGxldCBtYWluQWxpZ25tZW50U2lkZSA9IGFsaWdubWVudEF4aXMgPT09ICd4JyA/IGFsaWdubWVudCA9PT0gKHJ0bCA/ICdlbmQnIDogJ3N0YXJ0JykgPyAncmlnaHQnIDogJ2xlZnQnIDogYWxpZ25tZW50ID09PSAnc3RhcnQnID8gJ2JvdHRvbScgOiAndG9wJztcbiAgaWYgKHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdID4gcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXSkge1xuICAgIG1haW5BbGlnbm1lbnRTaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpbkFsaWdubWVudFNpZGUpO1xuICB9XG4gIHJldHVybiBbbWFpbkFsaWdubWVudFNpZGUsIGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKV07XG59XG5mdW5jdGlvbiBnZXRFeHBhbmRlZFBsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGNvbnN0IG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBhbGlnbm1lbnQgPT4gb3Bwb3NpdGVBbGlnbm1lbnRNYXBbYWxpZ25tZW50XSk7XG59XG5mdW5jdGlvbiBnZXRTaWRlTGlzdChzaWRlLCBpc1N0YXJ0LCBydGwpIHtcbiAgY29uc3QgbHIgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgY29uc3QgcmwgPSBbJ3JpZ2h0JywgJ2xlZnQnXTtcbiAgY29uc3QgdGIgPSBbJ3RvcCcsICdib3R0b20nXTtcbiAgY29uc3QgYnQgPSBbJ2JvdHRvbScsICd0b3AnXTtcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgaWYgKHJ0bCkgcmV0dXJuIGlzU3RhcnQgPyBybCA6IGxyO1xuICAgICAgcmV0dXJuIGlzU3RhcnQgPyBsciA6IHJsO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gdGIgOiBidDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtdO1xuICB9XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzKHBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZGlyZWN0aW9uLCBydGwpIHtcbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGxldCBsaXN0ID0gZ2V0U2lkZUxpc3QoZ2V0U2lkZShwbGFjZW1lbnQpLCBkaXJlY3Rpb24gPT09ICdzdGFydCcsIHJ0bCk7XG4gIGlmIChhbGlnbm1lbnQpIHtcbiAgICBsaXN0ID0gbGlzdC5tYXAoc2lkZSA9PiBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnQpO1xuICAgIGlmIChmbGlwQWxpZ25tZW50KSB7XG4gICAgICBsaXN0ID0gbGlzdC5jb25jYXQobGlzdC5tYXAoZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgc2lkZSA9PiBvcHBvc2l0ZVNpZGVNYXBbc2lkZV0pO1xufVxuZnVuY3Rpb24gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC4uLnBhZGRpbmdcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFBhZGRpbmdPYmplY3QocGFkZGluZykge1xuICByZXR1cm4gdHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSA6IHtcbiAgICB0b3A6IHBhZGRpbmcsXG4gICAgcmlnaHQ6IHBhZGRpbmcsXG4gICAgYm90dG9tOiBwYWRkaW5nLFxuICAgIGxlZnQ6IHBhZGRpbmdcbiAgfTtcbn1cbmZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4ge1xuICAgIC4uLnJlY3QsXG4gICAgdG9wOiByZWN0LnksXG4gICAgbGVmdDogcmVjdC54LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfTtcbn1cblxuZXhwb3J0IHsgYWxpZ25tZW50cywgY2xhbXAsIGNyZWF0ZUNvb3JkcywgZXZhbHVhdGUsIGV4cGFuZFBhZGRpbmdPYmplY3QsIGZsb29yLCBnZXRBbGlnbm1lbnQsIGdldEFsaWdubWVudEF4aXMsIGdldEFsaWdubWVudFNpZGVzLCBnZXRBeGlzTGVuZ3RoLCBnZXRFeHBhbmRlZFBsYWNlbWVudHMsIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50LCBnZXRPcHBvc2l0ZUF4aXMsIGdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMsIGdldE9wcG9zaXRlUGxhY2VtZW50LCBnZXRQYWRkaW5nT2JqZWN0LCBnZXRTaWRlLCBnZXRTaWRlQXhpcywgbWF4LCBtaW4sIHBsYWNlbWVudHMsIHJlY3RUb0NsaWVudFJlY3QsIHJvdW5kLCBzaWRlcyB9O1xuIl0sIm5hbWVzIjpbInNpZGVzIiwiYWxpZ25tZW50cyIsInBsYWNlbWVudHMiLCJyZWR1Y2UiLCJhY2MiLCJzaWRlIiwiY29uY2F0IiwibWluIiwiTWF0aCIsIm1heCIsInJvdW5kIiwiZmxvb3IiLCJjcmVhdGVDb29yZHMiLCJ2IiwieCIsInkiLCJvcHBvc2l0ZVNpZGVNYXAiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJvcHBvc2l0ZUFsaWdubWVudE1hcCIsInN0YXJ0IiwiZW5kIiwiY2xhbXAiLCJ2YWx1ZSIsImV2YWx1YXRlIiwicGFyYW0iLCJnZXRTaWRlIiwicGxhY2VtZW50Iiwic3BsaXQiLCJnZXRBbGlnbm1lbnQiLCJnZXRPcHBvc2l0ZUF4aXMiLCJheGlzIiwiZ2V0QXhpc0xlbmd0aCIsImdldFNpZGVBeGlzIiwiaW5jbHVkZXMiLCJnZXRBbGlnbm1lbnRBeGlzIiwiZ2V0QWxpZ25tZW50U2lkZXMiLCJyZWN0cyIsInJ0bCIsImFsaWdubWVudCIsImFsaWdubWVudEF4aXMiLCJsZW5ndGgiLCJtYWluQWxpZ25tZW50U2lkZSIsInJlZmVyZW5jZSIsImZsb2F0aW5nIiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJnZXRFeHBhbmRlZFBsYWNlbWVudHMiLCJvcHBvc2l0ZVBsYWNlbWVudCIsImdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50IiwicmVwbGFjZSIsImdldFNpZGVMaXN0IiwiaXNTdGFydCIsImxyIiwicmwiLCJ0YiIsImJ0IiwiZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyIsImZsaXBBbGlnbm1lbnQiLCJkaXJlY3Rpb24iLCJsaXN0IiwibWFwIiwiZXhwYW5kUGFkZGluZ09iamVjdCIsInBhZGRpbmciLCJnZXRQYWRkaW5nT2JqZWN0IiwicmVjdFRvQ2xpZW50UmVjdCIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),\n/* harmony export */   getContainingBlock: () => (/* binding */ getContainingBlock),\n/* harmony export */   getDocumentElement: () => (/* binding */ getDocumentElement),\n/* harmony export */   getNearestOverflowAncestor: () => (/* binding */ getNearestOverflowAncestor),\n/* harmony export */   getNodeName: () => (/* binding */ getNodeName),\n/* harmony export */   getNodeScroll: () => (/* binding */ getNodeScroll),\n/* harmony export */   getOverflowAncestors: () => (/* binding */ getOverflowAncestors),\n/* harmony export */   getParentNode: () => (/* binding */ getParentNode),\n/* harmony export */   getWindow: () => (/* binding */ getWindow),\n/* harmony export */   isContainingBlock: () => (/* binding */ isContainingBlock),\n/* harmony export */   isElement: () => (/* binding */ isElement),\n/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),\n/* harmony export */   isLastTraversableNode: () => (/* binding */ isLastTraversableNode),\n/* harmony export */   isNode: () => (/* binding */ isNode),\n/* harmony export */   isOverflowElement: () => (/* binding */ isOverflowElement),\n/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),\n/* harmony export */   isTableElement: () => (/* binding */ isTableElement),\n/* harmony export */   isWebKit: () => (/* binding */ isWebKit)\n/* harmony export */ });\nfunction getNodeName(node) {\n    if (isNode(node)) {\n        return (node.nodeName || \"\").toLowerCase();\n    }\n    // Mocked nodes in testing environments may not be instances of Node. By\n    // returning `#document` an infinite loop won't occur.\n    // https://github.com/floating-ui/floating-ui/issues/2317\n    return \"#document\";\n}\nfunction getWindow(node) {\n    var _node$ownerDocument;\n    return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;\n}\nfunction getDocumentElement(node) {\n    var _ref;\n    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;\n}\nfunction isNode(value) {\n    return value instanceof Node || value instanceof getWindow(value).Node;\n}\nfunction isElement(value) {\n    return value instanceof Element || value instanceof getWindow(value).Element;\n}\nfunction isHTMLElement(value) {\n    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;\n}\nfunction isShadowRoot(value) {\n    // Browsers without `ShadowRoot` support.\n    if (typeof ShadowRoot === \"undefined\") {\n        return false;\n    }\n    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;\n}\nfunction isOverflowElement(element) {\n    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);\n    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && ![\n        \"inline\",\n        \"contents\"\n    ].includes(display);\n}\nfunction isTableElement(element) {\n    return [\n        \"table\",\n        \"td\",\n        \"th\"\n    ].includes(getNodeName(element));\n}\nfunction isContainingBlock(element) {\n    const webkit = isWebKit();\n    const css = getComputedStyle(element);\n    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block\n    return css.transform !== \"none\" || css.perspective !== \"none\" || (css.containerType ? css.containerType !== \"normal\" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== \"none\" : false) || !webkit && (css.filter ? css.filter !== \"none\" : false) || [\n        \"transform\",\n        \"perspective\",\n        \"filter\"\n    ].some((value)=>(css.willChange || \"\").includes(value)) || [\n        \"paint\",\n        \"layout\",\n        \"strict\",\n        \"content\"\n    ].some((value)=>(css.contain || \"\").includes(value));\n}\nfunction getContainingBlock(element) {\n    let currentNode = getParentNode(element);\n    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){\n        if (isContainingBlock(currentNode)) {\n            return currentNode;\n        } else {\n            currentNode = getParentNode(currentNode);\n        }\n    }\n    return null;\n}\nfunction isWebKit() {\n    if (typeof CSS === \"undefined\" || !CSS.supports) return false;\n    return CSS.supports(\"-webkit-backdrop-filter\", \"none\");\n}\nfunction isLastTraversableNode(node) {\n    return [\n        \"html\",\n        \"body\",\n        \"#document\"\n    ].includes(getNodeName(node));\n}\nfunction getComputedStyle(element) {\n    return getWindow(element).getComputedStyle(element);\n}\nfunction getNodeScroll(element) {\n    if (isElement(element)) {\n        return {\n            scrollLeft: element.scrollLeft,\n            scrollTop: element.scrollTop\n        };\n    }\n    return {\n        scrollLeft: element.pageXOffset,\n        scrollTop: element.pageYOffset\n    };\n}\nfunction getParentNode(node) {\n    if (getNodeName(node) === \"html\") {\n        return node;\n    }\n    const result = // Step into the shadow DOM of the parent of a slotted node.\n    node.assignedSlot || // DOM Element detected.\n    node.parentNode || // ShadowRoot detected.\n    isShadowRoot(node) && node.host || // Fallback.\n    getDocumentElement(node);\n    return isShadowRoot(result) ? result.host : result;\n}\nfunction getNearestOverflowAncestor(node) {\n    const parentNode = getParentNode(node);\n    if (isLastTraversableNode(parentNode)) {\n        return node.ownerDocument ? node.ownerDocument.body : node.body;\n    }\n    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {\n        return parentNode;\n    }\n    return getNearestOverflowAncestor(parentNode);\n}\nfunction getOverflowAncestors(node, list, traverseIframes) {\n    var _node$ownerDocument2;\n    if (list === void 0) {\n        list = [];\n    }\n    if (traverseIframes === void 0) {\n        traverseIframes = true;\n    }\n    const scrollableAncestor = getNearestOverflowAncestor(node);\n    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);\n    const win = getWindow(scrollableAncestor);\n    if (isBody) {\n        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);\n    }\n    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3V0aWxzQDAuMS42L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZG9tL2Rpc3QvZmxvYXRpbmctdWkudXRpbHMuZG9tLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxZQUFZQyxJQUFJO0lBQ3ZCLElBQUlDLE9BQU9ELE9BQU87UUFDaEIsT0FBTyxDQUFDQSxLQUFLRSxRQUFRLElBQUksRUFBQyxFQUFHQyxXQUFXO0lBQzFDO0lBQ0Esd0VBQXdFO0lBQ3hFLHNEQUFzRDtJQUN0RCx5REFBeUQ7SUFDekQsT0FBTztBQUNUO0FBQ0EsU0FBU0MsVUFBVUosSUFBSTtJQUNyQixJQUFJSztJQUNKLE9BQU8sQ0FBQ0wsUUFBUSxPQUFPLEtBQUssSUFBSSxDQUFDSyxzQkFBc0JMLEtBQUtNLGFBQWEsS0FBSyxPQUFPLEtBQUssSUFBSUQsb0JBQW9CRSxXQUFXLEtBQUtDO0FBQ3BJO0FBQ0EsU0FBU0MsbUJBQW1CVCxJQUFJO0lBQzlCLElBQUlVO0lBQ0osT0FBTyxDQUFDQSxPQUFPLENBQUNULE9BQU9ELFFBQVFBLEtBQUtNLGFBQWEsR0FBR04sS0FBS1csUUFBUSxLQUFLSCxPQUFPRyxRQUFRLEtBQUssT0FBTyxLQUFLLElBQUlELEtBQUtFLGVBQWU7QUFDaEk7QUFDQSxTQUFTWCxPQUFPWSxLQUFLO0lBQ25CLE9BQU9BLGlCQUFpQkMsUUFBUUQsaUJBQWlCVCxVQUFVUyxPQUFPQyxJQUFJO0FBQ3hFO0FBQ0EsU0FBU0MsVUFBVUYsS0FBSztJQUN0QixPQUFPQSxpQkFBaUJHLFdBQVdILGlCQUFpQlQsVUFBVVMsT0FBT0csT0FBTztBQUM5RTtBQUNBLFNBQVNDLGNBQWNKLEtBQUs7SUFDMUIsT0FBT0EsaUJBQWlCSyxlQUFlTCxpQkFBaUJULFVBQVVTLE9BQU9LLFdBQVc7QUFDdEY7QUFDQSxTQUFTQyxhQUFhTixLQUFLO0lBQ3pCLHlDQUF5QztJ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O0FBQzlDO0FBQ0EsU0FBU0ksMkJBQTJCMUQsSUFBSTtJQUN0QyxNQUFNd0QsYUFBYVgsY0FBYzdDO0lBQ2pDLElBQUk4QyxzQkFBc0JVLGFBQWE7UUFDckMsT0FBT3hELEtBQUtNLGFBQWEsR0FBR04sS0FBS00sYUFBYSxDQUFDcUQsSUFBSSxHQUFHM0QsS0FBSzJELElBQUk7SUFDakU7SUFDQSxJQUFJMUMsY0FBY3VDLGVBQWVuQyxrQkFBa0JtQyxhQUFhO1FBQzlELE9BQU9BO0lBQ1Q7SUFDQSxPQUFPRSwyQkFBMkJGO0FBQ3BDO0FBQ0EsU0FBU0kscUJBQXFCNUQsSUFBSSxFQUFFNkQsSUFBSSxFQUFFQyxlQUFlO0lBQ3ZELElBQUlDO0lBQ0osSUFBSUYsU0FBUyxLQUFLLEdBQUc7UUFDbkJBLE9BQU8sRUFBRTtJQUNYO0lBQ0EsSUFBSUMsb0JBQW9CLEtBQUssR0FBRztRQUM5QkEsa0JBQWtCO0lBQ3BCO0lBQ0EsTUFBTUUscUJBQXFCTiwyQkFBMkIxRDtJQUN0RCxNQUFNaUUsU0FBU0QsdUJBQXdCLEVBQUNELHVCQUF1Qi9ELEtBQUtNLGFBQWEsS0FBSyxPQUFPLEtBQUssSUFBSXlELHFCQUFxQkosSUFBSTtJQUMvSCxNQUFNTyxNQUFNOUQsVUFBVTREO0lBQ3RCLElBQUlDLFFBQVE7UUFDVixPQUFPSixLQUFLTSxNQUFNLENBQUNELEtBQUtBLElBQUlFLGNBQWMsSUFBSSxFQUFFLEVBQUUvQyxrQkFBa0IyQyxzQkFBc0JBLHFCQUFxQixFQUFFLEVBQUVFLElBQUlHLFlBQVksSUFBSVAsa0JBQWtCRixxQkFBcUJNLElBQUlHLFlBQVksSUFBSSxFQUFFO0lBQ3RNO0lBQ0EsT0FBT1IsS0FBS00sTUFBTSxDQUFDSCxvQkFBb0JKLHFCQUFxQkksb0JBQW9CLEVBQUUsRUFBRUY7QUFDdEY7QUFFbVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLWJsb2cvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3V0aWxzQDAuMS42L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZG9tL2Rpc3QvZmxvYXRpbmctdWkudXRpbHMuZG9tLm1qcz9lMDQzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldE5vZGVOYW1lKG5vZGUpIHtcbiAgaWYgKGlzTm9kZShub2RlKSkge1xuICAgIHJldHVybiAobm9kZS5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICAvLyBNb2NrZWQgbm9kZXMgaW4gdGVzdGluZyBlbnZpcm9ubWVudHMgbWF5IG5vdCBiZSBpbnN0YW5jZXMgb2YgTm9kZS4gQnlcbiAgLy8gcmV0dXJuaW5nIGAjZG9jdW1lbnRgIGFuIGluZmluaXRlIGxvb3Agd29uJ3Qgb2NjdXIuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZy11aS9mbG9hdGluZy11aS9pc3N1ZXMvMjMxN1xuICByZXR1cm4gJyNkb2N1bWVudCc7XG59XG5mdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICB2YXIgX25vZGUkb3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIChub2RlID09IG51bGwgPyB2b2lkIDAgOiAoX25vZGUkb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9ub2RlJG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIHx8IHdpbmRvdztcbn1cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChub2RlKSB7XG4gIHZhciBfcmVmO1xuICByZXR1cm4gKF9yZWYgPSAoaXNOb2RlKG5vZGUpID8gbm9kZS5vd25lckRvY3VtZW50IDogbm9kZS5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX3JlZi5kb2N1bWVudEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc05vZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgTm9kZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuTm9kZTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50IHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5FbGVtZW50O1xufVxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuSFRNTEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3QodmFsdWUpIHtcbiAgLy8gQnJvd3NlcnMgd2l0aG91dCBgU2hhZG93Um9vdGAgc3VwcG9ydC5cbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5TaGFkb3dSb290O1xufVxuZnVuY3Rpb24gaXNPdmVyZmxvd0VsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB7XG4gICAgb3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSxcbiAgICBkaXNwbGF5XG4gIH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVufGNsaXAvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpICYmICFbJ2lubGluZScsICdjb250ZW50cyddLmluY2x1ZGVzKGRpc3BsYXkpO1xufVxuZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluY2x1ZGVzKGdldE5vZGVOYW1lKGVsZW1lbnQpKTtcbn1cbmZ1bmN0aW9uIGlzQ29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2Via2l0ID0gaXNXZWJLaXQoKTtcbiAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuICByZXR1cm4gY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IChjc3MuY29udGFpbmVyVHlwZSA/IGNzcy5jb250YWluZXJUeXBlICE9PSAnbm9ybWFsJyA6IGZhbHNlKSB8fCAhd2Via2l0ICYmIChjc3MuYmFja2Ryb3BGaWx0ZXIgPyBjc3MuYmFja2Ryb3BGaWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCAhd2Via2l0ICYmIChjc3MuZmlsdGVyID8gY3NzLmZpbHRlciAhPT0gJ25vbmUnIDogZmFsc2UpIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJywgJ2ZpbHRlciddLnNvbWUodmFsdWUgPT4gKGNzcy53aWxsQ2hhbmdlIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpIHx8IFsncGFpbnQnLCAnbGF5b3V0JywgJ3N0cmljdCcsICdjb250ZW50J10uc29tZSh2YWx1ZSA9PiAoY3NzLmNvbnRhaW4gfHwgJycpLmluY2x1ZGVzKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBsZXQgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBpZiAoaXNDb250YWluaW5nQmxvY2soY3VycmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gaXNXZWJLaXQoKSB7XG4gIGlmICh0eXBlb2YgQ1NTID09PSAndW5kZWZpbmVkJyB8fCAhQ1NTLnN1cHBvcnRzKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBDU1Muc3VwcG9ydHMoJy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyJywgJ25vbmUnKTtcbn1cbmZ1bmN0aW9uIGlzTGFzdFRyYXZlcnNhYmxlTm9kZShub2RlKSB7XG4gIHJldHVybiBbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmNsdWRlcyhnZXROb2RlTmFtZShub2RlKSk7XG59XG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChlbGVtZW50KSB7XG4gIGlmIChpc0VsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnBhZ2VYT2Zmc2V0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5wYWdlWU9mZnNldFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIGlmIChnZXROb2RlTmFtZShub2RlKSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID1cbiAgLy8gU3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGUuXG4gIG5vZGUuYXNzaWduZWRTbG90IHx8XG4gIC8vIERPTSBFbGVtZW50IGRldGVjdGVkLlxuICBub2RlLnBhcmVudE5vZGUgfHxcbiAgLy8gU2hhZG93Um9vdCBkZXRlY3RlZC5cbiAgaXNTaGFkb3dSb290KG5vZGUpICYmIG5vZGUuaG9zdCB8fFxuICAvLyBGYWxsYmFjay5cbiAgZ2V0RG9jdW1lbnRFbGVtZW50KG5vZGUpO1xuICByZXR1cm4gaXNTaGFkb3dSb290KHJlc3VsdCkgPyByZXN1bHQuaG9zdCA6IHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpIHtcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUobm9kZSk7XG4gIGlmIChpc0xhc3RUcmF2ZXJzYWJsZU5vZGUocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50ID8gbm9kZS5vd25lckRvY3VtZW50LmJvZHkgOiBub2RlLmJvZHk7XG4gIH1cbiAgaWYgKGlzSFRNTEVsZW1lbnQocGFyZW50Tm9kZSkgJiYgaXNPdmVyZmxvd0VsZW1lbnQocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3IocGFyZW50Tm9kZSk7XG59XG5mdW5jdGlvbiBnZXRPdmVyZmxvd0FuY2VzdG9ycyhub2RlLCBsaXN0LCB0cmF2ZXJzZUlmcmFtZXMpIHtcbiAgdmFyIF9ub2RlJG93bmVyRG9jdW1lbnQyO1xuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG4gIGlmICh0cmF2ZXJzZUlmcmFtZXMgPT09IHZvaWQgMCkge1xuICAgIHRyYXZlcnNlSWZyYW1lcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc2Nyb2xsYWJsZUFuY2VzdG9yID0gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3Iobm9kZSk7XG4gIGNvbnN0IGlzQm9keSA9IHNjcm9sbGFibGVBbmNlc3RvciA9PT0gKChfbm9kZSRvd25lckRvY3VtZW50MiA9IG5vZGUub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9ub2RlJG93bmVyRG9jdW1lbnQyLmJvZHkpO1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsYWJsZUFuY2VzdG9yKTtcbiAgaWYgKGlzQm9keSkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdCh3aW4sIHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNPdmVyZmxvd0VsZW1lbnQoc2Nyb2xsYWJsZUFuY2VzdG9yKSA/IHNjcm9sbGFibGVBbmNlc3RvciA6IFtdLCB3aW4uZnJhbWVFbGVtZW50ICYmIHRyYXZlcnNlSWZyYW1lcyA/IGdldE92ZXJmbG93QW5jZXN0b3JzKHdpbi5mcmFtZUVsZW1lbnQpIDogW10pO1xuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChzY3JvbGxhYmxlQW5jZXN0b3IsIGdldE92ZXJmbG93QW5jZXN0b3JzKHNjcm9sbGFibGVBbmNlc3RvciwgW10sIHRyYXZlcnNlSWZyYW1lcykpO1xufVxuXG5leHBvcnQgeyBnZXRDb21wdXRlZFN0eWxlLCBnZXRDb250YWluaW5nQmxvY2ssIGdldERvY3VtZW50RWxlbWVudCwgZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3IsIGdldE5vZGVOYW1lLCBnZXROb2RlU2Nyb2xsLCBnZXRPdmVyZmxvd0FuY2VzdG9ycywgZ2V0UGFyZW50Tm9kZSwgZ2V0V2luZG93LCBpc0NvbnRhaW5pbmdCbG9jaywgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc0xhc3RUcmF2ZXJzYWJsZU5vZGUsIGlzTm9kZSwgaXNPdmVyZmxvd0VsZW1lbnQsIGlzU2hhZG93Um9vdCwgaXNUYWJsZUVsZW1lbnQsIGlzV2ViS2l0IH07XG4iXSwibmFtZXMiOlsiZ2V0Tm9kZU5hbWUiLCJub2RlIiwiaXNOb2RlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImdldFdpbmRvdyIsIl9ub2RlJG93bmVyRG9jdW1lbnQiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ3aW5kb3ciLCJnZXREb2N1bWVudEVsZW1lbnQiLCJfcmVmIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2YWx1ZSIsIk5vZGUiLCJpc0VsZW1lbnQiLCJFbGVtZW50IiwiaXNIVE1MRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiaXNTaGFkb3dSb290IiwiU2hhZG93Um9vdCIsImlzT3ZlcmZsb3dFbGVtZW50IiwiZWxlbWVudCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJpc1RhYmxlRWxlbWVudCIsImlzQ29udGFpbmluZ0Jsb2NrIiwid2Via2l0IiwiaXNXZWJLaXQiLCJjc3MiLCJ0cmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZSIsImNvbnRhaW5lclR5cGUiLCJiYWNrZHJvcEZpbHRlciIsImZpbHRlciIsInNvbWUiLCJ3aWxsQ2hhbmdlIiwiY29udGFpbiIsImdldENvbnRhaW5pbmdCbG9jayIsImN1cnJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImlzTGFzdFRyYXZlcnNhYmxlTm9kZSIsIkNTUyIsInN1cHBvcnRzIiwiZ2V0Tm9kZVNjcm9sbCIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwicmVzdWx0IiwiYXNzaWduZWRTbG90IiwicGFyZW50Tm9kZSIsImhvc3QiLCJnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvciIsImJvZHkiLCJnZXRPdmVyZmxvd0FuY2VzdG9ycyIsImxpc3QiLCJ0cmF2ZXJzZUlmcmFtZXMiLCJfbm9kZSRvd25lckRvY3VtZW50MiIsInNjcm9sbGFibGVBbmNlc3RvciIsImlzQm9keSIsIndpbiIsImNvbmNhdCIsInZpc3VhbFZpZXdwb3J0IiwiZnJhbWVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs\n");

/***/ })

};
;