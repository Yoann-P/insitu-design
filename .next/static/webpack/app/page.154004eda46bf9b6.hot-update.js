"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Contact.tsx":
/*!********************************!*\
  !*** ./components/Contact.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Spotlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Spotlight */ \"(app-pages-browser)/./components/ui/Spotlight.tsx\");\n/* harmony import */ var _barrel_optimize_names_FaMailBulk_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaMailBulk!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _ui_MagicButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/MagicButton */ \"(app-pages-browser)/./components/ui/MagicButton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Contact = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        message: \"\",\n        consent: false\n    });\n    const handleChange = (e)=>{\n        const { name, value, type, checked } = e.target;\n        setFormData({\n            ...formData,\n            [name]: type === \"checkbox\" ? checked : value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Form submitted:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-20 relative\",\n        id: \"contact\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-5 text-center text-[40px] md:text-5xl lg:text-6xl text-blue-900\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Spotlight__WEBPACK_IMPORTED_MODULE_2__.Spotlight, {\n                        className: \"-top-40 -left-10 md:-left-32 md:-top-20 h-screen\",\n                        fill: \"white\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Spotlight__WEBPACK_IMPORTED_MODULE_2__.Spotlight, {\n                        className: \"top-10 left-full h-[80vh] w-[50vw]\",\n                        fill: \"yellow\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Spotlight__WEBPACK_IMPORTED_MODULE_2__.Spotlight, {\n                        className: \"top-28 left-80 h-[80vh] w-[50vw]\",\n                        fill: \"blue\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl mx-auto px-4 mt-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"backdrop-blur-md bg-black/10 p-6 rounded-lg shadow-lg border border-gray-300\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"name\",\n                                    className: \"block text-sm font-medium text-black\",\n                                    children: \"Nom\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"name\",\n                                    name: \"name\",\n                                    value: formData.name,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-sm font-medium text-black\",\n                                    children: \"Mail\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"phone\",\n                                    className: \"block text-sm font-medium text-black\",\n                                    children: \"T\\xe9l\\xe9phone\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"tel\",\n                                    id: \"phone\",\n                                    name: \"phone\",\n                                    value: formData.phone,\n                                    onChange: handleChange,\n                                    className: \"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"block text-sm font-medium text-black\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    id: \"message\",\n                                    name: \"message\",\n                                    rows: 4,\n                                    value: formData.message,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6 flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"consent\",\n                                    name: \"consent\",\n                                    checked: formData.consent,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"consent\",\n                                    className: \"ml-2 text-sm text-gray-600\",\n                                    children: [\n                                        \"Protection des donn\\xe9es* \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                            lineNumber: 139,\n                                            columnNumber: 39\n                                        }, undefined),\n                                        \"En soumettant ce formulaire, j'accepte que les informations saisies soient transmises par mail \\xe0 InSitu Systems dans le but d'\\xeatre recontact\\xe9 concernant ma demande.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#contact\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_MagicButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: \"Envoyer\",\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaMailBulk_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMailBulk, {}, void 0, false, {\n                                        fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 23\n                                    }, void 0),\n                                    position: \"right\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/insitu-rebrand-staff/components/Contact.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"wKpcX092MTdom1pjsiK+qSfpJ4U=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29udGFjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ0c7QUFDQztBQUNEO0FBRTNDLE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO1FBQ3ZDTyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLGVBQWUsQ0FDbkJDO1FBSUEsTUFBTSxFQUFFTixJQUFJLEVBQUVPLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR0gsRUFBRUksTUFBTTtRQUMvQ1gsWUFBWTtZQUNWLEdBQUdELFFBQVE7WUFDWCxDQUFDRSxLQUFLLEVBQUVRLFNBQVMsYUFBYUMsVUFBVUY7UUFDMUM7SUFDRjtJQUVBLE1BQU1JLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJoQjtJQUNqQztJQUVBLHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBVTtRQUFpQkMsSUFBRzs7MEJBQ2pDLDhEQUFDQztnQkFBR0YsV0FBVTswQkFBcUU7Ozs7OzswQkFJbkYsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ3RCLG9EQUFTQTt3QkFDUnNCLFdBQVU7d0JBQ1ZHLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ3pCLG9EQUFTQTt3QkFDUnNCLFdBQVU7d0JBQ1ZHLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ3pCLG9EQUFTQTt3QkFBQ3NCLFdBQVU7d0JBQW1DRyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRy9ELDhEQUFDSjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0k7b0JBQ0NDLFVBQVVWO29CQUNWSyxXQUFVOztzQ0FFViw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FDQ0MsU0FBUTtvQ0FDUlAsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDUTtvQ0FDQ2hCLE1BQUs7b0NBQ0xTLElBQUc7b0NBQ0hqQixNQUFLO29DQUNMTyxPQUFPVCxTQUFTRSxJQUFJO29DQUNwQnlCLFVBQVVwQjtvQ0FDVnFCLFFBQVE7b0NBQ1JWLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FJZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FDQ0MsU0FBUTtvQ0FDUlAsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDUTtvQ0FDQ2hCLE1BQUs7b0NBQ0xTLElBQUc7b0NBQ0hqQixNQUFLO29DQUNMTyxPQUFPVCxTQUFTRyxLQUFLO29DQUNyQndCLFVBQVVwQjtvQ0FDVnFCLFFBQVE7b0NBQ1JWLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FJZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FDQ0MsU0FBUTtvQ0FDUlAsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDUTtvQ0FDQ2hCLE1BQUs7b0NBQ0xTLElBQUc7b0NBQ0hqQixNQUFLO29DQUNMTyxPQUFPVCxTQUFTSSxLQUFLO29DQUNyQnVCLFVBQVVwQjtvQ0FDVlcsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUlkLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNNO29DQUNDQyxTQUFRO29DQUNSUCxXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNXO29DQUNDVixJQUFHO29DQUNIakIsTUFBSztvQ0FDTDRCLE1BQU07b0NBQ05yQixPQUFPVCxTQUFTSyxPQUFPO29DQUN2QnNCLFVBQVVwQjtvQ0FDVnFCLFFBQVE7b0NBQ1JWLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FJZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FDQ2hCLE1BQUs7b0NBQ0xTLElBQUc7b0NBQ0hqQixNQUFLO29DQUNMUyxTQUFTWCxTQUFTTSxPQUFPO29DQUN6QnFCLFVBQVVwQjtvQ0FDVnFCLFFBQVE7b0NBQ1JWLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ007b0NBQU1DLFNBQVE7b0NBQVVQLFdBQVU7O3dDQUE2QjtzREFDdEMsOERBQUNhOzs7Ozt3Q0FBSzs7Ozs7Ozs7Ozs7OztzQ0FRbEMsOERBQUNkOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDYztnQ0FBRUMsTUFBSzswQ0FDTiw0RUFBQ25DLHVEQUFXQTtvQ0FDVm9DLE9BQU07b0NBQ05DLG9CQUFNLDhEQUFDdEMsd0ZBQVVBOzs7OztvQ0FDakJ1QyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekI7R0F6Sk1yQztLQUFBQTtBQTJKTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRhY3QudHN4P2FiNGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNwb3RsaWdodCB9IGZyb20gXCIuL3VpL1Nwb3RsaWdodFwiO1xuaW1wb3J0IHsgRmFNYWlsQnVsayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IE1hZ2ljQnV0dG9uIGZyb20gXCIuL3VpL01hZ2ljQnV0dG9uXCI7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgICBjb25zZW50OiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxuICAgIGU6XG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIHR5cGUsIGNoZWNrZWQgfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgW25hbWVdOiB0eXBlID09PSBcImNoZWNrYm94XCIgPyBjaGVja2VkIDogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQ6XCIsIGZvcm1EYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMjAgcmVsYXRpdmVcIiBpZD1cImNvbnRhY3RcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyIHRleHQtWzQwcHhdIG1kOnRleHQtNXhsIGxnOnRleHQtNnhsIHRleHQtYmx1ZS05MDBcIj5cbiAgICAgICAgQ29udGFjdFxuICAgICAgPC9oMj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICB7LyogU3BvdGxpZ2h0cyB0cmF2ZXJzYW50IHRvdXRlIGxhIGxhcmdldXIgZGUgbGEgc2VjdGlvbiAqL31cbiAgICAgICAgPFNwb3RsaWdodFxuICAgICAgICAgIGNsYXNzTmFtZT1cIi10b3AtNDAgLWxlZnQtMTAgbWQ6LWxlZnQtMzIgbWQ6LXRvcC0yMCBoLXNjcmVlblwiXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNwb3RsaWdodFxuICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC0xMCBsZWZ0LWZ1bGwgaC1bODB2aF0gdy1bNTB2d11cIlxuICAgICAgICAgIGZpbGw9XCJ5ZWxsb3dcIlxuICAgICAgICAvPlxuICAgICAgICA8U3BvdGxpZ2h0IGNsYXNzTmFtZT1cInRvcC0yOCBsZWZ0LTgwIGgtWzgwdmhdIHctWzUwdnddXCIgZmlsbD1cImJsdWVcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHgtNCBtdC0xMlwiPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFja2Ryb3AtYmx1ci1tZCBiZy1ibGFjay8xMCBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ibGFja1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5vbVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNYWlsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwicGhvbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUw6lsw6lwaG9uZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLW9wYWNpdHktNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWVzc2FnZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOnJpbmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJjb25zZW50XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbnNlbnRcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5jb25zZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtYmx1ZS02MDAgZm9jdXM6cmluZy1ibHVlLTUwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25zZW50XCIgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgUHJvdGVjdGlvbiBkZXMgZG9ubsOpZXMqIDxiciAvPlxuICAgICAgICAgICAgICBFbiBzb3VtZXR0YW50IGNlIGZvcm11bGFpcmUsIGonYWNjZXB0ZSBxdWUgbGVzIGluZm9ybWF0aW9uc1xuICAgICAgICAgICAgICBzYWlzaWVzIHNvaWVudCB0cmFuc21pc2VzIHBhciBtYWlsIMOgIEluU2l0dSBTeXN0ZW1zIGRhbnMgbGUgYnV0XG4gICAgICAgICAgICAgIGQnw6p0cmUgcmVjb250YWN0w6kgY29uY2VybmFudCBtYSBkZW1hbmRlLlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSZW1wbGFjZW1lbnQgZHUgYm91dG9uIHBhciBNYWdpY0J1dHRvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtM1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+XG4gICAgICAgICAgICAgIDxNYWdpY0J1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRW52b3llclwiXG4gICAgICAgICAgICAgICAgaWNvbj17PEZhTWFpbEJ1bGsgLz59XG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU3BvdGxpZ2h0IiwiRmFNYWlsQnVsayIsIk1hZ2ljQnV0dG9uIiwiQ29udGFjdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsIm1lc3NhZ2UiLCJjb25zZW50IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidHlwZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgyIiwiZmlsbCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicm93cyIsImJyIiwiYSIsImhyZWYiLCJ0aXRsZSIsImljb24iLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Contact.tsx\n"));

/***/ })

});