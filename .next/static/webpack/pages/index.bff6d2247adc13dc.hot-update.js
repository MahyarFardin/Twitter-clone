"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/FirstPageButton/FirstPageButton */ \"./Components/FirstPageButton/FirstPageButton.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var _Components_EmailSignUpSnippet_EmailSignUpSnippet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/EmailSignUpSnippet/EmailSignUpSnippet.component */ \"./Components/EmailSignUpSnippet/EmailSignUpSnippet.component.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar handleClickGoogle = function() {\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__.provider).then(function(result) {\n        // const credential = provider.credentialFromResult(result);\n        // const token = credential.accessToken;\n        var user = result.user;\n        console.log(user);\n    }).catch(function(error) {\n        var errorCode = error.code;\n        var errorMessage = error.message;\n    });\n};\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOn = ref[0], setIsOn = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 h-screen w-screen gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-[100%] h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                alt: \"Picture of the author\",\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                className: \"relative h-full\",\n                                src: \"/../public/lohp_en_1302x955.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTwitter, {\n                                className: \"relative left-36 top-40 z-10\",\n                                size: 350\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTwitter, {\n                                size: 40,\n                                className: \"text-elGray mt-8\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-elGray text-7xl font-extrabold my-8\",\n                                children: \"Happening now\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-elGray text-3xl font-bold\",\n                                children: \"Join Twitter today.\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Sign up with Google\",\n                                classname: \"bg-white text-black text-sm font-bold\",\n                                onClick: handleClickGoogle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_8__.FcGoogle, {\n                                    size: 28\n                                }, void 0, false, {\n                                    fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Sign up with Apple\",\n                                classname: \"bg-white text-black text-sm font-bold\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillApple, {\n                                    size: 35\n                                }, void 0, false, {\n                                    fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row align-middle text-center ml-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-32 mt-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"text-lGray opacity-40\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm mx-1\",\n                                        children: \"or\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-32 mt-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"text-lGray opacity-40\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Sign in with phone or email\",\n                                classname: \"bg-blue text-white text-sm font-bold\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xsm opacity-40 tracking-tight pr-64 leading-tight mt-3\",\n                                children: \"By signing up, you agree to the Terms of Service and Privacy Policy including Cookie Use.\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-bold text-md mt-7\",\n                                children: \"Already have an account?\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Sign in\",\n                                classname: \"bg-black text-blue text-sm font-bold border-[1px] border-elGray mb-5 \"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            isOn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_EmailSignUpSnippet_EmailSignUpSnippet_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzRDQUNwQzs7Ozs7O29DQUNGOzBDQUVOLDhEQUFDckIsbUZBQWU7Z0NBRVo2QixJQUFJLEVBQUUsNkJBQTZCO2dDQUNuQ0MsU0FBUyxFQUFFLHNDQUFzQzs7Ozs7b0NBRWxDOzBDQUVuQiw4REFBQ0csR0FBQztnQ0FBQ1osU0FBUyxFQUFDLDZEQUE2RDswQ0FBQywyRkFHM0U7Ozs7O29DQUFJOzBDQUVKLDhEQUFDYSxJQUFFO2dDQUFDYixTQUFTLEVBQUMsd0JBQXdCOzBDQUFDLDBCQUF3Qjs7Ozs7b0NBQUs7MENBQ3BFLDhEQUFDckIsbUZBQWU7Z0NBRVo2QixJQUFJLEVBQUUsU0FBUztnQ0FDZkMsU0FBUyxFQUNQLHVFQUF1RTs7Ozs7b0NBRTFEOzs7Ozs7NEJBQ2Y7Ozs7OztvQkFDRjtZQUNMWixJQUFJLGtCQUNILDhEQUFDRSxLQUFHOzBCQUNGLDRFQUFDaEIsbUdBQWtCOzs7O3dCQUFHOzs7OztvQkFDbEI7O29CQUVQLENBQ0g7Q0FDSDtHQXRGdUJhLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEZhVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRmNHb29nbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIjtcbmltcG9ydCB7IEFpRmlsbEFwcGxlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgRmlyc3RQYWdlQnV0dG9uIGZyb20gXCIuLi9Db21wb25lbnRzL0ZpcnN0UGFnZUJ1dHRvbi9GaXJzdFBhZ2VCdXR0b25cIjtcbmltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhdXRoLCBwcm92aWRlciB9IGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xuaW1wb3J0IEVtYWlsU2lnblVwU25pcHBldCBmcm9tIFwiLi4vQ29tcG9uZW50cy9FbWFpbFNpZ25VcFNuaXBwZXQvRW1haWxTaWduVXBTbmlwcGV0LmNvbXBvbmVudFwiO1xuXG5jb25zdCBoYW5kbGVDbGlja0dvb2dsZSA9ICgpID0+IHtcbiAgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vIGNvbnN0IGNyZWRlbnRpYWwgPSBwcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChyZXN1bHQpO1xuICAgICAgLy8gY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xuICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC51c2VyO1xuICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0W2lzT24sIHNldElzT25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgaC1zY3JlZW4gdy1zY3JlZW4gZ2FwLThcIj5cbiAgICAgICAgey8qIGxlZnQgY29sICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctWzEwMCVdIGgtZnVsbFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsXCJcbiAgICAgICAgICAgIHNyYz1cIi8uLi9wdWJsaWMvbG9ocF9lbl8xMzAyeDk1NS5wbmdcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8RmFUd2l0dGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGxlZnQtMzYgdG9wLTQwIHotMTBcIiBzaXplPXszNTB9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiByaWdodCBjb2wgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNlwiPlxuICAgICAgICAgIDxGYVR3aXR0ZXIgc2l6ZT17NDB9IGNsYXNzTmFtZT17XCJ0ZXh0LWVsR3JheSBtdC04XCJ9IC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZWxHcmF5IHRleHQtN3hsIGZvbnQtZXh0cmFib2xkIG15LThcIj5cbiAgICAgICAgICAgIEhhcHBlbmluZyBub3dcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWVsR3JheSB0ZXh0LTN4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIEpvaW4gVHdpdHRlciB0b2RheS5cbiAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgPEZpcnN0UGFnZUJ1dHRvblxuICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgdGV4dDogXCJTaWduIHVwIHdpdGggR29vZ2xlXCIsXG4gICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkXCIsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrR29vZ2xlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmNHb29nbGUgc2l6ZT17Mjh9IC8+XG4gICAgICAgICAgPC9GaXJzdFBhZ2VCdXR0b24+XG5cbiAgICAgICAgICA8Rmlyc3RQYWdlQnV0dG9uXG4gICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICB0ZXh0OiBcIlNpZ24gdXAgd2l0aCBBcHBsZVwiLFxuICAgICAgICAgICAgICBjbGFzc25hbWU6IFwiYmctd2hpdGUgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWlGaWxsQXBwbGUgc2l6ZT17MzV9IC8+XG4gICAgICAgICAgPC9GaXJzdFBhZ2VCdXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIG1sLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zMiBtdC0zXCI+XG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LWxHcmF5IG9wYWNpdHktNDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbXgtMVwiPm9yPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMzIgbXQtM1wiPlxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1sR3JheSBvcGFjaXR5LTQwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZpcnN0UGFnZUJ1dHRvblxuICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgdGV4dDogXCJTaWduIGluIHdpdGggcGhvbmUgb3IgZW1haWxcIixcbiAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJnLWJsdWUgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9GaXJzdFBhZ2VCdXR0b24+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzbSBvcGFjaXR5LTQwIHRyYWNraW5nLXRpZ2h0IHByLTY0IGxlYWRpbmctdGlnaHQgbXQtM1wiPlxuICAgICAgICAgICAgQnkgc2lnbmluZyB1cCwgeW91IGFncmVlIHRvIHRoZSBUZXJtcyBvZiBTZXJ2aWNlIGFuZCBQcml2YWN5IFBvbGljeVxuICAgICAgICAgICAgaW5jbHVkaW5nIENvb2tpZSBVc2UuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW1kIG10LTdcIj5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L2g0PlxuICAgICAgICAgIDxGaXJzdFBhZ2VCdXR0b25cbiAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgIHRleHQ6IFwiU2lnbiBpblwiLFxuICAgICAgICAgICAgICBjbGFzc25hbWU6XG4gICAgICAgICAgICAgICAgXCJiZy1ibGFjayB0ZXh0LWJsdWUgdGV4dC1zbSBmb250LWJvbGQgYm9yZGVyLVsxcHhdIGJvcmRlci1lbEdyYXkgbWItNSBcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvRmlyc3RQYWdlQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzT24gJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxFbWFpbFNpZ25VcFNuaXBwZXQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJGYVR3aXR0ZXIiLCJGY0dvb2dsZSIsIkFpRmlsbEFwcGxlIiwiRmlyc3RQYWdlQnV0dG9uIiwic2lnbkluV2l0aFBvcHVwIiwiYXV0aCIsInByb3ZpZGVyIiwiRW1haWxTaWduVXBTbmlwcGV0IiwiaGFuZGxlQ2xpY2tHb29nbGUiLCJ0aGVuIiwicmVzdWx0IiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJIb21lIiwiaXNPbiIsInNldElzT24iLCJkaXYiLCJjbGFzc05hbWUiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJzcmMiLCJzaXplIiwiaDEiLCJoMyIsInRleHQiLCJjbGFzc25hbWUiLCJvbkNsaWNrIiwiaHIiLCJwIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});