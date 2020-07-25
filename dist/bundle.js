/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React from \"react\";\n// import GroceryItem from \"./GroceryItem\";\n// import axios from \"axios\";\n// export default class App extends React.Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {\n//       gList: [],\n//       listItem: \"\",\n//     };\n//     this.addItem = this.addItem.bind(this);\n//     this.updateItem = this.updateItem.bind(this);\n//   }\n//   componentDidMount() {\n//     axios\n//       .get(\"/get\")\n//       .then((res) => {\n//         let array = [];\n//         console.log(res.data);\n//         for (let i = 0; i < res.data.length; i++) {\n//           array.push(res.data[i].itemName);\n//         }\n//         console.log(array);\n//         this.setState({\n//           gList: [...this.state.gList, ...array],\n//         });\n//       })\n//       .catch((err) => {\n//         console.log(err);\n//       });\n//   }\n//   addItem() {\n//     let obj = this.state.listItem;\n//     axios.post(\"/post\", { obj }).then((res) => {\n//       this.setState({\n//         gList: [...this.state.gList, this.state.listItem],\n//         listItem: \"\",\n//       });\n//     });\n//   }\n//   updateItem(event) {console.log(event.target.value);\n//     event.preventDefault();\n//     this.setState({\n//       listItem: event.target.value,\n//     });\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <input onChange={this.updateItem} placeholder=\"Add Item\" />\n//         <button onClick={this.addItem}>Submit</button>\n//         <ul>\n//           <GroceryItem stuff={this.state.gList} />\n//         </ul>\n//       </div>\n//     );\n//   }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanM/MTk0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgR3JvY2VyeUl0ZW0gZnJvbSBcIi4vR3JvY2VyeUl0ZW1cIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG4vLyAgICAgdGhpcy5zdGF0ZSA9IHtcbi8vICAgICAgIGdMaXN0OiBbXSxcbi8vICAgICAgIGxpc3RJdGVtOiBcIlwiLFxuLy8gICAgIH07XG4vLyAgICAgdGhpcy5hZGRJdGVtID0gdGhpcy5hZGRJdGVtLmJpbmQodGhpcyk7XG4vLyAgICAgdGhpcy51cGRhdGVJdGVtID0gdGhpcy51cGRhdGVJdGVtLmJpbmQodGhpcyk7XG4vLyAgIH1cblxuLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICBheGlvc1xuLy8gICAgICAgLmdldChcIi9nZXRcIilcbi8vICAgICAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMuZGF0YS5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgIGFycmF5LnB1c2gocmVzLmRhdGFbaV0uaXRlbU5hbWUpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICAgICAgZ0xpc3Q6IFsuLi50aGlzLnN0YXRlLmdMaXN0LCAuLi5hcnJheV0sXG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSlcbi8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4vLyAgICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIGFkZEl0ZW0oKSB7XG4vLyAgICAgbGV0IG9iaiA9IHRoaXMuc3RhdGUubGlzdEl0ZW07XG4vLyAgICAgYXhpb3MucG9zdChcIi9wb3N0XCIsIHsgb2JqIH0pLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICAgIGdMaXN0OiBbLi4udGhpcy5zdGF0ZS5nTGlzdCwgdGhpcy5zdGF0ZS5saXN0SXRlbV0sXG4vLyAgICAgICAgIGxpc3RJdGVtOiBcIlwiLFxuLy8gICAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyAgIH1cblxuLy8gICB1cGRhdGVJdGVtKGV2ZW50KSB7Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgbGlzdEl0ZW06IGV2ZW50LnRhcmdldC52YWx1ZSxcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUl0ZW19IHBsYWNlaG9sZGVyPVwiQWRkIEl0ZW1cIiAvPlxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkSXRlbX0+U3VibWl0PC9idXR0b24+XG4vLyAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICA8R3JvY2VyeUl0ZW0gc3R1ZmY9e3RoaXMuc3RhdGUuZ0xpc3R9IC8+XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB94oCp4oCpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/index.js\n");

/***/ })

/******/ });