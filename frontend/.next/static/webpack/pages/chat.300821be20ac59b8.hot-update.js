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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nlet socket;\nfunction Chat(props) {\n    _s();\n    const messages = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var username = localStorage.getItem(\"username\");\n        var rooms = localStorage.getItem(\"rooms\");\n        socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect(\"http://localhost:4000\");\n        if (router.query.status == \"Joining\") {\n            console.log([\n                \"Joining\",\n                username,\n                rooms\n            ]);\n            console.log(\"Joining\");\n            socket.emit(\"join_room\", {\n                username,\n                rooms\n            });\n        }\n        socket.on(\"receive_message\", (data)=>{\n            console.log(messages);\n            messages.current = [\n                ...messages.current,\n                data.message\n            ];\n            setRerender(Math.random.random.toString());\n        //setMessages([...messages, data.message]);\n        });\n        return ()=>{\n            socket.disconnect();\n        };\n    }, []);\n    /*\n  useEffect(() => {\n    console.log(messages);\n    socket.on(\"receive_message\", (data) => {\n      console.log(messages);\n        setMessages([...messages, data.message]);\n    });\n    return () => {\n      socket.off(\"receive_message\");\n    };\n  }, [socket]);*/ console.log(messages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center bg-netral-100\",\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"30vw\",\n                    height: \"90vh\",\n                    overflow: \"scroll\"\n                },\n                children: messages.current.map((message, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white-500 shadow-md py-6\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 47,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Message\",\n                        id: \"message\",\n                        className: \"focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            var message = document.getElementById(\"message\").value;\n                            var username = localStorage.getItem(\"username\");\n                            var rooms = localStorage.getItem(\"rooms\");\n                            socket.emit(\"send_message\", {\n                                username,\n                                rooms,\n                                message\n                            });\n                            messages.current = [\n                                ...messages.current,\n                                message\n                            ];\n                            setRerender(Math.random.random.toString());\n                            console.log(messages.current);\n                        //setMessages([...messages, message]);\n                        },\n                        className: \"text-white bg-blue-500 mx-2 px-5 rounded-md py-2\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"ocnzhu7HPzf2Fd0wtYYFIdhkDlc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9EO0FBQ1o7QUFDTjtBQUNsQyxJQUFJSztBQUNXLFNBQVNDLEtBQUtDLEtBQUssRUFBRTs7SUFDbEMsTUFBTUMsV0FBV1AsNkNBQU1BLENBQUMsRUFBRTtJQUMxQixNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTVMsU0FBU1Isc0RBQVNBO0lBQ3hCSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVksV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3BDLElBQUlDLFFBQVFGLGFBQWFDLE9BQU8sQ0FBQztRQUNqQ1QsU0FBU0QsZ0VBQVUsQ0FBQztRQUNwQixJQUFJTyxPQUFPTSxLQUFLLENBQUNDLE1BQU0sSUFBSSxXQUFXO1lBQ3BDQyxRQUFRQyxHQUFHLENBQUM7Z0JBQUM7Z0JBQVdSO2dCQUFVRzthQUFNO1lBQ3hDSSxRQUFRQyxHQUFHLENBQUM7WUFDWmYsT0FBT2dCLElBQUksQ0FBQyxhQUFhO2dCQUFFVDtnQkFBVUc7WUFBTTtRQUM3QyxDQUFDO1FBQ0RWLE9BQU9pQixFQUFFLENBQUMsbUJBQW1CLENBQUNDLE9BQVM7WUFDckNKLFFBQVFDLEdBQUcsQ0FBQ1o7WUFDWkEsU0FBU2dCLE9BQU8sR0FBRzttQkFBSWhCLFNBQVNnQixPQUFPO2dCQUFFRCxLQUFLRSxPQUFPO2FBQUM7WUFDdERmLFlBQVlnQixLQUFLQyxNQUFNLENBQUNBLE1BQU0sQ0FBQ0MsUUFBUTtRQUN2QywyQ0FBMkM7UUFDN0M7UUFDQSxPQUFPLElBQU07WUFDWHZCLE9BQU93QixVQUFVO1FBQ25CO0lBQ0YsR0FBRyxFQUFFO0lBQ0w7Ozs7Ozs7Ozs7ZUFVYSxHQUNiVixRQUFRQyxHQUFHLENBQUNaO0lBQ1oscUJBQ0UsOERBQUNzQjtRQUNDQyxXQUFVO1FBQ1ZDLE9BQU87WUFBRUMsT0FBTztZQUFTQyxRQUFRO1FBQVE7OzBCQUV6Qyw4REFBQ0o7Z0JBQUlFLE9BQU87b0JBQUVDLE9BQU87b0JBQVFDLFFBQVE7b0JBQVFDLFVBQVU7Z0JBQVM7MEJBQzdEM0IsU0FBU2dCLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDLENBQUNYLFNBQVNZLElBQU07b0JBQ3BDLHFCQUFPLDhEQUFDUDt3QkFBSUMsV0FBVTtrQ0FBK0JOOzs7Ozs7Z0JBQ3ZEOzs7Ozs7MEJBRUYsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ087d0JBQ0NDLGFBQVk7d0JBQ1pDLElBQUc7d0JBQ0hULFdBQVU7Ozs7OztrQ0FFWiw4REFBQ1U7d0JBQ0NDLFNBQVMsSUFBTTs0QkFDYixJQUFJakIsVUFBVWtCLFNBQVNDLGNBQWMsQ0FBQyxXQUFXQyxLQUFLOzRCQUN0RCxJQUFJakMsV0FBV0MsYUFBYUMsT0FBTyxDQUFDOzRCQUNwQyxJQUFJQyxRQUFRRixhQUFhQyxPQUFPLENBQUM7NEJBQ2pDVCxPQUFPZ0IsSUFBSSxDQUFDLGdCQUFnQjtnQ0FBRVQ7Z0NBQVVHO2dDQUFPVTs0QkFBUTs0QkFDdkRqQixTQUFTZ0IsT0FBTyxHQUFHO21DQUFJaEIsU0FBU2dCLE9BQU87Z0NBQUVDOzZCQUFROzRCQUNqRGYsWUFBWWdCLEtBQUtDLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDQyxRQUFROzRCQUN2Q1QsUUFBUUMsR0FBRyxDQUFDWixTQUFTZ0IsT0FBTzt3QkFDNUIsc0NBQXNDO3dCQUN4Qzt3QkFDQU8sV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQsQ0FBQztHQXJFdUJ6Qjs7UUFHUEgsa0RBQVNBOzs7S0FIRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmxldCBzb2NrZXQ7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KHByb3BzKSB7XG4gIGNvbnN0IG1lc3NhZ2VzID0gdXNlUmVmKFtdKTtcbiAgY29uc3QgW3JlcmVuZGVyLCBzZXRSZXJlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcbiAgICB2YXIgcm9vbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJvb21zXCIpO1xuICAgIHNvY2tldCA9IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIik7XG4gICAgaWYgKHJvdXRlci5xdWVyeS5zdGF0dXMgPT0gXCJKb2luaW5nXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFtcIkpvaW5pbmdcIiwgdXNlcm5hbWUsIHJvb21zXSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkpvaW5pbmdcIik7XG4gICAgICBzb2NrZXQuZW1pdChcImpvaW5fcm9vbVwiLCB7IHVzZXJuYW1lLCByb29tcyB9KTtcbiAgICB9XG4gICAgc29ja2V0Lm9uKFwicmVjZWl2ZV9tZXNzYWdlXCIsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlcyk7XG4gICAgICBtZXNzYWdlcy5jdXJyZW50ID0gWy4uLm1lc3NhZ2VzLmN1cnJlbnQsIGRhdGEubWVzc2FnZV07XG4gICAgICBzZXRSZXJlbmRlcihNYXRoLnJhbmRvbS5yYW5kb20udG9TdHJpbmcoKSk7XG4gICAgICAvL3NldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgZGF0YS5tZXNzYWdlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICAvKlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzKTtcbiAgICBzb2NrZXQub24oXCJyZWNlaXZlX21lc3NhZ2VcIiwgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzKTtcbiAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBkYXRhLm1lc3NhZ2VdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0Lm9mZihcInJlY2VpdmVfbWVzc2FnZVwiKTtcbiAgICB9O1xuICB9LCBbc29ja2V0XSk7Ki9cbiAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLW5ldHJhbC0xMDBcIlxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwdndcIiwgaGVpZ2h0OiBcIjEwMHZoXCIgfX1cbiAgICA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMwdndcIiwgaGVpZ2h0OiBcIjkwdmhcIiwgb3ZlcmZsb3c6IFwic2Nyb2xsXCIgfX0+XG4gICAgICAgIHttZXNzYWdlcy5jdXJyZW50Lm1hcCgobWVzc2FnZSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLTUwMCBzaGFkb3ctbWQgcHktNlwiPnttZXNzYWdlfTwvZGl2PjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGFwcGVhcmFuY2Utbm9uZSB3LTk2IHRleHQtc20gbGVhZGluZy02IHRleHQtc2xhdGUtOTAwIHBsYWNlaG9sZGVyLXNsYXRlLTQwMCByb3VuZGVkLW1kIHB5LTIgcGwtNSByaW5nLTEgcmluZy1zbGF0ZS0yMDAgc2hhZG93LXNtXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpLnZhbHVlO1xuICAgICAgICAgICAgdmFyIHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcbiAgICAgICAgICAgIHZhciByb29tcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicm9vbXNcIik7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRfbWVzc2FnZVwiLCB7IHVzZXJuYW1lLCByb29tcywgbWVzc2FnZSB9KTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLmN1cnJlbnQgPSBbLi4ubWVzc2FnZXMuY3VycmVudCwgbWVzc2FnZV07XG4gICAgICAgICAgICBzZXRSZXJlbmRlcihNYXRoLnJhbmRvbS5yYW5kb20udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlcy5jdXJyZW50KTtcbiAgICAgICAgICAgIC8vc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBtZXNzYWdlXSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIG14LTIgcHgtNSByb3VuZGVkLW1kIHB5LTJcIlxuICAgICAgICA+XG4gICAgICAgICAgU2VuZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiaW8iLCJzb2NrZXQiLCJDaGF0IiwicHJvcHMiLCJtZXNzYWdlcyIsInJlcmVuZGVyIiwic2V0UmVyZW5kZXIiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb29tcyIsImNvbm5lY3QiLCJxdWVyeSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlbWl0Iiwib24iLCJkYXRhIiwiY3VycmVudCIsIm1lc3NhZ2UiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJkaXNjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwibWFwIiwiaSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n"));

/***/ })

});