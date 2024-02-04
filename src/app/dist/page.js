"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Home_module_css_1 = require("./Home.module.css");
var material_1 = require("@mui/material");
var Input_1 = require("@/components/Input");
var react_1 = require("react");
var Todos_1 = require("@/components/Todos");
function Home() {
    var _this = this;
    var _a = react_1.useState(""), InputValue = _a[0], setInputValue = _a[1];
    var _b = react_1.useState(false), buttonClicked = _b[0], setButtonClicked = _b[1];
    var _c = react_1.useState([]), ToDos = _c[0], setToDos = _c[1];
    var _d = react_1.useState(false), refresh = _d[0], setRefresh = _d[1];
    react_1.useEffect(function () {
        var addTodo = function () { return __awaiter(_this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!InputValue || !buttonClicked)
                            return [2 /*return*/];
                        return [4 /*yield*/, fetch("http://localhost:3000/api/add-todo?task_name=" + InputValue)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        setToDos(data.todos.rows);
                        setInputValue("");
                        return [2 /*return*/];
                }
            });
        }); };
        addTodo();
        setButtonClicked(false);
    }, [InputValue, buttonClicked]);
    return (React.createElement("main", { className: Home_module_css_1["default"].main },
        React.createElement("div", { className: Home_module_css_1["default"].mainContainer },
            React.createElement(Input_1["default"], { label: "Todo input", className: Home_module_css_1["default"].input, value: InputValue, setInputValue: setInputValue, setRefresh: setRefresh, refresh: refresh }),
            React.createElement(material_1.Button, { variant: "contained", className: Home_module_css_1["default"].button, onClick: function () { return setButtonClicked(function (prev) { return !prev; }); } }, "Add"),
            React.createElement("h1", { className: Home_module_css_1["default"].title },
                "Your To Do's",
                React.createElement("hr", { className: Home_module_css_1["default"].titleLine })),
            React.createElement(Todos_1["default"], { refresh: refresh, ToDos: ToDos, setRefresh: setRefresh, setToDos: setToDos }))));
}
exports["default"] = Home;
