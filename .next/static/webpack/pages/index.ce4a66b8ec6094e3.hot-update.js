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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/FirstPageButton/FirstPageButton */ \"./Components/FirstPageButton/FirstPageButton.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var _Components_EmailSignUpSnippet_EmailSignUpSnippet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/EmailSignUpSnippet/EmailSignUpSnippet.component */ \"./Components/EmailSignUpSnippet/EmailSignUpSnippet.component.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar handleClickGoogle = function() {\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__.provider).then(function(result) {\n        // const credential = provider.credentialFromResult(result);\n        // const token = credential.accessToken;\n        var user = result.user;\n        console.log(user);\n    }).catch(function(error) {\n        var errorCode = error.code;\n        var errorMessage = error.message;\n    });\n};\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOn = ref[0], setIsOn = ref[1];\n    var toggler = function() {\n        setIsOn(function(prev) {\n            return !prev;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 h-screen w-screen gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-[100%] h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                alt: \"Picture of the author\",\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                className: \"relative h-full\",\n                                src: \"/../public/lohp_en_1302x955.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTwitter, {\n                                className: \"relative left-36 top-40 z-10\",\n                                size: 350\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTwitter, {\n                                size: 40,\n                                className: \"text-elGray mt-8\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-elGray text-7xl font-extrabold my-8\",\n                                children: \"Happening now\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-elGray text-3xl font-bold\",\n                                children: \"Join Twitter today.\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Sign up with Google\",\n                                classname: \"bg-white text-black text-sm font-bold\",\n                                onClick: handleClickGoogle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_8__.FcGoogle, {\n                                    size: 28\n                                }, void 0, false, {\n                                    fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Sign up with Apple\",\n                                classname: \"bg-white text-black text-sm font-bold\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillApple, {\n                                    size: 35\n                                }, void 0, false, {\n                                    fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row align-middle text-center ml-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-32 mt-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"text-lGray opacity-40\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm mx-1\",\n                                        children: \"or\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-32 mt-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"text-lGray opacity-40\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Sign in with phone or email\",\n                                classname: \"bg-blue text-white text-sm font-bold\",\n                                onClick: toggler\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xsm opacity-40 tracking-tight pr-64 leading-tight mt-3\",\n                                children: \"By signing up, you agree to the Terms of Service and Privacy Policy including Cookie Use.\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-bold text-md mt-7\",\n                                children: \"Already have an account?\"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FirstPageButton_FirstPageButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Sign in\",\n                                classname: \"bg-black text-blue text-sm font-bold border-[1px] border-elGray mb-5 \"\n                            }, void 0, false, {\n                                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            isOn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_EmailSignUpSnippet_EmailSignUpSnippet_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mahyar/Desktop/programming/github/Twitter-clone/pages/index.js\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFpQztBQUNGO0FBQ1k7QUFDRDtBQUNHO0FBQytCO0FBQzVCO0FBQ007QUFDeUM7QUFFL0YsSUFBTVUsaUJBQWlCLEdBQUcsV0FBTTtJQUM5QkosOERBQWUsQ0FBQ0Msb0RBQUksRUFBRUMsd0RBQVEsQ0FBQyxDQUM1QkcsSUFBSSxDQUFDLFNBQUNDLE1BQU0sRUFBSztRQUNoQiw0REFBNEQ7UUFDNUQsd0NBQXdDO1FBQ3hDLElBQU1DLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJO1FBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7S0FDbkIsQ0FBQyxDQUNERyxLQUFLLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1FBQ2hCLElBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxJQUFJO1FBQzVCLElBQU1DLFlBQVksR0FBR0gsS0FBSyxDQUFDSSxPQUFPO0tBQ25DLENBQUMsQ0FBQztDQUNOO0FBRWMsU0FBU0MsSUFBSSxHQUFHOztJQUM3QixJQUF3QnRCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBaEN1QixJQUFJLEdBQWF2QixHQUFlLEdBQTVCLEVBQUV3QixPQUFPLEdBQUl4QixHQUFlLEdBQW5CO0lBQ3BCLElBQU15QixPQUFPLEdBQUcsV0FBTTtRQUNwQkQsT0FBTyxDQUFDLFNBQUNFLElBQUk7bUJBQUssQ0FBQ0EsSUFBSTtTQUFBLENBQUMsQ0FBQztLQUMxQjtJQUVELHFCQUNFOzswQkFDRSw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDBDQUEwQzs7a0NBRXZELDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsMEJBQTBCOzswQ0FDdkMsOERBQUMzQixtREFBSztnQ0FDSjRCLEdBQUcsRUFBQyx1QkFBdUI7Z0NBQzNCQyxNQUFNLEVBQUMsTUFBTTtnQ0FDYkMsU0FBUyxFQUFDLE9BQU87Z0NBQ2pCSCxTQUFTLEVBQUMsaUJBQWlCO2dDQUMzQkksR0FBRyxFQUFDLGlDQUFpQzs7Ozs7b0NBQ3JDOzBDQUVGLDhEQUFDOUIscURBQVM7Z0NBQUMwQixTQUFTLEVBQUMsOEJBQThCO2dDQUFDSyxJQUFJLEVBQUUsR0FBRzs7Ozs7b0NBQUk7Ozs7Ozs0QkFDN0Q7a0NBR04sOERBQUNOLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxNQUFNOzswQ0FDbkIsOERBQUMxQixxREFBUztnQ0FBQytCLElBQUksRUFBRSxFQUFFO2dDQUFFTCxTQUFTLEVBQUUsa0JBQWtCOzs7OztvQ0FBSTswQ0FDdEQsOERBQUNNLElBQUU7Z0NBQUNOLFNBQVMsRUFBQywwQ0FBMEM7MENBQUMsZUFFekQ7Ozs7O29DQUFLOzBDQUNMLDhEQUFDTyxJQUFFO2dDQUFDUCxTQUFTLEVBQUMsZ0NBQWdDOzBDQUFDLHFCQUUvQzs7Ozs7b0NBQUs7MENBRUwsOERBQUN2QixtRkFBZTtnQ0FFWitCLElBQUksRUFBRSxxQkFBcUI7Z0NBQzNCQyxTQUFTLEVBQUUsdUNBQXVDO2dDQUNsREMsT0FBTyxFQUFFNUIsaUJBQWlCOzBDQUc1Qiw0RUFBQ1Asb0RBQVE7b0NBQUM4QixJQUFJLEVBQUUsRUFBRTs7Ozs7d0NBQUk7Ozs7O29DQUNOOzBDQUVsQiw4REFBQzVCLG1GQUFlO2dDQUVaK0IsSUFBSSxFQUFFLG9CQUFvQjtnQ0FDMUJDLFNBQVMsRUFBRSx1Q0FBdUM7MENBR3BELDRFQUFDakMsdURBQVc7b0NBQUM2QixJQUFJLEVBQUUsRUFBRTs7Ozs7d0NBQUk7Ozs7O29DQUNUOzBDQUVsQiw4REFBQ04sS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLDZDQUE2Qzs7a0RBQzFELDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsV0FBVztrREFDeEIsNEVBQUNXLElBQUU7NENBQUNYLFNBQVMsRUFBQyx1QkFBdUI7Ozs7O2dEQUFHOzs7Ozs0Q0FDcEM7a0RBQ04sOERBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQyxjQUFjO2tEQUFDLElBQUU7Ozs7OzRDQUFNO2tEQUN0Qyw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLFdBQVc7a0RBQ3hCLDRFQUFDVyxJQUFFOzRDQUFDWCxTQUFTLEVBQUMsdUJBQXVCOzs7OztnREFBRzs7Ozs7NENBQ3BDOzs7Ozs7b0NBQ0Y7MENBRU4sOERBQUN2QixtRkFBZTtnQ0FFWitCLElBQUksRUFBRSw2QkFBNkI7Z0NBQ25DQyxTQUFTLEVBQUUsc0NBQXNDO2dDQUNqREMsT0FBTyxFQUFFYixPQUFPOzs7OztvQ0FFRDswQ0FFbkIsOERBQUNlLEdBQUM7Z0NBQUNaLFNBQVMsRUFBQyw2REFBNkQ7MENBQUMsMkZBRzNFOzs7OztvQ0FBSTswQ0FFSiw4REFBQ2EsSUFBRTtnQ0FBQ2IsU0FBUyxFQUFDLHdCQUF3QjswQ0FBQywwQkFBd0I7Ozs7O29DQUFLOzBDQUNwRSw4REFBQ3ZCLG1GQUFlO2dDQUVaK0IsSUFBSSxFQUFFLFNBQVM7Z0NBQ2ZDLFNBQVMsRUFDUCx1RUFBdUU7Ozs7O29DQUUxRDs7Ozs7OzRCQUNmOzs7Ozs7b0JBQ0Y7WUFDTGQsSUFBSSxrQkFDSCw4REFBQ0ksS0FBRzswQkFDRiw0RUFBQ2xCLG1HQUFrQjs7Ozt3QkFBRzs7Ozs7b0JBQ2xCOztvQkFFUCxDQUNIO0NBQ0g7R0EzRnVCYSxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEZjR29vZ2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCI7XG5pbXBvcnQgeyBBaUZpbGxBcHBsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IEZpcnN0UGFnZUJ1dHRvbiBmcm9tIFwiLi4vQ29tcG9uZW50cy9GaXJzdFBhZ2VCdXR0b24vRmlyc3RQYWdlQnV0dG9uXCI7XG5pbXBvcnQgeyBzaWduSW5XaXRoUG9wdXAgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYXV0aCwgcHJvdmlkZXIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcbmltcG9ydCBFbWFpbFNpZ25VcFNuaXBwZXQgZnJvbSBcIi4uL0NvbXBvbmVudHMvRW1haWxTaWduVXBTbmlwcGV0L0VtYWlsU2lnblVwU25pcHBldC5jb21wb25lbnRcIjtcblxuY29uc3QgaGFuZGxlQ2xpY2tHb29nbGUgPSAoKSA9PiB7XG4gIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyBjb25zdCBjcmVkZW50aWFsID0gcHJvdmlkZXIuY3JlZGVudGlhbEZyb21SZXN1bHQocmVzdWx0KTtcbiAgICAgIC8vIGNvbnN0IHRva2VuID0gY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcbiAgICAgIGNvbnN0IHVzZXIgPSByZXN1bHQudXNlcjtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXNPbiwgc2V0SXNPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZXIgPSAoKSA9PiB7XG4gICAgc2V0SXNPbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBoLXNjcmVlbiB3LXNjcmVlbiBnYXAtOFwiPlxuICAgICAgICB7LyogbGVmdCBjb2wgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1bMTAwJV0gaC1mdWxsXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGxcIlxuICAgICAgICAgICAgc3JjPVwiLy4uL3B1YmxpYy9sb2hwX2VuXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGYVR3aXR0ZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgbGVmdC0zNiB0b3AtNDAgei0xMFwiIHNpemU9ezM1MH0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHJpZ2h0IGNvbCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC02XCI+XG4gICAgICAgICAgPEZhVHdpdHRlciBzaXplPXs0MH0gY2xhc3NOYW1lPXtcInRleHQtZWxHcmF5IG10LThcIn0gLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1lbEdyYXkgdGV4dC03eGwgZm9udC1leHRyYWJvbGQgbXktOFwiPlxuICAgICAgICAgICAgSGFwcGVuaW5nIG5vd1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZWxHcmF5IHRleHQtM3hsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgSm9pbiBUd2l0dGVyIHRvZGF5LlxuICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICA8Rmlyc3RQYWdlQnV0dG9uXG4gICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICB0ZXh0OiBcIlNpZ24gdXAgd2l0aCBHb29nbGVcIixcbiAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJnLXdoaXRlIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGRcIixcbiAgICAgICAgICAgICAgb25DbGljazogaGFuZGxlQ2xpY2tHb29nbGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGY0dvb2dsZSBzaXplPXsyOH0gLz5cbiAgICAgICAgICA8L0ZpcnN0UGFnZUJ1dHRvbj5cblxuICAgICAgICAgIDxGaXJzdFBhZ2VCdXR0b25cbiAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgIHRleHQ6IFwiU2lnbiB1cCB3aXRoIEFwcGxlXCIsXG4gICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBaUZpbGxBcHBsZSBzaXplPXszNX0gLz5cbiAgICAgICAgICA8L0ZpcnN0UGFnZUJ1dHRvbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBhbGlnbi1taWRkbGUgdGV4dC1jZW50ZXIgbWwtMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyIG10LTNcIj5cbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRleHQtbEdyYXkgb3BhY2l0eS00MFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBteC0xXCI+b3I8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zMiBtdC0zXCI+XG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LWxHcmF5IG9wYWNpdHktNDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8Rmlyc3RQYWdlQnV0dG9uXG4gICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICB0ZXh0OiBcIlNpZ24gaW4gd2l0aCBwaG9uZSBvciBlbWFpbFwiLFxuICAgICAgICAgICAgICBjbGFzc25hbWU6IFwiYmctYmx1ZSB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkXCIsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHRvZ2dsZXIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L0ZpcnN0UGFnZUJ1dHRvbj5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNtIG9wYWNpdHktNDAgdHJhY2tpbmctdGlnaHQgcHItNjQgbGVhZGluZy10aWdodCBtdC0zXCI+XG4gICAgICAgICAgICBCeSBzaWduaW5nIHVwLCB5b3UgYWdyZWUgdG8gdGhlIFRlcm1zIG9mIFNlcnZpY2UgYW5kIFByaXZhY3kgUG9saWN5XG4gICAgICAgICAgICBpbmNsdWRpbmcgQ29va2llIFVzZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbWQgbXQtN1wiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PzwvaDQ+XG4gICAgICAgICAgPEZpcnN0UGFnZUJ1dHRvblxuICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgdGV4dDogXCJTaWduIGluXCIsXG4gICAgICAgICAgICAgIGNsYXNzbmFtZTpcbiAgICAgICAgICAgICAgICBcImJnLWJsYWNrIHRleHQtYmx1ZSB0ZXh0LXNtIGZvbnQtYm9sZCBib3JkZXItWzFweF0gYm9yZGVyLWVsR3JheSBtYi01IFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9GaXJzdFBhZ2VCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNPbiAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEVtYWlsU2lnblVwU25pcHBldCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsIkZhVHdpdHRlciIsIkZjR29vZ2xlIiwiQWlGaWxsQXBwbGUiLCJGaXJzdFBhZ2VCdXR0b24iLCJzaWduSW5XaXRoUG9wdXAiLCJhdXRoIiwicHJvdmlkZXIiLCJFbWFpbFNpZ25VcFNuaXBwZXQiLCJoYW5kbGVDbGlja0dvb2dsZSIsInRoZW4iLCJyZXN1bHQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIkhvbWUiLCJpc09uIiwic2V0SXNPbiIsInRvZ2dsZXIiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwic3JjIiwic2l6ZSIsImgxIiwiaDMiLCJ0ZXh0IiwiY2xhc3NuYW1lIiwib25DbGljayIsImhyIiwicCIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});