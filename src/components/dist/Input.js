"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Home_module_css_1 = require("../app/Home.module.css");
function Input(_a) {
    var className = _a.className, label = _a.label, value = _a.value, setInputValue = _a.setInputValue, refresh = _a.refresh, setRefresh = _a.setRefresh;
    var handleFocus = function () {
        var placeHolder = document.querySelector("." + Home_module_css_1["default"].inputPlaceHolder);
        if (!placeHolder)
            return;
        placeHolder.style.transform = "translateY(-150%)";
        placeHolder.style.setProperty("color", "#1f8a9c", "important");
    };
    var handleBlur = function () {
        var placeHolder = document.querySelector("." + Home_module_css_1["default"].inputPlaceHolder);
        if (!placeHolder)
            return;
        placeHolder.style.setProperty("color", "white", "important");
        if (value !== "")
            return;
        placeHolder.style.transform = "translateY(0%)";
    };
    react_1.useEffect(function () {
        if (!refresh)
            return;
        setInputValue("");
    }, [refresh, setInputValue]);
    var handleInput = function (event) {
        setInputValue(event.target.value);
    };
    return (React.createElement("div", { className: Home_module_css_1["default"].inputContainer },
        React.createElement("input", { className: className, type: "text", onFocus: handleFocus, onBlur: handleBlur, onInput: handleInput, value: value }),
        React.createElement("p", { className: Home_module_css_1["default"].inputPlaceHolder }, label)));
}
exports["default"] = Input;
