"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/chat";
exports.ids = ["pages/chat"];
exports.modules = {

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Chat)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nlet socket;\nfunction Chat(props) {\n    const messages = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var username = localStorage.getItem(\"username\");\n        var rooms = localStorage.getItem(\"rooms\");\n        socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect(\"http://localhost:4000\");\n        if (router.query.status == \"Joining\") {\n            console.log([\n                \"Joining\",\n                username,\n                rooms\n            ]);\n            console.log(\"Joining\");\n            socket.emit(\"join_room\", {\n                username,\n                rooms\n            });\n        }\n        socket.on(\"receive_message\", (data)=>{\n            console.log(messages);\n            messages.current = [\n                ...messages.current,\n                data.message\n            ];\n            setRerender(Math.random().toString());\n            console.log(Math.random().toString());\n        //setMessages([...messages, data.message]);\n        });\n        return ()=>{\n            socket.disconnect();\n        };\n    }, []);\n    /*\n  useEffect(() => {\n    console.log(messages);\n    socket.on(\"receive_message\", (data) => {\n      console.log(messages);\n        setMessages([...messages, data.message]);\n    });\n    return () => {\n      socket.off(\"receive_message\");\n    };\n  }, [socket]);*/ console.log(messages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center bg-netral-100\",\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"30vw\",\n                    height: \"90vh\",\n                    overflow: \"scroll\"\n                },\n                children: messages.current.map((message, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white-500 shadow-md py-6\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 48,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Message\",\n                        id: \"message\",\n                        className: \"focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            var message = document.getElementById(\"message\").value;\n                            var username = localStorage.getItem(\"username\");\n                            var rooms = localStorage.getItem(\"rooms\");\n                            socket.emit(\"send_message\", {\n                                username,\n                                rooms,\n                                message\n                            });\n                            messages.current = [\n                                ...messages.current,\n                                message\n                            ];\n                            setRerender(Math.random().toString());\n                            console.log(Math.random().toString());\n                            console.log(messages.current);\n                        //setMessages([...messages, message]);\n                        },\n                        className: \"text-white bg-blue-500 mx-2 px-5 rounded-md py-2\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nigeldias27/ReactProjects/chat/frontend/pages/chat.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0Q7QUFDWjtBQUNOO0FBQ2xDLElBQUlLO0FBQ1csU0FBU0MsS0FBS0MsS0FBSyxFQUFFO0lBQ2xDLE1BQU1DLFdBQVdQLDZDQUFNQSxDQUFDLEVBQUU7SUFDMUIsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1TLFNBQVNSLHNEQUFTQTtJQUN4QkgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlZLFdBQVdDLGFBQWFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJQyxRQUFRRixhQUFhQyxPQUFPLENBQUM7UUFDakNULFNBQVNELGdFQUFVLENBQUM7UUFDcEIsSUFBSU8sT0FBT00sS0FBSyxDQUFDQyxNQUFNLElBQUksV0FBVztZQUNwQ0MsUUFBUUMsR0FBRyxDQUFDO2dCQUFDO2dCQUFXUjtnQkFBVUc7YUFBTTtZQUN4Q0ksUUFBUUMsR0FBRyxDQUFDO1lBQ1pmLE9BQU9nQixJQUFJLENBQUMsYUFBYTtnQkFBRVQ7Z0JBQVVHO1lBQU07UUFDN0MsQ0FBQztRQUNEVixPQUFPaUIsRUFBRSxDQUFDLG1CQUFtQixDQUFDQyxPQUFTO1lBQ3JDSixRQUFRQyxHQUFHLENBQUNaO1lBQ1pBLFNBQVNnQixPQUFPLEdBQUc7bUJBQUloQixTQUFTZ0IsT0FBTztnQkFBRUQsS0FBS0UsT0FBTzthQUFDO1lBQ3REZixZQUFZZ0IsS0FBS0MsTUFBTSxHQUFHQyxRQUFRO1lBQ2xDVCxRQUFRQyxHQUFHLENBQUNNLEtBQUtDLE1BQU0sR0FBR0MsUUFBUTtRQUNsQywyQ0FBMkM7UUFDN0M7UUFDQSxPQUFPLElBQU07WUFDWHZCLE9BQU93QixVQUFVO1FBQ25CO0lBQ0YsR0FBRyxFQUFFO0lBQ0w7Ozs7Ozs7Ozs7ZUFVYSxHQUNiVixRQUFRQyxHQUFHLENBQUNaO0lBQ1oscUJBQ0UsOERBQUNzQjtRQUNDQyxXQUFVO1FBQ1ZDLE9BQU87WUFBRUMsT0FBTztZQUFTQyxRQUFRO1FBQVE7OzBCQUV6Qyw4REFBQ0o7Z0JBQUlFLE9BQU87b0JBQUVDLE9BQU87b0JBQVFDLFFBQVE7b0JBQVFDLFVBQVU7Z0JBQVM7MEJBQzdEM0IsU0FBU2dCLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDLENBQUNYLFNBQVNZLElBQU07b0JBQ3BDLHFCQUFPLDhEQUFDUDt3QkFBSUMsV0FBVTtrQ0FBK0JOOzs7Ozs7Z0JBQ3ZEOzs7Ozs7MEJBRUYsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ087d0JBQ0NDLGFBQVk7d0JBQ1pDLElBQUc7d0JBQ0hULFdBQVU7Ozs7OztrQ0FFWiw4REFBQ1U7d0JBQ0NDLFNBQVMsSUFBTTs0QkFDYixJQUFJakIsVUFBVWtCLFNBQVNDLGNBQWMsQ0FBQyxXQUFXQyxLQUFLOzRCQUN0RCxJQUFJakMsV0FBV0MsYUFBYUMsT0FBTyxDQUFDOzRCQUNwQyxJQUFJQyxRQUFRRixhQUFhQyxPQUFPLENBQUM7NEJBQ2pDVCxPQUFPZ0IsSUFBSSxDQUFDLGdCQUFnQjtnQ0FBRVQ7Z0NBQVVHO2dDQUFPVTs0QkFBUTs0QkFDdkRqQixTQUFTZ0IsT0FBTyxHQUFHO21DQUFJaEIsU0FBU2dCLE9BQU87Z0NBQUVDOzZCQUFROzRCQUNqRGYsWUFBWWdCLEtBQUtDLE1BQU0sR0FBR0MsUUFBUTs0QkFDbENULFFBQVFDLEdBQUcsQ0FBQ00sS0FBS0MsTUFBTSxHQUFHQyxRQUFROzRCQUNsQ1QsUUFBUUMsR0FBRyxDQUFDWixTQUFTZ0IsT0FBTzt3QkFDNUIsc0NBQXNDO3dCQUN4Qzt3QkFDQU8sV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmxldCBzb2NrZXQ7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KHByb3BzKSB7XG4gIGNvbnN0IG1lc3NhZ2VzID0gdXNlUmVmKFtdKTtcbiAgY29uc3QgW3JlcmVuZGVyLCBzZXRSZXJlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcbiAgICB2YXIgcm9vbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJvb21zXCIpO1xuICAgIHNvY2tldCA9IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIik7XG4gICAgaWYgKHJvdXRlci5xdWVyeS5zdGF0dXMgPT0gXCJKb2luaW5nXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFtcIkpvaW5pbmdcIiwgdXNlcm5hbWUsIHJvb21zXSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkpvaW5pbmdcIik7XG4gICAgICBzb2NrZXQuZW1pdChcImpvaW5fcm9vbVwiLCB7IHVzZXJuYW1lLCByb29tcyB9KTtcbiAgICB9XG4gICAgc29ja2V0Lm9uKFwicmVjZWl2ZV9tZXNzYWdlXCIsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlcyk7XG4gICAgICBtZXNzYWdlcy5jdXJyZW50ID0gWy4uLm1lc3NhZ2VzLmN1cnJlbnQsIGRhdGEubWVzc2FnZV07XG4gICAgICBzZXRSZXJlbmRlcihNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkpO1xuICAgICAgY29uc29sZS5sb2coTWF0aC5yYW5kb20oKS50b1N0cmluZygpKTtcbiAgICAgIC8vc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBkYXRhLm1lc3NhZ2VdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIC8qXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xuICAgIHNvY2tldC5vbihcInJlY2VpdmVfbWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xuICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIGRhdGEubWVzc2FnZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQub2ZmKFwicmVjZWl2ZV9tZXNzYWdlXCIpO1xuICAgIH07XG4gIH0sIFtzb2NrZXRdKTsqL1xuICBjb25zb2xlLmxvZyhtZXNzYWdlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctbmV0cmFsLTEwMFwiXG4gICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiLCBoZWlnaHQ6IFwiMTAwdmhcIiB9fVxuICAgID5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzB2d1wiLCBoZWlnaHQ6IFwiOTB2aFwiLCBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fT5cbiAgICAgICAge21lc3NhZ2VzLmN1cnJlbnQubWFwKChtZXNzYWdlLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUtNTAwIHNoYWRvdy1tZCBweS02XCI+e21lc3NhZ2V9PC9kaXY+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgYXBwZWFyYW5jZS1ub25lIHctOTYgdGV4dC1zbSBsZWFkaW5nLTYgdGV4dC1zbGF0ZS05MDAgcGxhY2Vob2xkZXItc2xhdGUtNDAwIHJvdW5kZWQtbWQgcHktMiBwbC01IHJpbmctMSByaW5nLXNsYXRlLTIwMCBzaGFkb3ctc21cIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIikudmFsdWU7XG4gICAgICAgICAgICB2YXIgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xuICAgICAgICAgICAgdmFyIHJvb21zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyb29tc1wiKTtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZF9tZXNzYWdlXCIsIHsgdXNlcm5hbWUsIHJvb21zLCBtZXNzYWdlIH0pO1xuICAgICAgICAgICAgbWVzc2FnZXMuY3VycmVudCA9IFsuLi5tZXNzYWdlcy5jdXJyZW50LCBtZXNzYWdlXTtcbiAgICAgICAgICAgIHNldFJlcmVuZGVyKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZXMuY3VycmVudCk7XG4gICAgICAgICAgICAvL3NldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgbWVzc2FnZV0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTUwMCBteC0yIHB4LTUgcm91bmRlZC1tZCBweS0yXCJcbiAgICAgICAgPlxuICAgICAgICAgIFNlbmRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImlvIiwic29ja2V0IiwiQ2hhdCIsInByb3BzIiwibWVzc2FnZXMiLCJyZXJlbmRlciIsInNldFJlcmVuZGVyIiwicm91dGVyIiwidXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm9vbXMiLCJjb25uZWN0IiwicXVlcnkiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsIm9uIiwiZGF0YSIsImN1cnJlbnQiLCJtZXNzYWdlIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwiZGlzY29ubmVjdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1hcCIsImkiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/chat.js"));
module.exports = __webpack_exports__;

})();