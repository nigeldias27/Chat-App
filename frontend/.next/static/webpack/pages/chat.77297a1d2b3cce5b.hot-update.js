"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nlet socket;\nfunction Chat(props) {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var username = localStorage.getItem(\"username\");\n        var rooms = localStorage.getItem(\"rooms\");\n        socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect(\"http://localhost:4000\");\n        if (router.query.status == \"Joining\") {\n            console.log([\n                \"Joining\",\n                username,\n                rooms\n            ]);\n            console.log(\"Joining\");\n            socket.emit(\"join_room\", {\n                username,\n                rooms\n            });\n            socket.on(\"receive_message\", (data)=>{\n                setMessages([\n                    ...messages,\n                    data.message\n                ]);\n            });\n        }\n        return ()=>{\n            socket.disconnect();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(messages);\n        socket.on(\"receive_message\", (data)=>{\n            console.log(data);\n            console.log(messages);\n            setMessages([\n                ...messages,\n                data.message\n            ]);\n        });\n        return ()=>{\n            socket.off(\"receive_message\");\n        };\n    }, [\n        socket\n    ]);\n    console.log(messages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center bg-netral-100\",\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"30vw\",\n                    height: \"90vh\",\n                    overflow: \"scroll\"\n                },\n                children: messages.map((message)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white-500 shadow-md py-6\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 44,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Message\",\n                        id: \"message\",\n                        className: \"focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            var message = document.getElementById(\"message\").value;\n                            var username = localStorage.getItem(\"username\");\n                            var rooms = localStorage.getItem(\"rooms\");\n                            socket.emit(\"send_message\", {\n                                username,\n                                rooms,\n                                message\n                            });\n                            setMessages([\n                                ...messages,\n                                message\n                            ]);\n                        },\n                        className: \"text-white bg-blue-500 mx-2 px-5 rounded-md py-2\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"/M9GUzGDZK03qhe7BJub2vWHSXQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0o7QUFDTjtBQUNsQyxJQUFJSTtBQUNXLFNBQVNDLEtBQUtDLEtBQUssRUFBRTs7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVEsU0FBU1Asc0RBQVNBO0lBQ3hCRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVUsV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3BDLElBQUlDLFFBQVFGLGFBQWFDLE9BQU8sQ0FBQztRQUNqQ1IsU0FBU0QsZ0VBQVUsQ0FBQztRQUNwQixJQUFJTSxPQUFPTSxLQUFLLENBQUNDLE1BQU0sSUFBSSxXQUFXO1lBQ3BDQyxRQUFRQyxHQUFHLENBQUM7Z0JBQUM7Z0JBQVdSO2dCQUFVRzthQUFNO1lBQ3hDSSxRQUFRQyxHQUFHLENBQUM7WUFDWmQsT0FBT2UsSUFBSSxDQUFDLGFBQWE7Z0JBQUVUO2dCQUFVRztZQUFNO1lBQzNDVCxPQUFPZ0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDQyxPQUFTO2dCQUNyQ2IsWUFBWTt1QkFBSUQ7b0JBQVVjLEtBQUtDLE9BQU87aUJBQUM7WUFDekM7UUFDRixDQUFDO1FBRUQsT0FBTyxJQUFNO1lBQ1hsQixPQUFPbUIsVUFBVTtRQUNuQjtJQUNGLEdBQUcsRUFBRTtJQUNMdkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkaUIsUUFBUUMsR0FBRyxDQUFDWDtRQUNaSCxPQUFPZ0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDQyxPQUFTO1lBQ3JDSixRQUFRQyxHQUFHLENBQUNHO1lBQ1pKLFFBQVFDLEdBQUcsQ0FBQ1g7WUFDWkMsWUFBWTttQkFBSUQ7Z0JBQVVjLEtBQUtDLE9BQU87YUFBQztRQUN6QztRQUNBLE9BQU8sSUFBTTtZQUNYbEIsT0FBT29CLEdBQUcsQ0FBQztRQUNiO0lBQ0YsR0FBRztRQUFDcEI7S0FBTztJQUNYYSxRQUFRQyxHQUFHLENBQUNYO0lBQ1oscUJBQ0UsOERBQUNrQjtRQUNDQyxXQUFVO1FBQ1ZDLE9BQU87WUFBRUMsT0FBTztZQUFTQyxRQUFRO1FBQVE7OzBCQUV6Qyw4REFBQ0o7Z0JBQUlFLE9BQU87b0JBQUVDLE9BQU87b0JBQVFDLFFBQVE7b0JBQVFDLFVBQVU7Z0JBQVM7MEJBQzdEdkIsU0FBU3dCLEdBQUcsQ0FBQyxDQUFDVCxVQUFZO29CQUN6QixxQkFBTyw4REFBQ0c7d0JBQUlDLFdBQVU7a0NBQStCSjs7Ozs7O2dCQUN2RDs7Ozs7OzBCQUVGLDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUNDQyxhQUFZO3dCQUNaQyxJQUFHO3dCQUNIUixXQUFVOzs7Ozs7a0NBRVosOERBQUNTO3dCQUNDQyxTQUFTLElBQU07NEJBQ2IsSUFBSWQsVUFBVWUsU0FBU0MsY0FBYyxDQUFDLFdBQVdDLEtBQUs7NEJBQ3RELElBQUk3QixXQUFXQyxhQUFhQyxPQUFPLENBQUM7NEJBQ3BDLElBQUlDLFFBQVFGLGFBQWFDLE9BQU8sQ0FBQzs0QkFDakNSLE9BQU9lLElBQUksQ0FBQyxnQkFBZ0I7Z0NBQUVUO2dDQUFVRztnQ0FBT1M7NEJBQVE7NEJBQ3ZEZCxZQUFZO21DQUFJRDtnQ0FBVWU7NkJBQVE7d0JBQ3BDO3dCQUNBSSxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVCxDQUFDO0dBL0R1QnJCOztRQUVQSCxrREFBU0E7OztLQUZGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmxldCBzb2NrZXQ7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KHByb3BzKSB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xuICAgIHZhciByb29tcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicm9vbXNcIik7XG4gICAgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiKTtcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnN0YXR1cyA9PSBcIkpvaW5pbmdcIikge1xuICAgICAgY29uc29sZS5sb2coW1wiSm9pbmluZ1wiLCB1c2VybmFtZSwgcm9vbXNdKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSm9pbmluZ1wiKTtcbiAgICAgIHNvY2tldC5lbWl0KFwiam9pbl9yb29tXCIsIHsgdXNlcm5hbWUsIHJvb21zIH0pO1xuICAgICAgc29ja2V0Lm9uKFwicmVjZWl2ZV9tZXNzYWdlXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgZGF0YS5tZXNzYWdlXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xuICAgIHNvY2tldC5vbihcInJlY2VpdmVfbWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlcyk7XG4gICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIGRhdGEubWVzc2FnZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQub2ZmKFwicmVjZWl2ZV9tZXNzYWdlXCIpO1xuICAgIH07XG4gIH0sIFtzb2NrZXRdKTtcbiAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLW5ldHJhbC0xMDBcIlxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwdndcIiwgaGVpZ2h0OiBcIjEwMHZoXCIgfX1cbiAgICA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMwdndcIiwgaGVpZ2h0OiBcIjkwdmhcIiwgb3ZlcmZsb3c6IFwic2Nyb2xsXCIgfX0+XG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS01MDAgc2hhZG93LW1kIHB5LTZcIj57bWVzc2FnZX08L2Rpdj47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBhcHBlYXJhbmNlLW5vbmUgdy05NiB0ZXh0LXNtIGxlYWRpbmctNiB0ZXh0LXNsYXRlLTkwMCBwbGFjZWhvbGRlci1zbGF0ZS00MDAgcm91bmRlZC1tZCBweS0yIHBsLTUgcmluZy0xIHJpbmctc2xhdGUtMjAwIHNoYWRvdy1zbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIHZhciB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XG4gICAgICAgICAgICB2YXIgcm9vbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJvb21zXCIpO1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kX21lc3NhZ2VcIiwgeyB1c2VybmFtZSwgcm9vbXMsIG1lc3NhZ2UgfSk7XG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIG1lc3NhZ2VdKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctYmx1ZS01MDAgbXgtMiBweC01IHJvdW5kZWQtbWQgcHktMlwiXG4gICAgICAgID5cbiAgICAgICAgICBTZW5kXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJpbyIsInNvY2tldCIsIkNoYXQiLCJwcm9wcyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb29tcyIsImNvbm5lY3QiLCJxdWVyeSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlbWl0Iiwib24iLCJkYXRhIiwibWVzc2FnZSIsImRpc2Nvbm5lY3QiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJtYXAiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n"));

/***/ })

});