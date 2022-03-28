(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swan_modules/list"],{

/***/ "./node_modules/@onlabsorg/swan-js/lib/modules/list.js":
/*!*************************************************************!*\
  !*** ./node_modules/@onlabsorg/swan-js/lib/modules/list.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n *  list module\n *  ============================================================================\n *  \n *  This module contains functions that operate on the swan List data type.\n */\n \nmodule.exports = types => {\n    const list = {};\n    \n    const undefined_text = new types.Undefined(\"Text\");\n    const undefined_list = new types.Undefined(\"List\");\n\n    const isNumb = x => types.wrap(x) instanceof types.Numb;\n    const isText = x => types.wrap(x) instanceof types.Text;\n    const isList = x => types.wrap(x) instanceof types.List;\n    const isFunc = x => types.wrap(x) instanceof types.Func;\n\n\n    /**\n     *  list.reverse: List l1 -> List l2\n     *  ------------------------------------------------------------------------\n     *  Given a list l1, returns a new list l2, containing the items of l1 in\n     *  reversed order.\n     *  If the argument is not a List item, this function returns Undefined List.\n     *  If the parameter is a tuple, this function applies only to the first\n     *  item and ignore the others.\n     */\n    list.reverse = L => {\n        if (isList(L)) {\n            const rlist = [];\n            for (let i=L.length-1; i>=0; i--) rlist.push(L[i]);\n            return rlist;\n        } else {\n            return undefined_list;\n        }\n    };\n\n    \n    /**\n     *  list.find: Item x -> List L -> Numb k\n     *  ------------------------------------------------------------------------\n     *  Takes an item `x` as argument and returns a function `f`. If the \n     *  argument is a tuple, it applies only to its first item.\n     *  \n     *  The returned function `f`: \n     *  - takes a list `L` as argument and returns the first position of `x` in \n     *    `L` or `-1` if `x` is not contained in `L`.\n     *  - returns Undefined List if the argument of `f` is not a List item\n     *  - applies only on the first item if the parameter of `f` is a tuple\n     */\n    list.find = x => L => isList(L) ? L.indexOf(x) : NaN;\n    \n\n    /**\n    *  list.rfind: Item x -> List L -> Numb k\n    *  ------------------------------------------------------------------------\n    *  Takes an item `x` as argument and returns a function `f`. \n    *  If the argument is a tuple, it applies only to its first item.\n    *  \n    *  The returned function `f`: \n    *  - takes a list `L` as argument and returns the last position of `x` in \n    *    `L` or `-1` if `x` is not contained in `L`.\n    *  - returns Undefined List if the argument of `f` is not a List item\n    *  - applies only on the first item if the parameter of `f` is a tuple\n     */\n    list.rfind = x => L => isList(L) ? L.lastIndexOf(x) : NaN;\n    \n\n    /**\n     *  list.head: Numb n -> List L -> List l\n     *  ------------------------------------------------------------------------\n     *  Takes a number `n` as argument and returns a function `f`. \n     *  If the argument is a tuple, it applies only to its first item.\n     *  \n     *  The returned function `f`: \n     *  - takes a list `L` as argument and returns the sub-list at the left-side \n     *    of the n-th item. If n is negative, the item position is computed as \n     *    relative to the end of `L`.     \n     *  - returns Undefined List if the argument of `f` is not a List item\n     *  - applies only on the first item if the parameter of `f` is a tuple\n     */\n    list.head = n => L => isNumb(n) && isList(L) ? L.slice(0,n) : undefined_list;\n\n    /**\n     *  list.tail: Numb n -> List L -> List l\n     *  ------------------------------------------------------------------------\n     *  Takes a number `n` as argument and returns a function `f`. \n     *  If the argument is a tuple, it applies only to its first item.\n     *  \n     *  The returned function `f`: \n     *  - takes a list `L` as argument and returns the sub-list at the \n     *    right-side of the n-th item (including the latter). If n is negative, \n     *    the item position is computed as relative to the end of `L`.     \n     *  - returns Undefined List if the argument of `f` is not a List item\n     *  - applies only on the first item if the parameter of `f` is a tuple\n     */\n    list.tail = n => L => isNumb(n) && isList(L) ? L.slice(n) : undefined_list;\n\n\n    /**\n     *  list.join: Text s -> List L -> Text S\n     *  ------------------------------------------------------------------------\n     *  Takes a separator `s` as argument and returns a function `f`.\n     *  If the argument is a tuple, it applies only to its first item.\n     *  \n     *  The returned function `f`: \n     *  - takes a List `L` of Text items as argument and returns the string\n     *    obtained by joining all the items with interposed  sparator.\n     *  - returns Undefined List if the argument of `f` is not a List item\n     *  - applies only on the first item if the parameter of `f` is a tuple\n     */\n    list.join = separator => L => {\n        if (!isText(separator)) return undefined_text;\n        for (let value of L) if (!isText(value)) return undefined_text;\n        return L.join(separator);\n    };\n\n\n    return list;   \n}\n\n\n//# sourceURL=webpack:///./node_modules/@onlabsorg/swan-js/lib/modules/list.js?");

/***/ })

}]);