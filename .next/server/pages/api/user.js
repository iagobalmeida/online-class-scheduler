module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/user.tsx":
/*!****************************!*\
  !*** ./pages/api/user.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/database */ \"./utils/database.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  // Se a requisição é do tipo POST\n  if (req.method === 'POST') {\n    const {\n      name,\n      email,\n      cellphone,\n      isTeacher\n    } = req.body;\n\n    if (!name || !email || !cellphone || !isTeacher) {\n      res.status(400).json({\n        error: 'Missing body parameter'\n      });\n      return;\n    } // Conecta-se ao banco de dados\n\n\n    const {\n      db\n    } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Executa inserção na collection \"users\"\n\n    const response = await db.collection('users').insertOne({\n      name,\n      email,\n      cellphone,\n      isTeacher\n    }); // Retorna na respose o JSON do response\n\n    res.status(200).json(response.ops[0]); // Se a requisição não for do tipo POST\n  } else {\n    // Retorna na respose a message\n    res.status(400).json({\n      error: 'Wrong requisition method'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci50c3g/NmM1YiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwiZW1haWwiLCJjZWxscGhvbmUiLCJpc1RlYWNoZXIiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZGIiLCJjb25uZWN0IiwicmVzcG9uc2UiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwib3BzIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFjZSxzRUFDWEEsR0FEVyxFQUVYQyxHQUZXLEtBR0k7QUFFZjtBQUNBLE1BQUtELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQXBCLEVBQTRCO0FBRXhCLFVBQU07QUFBRUMsVUFBRjtBQUFRQyxXQUFSO0FBQWVDLGVBQWY7QUFBMEJDO0FBQTFCLFFBQXdDTixHQUFHLENBQUNPLElBQWxEOztBQUVBLFFBQUcsQ0FBQ0osSUFBRCxJQUFTLENBQUNDLEtBQVYsSUFBbUIsQ0FBQ0MsU0FBcEIsSUFBaUMsQ0FBQ0MsU0FBckMsRUFBK0M7QUFDM0NMLFNBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQUssRUFBQztBQUFSLE9BQXJCO0FBQ0E7QUFDSCxLQVB1QixDQVV4Qjs7O0FBQ0EsVUFBTTtBQUFDQztBQUFELFFBQU8sTUFBTUMsK0RBQU8sRUFBMUIsQ0FYd0IsQ0FZeEI7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLE9BQWQsRUFBdUJDLFNBQXZCLENBQWlDO0FBQ3BEWixVQURvRDtBQUVwREMsV0FGb0Q7QUFHcERDLGVBSG9EO0FBSXBEQztBQUpvRCxLQUFqQyxDQUF2QixDQWJ3QixDQW1CeEI7O0FBQ0FMLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSSxRQUFRLENBQUNHLEdBQVQsQ0FBYSxDQUFiLENBQXJCLEVBcEJ3QixDQXNCNUI7QUFDQyxHQXZCRCxNQXVCSztBQUNEO0FBQ0FmLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXJCO0FBQ0g7QUFDSixDQWpDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFiYXNlJ1xuXG5pbnRlcmZhY2UgRXJyb3JSZXNwb25zZVR5cGUge1xuICAgIGVycm9yOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFN1Y2Vzc1Jlc3BvbnNlVHlwZSB7XG4gICAgX2lkOiAgICAgICAgc3RyaW5nLFxuICAgIG5hbWU6ICAgICAgIHN0cmluZyxcbiAgICBjZWxscGhvbmU6ICBzdHJpbmcsXG4gICAgaXNUZWFjaGVyOiAgYm9vbGVhblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsIFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlPEVycm9yUmVzcG9uc2VUeXBlIHwgU3VjZXNzUmVzcG9uc2VUeXBlPlxuKTpQcm9taXNlPHZvaWQ+ID0+IHtcblxuICAgIC8vIFNlIGEgcmVxdWlzacOnw6NvIMOpIGRvIHRpcG8gUE9TVFxuICAgIGlmICggcmVxLm1ldGhvZCA9PT0gJ1BPU1QnICl7XG5cbiAgICAgICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgY2VsbHBob25lLCBpc1RlYWNoZXIgfSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIGlmKCFuYW1lIHx8ICFlbWFpbCB8fCAhY2VsbHBob25lIHx8ICFpc1RlYWNoZXIpe1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjonTWlzc2luZyBib2R5IHBhcmFtZXRlcid9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gQ29uZWN0YS1zZSBhbyBiYW5jbyBkZSBkYWRvc1xuICAgICAgICBjb25zdCB7ZGJ9ID0gYXdhaXQgY29ubmVjdCgpO1xuICAgICAgICAvLyBFeGVjdXRhIGluc2Vyw6fDo28gbmEgY29sbGVjdGlvbiBcInVzZXJzXCJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmluc2VydE9uZSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBjZWxscGhvbmUsXG4gICAgICAgICAgICBpc1RlYWNoZXJcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJldG9ybmEgbmEgcmVzcG9zZSBvIEpTT04gZG8gcmVzcG9uc2VcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2Uub3BzWzBdKTtcblxuICAgIC8vIFNlIGEgcmVxdWlzacOnw6NvIG7Do28gZm9yIGRvIHRpcG8gUE9TVFxuICAgIH1lbHNle1xuICAgICAgICAvLyBSZXRvcm5hIG5hIHJlc3Bvc2UgYSBtZXNzYWdlXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdXcm9uZyByZXF1aXNpdGlvbiBtZXRob2QnfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user.tsx\n");

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