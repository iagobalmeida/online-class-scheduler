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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/user/[id].tsx":
/*!*********************************!*\
  !*** ./pages/api/user/[id].tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/database */ \"./utils/database.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  // GET  - Retorna usuário por email\n  if (req.method == 'GET') {\n    // Pega informações do body da requisição e valida\n    const id = req.query.id;\n    const regexObjectId = new RegExp(\"^[0-9a-fA-F]{24}$\");\n\n    if (!id || !regexObjectId.test(id)) {\n      res.status(400).json({\n        error: 'Wrong id format'\n      });\n      return;\n    } // Conecta-se ao banco de dados\n\n\n    const {\n      db\n    } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const response = await db.collection('users').findOne({\n      _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectId\"](id)\n    });\n    res.status(response ? 200 : 400).json(response ? response : {\n      error: `User with id '${id}' not found`\n    });\n  } // ??? - Retorna erro\n  else {\n      res.status(400).json({\n        error: 'Wrong requisition method'\n      });\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci8udHN4PzRjNzgiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwiaWQiLCJxdWVyeSIsInJlZ2V4T2JqZWN0SWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZGIiLCJjb25uZWN0IiwicmVzcG9uc2UiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsIl9pZCIsIk9iamVjdElkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFvQmUsc0VBQ1hBLEdBRFcsRUFFWEMsR0FGVyxLQUdJO0FBQ2Y7QUFDQSxNQUFLRCxHQUFHLENBQUNFLE1BQUosSUFBYyxLQUFuQixFQUEwQjtBQUV0QjtBQUNBLFVBQU1DLEVBQUUsR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVVELEVBQXJCO0FBQ0EsVUFBTUUsYUFBYSxHQUFHLElBQUlDLE1BQUosQ0FBVyxtQkFBWCxDQUF0Qjs7QUFDQSxRQUFHLENBQUNILEVBQUQsSUFBTyxDQUFDRSxhQUFhLENBQUNFLElBQWQsQ0FBbUJKLEVBQW5CLENBQVgsRUFBa0M7QUFBRUYsU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsYUFBSyxFQUFFO0FBQVIsT0FBckI7QUFBa0Q7QUFBUyxLQUx6RSxDQU90Qjs7O0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVcsTUFBTUMsK0RBQU8sRUFBOUI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUYsRUFBRSxDQUFDRyxVQUFILENBQWMsT0FBZCxFQUF1QkMsT0FBdkIsQ0FBK0I7QUFBQ0MsU0FBRyxFQUFFLElBQUlDLGdEQUFKLENBQWFkLEVBQWI7QUFBTixLQUEvQixDQUF2QjtBQUNBRixPQUFHLENBQUNPLE1BQUosQ0FBV0ssUUFBUSxHQUFHLEdBQUgsR0FBUyxHQUE1QixFQUFpQ0osSUFBakMsQ0FBc0NJLFFBQVEsR0FBR0EsUUFBSCxHQUFjO0FBQUNILFdBQUssRUFBRyxpQkFBZ0JQLEVBQUc7QUFBNUIsS0FBNUQ7QUFDSCxHQVhELENBWUE7QUFaQSxPQWFJO0FBQ0FGLFNBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0g7QUFFSixDQXRCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VyL1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JqZWN0SWQsIE9iamVjdElEIH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgY29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYXRhYmFzZSdcblxuaW50ZXJmYWNlIEVycm9yUmVzcG9uc2VUeXBlIHtcbiAgICBlcnJvcjogc3RyaW5nXG59XG5cbmludGVyZmFjZSBTdWNlc3NSZXNwb25zZVR5cGUge1xuICAgIF9pZDogICAgICAgICAgICAgICAgICAgIHN0cmluZyxcbiAgICBwYXNzd29yZDogICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgbmFtZTogICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgIGNlbGxwaG9uZTogICAgICAgICAgICAgIHN0cmluZyxcbiAgICBpc1RlYWNoZXI6ICAgICAgICAgICAgICBib29sZWFuXG4gICAgY291cnNlczogICAgICAgICAgICAgICAgc3RyaW5nW10sXG4gICAgYXZhaWxhYmxlX2hvdXJzOiAgICAgICAgb2JqZWN0LFxuICAgIGF2YWlsYWJsZV9sb2NhdGlvbnM6ICAgIG9iamVjdFtdLFxuICAgIGFwcG9pbnRtZW50czogICAgICAgICAgIG9iamVjdFtdLFxuICAgIGNvaW5zOiAgICAgICAgICAgICAgICAgIG51bWJlcixcbiAgICByZXZpZXdzOiAgICAgICAgICAgICAgICBudW1iZXJbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyhcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LCBcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxFcnJvclJlc3BvbnNlVHlwZSB8IFN1Y2Vzc1Jlc3BvbnNlVHlwZT5cbik6UHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgLy8gR0VUICAtIFJldG9ybmEgdXN1w6FyaW8gcG9yIGVtYWlsXG4gICAgaWYgKCByZXEubWV0aG9kID09ICdHRVQnICl7XG5cbiAgICAgICAgLy8gUGVnYSBpbmZvcm1hw6fDtWVzIGRvIGJvZHkgZGEgcmVxdWlzacOnw6NvIGUgdmFsaWRhXG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnF1ZXJ5LmlkIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcmVnZXhPYmplY3RJZCA9IG5ldyBSZWdFeHAoXCJeWzAtOWEtZkEtRl17MjR9JFwiKVxuICAgICAgICBpZighaWQgfHwgIXJlZ2V4T2JqZWN0SWQudGVzdChpZCkpeyByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3I6ICdXcm9uZyBpZCBmb3JtYXQnfSk7IHJldHVybjsgfVxuXG4gICAgICAgIC8vIENvbmVjdGEtc2UgYW8gYmFuY28gZGUgZGFkb3NcbiAgICAgICAgY29uc3QgeyBkYiB9ICAgPSBhd2FpdCBjb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKHtfaWQ6IG5ldyBPYmplY3RJZChpZCl9KTtcbiAgICAgICAgcmVzLnN0YXR1cyhyZXNwb25zZSA/IDIwMCA6IDQwMCkuanNvbihyZXNwb25zZSA/IHJlc3BvbnNlIDoge2Vycm9yOiBgVXNlciB3aXRoIGlkICcke2lkfScgbm90IGZvdW5kYH0pOyAgICAgICAgXG4gICAgfVxuICAgIC8vID8/PyAtIFJldG9ybmEgZXJyb1xuICAgIGVsc2V7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdXcm9uZyByZXF1aXNpdGlvbiBtZXRob2QnIH0pO1xuICAgIH1cbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/user/[id].tsx\n");

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