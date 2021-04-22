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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/database */ \"./utils/database.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  // POST  - Adiciona usuário\n  if (req.method == 'POST') {\n    // Pega informações do body da requisição e valida\n    const {\n      name,\n      password,\n      email,\n      cellphone,\n      isTeacher,\n      courses,\n      available_hours,\n      available_locations,\n      appointments,\n      coins,\n      reviews\n    } = req.body;\n\n    if (!name || !password || !email || !cellphone || isTeacher == undefined) {\n      res.status(400).json({\n        error: 'Missing body parameter'\n      });\n      return;\n    } // Conecta-se ao banco de dados\n\n\n    const {\n      db\n    } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const response = await db.collection('users').insertOne({\n      name: name,\n      password: password,\n      email: email,\n      cellphone: cellphone,\n      isTeacher: isTeacher,\n      courses: courses ? courses : [],\n      available_hours: available_hours ? available_hours : {},\n      available_locations: available_locations ? available_locations : [],\n      appointments: appointments ? appointments : [],\n      coins: coins ? coins : 0,\n      reviews: reviews ? reviews : []\n    });\n    res.status(200).json(response.ops[0]);\n  } // ??? - Retorna erro\n  else {\n      res.status(400).json({\n        error: 'Wrong requisition method'\n      });\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci50c3g/NmM1YiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsImNlbGxwaG9uZSIsImlzVGVhY2hlciIsImNvdXJzZXMiLCJhdmFpbGFibGVfaG91cnMiLCJhdmFpbGFibGVfbG9jYXRpb25zIiwiYXBwb2ludG1lbnRzIiwiY29pbnMiLCJyZXZpZXdzIiwiYm9keSIsInVuZGVmaW5lZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImRiIiwiY29ubmVjdCIsInJlc3BvbnNlIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsIm9wcyJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBb0JlLHNFQUNYQSxHQURXLEVBRVhDLEdBRlcsS0FHSTtBQUNmO0FBQ0EsTUFBS0QsR0FBRyxDQUFDRSxNQUFKLElBQWMsTUFBbkIsRUFBMEI7QUFDdEI7QUFDQSxVQUFNO0FBQUVDLFVBQUY7QUFBUUMsY0FBUjtBQUFrQkMsV0FBbEI7QUFBeUJDLGVBQXpCO0FBQW9DQyxlQUFwQztBQUErQ0MsYUFBL0M7QUFBd0RDLHFCQUF4RDtBQUF5RUMseUJBQXpFO0FBQThGQyxrQkFBOUY7QUFBNEdDLFdBQTVHO0FBQW1IQztBQUFuSCxRQUErSGIsR0FBRyxDQUFDYyxJQUF6STs7QUFDQSxRQUFHLENBQUNYLElBQUQsSUFBUyxDQUFDQyxRQUFWLElBQXNCLENBQUNDLEtBQXZCLElBQWdDLENBQUNDLFNBQWpDLElBQStDQyxTQUFTLElBQUlRLFNBQS9ELEVBQTJFO0FBQUVkLFNBQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQUssRUFBQztBQUFSLE9BQXJCO0FBQXlEO0FBQVMsS0FIekgsQ0FLdEI7OztBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFXLE1BQU1DLCtEQUFPLEVBQTlCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLE9BQWQsRUFBdUJDLFNBQXZCLENBQWlDO0FBQ3BEcEIsVUFBSSxFQUFvQkEsSUFENEI7QUFFcERDLGNBQVEsRUFBZ0JBLFFBRjRCO0FBR3BEQyxXQUFLLEVBQW1CQSxLQUg0QjtBQUlwREMsZUFBUyxFQUFlQSxTQUo0QjtBQUtwREMsZUFBUyxFQUFlQSxTQUw0QjtBQU1wREMsYUFBTyxFQUFpQkEsT0FBTyxHQUFlQSxPQUFmLEdBQXFDLEVBTmhCO0FBT3BEQyxxQkFBZSxFQUFTQSxlQUFlLEdBQU9BLGVBQVAsR0FBNkIsRUFQaEI7QUFRcERDLHlCQUFtQixFQUFLQSxtQkFBbUIsR0FBR0EsbUJBQUgsR0FBeUIsRUFSaEI7QUFTcERDLGtCQUFZLEVBQWFBLFlBQVksR0FBU0EsWUFBVCxHQUErQixFQVRoQjtBQVVwREMsV0FBSyxFQUFtQkEsS0FBSyxHQUFpQkEsS0FBakIsR0FBdUMsQ0FWaEI7QUFXcERDLGFBQU8sRUFBaUJBLE9BQU8sR0FBZUEsT0FBZixHQUFxQztBQVhoQixLQUFqQyxDQUF2QjtBQWFBWixPQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkksUUFBUSxDQUFDRyxHQUFULENBQWEsQ0FBYixDQUFyQjtBQUNILEdBckJELENBc0JBO0FBdEJBLE9BdUJJO0FBQ0F2QixTQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFyQjtBQUNIO0FBRUosQ0FoQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi4vLi4vdXRpbHMvZGF0YWJhc2UnXG5cbmludGVyZmFjZSBFcnJvclJlc3BvbnNlVHlwZSB7XG4gICAgZXJyb3I6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgU3VjZXNzUmVzcG9uc2VUeXBlIHtcbiAgICBfaWQ6ICAgICAgICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6ICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgIG5hbWU6ICAgICAgICAgICAgICAgICAgIHN0cmluZyxcbiAgICBjZWxscGhvbmU6ICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgaXNUZWFjaGVyOiAgICAgICAgICAgICAgYm9vbGVhblxuICAgIGNvdXJzZXM6ICAgICAgICAgICAgICAgIHN0cmluZ1tdLFxuICAgIGF2YWlsYWJsZV9ob3VyczogICAgICAgIG9iamVjdCxcbiAgICBhdmFpbGFibGVfbG9jYXRpb25zOiAgICBvYmplY3RbXSxcbiAgICBhcHBvaW50bWVudHM6ICAgICAgICAgICBvYmplY3RbXSxcbiAgICBjb2luczogICAgICAgICAgICAgICAgICBudW1iZXIsXG4gICAgcmV2aWV3czogICAgICAgICAgICAgICAgbnVtYmVyW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCwgXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RXJyb3JSZXNwb25zZVR5cGUgfCBTdWNlc3NSZXNwb25zZVR5cGU+XG4pOlByb21pc2U8dm9pZD4gPT4ge1xuICAgIC8vIFBPU1QgIC0gQWRpY2lvbmEgdXN1w6FyaW9cbiAgICBpZiAoIHJlcS5tZXRob2QgPT0gJ1BPU1QnKXtcbiAgICAgICAgLy8gUGVnYSBpbmZvcm1hw6fDtWVzIGRvIGJvZHkgZGEgcmVxdWlzacOnw6NvIGUgdmFsaWRhXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcGFzc3dvcmQsIGVtYWlsLCBjZWxscGhvbmUsIGlzVGVhY2hlciwgY291cnNlcywgYXZhaWxhYmxlX2hvdXJzLCBhdmFpbGFibGVfbG9jYXRpb25zLCBhcHBvaW50bWVudHMsIGNvaW5zLCByZXZpZXdzIH0gPSByZXEuYm9keTtcbiAgICAgICAgaWYoIW5hbWUgfHwgIXBhc3N3b3JkIHx8ICFlbWFpbCB8fCAhY2VsbHBob25lIHx8IChpc1RlYWNoZXIgPT0gdW5kZWZpbmVkKSkgeyByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOidNaXNzaW5nIGJvZHkgcGFyYW1ldGVyJ30pOyByZXR1cm47IH1cbiAgICAgICAgXG4gICAgICAgIC8vIENvbmVjdGEtc2UgYW8gYmFuY28gZGUgZGFkb3NcbiAgICAgICAgY29uc3QgeyBkYiB9ICAgPSBhd2FpdCBjb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5pbnNlcnRPbmUoe1xuICAgICAgICAgICAgbmFtZTogICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgZW1haWw6ICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBjZWxscGhvbmU6ICAgICAgICAgICAgICBjZWxscGhvbmUsXG4gICAgICAgICAgICBpc1RlYWNoZXI6ICAgICAgICAgICAgICBpc1RlYWNoZXIsXG4gICAgICAgICAgICBjb3Vyc2VzOiAgICAgICAgICAgICAgICBjb3Vyc2VzICAgICAgICAgICAgID8gY291cnNlcyA6ICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgYXZhaWxhYmxlX2hvdXJzOiAgICAgICAgYXZhaWxhYmxlX2hvdXJzICAgICA/IGF2YWlsYWJsZV9ob3VycyA6ICAgICB7fSxcbiAgICAgICAgICAgIGF2YWlsYWJsZV9sb2NhdGlvbnM6ICAgIGF2YWlsYWJsZV9sb2NhdGlvbnMgPyBhdmFpbGFibGVfbG9jYXRpb25zIDogW10sXG4gICAgICAgICAgICBhcHBvaW50bWVudHM6ICAgICAgICAgICAgYXBwb2ludG1lbnRzICAgICAgID8gYXBwb2ludG1lbnRzIDogICAgICAgIFtdLFxuICAgICAgICAgICAgY29pbnM6ICAgICAgICAgICAgICAgICAgY29pbnMgICAgICAgICAgICAgICA/IGNvaW5zIDogICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgcmV2aWV3czogICAgICAgICAgICAgICAgcmV2aWV3cyAgICAgICAgICAgICA/IHJldmlld3MgOiAgICAgICAgICAgICBbXVxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2Uub3BzWzBdKTtcbiAgICB9XG4gICAgLy8gPz8/IC0gUmV0b3JuYSBlcnJvXG4gICAgZWxzZXtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1dyb25nIHJlcXVpc2l0aW9uIG1ldGhvZCcgfSk7XG4gICAgfVxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user.tsx\n");

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