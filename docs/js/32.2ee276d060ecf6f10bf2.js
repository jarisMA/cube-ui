webpackJsonp([32],{454:function(s,t,a){s.exports=a(515)},515:function(s,t,a){var v=a(11)(null,a(516),null,null,null);s.exports=v.exports},516:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Picker")]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("Picker")]),s._v(" component supports multi-column selectors and linkage data.")]),s._v(" "),a("h3",[s._v("Example")]),s._v(" "),a("ul",[a("li",[s._v("Basic usage")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showPicker"')]),s._v(">")]),s._v("Picker"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" col1Data = [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'剧毒'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'剧毒'")]),s._v("}, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚂蚁'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚂蚁'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'幽鬼'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'幽鬼'")]),s._v(" }]\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  mounted () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createPicker({\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Picker selectors - single column'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [col1Data],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onSelect")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("selectedText, selectedIndex")]),s._v(") =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createDialog({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'warn'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`selected content："),a("span",{attrs:{class:"hljs-subst"}},[s._v("${selectedText.join("),a("span",{attrs:{class:"hljs-string"}},[s._v("','")]),s._v(")}")]),s._v(" <br/> selected index： "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${selectedIndex.join("),a("span",{attrs:{class:"hljs-string"}},[s._v("','")]),s._v(")}")]),s._v("`")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'cubeic-alert'")]),s._v("\n        }).show()\n      },\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onCancel")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'correct'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Clicked cancel button'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n        }).show()\n      }\n    })\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showPicker () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker.show()\n    }\n  }\n}\n")])]),s._v(" "),a("ul",[a("li",[s._v("Multi-column selectors")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showPicker"')]),s._v(">")]),s._v("Picker - multiple Columns"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" col1Data = [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'剧毒'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'剧毒'")]),s._v("}, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚂蚁'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚂蚁'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'幽鬼'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'幽鬼'")]),s._v(" }]\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" col2Data = [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'输出'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'输出'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'控制'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'控制'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'核心'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'核心'")]),s._v("\n}, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'爆发'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'爆发'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'辅助'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'辅助'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'打野'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'打野'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'逃生'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'逃生'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'先手'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'先手'")]),s._v(" }]\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" col3Data =  [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'梅肯'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'梅肯'")]),s._v("}, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'秘法鞋'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'秘法鞋'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'假腿'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'假腿'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'飞鞋'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'飞鞋'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'辉耀'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'辉耀'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'金箍棒'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'金箍棒'")]),s._v(" }]\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  mounted () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createPicker({\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Picker selectors - multiple columns'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [col1Data, col2Data, col3Data]\n    })\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showPicker () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker.show()\n    }\n  }\n}\n")])]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("data")]),s._v(" receives an array, whose length determines the columns of "),a("code",{pre:!0},[s._v("picker")]),s._v(".")]),s._v(" "),a("ul",[a("li",[s._v("Linkage selectors")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showPicker"')]),s._v(">")]),s._v("Picker - linkage"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { provinceList, cityList, areaList } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'../data/area'")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tempIndex")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]\n    }\n  },\n  mounted () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createPicker({\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Picker - linkage data'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".linkageData,\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onChange")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("i, newIndex")]),s._v(") =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (newIndex !== "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tempIndex[i]) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" j = "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("; j > i; j--) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tempIndex.splice(j, "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker.scrollTo(j, "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n          }\n\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tempIndex.splice(i, "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", newIndex)\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker.setData("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".linkageData, "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tempIndex)\n        }\n      },\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onSelect")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("selectedText, selectedIndex")]),s._v(") =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createDialog({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'warn'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`selected content："),a("span",{attrs:{class:"hljs-subst"}},[s._v("${selectedText.join("),a("span",{attrs:{class:"hljs-string"}},[s._v("','")]),s._v(")}")]),s._v(" <br/> selected index： "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${selectedIndex.join("),a("span",{attrs:{class:"hljs-string"}},[s._v("','")]),s._v(")}")]),s._v("`")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'cubeic-alert'")]),s._v("\n        }).show()\n      },\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onCancel")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'correct'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Clicked cancel button'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n        }).show()\n      }\n    })\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n    linkageData() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker.refresh()\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n    linkageData() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" provinces = provinceList\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" cities = cityList[provinces["),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tempIndex["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]].value]\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" areas = areaList[cities["),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tempIndex["),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]].value]\n\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" [provinces, cities, areas]\n    }\n  }\n  methods: {\n    showPicker () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker.show()\n    }\n  }\n}\n")])]),s._v(" "),a("p",[s._v("By monitoring the "),a("code",{pre:!0},[s._v("change")]),s._v(" event triggered by each roller and invoke "),a("code",{pre:!0},[s._v("setData")]),s._v(" method to dynamicly set values of associated rollers to accomplish linkage selectors.")]),s._v(" "),a("ul",[a("li",[s._v("Instance method "),a("code",{pre:!0},[s._v("setData")])])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showPicker"')]),s._v(">")]),s._v("Picker - setData"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" col1Data = [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'剧毒'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'剧毒'")]),s._v("}, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚂蚁'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚂蚁'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'幽鬼'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'幽鬼'")]),s._v(" }]\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" col2Data = [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'梅肯'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'梅肯'")]),s._v("}, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'秘法鞋'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'秘法鞋'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'假腿'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'假腿'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'飞鞋'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'飞鞋'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'辉耀'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'辉耀'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'金箍棒'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'金箍棒'")]),s._v(" }]\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" col3Data = [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'输出'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'输出'")]),s._v("}, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'控制'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'控制'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'核心'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'核心'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'爆发'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'爆发'")]),s._v("}, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'辅助'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'辅助'")]),s._v(" }]\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  mounted () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createPicker({\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Picker-setData'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onSelect")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("selectedText, selectedIndex")]),s._v(") =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createDialog({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'warn'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`selected content："),a("span",{attrs:{class:"hljs-subst"}},[s._v("${selectedText.join("),a("span",{attrs:{class:"hljs-string"}},[s._v("','")]),s._v(")}")]),s._v(" <br/> selectedIndex： "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${selectedIndex.join("),a("span",{attrs:{class:"hljs-string"}},[s._v("','")]),s._v(")}")]),s._v("`")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'cubeic-alert'")]),s._v("\n        }).show()\n      },\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onCancel")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'correct'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Clicked cancel button'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n        }).show()\n      }\n    })\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showPicker () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker.setData([col1Data, col2Data, col3Data], ["),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v("])\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".picker.show()\n    }\n  }\n}\n")])]),s._v(" "),a("p",[s._v("Instance method "),a("code",{pre:!0},[s._v("setData")]),s._v(" accepts two parameters, both of whom are arrays. The first is data that the roller displays and the second is indexs of selected values.")]),s._v(" "),a("h3",[s._v("Props configuration")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Accepted Values")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("title")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("''")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("data")]),s._v(" "),a("td",[s._v("data that passed into picker, whose length determines the columns of picker")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("[]")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("cancelTxt")]),s._v(" "),a("td",[s._v("the text of the left button in picker")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("'取消'")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("confirmTxt")]),s._v(" "),a("td",[s._v("the text of the right button in picker")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("'确定'")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("selectIndex")]),s._v(" "),a("td",[s._v("the index of the selected value, corresponding content will be displayed when picker shows")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("[]")]),s._v(" "),a("td",[s._v("[1]")])])])]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("data")]),s._v(" sub configuration")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")]),s._v(" "),a("th",[s._v("Example")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("text")]),s._v(" "),a("td",[s._v("the text displayed in each column of picker")]),s._v(" "),a("td",[s._v("String/Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("corresponding value of the text displayed in each column of picker")]),s._v(" "),a("td",[s._v("String/Number/Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])])])]),s._v(" "),a("h3",[s._v("Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Event Name")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Parameters 1")]),s._v(" "),a("th",[s._v("Parameters 2")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("select")]),s._v(" "),a("td",[s._v("triggers when clicking the confirm button")]),s._v(" "),a("td",[s._v("selectedVal: Array, values of each columns in current selected item")]),s._v(" "),a("td",[s._v("selectedIndex: Array, indexes of each columns in current selected item")])]),s._v(" "),a("tr",[a("td",[s._v("change")]),s._v(" "),a("td",[s._v("triggers when the roller scrolls")]),s._v(" "),a("td",[s._v("index: Number, index of current scrolling roller")]),s._v(" "),a("td",[s._v("selectedIndex: Number, index of selected item in current column")])]),s._v(" "),a("tr",[a("td",[s._v("value-change")]),s._v(" "),a("td",[s._v("triggers when confirmed value changes")]),s._v(" "),a("td",[s._v("selectedVal: Array, values of each columns in current confirmed item")]),s._v(" "),a("td",[s._v("selectedIndex: Array, indexes of each columns in current confirmed item")])]),s._v(" "),a("tr",[a("td",[s._v("cancel")]),s._v(" "),a("td",[s._v("triggers when clicking the cancel button")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])])])]),s._v(" "),a("h3",[s._v("Instance methods")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Method name")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Parameters 1")]),s._v(" "),a("th",[s._v("Parameters 2")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("setData")]),s._v(" "),a("td",[s._v("set options in picker")]),s._v(" "),a("td",[s._v("Array, texts and values of options of each columns of picker")]),s._v(" "),a("td",[s._v("Array, indexes of selected item in each column of picker")])])])])])}]}}});