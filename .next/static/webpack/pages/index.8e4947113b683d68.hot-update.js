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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/FirstPageButton/FirstPageButton */ \"./Components/FirstPageButton/FirstPageButton.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/firebase */ \"./firebase/firebase.js\");\n\n\n\n\n\n\n\n\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.provider).then(function(result) {\n    // This gives you a Google Access Token. You can use it to access the Google API.\n    // const credential = provider.credentialFromResult(result);\n    // const token = credential.accessToken;\n    var user = result.user;\n    console.log(user);\n// ...\n}).catch(function(error) {\n    // Handle Errors here.\n    var errorCode = error.code;\n    var errorMessage = error.message;\n});\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 h-screen w-screen gap-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-[100%] h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        alt: \"Picture of the author\",\n                        layout: \"fill\",\n                        objectFit: \"cover\",\n                        className: \"relative h-full\",\n                        src: \"/../public/lohp_en_1302x955.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTwitter, {\n                        className: \"relative left-36 top-40 z-10\",\n                        size: 350\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTwitter, {\n                        size: 40,\n                        className: \"text-elGray mt-8\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-elGray text-7xl font-extrabold my-8\",\n                        children: \"Happening now\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-elGray text-3xl font-bold\",\n                        children: \"Join Twitter today.\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Sign up with Google\",\n                        classname: \"bg-white text-black text-sm font-bold\",\n                        onclick: {\n                            signInWithPopup: firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__.FcGoogle, {\n                            size: 28\n                        }, void 0, false, {\n                            fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Sign up with Apple\",\n                        classname: \"bg-white text-black text-sm font-bold\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillApple, {\n                            size: 35\n                        }, void 0, false, {\n                            fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row align-middle text-center ml-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-32 mt-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"text-lGray opacity-40\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm mx-1\",\n                                children: \"or\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-32 mt-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"text-lGray opacity-40\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Sign in with phone or email\",\n                        classname: \"bg-blue text-white text-sm font-bold\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xsm opacity-40 tracking-tight pr-64 leading-tight mt-3\",\n                        children: \"By signing up, you agree to the Terms of Service and Privacy Policy including Cookie Use.\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-bold text-md mt-7\",\n                        children: \"Already have an account?\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Sign in\",\n                        classname: \"bg-black text-blue text-sm font-bold border-[1px] border-elGray mb-5 \"\n                    }, void 0, false, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkIsOERBQUNHLEdBQUM7d0JBQUNaLFNBQVMsRUFBQyw2REFBNkQ7a0NBQUMsMkZBRzNFOzs7Ozs0QkFBSTtrQ0FFSiw4REFBQ2EsSUFBRTt3QkFBQ2IsU0FBUyxFQUFDLHdCQUF3QjtrQ0FBQywwQkFBd0I7Ozs7OzRCQUFLO2tDQUNwRSw4REFBQ2pCLG1GQUFlO3dCQUVaeUIsSUFBSSxFQUFFLFNBQVM7d0JBQ2ZDLFNBQVMsRUFDUCx1RUFBdUU7Ozs7OzRCQUUxRDs7Ozs7O29CQUNmOzs7Ozs7WUFDRixDQUNOO0NBQ0g7QUE1RXVCWCxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEZjR29vZ2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCI7XG5pbXBvcnQgeyBBaUZpbGxBcHBsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IEZpcnN0UGFnZUJ1dHRvbiBmcm9tIFwiLi4vQ29tcG9uZW50cy9GaXJzdFBhZ2VCdXR0b24vRmlyc3RQYWdlQnV0dG9uXCI7XG5pbXBvcnQgeyAgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlXCI7XG5cbnNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxuICAgIC8vIGNvbnN0IGNyZWRlbnRpYWwgPSBwcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChyZXN1bHQpO1xuICAgIC8vIGNvbnN0IHRva2VuID0gY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcbiAgICBjb25zdCB1c2VyID0gcmVzdWx0LnVzZXI7XG4gICAgY29uc29sZS5sb2codXNlcik7XG4gICAgLy8gLi4uXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cbiAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBoLXNjcmVlbiB3LXNjcmVlbiBnYXAtOFwiPlxuICAgICAgey8qIGxlZnQgY29sICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVsxMDAlXSBoLWZ1bGxcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcbiAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsXCJcbiAgICAgICAgICBzcmM9XCIvLi4vcHVibGljL2xvaHBfZW5fMTMwMng5NTUucG5nXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8RmFUd2l0dGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGxlZnQtMzYgdG9wLTQwIHotMTBcIiBzaXplPXszNTB9Lz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogcmlnaHQgY29sICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC02XCI+XG4gICAgICAgIDxGYVR3aXR0ZXIgc2l6ZT17NDB9IGNsYXNzTmFtZT17XCJ0ZXh0LWVsR3JheSBtdC04XCJ9IC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWVsR3JheSB0ZXh0LTd4bCBmb250LWV4dHJhYm9sZCBteS04XCI+XG4gICAgICAgICAgSGFwcGVuaW5nIG5vd1xuICAgICAgICA8L2gxPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1lbEdyYXkgdGV4dC0zeGwgZm9udC1ib2xkXCI+Sm9pbiBUd2l0dGVyIHRvZGF5LjwvaDM+XG5cbiAgICAgICAgPEZpcnN0UGFnZUJ1dHRvblxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICB0ZXh0OiBcIlNpZ24gdXAgd2l0aCBHb29nbGVcIixcbiAgICAgICAgICAgIGNsYXNzbmFtZTogXCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkXCIsXG4gICAgICAgICAgICBvbmNsaWNrOntzaWduSW5XaXRoUG9wdXB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGY0dvb2dsZSBzaXplPXsyOH0gLz5cbiAgICAgICAgPC9GaXJzdFBhZ2VCdXR0b24+XG5cbiAgICAgICAgPEZpcnN0UGFnZUJ1dHRvblxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICB0ZXh0OiBcIlNpZ24gdXAgd2l0aCBBcHBsZVwiLFxuICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJnLXdoaXRlIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGRcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFpRmlsbEFwcGxlIHNpemU9ezM1fSAvPlxuICAgICAgICA8L0ZpcnN0UGFnZUJ1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIG1sLTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMzIgbXQtM1wiPlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRleHQtbEdyYXkgb3BhY2l0eS00MFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG14LTFcIj5vcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zMiBtdC0zXCI+XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1sR3JheSBvcGFjaXR5LTQwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZpcnN0UGFnZUJ1dHRvblxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICB0ZXh0OiBcIlNpZ24gaW4gd2l0aCBwaG9uZSBvciBlbWFpbFwiLFxuICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJnLWJsdWUgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID48L0ZpcnN0UGFnZUJ1dHRvbj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzbSBvcGFjaXR5LTQwIHRyYWNraW5nLXRpZ2h0IHByLTY0IGxlYWRpbmctdGlnaHQgbXQtM1wiPlxuICAgICAgICAgIEJ5IHNpZ25pbmcgdXAsIHlvdSBhZ3JlZSB0byB0aGUgVGVybXMgb2YgU2VydmljZSBhbmQgUHJpdmFjeSBQb2xpY3lcbiAgICAgICAgICBpbmNsdWRpbmcgQ29va2llIFVzZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1tZCBtdC03XCI+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/PC9oND5cbiAgICAgICAgPEZpcnN0UGFnZUJ1dHRvblxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICB0ZXh0OiBcIlNpZ24gaW5cIixcbiAgICAgICAgICAgIGNsYXNzbmFtZTpcbiAgICAgICAgICAgICAgXCJiZy1ibGFjayB0ZXh0LWJsdWUgdGV4dC1zbSBmb250LWJvbGQgYm9yZGVyLVsxcHhdIGJvcmRlci1lbEdyYXkgbWItNSBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9GaXJzdFBhZ2VCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZhVHdpdHRlciIsIkZjR29vZ2xlIiwiQWlGaWxsQXBwbGUiLCJGaXJzdFBhZ2VCdXR0b24iLCJzaWduSW5XaXRoUG9wdXAiLCJhdXRoIiwicHJvdmlkZXIiLCJ0aGVuIiwicmVzdWx0IiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwic3JjIiwic2l6ZSIsImgxIiwiaDMiLCJ0ZXh0IiwiY2xhc3NuYW1lIiwib25jbGljayIsImhyIiwicCIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});