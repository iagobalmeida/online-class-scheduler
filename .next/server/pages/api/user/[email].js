module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/[email].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/user/[email].tsx":
/*!************************************!*\
  !*** ./pages/api/user/[email].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/database */ \"./utils/database.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  // GET  - Retorna usuário por email\n  if (req.method == 'GET') {\n    // Pega informações do body da requisição e valida\n    const {\n      id\n    } = req.query;\n\n    if (!id) {\n      res.status(400).json({\n        error: 'Missing ID/E-mail'\n      });\n      return;\n    } // Conecta-se ao banco de dados\n\n\n    const {\n      db\n    } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const response = await db.collection('users').findOne({\n      _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectId\"](id)\n    });\n    res.status(response ? 200 : 400).json(response ? response : {\n      error: `User with email '${email}' not found`\n    });\n  } // ??? - Retorna erro\n  else {\n      res.status(400).json({\n        error: 'Wrong requisition method'\n      });\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9bZW1haWxdLnRzeD9iYzc4Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJkYiIsImNvbm5lY3QiLCJyZXNwb25zZSIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiX2lkIiwiT2JqZWN0SWQiLCJlbWFpbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBb0JlLHNFQUNYQSxHQURXLEVBRVhDLEdBRlcsS0FHSTtBQUNmO0FBQ0EsTUFBS0QsR0FBRyxDQUFDRSxNQUFKLElBQWMsS0FBbkIsRUFBMEI7QUFFdEI7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBU0gsR0FBRyxDQUFDSSxLQUFuQjs7QUFFQSxRQUFHLENBQUNELEVBQUosRUFBTztBQUFFRixTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxhQUFLLEVBQUU7QUFBUixPQUFyQjtBQUFvRDtBQUFTLEtBTGhELENBT3RCOzs7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBVyxNQUFNQywrREFBTyxFQUE5QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNRixFQUFFLENBQUNHLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxPQUF2QixDQUErQjtBQUFDQyxTQUFHLEVBQUUsSUFBSUMsZ0RBQUosQ0FBYVgsRUFBYjtBQUFOLEtBQS9CLENBQXZCO0FBQ0FGLE9BQUcsQ0FBQ0ksTUFBSixDQUFXSyxRQUFRLEdBQUcsR0FBSCxHQUFTLEdBQTVCLEVBQWlDSixJQUFqQyxDQUFzQ0ksUUFBUSxHQUFHQSxRQUFILEdBQWM7QUFBQ0gsV0FBSyxFQUFHLG9CQUFtQlEsS0FBTTtBQUFsQyxLQUE1RDtBQUNILEdBWEQsQ0FZQTtBQVpBLE9BYUk7QUFDQWQsU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBckI7QUFDSDtBQUVKLENBdEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXIvW2VtYWlsXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RJZCwgT2JqZWN0SUQgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RhdGFiYXNlJ1xuXG5pbnRlcmZhY2UgRXJyb3JSZXNwb25zZVR5cGUge1xuICAgIGVycm9yOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFN1Y2Vzc1Jlc3BvbnNlVHlwZSB7XG4gICAgX2lkOiAgICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgIHBhc3N3b3JkOiAgICAgICAgICAgICAgIHN0cmluZyxcbiAgICBuYW1lOiAgICAgICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgY2VsbHBob25lOiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgIGlzVGVhY2hlcjogICAgICAgICAgICAgIGJvb2xlYW5cbiAgICBjb3Vyc2VzOiAgICAgICAgICAgICAgICBzdHJpbmdbXSxcbiAgICBhdmFpbGFibGVfaG91cnM6ICAgICAgICBvYmplY3QsXG4gICAgYXZhaWxhYmxlX2xvY2F0aW9uczogICAgb2JqZWN0W10sXG4gICAgYXBwb2ludG1lbnRzOiAgICAgICAgICAgb2JqZWN0W10sXG4gICAgY29pbnM6ICAgICAgICAgICAgICAgICAgbnVtYmVyLFxuICAgIHJldmlld3M6ICAgICAgICAgICAgICAgIG51bWJlcltdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsIFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlPEVycm9yUmVzcG9uc2VUeXBlIHwgU3VjZXNzUmVzcG9uc2VUeXBlPlxuKTpQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAvLyBHRVQgIC0gUmV0b3JuYSB1c3XDoXJpbyBwb3IgZW1haWxcbiAgICBpZiAoIHJlcS5tZXRob2QgPT0gJ0dFVCcgKXtcblxuICAgICAgICAvLyBQZWdhIGluZm9ybWHDp8O1ZXMgZG8gYm9keSBkYSByZXF1aXNpw6fDo28gZSB2YWxpZGFcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgICAgIGlmKCFpZCl7IHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjogJ01pc3NpbmcgSUQvRS1tYWlsJ30pOyByZXR1cm47IH1cblxuICAgICAgICAvLyBDb25lY3RhLXNlIGFvIGJhbmNvIGRlIGRhZG9zXG4gICAgICAgIGNvbnN0IHsgZGIgfSAgID0gYXdhaXQgY29ubmVjdCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZmluZE9uZSh7X2lkOiBuZXcgT2JqZWN0SWQoaWQpfSk7XG4gICAgICAgIHJlcy5zdGF0dXMocmVzcG9uc2UgPyAyMDAgOiA0MDApLmpzb24ocmVzcG9uc2UgPyByZXNwb25zZSA6IHtlcnJvcjogYFVzZXIgd2l0aCBlbWFpbCAnJHtlbWFpbH0nIG5vdCBmb3VuZGB9KTsgICAgICAgIFxuICAgIH1cbiAgICAvLyA/Pz8gLSBSZXRvcm5hIGVycm9cbiAgICBlbHNle1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnV3JvbmcgcmVxdWlzaXRpb24gbWV0aG9kJyB9KTtcbiAgICB9XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/[email].tsx\n");

/***/ }),

/***/ "./utils/database.ts":
/*!***************************!*\
  !*** ./utils/database.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return connect; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"](process.env.DATABASE_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nasync function connect() {\n  if (!client.isConnected()) await client.connect();\n  const db = client.db(\"online-class-scheduler-db\");\n  return {\n    db,\n    client\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYXRhYmFzZS50cz80MDhlIl0sIm5hbWVzIjpbImNsaWVudCIsIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImRiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLG1EQUFKLENBQWdCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBNUIsRUFBMEM7QUFDckRDLGlCQUFlLEVBQUssSUFEaUM7QUFFckRDLG9CQUFrQixFQUFFO0FBRmlDLENBQTFDLENBQWY7QUFLZSxlQUFlQyxPQUFmLEdBQStDO0FBQzFELE1BQUcsQ0FBQ1AsTUFBTSxDQUFDUSxXQUFQLEVBQUosRUFBMEIsTUFBTVIsTUFBTSxDQUFDTyxPQUFQLEVBQU47QUFFMUIsUUFBTUUsRUFBRSxHQUFHVCxNQUFNLENBQUNTLEVBQVAsQ0FBVSwyQkFBVixDQUFYO0FBQ0EsU0FBTztBQUFDQSxNQUFEO0FBQUtUO0FBQUwsR0FBUDtBQUNIIiwiZmlsZSI6Ii4vdXRpbHMvZGF0YWJhc2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYiwgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuaW50ZXJmYWNlIENvbm5lY3RUeXBlIHtcbiAgICBkYjogRGIsXG4gICAgY2xpZW50OiBNb25nb0NsaWVudFxufVxuXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiAgICB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKTogUHJvbWlzZTxDb25uZWN0VHlwZT4ge1xuICAgIGlmKCFjbGllbnQuaXNDb25uZWN0ZWQoKSkgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwib25saW5lLWNsYXNzLXNjaGVkdWxlci1kYlwiKVxuICAgIHJldHVybiB7ZGIsIGNsaWVudH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/database.ts\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });